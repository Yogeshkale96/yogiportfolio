import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiBriefcase,
  FiCode,
  FiTool,
  FiMessageSquare,
  FiUsers,
  FiX,
} from 'react-icons/fi'

const inquiryTypes = [
  {
    id: 'project',
    title: 'Start a Project',
    description: 'Build a modern website or full-stack application.',
    icon: FiCode,
  },
  {
    id: 'job',
    title: 'Job Opportunity',
    description: 'Looking for a developer to join your team.',
    icon: FiBriefcase,
  },
  {
    id: 'freelance',
    title: 'Freelance Work',
    description: 'Need development support for your project?',
    icon: FiUsers,
  },
  {
    id: 'uiux',
    title: 'UI / Frontend',
    description: 'Create responsive and interactive interfaces.',
    icon: FiCode,
  },
  {
    id: 'fix',
    title: 'Website Fix',
    description: 'Fix bugs, responsiveness or existing websites.',
    icon: FiTool,
  },
  {
    id: 'consultation',
    title: 'Technical Consultation',
    description: 'Discuss technology, architecture or development.',
    icon: FiMessageSquare,
  },
  {
    id: 'interview',
    title: 'Interview',
    description: 'Technical interview or developer discussion.',
    icon: FiBriefcase,
  },
  {
    id: 'other',
    title: 'Other Inquiry',
    description: 'Have something else in mind? Let’s talk.',
    icon: FiMessageSquare,
  },
]

const technologies = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Tailwind CSS',
  'Full Stack Development',
  'Other',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  technology: '',
  projectType: '',
  position: '',
  employmentType: '',
  websiteUrl: '',
  issueType: '',
  urgency: '',
  interviewType: '',
  interviewMode: '',
  interviewDate: '',
  budget: '',
  timeline: '',
  details: '',
}

export default function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState('')
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleInquirySelect = (type) => {
    setSelectedInquiry(type)
    setForm((prev) => ({
      ...prev,
      inquiryType: type,
    }))

    setTimeout(() => {
      document
        .getElementById('inquiry-form')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Connect your API/email service here
    console.log('Contact Inquiry:', form)

    setSubmitted(true)
  }

  const selectedType = inquiryTypes.find(
    (item) => item.id === selectedInquiry
  )

  return (
    <main className="relative overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">

        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-bg-card/75" />

          {/* Theme Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-card via-bg-card/90 to-primary/20" />

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-card to-transparent" />
        </div>

        {/* Hero Glow */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="tag mb-6">
              Get In Touch
            </span>

            <h1 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-5">
              Let's Build Something{' '}
              <span className="gradient-text">
                Great Together
              </span>
            </h1>

            <p className="text-muted text-base sm:text-lg lg:text-xl max-w-2xl mt-6 leading-relaxed">
              Have a project idea, need a developer, want to fix an
              existing website, or interested in a technical opportunity?
              Tell me what you need and let's discuss it.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#inquiries"
                className="btn-primary group"
              >
                Start an Inquiry
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact-form"
                className="btn-secondary"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="section-padding relative">
        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="tag">
              How Can I Help?
            </span>

            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl mt-5">
              Choose What You{' '}
              <span className="gradient-text">
                Need
              </span>
            </h2>

            <p className="text-muted mt-5 leading-relaxed">
              Select the type of inquiry that best matches your requirement.
              I'll show you the relevant details so you can send your
              requirement quickly.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          INQUIRY CARDS
      ========================================================= */}
      <section
        id="inquiries"
        className="relative pb-20"
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {inquiryTypes.map((item, index) => {
              const Icon = item.icon
              const active = selectedInquiry === item.id

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleInquirySelect(item.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                  }}
                  className={`
                    group text-left glass-card p-6
                    transition-all duration-300
                    relative overflow-hidden
                    ${
                      active
                        ? 'border-primary/60 shadow-lg shadow-primary/10'
                        : ''
                    }
                  `}
                >

                  {/* Active Glow */}
                  {active && (
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  )}

                  <div className="relative">

                    <div
                      className={`
                        w-12 h-12 rounded-xl
                        flex items-center justify-center
                        transition-all duration-300
                        ${
                          active
                            ? 'bg-primary text-white'
                            : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                        }
                      `}
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="font-grotesk font-semibold text-lg text-white mt-5">
                      {item.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-primary mt-5">
                      {active ? (
                        <>
                          <FiCheck />
                          Selected
                        </>
                      ) : (
                        <>
                          Explore
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>

                  </div>
                </motion.button>
              )
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section
        id="contact-form"
        className="section-padding relative"
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <div
            id="inquiry-form"
            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start"
          >

            {/* LEFT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >

              <span className="tag">
                Let's Discuss
              </span>

              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl mt-5 leading-tight">
                Tell Me About{' '}
                <span className="gradient-text">
                  Your Requirement
                </span>
              </h2>

              <p className="text-muted mt-5 leading-relaxed">
                Share a few details about your project, job opportunity,
                technical issue or anything you'd like to discuss.
              </p>

              {selectedType && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-5 mt-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                      <selectedType.icon size={19} />
                    </div>

                    <div>
                      <p className="text-xs text-muted">
                        Selected Inquiry
                      </p>
                      <p className="text-white font-semibold mt-1">
                        {selectedType.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Direct Contact */}
              <div className="space-y-4 mt-8">

                <a
                  href="mailto:yourmail@example.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <FiMail />
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      Email
                    </p>
                    <p className="text-sm text-white">
                      yourmail@example.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+910000000000"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <FiPhone />
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      Phone
                    </p>
                    <p className="text-sm text-white">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-xs text-muted">
                      Location
                    </p>
                    <p className="text-sm text-white">
                      India
                    </p>
                  </div>
                </div>

              </div>

              {/* Social */}
              <div className="flex gap-3 mt-7">

                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted hover:text-white hover:text-primary transition-all"
                >
                  <FiGithub />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted hover:text-white hover:text-primary transition-all"
                >
                  <FiLinkedin />
                </a>

              </div>

            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 lg:p-10"
            >

              <div className="grid sm:grid-cols-2 gap-5">

                <Input
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />

                <Input
                  label="Company / Organization"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />

              </div>

              {/* Inquiry Type */}
              <div className="mt-5">
                <label className="block text-sm text-white/90 mb-2">
                  Inquiry Type *
                </label>

                <select
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={(e) => {
                    handleChange(e)
                    setSelectedInquiry(e.target.value)
                  }}
                  required
                  className="w-full bg-bg-card border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/60 transition-all"
                >
                  <option value="">
                    Select inquiry type
                  </option>

                  {inquiryTypes.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                    >
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Technology */}
              <div className="mt-5">
                <label className="block text-sm text-white/90 mb-2">
                  Technology / Requirement
                </label>

                <select
                  name="technology"
                  value={form.technology}
                  onChange={handleChange}
                  className="w-full bg-bg-card border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/60 transition-all"
                >
                  <option value="">
                    Select technology
                  </option>

                  {technologies.map((technology) => (
                    <option
                      key={technology}
                      value={technology}
                    >
                      {technology}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Fields */}
              <AnimatePresence mode="wait">

                {form.inquiryType === 'project' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid sm:grid-cols-2 gap-5 mt-5"
                  >
                    <Input
                      label="Project Type"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      placeholder="Website / Web App / Dashboard"
                    />

                    <Input
                      label="Estimated Budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="Optional"
                    />

                    <Input
                      label="Expected Timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      placeholder="e.g. 4-6 weeks"
                    />
                  </motion.div>
                )}

                {form.inquiryType === 'job' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid sm:grid-cols-2 gap-5 mt-5"
                  >
                    <Input
                      label="Position"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="e.g. React Developer"
                    />

                    <Input
                      label="Employment Type"
                      name="employmentType"
                      value={form.employmentType}
                      onChange={handleChange}
                      placeholder="Full-time / Part-time"
                    />
                  </motion.div>
                )}

                {form.inquiryType === 'fix' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid sm:grid-cols-2 gap-5 mt-5"
                  >
                    <Input
                      label="Website URL"
                      name="websiteUrl"
                      value={form.websiteUrl}
                      onChange={handleChange}
                      placeholder="https://example.com"
                    />

                    <Input
                      label="Issue Type"
                      name="issueType"
                      value={form.issueType}
                      onChange={handleChange}
                      placeholder="Bug / UI / Performance"
                    />

                    <Input
                      label="Urgency"
                      name="urgency"
                      value={form.urgency}
                      onChange={handleChange}
                      placeholder="Normal / Urgent"
                    />
                  </motion.div>
                )}

                {form.inquiryType === 'interview' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid sm:grid-cols-2 gap-5 mt-5"
                  >
                    <Input
                      label="Position"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="e.g. MERN Stack Developer"
                    />

                    <Input
                      label="Interview Type"
                      name="interviewType"
                      value={form.interviewType}
                      onChange={handleChange}
                      placeholder="Technical / HR"
                    />

                    <Input
                      label="Interview Mode"
                      name="interviewMode"
                      value={form.interviewMode}
                      onChange={handleChange}
                      placeholder="Online / Offline"
                    />

                    <Input
                      label="Interview Date"
                      name="interviewDate"
                      type="date"
                      value={form.interviewDate}
                      onChange={handleChange}
                    />
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Details */}
              <div className="mt-5">

                <label className="block text-sm text-white/90 mb-2">
                  Tell Me About Your Requirement *
                </label>

                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Describe your project, requirement, issue, job opportunity or anything you'd like to discuss..."
                  className="w-full bg-bg-card border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none resize-none focus:border-primary/60 transition-all"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full justify-center mt-6 group"
              >
                Send Inquiry
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-xs text-muted text-center mt-4">
                Your information will only be used to respond to your inquiry.
              </p>

            </motion.form>

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

            <div className="relative">

              <span className="tag">
                Ready When You Are
              </span>

              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl mt-5">
                Have an Idea?
                <span className="gradient-text">
                  {' '}Let's Talk.
                </span>
              </h2>

              <p className="text-muted max-w-2xl mx-auto mt-5">
                Whether it's a new project, a technical challenge,
                a job opportunity, or simply an idea you'd like to discuss,
                feel free to reach out.
              </p>

              <a
                href="#contact-form"
                className="btn-primary inline-flex mt-8 group"
              >
                Start a Conversation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          SUCCESS MODAL
      ========================================================= */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card max-w-md w-full p-8 text-center relative"
            >

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
              >
                <FiX size={20} />
              </button>

              <div className="w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto">
                <FiCheck size={30} />
              </div>

              <h3 className="font-grotesk font-bold text-2xl text-white mt-6">
                Inquiry Sent Successfully
              </h3>

              <p className="text-muted mt-3 leading-relaxed">
                Thank you for reaching out. Your inquiry has been received.
                I'll get back to you as soon as possible.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-primary mt-6"
              >
                Done
              </button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}


/* =============================================================
   REUSABLE INPUT
============================================================= */

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm text-white/90 mb-2">
        {label}
        {required && ' *'}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-bg-card border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all"
      />
    </div>
  )
}