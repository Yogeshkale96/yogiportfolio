import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiMail,
  FiPhone,
  FiChevronUp,
  FiX,
  FiUser,
  FiSend,
  FiLoader,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { contactInfo } from "../data/socialLinks";
import { API_BASE_URL } from "../config/api";

/* =====================================================
   FLOATING CONTACT WIDGET
   - Stacked vertically on the right side, bottom area
   - Bouncing effect, expands upward
   - Each option opens a quick enquiry form that logs an
     inquiry to the admin dashboard, then launches the
     relevant app (WhatsApp / Email / Phone)
===================================================== */

const WHATSAPP_NUMBER = "919689682905"; // +91 96896 82905

const items = [
  {
    id: "whatsapp",
    label: "Chat on WhatsApp",
    Icon: FaWhatsapp,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Yogesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.`,
    external: true,
    bg: "bg-gradient-to-br from-green-500 to-emerald-600",
    shadow: "shadow-green-500/40",
    ring: "hover:ring-green-400/60",
    accent: "green",
    placeholder: "Hi Yogesh, I'd like to discuss a project...",
    cta: "Open WhatsApp",
  },
  {
    id: "email",
    label: "Send an Email",
    Icon: FiMail,
    href: `mailto:${contactInfo.email}`,
    external: false,
    bg: "bg-gradient-to-br from-violet-600 to-fuchsia-500",
    shadow: "shadow-violet-500/40",
    ring: "hover:ring-violet-400/60",
    accent: "violet",
    placeholder: "Describe what you need help with...",
    cta: "Open Email",
  },
  {
    id: "phone",
    label: "Call +91 96896 82905",
    Icon: FiPhone,
    href: `tel:+${WHATSAPP_NUMBER}`,
    external: false,
    bg: "bg-gradient-to-br from-sky-500 to-indigo-600",
    shadow: "shadow-sky-500/40",
    ring: "hover:ring-sky-400/60",
    accent: "sky",
    placeholder: "Briefly mention why you're calling...",
    cta: "Call Now",
  },
];

const initialForm = { name: "", email: "", message: "" };

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null); // which contact option's form is open
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  /* --------------------------------
     HANDLE OPTION CLICK
     - WhatsApp & Phone: open directly (no form)
     - Email: open the quick enquiry form first
  -------------------------------- */
  const handleOptionClick = (item) => {
    if (item.id === "email") {
      setActive(item);
      setForm(initialForm);
      setStatus("idle");
      return;
    }

    // Direct launch for WhatsApp / Phone
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      window.location.assign(item.href);
    }
  };

  /* --------------------------------
     SUBMIT EMAIL INQUIRY THEN LAUNCH MAILTO
  -------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting" || !active) return;

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType: active.id, // email
          name: form.name.trim(),
          email: form.email.trim(),
          phone: contactInfo.phone, // reference contact (visitor phone optional)
          subject: `Quick ${active.label} enquiry`,
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to submit enquiry");
      }

      setStatus("success");

      // Build a mailto link that pre-fills the user's message
      const subject = encodeURIComponent(
        `Portfolio enquiry from ${form.name.trim()}`
      );
      const body = encodeURIComponent(
        `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
      );
      const mailtoHref = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

      // Launch the email client after a short delay so the user sees confirmation
      setTimeout(() => {
        window.location.href = mailtoHref;
      }, 900);
    } catch (err) {
      console.error("Floating enquiry error:", err);
      setStatus("error");
    }
  };

  const closeForm = () => {
    setActive(null);
    setStatus("idle");
    setForm(initialForm);
  };

  return (
    <>
      <div
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setOpen(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setOpen(false);
        }}
        className="fixed right-5 sm:right-6 top-1/2 -translate-y-1/2 z-[75] flex flex-col items-center gap-3.5"
      >
        {/* =====================================================
            EXPANDABLE CONTACT ICONS (bounce upward)
        ===================================================== */}
        <AnimatePresence>
          {open &&
            items.map((item, index) => {
              const { id, label, Icon, bg, shadow, ring } = item;

              return (
                <motion.button
                  key={id}
                  type="button"
                  onClick={() => handleOptionClick(item)}
                  aria-label={label}
                  title={label}
                  initial={{ opacity: 0, y: 30, scale: 0.4 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 380,
                      damping: 18,
                      delay: index * 0.07,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 30,
                    scale: 0.4,
                    transition: {
                      duration: 0.18,
                      delay: (items.length - index) * 0.05,
                    },
                  }}
                  whileHover={{ scale: 1.12, x: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full ${bg} flex items-center justify-center text-white shadow-lg ${shadow} ring-2 ring-white/10 ${ring} transition-all duration-300`}
                >
                  {/* Bouncing icon */}
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                    className="flex items-center justify-center"
                  >
                    <Icon className="text-2xl sm:text-[26px]" />
                  </motion.span>

                  {/* Tooltip */}
                  <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap text-[12px] font-inter font-medium text-white/90 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {label}
                  </span>
                </motion.button>
              );
            })}
        </AnimatePresence>

        {/* =====================================================
            TOGGLE BUTTON (WhatsApp branded)
        ===================================================== */}
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close contact options" : "Open contact options"}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-xl shadow-green-500/40 ring-2 ring-white/15"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping [animation-duration:2.5s]" />

          {/* Bouncing main icon */}
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronUp className="text-3xl" />
                </motion.span>
              ) : (
                <motion.span
                  key="wa"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaWhatsapp className="text-3xl sm:text-[34px]" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.span>
        </motion.button>
      </div>

      {/* =====================================================
          QUICK ENQUIRY MODAL
      ===================================================== */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeForm}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md glass-card p-6 sm:p-7"
            >
              {/* Close */}
              <button
                type="button"
                onClick={closeForm}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
              >
                <FiX size={18} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl ${active.bg} flex items-center justify-center text-white shadow-lg ${active.shadow}`}
                >
                  <active.Icon className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {active.label}
                  </h3>
                  <p className="text-xs text-muted">
                    Quick enquiry — logged to dashboard
                  </p>
                </div>
              </div>

              {/* Success state */}
              {status === "success" ? (
                <div className="py-6 text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="w-14 h-14 mx-auto rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4"
                  >
                    <FiCheckCircle className="text-2xl text-green-400" />
                  </motion.div>
                  <p className="text-white font-semibold">
                    Enquiry submitted!
                  </p>
                  <p className="text-xs text-muted mt-1.5">
                    Opening {active.label} for you...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs text-muted">Your Name</label>
                    <div className="mt-1.5 relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="John Doe"
                        className="w-full h-11 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-gray-600 outline-none focus:border-violet-500/60 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs text-muted">Email</label>
                    <div className="mt-1.5 relative">
                      <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        placeholder="john@example.com"
                        className="w-full h-11 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-gray-600 outline-none focus:border-violet-500/60 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-muted">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder={active.placeholder}
                      className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-gray-600 outline-none focus:border-violet-500/60 transition-all resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      <FiAlertCircle />
                      Please fill all fields with a valid email and try again.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`w-full h-11 rounded-xl ${active.bg} text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-60`}
                  >
                    {status === "submitting" ? (
                      <>
                        <FiLoader className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={15} />
                        {active.cta}
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-muted/70 text-center leading-relaxed">
                    Your details are sent to the admin dashboard, then your
                    email client opens with the message pre-filled.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
