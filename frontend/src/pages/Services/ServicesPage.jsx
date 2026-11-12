import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiLayout,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiServer,
  FiSettings,
  FiShield,
  FiTool,
} from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   CORE SERVICES
========================================================= */

const services = [
  {
    id: "web-development",
    icon: FiGlobe,
    number: "01",
    title: "Web Development",
    shortTitle: "Modern Websites",
    description:
      "Professional, responsive and scalable websites designed to present your business, services and brand effectively.",
    details:
      "I create modern websites with responsive layouts, reusable components, clean architecture and smooth user experiences. The focus is not only on appearance but also on usability, maintainability and performance.",
    features: [
      "Responsive Website Development",
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Portfolio Websites",
      "SEO-Friendly Structure",
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    id: "web-application",
    icon: FiMonitor,
    number: "02",
    title: "Web Applications",
    shortTitle: "Web Applications",
    description:
      "Interactive and data-driven web applications designed around real business workflows and user requirements.",
    details:
      "I develop complete web applications that connect interfaces, APIs, business logic and databases. Applications can include dashboards, authentication, forms, management systems and other custom workflows.",
    features: [
      "Custom Web Applications",
      "Admin Dashboards",
      "Management Systems",
      "Authentication Systems",
      "CRUD Applications",
      "API-Based Applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "MySQL",
      "MongoDB",
    ],
  },

  {
    id: "ui-design",
    icon: FiLayout,
    number: "03",
    title: "UI / UX Design",
    shortTitle: "UI / UX",
    description:
      "Clean, modern and user-focused interfaces designed to make digital products easier and more engaging to use.",
    details:
      "I focus on creating interfaces with clear hierarchy, consistent spacing, responsive layouts and interactive elements. Designs are translated into reusable frontend components for practical development.",
    features: [
      "Modern UI Design",
      "Responsive Layouts",
      "Component-Based Design",
      "Interactive Interfaces",
      "Mobile-Friendly Experience",
      "Visual Consistency",
    ],
    technologies: [
      "Figma",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    id: "cicd",
    icon: FiGitBranch,
    number: "04",
    title: "CI / CD & Deployment",
    shortTitle: "CI / CD",
    description:
      "Structured development and deployment workflows that help move applications from development toward production.",
    details:
      "I work with version-controlled development workflows and deployment processes to organize application updates, testing and production releases more efficiently.",
    features: [
      "Git-Based Workflow",
      "Version Control",
      "Build Management",
      "Deployment Setup",
      "Environment Configuration",
      "Production Releases",
    ],
    technologies: [
      "Git",
      "GitHub",
      "Vite",
      "Node.js",
      "Environment Variables",
    ],
  },

  {
    id: "backend",
    icon: FiServer,
    number: "05",
    title: "Backend & APIs",
    shortTitle: "Backend",
    description:
      "Reliable backend systems and APIs that connect frontend applications with business logic and data.",
    details:
      "I develop backend services that handle application logic, data processing, authentication and communication between different parts of a web application.",
    features: [
      "REST API Development",
      "Server-Side Logic",
      "Authentication",
      "Authorization",
      "API Integration",
      "Backend Architecture",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Sequelize",
    ],
  },

  {
    id: "database",
    icon: FiDatabase,
    number: "06",
    title: "Database Solutions",
    shortTitle: "Database",
    description:
      "Structured data solutions for applications that require reliable storage, retrieval and management.",
    details:
      "I work with database-driven applications and structure data models according to application requirements, ensuring frontend and backend systems can communicate with the data layer effectively.",
    features: [
      "Database Design",
      "Data Modeling",
      "CRUD Operations",
      "Database Integration",
      "Relational Databases",
      "Application Data Management",
    ],
    technologies: [
      "MySQL",
      "MongoDB",
      "SQL",
      "Sequelize",
    ],
  },
];

/* =========================================================
   PROJECT TYPES
========================================================= */

const projectTypes = [
  {
    icon: FiGlobe,
    title: "Business Websites",
    description:
      "Professional websites for companies, startups, businesses and personal brands.",
    tags: ["Corporate", "Business", "Portfolio"],
  },
  {
    icon: FiMonitor,
    title: "Web Applications",
    description:
      "Interactive applications with dashboards, forms, authentication and database workflows.",
    tags: ["Dashboard", "Management", "SaaS"],
  },
  {
    icon: FiPackage,
    title: "B2B Platforms",
    description:
      "Business-focused platforms connecting products, categories, users and application workflows.",
    tags: ["B2B", "Products", "Business"],
  },
  {
    icon: FiLayers,
    title: "Admin Systems",
    description:
      "Centralized systems for managing content, products, users, enquiries and business data.",
    tags: ["Admin", "CRUD", "Management"],
  },
];

/* =========================================================
   PROJECT PROCESS
========================================================= */

const projectProcess = [
  {
    number: "01",
    icon: FiLayers,
    title: "Discovery",
    subtitle: "Understand",
    description:
      "First I understand the business, project requirements, users, goals and expected outcome.",
    points: [
      "Project requirements",
      "Business objectives",
      "Target users",
      "Core functionality",
    ],
  },
  {
    number: "02",
    icon: FiLayout,
    title: "Planning & UI",
    subtitle: "Design",
    description:
      "The project structure, user flow and interface direction are planned before development.",
    points: [
      "Page structure",
      "User flow",
      "UI direction",
      "Responsive planning",
    ],
  },
  {
    number: "03",
    icon: FiCode,
    title: "Development",
    subtitle: "Build",
    description:
      "The application is developed using reusable components and structured frontend/backend architecture.",
    points: [
      "Frontend development",
      "Backend development",
      "API integration",
      "Database integration",
    ],
  },
  {
    number: "04",
    icon: FiShield,
    title: "Testing",
    subtitle: "Validate",
    description:
      "The application is checked across functionality, responsiveness and different user flows.",
    points: [
      "Functional testing",
      "Responsive testing",
      "API testing",
      "Bug fixing",
    ],
  },
  {
    number: "05",
    icon: FiSettings,
    title: "Optimization",
    subtitle: "Improve",
    description:
      "The product is refined for performance, usability, maintainability and overall experience.",
    points: [
      "Performance",
      "Code quality",
      "UI refinement",
      "User experience",
    ],
  },
  {
    number: "06",
    icon: FiGlobe,
    title: "Deployment",
    subtitle: "Launch",
    description:
      "The finished application is prepared for deployment and production use.",
    points: [
      "Production build",
      "Environment setup",
      "Deployment",
      "Final verification",
    ],
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const technologyGroups = [
  {
    title: "Frontend",
    icon: FiCode,
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Authentication",
    ],
  },
  {
    title: "Database",
    icon: FiDatabase,
    technologies: [
      "MySQL",
      "MongoDB",
      "SQL",
      "Sequelize",
      "Data Modeling",
    ],
  },
  {
    title: "Development",
    icon: FiTool,
    technologies: [
      "Git",
      "GitHub",
      "Vite",
      "Postman",
      "Deployment",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(
    "web-development"
  );

  const selectedService = services.find(
    (service) => service.id === activeService
  );

  const SelectedIcon = selectedService?.icon;

  return (
    <div className="min-h-screen pt-20 overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative py-24 md:py-32">

        {/* Background effects */}

        <div className="absolute top-20 left-1/4 w-80 h-80 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute top-40 right-1/4 w-80 h-80 bg-fuchsia-500/10 blur-[120px] rounded-full pointer-events-none" />

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

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm">
              <FiSettings />
              Services & Solutions
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">

              From Idea to
              <span className="gradient-text block">
                Digital Product
              </span>

            </h1>

            <p className="mt-6 text-lg text-muted leading-8 max-w-3xl">
              I help transform business ideas into modern digital
              experiences — from UI design and web development to
              web applications, APIs, databases and deployment.
            </p>

            {/* Hero actions */}

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold hover:scale-105 transition-transform"
              >
                Start a Project
                <FiArrowRight />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:border-violet-500/30 transition-all"
              >
                View Projects
                <FiArrowRight />
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          WHAT I BUILD
      ====================================================== */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-violet-400 text-sm uppercase tracking-widest">
              What I Build
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              Digital Solutions For
              <span className="gradient-text">
                {" "}Different Needs
              </span>
            </h2>

            <p className="mt-5 text-muted leading-7">
              From simple business websites to complete data-driven
              applications, each project is structured around its
              actual requirements.
            </p>

          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {projectTypes.map((project, index) => {

              const Icon = project.icon;

              return (
                <motion.div
                  key={project.title}
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
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="glass-card p-7 group"
                >

                  <div className="w-13 h-13 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted leading-7">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          CORE SERVICES - INTERACTIVE
      ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-violet-400 text-sm uppercase tracking-widest">
              Core Services
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              Everything Needed To
              <span className="gradient-text">
                {" "}Build & Launch
              </span>
            </h2>

            <p className="mt-5 text-muted">
              Select a service to explore what it includes and how it
              contributes to the complete project.
            </p>

          </div>

          {/* =================================================
              INTERACTIVE SERVICE AREA
          ================================================== */}

          <div className="mt-14 grid lg:grid-cols-[0.75fr_1.25fr] gap-6">

            {/* LEFT SERVICE LIST */}

            <div className="space-y-3">

              {services.map((service) => {

                const Icon = service.icon;

                const active =
                  activeService === service.id;

                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() =>
                      setActiveService(service.id)
                    }
                    whileHover={{
                      x: 5,
                    }}
                    className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 ${
                      active
                        ? "bg-violet-500/10 border-violet-500/40 shadow-lg shadow-violet-500/5"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div
                        className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
                          active
                            ? "bg-violet-500/20 text-violet-300"
                            : "bg-white/5 text-gray-400"
                        }`}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="flex-1 min-w-0">

                        <div className="flex items-center justify-between gap-3">

                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-violet-400">
                              {service.number}
                            </span>

                            <h3 className="mt-0.5 text-base font-semibold text-white">
                              {service.title}
                            </h3>
                          </div>

                          <FiArrowRight
                            className={`shrink-0 transition-transform ${
                              active
                                ? "text-violet-400 translate-x-1"
                                : "text-muted"
                            }`}
                          />

                        </div>

                      </div>

                    </div>

                  </motion.button>
                );
              })}

            </div>

            {/* RIGHT DETAIL */}

            <div className="glass-card p-7 md:p-10 min-h-[520px]">

              <AnimatePresence mode="wait">

                {selectedService && (
                  <motion.div
                    key={selectedService.id}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >

                    <div className="flex items-start justify-between gap-5">

                      <div>

                        <div className="w-16 h-16 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                          {SelectedIcon && (
                            <SelectedIcon size={30} />
                          )}
                        </div>

                      </div>

                      <span className="text-5xl font-bold text-violet-500/10">
                        {selectedService.number}
                      </span>

                    </div>

                    <h3 className="mt-7 text-2xl md:text-3xl font-bold text-white">
                      {selectedService.title}
                    </h3>

                    <p className="mt-4 text-muted leading-8">
                      {selectedService.details}
                    </p>

                    {/* Deliverables */}

                    <div className="mt-8">

                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                        What I Deliver
                      </h4>

                      <div className="mt-4 grid sm:grid-cols-2 gap-3">

                        {selectedService.features.map(
                          (feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                            >
                              <FiCheck className="text-violet-400 shrink-0" />

                              <span className="text-sm text-gray-300">
                                {feature}
                              </span>
                            </div>
                          )
                        )}

                      </div>

                    </div>

                    {/* Technologies */}

                    <div className="mt-8">

                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                        Technologies & Tools
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">

                        {selectedService.technologies.map(
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

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT HANDLING PROCESS
      ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-violet-400 text-sm uppercase tracking-widest">
              Project Approach
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              How I Handle a
              <span className="gradient-text">
                {" "}Project
              </span>
            </h2>

            <p className="mt-5 text-muted leading-7">
              A structured process helps keep development clear,
              organized and focused from the first discussion to
              production.
            </p>

          </div>

          {/* Process timeline */}

          <div className="relative mt-16">

            {/* Desktop line */}

            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-violet-500/30 via-fuchsia-500/40 to-violet-500/30" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {projectProcess.map((step, index) => {

                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
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
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="relative"
                  >

                    <div className="glass-card p-7 h-full">

                      {/* Number/icon */}

                      <div className="flex items-center justify-between">

                        <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                          <Icon size={23} />
                        </div>

                        <span className="text-4xl font-bold text-violet-500/15">
                          {step.number}
                        </span>

                      </div>

                      <span className="inline-block mt-6 text-xs uppercase tracking-widest text-fuchsia-400">
                        {step.subtitle}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm text-muted leading-7">
                        {step.description}
                      </p>

                      <div className="mt-5 space-y-2">

                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2 text-xs text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                            {point}
                          </div>
                        ))}

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <div>

              <span className="text-violet-400 text-sm uppercase tracking-widest">
                Technology Stack
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
                The Tools Behind
                <span className="gradient-text block">
                  The Solutions
                </span>
              </h2>

              <p className="mt-6 text-muted leading-8">
                I use modern technologies based on the requirements of
                the project rather than forcing every project into the
                same technology stack.
              </p>

              <Link
                to="/skills"
                className="mt-7 inline-flex items-center gap-2 text-violet-300 hover:text-white transition-colors"
              >
                Explore Technical Skills
                <FiArrowRight />
              </Link>

            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-4">

              {technologyGroups.map((group, index) => {

                const Icon = group.icon;

                return (
                  <motion.div
                    key={group.title}
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
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="glass-card p-6"
                  >

                    <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 font-bold text-white">
                      {group.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {group.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-xs text-gray-400"
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT CONNECTION
      ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">

            {/* Glow */}

            <div className="absolute -top-32 -right-32 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">

              <div>

                <span className="text-violet-400 text-sm uppercase tracking-widest">
                  Selected Work
                </span>

                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  See How These Services
                  <span className="gradient-text">
                    {" "}Come Together
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-muted leading-8">
                  From business websites and responsive interfaces to
                  full-stack platforms, dashboards and database-driven
                  applications, explore projects that demonstrate the
                  practical use of these services.
                </p>

              </div>

              <Link
                to="/projects"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-semibold hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
              >
                View My Projects
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY THIS APPROACH
      ====================================================== */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <span className="text-violet-400 text-sm uppercase tracking-widest">
              My Approach
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              Development With
              <span className="gradient-text">
                {" "}Purpose
              </span>
            </h2>

          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
        {
  icon: FiLayers,
  title: "Requirement First",
  text: "Understand the actual project requirement before choosing the implementation approach.",
},
{
  icon: FiPackage,
  title: "Reusable Structure",
  text: "Build components and systems that can be maintained and extended over time.",
},
{
  icon: FiMonitor,
  title: "Responsive",
  text: "Design and development focused on different screen sizes and real-world usage.",
},
{
  icon: FiSettings,
  title: "Performance",
  text: "Keep the application experience smooth, efficient and focused on usability.",
},
            ].map((item, index) => {

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
                    y: -6,
                  }}
                  className="glass-card p-7 text-center"
                >

                  <div className="mx-auto w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
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
          FINAL CTA
      ====================================================== */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <motion.div
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
            className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-white/[0.02] to-fuchsia-500/10 p-10 md:p-16 text-center"
          >

            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full" />

            <div className="relative">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                <FiArrowRight size={26} />
              </div>

              <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
                Have an Idea?
                <span className="gradient-text block">
                  Let's Build It.
                </span>
              </h2>

              <p className="mt-5 text-muted max-w-2xl mx-auto leading-7">
                Whether you need a website, web application, custom
                interface or complete full-stack solution, let's discuss
                what you want to build.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Discuss Your Project
                  <FiArrowRight />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:border-violet-500/40 transition-all"
                >
                  Explore Projects
                  <FiArrowRight />
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}