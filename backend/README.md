# Portfolio Backend — Inquiries System

## Quick Start

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Create database + admin user (first time only, or to reset password)
npm run seed

# 3. Start the server (with auto-reload via nodemon)
npm run server
```

## All Commands

| Command | Purpose |
|---|---|
| `npm run server` | Start backend with **nodemon** (auto-reloads on file changes) |
| `npm run dev` | Same as above (nodemon) |
| `npm start` | Start without nodemon (plain node) |
| `npm run seed` | Create DB tables + admin user (password: admin123) |
| `npm run seed:fresh` | Reset admin to username=admin, password=admin123 |

## URLs

| URL | Purpose |
|---|---|
| http://localhost:5000/admin/ | **Admin Dashboard** (login to view inquiries) |
| http://localhost:5000/api/health | Health check |
| http://localhost:5000/api/contact/inquiry | POST — submit inquiry (from frontend form) |
| http://localhost:5000/api/auth/login | POST — admin login |
| http://localhost:5000/api/inquiries | GET — list inquiries (needs auth) |
| http://localhost:5000/api/inquiries?type=project | GET — filter by type |
| http://localhost:5000/api/inquiries/stats | GET — counts by type & status |

## Admin Login

- **Username:** `admin`
- **Password:** `admin123`

To reset: `npm run seed`

## Inquiry Types

The contact form supports 4 inquiry types, each stored in the same `inquiries` table:

| Type | Fields Used |
|---|---|
| `project` | project_type, technology, budget, timeline, message |
| `freelance` | work_type, technology, duration, budget, message |
| `consultation` | consultation_area, problem, message |
| `other` | subject, message |

## Database

- **Database:** `portfolio_inquiries`
- **Tables:** `inquiries`, `admins`
- **Engine:** MySQL 8.0
- **Credentials:** configured in `.env` file

## If Port 5000 is Already in Use

```powershell
# Find and kill the process using port 5000
Get-NetTCPConnection -LocalPort 5000 | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

# Then start again
npm run server

# Or use a different port
$env:PORT=5001; npm run server
```
