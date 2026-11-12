import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiCode,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiX,
  FiAlertCircle,
} from "react-icons/fi";

const inquiryTypes = [
  {
    id: "project",
    title: "Start a Project",
    description: "Have a website or application idea?",
    icon: FiBriefcase,
  },
  {
    id: "freelance",
    title: "Freelance Work",
    description: "Looking for development support?",
    icon: FiCode,
  },
  {
    id: "consultation",
    title: "Technical Consultation",
    description: "Need help planning your solution?",
    icon: FiMessageCircle,
  },
  {
    id: "other",
    title: "Other Inquiry",
    description: "Something else? Let's talk.",
    icon: FiMail,
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",

  projectType: "",
  technology: "",
  budget: "",
  timeline: "",

  workType: "",
  duration: "",

  consultationArea: "",
  problem: "",

  subject: "",
  message: "",
};

/* --------------------------------
   INPUT COMPONENT
-------------------------------- */

const InputField = ({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
  required = false,
  inputMode,
}) => (
  <div>
    <label className="text-[13px] font-medium text-gray-300 tracking-tight">
      {label}
      {required && <span className="text-violet-400 ml-1">*</span>}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      inputMode={inputMode}
      placeholder={placeholder}
      className={`mt-2 w-full h-12 px-4 rounded-xl bg-white/[0.04] border text-white text-sm placeholder:text-gray-600 outline-none transition-all ${
        error
          ? "border-red-500/60 focus:border-red-500/70 focus:bg-white/[0.06]"
          : "border-white/10 focus:border-violet-500/60 focus:bg-white/[0.06]"
      }`}
    />

    {error && (
      <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
        <FiAlertCircle size={13} className="shrink-0" />
        {error}
      </p>
    )}
  </div>
);

/* --------------------------------
   SELECT COMPONENT
-------------------------------- */

const SelectField = ({
  label,
  name,
  value,
  error,
  onChange,
  children,
  required = false,
}) => (
  <div>
    <label className="text-[13px] font-medium text-gray-300 tracking-tight">
      {label}
      {required && <span className="text-violet-400 ml-1">*</span>}
    </label>

    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`mt-2 w-full h-12 px-4 rounded-xl bg-[#111116] border text-gray-300 text-sm outline-none transition-all ${
        error
          ? "border-red-500/60 focus:border-red-500/70"
          : "border-white/10 focus:border-violet-500/60"
      }`}
    >
      {children}
    </select>

    {error && (
      <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
        <FiAlertCircle size={13} className="shrink-0" />
        {error}
      </p>
    )}
  </div>
);

/* --------------------------------
   TEXTAREA COMPONENT
-------------------------------- */

const TextareaField = ({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  required = false,
  rows = 6,
}) => (
  <div>
    <label className="text-[13px] font-medium text-gray-300 tracking-tight">
      {label}
      {required && <span className="text-violet-400 ml-1">*</span>}
    </label>

    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      placeholder={placeholder}
      className={`mt-2 w-full px-4 py-4 rounded-xl bg-white/[0.04] border text-white text-sm placeholder:text-gray-600 outline-none resize-none transition-all ${
        error
          ? "border-red-500/60 focus:border-red-500/70"
          : "border-white/10 focus:border-violet-500/60"
      }`}
    />

    {error && (
      <p className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
        <FiAlertCircle size={13} className="shrink-0" />
        {error}
      </p>
    )}
  </div>
);

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("project");

  const [form, setForm] = useState(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const formRef = useRef(null);

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    title: "",
    message: "",
  });

  /* --------------------------------
     ESCAPE POPUP
  -------------------------------- */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== "Escape") return;

      setPopup((previous) => {
        if (!previous.open) return previous;

        if (previous.type === "success") {
          setForm(initialForm);
          setErrors({});
        }

        return {
          open: false,
          type: "",
          title: "",
          message: "",
        };
      });
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* --------------------------------
     FORM CHANGE
  -------------------------------- */

  const handleChange = (event) => {
    const { name, value } = event.target;

    let nextValue = value;

    // Block invalid characters while typing
    if (name === "name") {
      nextValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    if (name === "phone") {
      nextValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((previous) => ({
      ...previous,
      [name]: nextValue,
    }));

    // Clear / refresh the error as the user corrects the field
    if (errors[name]) {
      const error = validateField(name, nextValue);

      setErrors((previous) => {
        const next = { ...previous };

        if (error) {
          next[name] = error;
        } else {
          delete next[name];
        }

        return next;
      });
    }
  };

  /* --------------------------------
     CHANGE INQUIRY TYPE
  -------------------------------- */

  const handleInquiryChange = (type) => {
    setSelectedType(type);

    setForm((previous) => ({
      ...previous,
      projectType: "",
      technology: "",
      budget: "",
      timeline: "",
      workType: "",
      duration: "",
      consultationArea: "",
      problem: "",
      subject: "",
    }));

    setErrors((previous) => {
      const next = { ...previous };

      [
        "projectType",
        "technology",
        "budget",
        "timeline",
        "workType",
        "duration",
        "consultationArea",
        "problem",
        "subject",
        "message",
      ].forEach((field) => {
        delete next[field];
      });

      return next;
    });
  };

  /* --------------------------------
     POPUP
  -------------------------------- */

  const showPopup = (type, title, message) => {
    setPopup({
      open: true,
      type,
      title,
      message,
    });
  };

  const closePopup = () => {
    if (popup.type === "success") {
      setForm(initialForm);
      setErrors({});
    }

    setPopup({
      open: false,
      type: "",
      title: "",
      message: "",
    });
  };

  /* --------------------------------
     VALIDATION
  -------------------------------- */

  const messageFieldLabels = {
    project: "Project requirements",
    freelance: "Work requirements",
    consultation: "Help details",
    other: "Message",
  };

  const requiredFieldsByType = {
    project: ["projectType", "message"],
    freelance: ["workType", "message"],
    consultation: ["consultationArea", "problem", "message"],
    other: ["subject", "message"],
  };

  const validateField = (name, value) => {
    const trimmed =
      typeof value === "string" ? value.trim() : value;

    switch (name) {
      case "name": {
        if (!trimmed) {
          return "Full name is required.";
        }

        if (!/^[A-Za-z\s]+$/.test(trimmed)) {
          return "Full name can only contain letters and spaces.";
        }

        if (trimmed.length < 2) {
          return "Full name must be at least 2 characters.";
        }

        return "";
      }

      case "email": {
        if (!trimmed) {
          return "Email address is required.";
        }

        if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(trimmed)) {
          return "Please enter a valid Gmail address (example@gmail.com).";
        }

        return "";
      }

      case "phone": {
        if (!trimmed) {
          return "";
        }

        if (!/^\d{10}$/.test(trimmed)) {
          return "Phone number must be exactly 10 digits.";
        }

        return "";
      }

      case "company": {
        if (!trimmed) {
          return "";
        }

        if (
          trimmed.length < 2 ||
          !/[A-Za-z0-9]/.test(trimmed)
        ) {
          return "Please enter a valid company or organization name.";
        }

        return "";
      }

      case "projectType": {
        return trimmed
          ? ""
          : "Please select a project type.";
      }

      case "workType": {
        return trimmed
          ? ""
          : "Please select a type of work.";
      }

      case "consultationArea": {
        return trimmed
          ? ""
          : "Please select a consultation area.";
      }

      case "subject": {
        if (!trimmed) {
          return "Subject is required.";
        }

        if (trimmed.length < 3) {
          return "Subject must be at least 3 characters.";
        }

        return "";
      }

      case "problem": {
        if (!trimmed) {
          return "Current challenge is required.";
        }

        if (trimmed.length < 10) {
          return "Current challenge must be at least 10 characters.";
        }

        return "";
      }

      case "message": {
        const label =
          messageFieldLabels[selectedType] || "Message";

        if (!trimmed) {
          return `${label} is required.`;
        }

        if (trimmed.length < 10) {
          return `${label} must be at least 10 characters.`;
        }

        return "";
      }

      default: {
        return "";
      }
    }
  };

  const validateForm = () => {
    const fields = [
      "name",
      "email",
      "phone",
      "company",
      ...(requiredFieldsByType[selectedType] || []),
    ];

    const nextErrors = {};

    fields.forEach((field) => {
      const error = validateField(field, form[field]);

      if (error) {
        nextErrors[field] = error;
      }
    });

    return nextErrors;
  };

  /* --------------------------------
     SUBMIT
  -------------------------------- */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const fieldOrder = [
        "name",
        "email",
        "phone",
        "company",
        "projectType",
        "workType",
        "consultationArea",
        "subject",
        "problem",
        "message",
      ];

      const firstInvalid = fieldOrder.find(
        (field) => validationErrors[field]
      );

      const element = formRef.current?.querySelector(
        `[name="${firstInvalid}"]`
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        element.focus({
          preventScroll: true,
        });
      }

      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/api/contact/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inquiryType: selectedType,
            ...form,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send inquiry");
      }

      showPopup(
        "success",
        "Inquiry Sent Successfully!",
        "Thank you for contacting us. We have received your inquiry and will get back to you within 24 hours."
      );
    } catch (error) {
      console.error("Inquiry submission error:", error);

      showPopup(
        "error",
        "Unable to Send Inquiry",
        "Unable to send your inquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative py-24 md:py-32">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-fuchsia-500/5 pointer-events-none" />

        <div className="absolute top-20 right-0 w-72 h-72 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-fuchsia-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-4xl"
          >

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-grotesk font-semibold uppercase tracking-[0.2em]"
            >
              <FiSend className="text-sm" />
              Let's Talk
            </motion.span>

            <h1 className="mt-7 font-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Let's Build Something
              <span className="gradient-text block mt-2">
                Great Together
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-muted leading-8 max-w-3xl font-light">
              Have a project, an idea, or a challenge? I'd love to
              hear about it. Pick the option that fits best, share a
              few details, and I'll get back to you — usually within
              24 hours.
            </p>

            {/* Quick reassurance row */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted/80">
              <span className="inline-flex items-center gap-2">
                <FiCheckCircle className="text-green-400" />
                Reply within 24 hours
              </span>
              <span className="inline-flex items-center gap-2">
                <FiCheckCircle className="text-green-400" />
                No spam, ever
              </span>
              <span className="inline-flex items-center gap-2">
                <FiCheckCircle className="text-green-400" />
                Available for freelance
              </span>
            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          CONTACT AREA
      ===================================================== */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="space-y-6">

              <div>

                <span className="text-violet-400 text-xs font-grotesk font-semibold uppercase tracking-[0.2em]">
                  Start a Conversation
                </span>

                <h2 className="mt-3 font-grotesk text-3xl md:text-4xl font-bold text-white tracking-tight">
                  How Can I{" "}
                  <span className="gradient-text">Help?</span>
                </h2>

                <p className="mt-4 text-muted leading-7 max-w-md">
                  Select the type of inquiry that best matches
                  your requirement — the form below adapts to your
                  choice.
                </p>

              </div>

              {/* INQUIRY OPTIONS */}

              <div className="space-y-3">

                {inquiryTypes.map((item) => {

                  const Icon = item.icon;

                  const active =
                    selectedType === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        handleInquiryChange(item.id)
                      }
                      whileHover={{
                        x: 4,
                      }}
                      whileTap={{
                        scale: 0.99,
                      }}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                        active
                          ? "border-violet-500/50 bg-violet-500/10 shadow-lg shadow-violet-500/5"
                          : "border-white/10 bg-white/[0.03] hover:border-violet-500/30 hover:bg-white/[0.05]"
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            active
                              ? "bg-violet-500/20 text-violet-300"
                              : "bg-white/5 text-gray-400"
                          }`}
                        >
                          <Icon size={21} />
                        </div>

                        <div className="flex-1">

                          <h3 className="font-grotesk font-semibold text-white text-[15px] tracking-tight">
                            {item.title}
                          </h3>

                          <p className="text-xs text-muted mt-1 leading-relaxed">
                            {item.description}
                          </p>

                        </div>

                        {active && (
                          <div className="w-7 h-7 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300">
                            <FiCheck size={14} />
                          </div>
                        )}

                      </div>

                    </motion.button>
                  );
                })}

              </div>

              {/* DIRECT CONTACT */}

              <div className="glass-card p-7">

                <h3 className="font-grotesk text-lg font-bold text-white tracking-tight">
                  Direct Contact
                </h3>

                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Prefer to reach out directly? Use the details
                  below — I'm responsive on all channels.
                </p>

                <div className="mt-6 space-y-4">

                  <a
                    href="mailto:yogeshkale15101999@gmail.com"
                    className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <FiMail className="text-violet-400" />
                    </div>

                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                        Email
                      </p>

                      <p className="text-sm font-medium">
                        yogeshkale15101999@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919689682905"
                    className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <FiPhone className="text-violet-400" />
                    </div>

                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                        Phone
                      </p>

                      <p className="text-sm font-medium">
                        +91 96896 82905
                      </p>
                    </div>
                  </a>

                  <div className="group flex items-center gap-4 text-gray-300">

                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                      <FiMapPin className="text-violet-400" />
                    </div>

                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                        Location
                      </p>

                      <p className="text-sm font-medium">
                       Pune, Maharashtra, India.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT FORM
            ================================================= */}

            <div className="glass-card p-7 md:p-10">

              {/* FORM HEADER */}

              <div className="mb-8">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <span className="text-violet-400 text-xs font-grotesk font-semibold uppercase tracking-[0.2em]">
                      Send an Inquiry
                    </span>

                    <h2 className="mt-2 font-grotesk text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {selectedType === "project" &&
                        "Tell Me About Your Project"}

                      {selectedType === "freelance" &&
                        "Tell Me About the Work"}

                      {selectedType === "consultation" &&
                        "Tell Me About Your Challenge"}

                      {selectedType === "other" &&
                        "Send Your Inquiry"}
                    </h2>

                  </div>

                </div>

                {/* Selected inquiry */}

                <div className="mt-5 flex items-center gap-2">

                  <span className="text-xs text-gray-500">
                    Inquiry Type:
                  </span>

                  <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-300">
                    {
                      inquiryTypes.find(
                        (item) =>
                          item.id === selectedType
                      )?.title
                    }
                  </span>

                </div>

              </div>

              {/* FORM */}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >

                {/* BASIC INFORMATION */}

                <div className="grid sm:grid-cols-2 gap-5">

                  <InputField
                    label="Full Name"
                    name="name"
                    value={form.name}
                    error={errors.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                  <InputField
                    label="Email Address"
                    name="email"
                    value={form.email}
                    error={errors.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  <InputField
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    error={errors.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    placeholder="Your phone number"
                  />

                  <InputField
                    label="Company / Organization"
                    name="company"
                    value={form.company}
                    error={errors.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />

                </div>

                {/* =================================================
                    PROJECT FORM
                ================================================= */}

                {selectedType === "project" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    className="space-y-5"
                  >

                    <div className="grid sm:grid-cols-2 gap-5">

                      <SelectField
                        label="Project Type"
                        name="projectType"
                        value={form.projectType}
                        error={errors.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select project type
                        </option>
                        <option>
                          Business Website
                        </option>
                        <option>
                          Web Application
                        </option>
                        <option>
                          B2B / B2C Platform
                        </option>
                        <option>
                          Admin Dashboard
                        </option>
                        <option>
                          E-Commerce
                        </option>
                        <option>
                          Custom Application
                        </option>
                        <option>
                          Other
                        </option>
                      </SelectField>

                      <SelectField
                        label="Technology / Stack"
                        name="technology"
                        value={form.technology}
                        error={errors.technology}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select technology
                        </option>
                        <option>
                          React
                        </option>
                        <option>
                          MERN Stack
                        </option>
                        <option>
                          Node.js
                        </option>
                        <option>
                          MySQL
                        </option>
                        <option>
                          MongoDB
                        </option>
                        <option>
                          Frontend Development
                        </option>
                        <option>
                          Full Stack Development
                        </option>
                        <option>
                          Not Sure
                        </option>
                      </SelectField>

                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">

                      <SelectField
                        label="Estimated Budget"
                        name="budget"
                        value={form.budget}
                        error={errors.budget}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select budget
                        </option>
                        <option>
                          ₹10,000 - ₹25,000
                        </option>
                        <option>
                          ₹25,000 - ₹50,000
                        </option>
                        <option>
                          ₹50,000 - ₹1,00,000
                        </option>
                        <option>
                          ₹1,00,000+
                        </option>
                        <option>
                          Discuss Later
                        </option>
                      </SelectField>

                      <SelectField
                        label="Expected Timeline"
                        name="timeline"
                        value={form.timeline}
                        error={errors.timeline}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select timeline
                        </option>
                        <option>
                          Less than 1 month
                        </option>
                        <option>
                          1 - 2 months
                        </option>
                        <option>
                          2 - 3 months
                        </option>
                        <option>
                          3+ months
                        </option>
                        <option>
                          Not Sure
                        </option>
                      </SelectField>

                    </div>

                    <TextareaField
                      label="Project Requirements"
                      name="message"
                      value={form.message}
                      error={errors.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, required features, target users, business requirements and anything else that would help me understand your idea..."
                      required
                    />

                  </motion.div>
                )}

                {/* =================================================
                    FREELANCE FORM
                ================================================= */}

                {selectedType === "freelance" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    className="space-y-5"
                  >

                    <div className="grid sm:grid-cols-2 gap-5">

                      <SelectField
                        label="Type of Work"
                        name="workType"
                        value={form.workType}
                        error={errors.workType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select work type
                        </option>
                        <option>
                          Frontend Development
                        </option>
                        <option>
                          Backend Development
                        </option>
                        <option>
                          Full Stack Development
                        </option>
                        <option>
                          UI Implementation
                        </option>
                        <option>
                          Bug Fixing
                        </option>
                        <option>
                          API Integration
                        </option>
                        <option>
                          Existing Project Support
                        </option>
                      </SelectField>

                      <SelectField
                        label="Technology"
                        name="technology"
                        value={form.technology}
                        error={errors.technology}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select technology
                        </option>
                        <option>React</option>
                        <option>Node.js</option>
                        <option>MySQL</option>
                        <option>MongoDB</option>
                        <option>MERN Stack</option>
                        <option>Other</option>
                      </SelectField>

                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">

                      <SelectField
                        label="Expected Duration"
                        name="duration"
                        value={form.duration}
                        error={errors.duration}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select duration
                        </option>
                        <option>
                          One-time Task
                        </option>
                        <option>
                          Less than 1 month
                        </option>
                        <option>
                          1 - 3 months
                        </option>
                        <option>
                          Long-term
                        </option>
                      </SelectField>

                      <SelectField
                        label="Budget"
                        name="budget"
                        value={form.budget}
                        error={errors.budget}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select budget
                        </option>
                        <option>
                          ₹10,000 - ₹25,000
                        </option>
                        <option>
                          ₹25,000 - ₹50,000
                        </option>
                        <option>
                          ₹50,000+
                        </option>
                        <option>
                          Discuss Later
                        </option>
                      </SelectField>

                    </div>

                    <TextareaField
                      label="Work Requirements"
                      name="message"
                      value={form.message}
                      error={errors.message}
                      onChange={handleChange}
                      placeholder="Describe the work you need help with, current project status, expected responsibilities and requirements..."
                      required
                    />

                  </motion.div>
                )}

                {/* =================================================
                    CONSULTATION FORM
                ================================================= */}

                {selectedType === "consultation" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    className="space-y-5"
                  >

                    <SelectField
                      label="Consultation Area"
                      name="consultationArea"
                      value={form.consultationArea}
                      error={errors.consultationArea}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select area
                      </option>
                      <option>
                        Project Architecture
                      </option>
                      <option>
                        React Development
                      </option>
                      <option>
                        Node.js / Backend
                      </option>
                      <option>
                        Database Design
                      </option>
                      <option>
                        API Development
                      </option>
                      <option>
                        Authentication
                      </option>
                      <option>
                        Performance
                      </option>
                      <option>
                        Existing Project
                      </option>
                      <option>
                        Other
                      </option>
                    </SelectField>

                    <TextareaField
                      label="Current Challenge"
                      name="problem"
                      value={form.problem}
                      error={errors.problem}
                      onChange={handleChange}
                      placeholder="Explain the technical problem or situation you are currently facing..."
                      required
                      rows={5}
                    />

                    <TextareaField
                      label="What Do You Need Help With?"
                      name="message"
                      value={form.message}
                      error={errors.message}
                      onChange={handleChange}
                      placeholder="Tell me what you would like to discuss or solve..."
                      required
                      rows={5}
                    />

                  </motion.div>
                )}

                {/* =================================================
                    OTHER INQUIRY
                ================================================= */}

                {selectedType === "other" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    className="space-y-5"
                  >

                    <InputField
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      error={errors.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                    />

                    <TextareaField
                      label="Message"
                      name="message"
                      value={form.message}
                      error={errors.message}
                      onChange={handleChange}
                      placeholder="Write your inquiry..."
                      required
                      rows={7}
                    />

                  </motion.div>
                )}

                {/* =================================================
                    SEND BUTTON
                ================================================= */}

                <div className="pt-2">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-14 rounded-xl text-white font-grotesk font-semibold text-[15px] tracking-wide flex items-center justify-center gap-2.5 transition-all ${
                      isSubmitting
                        ? "bg-violet-600/60 cursor-not-allowed"
                        : "bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-violet-500/25"
                    }`}
                  >

                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <FiArrowRight />
                      </>
                    )}

                  </button>

                  <p className="mt-3 text-center text-xs text-gray-500">
                    Your information will only be used to respond to
                    your inquiry — usually within 24 hours.
                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SUCCESS / ERROR POPUP
      ===================================================== */}

      <AnimatePresence>

        {popup.open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closePopup}
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-md flex items-center justify-center p-5"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.88,
                y: 25,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative w-full max-w-md glass-card border border-white/10 p-8 md:p-10 text-center shadow-2xl"
            >

              {/* Close */}
              <button
                type="button"
                onClick={closePopup}
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.08] flex items-center justify-center transition-all"
              >
                <FiX size={18} />
              </button>

              {/* ICON */}

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: 0.15,
                  type: "spring",
                }}
                className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${
                  popup.type === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >

                {popup.type === "success" ? (
                  <FiCheckCircle size={38} />
                ) : (
                  <FiAlertCircle size={38} />
                )}

              </motion.div>

              {/* TITLE */}

              <h3 className="mt-7 text-2xl md:text-3xl font-bold text-white">
                {popup.title}
              </h3>

              {/* MESSAGE */}

              <p className="mt-4 text-sm text-muted leading-7">
                {popup.message}
              </p>

              {popup.type === "success" && (
                <p className="mt-3 text-xs text-gray-500">
                  Your inquiry has been submitted successfully.
                </p>
              )}

              {/* ACTION */}

              <button
                type="button"
                onClick={closePopup}
                className={`mt-7 px-7 py-3 rounded-xl text-white font-semibold transition-all ${
                  popup.type === "success"
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:opacity-90"
                    : "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                }`}
              >
                {popup.type === "success"
                  ? "Done"
                  : "Try Again"}
              </button>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}