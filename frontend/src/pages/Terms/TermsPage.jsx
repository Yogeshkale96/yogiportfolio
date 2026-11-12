import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdGavel,
  MdInfo,
  MdPerson,
  MdBusiness,
  MdDescription,
  MdPayment,
  MdSecurity,
  MdCopyright,
  MdLink,
  MdWarning,
  MdUpdate,
  MdEmail,
  MdExpandMore,
} from "react-icons/md";
import { Link } from "react-router-dom";

const TermsPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: MdGavel,
      content: (
        <>
          <p>
            By accessing and using this website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms & Conditions.
          </p>

          <p>
            If you do not agree with any part of these terms, please discontinue
            your use of the website and its services.
          </p>

          <p>
            These terms apply to all visitors, users, and individuals who
            interact with the website.
          </p>
        </>
      ),
    },

    {
      id: 2,
      title: "Use of the Website",
      icon: MdInfo,
      content: (
        <>
          <p>
            You may use this website only for lawful purposes and in accordance
            with these Terms & Conditions.
          </p>

          <p>
            You agree not to use the website in a way that could damage,
            disable, overburden, or interfere with its normal operation.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Do not use the website for unlawful activities.</li>
            <li>Do not attempt unauthorized access.</li>
            <li>Do not interfere with website functionality.</li>
            <li>Do not submit misleading or fraudulent information.</li>
          </ul>
        </>
      ),
    },

    {
      id: 3,
      title: "User Information & Accounts",
      icon: MdPerson,
      content: (
        <>
          <p>
            When you provide information through forms, inquiries, or other
            website features, you agree to provide information that is accurate
            and complete to the best of your knowledge.
          </p>

          <p>
            You are responsible for maintaining the accuracy of information
            submitted by you and for any activity associated with information
            provided through the website.
          </p>

          <p>
            Please refer to our{" "}
            <Link
              to="/privacy-policy"
              className="text-violet-300 hover:text-fuchsia-300 transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            for information about how submitted personal information is handled.
          </p>
        </>
      ),
    },

    {
      id: 4,
      title: "Services & Business Inquiries",
      icon: MdBusiness,
      content: (
        <>
          <p>
            Information presented on this website describes available services,
            capabilities, and areas of work. Specific project requirements,
            timelines, pricing, deliverables, and responsibilities may vary
            depending on the individual inquiry.
          </p>

          <p>
            Submitting an inquiry does not automatically create a contractual
            relationship between you and the service provider.
          </p>

          <p>
            Any formal engagement may require separate written communication,
            confirmation, agreement, or other documentation.
          </p>
        </>
      ),
    },

    {
      id: 5,
      title: "Project Scope & Agreements",
      icon: MdDescription,
      content: (
        <>
          <p>
            For development, design, consultation, or other professional
            services, the final scope of work may be established separately
            based on the requirements of the project.
          </p>

          <p>
            Project-specific agreements may define deliverables, milestones,
            revisions, timelines, payment terms, ownership, and other applicable
            conditions.
          </p>

          <p>
            Where a separate agreement exists, its terms will govern the
            applicable project or service.
          </p>
        </>
      ),
    },

    {
      id: 6,
      title: "Payments & Fees",
      icon: MdPayment,
      content: (
        <>
          <p>
            Where paid services are agreed upon, applicable fees and payment
            requirements will be communicated before the relevant work begins.
          </p>

          <p>
            Payment schedules, deposits, milestones, refunds, and other
            financial conditions may be defined through a separate project
            agreement or written communication.
          </p>

          <p>
            No payment terms are created solely by browsing this website or
            submitting a general inquiry.
          </p>
        </>
      ),
    },

    {
      id: 7,
      title: "Intellectual Property",
      icon: MdCopyright,
      content: (
        <>
          <p>
            Unless otherwise stated, the content available on this website,
            including text, graphics, branding, design elements, layouts, and
            other materials, is protected by applicable intellectual property
            laws.
          </p>

          <p>
            You may not reproduce, copy, modify, distribute, or commercially
            exploit website content without appropriate authorization.
          </p>

          <p>
            Project-specific ownership or licensing of deliverables may be
            defined separately in the applicable agreement.
          </p>
        </>
      ),
    },

    {
      id: 8,
      title: "Third-Party Links & Services",
      icon: MdLink,
      content: (
        <>
          <p>
            This website may contain links to third-party websites, platforms,
            tools, or services for convenience or additional information.
          </p>

          <p>
            Third-party websites operate independently and may have their own
            terms, privacy policies, and practices.
          </p>

          <p>
            We are not responsible for the content, availability, or policies of
            third-party websites or services.
          </p>
        </>
      ),
    },

    {
      id: 9,
      title: "Security & Prohibited Activities",
      icon: MdSecurity,
      content: (
        <>
          <p>
            You must not attempt to compromise the security or integrity of the
            website or its underlying systems.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              Attempting unauthorized access to systems, accounts, or data.
            </li>
            <li>
              Introducing malicious code, viruses, or harmful software.
            </li>
            <li>
              Attempting to disrupt or interfere with website availability.
            </li>
            <li>
              Using automated methods to abuse or overload website resources.
            </li>
          </ul>

          <p>
            We reserve the right to take appropriate action where prohibited or
            harmful activity is identified.
          </p>
        </>
      ),
    },

    {
      id: 10,
      title: "Disclaimer & Limitation",
      icon: MdWarning,
      content: (
        <>
          <p>
            Website information is provided for general informational purposes.
            While reasonable efforts may be made to keep information useful and
            current, no guarantee is made that all content will always be
            complete, accurate, or error-free.
          </p>

          <p>
            Website availability may also be affected by maintenance,
            technical issues, hosting problems, or circumstances outside
            reasonable control.
          </p>

          <p>
            Use of the website and reliance on its information is at your own
            discretion.
          </p>
        </>
      ),
    },

    {
      id: 11,
      title: "Changes to These Terms",
      icon: MdUpdate,
      content: (
        <>
          <p>
            These Terms & Conditions may be updated from time to time to reflect
            changes to the website, services, practices, or applicable
            requirements.
          </p>

          <p>
            Updated terms will be made available on this page when changes are
            implemented.
          </p>

          <p>
            Your continued use of the website after an update indicates that
            you have reviewed the updated terms.
          </p>
        </>
      ),
    },

    {
      id: 12,
      title: "Contact Information",
      icon: MdEmail,
      content: (
        <>
          <p>
            If you have questions about these Terms & Conditions, you can
            contact us using the information provided below.
          </p>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 mt-3">
            <p className="text-slate-300">
              <span className="text-slate-500">Email:</span>{" "}
              <a
                href="mailto:yogeshkale15101999@gmail.com"
                className="text-violet-300 hover:text-fuchsia-300 transition-colors"
              >
                yogeshkale15101999@gmail.com
              </a>
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-[35%] -right-40 w-96 h-96 rounded-full bg-fuchsia-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-[35%] w-96 h-72 rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-violet-400/20 bg-violet-500/[0.06] backdrop-blur-md">
              <MdGavel className="text-violet-300 text-base" />

              <span className="text-[11px] sm:text-xs text-violet-200">
                Terms & Conditions
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Terms of{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-sm md:text-base text-slate-400 leading-7">
              Please review these terms to understand the rules and conditions
              that apply when using this website and its services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative px-4 sm:px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 md:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 shrink-0 rounded-lg bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
                <MdInfo className="text-violet-300 text-lg" />
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  Please Read Carefully
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 leading-6">
                  These Terms & Conditions describe the general terms governing
                  your access to and use of this website. By continuing to use
                  the website, you agree to follow the applicable terms described
                  below.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accordion */}
      <section className="relative px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-3">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isOpen = openSection === section.id;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.03, 0.25),
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
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-5 text-left"
                >
                  {/* Number */}
                  <div
                    className={`
                      w-8 h-8 md:w-9 md:h-9
                      shrink-0
                      rounded-lg
                      flex items-center justify-center
                      text-xs md:text-sm
                      font-semibold
                      border
                      transition-all duration-300
                      ${
                        isOpen
                          ? "bg-violet-500/15 border-violet-400/30 text-violet-200"
                          : "bg-white/[0.04] border-white/10 text-slate-400"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className={`
                      w-8 h-8 md:w-9 md:h-9
                      shrink-0
                      rounded-lg
                      flex items-center justify-center
                      border
                      transition-all duration-300
                      ${
                        isOpen
                          ? "bg-fuchsia-500/10 border-fuchsia-400/20"
                          : "bg-white/[0.03] border-white/10"
                      }
                    `}
                  >
                    <Icon
                      className={`text-lg ${
                        isOpen ? "text-fuchsia-300" : "text-slate-400"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`
                        text-sm sm:text-base md:text-lg
                        font-medium
                        transition-colors
                        ${
                          isOpen
                            ? "text-white"
                            : "text-slate-200 group-hover:text-white"
                        }
                      `}
                    >
                      {section.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <MdExpandMore className="text-xl text-slate-500" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-4 md:px-5 pb-5">
                        <div className="h-px bg-white/10 mb-5" />

                        <div className="flex">
                          <div className="w-0.5 shrink-0 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500/50 to-transparent" />

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
      </section>

      {/* Contact CTA */}
      <section className="relative px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.03] to-fuchsia-500/[0.06] backdrop-blur-xl p-6 md:p-8"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-500/10 blur-[80px] rounded-full" />

            <div className="relative text-center">
              <div className="mx-auto mb-4 w-10 h-10 rounded-xl border border-violet-400/20 bg-violet-500/10 flex items-center justify-center">
                <MdEmail className="text-violet-300 text-xl" />
              </div>

              <h2 className="text-xl md:text-2xl font-semibold">
                Have Questions About These Terms?
              </h2>

              <p className="max-w-xl mx-auto mt-3 text-xs sm:text-sm text-slate-400 leading-6">
                If you have any questions regarding these Terms & Conditions,
                feel free to contact us.
              </p>

              <a
                href="mailto:yogeshkale15101999@gmail.com"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-sm font-medium transition-all duration-300 shadow-lg shadow-violet-900/20"
              >
                <MdEmail className="text-lg" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Links */}
      <section className="relative border-t border-white/10 px-4 sm:px-6 py-7">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm">
          <Link
            to="/privacy-policy"
            className="text-slate-400 hover:text-violet-300 transition-colors"
          >
            Privacy Policy
          </Link>

          <span className="hidden sm:block text-slate-700">•</span>

          <Link
            to="/contact"
            className="text-slate-400 hover:text-violet-300 transition-colors"
          >
            Contact
          </Link>

          <span className="hidden sm:block text-slate-700">•</span>

          <Link
            to="/"
            className="text-slate-400 hover:text-violet-300 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;