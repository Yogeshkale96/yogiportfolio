import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { whyChooseMe } from '../../data/whyChooseMe'
import SectionHeading from '../ui/SectionHeading'

function FeatureCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const Icon = item.Icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="glass-card glow-card p-8 text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-glow mb-6`}
      >
        <Icon className="text-2xl text-white" />
      </motion.div>
      <h3 className="font-grotesk font-bold text-xl text-white mb-3">
        {item.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  )
}

export default function WhyChooseMe() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Why Hire Me"
          title="Why Companies Choose to"
          highlight="Work With Me"
          subtitle="What sets me apart in delivering exceptional digital products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseMe.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
