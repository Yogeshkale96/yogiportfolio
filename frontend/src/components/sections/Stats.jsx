import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { stats } from '../../data/stats'
import SectionHeading from '../ui/SectionHeading'

function useCountUp(end, duration, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, start])

  return value
}

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const value = useCountUp(stat.value, 2, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card glow-card p-6 lg:p-8 text-center group"
    >
      <div className="text-4xl lg:text-5xl font-grotesk font-bold gradient-text mb-2">
        {value}{stat.suffix}
      </div>
      <p className="text-muted text-sm lg:text-base font-inter">{stat.label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Achievements"
          title="Results That"
          highlight="Speak"
          subtitle="Numbers that reflect my commitment to quality and excellence."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
