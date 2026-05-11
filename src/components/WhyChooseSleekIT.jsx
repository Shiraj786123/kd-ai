'use client';

import React from 'react';
import growthLineImage from '../assets/icons/earning-line.png';

const WhyChooseSection = () => {
  const aiRobotImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000";

  return (
    <section className="why-choose-viewport-final">
      {/* CSS Injected directly */}
      <style dangerouslySetInnerHTML={{ __html: `
        .why-choose-viewport-final {
          /* 1. VISIBLE SEPARATION: Use a soft slate background instead of pure white */
          background-color: #f8fafc !important; 
          
          /* 2. TOP DIVIDER: A clean line to separate from the section above */
          border-top: 1px solid #e2e8f0;
          
          padding: 120px 5%;
          position: relative !important;
          overflow: hidden !important;
          font-family: 'Inter', sans-serif;
          color: #0f172a !important;
          display: flex;
          justify-content: center;
        }

        /* Background logic */
        .p-bg-layer { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .p-perspective-grid {
          position: absolute; width: 100%; height: 100%; top: 0; left: 0;
          background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          opacity: 0.6;
        }

        .p-main-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 10;
          width: 100%;
        }

        /* --- LEFT SIDE CONTENT --- */
        .p-tagline { color: #6366f1; font-size: 12px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 20px; }
        .p-title-heading { font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 900; line-height: 1.1; margin-bottom: 25px; color: #0f172a !important; letter-spacing: -1.5px; }
        .p-gradient-txt { background: linear-gradient(90deg, #6366f1, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p-description-txt { color: #475569; font-size: 1.1rem; line-height: 1.7; margin-bottom: 40px; max-width: 550px; }

        /* Checklist Items */
        .p-checklist { list-style: none; display: flex; flex-direction: column; gap: 18px; }
        .p-check-item { display: flex; align-items: center; gap: 15px; font-size: 1.05rem; font-weight: 600; color: #1e293b; }
        .p-check-icon { 
            background: #6366f1; color: white; 
            width: 26px; height: 26px; border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; 
            flex-shrink: 0; box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        /* --- RIGHT SIDE VISUALS --- */
        .p-visual-right { position: relative; height: 550px; display: flex; align-items: center; justify-content: center; width: 100%; }

        /* CARDS POP ON THE SLATE BACKGROUND */
        .p-glass-card {
          position: absolute; background: #ffffff; 
          border: 1px solid #ffffff; border-radius: 24px; padding: 25px;
          z-index: 10; 
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08); /* Stronger shadow for visibility */
          animation: cardFloat 6s infinite ease-in-out;
        }

        .p-notif-card { top: 0; right: 0; min-width: 260px; border-left: 5px solid #f43f5e; }
        .p-badge-delivered { background: #f43f5e; color: #fff; font-size: 10px; font-weight: 900; padding: 4px 12px; border-radius: 50px; margin-bottom: 10px; display: inline-block; }
        .p-notif-txt { font-weight: 700; color: #0f172a; font-size: 0.95rem; }

        .p-stat-card { bottom: 0; left: 0; width: 310px; animation-delay: -3s; }
        .p-stat-title { font-size: 11px; font-weight: 800; color: #94a3b8; margin-bottom: 15px; text-transform: uppercase; }
        .p-chart-wrap img { width: 100%; height: auto; border-radius: 10px; }
        .p-stat-footer { margin-top: 15px; padding-top: 15px; border-top: 1px solid #f1f5f9; }
        .p-stat-num { font-size: 1.3rem; color: #0f172a; font-weight: 800; margin-bottom: 5px; }
        .p-growth-tag { color: #10b981; font-weight: 800; font-size: 0.85rem; }

        .p-image-frame { position: relative; width: 90%; max-width: 440px; z-index: 5; }
        .p-main-ai-img { width: 100%; height: auto; border-radius: 30px; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1); }

        @keyframes cardFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

        @media (max-width: 1024px) {
          .p-main-container { grid-template-columns: 1fr; text-align: center; }
          .p-checklist { align-items: center; }
          .p-image-frame { display: none; }
          .p-visual-right { height: auto; gap: 20px; flex-direction: column; }
          .p-glass-card { position: static; width: 100%; max-width: 350px; }
        }
      ` }} />

      <div className="p-bg-layer">
        <div className="p-perspective-grid"></div>
      </div>

      <div className="p-main-container">
        
        {/* LEFT SIDE CONTENT */}
        <div className="p-content-left">
          <p className="p-tagline">Excellence in Engineering</p>
          <h1 className="p-title-heading">
            Why Partner with <span className="p-gradient-txt">Zonzoctech?</span>
          </h1>
          <p className="p-description-txt">
            We deliver high-performance digital solutions by combining 
            industry-leading AI technology with clean, scalable software engineering.
          </p>

          <ul className="p-checklist">
            {["Free Project Consultation", "Fast Project Delivery", "Affordable Packages", "No Hidden Charges"].map((text, i) => (
              <li key={i} className="p-check-item">
                <div className="p-check-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE VISUALS */}
        <div className="p-visual-right">
          <div className="p-glass-card p-notif-card">
            <span className="p-badge-delivered">Success Milestone</span>
            <p className="p-notif-txt">Major Enterprise Portal Launched</p>
          </div>

          <div className="p-glass-card p-stat-card">
            <h4 className="p-stat-title">Annual Performance</h4>
            <div className="p-chart-wrap">
              <img src={growthLineImage.src || growthLineImage} alt="Growth" />
            </div>
            <div className="p-stat-footer">
              <h2 className="p-stat-num">120+ Happy Clients</h2>
              <div className="p-growth-tag">35% Increase in ROI</div>
            </div>
          </div>

          <div className="p-image-frame">
             <img src={aiRobotImage} alt="AI Technology" className="p-main-ai-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;