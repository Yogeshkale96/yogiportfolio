import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdShield,
  MdInfo,
  MdEmail,
  MdSecurity,
  MdCookie,
  MdLink,
  MdUpdate,
  MdPerson,
  MdDescription,
  MdExpandMore,
} from "react-icons/md";
import { Link } from "react-router-dom";

/* =========================================================
   PRIVACY POLICY SECTIONS
========================================================= */

const sections = [
  {
    id: "information",
    icon: MdInfo,
    number: "01",
    title: "Information I Collect",
    content: (
      <>
        <p>
          When you use this portfolio website or contact me regarding a
          project, consultation, freelance opportunity, or other inquiry, you
          may voluntarily provide information such as your name, email address,
          phone number, company name, project details, and other information
          included in your message.
        </p>

        <p>
          I only request information that is reasonably relevant to
          understanding your inquiry and communicating with you.
        </p>
      </>
    ),
  },

  {
    id: "usage",
    icon: MdDescription,
    number: "02",
    title: "How Your Information Is Used",
    content: (
      <>
        <p>
          Information submitted through this portfolio may be used to:
        </p>

        <ul className="list-disc pl-5 space-y-1.5">
          <li>Respond to your project or service inquiry.</li>
          <li>Discuss website or application development requirements.</li>
          <li>Provide information about development services.</li>
          <li>Understand your project requirements and expectations.</li>
          <li>Communicate regarding potential freelance or consulting work.</li>
          <li>Improve the website and overall user experience.</li>
        </ul>

        <p>
          Your information is not intentionally collected for purposes
          unrelated to your interaction with this portfolio.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    icon: MdEmail,
    number: "03",
    title: "Contact & Inquiry Information",
    content: (
      <>
        <p>
          If you contact me through the inquiry or contact section of this
          portfolio, the information you provide may be used to communicate
          with you about your request.
        </p>

        <p>
          This may include information such as your name, email address,
          phone number, company, project type, technology requirements,
          budget, timeline, and project description when those details are
          voluntarily provided.
        </p>

        <p>
          Please avoid submitting passwords, financial account credentials,
          government identification numbers, or other highly sensitive
          information through general inquiry forms.
        </p>
      </>
    ),
  },

  {
    id: "security",
    icon: MdSecurity,
    number: "04",
    title: "Data Security",
    content: (
      <>
        <p>
          Reasonable measures may be used to protect information submitted
          through this website against unauthorized access, misuse, alteration,
          or disclosure.
        </p>

        <p>
          However, no website, online communication method, or electronic
          storage system can be guaranteed to be completely secure.
        </p>
      </>
    ),
  },

  {
    id: "retention",
    icon: MdPerson,
    number: "05",
    title: "Information Retention",
    content: (
      <>
        <p>
          Information may be retained for as long as reasonably necessary to
          respond to inquiries, maintain relevant project communication, or
          fulfill legitimate business and administrative requirements.
        </p>

        <p>
          Information that is no longer reasonably required may be removed or
          deleted where appropriate.
        </p>
      </>
    ),
  },

  {
    id: "cookies",
    icon: MdCookie,
    number: "06",
    title: "Cookies & Analytics",
    content: (
      <>
        <p>
          This website may use cookies, analytics tools, or similar
          technologies if they are enabled in the future.
        </p>

        <p>
          These technologies may help understand website usage, improve
          performance, identify technical issues, and improve the overall
          experience.
        </p>

        <p>
          If analytics or third-party tracking services are added, the privacy
          practices of those services may also apply.
        </p>
      </>
    ),
  },

  {
    id: "third-party",
    icon: MdLink,
    number: "07",
    title: "Third-Party Services & Links",
    content: (
      <>
        <p>
          This portfolio may contain links to third-party websites and
          services such as GitHub, LinkedIn, hosting platforms, social media,
          project demonstrations, or other external resources.
        </p>

        <p>
          External websites operate under their own privacy policies and
          terms. I am not responsible for the privacy practices or content of
          third-party websites.
        </p>
      </>
    ),
  },

  {
    id: "resume",
    icon: MdDescription,
    number: "08",
    title: "Resume Downloads",
    content: (
      <>
        <p>
          This portfolio may provide an option to view or download my resume.
          Downloading the resume itself does not require you to provide
          personal information through the website.
        </p>
      </>
    ),
  },

  {
    id: "rights",
    icon: MdShield,
    number: "09",
    title: "Your Privacy Choices",
    content: (
      <>
        <p>
          You may choose what information you provide through the contact and
          inquiry sections of this portfolio.
        </p>

        <p>
          If you have previously contacted me and want to ask about the
          information you provided or request that relevant information no
          longer be retained, you can contact me using the email address
          below.
        </p>
      </>
    ),
  },

  {
    id: "changes",
    icon: MdUpdate,
    number: "10",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          This Privacy Policy may be updated when the portfolio, services,
          technologies, or data-handling practices change.
        </p>

        <p>
          Any updated version will be published on this page with the revised
          effective date.
        </p>
      </>
    ),
  },
];

/* =========================================================
   PRIVACY PAGE
========================================================= */

const PrivacyPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection((current) =>
      current === id ? null : id
    );
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="absolute top-[35%] -right-40 w-96 h-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />

        <div className="absolute bottom-0 left-[35%] w-96 h-96 rounded-full bg-blue-600/10 blur-[120px]" />

      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative pt-28 pb-12 md:pb-16">

        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-300 text-xs font-medium">

              <MdShield className="text-base" />

              Privacy & Security

            </div>

            {/* Heading */}

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">

              Privacy

              <span className="block gradient-text">
                Policy
              </span>

            </h1>

            <p className="mt-4 max-w-xl mx-auto text-slate-400 leading-7 text-sm md:text-base">

              Your privacy matters. This page explains how information may
              be collected, used, protected, and managed when you interact
              with this portfolio.

            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          PRIVACY POLICY ACCORDION
      ====================================================== */}

      <section className="relative pb-20">

        <div className="max-w-4xl mx-auto px-6">

          {/* Intro */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-violet-500/[0.08] to-fuchsia-500/[0.04] border border-violet-400/15"
          >

            <div className="flex items-start gap-3">

              <div className="shrink-0 w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-400/20 flex items-center justify-center">

                <MdShield className="text-xl text-violet-300" />

              </div>

              <div>

                <h2 className="text-lg md:text-xl font-semibold text-white">
                  Your Privacy
                </h2>

                <p className="mt-2 text-sm text-slate-400 leading-7">

                  This Privacy Policy describes how information may be
                  handled when you visit this portfolio, interact with its
                  content, or contact me about development services,
                  freelance work, consultation, or other professional
                  inquiries.

                </p>

              </div>

            </div>

          </motion.div>

          {/* =================================================
              NUMBERED SECTIONS
          ================================================= */}

          <div className="space-y-3">

            {sections.map((section, index) => {

              const Icon = section.icon;
              const isOpen = openSection === section.id;

              return (
                <motion.div
                  key={section.id}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.03, 0.15),
                  }}
                  className={`
                    overflow-hidden
                    rounded-xl
                    border
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-violet-400/30 bg-violet-500/[0.05] shadow-[0_0_30px_rgba(139,92,246,0.06)]"
                        : "border-white/10 bg-white/[0.03] hover:border-violet-400/20 hover:bg-white/[0.045]"
                    }
                  `}
                >

                  {/* =================================================
                      CLICKABLE HEADER
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-5 text-left"
                  >

                    {/* Number */}

                    <div
                      className={`
                        shrink-0
                        w-10 h-10
                        md:w-11 md:h-11
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-violet-500/20 border-violet-400/30"
                            : "bg-white/[0.035] border-white/10"
                        }
                      `}
                    >

                      <span
                        className={`
                          text-xs
                          md:text-sm
                          font-semibold
                          ${
                            isOpen
                              ? "text-violet-300"
                              : "text-slate-400"
                          }
                        `}
                      >
                        {section.number}
                      </span>

                    </div>

                    {/* Icon */}

                    <div
                      className={`
                        hidden sm:flex
                        shrink-0
                        w-9 h-9
                        md:w-10 md:h-10
                        rounded-lg
                        items-center
                        justify-center
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-violet-500/15 border-violet-400/20"
                            : "bg-white/[0.025] border-white/10"
                        }
                      `}
                    >

                      <Icon
                        className={`
                          text-lg md:text-xl
                          ${
                            isOpen
                              ? "text-violet-300"
                              : "text-slate-400"
                          }
                        `}
                      />

                    </div>

                    {/* Heading */}

                    <div className="flex-1 min-w-0">

                      <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-violet-400 mb-0.5">
                        Section {section.number}
                      </span>

                      <h2
                        className={`
                          text-sm
                          sm:text-base
                          md:text-lg
                          font-semibold
                          transition-colors
                          ${
                            isOpen
                              ? "text-white"
                              : "text-slate-200"
                          }
                        `}
                      >
                        {section.title}
                      </h2>

                    </div>

                    {/* Expand */}

                    <div
                      className={`
                        shrink-0
                        w-8 h-8
                        md:w-9 md:h-9
                        rounded-full
                        flex
                        items-center
                        justify-center
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-violet-500/15 border-violet-400/20"
                            : "bg-white/[0.025] border-white/10"
                        }
                      `}
                    >

                      <MdExpandMore
                        className={`
                          text-lg
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? "rotate-180 text-violet-300"
                              : "text-slate-400"
                          }
                        `}
                      />

                    </div>

                  </button>

                  {/* =================================================
                      DETAILS
                  ================================================= */}

                  <AnimatePresence initial={false}>

                    {isOpen && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                        }}
                      >

                        <div className="px-4 md:px-5 pb-5">

                          <div className="h-px bg-white/10 mb-5" />

                          <div className="flex">

                            {/* Accent line */}

                            <div className="w-0.5 shrink-0 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500/50 to-transparent" />

                            {/* Content */}

                            <div className="pl-4 md:pl-5 flex-1">

                              <div className="text-xs sm:text-sm text-slate-400 leading-6 sm:leading-7 space-y-3">

                                {section.content}

                              </div>

                            </div>

                          </div>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

          {/* =====================================================
              PRIVACY CONTACT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-8 relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent p-6 md:p-7"
          >

            <div className="absolute -top-20 -right-20 w-52 h-52 bg-violet-500/10 rounded-full blur-[70px]" />

            <div className="relative">

              <div className="w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-400/20 flex items-center justify-center">

                <MdEmail className="text-xl text-violet-300" />

              </div>

              <h2 className="mt-5 text-xl md:text-2xl font-semibold text-white">
                Questions About Privacy?
              </h2>

              <p className="mt-3 max-w-xl text-sm text-slate-400 leading-7">

                If you have questions about this Privacy Policy or the
                information you have provided through this portfolio,
                you can contact me directly.

              </p>

              <a
                href="mailto:yogeshkale15101999@gmail.com"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-500/15 border border-violet-400/20 text-sm text-violet-200 font-medium hover:bg-violet-500/25 hover:border-violet-400/40 transition-all"
              >

                <MdEmail className="text-lg" />

                Contact Me

              </a>

            </div>

          </motion.div>

          {/* =====================================================
              BOTTOM CTA
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center mt-12"
          >

            <p className="text-slate-500 text-xs">
              Looking for a developer for your next project?
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-3 px-6 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-white font-medium hover:bg-violet-500/10 hover:border-violet-400/30 transition-all"
            >
              Get In Touch
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default PrivacyPage;