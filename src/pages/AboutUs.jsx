'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const brandColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

  return (
    <div className="abt_root">
      <Navbar />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --bg-dark: #020617;
          --card-bg: rgba(255, 255, 255, 0.8);
          --accent-blue: #0ea5e9;
        }

        * { box-sizing: border-box; }
        .abt_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; line-height: 1.6; }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; position: relative; }

        /* --- HERO SECTION: PREMIUM MESH --- */
        .hero_sec { 
            background: var(--bg-dark); 
            padding: 180px 0 140px; 
            text-align: center; 
            color: #fff; 
            position: relative;
            overflow: hidden;
        }
        .hero_sec::before {
            content: "";
            position: absolute;
            top: -50%; left: -50%; width: 200%; height: 200%;
            background: radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 30%);
            animation: rotateMesh 20s linear infinite;
        }

        @keyframes rotateMesh { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .hero_h1 { 
            font-size: clamp(3.5rem, 9vw, 6rem); 
            font-weight: 800; 
            margin-bottom: 25px; 
            letter-spacing: -3px;
            background: linear-gradient(to bottom, #ffffff 30%, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
        }

        .hero_p { 
            font-size: clamp(1.1rem, 2vw, 1.4rem); 
            max-width: 800px; 
            margin: 0 auto; 
            color: #94a3b8;
            font-weight: 500;
            position: relative;
        }

        /* --- TECH-FLOW MARQUEE --- */
        .scroller { background: #f8fafc; padding: 60px 0; border-bottom: 1px solid #e2e8f0; }
        .scroller_inner { display: flex; animation: scroll 35s linear infinite; width: max-content; align-items: center; }
        
        .scroll_rect {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 16px 28px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            font-weight: 700;
            font-size: 15px;
            white-space: nowrap;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            position: relative;
        }
        
        .connector_line {
            width: 60px;
            height: 2px;
            background: repeating-linear-gradient(90deg, #cbd5e1, #cbd5e1 4px, transparent 4px, transparent 8px);
            opacity: 0.6;
        }

        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* --- MOVING SECTION TITLES --- */
        .sec_title { 
          font-size: clamp(2.5rem, 5vw, 3.5rem); 
          font-weight: 800; 
          text-align: center; 
          margin-bottom: 40px; 
          letter-spacing: -1.5px;
          background: linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite;
        }

        @keyframes shine { to { background-position: 200% center; } }

        /* --- WHO WE ARE (GLASS CARDS) --- */
        .who_grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-top: 100px; position: relative; }
        .who_line_bg {
            position: absolute; top: 75px; left: 10%; right: 10%; height: 2px;
            background: #e2e8f0; z-index: 0;
        }
        .who_circle_container { display: flex; flex-direction: column; align-items: center; z-index: 1; }
        .who_circle { 
          width: 140px; height: 140px; border-radius: 50%; 
          display: flex; align-items: center; justify-content: center; 
          font-size: 3rem; margin-bottom: 25px; 
          background: #fff; border: 4px solid #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transition: 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .who_circle_container:hover .who_circle { transform: translateY(-15px) scale(1.1); }
        .who_circle_container h4 { font-weight: 700; font-size: 1.1rem; color: #1e293b; text-align: center; }

        /* --- SERVICES (MODERN GRID) --- */
        .serv_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: 40px; border-radius: 24px;
            transition: 0.4s; position: relative;
        }
        .serv_card:hover { 
            border-color: var(--accent-blue); 
            box-shadow: 0 30px 60px rgba(14, 165, 233, 0.1);
            transform: translateY(-10px);
        }
        .num_badge {
            width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center;
            justify-content: center; color: #fff; font-weight: 800; margin-bottom: 20px;
        }

        /* --- APPROACH (PREMIUM TIMELINE) --- */
        .app_wrap { max-width: 900px; margin: 100px auto; position: relative; padding-left: 100px; }
        .app_line { 
          position: absolute; left: 40px; top: 0; bottom: 0; width: 4px; 
          background: #f1f5f9; border-radius: 10px;
        }
        .app_line_inner {
          position: absolute; left: 40px; top: 0; width: 4px; height: 60%;
          background: linear-gradient(to bottom, #0ea5e9, #8b5cf6); border-radius: 10px;
        }
        .app_step { 
            background: #fff; padding: 40px; border-radius: 30px; margin-bottom: 40px; 
            border: 1px solid #f1f5f9; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            transition: 0.4s;
        }
        .app_step:hover { transform: translateX(20px); border-color: #e2e8f0; }
        .app_num { 
          position: absolute; left: -100px; top: 30px; width: 80px; height: 80px; 
          border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1.8rem; border: 8px solid #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* --- WHY BOXES --- */
        .why_card { 
          padding: 30px 40px; border-radius: 20px; background: #fff; 
          margin-bottom: 25px; border-left: 8px solid; font-weight: 700; 
          display: flex; justify-content: space-between; align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03); transition: 0.3s;
        }
        .why_card:hover { transform: scale(1.02); background: #f8fafc; }

        @media (max-width: 992px) {
          .who_grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .who_line_bg { display: none; }
          .app_wrap { padding-left: 60px; }
          .app_num { left: -55px; width: 50px; height: 50px; font-size: 1.2rem; border-width: 4px; }
          .app_line, .app_line_inner { left: 18px; }
        }
      ` }} />

      {/* --- HERO --- */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="hero_h1">About ZonzocTech</h1>
          <p className="hero_p">We engineer high-performance AI solutions and technical SEO architectures that empower brands to dominate the digital frontier.</p>
        </div>
      </section>

      {/* --- TECH-FLOW MARQUEE --- */}
      <div className="scroller">
        <div className="scroller_inner">
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="scroll_rect" style={{color: brandColors[0], borderColor: brandColors[0]}}><span>⚡</span> AI ENGINEERING</div>
              <div className="connector_line"></div>
              <div className="scroll_rect" style={{color: brandColors[1], borderColor: brandColors[1]}}><span>🏗️</span> SEO ARCHITECTURE</div>
              <div className="connector_line"></div>
              <div className="scroll_rect" style={{color: brandColors[2], borderColor: brandColors[2]}}><span>💎</span> FULL STACK WEB</div>
              <div className="connector_line"></div>
              <div className="scroll_rect" style={{color: brandColors[3], borderColor: brandColors[3]}}><span>🌐</span> GEO OPTIMIZATION</div>
              <div className="connector_line"></div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- WHO WE ARE --- */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <h2 className="sec_title">Who We Are</h2>
          <div className="who_grid">
            <div className="who_line_bg"></div>
            {[
              { icon: '🎯', label: 'Maximum Visibility', color: brandColors[0] },
              { icon: '🤖', label: 'AI Powered Logic', color: brandColors[1] },
              { icon: '⚡', label: 'Ultra Performance', color: brandColors[2] },
              { icon: '📈', label: 'Scalable Growth', color: brandColors[3] }
            ].map((item, i) => (
              <div key={i} className="who_circle_container">
                <div className="who_circle" style={{ borderBottom: `6px solid ${item.color}` }}>
                  {item.icon}
                </div>
                <h4>{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section style={{ padding: '100px 0', background: '#fcfdfe' }}>
        <div className="container">
          <h2 className="sec_title">Our Core Specializations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '60px' }}>
            {[
              "AI App Development", "Custom SaaS Platforms", "Enterprise Ecosystems",
              "Technical SEO Audit", "AI Search (GEO) Strategy", "Growth Engineering",
              "API & Systems Integration", "Infrastructure Security", "E-commerce Optimization"
            ].map((serv, i) => (
              <div key={i} className="serv_card">
                <div className="num_badge" style={{ background: brandColors[i % 5] }}>0{i + 1}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '15px' }}>{serv}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Delivering scalable, future-proof technology tailored to your unique business goals.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <h2 className="sec_title">Our Working Process</h2>
          <div className="app_wrap">
            <div className="app_line"></div>
            <div className="app_line_inner"></div>
            {[
              { t: "Technical Audit", p: "Comprehensive analysis of your existing infrastructure and market positioning.", c: brandColors[0] },
              { t: "Strategic Blueprint", p: "Architecting the perfect AI and SEO roadmap for sustainable growth.", c: brandColors[1] },
              { t: "Precision Build", p: "Execution with clean, high-performance code and agile methodologies.", c: brandColors[2] },
              { t: "Scale & Optimize", p: "Continuous data monitoring and post-launch refinement.", c: brandColors[3] }
            ].map((step, i) => (
              <div key={i} className="app_step">
                <div className="app_num" style={{ background: step.c }}>{i + 1}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '12px' }}>{step.t}</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '1.05rem' }}>{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY --- */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 className="sec_title">Why Partner With Us?</h2>
          <div style={{ maxWidth: '800px', margin: '60px auto 0' }}>
            {[
              { t: "The intersection of elite code and marketing ROI", c: brandColors[0] },
              { t: "Built for the upcoming era of AI-Search (GEO)", c: brandColors[1] },
              { t: "Uncompromising focus on performance and speed", c: brandColors[2] },
              { t: "Transparent, long-term technical partnership", c: brandColors[3] }
            ].map((item, i) => (
              <div key={i} className="why_card" style={{ borderLeftColor: item.c }}>
                <span style={{ fontSize: '1.1rem' }}>{item.t}</span>
                <span style={{ color: item.c, fontSize: '1.2rem' }}>✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-2px' }}>Ready to Evolve?</h2>
          <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: '40px' }}>Join the ranks of businesses leveraging intelligence to win.</p>
          <a href="/contact" style={{ 
            background: '#0f172a', color: '#fff', padding: '20px 50px', 
            borderRadius: '100px', fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'inline-block'
          }}>Get Started Now</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;