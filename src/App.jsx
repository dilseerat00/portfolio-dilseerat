import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Folder } from 'lucide-react';
import './App.css';

// Portfolio data
const portfolioData = {
  name: "Dilseerat Kaur",
  title: "Software Engineer",
  tagline: "I design and develop seamless, user-friendly web applications that blend functionality with creativity.",
  about: "I’m a software engineer passionate about building accessible, human-centered web experiences. Proficient in the MERN stack, I focus on creating full-stack applications with responsive, intuitive, and interactive interfaces. Currently pursuing B.Tech in Information Technology at Chandigarh Group of Colleges with a CGPA of 9.0/10, I enjoy transforming ideas into practical solutions that make an impact. I aim to craft products that are not only efficient but also engaging and inclusive for users.",
  email: "dilseeratjassal@gmail.com",
  github: "https://github.com/dilseerat00",
  linkedin: "https://linkedin.com/in/dilseerat-kaur-9502702b0/",
  
  experience: [
    {
  period: "Jul 2025 - Jan 2026",
  title: "Web Development Intern",
  company: "Sunsys Techsol Pvt. Ltd.",
  description: "Worked on full-stack web development projects with a focus on interactive and user-friendly interfaces. Developed advanced features including swipers, sliders, and search filters to enhance user experience. Collaborated with the team on design implementation, debugging, and responsive layouts to deliver high-quality applications.",
  tech: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS", "HTML"]
},
{
  period: "Oct 2024 - Jan 2025",
  title: "Python Development Intern",
  company: "CodeAlpha",
  description: "Developed multiple Python projects including Voice Assistant, Hangman Game, Student Grade Tracker, and Tic Tac Toe Game. Applied data structures, algorithms, and OOP principles to optimize project logic and enhance user interactions. Gained experience in problem-solving, testing, and debugging Python applications.",
  tech: ["Python", "DSA", "OOP", "Algorithms"]
},
{
  period: "June 2024 - July 2024",
  title: "Java Development Intern",
  company: "ThinkNEXT Technologies",
  description: "Developed an Advanced Unit Converter application in Java, supporting scientific, metric, and custom units. Implemented a user-friendly GUI using Swing, accurate conversion logic, and robust error handling. Gained hands-on experience in object-oriented programming (OOP), GUI development, event handling, and debugging, while learning best practices in Java coding, modular design, and problem-solving for real-world applications.",
  tech: ["Java", "OOP", "JDK", "JRE", "GUI"]
}



    
  ],

  projects: [
    {
      title: "InternSaathi",
      description: "A comprehensive platform connecting students, colleges, and recruiters for internship opportunities. Features role-based dashboards, advanced filtering, and secure application workflows.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Diseraphic/InternSaathi_",
      external: "https://www.internsaathi.com",
      image: "/images/internsaathi.png"
    },
    {
      title: "ResumeBuilder",
      description: "Dynamic resume builder with real-time preview, multiple templates, and PDF export functionality. Provides an intuitive interface for creating professional resumes.",
      tech: ["MERN Stack"],
      github: "https://github.com/dilseerat00/resume-builder",
      external: "https://github.com/dilseerat00/resume-builder",
        image: "/images/resumebuilder.png"
    },
    {
      title: "NaukriSaathi",
      description: "Job discovery platform tailored for students with smart matching algorithms, application tracking, and integrated interview preparation resources.",
      tech: ["MERN Stack"],
      github: "https://github.com/Diseraphic/NaukriSaathi_",
      external: "https://www.naukrisaathi.com/",
        image: "/images/naukrisaathi.jpg"
    },
    {
      title: "College Website",
      description: "Responsive website showcasing academic programs, facilities, and contact information with enhanced user experience through intuitive navigation.",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/dilseerat00/cgc-college-website",
      external: "https://github.com/dilseerat00/cgc-college-website",
        image: "/images/college-website.png"
    }
  ]
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#94a3b8'
  };

  const mainWrapperStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '48px 24px',
    minHeight: '100vh'
  };

  const layoutStyle = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'space-between'
  };

  const headerStyle = {
    position: 'sticky',
    top: 0,
    maxHeight: '100vh',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '96px',
    paddingBottom: '96px'
  };

  const mainStyle = {
    width: '50%',
    paddingTop: '96px',
    paddingBottom: '96px'
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#e2e8f0',
    letterSpacing: '-0.025em',
    marginBottom: '12px'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#e2e8f0',
    marginBottom: '16px'
  };

  const taglineStyle = {
    maxWidth: '320px',
    lineHeight: '1.75',
    color: '#94a3b8'
  };

  const sectionHeadingStyle = {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#e2e8f0',
    marginBottom: '64px'
  };

  return (
    <div style={containerStyle}>
      {/* Gradient cursor effect */}
      <div 
        className="gradient-overlay"
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 30,
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          transition: 'background 300ms'
        }}
      />

      <div style={mainWrapperStyle}>
        <div style={layoutStyle} className="portfolio-layout">
          {/* Left Column - Fixed */}
          <header style={headerStyle} className="portfolio-header">
            <div>
              <h1 style={headingStyle}>{portfolioData.name}</h1>
              <h2 style={subtitleStyle}>{portfolioData.title}</h2>
              <p style={taglineStyle}>{portfolioData.tagline}</p>

              {/* Navigation */}
              <nav style={{ marginTop: '64px' }} aria-label="In-page jump links">
                <ul style={{ width: 'max-content' }}>
                  {['about', 'experience', 'projects'].map((section) => (
                    <li key={section}>
                      <a 
                        href={`#${section}`}
                        className={`group ${activeSection === section ? 'active' : ''}`}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          padding: '12px 0',
                          textDecoration: 'none'
                        }}
                      >
                        <span 
                          className="nav-indicator"
                          style={{
                            width: activeSection === section ? '64px' : '32px',
                            height: '1px',
                            backgroundColor: activeSection === section ? '#e2e8f0' : '#475569',
                            marginRight: '16px',
                            transition: 'all 0.3s'
                          }}
                        ></span>
                        <span 
                          className="nav-text"
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: activeSection === section ? '#e2e8f0' : '#64748b'
                          }}
                        >
                          {section}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul 
  style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px', 
    marginTop: '32px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}
  aria-label="Social media"
>
  <li>
    <a 
      href={portfolioData.github}
      target="_blank"
      rel="noreferrer"
      style={{ display: 'block', color: '#94a3b8', transition: 'color 0.3s' }}
    >
      <Github style={{ width: '24px', height: '24px' }} />
    </a>
  </li>

  <li>
    <a 
      href={portfolioData.linkedin}
      target="_blank"
      rel="noreferrer"
      style={{ display: 'block', color: '#94a3b8', transition: 'color 0.3s' }}
    >
      <Linkedin style={{ width: '24px', height: '24px' }} />
    </a>
  </li>

  <li>
    <a 
      href={`mailto:${portfolioData.email}`}
      style={{ display: 'block', color: '#94a3b8', transition: 'color 0.3s' }}
    >
      <Mail style={{ width: '24px', height: '24px' }} />
    </a>
  </li>
</ul>

          </header>

          {/* Right Column - Scrollable */}
          <main style={mainStyle}>
            {/* About Section */}
            <section id="about" style={{ marginBottom: '144px', scrollMarginTop: '96px' }}>
              <div className="section-heading-sticky">
                <h2 style={sectionHeadingStyle}>About</h2>
              </div>
              <div>
                <p style={{ marginBottom: '16px', lineHeight: '1.75' }}>
                  {portfolioData.about}
                </p>
                <p style={{ marginBottom: '16px', lineHeight: '1.75' }}>
                  Currently pursuing <span style={{ fontWeight: '500', color: '#e2e8f0' }}>B.Tech in Information Technology</span> at Chandigarh Group of Colleges with a CGPA of <span style={{ fontWeight: '500', color: '#e2e8f0' }}>9.0/10</span>. I'm passionate about building accessible, inclusive products and digital experiences that make a difference.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" style={{ marginBottom: '144px', scrollMarginTop: '96px' }}>
              <div className="section-heading-sticky">
                <h2 style={sectionHeadingStyle}>Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {portfolioData.experience.map((exp, index) => (
                    <li key={index} style={{ marginBottom: '48px' }}>
                      <div className="group experience-card" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '16px', paddingBottom: '4px' }}>
                        <div className="hover-effect"></div>
                        <header style={{ gridColumn: 'span 2', marginTop: '4px', marginBottom: '8px', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', zIndex: 10 }}>
                          {exp.period}
                        </header>
                        <div style={{ gridColumn: 'span 6', zIndex: 10 }}>
                          <h3 style={{ fontWeight: '500', lineHeight: '1.375', color: '#e2e8f0', fontSize: '1rem' }}>
                            <div>
                              <span className="group/link" style={{ display: 'inline-flex', alignItems: 'baseline', fontWeight: '500', color: '#e2e8f0' }}>
                                <span>{exp.title} · {exp.company}</span>
                              </span>
                            </div>
                          </h3>
                          <p style={{ marginTop: '8px', fontSize: '0.875rem', lineHeight: '1.75' }}>
                            {exp.description}
                          </p>
                          <ul style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px' }} aria-label="Technologies used">
                            {exp.tech.map((tech, i) => (
                              <li key={i}>
                                <div className="tech-tag">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <div style={{ marginTop: '48px' }}>
                  <a 
                    className="group resume-link" 
                    href="https://drive.google.com/file/d/1iqU3mxCiqbFSsY45-pGqFGPacBpKGhJL/view?usp=sharing"
                    style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '500', color: '#e2e8f0' }}
                  >
                    <span className="link-underline">View Full Résumé</span>
                    <ExternalLink className="external-link-icon" style={{ marginLeft: '4px', width: '16px', height: '16px' }} />
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={{ marginBottom: '144px', scrollMarginTop: '96px' }}>
              <div className="section-heading-sticky">
                <h2 style={sectionHeadingStyle}>Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {portfolioData.projects.map((project, index) => (
                    <li key={index} style={{ marginBottom: '48px' }}>
                      <div className="group project-card" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '16px', paddingBottom: '4px' }}>
                        <div className="hover-effect"></div>
                        <div style={{ gridColumn: 'span 6', order: 2, zIndex: 10 }}>
                          <h3>
                            <a 
                              className="group/link"
                              href={project.external}
                              target="_blank"
                              rel="noreferrer"
                              style={{ display: 'inline-flex', alignItems: 'baseline', fontWeight: '500', color: '#e2e8f0', fontSize: '1rem' }}
                            >
                              <span>
                                {project.title}
                                <ExternalLink className="external-link-icon" style={{ marginLeft: '4px', width: '16px', height: '16px', display: 'inline-block' }} />
                              </span>
                            </a>
                          </h3>
                          <p style={{ marginTop: '8px', fontSize: '0.875rem', lineHeight: '1.75' }}>
                            {project.description}
                          </p>
                          <ul style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px' }} aria-label="Technologies used">
                            {project.tech.map((tech, i) => (
                              <li key={i}>
                                <div className="tech-tag">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div style={{ gridColumn: 'span 2', order: 1, zIndex: 10 }}>
                        <div 
  style={{
    width: "100%",
    height: "140px",
    overflow: "hidden",
    borderRadius: "10px",
    backgroundColor: "#1e293b"
  }}
>
  <img 
    src={project.image} 
    alt={project.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // THIS makes it wide & small
      objectPosition: "center",
      display: "block"
    }}
  />
</div>


                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Footer */}
            <footer style={{ maxWidth: '448px', paddingBottom: '64px', fontSize: '0.875rem', color: '#64748b' }}>
              <p>
                Designed by <a href="http://linkedin.com/in/dilseerat-kaur-9502702b0/" style={{ fontWeight: '500', color: '#94a3b8' }} target="_blank" rel="noreferrer">Dilseerat Kaur</a>. 
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}