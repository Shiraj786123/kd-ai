'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const brandColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
  const lastUpdated = "December 20, 2025";

  const sections = [
    {
      number: "01",
      title: "Data Collection",
      icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>,
      description: "We collect information required to provide elite digital services, including personal identifiers (name, email) and technical usage data.",
      color: brandColors[0]
    },
    {
      number: "02",
      title: "Usage Protocols",
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
      text: "Data is used to architect your solutions, analyze traffic trends, and improve system performance. We never sell your personal data to third parties.",
      color: brandColors[1]
    },
    {
      number: "03",
      title: "Tracking & Cookies",
      // FIXED: Wrapped multiple SVG elements in a Fragment
      icon: (
        <>
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"/>
          <circle cx="12" cy="12" r="1"/>
          <circle cx="16" cy="16" r="1"/>
          <circle cx="8" cy="16" r="1"/>
        </>
      ),
      description: "We utilize cookies to understand site behavior and optimize user experience. You maintain full control via your browser security settings.",
      color: brandColors[2]
    },
    {
      number: "04",
      title: "Data Security",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4m0 4h.01" />,
      important: "We implement industrial-grade encryption. However, while we use elite security measures, no digital transmission is 100% immune to risk.",
      color: brandColors[3]
    },
    {
      number: "05",
      title: "User Rights",
      icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17 11l2 2 4-4" />,
      text: "You hold the right to access, rectify, or delete your personal data. Contact our privacy officer to exercise these rights at any time.",
      color: brandColors[4]
    }
  ];

  return (
    <div className="pp_root">
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .pp_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; }
        .container { width: 92%; max-width: 1100px; margin: 0 auto; position: relative; }

        /* --- HERO --- */
        .hero_sec { 
            background: #020617; padding: clamp(140px, 20vh, 200px) 0 clamp(80px, 10vh, 120px); 
            text-align: center; color: #fff; position: relative; overflow: hidden;
        }
        .hero_sec::before {
            content: ""; position: absolute; width: 150%; height: 150%; top: -25%; left: -25%;
            background: radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 45%),
                        radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.12) 0%, transparent 40%);
            animation: pulseHero 15s ease-in-out infinite;
        }
        @keyframes pulseHero { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1) rotate(-2deg); } }

        .hero_h1 { 
            font-size: clamp(2.5rem, 8vw, 5.5rem); font-weight: 800; letter-spacing: -3px; line-height: 1.1;
            background: linear-gradient(to bottom, #ffffff 50%, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            position: relative; zIndex: 2; margin-bottom: 20px;
        }
        .hero_p {
            font-size: clamp(1rem, 2vw, 1.25rem); color: #94a3b8; max-width: 800px; margin: 0 auto; line-height: 1.7;
            position: relative; zIndex: 2; padding: 0 20px;
        }

        /* --- SHINE TITLES --- */
        .sec_title { 
          font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 800; text-align: center; margin-bottom: clamp(40px, 8vh, 60px); 
          background: linear-gradient(90deg, #10b981, #2563eb, #8b5cf6, #10b981);
          background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite; letter-spacing: -1.5px;
        }
        @keyframes shine { to { background-position: 200% center; } }

        /* --- CONTENT ROADMAP --- */
        .pp_wrapper { padding: clamp(40px, 8vh, 80px) 0; position: relative; }
        .pp_line { 
            position: absolute; left: clamp(25px, 5vw, 48px); top: 0; bottom: 0; width: 2px; 
            background: #f1f5f9; zIndex: 0;
        }

        .pp_section { 
            position: relative; padding-left: clamp(60px, 10vw, 100px); margin-bottom: clamp(40px, 8vh, 80px); 
            zIndex: 1; transition: 0.4s;
        }
        .pp_section:hover { transform: translateX(12px); }

        .pp_num_box {
            position: absolute; left: 0; top: 0; 
            width: clamp(45px, 8vw, 65px); height: clamp(45px, 8vw, 65px);
            background: #fff; border: 2px solid var(--s-color); border-radius: 18px;
            display: flex; align-items: center; justify-content: center;
            font-weight: 800; color: var(--s-color); font-size: clamp(1rem, 2vw, 1.4rem);
            box-shadow: 0 10px 25px rgba(0,0,0,0.06); zIndex: 2;
        }

        .pp_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: clamp(25px, 5vw, 45px); border-radius: 35px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.02); border-left: clamp(6px, 1vw, 12px) solid var(--s-color);
            transition: 0.4s;
        }

        .title_area { display: flex; align-items: center; gap: clamp(15px, 3vw, 25px); margin-bottom: 25px; }
        .icon_wrap {
            width: clamp(50px, 6vw, 65px); height: clamp(50px, 6vw, 65px); border-radius: 16px; background: #f8fafc;
            display: flex; align-items: center; justify-content: center;
            color: var(--s-color); transition: 0.4s; border: 1px solid #f1f5f9; flex-shrink: 0;
        }
        .pp_section:hover .icon_wrap { background: var(--s-color); color: #fff; transform: rotate(8deg); }
        .icon_wrap svg { width: 50%; height: 50%; }

        .pp_h2 { font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 800; color: #0f172a; margin: 0; }
        .pp_text { font-size: clamp(0.95rem, 1.5vw, 1.1rem); line-height: 1.8; color: #475569; }

        /* --- ALERT BOX --- */
        .alert_box { 
            background: #fdf2f8; border: 1px solid #fbcfe8; padding: clamp(15px, 3vw, 25px); border-radius: 20px;
            display: flex; gap: 15px; margin-top: 25px; align-items: flex-start;
        }
        .alert_box svg { flex-shrink: 0; color: #db2777; width: 24px; height: 24px; margin-top: 2px; }
        .alert_text { font-weight: 700; font-size: clamp(0.85rem, 1.2vw, 0.95rem); color: #9d174d; margin: 0; line-height: 1.6; }

        /* --- CONTACT --- */
        .contact_grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px; }
        .contact_card { 
            background: #f8fafc; padding: 25px; border-radius: 24px; border: 1px solid #e2e8f0;
            display: flex; align-items: center; gap: 15px; transition: 0.3s; text-decoration: none;
        }
        .contact_card:hover { background: #fff; border-color: #10b981; transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.06); }

        @media (max-width: 600px) {
            .pp_line { left: 20px; }
            .pp_section { padding-left: 55px; }
            .pp_num_box { width: 40px; height: 40px; font-size: 0.9rem; }
        }
      ` }} />

      {/* HERO */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="hero_h1">Privacy Architecture</h1>
          <p className="hero_p">
            Last updated: {lastUpdated}. Your data privacy is architected into our development process. Explore how ZonzocTech secures your digital intelligence.
          </p>
        </div>
      </section>

      {/* CONTENT ROADMAP */}
      <section className="pp_wrapper">
        <div className="container">
          <div className="pp_line"></div>
          
          {sections.map((section, index) => (
            <div key={index} className="pp_section" style={{ '--s-color': section.color }}>
              <div className="pp_num_box">{section.number}</div>
              <div className="pp_card">
                <div className="title_area">
                    <div className="icon_wrap">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            {section.icon}
                        </svg>
                    </div>
                    <h2 className="pp_h2">{section.title}</h2>
                </div>
                
                {section.text && <p className="pp_text">{section.text}</p>}
                {section.description && <p className="pp_text" style={{ fontWeight: 600 }}>{section.description}</p>}
                
                {section.items && (
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                    {section.items.map((li, i) => (
                      <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid #f9fafb', color: '#64748b', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <span style={{ color: section.color, fontSize: '1.4rem', lineHeight: '0.8' }}>•</span> 
                        <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.important && (
                  <div className="alert_box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <p className="alert_text">{section.important}</p>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* CONTACT SECTION CARD */}
          <div className="pp_section" style={{ '--s-color': '#10b981' }}>
             <div className="pp_num_box">06</div>
             <div className="pp_card">
                <div className="title_area">
                    <div className="icon_wrap">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    </div>
                    <h2 className="pp_h2">Data Inquiries</h2>
                </div>
                <p className="pp_text">Have questions regarding your data or our processing methods? Our technical support is available to assist.</p>
                <div className="contact_grid">
                    <a href="mailto:info@zonzoctech.com" className="contact_card">
                        <span style={{ fontSize: '1.8rem' }}>📧</span>
                        <div>
                            <strong style={{ display: 'block', fontSize: '0.7rem', color: '#10b981', letterSpacing: '1px' }}>DATA OFFICER</strong>
                            <span style={{ fontWeight: 800, color: '#0f172a' }}>info@zonzoctech.com</span>
                        </div>
                    </a>
                    <a href="https://wa.me/94740309534" className="contact_card" target="_blank" rel="noreferrer">
                        <span style={{ fontSize: '1.8rem' }}>💬</span>
                        <div>
                            <strong style={{ display: 'block', fontSize: '0.7rem', color: '#10b981', letterSpacing: '1px' }}>WHATSAPP</strong>
                            <span style={{ fontWeight: 800, color: '#0f172a' }}>+94 74 030 9534</span>
                        </div>
                    </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL SUMMARY BOX */}
      <section className="container" style={{ paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
        <div style={{ background: '#020617', padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)', borderRadius: '60px', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1.5px' }}>Security by Default</h2>
          <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', maxWidth: '700px', margin: '0 auto 45px', lineHeight: 1.7 }}>
            Our commitment to transparency is as strong as our commitment to code quality. We protect your privacy so you can focus on building the future.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#10b981', color: '#fff', padding: '20px clamp(40px, 5vw, 65px)', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', transition: '0.4s', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)' }}>
            Discuss Data Security
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;