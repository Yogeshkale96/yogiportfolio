import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { getPool, initDatabase } from "./db.js";

dotenv.config();

/* =====================================================
   SEED SCRIPT
   Run: npm run seed

   Creates the database + tables and seeds an admin
   user with a password. The password can be passed
   via command line or env, otherwise defaults.
===================================================== */

async function seed() {
  console.log("\n  Seeding portfolio backend...\n");

  // 1. Initialize database and tables
  await initDatabase();

  const pool = getPool();

  // 2. Get admin credentials
  //    Priority: command line arg > env > default
  const argUsername = process.argv.find((a) => a.startsWith("--username="));
  const argPassword = process.argv.find((a) => a.startsWith("--password="));

  const username =
    (argUsername && argUsername.split("=")[1]) ||
    process.env.ADMIN_USERNAME ||
    "admin";

  const password =
    (argPassword && argPassword.split("=")[1]) ||
    process.env.ADMIN_PASSWORD ||
    "admin123";

  // 3. Hash the password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  // 4. Upsert admin user
  const [existing] = await pool.query(
    "SELECT id FROM admins WHERE username = ?",
    [username]
  );

  if (existing.length > 0) {
    await pool.query(
      "UPDATE admins SET password_hash = ? WHERE username = ?",
      [passwordHash, username]
    );
    console.log(`  Admin user "${username}" password updated.`);
  } else {
    await pool.query(
      "INSERT INTO admins (username, password_hash) VALUES (?, ?)",
      [username, passwordHash]
    );
    console.log(`  Admin user "${username}" created.`);
  }

  console.log(`\n  Username: ${username}`);
  console.log(`  Password: ${password}  (hashed in DB)`);
  console.log(`\n  You can now login at POST /api/auth/login`);
  console.log(`  with the credentials above to view inquiries.\n`);

  // 5. Show inquiry type summary
  const [tables] = await pool.query("SHOW TABLES");
  console.log("  Tables created:");
  for (const row of tables) {
    const tableName = Object.values(row)[0];
    console.log(`    - ${tableName}`);
  }

  console.log("\n  Inquiry types supported:");
  console.log("    - project      (Start a Project)");
  console.log("    - freelance     (Freelance Work)");
  console.log("    - consultation  (Technical Consultation)");
  console.log("    - other         (Other Inquiry)");
  console.log("\n  Seed complete.\n");

  process.exit(0);
}

seed().catch((err) => {
  console.error("\n  Seed failed:", err.message);
  console.error("\n  Check your .env file has correct DB credentials.\n");
  process.exit(1);
});
