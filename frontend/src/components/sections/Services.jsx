import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { services } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'

function ServiceCard({ service, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const Icon = service.Icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="glass-card glow-card p-8 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-glow mb-6`}
      >
        <Icon className="text-2xl text-white" />
      </motion.div>
      <h3 className="font-grotesk font-bold text-lg text-white mb-3">
        {service.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="What I Deliver"
          title="Solutions That Drive"
          highlight="Business Growth"
          subtitle="Comprehensive services to help you build, launch, and scale your digital products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
