'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const brandColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

  const services = [
    "AI Web Application Development",
    "AI Software Development",
    "Full-Stack Website Development",
    "AI Website Design & UX",
    "SEO Services",
    "AI Search Optimization (GEO)",
    "E-commerce Optimization",
    "AI Automation & Integrations",
    "Performance & Security",
  ];

  const steps = [
    "We review your message",
    "We analyze your website or idea",
    "We schedule a call or send a proposal"
  ];

  const contactDetails = [
    { 
        icon: '📧', 
        title: 'Email Us', 
        val: 'hello@zonzoctech.com', 
        link: 'mailto:hello@zonzoctech.com',
        bg: '#f0f9ff', 
        border: '#bae6fd' 
    },
    { 
        icon: '📞', 
        title: 'Direct Call', 
        val: '+94 74 030 9534', 
        link: 'tel:+94740309534',
        bg: '#f5f3ff', 
        border: '#ddd6fe' 
    },
    { 
        icon: (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        ), 
        title: 'WhatsApp', 
        val: 'Chat with us', 
        link: 'https://wa.me/94740309534',
        bg: '#e8fdf0', 
        border: '#bbf7d0' 
    }
  ];

  return (
    <div className="cp_root">
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --bg-dark: #020617;
          --accent-blue: #0ea5e9;
        }

        .cp_root { background: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; color: #0f172a; overflow-x: hidden; }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; position: relative; }

        /* --- HERO SECTION --- */
        .hero_sec { 
            background: var(--bg-dark); 
            padding: 180px 0 120px; 
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
                        radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 30%);
            animation: rotateMesh 20s linear infinite;
        }
        @keyframes rotateMesh { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .hero_h1 { 
            font-size: clamp(2.8rem, 8vw, 5rem); 
            font-weight: 800; 
            margin-bottom: 25px; 
            letter-spacing: -2px;
            background: linear-gradient(to bottom, #ffffff 40%, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
        }

        /* --- TITLES --- */
        .sec_title { 
          font-size: clamp(2rem, 5vw, 3rem); 
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

        /* --- CONTACT CARDS --- */
        .details_grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 25px; 
            margin: 50px 0; 
        }
        .detail_link { text-decoration: none; color: inherit; display: block; }
        .detail_box { 
            text-align: center; 
            padding: 40px 20px; 
            border-radius: 25px; 
            border: 2px solid transparent; 
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            height: 100%;
        }
        .detail_box:hover { 
            transform: translateY(-12px); 
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        }
        .detail_icon { 
            font-size: 2.5rem; 
            margin-bottom: 15px; 
            display: flex; 
            justify-content: center;
        }

        /* --- CHECKLIST --- */
        .serv_grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; }
        .serv_card { 
            background: #fff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 12px;
            display: flex; align-items: center; gap: 12px; transition: 0.3s;
        }
        .serv_indicator { width: 6px; height: 30px; border-radius: 3px; }

        /* --- TIMELINE --- */
        .step_wrap { max-width: 800px; margin: 60px auto; position: relative; padding-left: 70px; }
        .step_line { 
            position: absolute; left: 30px; top: 0; bottom: 0; width: 4px; 
            background: linear-gradient(to bottom, #0ea5e9, #8b5cf6); border-radius: 10px;
        }
        .step_card { 
            background: #fff; padding: 25px; border-radius: 20px; margin-bottom: 25px; 
            border: 1px solid #f1f5f9; position: relative;
        }
        .step_num { 
            position: absolute; left: -70px; top: 15px; width: 50px; height: 50px; 
            border-radius: 50%; color: #fff; display: flex; align-items: center; justify-content: center;
            font-weight: 800; border: 4px solid #fff; box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* --- CALL TO ACTION --- */
        .cta_box { 
            background: #0f172a; padding: 80px 40px; text-align: center; color: #fff; 
            border-radius: 35px; margin: 80px 0;
        }
        .cta_btn { 
            display: inline-block; background: #0ea5e9; color: #fff; padding: 16px 40px; 
            border-radius: 100px; font-weight: 700; text-decoration: none; margin: 10px; transition: 0.3s;
        }
        .cta_btn:hover { transform: scale(1.05); box-shadow: 0 10px 20px rgba(14, 165, 233, 0.3); }

        @media (max-width: 768px) {
            .step_wrap { padding-left: 50px; }
            .step_num { left: -50px; width: 40px; height: 40px; }
            .step_line { left: 18px; }
        }
      ` }} />

      {/* Hero Section */}
      <section className="hero_sec">
        <div className="container">
          <h1 className="hero_h1">Connect With ZonzocTech</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
            Ready to evolve your digital infrastructure? Reach out to our engineering team today.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="sec_title">Direct Channels</h2>
          <div className="details_grid">
            {contactDetails.map((detail, index) => (
                <a key={index} href={detail.link} className="detail_link" target={detail.title === 'WhatsApp' ? "_blank" : "_self"} rel="noreferrer">
                    <div className="detail_box" style={{ backgroundColor: detail.bg, borderColor: detail.border }}>
                        <div className="detail_icon">{detail.icon}</div>
                        <h4 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '8px' }}>{detail.title}</h4>
                        <p style={{ color: '#1e293b', fontWeight: 600, fontSize: '1rem', margin: 0 }}>{detail.val}</p>
                    </div>
                </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '80px 0', background: '#fcfdfe' }}>
        <div className="container">
          <h2 className="sec_title">How Can We Help?</h2>
          <div className="serv_grid">
            {services.map((service, index) => (
              <div key={index} className="serv_card">
                <div className="serv_indicator" style={{ background: brandColors[index % 5] }}></div>
                <p style={{ fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="sec_title">Onboarding Process</h2>
          <div className="step_wrap">
            <div className="step_line"></div>
            {steps.map((step, index) => (
              <div key={index} className="step_card">
                <div className="step_num" style={{ background: brandColors[index % 5] }}>{index + 1}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>{step}</h3>
                <p style={{ margin: 0, opacity: 0.7, fontSize: '0.95rem' }}>We ensure a dedicated technical review for every project to maximize ROI.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="cta_box">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>Ready to Scale?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '35px', maxWidth: '600px', margin: '0 auto 35px' }}>
            Book your consultation slot now. Let’s architect your future.
          </p>
          <a href="https://wa.me/94740309534" className="cta_btn" target="_blank" rel="noreferrer">Message WhatsApp</a>
          <a href="mailto:hello@zonzoctech.com" className="cta_btn" style={{ background: 'transparent', border: '2px solid #fff' }}>Send an Email</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;