import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiLayers,
  FiX,
  FiCheckCircle,
  FiInfo,
  FiUsers,
  FiShoppingCart,
  FiBarChart2,
  FiCalendar,
  FiMapPin,
  FiPackage,
  FiHome,
  FiDatabase,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Event Management System",
    category: "Full Stack",
    shortDescription:
      "A complete event management platform designed to manage events, participants, registrations and event-related information from a centralized system.",
    description:
      "The Event Management System is designed to simplify the complete event management workflow. It provides a structured interface for creating and managing events, handling participants, maintaining event information and organizing event-related activities.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "Event creation and management",
      "Participant management",
      "Event registration workflow",
      "Centralized event information",
      "Admin management interface",
      "Structured database management",
    ],
    icon: FiCalendar,
    image: "/projects/event-management.svg",
    featured: true,
    status: "Full Stack Application",
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Aaple Gram Panchayat",
    category: "Web Application",
    shortDescription:
      "A digital platform designed to present Gram Panchayat information and make important local information easier to access and manage.",
    description:
      "Aaple Gram Panchayat focuses on bringing local administrative information into a structured digital environment. The platform can organize important Panchayat information, notices, services and related records in an accessible interface.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "Panchayat information management",
      "Digital information presentation",
      "Administrative content management",
      "Responsive public interface",
      "Structured data management",
      "Service and notice presentation",
    ],
    icon: FiHome,
    image: "/projects/aaple-gram-panchayat.svg",
    featured: true,
    status: "Web Application",
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Dairy B2B & B2C Platform",
    category: "Full Stack",
    shortDescription:
      "A dairy product platform supporting both business-to-business and direct-to-consumer selling with product, order and accountability workflows.",
    description:
      "This platform is designed around a dairy business model where products can be offered to business customers as well as individual customers. The system brings product management, B2B and B2C ordering, customer handling and accountability into one digital platform.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "B2B product selling",
      "B2C product selling",
      "Product catalogue",
      "Customer management",
      "Order management",
      "Sales accountability",
      "Business-oriented workflows",
    ],
    icon: FiShoppingCart,
    image: "/projects/dairy-b2b-b2c.svg",
    featured: true,
    status: "B2B + B2C Platform",
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Disposal & Catering Product Platform",
    category: "Business Platform",
    shortDescription:
      "A product and ordering platform for managing disposable products such as glasses, plates and other catering-use items with quantity and order tracking.",
    description:
      "This platform is designed for businesses dealing with disposable and catering-use products. Different product types, designs, quantities and orders can be organized digitally, allowing businesses to manage products and customer requirements in a structured way.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "Disposable product catalogue",
      "Different glass and plate designs",
      "Product quantity management",
      "Order management",
      "Product counting and accountability",
      "Business customer handling",
      "Category-based product organization",
    ],
    icon: FiPackage,
    image: "/projects/disposal-catering.svg",
    featured: false,
    status: "Business Management Platform",
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: 5,
    title: "Local Home Services Platform",
    category: "Service Platform",
    shortDescription:
      "A location-focused service platform connecting customers with home-based services available within their local area.",
    description:
      "The platform is designed around local service discovery. Customers can explore services available in their area and connect with service providers for home-based requirements. The concept focuses on making nearby services easier to discover and manage digitally.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "Local service discovery",
      "Area-based service presentation",
      "Service provider information",
      "Home service requests",
      "Customer-service provider interaction",
      "Service category organization",
    ],
    icon: FiMapPin,
    image: "/projects/local-home-services.svg",
    featured: false,
    status: "Local Services Platform",
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: 6,
    title: "Business Management Dashboard",
    category: "Dashboard",
    shortDescription:
      "A management interface for presenting business data, statistics, products, orders and operational information in one place.",
    description:
      "A structured dashboard concept designed to help businesses manage operational information through a centralized interface. The dashboard focuses on clear data presentation, management workflows and useful business insights.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    features: [
      "Business statistics",
      "Product information",
      "Order information",
      "Data management",
      "Responsive dashboard UI",
      "Centralized business overview",
    ],
    icon: FiBarChart2,
    image: "/projects/business-dashboard.svg",
    featured: false,
    status: "Management Dashboard",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const filters = [
  "All",
  "Full Stack",
  "Web Application",
  "Business Platform",
  "Service Platform",
  "Dashboard",
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen pt-20 overflow-hidden">

      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm">
              <FiLayers />
              Projects
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Real Projects,
              <span className="gradient-text"> Real Solutions</span>
            </h1>

            <p className="mt-6 text-lg text-muted leading-8 max-w-3xl">
              A selection of websites, business platforms, management systems
              and full-stack applications designed to solve practical business
              and community requirements.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2.5 rounded-xl text-sm transition-all ${
                  filter === item
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20"
                    : "bg-white/[0.04] border border-white/10 text-muted hover:text-white hover:border-violet-500/40"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">

              {filteredProjects.map((project, index) => {
                const ProjectIcon = project.icon;

                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className={`group glass-card glow-card overflow-hidden flex flex-col ${
                      project.featured
                        ? "border-violet-500/20"
                        : ""
                    }`}
                  >

                    {/* PROJECT VISUAL */}
                    <div className="h-52 relative overflow-hidden bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-transparent">

                      {/* Decorative glow */}
                      <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-violet-500/20 blur-3xl group-hover:bg-violet-500/30 transition-all duration-500" />

                      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-fuchsia-500/10 blur-3xl" />

                      {/* Project Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Category */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-[11px] font-medium text-gray-200 backdrop-blur-md">
                        {project.category}
                      </div>

                      {/* Featured */}
                      {project.featured && (
                        <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-[11px] font-semibold text-violet-300 backdrop-blur-md">
                          Featured Project
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-bg-card/50 backdrop-blur-sm flex items-center justify-center">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="btn-primary text-sm px-5 py-2.5"
                        >
                          <FiInfo /> View Details
                        </button>
                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col flex-1">

                      {/* Title row with icon badge */}
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-grotesk text-lg sm:text-xl font-bold text-white group-hover:gradient-text transition-all leading-tight">
                          {project.title}
                        </h2>
                        <div className="w-9 h-9 shrink-0 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                          <ProjectIcon size={18} />
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-muted leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Key Highlights */}
                      <div className="mt-4 space-y-2">

                        {project.features.slice(0, 3).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-gray-400"
                          >
                            <FiCheckCircle className="text-violet-400 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}

                      </div>

                      {/* Technologies */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-inter font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ================= ACTION ROW (one line) ================= */}
                      <div className="mt-auto pt-6">
                        <div className="flex items-center justify-between gap-2 pt-4 border-t border-white/[0.06]">
                          {/* View Details */}
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-1.5 text-sm font-grotesk font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all whitespace-nowrap"
                            title="View Details"
                          >
                            View Details
                            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>

                          {/* Direct links */}
                          <div className="flex items-center gap-2">
                            {project.liveUrl && project.liveUrl !== "#" && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 flex items-center justify-center transition-all"
                                title="Live Demo"
                              >
                                <FiExternalLink size={15} />
                              </a>
                            )}
                            {project.githubUrl && project.githubUrl !== "#" && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 flex items-center justify-center transition-all"
                                title="Source Code"
                              >
                                <FaGithub size={15} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>

                  </motion.article>
                );
              })}

            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-muted">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card border border-white/10"
            >

              {/* Modal Header */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-violet-600/25 via-fuchsia-500/10 to-transparent">

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />

                <div className="absolute bottom-5 left-7 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xl flex items-center justify-center text-violet-300">
                    <selectedProject.icon size={28} />
                  </div>
                  <span className="inline-flex px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/20 text-xs text-violet-300 backdrop-blur-md">
                    {selectedProject.status}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-black/30 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <FiX />
                </button>

              </div>

              {/* Modal Content */}
              <div className="p-7 md:p-8">

                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>

                <p className="mt-4 text-sm md:text-base text-muted leading-7">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mt-7">

                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <FiLayers className="text-violet-400" />
                    Key Features
                  </h3>

                  <div className="mt-4 grid sm:grid-cols-2 gap-3">

                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <FiCheckCircle className="mt-0.5 text-violet-400 shrink-0" />

                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Technology */}
                <div className="mt-7">

                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <FiCode className="text-violet-400" />
                    Technologies
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Action buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 text-sm text-gray-300 hover:text-white hover:border-violet-500/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiX size={15} />
                    Close Details
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-sm font-semibold text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2"
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-semibold text-white hover:bg-white/[0.08] transition-all flex items-center justify-center gap-2"
                      >
                        <FaGithub size={15} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}