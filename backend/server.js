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

const dbState = { connected: false, error: null };

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
    database: dbState.connected ? "connected" : "disconnected",
    databaseError: dbState.error,
  });
});

// Block DB-backed routes until the database is ready
app.use(["/api/auth", "/api/contact", "/api/inquiries"], (req, res, next) => {
  if (!dbState.connected) {
    return res.status(503).json({ error: "Database not available, please try again shortly" });
  }
  next();
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

async function connectDatabase(attempt = 1) {
  const RETRY_MS = Math.min(30000, 2000 * attempt);

  try {
    console.log(`\n  [2/3] Connecting to MySQL database... (attempt ${attempt})`);
    await initDatabase();

    const pool = getPool();
    const [rows] = await pool.query("SELECT COUNT(*) as count FROM inquiries");
    const inquiryCount = rows[0].count;

    dbState.connected = true;
    dbState.error = null;
    console.log(`  [3/3] Database connected (${inquiryCount} inquiries)`);
    printBanner(PORT, `OK (${inquiryCount} rows)`);
  } catch (err) {
    dbState.connected = false;
    dbState.error = err.code || err.message;
    console.error("  ✗  Database connection failed:", err.code || "", err.message);
    if (err.code === "ER_ACCESS_DENIED_ERROR") {
      console.error("     Check DB_USER / DB_PASSWORD environment variables");
    } else if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND" || err.code === "ETIMEDOUT") {
      console.error(
        `     Cannot reach MySQL at ${process.env.DATABASE_URL ? "DATABASE_URL" : `${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || 3306}`}.` +
          " Set DATABASE_URL or DB_HOST/DB_PORT/DB_USER/DB_PASSWORD/DB_NAME to a reachable MySQL server."
      );
    }
    console.error(`     Retrying in ${RETRY_MS / 1000}s...`);
    setTimeout(() => connectDatabase(attempt + 1), RETRY_MS);
  }
}

function startServer() {
  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n  [1/3] Server started on port ${PORT}`);
    connectDatabase();
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`\n  ✗  Port ${PORT} is already in use. Set a different PORT env variable.\n`);
    } else {
      console.error("Server error:", err);
    }
    process.exit(1);
  });

  const shutdown = (signal) => {
    console.log(`\n  ${signal} received. Shutting down gracefully...`);
    server.close(() => {
      console.log("  Server closed. Goodbye!\n");
      process.exit(0);
    });
  };
  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

startServer();
