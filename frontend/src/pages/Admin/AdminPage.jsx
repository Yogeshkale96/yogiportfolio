import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiCode,
  FiMessageCircle,
  FiMail,
  FiLock,
  FiUser,
  FiLogOut,
  FiX,
  FiTrash2,
  FiRefreshCw,
  FiCheckCircle,
  FiAlertCircle,
  FiInbox,
  FiClock,
  FiChevronRight,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const API = "";

const INQUIRY_TYPE_META = {
  project: { label: "Project", icon: FiBriefcase, color: "violet" },
  freelance: { label: "Freelance", icon: FiCode, color: "purple" },
  consultation: { label: "Consultation", icon: FiMessageCircle, color: "pink" },
  other: { label: "Other", icon: FiMail, color: "rose" },
  whatsapp: { label: "WhatsApp", icon: FaWhatsapp, color: "green" },
  email: { label: "Email", icon: FiMail, color: "fuchsia" },
  phone: { label: "Phone", icon: FiPhone, color: "sky" },
};

const STATUS_META = {
  new: { label: "New", color: "green" },
  read: { label: "Read", color: "yellow" },
  replied: { label: "Replied", color: "violet" },
  archived: { label: "Archived", color: "zinc" },
};

export default function AdminPage() {
  const [token, setToken] = useState(
    () => localStorage.getItem("ysk_admin_token") || ""
  );
  const [adminName, setAdminName] = useState("");
  const [authChecked, setAuthChecked] = useState(false);

  // Login form state
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Dashboard state
  const [stats, setStats] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  /* --------------------------------
     VERIFY EXISTING TOKEN ON MOUNT
  -------------------------------- */
  useEffect(() => {
    if (!token) {
      setAuthChecked(true);
      return;
    }
    fetch(`${API}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        setAdminName(data.admin.username);
        setAuthChecked(true);
      })
      .catch(() => {
        localStorage.removeItem("ysk_admin_token");
        setToken("");
        setAuthChecked(true);
      });
  }, []);

  /* --------------------------------
     LOAD STATS + INQUIRIES WHEN LOGGED IN
  -------------------------------- */
  useEffect(() => {
    if (token && authChecked) {
      loadStats();
      loadInquiries();
    }
  }, [token, authChecked]);

  useEffect(() => {
    if (token) loadInquiries();
  }, [filter]);

  /* --------------------------------
     LOGIN
  -------------------------------- */
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginLoading) return;
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      localStorage.setItem("ysk_admin_token", data.token);
      setToken(data.token);
      setAdminName(data.admin.username);
      setLoginForm({ username: "", password: "" });
    } catch (err) {
      setLoginError("Invalid username or password");
    } finally {
      setLoginLoading(false);
    }
  };

  /* --------------------------------
     LOGOUT
  -------------------------------- */
  const handleLogout = () => {
    localStorage.removeItem("ysk_admin_token");
    setToken("");
    setAdminName("");
    setStats(null);
    setInquiries([]);
    setSelected(null);
  };

  /* --------------------------------
     LOAD STATS
  -------------------------------- */
  const loadStats = async () => {
    try {
      const res = await fetch(`${API}/api/inquiries/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      setStats(data);
    } catch (e) {}
  };

  /* --------------------------------
     LOAD INQUIRIES
  -------------------------------- */
  const loadInquiries = async () => {
    setLoading(true);
    try {
      const url =
        filter === "all" ? `${API}/api/inquiries` : `${API}/api/inquiries?type=${filter}`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (e) {
      setInquiries([]);
    } finally {
      setLoading(false);
    }
  };

  /* --------------------------------
     OPEN INQUIRY DETAIL
  -------------------------------- */
  const openInquiry = async (id) => {
    setSelected(null);
    setModalLoading(true);
    try {
      const res = await fetch(`${API}/api/inquiries/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) return handleLogout();
      const data = await res.json();
      setSelected(data.inquiry);
    } catch (e) {
    } finally {
      setModalLoading(false);
    }
  };

  /* --------------------------------
     UPDATE STATUS
  -------------------------------- */
  const updateStatus = async (id, status) => {
    try {
      await fetch(`${API}/api/inquiries/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      setSelected(null);
      await loadStats();
      await loadInquiries();
    } catch (e) {}
  };

  /* --------------------------------
     DELETE INQUIRY
  -------------------------------- */
  const deleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry permanently?")) return;
    try {
      await fetch(`${API}/api/inquiries/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelected(null);
      await loadStats();
      await loadInquiries();
    } catch (e) {}
  };

  /* --------------------------------
     LOGIN SCREEN
  -------------------------------- */
  if (authChecked && !token) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md glass-card p-8 sm:p-10"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center">
              <FiLock size={28} className="text-white" />
            </div>
            <h1 className="mt-6 text-2xl font-bold gradient-text">Admin Login</h1>
            <p className="mt-2 text-sm text-muted">
              Sign in to view contact form inquiries
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-gray-300">Username</label>
              <div className="mt-2 relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm((f) => ({ ...f, username: e.target.value }))
                  }
                  required
                  placeholder="admin"
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-violet-500/60 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <div className="mt-2 relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm((f) => ({ ...f, password: e.target.value }))
                  }
                  required
                  placeholder="••••••••"
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-violet-500/60 transition-all"
                />
              </div>
            </div>

            {loginError && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <FiAlertCircle />
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loginLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>Sign In</>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 rounded-xl bg-violet-500/5 border border-violet-500/15 text-xs text-muted leading-relaxed">
            <p className="font-semibold text-violet-300 mb-1">Default credentials:</p>
            <p>Username: <span className="text-violet-300 font-mono">admin</span></p>
            <p>Password: <span className="text-violet-300 font-mono">admin123</span></p>
            <p className="mt-2 text-[11px]">
              Run <code className="text-violet-300">npm run seed</code> in the backend folder to reset
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
      </div>
    );
  }

  /* --------------------------------
     DASHBOARD
  -------------------------------- */
  const typeMap = {};
  if (stats?.byType) stats.byType.forEach((t) => (typeMap[t.inquiry_type] = t.count));
  const statusMap = {};
  if (stats?.byStatus) stats.byStatus.forEach((s) => (statusMap[s.status] = s.count));

  const statCards = [
    { label: "Total", value: stats?.total || 0, color: "text-white", icon: FiInbox },
    { label: "Project", value: typeMap.project || 0, color: "text-violet-400", icon: FiBriefcase },
    { label: "Freelance", value: typeMap.freelance || 0, color: "text-purple-400", icon: FiCode },
    { label: "Consultation", value: typeMap.consultation || 0, color: "text-pink-400", icon: FiMessageCircle },
    { label: "Other", value: typeMap.other || 0, color: "text-rose-400", icon: FiMail },
    { label: "WhatsApp", value: typeMap.whatsapp || 0, color: "text-green-400", icon: FaWhatsapp },
    { label: "Email", value: typeMap.email || 0, color: "text-fuchsia-400", icon: FiMail },
    { label: "Phone", value: typeMap.phone || 0, color: "text-sky-400", icon: FiPhone },
    { label: "New", value: statusMap.new || 0, color: "text-green-400", icon: FiCheckCircle },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-white/[0.06] px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl font-bold gradient-text">YSK Inquiries Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-300">
              {adminName || "admin"}
            </span>
            <button
              onClick={() => {
                loadStats();
                loadInquiries();
              }}
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
              title="Refresh"
            >
              <FiRefreshCw size={15} />
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-red-500/30 flex items-center gap-2 text-sm transition-all"
            >
              <FiLogOut size={15} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {statCards.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-4 sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted uppercase tracking-wider">
                    {s.label}
                  </span>
                  <Icon size={16} className={s.color} />
                </div>
                <p className={`text-2xl sm:text-3xl font-bold mt-2 ${s.color}`}>
                  {s.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["all", "project", "freelance", "consultation", "other", "whatsapp", "email", "phone"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === t
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white"
                  : "bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:border-violet-500/30"
              }`}
            >
              {t === "all" ? "All" : INQUIRY_TYPE_META[t]?.label}
            </button>
          ))}
        </div>

        {/* Inquiry list */}
        {loading ? (
          <div className="text-center py-16 text-muted">
            <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin mx-auto mb-4" />
            Loading inquiries...
          </div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-16 text-muted">
            <FiInbox size={40} className="mx-auto mb-4 opacity-50" />
            No inquiries found in this category.
          </div>
        ) : (
          <div className="space-y-3">
            {inquiries.map((i, idx) => {
              const typeMeta = INQUIRY_TYPE_META[i.inquiry_type];
              const statusMeta = STATUS_META[i.status];
              const TypeIcon = typeMeta?.icon;
              return (
                <motion.div
                  key={i.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => openInquiry(i.id)}
                  className="glass-card p-5 cursor-pointer hover:border-violet-500/30 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                        {TypeIcon && <TypeIcon size={20} className="text-violet-400" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{i.name}</h3>
                        <p className="text-xs text-muted mt-1">
                          {i.email}
                          {i.phone ? ` • ${i.phone}` : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide type-${i.inquiry_type}`}
                        style={{
                          background: `rgba(${
                            i.inquiry_type === "project"
                              ? "139,92,246"
                              : i.inquiry_type === "freelance"
                              ? "168,85,247"
                              : i.inquiry_type === "consultation"
                              ? "236,72,153"
                              : i.inquiry_type === "whatsapp"
                              ? "34,197,94"
                              : i.inquiry_type === "email"
                              ? "217,70,239"
                              : i.inquiry_type === "phone"
                              ? "14,165,233"
                              : "244,114,182"
                          },0.15)`,
                          color: `rgb(${
                            i.inquiry_type === "project"
                              ? "167,139,250"
                              : i.inquiry_type === "freelance"
                              ? "192,132,252"
                              : i.inquiry_type === "consultation"
                              ? "244,114,182"
                              : i.inquiry_type === "whatsapp"
                              ? "74,222,128"
                              : i.inquiry_type === "email"
                              ? "232,121,249"
                              : i.inquiry_type === "phone"
                              ? "56,189,248"
                              : "249,168,212"
                          })`,
                        }}
                      >
                        {typeMeta?.label}
                      </span>
                      <span
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold"
                        style={{
                          background:
                            i.status === "new"
                              ? "rgba(52,211,153,0.15)"
                              : i.status === "read"
                              ? "rgba(251,191,36,0.15)"
                              : i.status === "replied"
                              ? "rgba(139,92,246,0.15)"
                              : "rgba(161,161,170,0.15)",
                          color:
                            i.status === "new"
                              ? "#34d399"
                              : i.status === "read"
                              ? "#fbbf24"
                              : i.status === "replied"
                              ? "#8B5CF6"
                              : "#A1A1AA",
                        }}
                      >
                        {statusMeta?.label}
                      </span>
                    </div>
                  </div>

                  {/* Type-specific meta */}
                  {i.company && (
                    <p className="text-xs text-muted mt-3">Company: {i.company}</p>
                  )}
                  {i.project_type && (
                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted">
                      <span>Project: {i.project_type}</span>
                      {i.budget && <span>Budget: {i.budget}</span>}
                      {i.timeline && <span>Timeline: {i.timeline}</span>}
                    </div>
                  )}
                  {i.work_type && (
                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted">
                      <span>Work: {i.work_type}</span>
                      {i.duration && <span>Duration: {i.duration}</span>}
                    </div>
                  )}
                  {i.consultation_area && (
                    <p className="text-xs text-muted mt-3">
                      Area: {i.consultation_area}
                    </p>
                  )}
                  {i.subject && (
                    <p className="text-xs text-muted mt-3">Subject: {i.subject}</p>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.04]">
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <FiClock size={12} />
                      {new Date(i.created_at).toLocaleString()}
                    </span>
                    <FiChevronRight
                      size={16}
                      className="text-gray-600 group-hover:text-violet-400 transition-colors"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* ===== DETAIL MODAL ===== */}
      <AnimatePresence>
        {modalLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto glass-card p-6 sm:p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
              >
                <FiX size={18} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <FiUser size={22} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selected.name}</h3>
                  <p className="text-sm text-muted">{selected.email}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-0">
                {[
                  ["Phone", selected.phone],
                  ["Company", selected.company],
                  ["Inquiry Type", INQUIRY_TYPE_META[selected.inquiry_type]?.label],
                  ["Project Type", selected.project_type],
                  ["Technology", selected.technology],
                  ["Budget", selected.budget],
                  ["Timeline", selected.timeline],
                  ["Work Type", selected.work_type],
                  ["Duration", selected.duration],
                  ["Consultation Area", selected.consultation_area],
                  ["Subject", selected.subject],
                  ["Status", STATUS_META[selected.status]?.label],
                  ["Created", new Date(selected.created_at).toLocaleString()],
                ]
                  .filter((r) => r[1])
                  .map(([key, val]) => (
                    <div
                      key={key}
                      className="flex gap-4 py-3 border-b border-white/[0.04]"
                    >
                      <span className="w-32 text-xs text-muted shrink-0 pt-0.5">
                        {key}
                      </span>
                      <span className="text-sm text-white flex-1">{val}</span>
                    </div>
                  ))}
              </div>

              {selected.problem && (
                <div className="mt-5">
                  <p className="text-xs text-muted mb-2">Problem</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {selected.problem}
                  </p>
                </div>
              )}

              <div className="mt-5">
                <p className="text-xs text-muted mb-2">Message</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  {selected.message}
                </p>
              </div>

              {/* Status buttons */}
              <div className="mt-6">
                <p className="text-xs text-muted mb-3">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {["new", "read", "replied", "archived"].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                        selected.status === s
                          ? "bg-violet-600 text-white"
                          : "bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      {STATUS_META[s]?.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delete */}
              <button
                onClick={() => deleteInquiry(selected.id)}
                className="w-full mt-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <FiTrash2 size={15} />
                Delete Inquiry
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
