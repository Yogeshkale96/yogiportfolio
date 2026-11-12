import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiDownload,
  FiMapPin,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiDatabase,
  FiCheckCircle,
} from "react-icons/fi";
import { techIcons } from "../../data/techIcons";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stats = [
  {
    value: "~1",
    label: "Years Experience",
    icon: FiBriefcase,
  },
  {
    value: "15+",
    label: "Projects Built",
    icon: FiLayers,
  },
  {
    value: "10+",
    label: "Technologies",
    icon: FiCode,
  },
];

const specialties = [
  "Frontend Development",
  "Backend Development",
  "REST APIs",
  "Database Solutions",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center pt-28 pb-32 lg:pb-36 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-primary/15 blur-[110px] animate-blob" />

        <div className="absolute bottom-[5%] right-[5%] w-[450px] h-[450px] rounded-full bg-secondary/15 blur-[120px] animate-blob-slow" />

        <div className="absolute top-[35%] right-[35%] w-[280px] h-[280px] rounded-full bg-accent/10 blur-[100px] animate-drift" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:35px_35px] opacity-40" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 w-full">
        {/* ================= MAIN HERO ================= */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Availability */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>

                <span className="text-xs sm:text-sm font-medium text-emerald-300">
                  Available for Work
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-muted"
            >
              <span className="w-10 h-px bg-gradient-to-r from-primary to-accent" />

              <span className="text-sm sm:text-base">
                Hello, I'm
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
            >
              Yogesh{" "}
              <span className="gradient-text">Kale</span>
              <br />

              <span className="text-white">
                Full Stack Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              I build modern, scalable and user-focused digital experiences
              using the MERN stack. From responsive interfaces to powerful
              backend systems and APIs, I turn ideas into reliable digital
              products.
            </motion.p>

            {/* Location / Role */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
            >
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <span>India</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <FiCode className="text-accent" />
                <span>MERN Stack Developer</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link
                to="/projects"
                className="btn-primary group"
              >
                View My Work

                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="btn-secondary group"
              >
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />

                Learn More
              </Link>

              <a
                href="/resume/Yogesh-Kale-Resume.pdf"
                download="Yogesh-Kale-Resume.pdf"
                className="btn-outline group"
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" />

                Download Resume
              </a>
            </motion.div>

            {/* ================= STATS ================= */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-5 max-w-xl pt-5"
            >
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-md px-3 sm:px-5 py-4 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-primary text-sm sm:text-base" />

                    <span className="font-grotesk font-bold text-xl sm:text-2xl text-white">
                      {value}
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-xs text-muted leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PROFILE CARD ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px]">
              {/* Outer Glow */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl" />

              {/* Main Card */}
              <div className="relative rounded-[2rem] border border-white/[0.08] bg-white/[0.035] backdrop-blur-2xl overflow-hidden shadow-2xl">
                {/* Top gradient */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/15 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Profile Header */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/20 to-accent/20">
                          <img
                            src="/photo/yogesh.png"
                            alt="Yogesh Kale"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <span className="absolute -right-1 -bottom-1 w-5 h-5 rounded-full bg-emerald-400 border-4 border-[#101020]" />
                      </div>

                      <div>
                        <h2 className="font-grotesk font-bold text-lg sm:text-xl text-white">
                          Yogesh Kale
                        </h2>

                        <p className="text-muted text-sm mt-1">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                      <FiCode className="text-primary" />
                    </div>
                  </div>

                  {/* About */}
                  <div className="mb-7">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                      What I Do
                    </p>

                    <p className="text-sm sm:text-base text-white/75 leading-7">
                      I create complete digital solutions combining clean
                      frontend experiences, scalable backend architecture,
                      databases and modern development practices.
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {specialties.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3"
                      >
                        <FiCheckCircle className="text-primary text-sm shrink-0" />

                        <span className="text-xs sm:text-sm text-white/70">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mini Stats */}
                  <div className="grid grid-cols-3 border-t border-white/[0.07] pt-6">
                    <div className="text-center border-r border-white/[0.07]">
                      <p className="font-grotesk font-bold text-xl sm:text-2xl gradient-text">
                        MERN
                      </p>

                      <p className="text-[10px] sm:text-xs text-muted mt-1">
                        Primary Stack
                      </p>
                    </div>

                    <div className="text-center border-r border-white/[0.07]">
                      <p className="font-grotesk font-bold text-xl sm:text-2xl text-white">
                        API
                      </p>

                      <p className="text-[10px] sm:text-xs text-muted mt-1">
                        Development
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="font-grotesk font-bold text-xl sm:text-2xl text-white">
                        UI
                      </p>

                      <p className="text-[10px] sm:text-xs text-muted mt-1">
                        Design Focus
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom border */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/[0.04] pointer-events-none" />
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-primary/20 blur-3xl animate-pulse" />

              <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-accent/15 blur-3xl animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* ================= TECHNOLOGY STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.2,
          }}
          className="mt-14 lg:mt-16 pt-6 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted whitespace-nowrap">
              Technologies I Work With
            </p>

            <div className="hidden sm:block h-px flex-1 bg-white/[0.07]" />

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {techIcons.slice(0, 6).map(
                ({ Icon, name, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.05] transition-colors"
                  >
                    <Icon
                      className="text-sm"
                      style={{ color }}
                    />

                    <span className="text-xs text-white/60">
                      {name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted">
            Scroll
          </span>

          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}