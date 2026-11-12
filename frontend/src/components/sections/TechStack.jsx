import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
} from 'react-icons/fi'

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSequelize,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from 'react-icons/si'

/* =========================================================
   TECHNOLOGY STACK
   Same card format as the Skills page tech section
========================================================= */

const technologyCategories = [
  {
    title: 'Frontend',
    subtitle: 'Modern User Interfaces',
    icon: FiCode,
    gradient: 'from-primary to-secondary',

    skills: [
      {
        name: 'React',
        Icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: 'Tailwind CSS',
        Icon: SiTailwindcss,
        color: '#06B6D4',
      },
      {
        name: 'JavaScript',
        Icon: SiJavascript,
        color: '#F7DF1E',
      },
      {
        name: 'TypeScript',
        Icon: SiTypescript,
        color: '#3178C6',
      },
      {
        name: 'HTML5',
        Icon: SiHtml5,
        color: '#E34F26',
      },
      {
        name: 'CSS3',
        Icon: SiCss,
        color: '#1572B6',
      },
      {
        name: 'Redux',
        Icon: SiRedux,
        color: '#764ABC',
      },
      {
        name: 'Framer Motion',
        Icon: FiCode,
        color: '#8B5CF6',
      },
    ],
  },

  {
    title: 'Backend',
    subtitle: 'Server & API Development',
    icon: FiServer,
    gradient: 'from-secondary to-accent',

    skills: [
      {
        name: 'Node.js',
        Icon: SiNodedotjs,
        color: '#339933',
      },
      {
        name: 'Express.js',
        Icon: SiExpress,
        color: '#FFFFFF',
      },
      {
        name: 'REST APIs',
        Icon: FiServer,
        color: '#8B5CF6',
      },
      {
        name: 'JWT',
        Icon: SiJsonwebtokens,
        color: '#D63AFF',
      },
      {
        name: 'Firebase',
        Icon: SiFirebase,
        color: '#FFCA28',
      },
      {
        name: 'Authentication',
        Icon: FiServer,
        color: '#A855F7',
      },
    ],
  },

  {
    title: 'Database',
    subtitle: 'Data & Database Management',
    icon: FiDatabase,
    gradient: 'from-accent to-primary',

    skills: [
      {
        name: 'MongoDB',
        Icon: SiMongodb,
        color: '#47A248',
      },
      {
        name: 'MySQL',
        Icon: SiMysql,
        color: '#4479A1',
      },
      {
        name: 'PostgreSQL',
        Icon: SiPostgresql,
        color: '#4169E1',
      },
      {
        name: 'Sequelize',
        Icon: SiSequelize,
        color: '#52B0E7',
      },
    ],
  },

  {
    title: 'Tools',
    subtitle: 'Development & Design Tools',
    icon: FiTool,
    gradient: 'from-primary to-accent',

    skills: [
      {
        name: 'Git',
        Icon: SiGit,
        color: '#F05032',
      },
      {
        name: 'GitHub',
        Icon: SiGithub,
        color: '#FFFFFF',
      },
      {
        name: 'Postman',
        Icon: SiPostman,
        color: '#FF6C37',
      },
      {
        name: 'VS Code',
        Icon: FiCode,
        color: '#007ACC',
      },
      {
        name: 'Figma',
        Icon: SiFigma,
        color: '#F24E1E',
      },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-[15%] left-[5%] w-[280px] h-[280px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-[10%] right-[5%] w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-[130px] pointer-events-none" />


      <div className="relative container-custom px-4 sm:px-6 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.6,
          }}

          className="max-w-3xl"
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm">
            <FiCode />
            Technology Stack
          </span>


          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">

            Tools & Technologies

            <span className="gradient-text block">
              I Work With
            </span>

          </h2>


          <p className="mt-6 text-sm sm:text-base text-muted leading-7 sm:leading-8 max-w-2xl">
            A collection of technologies, frameworks, databases and
            development tools I use to design, develop and maintain
            modern web applications.
          </p>

        </motion.div>


        {/* =================================================
            TECHNOLOGY CATEGORY CARDS
        ================================================= */}

        <div className="mt-12 sm:mt-14 grid md:grid-cols-2 gap-6">

          {technologyCategories.map((category, index) => {

            const CategoryIcon = category.icon

            return (
              <motion.div
                key={category.title}

                initial={{
                  opacity: 0,
                  y: 35,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}

                whileHover={{
                  y: -6,
                }}

                className="group relative glass-card glow-card p-6 sm:p-7 lg:p-8 overflow-hidden"
              >

                {/* Card Glow */}

                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-fuchsia-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />


                {/* =================================================
                    CATEGORY HEADER
                ================================================= */}

                <div className="relative flex items-center gap-4">

                  <div
                    className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-glow shrink-0`}
                  >
                    <CategoryIcon className="text-xl sm:text-2xl text-white" />
                  </div>


                  <div>

                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-violet-400">
                      Technology Category
                    </p>

                    <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                      {category.subtitle}
                    </p>

                  </div>

                </div>


                {/* =================================================
                    TECHNOLOGY ITEMS
                ================================================= */}

                <div className="relative mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">

                  {category.skills.map((skill) => {

                    const SkillIcon = skill.Icon

                    return (
                      <motion.div
                        key={skill.name}

                        whileHover={{
                          y: -4,
                          scale: 1.02,
                        }}

                        transition={{
                          duration: 0.2,
                        }}

                        className="group/skill flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.035] border border-white/[0.07] hover:bg-white/[0.07] hover:border-violet-500/30 transition-all duration-300"
                      >

                        {/* Icon */}

                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/20 shrink-0"
                        >
                          <SkillIcon
                            size={17}
                            style={{
                              color: skill.color,
                            }}
                          />
                        </div>


                        {/* Name */}

                        <span className="text-xs sm:text-sm text-gray-300 group-hover/skill:text-white transition-colors truncate">
                          {skill.name}
                        </span>

                      </motion.div>
                    )

                  })}

                </div>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="relative mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between">

                  <span className="text-xs text-gray-500">
                    {category.skills.length} technologies
                  </span>

                  <span className="text-xs text-violet-400">
                    {category.title} Stack
                  </span>

                </div>

              </motion.div>
            )

          })}

        </div>


        {/* =================================================
            TECHNOLOGY SUMMARY
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
            delay: 0.2,
          }}

          className="mt-10"
        >

          <div className="glass-card p-5 sm:p-6 border border-white/[0.06]">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
                  Full Stack Toolkit
                </p>

                <p className="mt-2 text-sm text-gray-400 leading-6">
                  Frontend, backend, databases, authentication, APIs,
                  development tools and design technologies in one workflow.
                </p>

              </div>


              <div className="flex items-center gap-2 shrink-0">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <span className="text-xs text-gray-400">
                  Always Learning
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}
