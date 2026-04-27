'use client'

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Git & GitHub',
]

const projects = [
  {
    title: 'TaskFlow Planner',
    description:
      'A productivity web app for managing daily tasks with smart filters and deadline reminders.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Surya2004-janardhan',
    demo: 'https://example.com/taskflow-planner',
  },
  {
    title: 'Movie Explorer',
    description:
      'A responsive movie discovery app with search, watchlists, and detailed movie insights from a public API.',
    stack: ['React', 'REST API', 'CSS'],
    github: 'https://github.com/Surya2004-janardhan',
    demo: 'https://example.com/movie-explorer',
  },
  {
    title: 'Campus Connect',
    description:
      'A student collaboration portal for sharing notes, events, and project opportunities in one interface.',
    stack: ['React', 'Firebase', 'Framer Motion'],
    github: 'https://github.com/Surya2004-janardhan',
    demo: 'https://example.com/campus-connect',
  },
]

function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  )
}

export default function PortfolioPage() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const parallaxOne = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -200],
  )
  const parallaxTwo = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -120],
  )

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#hero">
          Surya J
        </a>
        <nav aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="hero" className="hero section">
          <motion.div aria-hidden="true" className="orb orb-one" style={{ y: parallaxOne }} />
          <motion.div aria-hidden="true" className="orb orb-two" style={{ y: parallaxTwo }} />

          <p className="eyebrow">Full Stack Developer</p>
          <h1>Building clean, fast, and human-centered web experiences.</h1>
          <p className="hero-copy">
            I am Surya Janardhan, a developer focused on modern frontend systems,
            delightful UI motion, and practical products that solve real problems.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Work
            </a>
            <a className="btn btn-secondary" href="mailto:surya.dev@example.com">
              Contact Me
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="about-grid">
            <div className="avatar" aria-hidden="true">
              SJ
            </div>
            <p>
              I enjoy turning complex ideas into simple interfaces that feel smooth
              and accessible. My background includes building responsive websites,
              interactive dashboards, and API-powered applications. Right now, I am
              focused on improving animation systems with performance-first
              practices and deepening my backend knowledge.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <motion.ul
            className="skills-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {skills.map((skill) => (
              <motion.li
                key={skill}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </Section>

        <Section id="projects" title="Projects">
          <motion.div
            className="projects-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {projects.map((project) => (
              <motion.article
                className="project-card"
                key={project.title}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="stack-list">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="card-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-copy">
            Open to internships, collaborations, and full-time opportunities.
          </p>
          <ul className="contact-links">
            <li>
              <a href="mailto:surya.dev@example.com">surya.dev@example.com</a>
            </li>
            <li>
              <a href="https://github.com/Surya2004-janardhan" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Surya Janardhan. Built with Next.js.</p>
      </footer>
    </>
  )
}
