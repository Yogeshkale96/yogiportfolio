import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  /* =====================================================
     NAVIGATION LINKS
     6 ROUTE LINKS
     + Download Resume
     + Let's Talk
     = 8 NAVIGATION ITEMS
  ====================================================== */

  const navLinks = [
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
     NAVBAR SCROLL EFFECT
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU + SCROLL TOP
     WHEN ROUTE CHANGES
  ====================================================== */

  useEffect(() => {
    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  /* =====================================================
     ACTIVE ROUTE
  ====================================================== */

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  /* =====================================================
     CLOSE MENU
  ====================================================== */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 ${
          scrolled
            ? "bg-[rgba(8,8,8,0.75)] backdrop-blur-[18px] border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >

        {/* =================================================
            MAIN NAVBAR CONTAINER
        ================================================== */}

        <div className="h-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center">

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            className="flex items-center shrink-0"
            style={{
              width: "180px",
            }}
            aria-label="YSK Portfolio Home"
          >
            <img
              src="/photo/ysk.png"
              alt="YSK Portfolio"
              className="h-12 w-auto object-contain"
            />
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION

              Visible on lg+ (laptop, desktop).
              6 links + 2 CTA buttons.
              Responsive spacing adapts to laptop/desktop.
          ================================================== */}

          <div className="hidden lg:flex items-center ml-auto min-w-0">

            {/* Navigation Links */}

            <ul
              className="flex items-center shrink-0"
              style={{
                gap: "clamp(16px, 2vw, 28px)",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`nav-link ${
                      isActive(link.href) ? "active" : ""
                    }`}
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>


            {/* =================================================
                DESKTOP CTA
            ================================================== */}

            <div
              className="flex items-center shrink-0"
              style={{
                gap: "clamp(10px, 1.5vw, 18px)",
                marginLeft: "clamp(16px, 2.5vw, 32px)",
              }}
            >

              {/* Download Resume */}

              <a
                href="/resume/Yogesh-Kale-Resume.pdf"
                download="Yogesh-Kale-Resume.pdf"
                className="h-12 w-auto px-4 xl:px-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center gap-2 text-[13px] xl:text-[15px] font-grotesk font-semibold text-white whitespace-nowrap transition-all duration-300 hover:border-violet-500 hover:bg-white/10"
              >
                <FiDownload
                  size={16}
                  className="flex-shrink-0"
                />

                <span className="hidden xl:inline">Download Resume</span>
                <span className="xl:hidden">Resume</span>
              </a>


              {/* Let's Talk */}

              <Link
                to="/contact"
                className="h-12 w-auto px-5 xl:px-7 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center gap-2 text-[13px] xl:text-[15px] font-grotesk font-semibold text-white whitespace-nowrap shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
              >
                Let's Talk

                <FiArrowRight
                  size={16}
                  className="flex-shrink-0"
                />
              </Link>

            </div>
          </div>


          {/* =================================================
              MOBILE / TABLET MENU BUTTON

              Visible below lg.
          ================================================== */}

          <button
            type="button"
            className="lg:hidden ml-auto text-white text-2xl w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10 active:bg-white/10"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <HiMenuAlt4 />
          </button>

        </div>
      </motion.nav>


      {/* =====================================================
          MOBILE / TABLET FULL SCREEN MENU
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-2xl lg:hidden flex flex-col"
          >

            {/* =================================================
                MOBILE HEADER
            ================================================== */}

            <div className="flex items-center justify-between px-5 sm:px-6 py-5 shrink-0">

              {/* Mobile Logo */}

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center"
                aria-label="YSK Portfolio Home"
              >
                <img
                  src="/photo/ysk.png"
                  alt="YSK Portfolio"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </Link>


              {/* Close */}

              <button
                type="button"
                className="text-white text-2xl w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <HiX />
              </button>

            </div>


            {/* =================================================
                MOBILE NAVIGATION

                6 LINKS
            ================================================== */}

            <div className="flex-1 overflow-y-auto">

              <ul className="flex flex-col gap-1 px-5 sm:px-6 mt-4 sm:mt-8">

                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.06,
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className={`block py-3.5 sm:py-4 text-xl sm:text-2xl font-grotesk font-medium transition-colors border-b border-white/[0.04] ${
                        isActive(link.href)
                          ? "text-white"
                          : "text-muted hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}

              </ul>


              {/* =================================================
                  MOBILE CTA

                  ITEMS 7 + 8
              ================================================== */}

              <div className="px-5 sm:px-6 mt-6 sm:mt-8 pb-8 flex flex-col gap-3">

                {/* Download Resume */}

                <a
                  href="/resume/Yogesh-Kale-Resume.pdf"
                  download="Yogesh-Kale-Resume.pdf"
                  onClick={closeMobileMenu}
                  className="btn-secondary w-full justify-center"
                >
                  <FiDownload />

                  Download Resume
                </a>


                {/* Let's Talk */}

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="btn-primary w-full justify-center"
                >
                  Let's Talk

                  <FiArrowRight />
                </Link>

              </div>

              {/* Social Links */}

              <div className="px-5 sm:px-6 pb-8">
                <div className="h-px bg-white/[0.06] mb-6" />

                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
                  Connect
                </p>

                <div className="flex items-center gap-3">
                  {socialLinks.map(({ name, Icon, href }) => (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-muted hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300"
                      aria-label={name}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}