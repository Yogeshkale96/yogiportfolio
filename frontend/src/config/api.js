// Backend base URL. Empty in dev (Vite proxy handles /api), set VITE_API_URL in production.
const PRODUCTION_API_URL = "https://yogiportfolio-2.onrender.com";

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || (import.meta.env.PROD ? PRODUCTION_API_URL : "")
).replace(/\/+$/, "");
