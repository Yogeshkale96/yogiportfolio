import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiDatabase,
  FiServer,
  FiShield,
  FiZap,
  FiLayers,
  FiBookOpen,
  FiAward,
  FiBriefcase,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const highlights = [
  'Full Stack Development',
  'Responsive UI Design',
  'REST API Development',
  'Database Architecture',
  'Authentication & Security',
  'Performance Optimization',
]

const expertise = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description:
      'Building responsive, interactive and user-focused interfaces using modern frontend technologies.',
    technologies: 'React • JavaScript • TypeScript • Tailwind CSS',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description:
      'Developing scalable APIs, server-side applications and reliable backend architectures.',
    technologies: 'Node.js • Express.js • REST APIs',
  },
  {
    icon: FiDatabase,
    title: 'Database Architecture',
    description:
      'Designing structured data models and working with databases for reliable application performance.',
    technologies: 'MongoDB • MySQL • Sequelize',
  },
  {
    icon: FiShield,
    title: 'Authentication & Security',
    description:
      'Implementing secure authentication, authorization and protected application workflows.',
    technologies: 'JWT • OTP • OAuth • Role-based Access',
  },
  {
    icon: FiZap,
    title: 'Performance',
    description:
      'Focusing on optimized interfaces, efficient APIs and smooth user experiences.',
    technologies: 'Optimization • Responsive UI • Clean Architecture',
  },
  {
    icon: FiLayers,
    title: 'Full Stack Solutions',
    description:
      'Connecting frontend, backend and database layers into complete digital products.',
    technologies: 'MERN • React • Node.js • Database',
  },
]

const education = [
  {
    year: '10th',
    title: 'Secondary School',
    institute: 'Seth Fathelal Lafchand High School',
    location: 'Dhamangaon Railway',
    score: '82%',
    scoreLabel: 'Percentage',
    icon: FiBookOpen,
  },
  {
    year: '12th',
    title: 'Higher Secondary',
    institute: 'Adarsha Mahavidyalaya',
    location: 'Dhamangaon Railway',
    score: '65%',
    scoreLabel: 'Percentage',
    icon: FiBookOpen,
  },
  {
    year: 'BCA',
    title: 'Bachelor of Computer Applications',
    institute: 'Adarsha Mahavidyalaya',
    location: 'Dhamangaon Railway',
    score: '70%',
    scoreLabel: 'Percentage',
    icon: FiCode,
  },
  {
    year: 'PG',
    title: 'Post-Graduation',
    institute: 'Sant Gadge Baba Amravati University',
    location: 'Amravati',
    score: '8.0',
    scoreLabel: 'Pointer',
    icon: FiAward,
  },
]

export default function AboutPage() {
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expertiseRef, expertiseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="pt-20 overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[650px] lg:min-h-[720px] flex items-center">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* PROFILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >

              {/* Glow */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/20 blur-3xl" />

              {/* Image with rotating gradient ring */}
              <div className="relative">

                {/* Rotating gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #8B5CF6, #A855F7, #EC4899, #8B5CF6)",
                    opacity: 0.4,
                    filter: "blur(2px)",
                  }}
                />

                {/* Inner ring border */}
                <div className="absolute -inset-2 rounded-full border border-white/10" />

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-bg-card shadow-2xl shadow-primary/20">

                  <img
                    src="/photo/yogesh.png"
                    alt="Yogesh - MERN Stack Developer"
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-bg-card/40 via-transparent to-transparent" />

                </div>

                {/* Orbiting tech badges */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[
                    { Icon: FiCode, label: "MERN", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", color: "text-violet-400" },
                    { Icon: FiServer, label: "API", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", color: "text-fuchsia-400" },
                    { Icon: FiDatabase, label: "DB", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2", color: "text-pink-400" },
                    { Icon: FiLayers, label: "UI", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2", color: "text-violet-300" },
                  ].map(({ Icon, label, pos, color }, i) => (
                    <motion.div
                      key={label}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className={`absolute ${pos} w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-card flex flex-col items-center justify-center gap-0.5`}
                    >
                      <Icon size={16} className={color} />
                      <span className="text-[8px] sm:text-[9px] font-grotesk font-bold text-white/80">{label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                  }}
                  className="absolute -bottom-5 -right-2 sm:right-0 glass-card px-5 py-4 rounded-2xl z-10"
                >
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                      <FiCode className="text-primary" />
                    </div>

                    <div>
                      <p className="text-xs text-muted">
                        Focus
                      </p>

                      <p className="text-sm font-semibold text-white">
                        Full Stack Development
                      </p>
                    </div>

                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >

              <span className="tag">
                About Me
              </span>

              <h1 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mt-5">

                Turning Ideas Into{' '}

                <span className="gradient-text">
                  Digital Reality
                </span>

              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed mt-6">
                I am a passionate Full Stack Developer focused on
                building modern, scalable, and user-centric web
                applications. From intuitive user interfaces to
                powerful backend systems, I transform ideas into
                reliable digital products that deliver measurable
                business value.
              </p>

              <p className="text-muted/80 leading-relaxed mt-4">
                I enjoy solving complex problems, learning emerging
                technologies, and creating experiences that are fast,
                accessible, and visually engaging.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 mt-7">

                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-primary text-sm" />
                    </div>

                    <span className="text-sm text-white/90">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>

              <Link
                to="/contact"
                className="btn-primary inline-flex mt-8 group"
              >
                Let's Work Together

                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL PROFILE
      ===================================================== */}
      <section className="section-padding relative">

        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Main */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass-card p-7 sm:p-9 relative overflow-hidden"
            >

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="tag">
                  Professional Profile
                </span>

                <h2 className="font-grotesk font-bold text-3xl sm:text-4xl mt-5">
                  A Developer Focused on
                  <span className="gradient-text">
                    {' '}Real Solutions
                  </span>
                </h2>

                <p className="text-muted leading-relaxed mt-5">
                  My development approach combines clean user interfaces,
                  reliable backend systems and structured databases.
                  I focus on understanding the actual requirement before
                  building the solution so that the final product is
                  practical, scalable and easy to maintain.
                </p>

                <p className="text-muted leading-relaxed mt-4">
                  I work across the complete development process —
                  understanding requirements, designing interfaces,
                  developing frontend experiences, building APIs,
                  connecting databases and improving the final product.
                </p>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/[0.06]">
                  <div>
                    <p className="font-grotesk font-bold text-2xl sm:text-3xl gradient-text">
                      MERN
                    </p>
                    <p className="text-xs text-muted mt-1">Primary Stack</p>
                  </div>
                  <div className="border-l border-white/[0.06] pl-4">
                    <p className="font-grotesk font-bold text-2xl sm:text-3xl text-white">
                      15+
                    </p>
                    <p className="text-xs text-muted mt-1">Projects Built</p>
                  </div>
                  <div className="border-l border-white/[0.06] pl-4">
                    <p className="font-grotesk font-bold text-2xl sm:text-3xl text-white">
                      10+
                    </p>
                    <p className="text-xs text-muted mt-1">Technologies</p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Developer Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-7 sm:p-9 flex flex-col justify-between"
            >

              <div>

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FiBriefcase
                    size={25}
                    className="text-primary"
                  />
                </div>

                <h3 className="font-grotesk text-2xl font-bold text-white mt-6">
                  What I Build
                </h3>

                <p className="text-muted text-sm leading-relaxed mt-3">
                  Modern digital experiences designed around
                  performance, usability and maintainability.
                </p>

              </div>

              <div className="mt-7 space-y-3">

                {[
                  'Business Websites',
                  'Web Applications',
                  'Admin Dashboards',
                  'REST APIs',
                  'Database Systems',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <FiCheck className="text-primary" />
                    <span className="text-sm text-white/85">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}
      <section
        ref={educationRef}
        className="section-padding relative"
      >

        <div className="container-custom px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              educationInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >

            <span className="tag">
              Education
            </span>

            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl mt-5">
              My Academic
              <span className="gradient-text">
                {' '}Journey
              </span>
            </h2>

            <p className="text-muted mt-5 leading-relaxed">
              My academic journey has given me a strong foundation in
              computer applications, software development and
              technology.
            </p>

          </motion.div>

          {/* Education Timeline */}
          <div className="relative mt-14">

            {/* Timeline Line - desktop (center) */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-white/10 to-accent/60 hidden sm:block" />

            {/* Timeline Line - mobile (left) */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-white/10 to-accent/60 sm:hidden" />

            <div className="space-y-8 sm:space-y-12">

              {education.map((item, index) => {
                const Icon = item.icon
                const isRight = index % 2 !== 0

                return (
                  <motion.div
                    key={item.year}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={
                      educationInView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="relative"
                  >

                    {/* Mobile dot */}
                    <div className="sm:hidden absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg z-10 shadow-lg shadow-primary/30" />

                    {/* Mobile / Desktop Layout */}
                    <div className="grid sm:grid-cols-2 gap-8">

                      {/* Empty side */}
                      <div
                        className={`hidden sm:block ${
                          isRight
                            ? 'order-2'
                            : 'order-1'
                        }`}
                      />

                      {/* Card */}
                      <div
                        className={`pl-14 sm:pl-0 ${
                          isRight
                            ? 'sm:order-1 sm:text-right'
                            : 'sm:order-2'
                        }`}
                      >

                        <div className="glass-card p-6 sm:p-7 relative group hover:border-primary/30 transition-all duration-300 overflow-hidden">

                          {/* Hover glow */}
                          <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-500" />

                          {/* Year Badge */}
                          <div
                            className={`flex items-center gap-3 ${
                              isRight
                                ? 'sm:justify-end'
                                : ''
                            }`}
                          >

                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              <Icon size={20} />
                            </div>

                            <div>

                              <span className="text-xs text-muted">
                                Qualification
                              </span>

                              <p className="text-white font-bold text-lg">
                                {item.year}
                              </p>

                            </div>

                          </div>

                          <h3 className="font-grotesk font-bold text-xl text-white mt-5">
                            {item.title}
                          </h3>

                          <p className="text-primary text-sm font-medium mt-2">
                            {item.institute}
                          </p>

                          <p className="text-muted text-sm mt-1">
                            {item.location}
                          </p>

                          {/* Score */}
                          <div
                            className={`flex items-end gap-3 mt-6 ${
                              isRight
                                ? 'sm:justify-end'
                                : ''
                            }`}
                          >

                            <div>

                              <p className="text-xs text-muted">
                                Academic Score
                              </p>

                              <p className="font-grotesk font-bold text-3xl gradient-text">
                                {item.score}
                              </p>

                            </div>

                            <span className="text-xs text-muted pb-1">
                              {item.scoreLabel}
                            </span>

                          </div>

                          {/* Progress */}
                          <div className="mt-4">

                            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">

                              <motion.div
                                initial={{
                                  width: 0,
                                }}
                                animate={
                                  educationInView
                                    ? {
                                        width:
                                          item.year ===
                                          'PG'
                                            ? '80%'
                                            : `${parseInt(
                                                item.score
                                              )}%`,
                                      }
                                    : {}
                                }
                                transition={{
                                  duration: 1,
                                  delay:
                                    0.4 +
                                    index * 0.15,
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                              />

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden sm:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg z-10 shadow-lg shadow-primary/30" />

                  </motion.div>
                )
              })}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}
      <section
        ref={expertiseRef}
        className="section-padding relative"
      >

        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              expertiseInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            className="text-center max-w-3xl mx-auto"
          >

            <span className="tag">
              Professional Skills
            </span>

            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl mt-5">
              What I Bring to
              <span className="gradient-text">
                {' '}Projects
              </span>
            </h2>

            <p className="text-muted mt-5 leading-relaxed">
              My technical focus covers the complete development
              lifecycle, from interface design to backend architecture.
            </p>

          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {expertise.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={
                    expertiseInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="glass-card p-6 group relative overflow-hidden transition-all duration-300 hover:border-primary/30"
                >

                  {/* Hover gradient glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-500" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    <h3 className="font-grotesk text-xl font-semibold text-white mt-5 group-hover:gradient-text transition-all">
                      {item.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/5">

                      <p className="text-xs text-primary leading-relaxed">
                        {item.technologies}
                      </p>

                    </div>
                  </div>

                </motion.div>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT APPROACH
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <div className="glass-card p-8 sm:p-10 lg:p-14 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <span className="tag">
                  My Approach
                </span>

                <h2 className="font-grotesk font-bold text-3xl sm:text-4xl mt-5">
                  Build With Purpose,
                  <span className="gradient-text">
                    {' '}Not Just Code
                  </span>
                </h2>

                <p className="text-muted leading-relaxed mt-5">
                  Every project starts with understanding the problem.
                  I focus on creating solutions that are visually
                  engaging while remaining practical, maintainable
                  and scalable.
                </p>

              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {[
                  'Understand',
                  'Plan',
                  'Build',
                  'Test',
                  'Optimize',
                  'Deliver',
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >

                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-grotesk font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      0{index + 1}
                    </span>

                    <span className="text-white text-sm font-medium">
                      {step}
                    </span>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="section-padding">

        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            <div className="relative">

              <span className="tag">
                Let's Connect
              </span>

              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl mt-5">
                Have an Idea or
                <span className="gradient-text">
                  {' '}Opportunity?
                </span>
              </h2>

              <p className="text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
                Whether you have a project requirement, development
                opportunity, technical discussion or interview
                opportunity, I'd be happy to connect.
              </p>

              <Link
                to="/contact"
                className="btn-primary inline-flex mt-8 group"
              >
                Let's Talk

                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

    </main>
  )
}