'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const AISoftwareServices = () => {
  const brandColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#f43f5e'];

  const services = [
    { 
        title: "Custom AI Architectures", 
        icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>, 
        desc: "We build the neural backbone of your business, ensuring every modular component is designed for industrial-grade data processing and limitless scaling.",
        color: brandColors[0]
    },
    { 
        title: "Adaptive Process Automation", 
        icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, 
        desc: "Move beyond rigid rules. Our AI bots learn from your specific workflows, automating repetitive human tasks with 99% accuracy and continuous improvement.",
        color: brandColors[1]
    },
    { 
        title: "LLM & GPT Ecosystems", 
        icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, 
        desc: "Harness the power of Private LLMs. We fine-tune models on your proprietary data to create secure, domain-specific chatbots and content generators.",
        color: brandColors[2]
    },
    { 
        title: "Predictive Analytics Forge", 
        icon: <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6"/>, 
        desc: "Turn historical data into a crystal ball. Our predictive engines forecast market shifts and user behavior, giving you a distinct competitive advantage.",
        color: brandColors[3]
    }
  ];

  return (
    <div className="aiss_root">
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .aiss_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; }
        .container { width: 92%; max-width: 1300px; margin: 0 auto; position: relative; }

        /* --- HERO --- */
        .hero_sec { 
            background: #020617; padding: clamp(150px, 20vh, 220px) 0 clamp(80px, 10vh, 120px); 
            text-align: center; color: #fff; position: relative; overflow: hidden;
        }
        .hero_sec::before {
            content: ""; position: absolute; width: 150%; height: 150%; top: -25%; left: -25%;
            background: radial-gradient(circle at center, rgba(139, 92, 246, 0.18) 0%, transparent 50%);
            animation: rotateGlow 20s linear infinite;
        }
        @keyframes rotateGlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .hero_h1 { 
            font-size: clamp(2.5rem, 8vw, 5.5rem); font-weight: 800; letter-spacing: -3px; line-height: 1.1;
            background: linear-gradient(to bottom, #ffffff 50%, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            position: relative; z-index: 2; margin-bottom: 25px;
        }

        /* --- COLORFUL MARQUEE --- */
        .marquee_wrap { background: #0f172a; padding: 25px 0; overflow: hidden; display: flex; border-bottom: 1px solid #1e293b; }
        .marquee_inner { display: flex; animation: scrollMarquee 35s linear infinite; gap: 80px; white-space: nowrap; }
        .marquee_item { font-weight: 800; font-size: 1.1rem; letter-spacing: 2px; display: flex; align-items: center; gap: 12px; }
        @keyframes scrollMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* --- TITLES --- */
        .sec_title { 
          font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 800; text-align: center; margin-bottom: 60px; 
          background: linear-gradient(90deg, #8b5cf6, #ec4899, #0ea5e9, #8b5cf6);
          background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite; letter-spacing: -1.5px;
        }
        @keyframes shine { to { background-position: 200% center; } }

        /* --- ROW-WISE SERVICES --- */
        .service_row { 
            display: flex; align-items: center; gap: clamp(30px, 8vw, 100px); margin-bottom: 100px;
        }
        .service_row:nth-child(even) { flex-direction: row-reverse; }
        
        .icon_glow_box {
            width: clamp(200px, 25vw, 350px); height: clamp(200px, 25vw, 350px);
            background: #fff; border-radius: 40px; border: 1px solid #f1f5f9;
            display: flex; align-items: center; justify-content: center;
            position: relative; transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .icon_glow_box svg { width: 40%; height: 40%; color: var(--row-color); }
        .service_row:hover .icon_glow_box { transform: scale(1.05); border-color: var(--row-color); background: var(--row-bg); }

        /* --- TARGET GROUP RECTANGLES (COLORFUL) --- */
        .target_grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 50px; }
        .target_card { 
            padding: 50px 30px; border-radius: 35px; text-align: center; 
            transition: 0.4s; color: #fff; position: relative; overflow: hidden;
            border: 2px solid transparent;
        }
        .target_card:hover { transform: translateY(-15px); box-shadow: 0 30px 60px rgba(0,0,0,0.2); border-color: #fff; }
        .target_card h4 { font-weight: 800; font-size: 1.5rem; margin: 0; }

        /* --- PROCESS ROADMAP (COLORFUL BARS) --- */
        .proc_wrap { max-width: 900px; margin: 60px auto; position: relative; padding-left: clamp(60px, 10vw, 100px); }
        .proc_line { position: absolute; left: clamp(28px, 4.5vw, 48px); top: 0; bottom: 0; width: 6px; background: #f1f5f9; border-radius: 10px; }
        .proc_line_fill { position: absolute; top: 0; left: 0; width: 100%; height: 85%; background: linear-gradient(to bottom, #8b5cf6, #ec4899, #0ea5e9); }
        
        .proc_step { 
            padding: clamp(30px, 5vw, 45px); border-radius: 30px; margin-bottom: 30px; 
            position: relative; transition: 0.4s; color: #fff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .proc_step:hover { transform: translateX(20px) scale(1.02); filter: brightness(1.1); }
        .proc_num { 
            position: absolute; left: clamp(-55px, -8vw, -85px); top: 30px; 
            width: clamp(50px, 8vw, 75px); height: clamp(50px, 8vw, 75px); 
            border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center;
            font-weight: 800; font-size: 1.5rem; border: 6px solid #fff; z-index: 2;
        }

        .cta_btn { 
            display: inline-block; background: #8b5cf6; color: #fff; padding: 18px clamp(35px, 5vw, 55px); 
            border-radius: 100px; font-weight: 800; text-decoration: none; transition: 0.4s; cursor: pointer;
        }

        @media (max-width: 850px) {
            .service_row, .service_row:nth-child(even) { flex-direction: column; text-align: center; }
            .proc_wrap { padding-left: 55px; }
            .proc_line { left: 20px; }
            .proc_num { left: -45px; width: 40px; height: 40px; font-size: 0.9rem; }
        }
      ` }} />

      {/* HERO */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="hero_h1">Industrial Intelligence</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
            We engineer high-velocity software ecosystems. Blending industrial-grade backends with intelligent logic to fuel your next stage of growth.
          </p>
          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
             <Link href="/contact" className="cta_btn">Consult an Engineer</Link>
          </div>
        </div>
      </section>

      {/* COLORFUL MARQUEE */}
      <div className="marquee_wrap">
        <div className="marquee_inner">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {['GPT-4', 'PYTORCH', 'PYTHON', 'FAST API', 'LANGCHAIN', 'VECTOR DB'].map((tech, idx) => (
                <span key={idx} className="marquee_item" style={{ color: brandColors[idx % 5] }}>● {tech}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ROW-WISE SERVICES */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="sec_title">Our AI Engine Capabilities</h2>
          {services.map((service, i) => (
            <div key={i} className="service_row" style={{ '--row-color': service.color, '--row-bg': `${service.color}10` }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px' }}>{service.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.8' }}>{service.desc}</p>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div className="icon_glow_box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            {service.icon}
                        </svg>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* TARGET GROUPS (COLORFUL RECTANGLES) */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 className="sec_title">Built For Industrial Leaders</h2>
          <div className="target_grid">
            {[
                { t: "Process Automation", c: brandColors[0], i: "🤖" },
                { t: "Data Enterprises", c: brandColors[1], i: "🏢" },
                { t: "AI Tech Startups", c: brandColors[2], i: "🚀" },
                { t: "Global Logistics", c: brandColors[3], i: "🌐" }
            ].map((box, i) => (
                <div key={i} className="target_card" style={{ backgroundColor: box.c }}>
                    <span style={{ fontSize: '3.5rem', marginBottom: '20px', display: 'block' }}>{box.i}</span>
                    <h4>{box.t}</h4>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP PROCESS (COLORFUL BARS) */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="sec_title">The Engineering Roadmap</h2>
          <div className="proc_wrap">
            <div className="proc_line"><div className="proc_line_fill"></div></div>
            {[
                { n: "01", t: "Discovery & Data Audit", d: "Deep dive into your current silos and bottlenecks.", c: brandColors[0] },
                { n: "02", t: "Neural Architecture", d: "Designing the custom LLM and API framework.", c: brandColors[1] },
                { n: "03", t: "Agile Development", d: "Parallel builds with rigorous engineering sprints.", c: brandColors[4] },
                { n: "04", t: "Stress Testing", d: "Ensuring 99.9% reliability and accuracy.", c: brandColors[3] }
            ].map((step, i) => (
              <div key={i} className="proc_step" style={{ backgroundColor: step.c }}>
                <div className="proc_num" style={{ backgroundColor: step.c }}>{step.n}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.6rem', marginBottom: '10px' }}>{step.t}</h3>
                <p style={{ margin: 0, opacity: 0.9, fontSize: '1.05rem' }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container">
          <div style={{ background: '#020617', padding: '100px 20px', borderRadius: '60px', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden', marginBottom: '100px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #0ea5e9)' }}></div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '25px' }}>Ready to Scale?</h2>
              <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>Join the enterprises leveraging automated intelligence to win.</p>
              <Link href="/contact" className="cta_btn">Claim Your Tech Consult</Link>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISoftwareServices;