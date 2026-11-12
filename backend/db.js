import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let pool = null;

export function getPool() {
  if (pool) return pool;

  pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "portfolio_inquiries",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
  });

  return pool;
}

export async function initDatabase() {
  // First connect without database to create it if it doesn't exist
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  });

  const dbName = process.env.DB_NAME || "portfolio_inquiries";

  await conn.query(
    `CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  );

  await conn.end();

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
