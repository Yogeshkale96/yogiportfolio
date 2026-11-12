import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { initDatabase, getPool } from "./db.js";
import authRoutes from "./routes/auth.js";
import inquiryRoutes from "./routes/inquiries.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// CORS - allow frontend
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(morgan("dev"));

// Serve admin dashboard (static HTML fallback)
app.use("/admin-panel", express.static(path.join(__dirname, "public")));

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Portfolio backend is running",
    port: PORT,
    database: "portfolio_inquiries",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", inquiryRoutes);
app.use("/api/inquiries", inquiryRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

/* =====================================================
   STARTUP - with clear status output and retry logic
===================================================== */

function printBanner(port, dbStatus) {
  console.log("");
  console.log("  ╔══════════════════════════════════════════════╗");
  console.log("  ║   YSK Portfolio Backend                        ║");
  console.log("  ╠══════════════════════════════════════════════╣");
  console.log(`  ║   Server:  http://localhost:${port}            ║`);
  console.log(`  ║   Database: ${dbStatus.padEnd(33)}║`);
  console.log("  ║   Admin:   http://localhost:" + port + "/admin-panel   ║");
  console.log("  ║   Health:  http://localhost:" + port + "/api/health  ║");
  console.log("  ╚══════════════════════════════════════════════╝");
  console.log("");
  console.log("  Endpoints:");
  console.log("    POST /api/contact/inquiry    (public - submit inquiry)");
  console.log("    POST /api/auth/login          (admin login)");
  console.log("    GET  /api/inquiries           (admin - list all)");
  console.log("    GET  /api/inquiries?type=X     (admin - filter by type)");
  console.log("    GET  /api/inquiries/stats      (admin - counts)");
  console.log("");
}

async function startServer(attempt = 0) {
  const MAX_ATTEMPTS = 3;

  try {
    // 1. Initialize database
    console.log("\n  [1/3] Connecting to MySQL database...");
    await initDatabase();

    // 2. Verify database connection with a test query
    const pool = getPool();
    const [rows] = await pool.query("SELECT COUNT(*) as count FROM inquiries");
    const inquiryCount = rows[0].count;
    console.log(`  [2/3] Database connected: portfolio_inquiries (${inquiryCount} inquiries)`);

    // 3. Start server
    const server = app.listen(PORT, () => {
      console.log(`  [3/3] Server started on port ${PORT}`);
      printBanner(PORT, `portfolio_inquiries OK (${inquiryCount} rows)`);
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        if (attempt < MAX_ATTEMPTS) {
          console.log(`\n  ⚠  Port ${PORT} busy, retrying in 3 seconds... (attempt ${attempt + 1}/${MAX_ATTEMPTS})`);
          setTimeout(() => startServer(attempt + 1), 3000);
        } else {
          console.error(`\n  ✗  Port ${PORT} still in use after ${MAX_ATTEMPTS} attempts.`);
          console.error(`     Run on a different port:  $env:PORT=5001; npm run server\n`);
          process.exit(1);
        }
      } else {
        console.error("Server error:", err);
        process.exit(1);
      }
    });

    // Graceful shutdown
    const shutdown = (signal) => {
      console.log(`\n  ${signal} received. Shutting down gracefully...`);
      server.close(() => {
        console.log("  Server closed. Goodbye!\n");
        process.exit(0);
      });
    };
    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (err) {
    console.error("\n  ✗  Startup failed:", err.message);
    if (err.code === "ER_ACCESS_DENIED_ERROR") {
      console.error("     Check DB_PASSWORD in .env file");
    } else if (err.code === "ECONNREFUSED") {
      console.error("     MySQL service is not running. Start it: net start MySQL80");
    }
    console.error("");
    process.exit(1);
  }
}

startServer();
