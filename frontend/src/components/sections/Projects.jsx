import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiX,
  FiCheckCircle,
  FiInfo,
  FiExternalLink,
} from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'

function ProjectCard({ project, index, onOpen }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const ProjectIcon = project.icon
  const hasLive = project.liveUrl && project.liveUrl !== '#'
  const hasGithub = project.githubUrl && project.githubUrl !== '#'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="glass-card glow-card overflow-hidden group flex flex-col"
    >
      {/* ================= IMAGE ================= */}
      <div
        className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
        </div>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/85 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-[11px] font-medium text-gray-200 backdrop-blur-md">
          {project.category}
        </div>

        {/* Status badge */}
        <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-[11px] font-semibold text-primary backdrop-blur-md">
          {project.status}
        </div>

        {/* Hover overlay with View Details */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={() => onOpen(project)}
            className="btn-primary text-sm px-5 py-2.5"
          >
            <FiInfo /> View Details
          </button>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title row with icon */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-grotesk font-bold text-lg sm:text-xl text-white group-hover:gradient-text transition-all leading-tight">
            {project.title}
          </h3>
          <div className="w-9 h-9 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <ProjectIcon size={18} />
          </div>
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mt-3">
          {project.shortDescription}
        </p>

        {/* Features */}
        <div className="mt-4 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs text-gray-400"
            >
              <FiCheckCircle className="text-primary shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-inter font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ================= ACTION ROW (one line) ================= */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-2 pt-4 border-t border-white/[0.06]">
            {/* View Details */}
            <button
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 text-sm font-grotesk font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all whitespace-nowrap"
              title="View Details"
            >
              View Details
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Direct links */}
            <div className="flex items-center gap-2">
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-all"
                  title="Live Demo"
                >
                  <FiExternalLink size={15} />
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-all"
                  title="Source Code"
                >
                  <FaGithub size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  const ProjectIcon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card border border-white/10"
      >
        {/* Modal Header */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-violet-600/25 via-fuchsia-500/10 to-transparent">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
          <div className="absolute bottom-5 left-7 flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xl flex items-center justify-center text-primary">
              <ProjectIcon size={28} />
            </div>
            <span className="inline-flex px-3 py-1.5 rounded-full bg-primary/15 border border-primary/20 text-xs text-primary backdrop-blur-md">
              {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-black/30 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <FiX />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted leading-7">
            {project.description}
          </p>

          {/* How we created it */}
          <div className="mt-7">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <FiInfo className="text-primary" />
              How We Created It
            </h3>
            <p className="mt-3 text-sm md:text-base text-muted leading-7">
              {project.howWeCreated}
            </p>
          </div>

          {/* Features */}
          <div className="mt-7">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <FiLayers className="text-primary" />
              Key Features
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <FiCheckCircle className="mt-0.5 text-primary shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-7">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <FiCode className="text-primary" />
              Technologies Used
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
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
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 text-sm text-gray-300 hover:text-white hover:border-primary/40 transition-colors flex items-center justify-center gap-2"
            >
              <FiX size={15} />
              Close Details
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-sm font-semibold text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <FiExternalLink size={15} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
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
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Portfolio"
          title="Featured"
          highlight="Work"
          subtitle="A selection of real projects I have built, including full-stack applications, web platforms and business management systems. Click any project to see how it was created and the technologies used."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
