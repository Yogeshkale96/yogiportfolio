import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiShield,
  FiTool,
  FiX,
  FiCloud,
} from "react-icons/fi";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSequelize,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";

import { Link } from "react-router-dom";
import { useState } from "react";

/* =========================================================
   ALL SKILLS DATA
   Everything is maintained inside this page.
========================================================= */

const skillGroups = [
  {
    icon: FiCode,
    title: "Frontend Development",
    shortTitle: "Frontend",
    gradient: "from-violet-500 to-fuchsia-500",

    description:
      "Creating modern, responsive and interactive interfaces with a strong focus on usability and visual experience.",

    focus:
      "Building responsive interfaces, reusable components and interactive user experiences.",

    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],

    capabilities: [
      "Component-based UI development",
      "Responsive layouts",
      "Interactive interfaces",
      "Reusable components",
      "Modern frontend architecture",
    ],
  },

  {
    icon: FiServer,
    title: "Backend Development",
    shortTitle: "Backend",
    gradient: "from-blue-500 to-violet-500",

    description:
      "Developing APIs and server-side application architecture that connects applications with business logic and data.",

    focus:
      "Building REST APIs, backend workflows and server-side functionality for web applications.",

    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "API Integration",
      "Authentication",
      "Server Architecture",
    ],

    capabilities: [
      "REST API development",
      "Backend business logic",
      "API integration",
      "Server-side architecture",
      "Request and response handling",
    ],
  },

  {
    icon: FiDatabase,
    title: "Database Development",
    shortTitle: "Database",
    gradient: "from-cyan-500 to-blue-500",

    description:
      "Working with application data, database structures and relationships required by modern web applications.",

    focus:
      "Designing structured data flows and integrating applications with databases.",

    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
      "Data Modeling",
      "Sequelize",
      "Database Integration",
    ],

    capabilities: [
      "Database structure design",
      "CRUD operations",
      "Data modeling",
      "Application-database integration",
      "Query-based data handling",
    ],
  },

  {
    icon: FiShield,
    title: "Security & Authentication",
    shortTitle: "Security",
    gradient: "from-fuchsia-500 to-pink-500",

    description:
      "Building protected application flows with authentication, authorization and controlled access.",

    focus:
      "Implementing authentication and protected application workflows.",

    skills: [
      "JWT",
      "OTP",
      "OAuth",
      "Role-Based Access",
      "Protected Routes",
    ],

    capabilities: [
      "Authentication flows",
      "Protected routes",
      "Role-based access",
      "Token-based authentication",
      "Secure application workflows",
    ],
  },

  {
    icon: FiTool,
    title: "Development Tools",
    shortTitle: "Tools",
    gradient: "from-indigo-500 to-violet-500",

    description:
      "Using modern development tools for coding, version control, testing, API development and project workflow.",

    focus:
      "Using practical development tools to build, test and manage applications efficiently.",

    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "NPM",
      "Vite",
      "Postman",
    ],

    capabilities: [
      "Version control",
      "Git-based collaboration",
      "API testing",
      "Modern build tooling",
      "Development workflow",
    ],
  },

  {
    icon: FiLayers,
    title: "Application Architecture",
    shortTitle: "Architecture",
    gradient: "from-purple-500 to-blue-500",

    description:
      "Structuring applications with reusable components and maintainable architecture.",

    focus:
      "Creating organized application structures that are easier to maintain and extend.",

    skills: [
      "Component Architecture",
      "MVC",
      "Reusable Components",
      "Clean Code",
      "API Architecture",
    ],

    capabilities: [
      "Component architecture",
      "MVC structure",
      "Reusable UI patterns",
      "Maintainable code organization",
      "Scalable project structure",
    ],
  },
];

/* =========================================================
   TECHNOLOGY STACK
   All technology data is maintained inside SkillsPage.jsx
========================================================= */

const technologyCategories = [
  {
    title: "Frontend",
    subtitle: "Modern User Interfaces",
    icon: FiCode,
    gradient: "from-primary to-secondary",

    skills: [
      {
        name: "React",
        Icon: SiReact,
        color: "#61DAFB",
      },
     
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "JavaScript",
        Icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "HTML5",
        Icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        Icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "Redux",
        Icon: SiRedux,
        color: "#764ABC",
      },
      {
        name: "Framer Motion",
        Icon: FiCode,
        color: "#8B5CF6",
      },
    ],
  },

  {
    title: "Backend",
    subtitle: "Server & API Development",
    icon: FiServer,
    gradient: "from-secondary to-accent",

    skills: [
      {
        name: "Node.js",
        Icon: SiNodedotjs,
        color: "#339933",
      },
      {
        name: "Express.js",
        Icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        name: "REST APIs",
        Icon: FiServer,
        color: "#8B5CF6",
      },
      {
        name: "JWT",
        Icon: SiJsonwebtokens,
        color: "#D63AFF",
      },
      {
        name: "Firebase",
        Icon: SiFirebase,
        color: "#FFCA28",
      },
      {
        name: "Authentication",
        Icon: FiServer,
        color: "#A855F7",
      },
    ],
  },

  {
    title: "Database",
    subtitle: "Data & Database Management",
    icon: FiDatabase,
    gradient: "from-accent to-primary",

    skills: [
      {
        name: "MongoDB",
        Icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "MySQL",
        Icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Sequelize",
        Icon: SiSequelize,
        color: "#52B0E7",
      },
    ],
  },

  {
    title: "Tools",
    subtitle: "Development & Design Tools",
    icon: FiTool,
    gradient: "from-primary to-accent",

    skills: [
      {
        name: "Git",
        Icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        Icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        name: "Postman",
        Icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "VS Code",
        Icon: FiCode,
        color: "#007ACC",
      },
      {
        name: "Figma",
        Icon: SiFigma,
        color: "#F24E1E",
      },
    ],
  },
];

/* =========================================================
   DEVELOPMENT PRINCIPLES
========================================================= */

const principles = [
  "Responsive-first development",
  "Reusable component architecture",
  "Clean and maintainable code",
  "Performance-focused interfaces",
  "Secure application workflows",
  "Scalable project structure",
];

/* =========================================================
   SKILLS PAGE
========================================================= */

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="min-h-screen pt-20 overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm">
              <FiTool />
              Skills & Technologies
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Technical Skills That
              <span className="gradient-text block">
                Power My Work
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted leading-7 sm:leading-8 max-w-3xl">
              A practical combination of frontend, backend, database,
              security and development skills used to create complete
              digital solutions.
            </p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SKILL CARDS
      ===================================================== */}

      <section className="pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.button
                  key={group.title}
                  type="button"
                  onClick={() => setSelectedSkill(group)}

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}

                  whileHover={{
                    y: -8,
                  }}

                  whileTap={{
                    scale: 0.98,
                  }}

                  className="group relative text-left glass-card p-5 sm:p-6 md:p-8 overflow-hidden border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                >

                  {/* Background Glow */}

                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-fuchsia-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                  {/* Top */}

                  <div className="relative flex items-start justify-between">

                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${group.gradient} bg-opacity-10 border border-violet-500/10 flex items-center justify-center text-white`}
                    >
                      <Icon size={25} />
                    </div>

                    <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-violet-500/30 transition-all duration-300">

                      <FiArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />

                    </div>

                  </div>


                  {/* Heading */}

                  <div className="relative mt-6 sm:mt-7">

                    <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
                      {group.shortTitle}
                    </p>

                    <h2 className="mt-2 text-lg sm:text-xl font-bold text-white">
                      {group.title}
                    </h2>

                    <p className="mt-3 text-sm text-muted leading-7">
                      {group.description}
                    </p>

                  </div>


                  {/* Skills Preview */}

                  <div className="relative mt-6 flex flex-wrap gap-2">

                    {group.skills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-300 group-hover:border-violet-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}

                    {group.skills.length > 5 && (
                      <span className="px-2.5 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/10 text-xs text-violet-300">
                        +{group.skills.length - 5}
                      </span>
                    )}

                  </div>


                  {/* Bottom */}

                  <div className="relative mt-7 pt-5 border-t border-white/5 flex items-center justify-between gap-3">

                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                      Explore skill set
                    </span>

                    <span className="text-xs text-violet-400">
                      View details
                    </span>

                  </div>

                </motion.button>
              );
            })}

          </div>

        </div>
      </section>


     {/* =====================================================
    TECHNOLOGY STACK
===================================================== */}

<section className="relative py-20 md:py-28 overflow-hidden">

  {/* Background Glow */}

  <div className="absolute top-[15%] left-[5%] w-[280px] h-[280px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

  <div className="absolute bottom-[10%] right-[5%] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-[130px] pointer-events-none" />


  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* =================================================
        SECTION HEADER
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.6,
      }}

      className="max-w-3xl"
    >

      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm">
        <FiCode />
        Technology Stack
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">

        Tools & Technologies

        <span className="gradient-text block">
          I Work With
        </span>

      </h2>


      <p className="mt-6 text-sm sm:text-base text-muted leading-7 sm:leading-8 max-w-2xl">
        A collection of technologies, frameworks, databases and
        development tools I use to design, develop and maintain
        modern web applications.
      </p>

    </motion.div>


    {/* =================================================
        TECHNOLOGY CATEGORY CARDS
    ================================================= */}

    <div className="mt-12 sm:mt-14 grid md:grid-cols-2 gap-6">

      {technologyCategories.map((category, index) => {

        const CategoryIcon = category.icon;

        return (
          <motion.div
            key={category.title}

            initial={{
              opacity: 0,
              y: 35,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            }}

            whileHover={{
              y: -6,
            }}

            className="group relative glass-card glow-card p-6 sm:p-7 lg:p-8 overflow-hidden"
          >

            {/* Card Glow */}

            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-fuchsia-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />


            {/* =================================================
                CATEGORY HEADER
            ================================================= */}

            <div className="relative flex items-center gap-4">

              <div
                className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-glow shrink-0`}
              >
                <CategoryIcon className="text-xl sm:text-2xl text-white" />
              </div>


              <div>

                <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-violet-400">
                  Technology Category
                </p>

                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-gray-500">
                  {category.subtitle}
                </p>

              </div>

            </div>


            {/* =================================================
                TECHNOLOGY ITEMS
            ================================================= */}

            <div className="relative mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">

              {category.skills.map((skill) => {

                const SkillIcon = skill.Icon;

                return (
                  <motion.div
                    key={skill.name}

                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}

                    transition={{
                      duration: 0.2,
                    }}

                    className="group/skill flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.035] border border-white/[0.07] hover:bg-white/[0.07] hover:border-violet-500/30 transition-all duration-300"
                  >

                    {/* Icon */}

                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/20 shrink-0"
                    >
                      <SkillIcon
                        size={17}
                        style={{
                          color: skill.color,
                        }}
                      />
                    </div>


                    {/* Name */}

                    <span className="text-xs sm:text-sm text-gray-300 group-hover/skill:text-white transition-colors truncate">
                      {skill.name}
                    </span>

                  </motion.div>
                );

              })}

            </div>


            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="relative mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between">

              <span className="text-xs text-gray-500">
                {category.skills.length} technologies
              </span>

              <span className="text-xs text-violet-400">
                {category.title} Stack
              </span>

            </div>

          </motion.div>
        );

      })}

    </div>


    {/* =================================================
        TECHNOLOGY SUMMARY
    ================================================= */}

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
        duration: 0.6,
        delay: 0.2,
      }}

      className="mt-10"
    >

      <div className="glass-card p-5 sm:p-6 border border-white/[0.06]">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <div>

            <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
              Full Stack Toolkit
            </p>

            <p className="mt-2 text-sm text-gray-400 leading-6">
              Frontend, backend, databases, authentication, APIs,
              development tools and design technologies in one workflow.
            </p>

          </div>


          <div className="flex items-center gap-2 shrink-0">

            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-xs text-gray-400">
              Always Learning
            </span>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>

      {/* =====================================================
          SKILL APPROACH
      ===================================================== */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}
            >

              <span className="text-violet-400 text-sm uppercase tracking-widest">
                How I Apply My Skills
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">

                From Individual Skills

                <span className="gradient-text block">
                  To Complete Solutions
                </span>

              </h2>

              <p className="mt-6 text-muted leading-8 max-w-xl">
                The technologies are only one part of development. I combine
                them according to the requirements of each project to create
                complete, responsive and maintainable applications.
              </p>

            </motion.div>


            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              className="grid sm:grid-cols-2 gap-4"
            >

              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Understand the business and user requirements.",
                },

                {
                  number: "02",
                  title: "Structure",
                  text: "Plan the application and technical architecture.",
                },

                {
                  number: "03",
                  title: "Build",
                  text: "Develop reusable frontend and backend components.",
                },

                {
                  number: "04",
                  title: "Connect",
                  text: "Integrate APIs, databases and application workflows.",
                },
              ].map((item) => (

                <div
                  key={item.number}
                  className="glass-card p-5 sm:p-6 group hover:border-violet-500/30 transition-all"
                >

                  <span className="text-xs text-violet-400">
                    {item.number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted leading-6">
                    {item.text}
                  </p>

                </div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEVELOPMENT PRINCIPLES
      ===================================================== */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            <div>

              <span className="text-violet-400 text-sm uppercase tracking-widest">
                Development Philosophy
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">

                More Than Just

                <span className="gradient-text">
                  {" "}Technologies
                </span>

              </h2>

              <p className="mt-6 text-muted leading-8">
                Good development is not only about knowing technologies.
                It is also about creating systems that are understandable,
                maintainable and useful to the people who use them.
              </p>

            </div>


            <div className="glass-card p-6 sm:p-8">

              <div className="space-y-5">

                {principles.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                      <FiCheck />
                    </div>

                    <span className="text-sm sm:text-base text-gray-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="py-20 sm:py-24">

        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <div className="glass-card p-8 sm:p-10 md:p-16 text-center">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">

              Have a Technical

              <span className="gradient-text">
                {" "}Challenge?
              </span>

            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-7">
              Let's discuss your requirements and find a practical way to
              turn them into a working solution.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Let's Talk
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILL DETAIL MODAL
      ===================================================== */}

      <AnimatePresence>

        {selectedSkill && (

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

            onClick={() => setSelectedSkill(null)}

            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}

              onClick={(event) => event.stopPropagation()}

              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card border border-white/10"
            >

              {/* Modal Header */}

              <div className="p-6 sm:p-7 md:p-8 border-b border-white/5">

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/30 transition-all"
                >
                  <FiX />
                </button>


                <div className="flex items-center gap-4 sm:gap-5 pr-10">

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-500/10 border border-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">

                    {(() => {
                      const SelectedIcon = selectedSkill.icon;

                      return <SelectedIcon size={28} />;
                    })()}

                  </div>


                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
                      {selectedSkill.shortTitle}
                    </p>

                    <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                      {selectedSkill.title}
                    </h2>

                  </div>

                </div>


                <p className="mt-6 text-sm sm:text-base text-muted leading-7">
                  {selectedSkill.description}
                </p>

              </div>


              {/* Modal Body */}

              <div className="p-6 sm:p-7 md:p-8">

                {/* Focus */}

                <div className="p-4 sm:p-5 rounded-2xl bg-violet-500/[0.06] border border-violet-500/10">

                  <p className="text-xs uppercase tracking-widest text-violet-400">
                    What I Use It For
                  </p>

                  <p className="mt-3 text-sm text-gray-300 leading-7">
                    {selectedSkill.focus}
                  </p>

                </div>


                {/* Technologies */}

                <div className="mt-7">

                  <h3 className="text-sm font-semibold text-white">
                    Technologies & Skills
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {selectedSkill.skills.map((skill) => (

                      <span
                        key={skill}
                        className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-gray-300"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>


                {/* Capabilities */}

                <div className="mt-7">

                  <h3 className="text-sm font-semibold text-white">
                    Key Capabilities
                  </h3>

                  <div className="mt-4 grid sm:grid-cols-2 gap-3">

                    {selectedSkill.capabilities.map((capability) => (

                      <div
                        key={capability}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      >

                        <FiCheck className="text-violet-400 mt-0.5 shrink-0" />

                        <span className="text-sm text-gray-300">
                          {capability}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>


                {/* Close */}

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="mt-8 w-full py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/40 transition-colors"
                >
                  Close Details
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}