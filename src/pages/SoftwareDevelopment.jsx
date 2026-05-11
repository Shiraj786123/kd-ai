'use client';

import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const SoftwareDevelopment = () => {
  // Vibrant professional color palette
  const highlightColors = ['#f43f5e', '#84cc16', '#3b82f6', '#f97316', '#d946ef', '#06b6d4'];

  const techStack = [
    { name: 'FLUTTER', c: highlightColors[0] },
    { name: 'PYTHON', c: highlightColors[1] },
    { name: 'JAVA', c: highlightColors[2] },
    { name: 'KOTLIN', c: highlightColors[3] },
    { name: 'TYPESCRIPT', c: highlightColors[4] },
    { name: 'AWS CLOUD', c: highlightColors[5] }
  ];

  const sections = [
    {
      title: "Custom Engineering",
      desc: "Architecting tailored logic to solve complex business bottlenecks with precision.",
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>,
      items: ["Enterprise SaaS", "Legacy Modernization", "Custom Web Apps"],
      color: highlightColors[0]
    },
    {
      title: "Mobile Architecture",
      desc: "Delivering native-grade performance across iOS, Android, and cross-platform hubs.",
      icon: <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>,
      items: ["iOS & Android Apps", "PWA Solutions", "Flutter / React Native"],
      color: highlightColors[1]
    },
    {
      title: "Cloud & DevOps",
      desc: "Infrastructure designed for 99.9% uptime and seamless deployment cycles.",
      icon: <path d="M17.5 19L22 14L17.5 9M6.5 5L2 10L6.5 15M14.5 4L9.5 20"/>,
      items: ["AWS/Azure Scaling", "CI/CD Automation", "Database Tuning"],
      color: highlightColors[2]
    },
    {
      title: "Integrity & Security",
      desc: "Enterprise-grade encryption and rigorous QA to protect your digital assets.",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
      items: ["Penetration Testing", "Real-time Monitoring", "Bug Remediation"],
      color: highlightColors[5]
    },
  ];

  const processSteps = [
    { number: "01", title: "Discovery", desc: "Defining project DNA and tech feasibility.", c: highlightColors[0] },
    { number: "02", title: "Architecture", desc: "Blueprinting scalable system schemas.", c: highlightColors[2] },
    { number: "03", title: "Development", desc: "Agile sprints with high-velocity code.", c: highlightColors[1] },
    { number: "04", title: "QA Testing", desc: "Rigorous stress and security audits.", c: highlightColors[3] },
    { number: "05", title: "Global Scale", desc: "Deployment with 24/7 technical support.", c: highlightColors[4] }
  ];

  return (
    <div className="soft_root">
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .soft_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; }
        .container { width: 92%; max-width: 1300px; margin: 0 auto; position: relative; }

        /* --- HERO: FULLY RESPONSIVE --- */
        .hero_sec { 
            background: #020617; padding: clamp(140px, 15vh, 200px) 0 clamp(80px, 10vh, 120px); 
            text-align: center; color: #fff; position: relative; overflow: hidden;
        }
        .hero_sec::before {
            content: ""; position: absolute; width: 150%; height: 150%; top: -25%; left: -25%;
            background: radial-gradient(circle at center, rgba(244, 63, 94, 0.12) 0%, transparent 45%),
                        radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 40%);
            animation: pulseHero 12s ease-in-out infinite;
        }
        @keyframes pulseHero { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1) rotate(2deg); } }

        .hero_h1 { 
            font-size: clamp(2.5rem, 8vw, 5.5rem); font-weight: 800; letter-spacing: -2px; line-height: 1.1;
            background: linear-gradient(to bottom, #ffffff 50%, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            position: relative; z-index: 2; margin-bottom: 20px;
        }
        .hero_p {
            font-size: clamp(1rem, 2vw, 1.3rem); color: #94a3b8; max-width: 800px; margin: 0 auto; line-height: 1.6;
            position: relative; z-index: 2; padding: 0 20px;
        }

        /* --- COLORFUL MARQUEE --- */
        .marquee_wrap { background: #0f172a; padding: 25px 0; overflow: hidden; display: flex; border-bottom: 1px solid #1e293b; }
        .marquee_inner { display: flex; animation: scrollMarquee 35s linear infinite; gap: clamp(50px, 8vw, 100px); white-space: nowrap; }
        .marquee_item { font-weight: 800; font-size: clamp(0.9rem, 1.5vw, 1.1rem); letter-spacing: 2px; display: flex; align-items: center; gap: 12px; }
        .marquee_dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        @keyframes scrollMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* --- SECTION HEADINGS --- */
        .sec_title { 
          font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 800; text-align: center; margin-bottom: clamp(40px, 8vh, 60px); 
          background: linear-gradient(90deg, #f43f5e, #3b82f6, #84cc16, #f43f5e);
          background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite; letter-spacing: -1px;
        }
        @keyframes shine { to { background-position: 200% center; } }

        /* --- SERVICE CARDS (GRID) --- */
        .serv_grid { 
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; 
            margin-top: 40px;
        }
        .serv_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: clamp(30px, 5vw, 45px); border-radius: 30px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative;
            box-shadow: 0 4px 15px rgba(0,0,0,0.02); display: flex; flex-direction: column;
        }
        .serv_card:hover { transform: translateY(-12px); border-color: var(--h-color); box-shadow: 0 25px 50px rgba(0,0,0,0.08); }

        .icon_box {
            width: 65px; height: 65px; border-radius: 18px; display: flex; align-items: center; justify-content: center;
            margin-bottom: 25px; background: #fff; border: 1px solid #f1f5f9; transition: 0.4s;
        }
        .icon_box svg { width: 30px; height: 30px; color: var(--h-color); transition: 0.4s; }
        .serv_card:hover .icon_box { background: var(--h-color); border-color: var(--h-color); }
        .serv_card:hover .icon_box svg { color: #fff; transform: scale(1.15); }

        .h_bar { width: 50px; height: 5px; border-radius: 10px; background: var(--h-color); margin-bottom: 20px; }

        .item_list { list-style: none; padding: 0; margin: 20px 0; flex-grow: 1; }
        .item_list li { padding: 8px 0; padding-left: 22px; position: relative; font-size: 0.95rem; color: #64748b; font-weight: 600; }
        .item_list li::before { content: "•"; position: absolute; left: 0; color: var(--h-color); font-size: 1.5rem; line-height: 0.8; }

        /* --- PROCESS ROADMAP (AUTO-ADJUSTING LINE) --- */
        .proc_wrap { max-width: 900px; margin: 60px auto; position: relative; padding-left: clamp(60px, 10vw, 100px); }
        .proc_line { 
            position: absolute; left: clamp(28px, 4.5vw, 48px); top: 0; bottom: 0; width: 6px; 
            background: #f1f5f9; border-radius: 10px; overflow: hidden;
        }
        .proc_line_fill {
            position: absolute; top: 0; left: 0; width: 100%; height: 85%;
            background: linear-gradient(to bottom, #f43f5e, #3b82f6, #84cc16, #f97316);
        }
        .proc_step { 
            background: #fff; padding: clamp(25px, 5vw, 40px); border-radius: 24px; margin-bottom: 30px; 
            border: 1px solid #f1f5f9; position: relative; transition: 0.4s;
            box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }
        .proc_step:hover { transform: translateX(15px); border-color: #3b82f6; }
        .proc_num { 
            position: absolute; left: clamp(-55px, -8vw, -85px); top: 20px; 
            width: clamp(45px, 8vw, 70px); height: clamp(45px, 8vw, 70px); 
            border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center;
            font-weight: 800; font-size: clamp(1rem, 2vw, 1.5rem); border: 5px solid #fff; z-index: 2;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* --- CTA BUTTONS --- */
        .cta_btn { 
            display: inline-block; background: #3b82f6; color: #fff; padding: 18px clamp(35px, 5vw, 55px); 
            border-radius: 100px; font-weight: 800; text-decoration: none; transition: 0.4s;
            font-size: clamp(0.9rem, 1.5vw, 1.1rem); cursor: pointer;
        }
        .cta_btn:hover { transform: scale(1.05); box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4); }

        @media (max-width: 600px) {
            .proc_wrap { padding-left: 55px; }
            .proc_line { left: 20px; }
            .proc_num { left: -45px; width: 40px; height: 40px; font-size: 0.9rem; border-width: 3px; }
            .serv_grid { grid-template-columns: 1fr; }
        }
      ` }} />

      {/* HERO SECTION */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="hero_h1">Architecting The Next Standard</h1>
          <p className="hero_p">
            We build industrial-grade software ecosystems that blend rigorous backend engineering with intuitive, high-velocity user experiences.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta_btn">Analyze My Project</Link>
            <a href="https://wa.me/94740309534" className="cta_btn" style={{ background: 'transparent', border: '2px solid #fff' }} target="_blank" rel="noreferrer">WhatsApp Engineer</a>
          </div>
        </div>
      </section>

      {/* COLORFUL MARQUEE */}
      <div className="marquee_wrap">
        <div className="marquee_inner">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {techStack.map((tech, idx) => (
                  <span key={idx} className="marquee_item" style={{ color: tech.c }}>
                    <div className="marquee_dot" style={{ backgroundColor: tech.c }}></div>
                    {tech.name}
                  </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0' }}>
        <div className="container">
          <h2 className="sec_title">Specialized Engineering</h2>
          <div className="serv_grid">
            {sections.map((section, index) => (
              <div className="serv_card" key={index} style={{ '--h-color': section.color }}>
                <div className="icon_box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {section.icon}
                    </svg>
                </div>
                <div className="h_bar"></div>
                <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '12px' }}>{section.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{section.desc}</p>
                <ul className="item_list">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link href="/contact" style={{ 
                    marginTop: '20px', display: 'inline-block', fontWeight: 800, color: section.color, textDecoration: 'none', letterSpacing: '1px', fontSize: '0.8rem' 
                }}>GET TECH SPECS →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 className="sec_title">The Engineering Roadmap</h2>
          <div className="proc_wrap">
            <div className="proc_line"><div className="proc_line_fill"></div></div>
            {processSteps.map((step, i) => (
              <div key={i} className="proc_step">
                <div className="proc_num" style={{ background: step.c }}>{step.number}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '1rem', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 'clamp(80px, 12vh, 150px) 20px', textAlign: 'center' }}>
        <div className="container">
            <div style={{ background: '#020617', padding: 'clamp(60px, 10vw, 100px) 20px', borderRadius: '50px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.2)', filter: 'blur(80px)', borderRadius: '50%' }}></div>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1.5px' }}>Ready to Build Your MVP?</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 40px' }}>
                    Connect with our technical architects to turn your product vision into a scalable reality.
                </p>
                <Link href="/contact" className="cta_btn">Book Your Consultation</Link>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;