import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiDownload,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { socialLinks, contactInfo } from "../data/socialLinks";

export default function Footer() {
  /* =====================================================
     SCROLL TO TOP
  ====================================================== */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     MAIN NAVIGATION
  ====================================================== */
  const quickLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Skills",
      href: "/skills",
    },
  ];

  /* =====================================================
     IMPORTANT SERVICES ONLY
  ====================================================== */
  const services = [
    "Web Development",
    "Web Applications",
    "UI/UX Design",
    "Backend & APIs",
    "Database Solutions",
  ];

  return (
    <footer className="relative isolate border-t border-white/[0.06] overflow-hidden">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute -top-32 left-[10%] w-[420px] h-[240px] rounded-full bg-violet-600/[0.08] blur-[120px]" />

        <div className="absolute bottom-0 right-[8%] w-[380px] h-[240px] rounded-full bg-fuchsia-600/[0.07] blur-[110px]" />

        <div className="absolute top-[40%] left-[45%] w-[280px] h-[180px] rounded-full bg-indigo-600/[0.05] blur-[100px]" />

      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-14 sm:pt-16 pb-9">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 xl:gap-16">

          {/* =================================================
              COLUMN 1 — BRAND
          ================================================== */}
          <div className="sm:col-span-2 lg:col-span-1">

            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center mb-5"
              aria-label="YSK Portfolio Home"
            >
              <img
                src="/photo/ysk.png"
                alt="YSK Portfolio"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Availability */}
            <div className="flex items-center gap-2.5 mb-5">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />

              </span>

              <span className="text-[13px] font-inter font-medium text-green-400/90">
                Available for Freelance
              </span>

            </div>

            {/* Description */}
            <p className="max-w-[310px] text-muted/80 text-[13px] leading-[1.8]">
              Full Stack Developer creating modern, responsive and
              user-focused web applications with clean code and
              thoughtful UI/UX.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">

              {socialLinks.map(({ name, Icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.12,
                    y: -3,
                  }}
                  className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-muted hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                  aria-label={name}
                >
                  <Icon className="text-[17px]" />
                </motion.a>
              ))}

            </div>

          </div>

          {/* =================================================
              COLUMN 2 — QUICK LINKS
          ================================================== */}
          <div>

            <h4 className="font-grotesk font-bold text-white text-[15px] uppercase tracking-[0.1em] mb-6 flex items-center gap-2.5">

              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />

              Quick Links

            </h4>

            <div className="grid grid-cols-2 gap-y-4 gap-x-7">

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group text-[14px] font-inter font-medium text-muted/80 hover:text-white transition-all duration-300"
                >
                  <span className="inline-flex items-center gap-2">

                    <FiArrowRight
                      className="text-[11px] text-violet-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />

                    {link.name}

                  </span>
                </Link>
              ))}

            </div>

          </div>

          {/* =================================================
              COLUMN 3 — SERVICES
          ================================================== */}
          <div>

            <h4 className="font-grotesk font-bold text-white text-[15px] uppercase tracking-[0.1em] mb-6 flex items-center gap-2.5">

              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />

              Services

            </h4>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>

                  <Link
                    to="/services"
                    className="group flex items-center gap-2.5 text-[14px] font-inter font-medium text-muted/80 hover:text-white transition-all duration-300"
                  >

                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400/50 group-hover:bg-violet-400 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.7)] transition-all duration-300" />

                    {service}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              COLUMN 4 — CONTACT / CTA
          ================================================== */}
          <div>

            <h4 className="font-grotesk font-bold text-white text-[15px] uppercase tracking-[0.1em] mb-6 flex items-center gap-2.5">

              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />

              Let's Work Together

            </h4>

            <p className="text-[13px] text-muted/80 leading-7 mb-4">
              Have a project or idea in mind? Let's build something
              meaningful together.
            </p>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2.5 text-[13px] font-medium text-violet-300 hover:text-fuchsia-300 transition-colors mb-6"
            >
              <FiMail className="text-[16px]" />

              {contactInfo.email}
            </a>

            {/* CTA */}
            <Link
              to="/contact"
              className="h-11 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center gap-2.5 text-[13px] font-grotesk font-bold text-white shadow-lg shadow-violet-500/20 hover:scale-[1.03] hover:shadow-violet-500/40 transition-all duration-300"
            >
              Let's Talk

              <FiArrowRight size={16} />

            </Link>

            {/* Resume */}
            <a
              href="/resume/Yogesh-Kale-Resume.pdf"
              download="Yogesh-Kale-Resume.pdf"
              className="mt-3 h-11 px-6 rounded-xl border border-white/[0.1] bg-white/[0.04] flex items-center justify-center gap-2.5 text-[13px] font-grotesk font-semibold text-white/85 hover:text-white hover:border-violet-500/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <FiDownload size={16} />

              Download Resume

            </a>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="mt-12 pt-6 border-t border-white/[0.07]">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-[12px] font-inter font-medium text-muted/65 text-center sm:text-left">
              © 2026 YSK. All Rights Reserved.
            </p>

            {/* Privacy + Terms + Back To Top */}
            <div className="flex items-center gap-6">

              <Link
                to="/privacy-policy"
                className="text-[12px] font-inter font-semibold text-muted/70 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>

              <span className="text-white/15">
                •
              </span>

              <Link
                to="/terms"
                className="text-[12px] font-inter font-semibold text-muted/70 hover:text-white transition-colors duration-300"
              >
                Terms
              </Link>

              {/* Back To Top */}
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300"
                aria-label="Back to top"
              >
                <FiArrowUp className="text-[15px]" />
              </motion.button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}