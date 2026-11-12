import { Router } from "express";
import { getPool } from "../db.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

// Allowed inquiry types
// - Form-based: project, freelance, consultation, other
// - Floating quick-contact: whatsapp, email, phone
const VALID_TYPES = [
  "project",
  "freelance",
  "consultation",
  "other",
  "whatsapp",
  "email",
  "phone",
];

// =============================================
// POST /api/contact/inquiry  (PUBLIC)
// Submit a new inquiry from the contact form
// =============================================
router.post("/inquiry", async (req, res) => {
  try {
    const {
      inquiryType,
      name,
      email,
      phone,
      company,
      projectType,
      technology,
      budget,
      timeline,
      workType,
      duration,
      consultationArea,
      problem,
      subject,
      message,
    } = req.body;

    // Basic validation
    if (!inquiryType || !VALID_TYPES.includes(inquiryType)) {
      return res.status(400).json({ error: "Invalid inquiry type" });
    }
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email and message are required" });
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const pool = getPool();

    const [result] = await pool.query(
      `INSERT INTO inquiries
        (inquiry_type, name, email, phone, company,
         project_type, technology, budget, timeline,
         work_type, duration,
         consultation_area, problem,
         subject, message)
       VALUES (?,?,?,?,?,  ?,?,?,?,  ?,?,  ?,?,  ?,?)`,
      [
        inquiryType,
        name?.trim(),
        email?.trim().toLowerCase(),
        phone?.trim() || null,
        company?.trim() || null,
        projectType?.trim() || null,
        technology?.trim() || null,
        budget?.trim() || null,
        timeline?.trim() || null,
        workType?.trim() || null,
        duration?.trim() || null,
        consultationArea?.trim() || null,
        problem?.trim() || null,
        subject?.trim() || null,
        message?.trim(),
      ]
    );

    res.status(201).json({
      message: "Inquiry submitted successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Inquiry submission error:", err);
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});

// =============================================
// GET /api/inquiries  (ADMIN)
// Get all inquiries with optional filters
// =============================================
router.get("/", verifyToken, async (req, res) => {
  try {
    const pool = getPool();
    const { type, status } = req.query;

    let sql = "SELECT * FROM inquiries WHERE 1=1";
    const params = [];

    if (type && VALID_TYPES.includes(type)) {
      sql += " AND inquiry_type = ?";
      params.push(type);
    }
    if (status) {
      sql += " AND status = ?";
      params.push(status);
    }

    sql += " ORDER BY created_at DESC";

    const [rows] = await pool.query(sql, params);
    res.json({ count: rows.length, inquiries: rows });
  } catch (err) {
    console.error("Fetch inquiries error:", err);
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
});

// =============================================
// GET /api/inquiries/stats  (ADMIN)
// Get counts grouped by inquiry type and status
// =============================================
router.get("/stats", verifyToken, async (req, res) => {
  try {
    const pool = getPool();

    const [byType] = await pool.query(
      `SELECT inquiry_type, COUNT(*) as count
       FROM inquiries GROUP BY inquiry_type ORDER BY count DESC`
    );

    const [byStatus] = await pool.query(
      `SELECT status, COUNT(*) as count
       FROM inquiries GROUP BY status`
    );

    const [[{ total }]] = await pool.query(
      "SELECT COUNT(*) as total FROM inquiries"
    );

    res.json({ total, byType, byStatus });
  } catch (err) {
    console.error("Stats error:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// =============================================
// GET /api/inquiries/:id  (ADMIN)
// Get a single inquiry by id (marks as read)
// =============================================
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const pool = getPool();
    const { id } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM inquiries WHERE id = ? LIMIT 1",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    // Mark as read
    await pool.query(
      "UPDATE inquiries SET status = 'read' WHERE id = ? AND status = 'new'",
      [id]
    );

    res.json({ inquiry: rows[0] });
  } catch (err) {
    console.error("Fetch inquiry error:", err);
    res.status(500).json({ error: "Failed to fetch inquiry" });
  }
});

// =============================================
// PATCH /api/inquiries/:id/status  (ADMIN)
// Update inquiry status
// =============================================
router.patch("/:id/status", verifyToken, async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["new", "read", "replied", "archived"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const pool = getPool();
    const [result] = await pool.query(
      "UPDATE inquiries SET status = ? WHERE id = ?",
      [status, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    res.json({ message: "Status updated", status });
  } catch (err) {
    console.error("Status update error:", err);
    res.status(500).json({ error: "Failed to update status" });
  }
});

// =============================================
// DELETE /api/inquiries/:id  (ADMIN)
// Delete an inquiry
// =============================================
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const pool = getPool();
    const [result] = await pool.query(
      "DELETE FROM inquiries WHERE id = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Inquiry not found" });
    }

    res.json({ message: "Inquiry deleted" });
  } catch (err) {
    console.error("Delete inquiry error:", err);
    res.status(500).json({ error: "Failed to delete inquiry" });
  }
});

export default router;
