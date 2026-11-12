import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { processSteps } from '../../data/process'
import SectionHeading from '../ui/SectionHeading'

function ProcessStep({ step, index, isLast }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative flex gap-5 group"
    >
      {/* Left: icon + connector line */}
      <div className="flex flex-col items-center">
        {/* Icon node */}
        <div className="relative w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-glow transition-all duration-300 z-10">
          <Icon size={20} />
        </div>

        {/* Connector line */}
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2 min-h-[40px]" />
        )}
      </div>

      {/* Right: content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-1.5">
          <span className="font-grotesk font-bold text-sm text-primary/70 tracking-wider">
            {step.number}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <h3 className="font-grotesk font-semibold text-base text-white">
            {step.title}
          </h3>
        </div>

        <p className="text-sm text-muted leading-relaxed max-w-md">
          {step.description}
        </p>

        {/* Activities as inline pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {step.activities.map((activity) => (
            <span
              key={activity}
              className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-gray-400 group-hover:border-primary/20 group-hover:text-gray-300 transition-colors"
            >
              {activity}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Process() {
  return (
    <section className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Workflow"
          title="My Development"
          highlight="Process"
          subtitle="A structured approach to turning ideas into polished digital products."
        />

        {/* Two-column timeline: left column steps 1-3, right column steps 4-6 */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl mx-auto">
          <div>
            {processSteps.slice(0, 3).map((step, i) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={i}
                isLast={i === 2}
              />
            ))}
          </div>
          <div>
            {processSteps.slice(3, 6).map((step, i) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={i + 3}
                isLast={i === 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
