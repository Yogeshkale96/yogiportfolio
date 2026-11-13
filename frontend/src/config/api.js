// Backend base URL. Empty in dev (Vite proxy handles /api), set VITE_API_URL in production.
export const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
