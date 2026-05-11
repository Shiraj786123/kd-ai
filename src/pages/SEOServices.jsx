'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SEOServices = () => {
  const brandColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

  const builtFor = [
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>, 
      text: "Search Engines", 
      color: brandColors[0] 
    },
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, 
      text: "Real Users", 
      color: brandColors[1] 
    },
    { 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>, 
      text: "Business Outcomes", 
      color: brandColors[2] 
    }
  ];

  const problems = [
    { title: "Poor Rankings", icon: "📉", color: brandColors[0] },
    { title: "Low Traffic", icon: "🚫", color: brandColors[1] },
    { title: "Technical Issues", icon: "⚠️", color: brandColors[2] },
    { title: "Weak Content", icon: "📝", color: brandColors[3] },
    { title: "Low Conversion", icon: "💔", color: brandColors[4] },
    { title: "SEO Penalties", icon: "🚨", color: brandColors[0] }
  ];

  const processSteps = [
    { number: "01", title: "Technical Audit", desc: "Deep dive into your site architecture.", c: brandColors[0] },
    { number: "02", title: "Intent Mapping", desc: "Finding what your customers actually type.", c: brandColors[1] },
    { number: "03", title: "Content Forge", desc: "Optimizing pages for authority and speed.", c: brandColors[2] },
    { number: "04", title: "Authority Build", desc: "Strengthening your digital footprint.", c: brandColors[3] },
    { number: "05", title: "Performance AI", desc: "Continuous data-driven refinement.", c: brandColors[4] }
  ];

  return (
    <div className="seos_root">
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .seos_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; position: relative; }

        /* --- HERO: ULTRA PREMIUM --- */
        .hero_sec { 
            background: #020617; 
            padding: 180px 0 120px; 
            text-align: center; 
            color: #fff; 
            position: relative;
            overflow: hidden;
        }
        .hero_sec::after {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 80%);
            pointer-events: none;
        }

        .hero_h1 { 
            font-size: clamp(3rem, 8vw, 5.5rem); 
            font-weight: 800; 
            margin-bottom: 25px; 
            letterSpacing: -2px;
            background: linear-gradient(to bottom, #ffffff 50%, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- TITLES: SHINE ANIMATION --- */
        .sec_title { 
          font-size: clamp(2.2rem, 5vw, 3.2rem); 
          font-weight: 800; 
          text-align: center; 
          margin-bottom: 40px; 
          letterSpacing: -1.5px;
          background: linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite;
        }
        @keyframes shine { to { background-position: 200% center; } }

        /* --- BUILT CARDS: ICON HOVER --- */
        .built_grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-top: 50px; }
        .built_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: 40px; border-radius: 24px;
            text-align: center; transition: all 0.4s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }
        .built_card:hover { 
            transform: translateY(-12px); 
            border-color: #0ea5e9;
            box-shadow: 0 20px 40px rgba(14, 165, 233, 0.1);
        }
        .icon_circle {
            width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
            margin: 0 auto 20px; transition: 0.4s;
        }
        .built_card:hover .icon_circle { transform: rotateY(180deg); }

        /* --- PROBLEMS: GLOW HOVER --- */
        .prob_grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 50px; }
        .prob_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: 30px; border-radius: 20px;
            display: flex; align-items: center; gap: 20px; transition: 0.4s;
        }
        .prob_card:hover { 
            transform: translateX(10px); 
            background: #f8fafc;
            box-shadow: -10px 0 0 var(--hover-color);
        }

        /* --- PROCESS: CONNECTING BAR --- */
        .proc_wrap { max-width: 850px; margin: 80px auto; position: relative; padding-left: 90px; }
        .proc_line { 
            position: absolute; left: 40px; top: 0; bottom: 0; width: 6px; 
            background: #f1f5f9; border-radius: 10px;
        }
        .proc_step { 
            background: #fff; padding: 40px; border-radius: 25px; margin-bottom: 40px; 
            border: 1px solid #f1f5f9; position: relative; transition: 0.4s;
        }
        .proc_step:hover { 
            transform: scale(1.02); 
            border-color: #0ea5e9;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .proc_num { 
            position: absolute; left: -95px; top: 30px; width: 75px; height: 75px; 
            border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center;
            font-weight: 800; font-size: 1.5rem; border: 8px solid #fff; z-index: 2;
            transition: 0.4s;
        }
        .proc_step:hover .proc_num { transform: rotate(360deg); }

        /* --- CTA BUTTON --- */
        .cta_btn { 
            display: inline-block; background: #0ea5e9; color: #fff; padding: 18px 50px; 
            border-radius: 100px; font-weight: 800; text-decoration: none; transition: 0.3s;
            box-shadow: 0 10px 20px rgba(14, 165, 233, 0.2);
        }
        .cta_btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(14, 165, 233, 0.4); }

        @media (max-width: 992px) {
            .built_grid { grid-template-columns: 1fr; }
            .proc_wrap { padding-left: 60px; }
            .proc_line { left: 20px; }
            .proc_num { left: -55px; width: 50px; height: 50px; font-size: 1.1rem; border-width: 4px; }
        }
      ` }} />

      {/* Hero Section */}
      <section className="hero_sec">
        <div className="container">
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 30px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '1.2rem' }}>💎</span>
            <span style={{ fontWeight: 700, letterSpacing: '1px', color: '#0ea5e9', fontSize: '0.9rem' }}>TOP-TIER SEO STRATEGY</span>
          </div>
          <h1 className="hero_h1">Dominate The Search Rankings</h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            We engineer high-performance SEO architectures that don't just chase algorithms—they build authority, traffic, and long-term revenue.
          </p>
          <div style={{ marginTop: '45px' }}>
            <a href="#contact" className="cta_btn">Analyze My Website Now</a>
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="sec_title">Engineered For Success</h2>
          <div className="built_grid">
            {builtFor.map((item, i) => (
              <div key={i} className="built_card">
                <div className="icon_circle" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h4 style={{ fontWeight: 800, fontSize: '1.3rem' }}>{item.text}</h4>
                <p style={{ color: '#64748b', marginTop: '10px', fontSize: '0.95rem' }}>Precision-optimized strategies to ensure maximum visibility.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems List with Left Glow */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 className="sec_title">Challenges We Fix</h2>
          <div className="prob_grid">
            {problems.map((prob, i) => (
              <div key={i} className="prob_card" style={{ '--hover-color': prob.color }}>
                <span style={{ fontSize: '2.5rem' }}>{prob.icon}</span>
                <h4 style={{ fontWeight: 700, margin: 0 }}>{prob.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
            <div style={{ background: '#0f172a', borderRadius: '40px', padding: '80px 40px', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899)' }}></div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>SEO vs AI Optimization</h2>
                <p style={{ opacity: 0.7, maxWidth: '700px', margin: '0 auto 50px' }}>While traditional SEO focuses on Google ranks, our AI Search Optimization ensures you are the preferred answer in AI Engines.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h4 style={{ color: '#0ea5e9', fontWeight: 800, marginBottom: '20px' }}>Traditional SEO</h4>
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', fontSize: '0.95rem', opacity: 0.8 }}>
                            <li style={{ marginBottom: '10px' }}>✅ Keyword Density & Backlinks</li>
                            <li style={{ marginBottom: '10px' }}>✅ Meta Tag Optimization</li>
                            <li style={{ marginBottom: '10px' }}>✅ SERP Position Tracking</li>
                        </ul>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '25px', border: '2px solid #8b5cf6' }}>
                        <h4 style={{ color: '#8b5cf6', fontWeight: 800, marginBottom: '20px' }}>AI-Driven SEO</h4>
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', fontSize: '0.95rem', opacity: 0.8 }}>
                            <li style={{ marginBottom: '10px' }}>🚀 Entity & Semantic Modeling</li>
                            <li style={{ marginBottom: '10px' }}>🚀 Search Generative Experience</li>
                            <li style={{ marginBottom: '10px' }}>🚀 Intent-based Data Structuring</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section style={{ padding: '120px 0', background: '#f0f9ff' }}>
        <div className="container">
          <h2 className="sec_title">The Optimization Roadmap</h2>
          <div className="proc_wrap">
            <div className="proc_line"></div>
            {processSteps.map((step, i) => (
              <div key={i} className="proc_step">
                <div className="proc_num" style={{ background: step.c }}>{step.number}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ margin: 0, color: '#64748b', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container">
        <div style={{ background: '#0f172a', padding: '100px 40px', borderRadius: '40px', textAlign: 'center', color: '#fff', margin: '100px 0' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>Ready To Claim The First Page?</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Schedule a free audit today and see the hidden technical barriers holding your website back.
          </p>
          <a href="#contact" className="cta_btn" style={{ fontSize: '1.1rem' }}>Book My Free Audit</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;