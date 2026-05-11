'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const TermsConditions = () => {
  const brandColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
  const lastUpdated = "May 10, 2026";

  const sections = [
    {
      number: "01",
      title: "Definitions",
      icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V5A2.5 2.5 0 0 1 6.5 2.5H20v14.5H6.5a2.5 2.5 0 0 0-2.5 2.5z" />, 
      items: [
        '"Company," "we," "us," "our" refers to ZonzocTech',
        '"Client," "you" refers to any user, visitor, or customer',
        '"Services" refers to all technical, AI, and SEO deliverables'
      ],
      color: brandColors[0]
    },
    {
      number: "02",
      title: "Platform Use",
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />, 
      text: "You agree to use this website only for lawful purposes. Unauthorized access attempts or the introduction of malicious code is strictly prohibited.",
      color: brandColors[1]
    },
    {
      number: "03",
      title: "Engagement",
      icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87" />,
      description: "Project timelines and specific deliverables are governed by the written agreement signed during the technical onboarding phase.",
      color: brandColors[2]
    },
    {
      number: "04",
      title: "Performance",
      icon: <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />,
      important: "Results in SEO and AI search depend on third-party algorithms. While we use elite engineering, we do not guarantee fixed external rankings.",
      color: brandColors[3]
    },
    {
      number: "05",
      title: "Ownership & IP",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
      text: "ZonzocTech retains rights to proprietary code frameworks. Clients receive full ownership of final custom-built deliverables upon complete payment.",
      color: brandColors[4]
    }
  ];

  return (
    <div className="tc_root">
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .tc_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; }
        .container { width: 92%; max-width: 1200px; margin: 0 auto; position: relative; }

        /* --- HERO: FULLY RESPONSIVE --- */
        .hero_sec { 
            background: #020617; padding: clamp(140px, 15vh, 200px) 0 clamp(80px, 10vh, 120px); 
            text-align: center; color: #fff; position: relative; overflow: hidden;
        }
        .hero_sec::before {
            content: ""; position: absolute; width: 150%; height: 150%; top: -25%; left: -25%;
            background: radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 45%);
            animation: pulseHero 12s ease-in-out infinite;
        }
        @keyframes pulseHero { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1) rotate(2deg); } }

        .hero_h1 { 
            font-size: clamp(2.5rem, 8vw, 5.5rem); font-weight: 800; letter-spacing: -3px; line-height: 1.1;
            background: linear-gradient(to bottom, #ffffff 50%, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            position: relative; zIndex: 2; margin-bottom: 20px;
        }
        .hero_p {
            font-size: clamp(1rem, 2vw, 1.25rem); color: #94a3b8; max-width: 800px; margin: 0 auto; line-height: 1.7;
            position: relative; zIndex: 2; padding: 0 20px;
        }

        /* --- SECTION TITLES: SHINE --- */
        .sec_title { 
          font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 800; text-align: center; margin-bottom: clamp(40px, 8vh, 60px); 
          background: linear-gradient(90deg, #2563eb, #8b5cf6, #ec4899, #2563eb);
          background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite; letter-spacing: -1px;
        }
        @keyframes shine { to { background-position: 200% center; } }

        /* --- CONTENT WRAPPER WITH CONNECTING LINE --- */
        .tc_wrapper { padding: clamp(40px, 8vh, 80px) 0; position: relative; }
        .tc_line { 
            position: absolute; left: clamp(25px, 5vw, 48px); top: 0; bottom: 0; width: 2px; 
            background: #f1f5f9; zIndex: 0;
        }

        .tc_section { 
            position: relative; padding-left: clamp(60px, 10vw, 100px); margin-bottom: clamp(40px, 8vh, 80px); 
            zIndex: 1; transition: 0.4s;
        }
        .tc_section:hover { transform: translateX(12px); }

        .tc_num_box {
            position: absolute; left: 0; top: 0; 
            width: clamp(45px, 8vw, 65px); height: clamp(45px, 8vw, 65px);
            background: #fff; border: 2px solid var(--s-color); border-radius: 18px;
            display: flex; align-items: center; justify-content: center;
            font-weight: 800; color: var(--s-color); font-size: clamp(1rem, 2vw, 1.4rem);
            box-shadow: 0 10px 25px rgba(0,0,0,0.06); zIndex: 2;
        }

        .tc_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: clamp(25px, 5vw, 45px); border-radius: 35px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.02); border-left: clamp(6px, 1vw, 12px) solid var(--s-color);
            transition: 0.4s;
        }
        .tc_section:hover .tc_card { box-shadow: 0 25px 50px rgba(0,0,0,0.07); border-color: #eee; }

        .title_area { display: flex; align-items: center; gap: clamp(15px, 3vw, 25px); margin-bottom: 25px; }
        .icon_wrap {
            width: clamp(50px, 6vw, 65px); height: clamp(50px, 6vw, 65px); border-radius: 16px; background: #f8fafc;
            display: flex; align-items: center; justify-content: center;
            color: var(--s-color); transition: 0.4s; border: 1px solid #f1f5f9; flex-shrink: 0;
        }
        .tc_section:hover .icon_wrap { background: var(--s-color); color: #fff; transform: rotate(8deg); }
        .icon_wrap svg { width: 50%; height: 50%; }

        .tc_h2 { font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 800; color: #0f172a; margin: 0; }
        .tc_text { font-size: clamp(0.95rem, 1.5vw, 1.1rem); line-height: 1.8; color: #475569; }

        /* --- ALERT BOXES --- */
        .alert_box { 
            background: #fff1f2; border: 1px solid #fecdd3; padding: clamp(15px, 3vw, 25px); border-radius: 20px;
            display: flex; gap: 15px; margin-top: 25px; align-items: flex-start;
        }
        .alert_box svg { flex-shrink: 0; color: #e11d48; width: 24px; height: 24px; margin-top: 2px; }
        .alert_text { font-weight: 700; font-size: clamp(0.85rem, 1.2vw, 0.95rem); color: #9f1239; margin: 0; line-height: 1.6; }

        /* --- CONTACT CARDS --- */
        .contact_grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px; }
        .contact_card { 
            background: #f8fafc; padding: 25px; border-radius: 24px; border: 1px solid #e2e8f0;
            display: flex; align-items: center; gap: 15px; transition: 0.3s; text-decoration: none;
        }
        .contact_card:hover { background: #fff; border-color: #2563eb; transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.06); }

        @media (max-width: 600px) {
            .tc_line { left: 20px; }
            .tc_section { padding-left: 55px; }
            .tc_num_box { width: 40px; height: 40px; font-size: 0.9rem; }
        }
      ` }} />

      {/* HERO */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="hero_h1">Legal Transparency</h1>
          <p className="hero_p">
            Version 2.4 | Last updated: {lastUpdated}. By accessing ZonzocTech services, you agree to the following industrial standards and operational protocols.
          </p>
        </div>
      </section>

      {/* CONTENT WITH ROADMAP LINE */}
      <section className="tc_wrapper">
        <div className="container">
          <div className="tc_line"></div>
          
          {sections.map((section, index) => (
            <div key={index} className="tc_section" style={{ '--s-color': section.color }}>
              <div className="tc_num_box">{section.number}</div>
              <div className="tc_card">
                <div className="title_area">
                    <div className="icon_wrap">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            {section.icon}
                        </svg>
                    </div>
                    <h2 className="tc_h2">{section.title}</h2>
                </div>
                
                {section.text && <p className="tc_text">{section.text}</p>}
                {section.description && <p className="tc_text" style={{ fontWeight: 600 }}>{section.description}</p>}
                
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
          <div className="tc_section" style={{ '--s-color': '#2563eb' }}>
             <div className="tc_num_box">06</div>
             <div className="tc_card">
                <div className="title_area">
                    <div className="icon_wrap">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    </div>
                    <h2 className="tc_h2">Legal Assistance</h2>
                </div>
                <p className="tc_text">Need clarity on our terms? Reach out to our legal support team for assistance.</p>
                <div className="contact_grid">
                    <a href="mailto:info@zonzoctech.com" className="contact_card">
                        <span style={{ fontSize: '1.8rem' }}>📧</span>
                        <div>
                            <strong style={{ display: 'block', fontSize: '0.7rem', color: '#2563eb', letterSpacing: '1px' }}>EMAIL SUPPORT</strong>
                            <span style={{ fontWeight: 800, color: '#0f172a' }}>info@zonzoctech.com</span>
                        </div>
                    </a>
                    <a href="https://wa.me/94740309534" className="contact_card" target="_blank" rel="noreferrer">
                        <span style={{ fontSize: '1.8rem' }}>💬</span>
                        <div>
                            <strong style={{ display: 'block', fontSize: '0.7rem', color: '#2563eb', letterSpacing: '1px' }}>WHATSAPP</strong>
                            <span style={{ fontWeight: 800, color: '#0f172a' }}>+94 74 030 9534</span>
                        </div>
                    </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL AGREEMENT BOX */}
      <section className="container" style={{ paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
        <div style={{ background: '#020617', padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)', borderRadius: '60px', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1.5px' }}>Partner with Intelligence</h2>
          <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', maxWidth: '700px', margin: '0 auto 45px', lineHeight: 1.7 }}>
            Our engineering standards are built for the future. By moving forward, you join an ecosystem of businesses already leading the search and AI era.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '20px clamp(40px, 5vw, 65px)', borderRadius: '100px', fontWeight: 800, textDecoration: 'none', transition: '0.4s', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)' }}>
            Start Technical Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;