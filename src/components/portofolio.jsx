import React from 'react';
import reyPhoto from '../assets/rey.jpg'
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-100 font-sans leading-relaxed selection:bg-lime-400 selection:text-black">
      <div className="max-w-[860px] mx-auto px-6 py-8">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center py-4 pb-10 border-b border-[#1e1e1e] mb-12">
          <div className="font-mono text-base text-lime-400">
            rey<span className="text-yellow-300"></span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sm text-slate-500 hover:text-lime-400 transition-colors cursor-pointer">about</a>
            <a href="#skills" className="text-sm text-slate-500 hover:text-lime-400 transition-colors cursor-pointer">skills</a>
            <a href="#projects" className="text-sm text-slate-500 hover:text-lime-400 transition-colors cursor-pointer">projects</a>
            <a href="#experience" className="text-sm text-slate-500 hover:text-lime-400 transition-colors cursor-pointer">experience</a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-lime-400 transition-colors cursor-pointer">contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-16">
          <div>
            <div className="font-mono text-xs text-lime-400 bg-[#0f2000] border border-[#1a3a00] px-3 py-1 rounded-full inline-block mb-4">
              &#x2022; Available for work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3">
              Renaldo<br />
              <span className="text-lime-400">Yosia</span> <span className="text-yellow-300">S.</span>
            </h1>
            <p className="text-[15px] text-slate-400 max-w-[420px] leading-relaxed mb-6">
              Full Stack Developer crafting robust, scalable apps from frontend to backend. Passionate about clean code and creative solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/lotus16" target="_blank" rel="noreferrer" className="bg-lime-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
                View GitHub
              </a>
              <a href="https://linkedin.com/in/renaldo-yosia" target="_blank" rel="noreferrer" className="bg-transparent border border-[#2a4a10] text-lime-400 hover:bg-[#0f2000] px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="w-[140px] h-[140px] rounded-2xl border-2 border-[#2a5a10] shrink-0 overflow-hidden bg-card2">
            <img
              src={reyPhoto}
              alt="Renaldo Yosia photo"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="font-mono text-xs text-lime-400 tracking-widest mb-2">// about</div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Who I am</h2>
          <div className="bg-card border border-[#1e1e1e] rounded-2xl p-6 grid md:grid-cols-2 gap-6">
            <div className="text-sm text-slate-400 leading-relaxed">
              Hey! I'm Renaldo — a Full Stack Developer who loves turning ideas into real, working products. I enjoy the full journey: from designing clean UIs to architecting solid backend systems.<br /><br />
              I've built school management systems, marketplaces, and enterprise UI — and I care deeply about both code quality and user experience.
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-card2 border border-[#1e1e1e] rounded-xl p-3 px-4">
                <div className="text-2xl font-bold text-lime-400">9+</div>
                <div className="text-xs text-slate-500">months work experience</div>
              </div>
              <div className="bg-card2 border border-[#1e1e1e] rounded-xl p-3 px-4">
                <div className="text-2xl font-bold text-lime-400">4+</div>
                <div className="text-xs text-slate-500">real-world projects</div>
              </div>
              <div className="bg-card2 border border-[#1e1e1e] rounded-xl p-3 px-4">
                <div className="text-2xl font-bold text-lime-400">Full</div>
                <div className="text-xs text-slate-500">stack coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="font-mono text-xs text-lime-400 tracking-widest mb-2">// tech stack</div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">What I work with</h2>
          
          <div className="font-mono text-xs text-lime-400 mb-3">Frontend</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { icon: '⚛️', name: 'React' },
              { icon: '🔷', name: 'TypeScript' },
              { icon: '💨', name: 'Tailwind' },
              { icon: '🟨', name: 'JavaScript' },
            ].map((skill, i) => (
              <div key={i} className="bg-card border border-[#1e1e1e] rounded-xl p-3 text-center hover:border-lime-700 hover:-translate-y-1 transition-all duration-200">
                <div className="text-2xl mb-1">{skill.icon}</div>
                <div className="text-xs text-slate-400 font-mono">{skill.name}</div>
              </div>
            ))}
          </div>

          <div className="font-mono text-xs text-lime-400 mb-3">Backend</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { icon: '🟢', name: 'Node.js' },
              { icon: '🐍', name: 'Python' },
              { icon: '🚂', name: 'Express' },
              { icon: '🔴', name: 'Laravel' },
            ].map((skill, i) => (
              <div key={i} className="bg-card border border-[#1e1e1e] rounded-xl p-3 text-center hover:border-lime-700 hover:-translate-y-1 transition-all duration-200">
                <div className="text-2xl mb-1">{skill.icon}</div>
                <div className="text-xs text-slate-400 font-mono">{skill.name}</div>
              </div>
            ))}
          </div>

          <div className="font-mono text-xs text-lime-400 mb-3">Tools & DB</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '🐘', name: 'PostgreSQL' },
              { icon: '🍃', name: 'MongoDB' },
              { icon: '🐳', name: 'Docker' },
              { icon: '🐙', name: 'Git' },
            ].map((skill, i) => (
              <div key={i} className="bg-card border border-[#1e1e1e] rounded-xl p-3 text-center hover:border-lime-700 hover:-translate-y-1 transition-all duration-200">
                <div className="text-2xl mb-1">{skill.icon}</div>
                <div className="text-xs text-slate-400 font-mono">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="font-mono text-xs text-lime-400 tracking-widest mb-2">// projects</div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Things I've built</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            
            <div className="bg-card border border-[#1e1e1e] hover:border-lime-700 transition-colors rounded-2xl p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="w-9 h-9 bg-[#0f2000] rounded-lg flex items-center justify-center text-base">🏥</div>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Backend + CMS</span>
              </div>
              <h3 className="text-base font-bold mb-1.5">Medpoint Mediverse</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">Developed a robust backend and CMS for Medpoint Mediverse healthcare platform, focusing on secure data management and efficient content delivery.</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Node.js</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Express</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">REST API</span>
              </div>
              <a href="https://cms-phi-orcin.vercel.app/" target="_blank" rel="noreferrer" className="text-[11px] text-lime-400 hover:text-yellow-300 transition-colors font-mono underline">
                Visit CMS App →
              </a>
            </div>
            
            {/* Project Card 1 */}
            <div className="bg-card border border-[#1e1e1e] hover:border-lime-700 transition-colors rounded-2xl p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="w-9 h-9 bg-[#0f2000] rounded-lg flex items-center justify-center text-base">🏫</div>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Web + Admin</span>
              </div>
              <h3 className="text-base font-bold mb-1.5">SD Putra Wacana</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">Company profile website and full administration system for SD Putra Wacana — covering student data, attendance, and school management.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">React</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Laravel</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">MySQL</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-card border border-[#1e1e1e] hover:border-lime-700 transition-colors rounded-2xl p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="w-9 h-9 bg-[#0f2000] rounded-lg flex items-center justify-center text-base">🛍️</div>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Marketplace</span>
              </div>
              <h3 className="text-base font-bold mb-1.5">Jekoneng</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">A local marketplace platform enabling buyers and sellers to connect, list products, and manage transactions in one place.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">React</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Node.js</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">PostgreSQL</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-card border border-[#1e1e1e] hover:border-lime-700 transition-colors rounded-2xl p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="w-9 h-9 bg-[#0f2000] rounded-lg flex items-center justify-center text-base">🎨</div>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">UI Design</span>
              </div>
              <h3 className="text-base font-bold mb-1.5">Sinar Jaya UI</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">User interface design and frontend implementation for Sinar Jaya — focused on clean, intuitive, and brand-aligned experience.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Figma</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">Tailwind</span>
                <span className="font-mono text-[10px] bg-[#0f2000] text-lime-400 px-2 py-1 rounded-full border border-[#1a3a00]">React</span>
              </div>
            </div>

            {/* More Projects Card */}
            <a href="https://github.com/lotus16" target="_blank" rel="noreferrer" className="border border-dashed border-[#1e1e1e] hover:border-lime-700 hover:bg-[#0f2000]/20 transition-all rounded-2xl p-5 flex flex-col items-center justify-center gap-2 min-h-[160px] no-underline">
              <div className="text-2xl text-slate-400">+</div>
              <div className="text-xs text-slate-500 font-mono">more on github</div>
              <span className="text-[11px] text-lime-400 border border-[#1a3a00] px-3 py-1 rounded-full bg-[#0f2000]">lotus16</span>
            </a>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="font-mono text-xs text-lime-400 tracking-widest mb-2">// experience</div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Where I've worked</h2>
          
          <div className="relative pl-6 border-l-2 border-lime-400/50 space-y-8">
            
            <div className="relative">
              <div className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-lime-400 border-2 border-dark ring-2 ring-lime-400/20"></div>
              <div className="bg-card border border-[#1e1e1e] rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[15px] font-bold">UI/UX Designer</h3>
                  <span className="font-mono text-[10px] text-lime-400 bg-[#0f2000] border border-[#1a3a00] px-2 py-1 rounded-full">6 months</span>
                </div>
                <div className="text-xs text-slate-500 mb-2">Sinar Jaya</div>
                <p className="text-[13px] text-slate-400 leading-relaxed">Designed end-to-end user interfaces for the company's digital products — conducting user research, creating wireframes and prototypes, and ensuring a consistent design system across all touchpoints.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-lime-400 border-2 border-dark ring-2 ring-lime-400/20"></div>
              <div className="bg-card border border-[#1e1e1e] rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[15px] font-bold">Refactory Intensive Pairing</h3>
                  <span className="font-mono text-[10px] text-lime-400 bg-[#0f2000] border border-[#1a3a00] px-2 py-1 rounded-full">3 months</span>
                </div>
                <div className="text-xs text-slate-500 mb-2">Refactory</div>
                <p className="text-[13px] text-slate-400 leading-relaxed">Intensive pair programming bootcamp focused on software craftsmanship — covering clean code principles, TDD, agile workflows, and real-world collaborative development practices.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <div className="font-mono text-xs text-lime-400 tracking-widest mb-2">// contact</div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Let's connect</h2>
          
          <div className="bg-card border border-[#1e1e1e] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Open to <span className="text-lime-400">opportunities</span></h3>
            <p className="text-sm text-slate-500 mb-6">Whether it's a project, a collab, or just a chat about tech — my inbox is always open.</p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://github.com/lotus16" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium border border-[#1e1e1e] bg-card2 hover:border-lime-400 hover:text-lime-400 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.29 3.47.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                lotus16
              </a>
              <a href="https://linkedin.com/in/renaldo-yosia" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium border border-[#1e1e1e] bg-card2 hover:border-lime-400 hover:text-lime-400 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.22 0z"/></svg>
                renaldo-yosia
              </a>
              <a href="mailto:reynaldosetyanto@gmail.com" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium border border-[#1e1e1e] bg-card2 hover:border-lime-400 hover:text-lime-400 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                Email me
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1e1e1e] pt-6 flex justify-between items-center text-slate-500">
          <p className="font-mono text-xs">
            renaldo<span className="text-lime-400">.</span>dev <span className="text-lime-400 mx-1">&#x2022;</span> 2025
          </p>
          <p className="text-[11px]">built with React + Tailwind</p>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;