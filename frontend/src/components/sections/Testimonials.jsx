import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Testimonials"
          title="Client"
          highlight="Feedback"
          subtitle="What clients say about working with me."
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-card p-8 lg:p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <FiStar key={i} className="text-accent fill-accent text-lg" />
                ))}
              </div>

              <p className="text-white text-lg lg:text-xl font-inter leading-relaxed mb-8 italic">
                "{testimonials[current].review}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border border-white/10 flex items-center justify-center">
                  <span className="font-grotesk font-bold text-lg gradient-text">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-grotesk font-semibold text-white">
                    {testimonials[current].name}
                  </p>
                  <p className="text-muted text-sm">
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
