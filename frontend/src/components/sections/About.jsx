import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const highlights = [
  'Full Stack Development',
  'Responsive UI Design',
  'REST API Development',
  'Database Architecture',
  'Authentication & Security',
  'Performance Optimization',
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
       <motion.div
  ref={ref}
  initial={{ opacity: 0, x: -40 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  className="relative flex items-center justify-center"
>
  {/* Background Glow */}
  <div className="absolute top-0 right-10 w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
  <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-accent/15 blur-3xl" />

  {/* Circular Profile Image */}
  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
    <img
      src="/photo/yogesh.png"
      alt="Yogesh - MERN Stack Developer"
      className="w-full h-full object-cover object-center"
    />

    {/* Image Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 via-transparent to-transparent" />
  </div>

  {/* Outer Glow */}
  <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-primary/20 blur-3xl animate-pulse" />
  <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-accent/15 blur-3xl animate-pulse" />
</motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="tag mb-4">About Me</span>
              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight">
                Turning Ideas Into{' '}
                <span className="gradient-text">Digital Reality</span>
              </h2>
            </div>
            <p className="text-muted text-base lg:text-lg leading-relaxed">
              I am a passionate Full Stack Developer focused on building modern,
              scalable, and user-centric web applications. From intuitive user
              interfaces to powerful backend systems, I transform ideas into
              reliable digital products that deliver measurable business value.
            </p>
            <p className="text-muted/80 text-base leading-relaxed">
              I enjoy solving complex problems, learning emerging technologies,
              and creating experiences that are fast, accessible, and visually
              engaging.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-primary text-sm" />
                  </div>
                  <span className="text-sm font-inter text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn-primary self-start mt-4 group">
              Learn More
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
