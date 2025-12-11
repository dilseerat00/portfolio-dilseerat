import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Portfolio: Dilseerat Kaur
// Single-file React component (Tailwind CSS required).
// How to use:
// 1. Install Tailwind CSS in your project.
// 2. Install framer-motion: `npm i framer-motion`.
// 3. Place your images in /public/assets/ and update paths below.
// 4. Replace resume link with your actual resume file path.

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [dark, setDark] = useState(false);

  const projects = [
    {
      id: 'internsaathi',
      title: 'Internsaathi',
      short: 'College-intern platform for students, internships & recruiters.',
      features: [
        'Role-based dashboards (student / college / recruiter)',
        'Advanced internship filters & resume visibility',
        'Secure application workflows & messaging'
      ],
      img: '/assets/internsaathi.png'
    },
    {
      id: 'resumebuilder',
      title: 'ResumeBuilder',
      short: 'Dynamic resume builder with printable UI and export options.',
      features: [
        'Dynamic form-driven resume creation',
        'Printable, PDF export & sharing',
        'Interactive preview with templates'
      ],
      img: '/assets/resumebuilder.png'
    },
    {
      id: 'naukrisaathi',
      title: 'NaukriSaathi',
      short: 'Job discovery and application helper tailored for students.',
      features: [
        'Smart job matching for students',
        'Application tracker and reminder system',
        'Integrated interview prep resources'
      ],
      img: '/assets/naukrisaathi.png'
    }
  ];

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-raleway transition-colors">
        <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dilseerat Kaur — Portfolio</h1>
          <div className="flex items-center gap-4">
            <a href="/assets/RESUME_DILSEERAT-.pdf" download className="px-3 py-2 bg-emerald-500 text-white rounded-lg shadow hover:scale-105 transition-transform">Download CV</a>
            <button onClick={() => setDark(!dark)} className="px-3 py-2 border rounded-lg">{dark ? 'Light' : 'Dark'}</button>
          </div>
        </header>

        <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold">Hi — I'm <span className="text-emerald-500">Dilseerat</span></h2>
            <p className="mt-4 text-lg">Software Engineer • B.Tech (IT) • Passionate about web development, AI/ML and building delightful user experiences.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:opacity-90">View Projects</a>
              <a href="#contact" className="px-4 py-2 border rounded-lg">Contact Me</a>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li><strong>Location:</strong> Chandigarh, India</li>
              <li><strong>Languages:</strong> English, Hindi, Punjabi</li>
              <li><strong>Skills:</strong> React, Node.js, Python, SQL</li>
              <li><strong>Interests:</strong> AI, DSA, Product Design</li>
            </ul>
          </motion.div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
            {/* Replace with your headshot or a stylized image */}
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
              <img src="/assets/profile.jpg" alt="Dilseerat" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto p-6">
          <h3 className="text-2xl font-semibold mb-4">Selected Projects</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article key={p.id} whileHover={{ scale: 1.03 }} className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow">
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md" />
                <h4 className="mt-3 font-semibold text-lg">{p.title}</h4>
                <p className="text-sm mt-1">{p.short}</p>
                <div className="mt-3 flex justify-between items-center">
                  <button onClick={() => setSelectedProject(p)} className="px-3 py-2 bg-emerald-500 text-white rounded">Explore</button>
                  <a href={`#${p.id}`} className="text-sm opacity-80">Learn more</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Project modal / detail */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSelectedProject(null)} />
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative max-w-3xl w-full bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <p className="text-sm mt-1">{selectedProject.short}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-sm px-3 py-1 border rounded">Close</button>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-48 object-cover rounded-md" />

                <div>
                  <h4 className="font-semibold">Key features</h4>
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    {selectedProject.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>

                  <div className="mt-4">
                    <a className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-lg mr-2" href="#contact">Request Demo</a>
                    <a className="inline-block px-4 py-2 border rounded-lg" href="/assets/RESUME_DILSEERAT-.pdf" download>Download Project Brief</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        <section id="skills" className="max-w-6xl mx-auto p-6">
          <h3 className="text-2xl font-semibold mb-4">Skills & Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow">
              <h4 className="font-semibold">Languages & Frameworks</h4>
              <p className="text-sm mt-2">C, C++, Java, Python, JavaScript, React, Node.js, SQL</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow">
              <h4 className="font-semibold">Tools</h4>
              <p className="text-sm mt-2">Git, GitHub, MongoDB, Express, Docker, Jupyter</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow">
              <h4 className="font-semibold">Soft Skills</h4>
              <p className="text-sm mt-2">Problem Solving, Communication, Teamwork, Leadership</p>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto p-6">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>If you'd like to connect for internships, collaborations or interviews — send a message.</p>

          <form className="mt-4 grid gap-3">
            <input placeholder="Your name" className="p-3 border rounded-lg bg-white dark:bg-slate-800" />
            <input placeholder="Your email" className="p-3 border rounded-lg bg-white dark:bg-slate-800" />
            <textarea placeholder="Message" rows={5} className="p-3 border rounded-lg bg-white dark:bg-slate-800" />
            <div className="flex gap-3">
              <button type="button" className="px-4 py-2 bg-emerald-500 text-white rounded-lg">Send</button>
              <a href="mailto:dilseeratjassal@gmail.com" className="px-4 py-2 border rounded-lg">Email Me</a>
            </div>
          </form>
        </section>

        <footer className="max-w-6xl mx-auto p-6 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Dilseerat Kaur — Built with care. Theme: Raleway • Jade / Emerald accents.</p>
        </footer>
      </main>

      {/* Tailwind font import (put in index.html or global CSS):
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;800&display=swap" rel="stylesheet">
          .font-raleway { font-family: 'Raleway', sans-serif; }
      */}
    </div>
  );
}
