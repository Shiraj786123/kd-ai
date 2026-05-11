'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const FullStackWebDev = () => {
  const brandColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

  const techStack = ['NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'AWS CLOUD', 'DOCKER', 'REDIS'];

  const stats = [
    { 
      n: "99.9%", 
      l: "System Uptime", 
      c: brandColors[0], 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> 
    },
    { 
      n: "250ms", 
      l: "Avg. Load Time", 
      c: brandColors[1], 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> 
    },
    { 
      n: "50+", 
      l: "Scalable MVPs", 
      c: brandColors[2], 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> 
    },
    { 
      n: "10x", 
      l: "Growth Speed", 
      c: brandColors[3], 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg> 
    }
  ];

  const services = [
    { title: "Custom Web Apps", icon: "🌐", desc: "Enterprise-grade logic built from scratch." },
    { title: "Frontend UI/UX", icon: "🎨", desc: "Pixel-perfect, high-conversion interfaces." },
    { title: "Backend Systems", icon: "⚙️", desc: "Robust, secure, and lightning-fast APIs." },
    { title: "Cloud Databases", icon: "💾", desc: "Data architecture that scales with millions." },
    { title: "Integrations", icon: "🔗", desc: "Connecting your ecosystem seamlessly." },
    { title: "E-commerce Forge", icon: "🛒", desc: "Shopping experiences that drive revenue." },
    { title: "Security Protocols", icon: "🔐", desc: "End-to-end encryption and user safety." },
    { title: "Scaling & DevOps", icon: "🚀", desc: "Auto-scaling infrastructure for peak loads." }
  ];

  const processSteps = [
    { number: "01", title: "Architecture", desc: "Mapping the DNA of your application.", c: brandColors[0] },
    { number: "02", title: "Blueprint", desc: "High-fidelity UI and backend schemas.", c: brandColors[1] },
    { number: "03", title: "Engineering", desc: "Clean, maintainable code construction.", c: brandColors[2] },
    { number: "04", title: "Battle Testing", desc: "Stress testing for 99.9% uptime.", c: brandColors[3] },
    { number: "05", title: "Cloud Launch", desc: "Global deployment with 24/7 monitoring.", c: brandColors[4] }
  ];

  return (
    <div className="fswd_root">
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .fswd_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; position: relative; }

        /* --- HERO: LIVING MESH --- */
        .hero_sec { 
            background: #020617; 
            padding: 200px 0 150px; 
            text-align: center; 
            color: #fff; 
            position: relative;
            overflow: hidden;
        }
        .hero_sec::before {
            content: "";
            position: absolute;
            width: 150%; height: 150%;
            top: -25%; left: -25%;
            background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%);
            animation: pulseHero 10s ease-in-out infinite;
        }
        @keyframes pulseHero { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.2); opacity: 0.8; } }

        .hero_h1 { 
            font-size: clamp(3rem, 9vw, 6rem); 
            font-weight: 800; 
            letter-spacing: -3px;
            background: linear-gradient(to bottom, #ffffff 40%, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            z-index: 2;
        }

        /* --- COLORFUL TECH MARQUEE --- */
        .marquee_wrap { background: #f8fafc; padding: 30px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; overflow: hidden; display: flex; }
        .marquee_inner { display: flex; animation: scrollMarquee 25s linear infinite; gap: 80px; white-space: nowrap; }
        .marquee_item { font-weight: 800; font-size: 1.2rem; letter-spacing: 2px; }
        @keyframes scrollMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* --- MOVING TITLES --- */
        .sec_title { 
          font-size: clamp(2.5rem, 5vw, 3.5rem); 
          font-weight: 800; text-align: center; margin-bottom: 50px; 
          background: linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9);
          background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite;
        }
        @keyframes shine { to { background-position: 200% center; } }

        /* --- STATS SECTION (LINKED ICONS) --- */
        .stats_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin: 80px 0; align-items: center; }
        .stat_item { position: relative; text-align: center; padding: 40px 20px; transition: 0.4s; z-index: 2; }
        .stat_line { position: absolute; top: 50%; left: 70%; width: 60%; height: 2px; background: #e2e8f0; z-index: 1; transition: 0.4s; }
        .stat_item:last-child .stat_line { display: none; }
        .stat_icon_box { width: 70px; height: 70px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; transition: 0.5s; background: #fff; border: 1px solid #f1f5f9; box-shadow: 0 10px 20px rgba(0,0,0,0.03); }
        .stat_icon_box svg { width: 30px; height: 30px; }

        .stat_item:hover .stat_icon_box { transform: translateY(-10px) scale(1.1); background: var(--stat-color); color: #fff; box-shadow: 0 20px 40px var(--stat-glow); }
        .stat_item:hover .stat_line { background: var(--stat-color); height: 3px; box-shadow: 0 0 15px var(--stat-glow); }

        /* --- THE SPECTRUM (RESTORED HOVER) --- */
        .serv_grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 60px; }
        .serv_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: 45px 30px; border-radius: 32px;
            transition: 0.5s cubic-bezier(0.2, 1, 0.3, 1); position: relative;
        }
        .serv_card:hover { 
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 30px 60px rgba(14, 165, 233, 0.15);
            border-color: #0ea5e9;
        }
        .serv_icon { font-size: 3.5rem; margin-bottom: 20px; display: block; transition: 0.5s; }
        .serv_card:hover .serv_icon { transform: rotateY(180deg) scale(1.2); }

        /* --- VERTICAL PROCESS TIMELINE --- */
        .proc_wrap { max-width: 800px; margin: 80px auto; position: relative; padding-left: 100px; }
        .proc_line { position: absolute; left: 45px; top: 0; bottom: 0; width: 8px; background: #f1f5f9; border-radius: 10px; overflow: hidden; }
        .proc_line_fill { position: absolute; top: 0; left: 0; width: 100%; height: 75%; background: linear-gradient(to bottom, #0ea5e9, #8b5cf6, #ec4899); }
        .proc_step { background: #fff; padding: 40px; border-radius: 24px; margin-bottom: 40px; border: 1px solid #f1f5f9; position: relative; transition: 0.4s; }
        .proc_step:hover { transform: translateX(20px); border-color: #0ea5e9; }
        .proc_num { position: absolute; left: -105px; top: 30px; width: 80px; height: 80px; border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.8rem; border: 8px solid #fff; z-index: 2; }

        /* --- CTA --- */
        .cta_box { background: #020617; padding: 120px 40px; border-radius: 50px; text-align: center; color: #fff; margin: 100px 0; position: relative; overflow: hidden; }
        .cta_btn { display: inline-block; background: #0ea5e9; color: #fff; padding: 20px 60px; border-radius: 100px; font-weight: 800; text-decoration: none; transition: 0.4s; position: relative; z-index: 2; cursor: pointer; }
        .cta_btn:hover { transform: scale(1.05); box-shadow: 0 0 40px rgba(14, 165, 233, 0.6); }

        @media (max-width: 992px) {
            .stats_grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
            .stat_line { display: none; }
            .proc_wrap { padding-left: 60px; }
            .proc_num { left: -55px; width: 50px; height: 50px; font-size: 1.2rem; }
            .proc_line { left: 22px; }
        }
      ` }} />

      {/* Hero Section */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="hero_h1">Full-Stack Intelligence</h1>
          <p style={{ fontSize: '1.3rem', color: '#94a3b8', maxWidth: '800px', margin: '30px auto', position: 'relative', zIndex: 2 }}>
            Engineering elite digital engines where frontend beauty meets backend raw power.
          </p>
          <div style={{ marginTop: '50px' }}>
            <Link href="/contact" className="cta_btn">Talk to an Engineer</Link>
          </div>
        </div>
      </section>

      {/* Colorful Tech Marquee */}
      <div className="marquee_wrap">
        <div className="marquee_inner">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {techStack.map((tech, idx) => (
                  <span key={idx} className="marquee_item" style={{ color: brandColors[idx % brandColors.length] }}>
                    {tech}
                  </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Stats Section with Connecting Lines */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="stats_grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat_item" style={{ '--stat-color': stat.c, '--stat-glow': `${stat.c}40` }}>
                <div className="stat_line"></div>
                <div className="stat_icon_box" style={{ color: stat.c }}>{stat.icon}</div>
                <span style={{ fontSize: '2.8rem', fontWeight: 800, display: 'block' }}>{stat.n}</span>
                <span style={{ color: '#64748b', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - HOVER RESTORED */}
      <section style={{ padding: '120px 0', background: '#fcfdfe' }}>
        <div className="container">
          <h2 className="sec_title">The Full-Stack Spectrum</h2>
          <div className="serv_grid">
            {services.map((serv, i) => (
              <div key={i} className="serv_card">
                <span className="serv_icon">{serv.icon}</span>
                <h4 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '10px' }}>{serv.title}</h4>
                <p style={{ color: '#64748b', fontSize: '1rem' }}>{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Process Timeline */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="sec_title">Our Engineering Path</h2>
          <div className="proc_wrap">
            <div className="proc_line"><div className="proc_line_fill"></div></div>
            {processSteps.map((step, i) => (
              <div key={i} className="proc_step">
                <div className="proc_num" style={{ background: step.c }}>{step.number}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.6rem', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '1.1rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container">
        <div className="cta_box">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '25px', letterSpacing: '-2px' }}>Let’s Build The Future</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
             <Link href="/contact" className="cta_btn">Claim Your Consult</Link>
             <a href="https://wa.me/94740309534" className="cta_btn" style={{ background: 'transparent', border: '2px solid #0ea5e9' }} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullStackWebDev;