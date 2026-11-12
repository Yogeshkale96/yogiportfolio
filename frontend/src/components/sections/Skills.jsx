import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '../../data/skills'
import SectionHeading from '../ui/SectionHeading'
import TechBadge from '../ui/TechBadge'

function SkillCard({ category, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const Icon = category.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="glass-card glow-card p-6 lg:p-8 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-glow`}
        >
          <Icon className="text-xl text-white" />
        </div>
        <h3 className="font-grotesk font-bold text-xl text-white">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <TechBadge key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Skills"
          title="Technical"
          highlight="Expertise"
          subtitle="A comprehensive toolkit for building modern, scalable, and beautiful web applications from front to back."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
