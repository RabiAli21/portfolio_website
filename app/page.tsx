'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Data ───────────────────────────────────────────────────────────────────

const SKILLS = [
  { category: 'Languages', items: ['Python', 'SQL', 'R'] },
  { category: 'Data & Analytics', items: ['Pandas', 'NumPy', 'Power BI', 'MS Excel', 'Matplotlib', 'Seaborn'] },
  { category: 'Machine Learning', items: ['Scikit-learn', 'Regression', 'Classification', 'Clustering', 'PCA', 'XGBoost', 'Random Forest'] },
  { category: 'Deep Learning', items: ['TensorFlow', 'Keras', 'CNNs', 'RNNs', 'BERT', 'RoBERTa', 'YOLOv8/v11'] },
  { category: 'Big Data', items: ['Hadoop', 'Spark', 'MapReduce'] },
  { category: 'MLOps & Tools', items: ['Streamlit', 'Git', 'MySQL', 'Feature Engineering', 'Hyperparameter Tuning', 'Model Deployment'] },
]

const SKILL_BARS = [
  { name: 'Python / ML', level: 92 },
  { name: 'Data Analysis', level: 88 },
  { name: 'Deep Learning', level: 80 },
  { name: 'SQL & Databases', level: 82 },
  { name: 'Big Data (Spark/Hadoop)', level: 72 },
  { name: 'Power BI / Visualization', level: 85 },
]

const EXPERIENCE = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'AI Variant',
    period: 'Nov 2024 – Aug 2025',
    type: 'NLP · Computer Vision · MLOps',
    points: [
      'Built end-to-end AI/ML solutions across NLP and Computer Vision domains',
      'Improved model performance by 20% via hyperparameter tuning and data preprocessing',
      'Gained real-world deployment experience with scalable AI pipelines',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'AI Variant',
    period: 'Nov 2023 – Apr 2024',
    type: 'EDA · ML Modeling · Deployment',
    points: [
      'Conducted descriptive and exploratory analysis on diverse datasets, identifying key business insights',
      'Designed ML models achieving 85% prediction accuracy',
      'Enhanced data processing pipelines, reducing processing time by 30%',
      'Deployed models via Streamlit for real-time business decision-making',
    ],
  },
  {
    role: 'Data Analyst Trainee',
    company: 'Zeetron Networks',
    period: 'Dec 2022 – Jun 2023',
    type: 'Python · MySQL · Power BI',
    points: [
      'Hands-on experience in Python, MySQL, and database management',
      'Designed interactive Power BI dashboards improving client reporting efficiency by 25%',
      'Automated data workflows and enhanced data visualisation across teams',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Bankruptcy Prevention',
    tag: 'Classification · Fintech',
    tools: ['Python', 'scikit-learn', 'Pandas', 'Streamlit'],
    description: 'Developed a classification model for a Taiwan-based bank predicting bankruptcy with 90% accuracy. Conducted feature engineering, data cleaning, and hyperparameter tuning.',
    highlight: '90% Accuracy',
    color: '#d4a847',
  },
  {
    title: 'CO2 Emission Prediction',
    tag: 'Regression · Environment',
    tools: ['Python', 'XGBoost', 'Random Forest', 'Matplotlib'],
    description: 'Built regression models (Linear, XGBoost, Random Forest) to predict CO2 emissions with <5% mean error rate. Provided actionable insights for reduction strategies.',
    highlight: '<5% Error Rate',
    color: '#3ddc84',
  },
  {
    title: 'Text Classification — NLP',
    tag: 'NLP · Transformers',
    tools: ['BERT', 'RoBERTa', 'Python', 'HuggingFace'],
    description: 'Developed a multi-class text classification model using BERT & RoBERTa, achieving 92% accuracy on complex text datasets with fine-tuned transformer architectures.',
    highlight: '92% Accuracy',
    color: '#7c9ef8',
  },
  {
    title: 'Object Detection — YOLO',
    tag: 'Computer Vision · CV',
    tools: ['YOLOv8', 'YOLOv11', 'Python', 'OpenCV'],
    description: 'Trained YOLOv8 and YOLOv11 on 10,000+ image custom dataset achieving 87% mAP. Reduced inference time by 30% through model optimisation.',
    highlight: '87% mAP',
    color: '#e07aff',
  },
  {
    title: 'Real-Time Video Detection',
    tag: 'Computer Vision · Real-Time',
    tools: ['YOLOv11', 'Python', 'OpenCV', 'CUDA'],
    description: 'Implemented real-time object detection on live video streams achieving 25 FPS with 85% detection accuracy. Suitable for surveillance and monitoring applications.',
    highlight: '25 FPS · 85% Acc',
    color: '#ff7a6e',
  },
]

const STATS = [
  { number: '3+', label: 'Years Experience' },
  { number: '5+', label: 'Projects Delivered' },
  { number: '92%', label: 'Peak Model Accuracy' },
  { number: '30%', label: 'Pipeline Speedup' },
]

// ─── Components ─────────────────────────────────────────────────────────────

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 5}px`
        cursorRef.current.style.top = `${e.clientY - 5}px`
      }
      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.left = `${e.clientX - 15}px`
            followerRef.current.style.top = `${e.clientY - 15}px`
          }
        }, 80)
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '20px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a1a1a' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.4rem', letterSpacing: '0.15em', color: '#d4a847' }}>
        RABI<span style={{ color: '#f0ebe3' }}>ALI</span>
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px' }} className="hidden-mobile">
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <a
          href="https://github.com/RabiAli21"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ fontSize: '0.65rem', padding: '8px 16px' }}
        >
          GitHub
        </a>
        <a
          href="mailto:alirabi5931@gmail.com"
          className="btn-gold"
          style={{ fontSize: '0.65rem', padding: '8px 16px' }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}

function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const roles = ['Data Engineer', 'Data Analyst', 'ML Engineer']
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayText(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charIdx > 0) {
          setDisplayText(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setRoleIdx(i => (i + 1) % roles.length)
        }
      }
    }, deleting ? 60 : 90)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Scanline */}
      <div className="hero-scanline" />

      {/* BG glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(212,168,71,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(61,220,132,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Index tag */}
        <div className="animate-fade-up delay-1" style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="label-tag">Available for hire</span>
          <div style={{ width: '8px', height: '8px', background: '#3ddc84', borderRadius: '50%', boxShadow: '0 0 10px #3ddc84' }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#666', letterSpacing: '0.1em' }}>
            Open to full-time · Jaipur, India
          </span>
        </div>

        {/* Main headline */}
        <div className="animate-fade-up delay-2">
          <h1
            className="section-title"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              marginBottom: '8px',
            }}
          >
            RABI
          </h1>
          <h1
            className="section-title"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              color: 'var(--gold)',
              marginBottom: '32px',
            }}
          >
            ALI
          </h1>
        </div>

        {/* Typewriter role */}
        <div className="animate-fade-up delay-3" style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#666', letterSpacing: '0.1em' }}>→</span>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            {displayText}
            <span style={{ animation: 'blink 1s infinite', color: 'var(--gold)' }}>|</span>
          </span>
        </div>

        {/* Descriptor */}
        <p
          className="animate-fade-up delay-4"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.8rem',
            color: '#888',
            lineHeight: 1.8,
            maxWidth: '500px',
            marginBottom: '48px',
            letterSpacing: '0.02em',
          }}
        >
          Building scalable data pipelines, predictive ML models, and deep learning systems that transform raw data into business decisions. Backed by hands-on experience in NLP, Computer Vision, and Big Data.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-5" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-gold">View Projects</a>
          <a
            href="https://github.com/RabiAli21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub Profile
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up delay-7"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            marginTop: '80px',
            background: '#1a1a1a',
            border: '1px solid #1a1a1a',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#080808',
                padding: '28px 24px',
                textAlign: 'center',
              }}
            >
              <div className="stat-number">{s.number}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, #d4a847, transparent)' }} />
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" style={{ padding: '120px 40px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        {/* Left */}
        <div>
          <div className="label-tag" style={{ marginBottom: '24px' }}>01 / About</div>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, marginBottom: '28px' }}
          >
            TURNING DATA<br />
            INTO <span style={{ color: 'var(--gold)' }}>INTELLIGENCE</span>
          </h2>
          <div className="gold-line" style={{ marginBottom: '28px', width: '80px' }} />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.78rem', color: '#888', lineHeight: 1.9, marginBottom: '20px' }}>
            I&apos;m Rabi Ali — a data professional with a strong foundation across the full data stack. My journey spans Data Analysis, Machine Learning, and Deep Learning with hands-on experience at AI Variant and Zeetron Networks.
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.78rem', color: '#888', lineHeight: 1.9, marginBottom: '32px' }}>
            I specialize in building scalable ML pipelines, deploying production models, and extracting actionable insights from complex datasets. From RoBERTa-based NLP classifiers to real-time YOLOv11 video detection — I deliver measurable results.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:alirabi5931@gmail.com" className="btn-gold">alirabi5931@gmail.com</a>
          </div>
        </div>

        {/* Right — info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1a1a1a' }}>
          {[
            { label: 'Location', value: 'Jaipur, Rajasthan, India' },
            { label: 'Education', value: 'PGP Data Science & Analytics — Imarticus Learning' },
            { label: 'Degree', value: 'B.Com (Economics) — Subodh P.G. College' },
            { label: 'Certifications', value: 'AI · Data Science · Big Data & Analytics' },
            { label: 'Contact', value: '+91-7023946250' },
            { label: 'Status', value: '🟢 Open to Opportunities' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#080808', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', marginTop: '2px' }}>
                {item.label}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#ccc', textAlign: 'right' }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" style={{ padding: '120px 40px', background: '#0d0d0d', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="label-tag" style={{ marginBottom: '16px' }}>02 / Skills</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>
              TECH <span style={{ color: 'var(--gold)' }}>STACK</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#555', maxWidth: '300px', lineHeight: 1.8, textAlign: 'right' }}>
            Full-stack data capabilities from raw ingestion to deployed inference
          </p>
        </div>

        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 80px', marginBottom: '60px' }}>
          {SKILL_BARS.map((skill, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.05em' }}>{skill.name}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)' }}>{skill.level}%</span>
              </div>
              <div style={{ height: '2px', background: '#1a1a1a', position: 'relative' }}>
                <div
                  className="skill-bar-fill"
                  style={{ width: animated ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech grid */}
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {SKILLS.map((group, i) => (
              <div key={i} style={{ background: '#080808', border: '1px solid #1a1a1a', padding: '24px' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map((item, j) => (
                    <span key={j} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="label-tag" style={{ marginBottom: '16px' }}>03 / Experience</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, marginBottom: '60px' }}>
          WORK <span style={{ color: 'var(--gold)' }}>HISTORY</span>
        </h2>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '4px', top: '8px', bottom: '8px', width: '1px', background: 'linear-gradient(180deg, var(--gold), transparent)' }} />

          {EXPERIENCE.map((exp, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < EXPERIENCE.length - 1 ? '56px' : '0', paddingLeft: '40px' }}>
              {/* Dot */}
              <div className="timeline-dot" style={{ position: 'absolute', left: '-28px', top: '6px' }} />

              <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', padding: '32px', transition: 'border-color 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#3a3028')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a1a1a')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#f0ebe3' }}>
                    {exp.role}
                  </h3>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#555', letterSpacing: '0.05em' }}>
                    {exp.period}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: 'var(--gold)' }}>{exp.company}</span>
                  <span style={{ width: '1px', height: '12px', background: '#333' }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.05em' }}>{exp.type}</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#777', lineHeight: 1.7, display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--gold-dim)', flexShrink: 0 }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '120px 40px', background: '#0d0d0d' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="label-tag" style={{ marginBottom: '16px' }}>04 / Projects</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>
              SELECTED <span style={{ color: 'var(--gold)' }}>WORK</span>
            </h2>
          </div>
          <a
            href="https://github.com/RabiAli21"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            className="nav-link"
          >
            View all on GitHub →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
          {PROJECTS.map((project, i) => (
            <div key={i} className="project-card" style={{ background: '#080808' }}>
              {/* Color accent bar */}
              <div style={{ height: '2px', background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
              <div style={{ padding: '32px' }}>
                {/* Tag + highlight */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em' }}>{project.tag}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: project.color, border: `1px solid ${project.color}40`, padding: '3px 8px' }}>
                    {project.highlight}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#f0ebe3', marginBottom: '14px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#666', lineHeight: 1.8, marginBottom: '24px' }}>
                  {project.description}
                </p>

                {/* Tools */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tools.map((tool, j) => (
                    <span key={j} className="tech-badge" style={{ fontSize: '0.58rem' }}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    const mailtoLink = `mailto:alirabi5931@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailtoLink)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="label-tag" style={{ marginBottom: '16px' }}>05 / Contact</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, marginBottom: '24px' }}>
              LET&apos;S <span style={{ color: 'var(--gold)' }}>BUILD</span><br />TOGETHER
            </h2>
            <div className="gold-line" style={{ width: '60px', marginBottom: '28px' }} />
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#777', lineHeight: 1.9, marginBottom: '40px' }}>
              Open to full-time roles as a Data Engineer, Data Analyst, or ML Engineer. Also available for consulting, freelance projects, and research collaborations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Email', value: 'alirabi5931@gmail.com', href: 'mailto:alirabi5931@gmail.com' },
                { label: 'Phone', value: '+91-7023946250', href: 'tel:+917023946250' },
                { label: 'GitHub', value: 'github.com/RabiAli21', href: 'https://github.com/RabiAli21' },
                { label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com' },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex', gap: '20px', alignItems: 'center',
                    padding: '16px 20px', background: '#0d0d0d', border: '1px solid #1a1a1a',
                    textDecoration: 'none', transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold-dim)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a1a1a')}
                >
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', width: '60px', flexShrink: 0 }}>
                    {c.label}
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#aaa' }}>{c.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Your Name
              </label>
              <input
                className="form-input"
                placeholder="John Smith"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Email Address
              </label>
              <input
                className="form-input"
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Message
              </label>
              <textarea
                className="form-input"
                placeholder="I&apos;d like to discuss a data engineering opportunity..."
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ resize: 'vertical' }}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="btn-gold"
              style={{ marginTop: '8px', width: '100%', textAlign: 'center' }}
            >
              {sent ? '✓ Opening Mail Client...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1a1a1a',
      padding: '32px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.1rem', letterSpacing: '0.15em', color: 'var(--gold)' }}>
        RABI<span style={{ color: '#f0ebe3' }}>ALI</span>
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em' }}>
        © {new Date().getFullYear()} · Data Engineer · Data Analyst · ML Engineer
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {[
          { label: 'GitHub', href: 'https://github.com/RabiAli21' },
          { label: 'LinkedIn', href: 'https://linkedin.com' },
          { label: 'Email', href: 'mailto:alirabi5931@gmail.com' },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <>
      <div className="grid-bg" />
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
