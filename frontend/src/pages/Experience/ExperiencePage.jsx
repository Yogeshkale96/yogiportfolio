import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiServer,
  FiStar,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    id: 1,
    company: "Full Stack Guru",
    role: "Full Stack Development Intern",
    duration: "Internship",
    location: "Shivaji Nagar, Pune",
    mode: "On-site",
    status: "Completed",
    icon: FiBriefcase,
    color: "violet",

    description:
      "An internship experience focused on practical full stack development and working with modern web application technologies.",

    responsibilities: [
      "Worked on practical full stack development tasks",
      "Developed responsive web interfaces",
      "Worked with frontend and backend concepts",
      "Worked with application data and database concepts",
      "Practiced API-based application development",
      "Improved understanding of real-world development workflows",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
  },

  {
    id: 2,
    company: "Aarnix Tech Private Limited",
    role: "Full Stack Developer / Intern",
    duration: "~1 Year",
    location: "Remote / Online",
    mode: "Online",
    status: "Continuing",
    icon: FiMonitor,
    color: "fuchsia",
    current: true,

    description:
      "An ongoing online professional experience involving full stack web development, application development and working with modern web technologies.",

    responsibilities: [
      "Working on full stack web development",
      "Developing responsive and interactive interfaces",
      "Working with frontend application development",
      "Working with backend APIs and application logic",
      "Working with database-driven applications",
      "Continuing to improve practical development skills",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "REST APIs",
    ],
  },
];

/* =========================================================
   DEVELOPMENT CAPABILITIES
========================================================= */

const capabilities = [
  {
    icon: FiCode,
    title: "Frontend Development",
    text:
      "Building responsive interfaces with reusable React components and modern UI patterns.",
  },
  {
    icon: FiServer,
    title: "Backend Development",
    text:
      "Working with server-side logic, APIs and backend application architecture.",
  },
  {
    icon: FiDatabase,
    title: "Database Integration",
    text:
      "Working with structured application data and database-driven workflows.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Architecture",
    text:
      "Connecting frontend, backend and database layers into complete applications.",
  },
];

/* =========================================================
   CAREER STATS
========================================================= */

const careerStats = [
  {
    icon: FiBriefcase,
    value: "2",
    label: "Internship Experiences",
  },
  {
    icon: FiZap,
    value: "~1",
    label: "Year Ongoing Experience",
  },
  {
    icon: FiCode,
    value: "Full Stack",
    label: "Development Focus",
  },
  {
    icon: FiGlobe,
    value: "Remote + On-site",
    label: "Work Experience",
  },
];

export default function ExperiencePage() {
  const [activeExperience, setActiveExperience] = useState(2);

  return (
    <div className="min-h-screen pt-20 overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative py-24 md:py-32">

        {/* Background glow */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute top-40 right-1/4 w-72 h-72 bg-fuchsia-500/10 blur-[120px] rounded-full pointer-events-none" />

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

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm">
              <FiBriefcase />
              Professional Journey
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">

              Experience That
              <span className="gradient-text block">
                Builds Expertise
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-muted leading-8 max-w-3xl">
              My professional journey has given me practical exposure to
              full stack development, modern web technologies and real-world
              application development.
            </p>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CAREER STATS
      ====================================================== */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {careerStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="glass-card p-5 md:p-6 text-center"
                >

                  <div className="mx-auto w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                    <Icon size={21} />
                  </div>

                  <div className="mt-4 text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>

                  <p className="mt-1 text-xs md:text-sm text-muted">
                    {stat.label}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE JOURNEY
      ====================================================== */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section heading */}

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-violet-400 text-sm uppercase tracking-widest">
              Career Journey
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">

              My Professional
              <span className="gradient-text">
                {" "}Experience
              </span>

            </h2>

            <p className="mt-5 text-muted leading-7">
              Explore the different stages of my development journey and
              the practical experience gained along the way.
            </p>

          </div>

          {/* =================================================
              DESKTOP TIMELINE
          ================================================== */}

          <div className="relative mt-20">

            {/* Timeline line */}

            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500/40 to-transparent" />

            <div className="space-y-16">

              {experiences.map((experience, index) => {

                const Icon = experience.icon;

                const isActive =
                  activeExperience === experience.id;

                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={experience.id}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="relative"
                  >

                    {/* Timeline center icon */}

                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-20">

                      <motion.div
                        animate={
                          experience.current
                            ? {
                                scale: [1, 1.12, 1],
                              }
                            : {}
                        }
                        transition={
                          experience.current
                            ? {
                                duration: 2,
                                repeat: Infinity,
                              }
                            : {}
                        }
                        className={`w-14 h-14 rounded-full border-4 border-[#08080d] flex items-center justify-center text-white shadow-xl ${
                          experience.current
                            ? "bg-gradient-to-br from-fuchsia-500 to-violet-600"
                            : "bg-violet-600"
                        }`}
                      >
                        <Icon size={22} />

                      </motion.div>

                    </div>

                    {/* Experience card */}

                    <div
                      className={`lg:w-[calc(50%-55px)] ${
                        isLeft
                          ? "lg:mr-auto lg:pr-0"
                          : "lg:ml-auto lg:pl-0"
                      }`}
                    >

                      <motion.button
                        type="button"
                        onClick={() =>
                          setActiveExperience(
                            isActive
                              ? null
                              : experience.id
                          )
                        }
                        whileHover={{
                          y: -6,
                        }}
                        className={`w-full text-left glass-card p-6 md:p-8 transition-all duration-300 ${
                          isActive
                            ? "border-violet-500/40 shadow-xl shadow-violet-500/5"
                            : "hover:border-white/20"
                        }`}
                      >

                        {/* Top row */}

                        <div className="flex items-start justify-between gap-4">

                          <div className="flex items-start gap-4">

                            <div
                              className={`lg:hidden w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
                                experience.current
                                  ? "bg-fuchsia-500/10 text-fuchsia-400"
                                  : "bg-violet-500/10 text-violet-400"
                              }`}
                            >
                              <Icon size={22} />
                            </div>

                            <div>

                              {/* Status */}

                              <div className="flex flex-wrap items-center gap-2">

                                <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">
                                  {experience.duration}
                                </span>

                                {experience.current && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-semibold uppercase tracking-wider">

                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />

                                    Current
                                  </span>
                                )}

                              </div>

                              <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                                {experience.role}
                              </h3>

                              <p className="mt-1 text-fuchsia-400 font-medium">
                                {experience.company}
                              </p>

                            </div>

                          </div>

                          {/* Arrow */}

                          <motion.div
                            animate={{
                              rotate: isActive
                                ? 180
                                : 0,
                            }}
                            className="w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted"
                          >
                            <FiChevronDown size={18} />
                          </motion.div>

                        </div>

                        {/* Meta */}

                        <div className="mt-5 flex flex-wrap gap-3">

                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-gray-400">
                            <FiMapPin className="text-violet-400" />
                            {experience.location}
                          </span>

                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-gray-400">
                            <FiMonitor className="text-violet-400" />
                            {experience.mode}
                          </span>

                        </div>

                        {/* Short description */}

                        <p className="mt-5 text-sm text-muted leading-7">
                          {experience.description}
                        </p>

                        {/* Expandable content */}

                        <AnimatePresence initial={false}>

                          {isActive && (
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
                                duration: 0.3,
                              }}
                              className="overflow-hidden"
                            >

                              <div className="pt-6 mt-6 border-t border-white/5">

                                {/* Responsibilities */}

                                <h4 className="text-sm font-semibold text-white">
                                  Key Responsibilities
                                </h4>

                                <div className="mt-4 grid gap-3">

                                  {experience.responsibilities.map(
                                    (item) => (
                                      <div
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-gray-300"
                                      >
                                        <FiCheck className="text-violet-400 mt-0.5 shrink-0" />
                                        <span>
                                          {item}
                                        </span>
                                      </div>
                                    )
                                  )}

                                </div>

                                {/* Technologies */}

                                <h4 className="mt-7 text-sm font-semibold text-white">
                                  Technologies & Areas
                                </h4>

                                <div className="mt-4 flex flex-wrap gap-2">

                                  {experience.technologies.map(
                                    (technology) => (
                                      <span
                                        key={technology}
                                        className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/10 text-xs text-violet-300"
                                      >
                                        {technology}
                                      </span>
                                    )
                                  )}

                                </div>

                              </div>

                            </motion.div>
                          )}

                        </AnimatePresence>

                        {/* Click hint */}

                        <div className="mt-6 flex items-center gap-2 text-xs text-muted">
                          <FiStar className="text-violet-400" />

                          {isActive
                            ? "Click to collapse details"
                            : "Click to explore experience"}

                        </div>

                      </motion.button>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <span className="text-violet-400 text-sm uppercase tracking-widest">
              What I Work With
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">

              Development
              <span className="gradient-text">
                {" "}Capabilities
              </span>

            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-muted">
              The technical areas I work across while developing modern
              full stack applications.
            </p>

          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {capabilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="glass-card p-7 group"
                >

                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted leading-7">
                    {item.text}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          CURRENT EXPERIENCE HIGHLIGHT
      ====================================================== */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-3xl border border-fuchsia-500/20 bg-gradient-to-br from-violet-600/10 via-white/[0.02] to-fuchsia-500/10 p-8 md:p-12"
          >

            {/* Glow */}

            <div className="absolute -top-24 -right-24 w-72 h-72 bg-fuchsia-500/10 blur-[100px] rounded-full" />

            <div className="relative">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">

                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                    Currently Continuing

                  </div>

                  <h2 className="mt-5 text-2xl md:text-4xl font-bold text-white">
                    Aarnix Tech Private Limited
                  </h2>

                  <p className="mt-2 text-fuchsia-400">
                    Full Stack Development • Online Experience
                  </p>

                </div>

                <div className="shrink-0">

                  <div className="text-4xl font-bold gradient-text">
                    ~1
                  </div>

                  <div className="text-sm text-muted">
                    Year & Continuing
                  </div>

                </div>

              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">

                {[
                  "Full Stack Development",
                  "Modern Web Applications",
                  "Continuous Learning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <FiCheck className="text-fuchsia-400 shrink-0" />
                    <span className="text-sm text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="glass-card p-10 md:p-16 text-center">

            <div className="mx-auto w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
              <FiBriefcase size={25} />
            </div>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">

              Let's Build Something
              <span className="gradient-text">
                {" "}Meaningful
              </span>

            </h2>

            <p className="mt-5 text-muted max-w-2xl mx-auto">
              Have a project that needs a modern technical solution?
              Let's discuss your requirements and build something useful.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Start a Conversation
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}