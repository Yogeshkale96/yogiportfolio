import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${center ? 'text-center' : 'text-left'} mb-14`}
    >
      {tag && <span className="tag mb-4">{tag}</span>}
      <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`text-muted mt-4 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
