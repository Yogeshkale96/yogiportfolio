import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let pool = null;

function getBaseConfig() {
  const ssl =
    process.env.DB_SSL === "true"
      ? { rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false" }
      : undefined;

  if (process.env.DATABASE_URL) {
    const url = new URL(process.env.DATABASE_URL);
    return {
      host: url.hostname,
      port: Number(url.port || 3306),
      user: decodeURIComponent(url.username),
      password: decodeURIComponent(url.password),
      database: url.pathname.replace(/^\//, "") || process.env.DB_NAME || "portfolio_inquiries",
      ssl,
      connectTimeout: 10000,
    };
  }

  return {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "portfolio_inquiries",
    ssl,
    connectTimeout: 10000,
  };
}

export function getPool() {
  if (pool) return pool;

  pool = mysql.createPool({
    ...getBaseConfig(),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
  });

  return pool;
}

export async function initDatabase() {
  // First connect without database to create it if it doesn't exist
  const { database: dbName, ...serverConfig } = getBaseConfig();
  const conn = await mysql.createConnection(serverConfig);

  try {
    await conn.query(
      `CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
    );
  } catch (createErr) {
    // Managed MySQL hosts often pre-create the DB and deny CREATE DATABASE
    console.log(`  (skipping CREATE DATABASE: ${createErr.code || createErr.message})`);
  } finally {
    await conn.end();
  }

  const p = getPool();

  // Inquiries table - stores all inquiry types
  await p.query(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      inquiry_type ENUM('project','freelance','consultation','other','whatsapp','email','phone') NOT NULL,
      name VARCHAR(150) NOT NULL,
      email VARCHAR(150) NOT NULL,
      phone VARCHAR(30) DEFAULT NULL,
      company VARCHAR(150) DEFAULT NULL,

      project_type VARCHAR(100) DEFAULT NULL,
      technology VARCHAR(100) DEFAULT NULL,
      budget VARCHAR(100) DEFAULT NULL,
      timeline VARCHAR(100) DEFAULT NULL,

      work_type VARCHAR(100) DEFAULT NULL,
      duration VARCHAR(100) DEFAULT NULL,

      consultation_area VARCHAR(100) DEFAULT NULL,
      problem TEXT DEFAULT NULL,

      subject VARCHAR(255) DEFAULT NULL,
      message TEXT NOT NULL,

      status ENUM('new','read','replied','archived') DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_inquiry_type (inquiry_type),
      INDEX idx_status (status),
      INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  // Ensure existing tables also know about the new floating-contact types
  // (whatsapp / email / phone). Safe to run repeatedly.
  try {
    await p.query(`
      ALTER TABLE inquiries
      MODIFY COLUMN inquiry_type
      ENUM('project','freelance','consultation','other','whatsapp','email','phone') NOT NULL
    `);
  } catch (alterErr) {
    // Non-fatal: table may already have the correct definition
    console.log("  (inquiry_type ENUM already up to date)");
  }

  // Admin users table
  await p.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  console.log("Database initialized: tables ready");
}
