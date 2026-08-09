"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Web Development", "Fast, responsive websites and web applications built for real business goals."],
  ["02", "Mobile Development", "Cross-platform Android and iOS apps with polished user experiences."],
  ["03", "UI / UX Design", "Clean, user-centered interfaces that make products easier to understand and use."],
  ["04", "Cloud Solutions", "Scalable infrastructure, APIs and deployment for modern digital products."],
  ["05", "Maintenance", "Reliable updates, fixes, monitoring and support after launch."]
];

const projects = [
  ["EduLearn", "E-learning Platform", "images/edulearn.svg"],
  ["TaskFlow", "Project Management App", "images/taskflow.svg"],
  ["MediTrack", "Healthcare Management", "images/meditrack.svg"],
  ["ShopEase", "E-commerce Platform", "images/shopease.svg"]
];

export default function Home() {
  // start with false to keep server/client markup consistent; read real preference on mount
  const [dark, setDark] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = saved ? saved === 'dark' : prefersDark;
      setDark(isDark);
      document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    } catch (e) {
      // ignore
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let lastY = window.scrollY || 0;
    const threshold = 10;
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y < 40) {
        setNavHidden(false);
        lastY = y;
        return;
      }
      if (y > lastY + threshold) {
        setNavHidden(true);
      } else if (y < lastY - threshold) {
        setNavHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
      <nav className={`nav ${navHidden ? 'hidden' : ''}`}>
        <a href="#home" className="brand">
          <img src="images/bugleaf-logo.svg" alt="BugLeaf Software" />
          <span>BugLeaf <b>Software</b></span>
        </a>
        <div className="links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#process">Process</a><a href="#projects">Projects</a><a href="#developers">Our Team</a>  <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☀" : "☾"}
          </button>
          <a className="small-cta" href="#contact">Let&apos;s Talk ↗</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="pill"><i /> WE BUILD DIGITAL SOLUTIONS</div>
          <h1>Innovative Software<br />Solutions for a<br /><span>Smarter</span> Tomorrow</h1>
          <p>BugLeaf Software creates powerful, scalable and user-friendly digital products that help businesses grow and succeed.</p>
          <div className="actions">
            <a className="btn primary" href="#services">Explore Services <b>→</b></a>
            <a className="btn ghost" href="#projects">View Our Work <b>▷</b></a>
          </div>
          <div className="stats">
            <div><strong>10+</strong><small>Projects Completed</small></div>
            <div><strong>5+</strong><small>Happy Clients</small></div>
            <div><strong>2+</strong><small>Years Experience</small></div>
          </div>
        </div>
        <div className="hero-art">
          <img src="images/hero-devices.svg" alt="BugLeaf software shown on laptop and mobile" />
        </div>
      </section>

      <section className="about card" id="about">
        <div className="about-logo"><img src="images/bugleaf-logo.svg" alt="" /></div>
        <div className="about-main"><label>WHO WE ARE</label><h2>We turn ideas into <span>powerful digital products.</span></h2><p>At BugLeaf Software, we combine creativity, technology and strategy to deliver solutions that drive real business results. Our goal is simple — build products that people love.</p><a href="#contact">Learn More About Us →</a></div>
        <div className="about-points">
          <div><b>✦</b><h3>Modern Solutions</h3><p>Clean, scalable and high-performance applications.</p></div>
          <div><b>♧</b><h3>Client Focused</h3><p>We work closely with clients to understand their needs.</p></div>
          <div><b>✓</b><h3>Reliable Support</h3><p>Ongoing support and maintenance after launch.</p></div>
        </div>
      </section>


      <section className="section" id="services">
        <div className="heading"><label>OUR SERVICES</label><h2>What We Do</h2><p>Everything you need to turn an idea into a polished digital product.</p></div>
        <div className="service-grid">
          {services.map(([n, t, d]) => <article className="service" key={n}><small>{n}</small><div className="icon">✦</div><h3>{t}</h3><p>{d}</p><span>→</span></article>)}
        </div>
      </section>

      <section className="process card" id="process">
        <div className="heading"><label>OUR PROCESS</label><h2>How We Work</h2></div>
        <div className="steps">
          {[
            ["01", "Discover", "We understand your idea, goals and requirements."],
            ["02", "Plan", "We analyze and create a strategy and roadmap."],
            ["03", "Design", "We design wireframes and beautiful user interfaces."],
            ["04", "Develop", "We build your product with clean and efficient code."],
            ["05", "Deliver", "We test, deploy and provide ongoing support."]
          ].map(([n, t, d]) => <div className="step" key={n}><b>{n}</b><div className="step-icon">✦</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="heading"><label>FEATURED PROJECTS</label><h2>Some Of Our Work</h2></div>
        <div className="project-grid">
          {projects.map(([title, desc, img]) => <article className="project" key={title}><img src={img} alt={title} /><div><h3>{title}</h3><p>{desc}</p><span>↗</span></div></article>)}
        </div>
        <div className="center"><a className="btn ghost" href="#contact">View All Projects →</a></div>
      </section>


      

      <section className="section developers" id="developers">
        <div className="heading">
          <label>OUR TEAM</label>
          <h2>Developers</h2>
          <p>Meet the people who build our products.</p>
        </div>

        <div className="dev-grid">
          {[
            { name: 'Arnab', role: 'UI/UX Developer', bio: 'Designing interfaces and delightful user experiences.', photo: 'images/developers/arnab.jpg' },
            { name: 'Nadia', role: 'Web Developer', bio: 'Front-end engineering and component-driven UIs.', photo: 'images/developers/nadia.jpg' },
            { name: 'Sudipto', role: 'Mobile App Developer', bio: 'iOS and Android applications and integrations.', photo: 'images/developers/sudipto.jpg' }
          ].map((d) => (
            <article
              className={`dev-card ${expanded === d.name ? 'expanded' : ''}`}
              key={d.name}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === d.name}
              onClick={() => setExpanded(expanded === d.name ? null : d.name)}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setExpanded(expanded === d.name ? null : d.name);
                }
              }}
            >
              {d.photo ? (
                <img src={d.photo} alt={`${d.name} photo`} className="avatar avatar-img" />
              ) : (
                <div className="avatar" aria-hidden>{d.name.split(' ').filter(Boolean).map((p) => p[0]).slice(0, 2).join('')}</div>
              )}
              <div className="dev-info">
                <h3>{d.name}</h3>
                <small className="muted">{d.role}</small>
                <p className="dev-bio">{d.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <img src="images/bugleaf-logo.svg" alt="" />
        <div><label>READY TO START?</label><h2>Let&apos;s build something <span>amazing.</span></h2><p>Have an idea? We&apos;re just a message away.</p></div>
        <a className="btn primary" href="mailto:hello@bugleaf.com">Contact Us →</a>
        <a className="btn whatsapp" href="https://wa.me/8801869298045?text=Hello%20BugLeaf%20Team" target="_blank" rel="noopener noreferrer"> WhatsApp Us</a>
      </section>



      <footer>
        <div className="footer-brand"><img src="images/bugleaf-logo.svg" alt="" /><div><strong>BugLeaf Software</strong><p>Building innovative software solutions.</p></div></div>
        <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#projects">Projects</a></div>
        <div><h4>Services</h4><a href="#services">Web Development</a><a href="#services">Mobile Development</a><a href="#services">UI/UX Design</a><a href="#services">Cloud Solutions</a></div>
        <div><h4>Contact</h4><a href="mailto:hello@bugleaf.com">hello@bugleaf.com</a><span>+880 1869 298045</span><span>Chittagong, Bangladesh</span></div>
      </footer>
      <div className="copyright"> © 2026 BugLeaf Software. All rights reserved.</div>
    </main>
  );
}
