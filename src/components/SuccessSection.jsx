'use client';

import React from "react";

// Image imports - Ensure these files exist in your assets folder
import item1 from "../assets/icons/healthyfit.png";
import item2 from "../assets/icons/aviation.png";
import item3 from "../assets/icons/fleet-management.png";
import item4 from "../assets/icons/lvita.jpg";
import item5 from "../assets/icons/searchengine.jpeg";
import item6 from "../assets/icons/websitemaintence.jpeg";
import item7 from "../assets/icons/webdevelopment.jpeg";

const SuccessSection = () => {
  const projects = [
    { id: 1, name: "E-Commerce Website", desc: "Shopify-based platform for healthy products.", accent: "#4361ee", img: item1, extra: [{ text: "Shopify", color: "#95bf47" }, { text: "Laravel", color: "#ff2d20" }] },
    { id: 2, name: "Aviation System", desc: "Comprehensive aviation management platform.", accent: "#06d6a0", img: item2, extra: [{ text: "Angular", color: "#dd0031" }, { text: "Firebase", color: "#ffca28" }] },
    { id: 3, name: "Fleet Management", desc: "Real-time fleet tracking and analytics.", accent: "#7209b7", img: item3, extra: [{ text: "React", color: "#61dafb" }, { text: "Node.js", color: "#339933" }] },
    { id: 4, name: "E-Commerce System", desc: "Admin and vendor portals for retail systems.", accent: "#f72585", img: item4, extra: [{ text: "Swift", color: "#f05138" }, { text: "Firebase", color: "#ffca28" }] },
    { id: 5, name: "SEO Optimization", desc: "Driving sustainable organic growth and authority.", accent: "#fb8500", img: item5, extra: [{ text: "Analytics", color: "#e37400" }, { text: "Next.js", color: "#000000" }] },
    { id: 6, name: "Website Maintenance", desc: "Security protocols and protection services.", accent: "#4cc9f0", img: item6, extra: [{ text: "Security", color: "#d00000" }, { text: "React", color: "#61dafb" }] },
    { id: 7, name: "Custom Development", desc: "Advanced features and scalable architecture.", accent: "#3a0ca3", img: item7, extra: [{ text: "Java", color: "#007396" }, { text: "Next.js", color: "#000000" }] },
  ];

  return (
    <section className="success-viewport">
      {/* CSS Injected Directly to ensure mobile responsiveness and fix path errors */}
      <style dangerouslySetInnerHTML={{ __html: `
        .success-viewport { 
          background-color: #ffffff !important; 
          padding: 100px 0; 
          position: relative; 
          overflow: hidden; 
          font-family: 'Inter', -apple-system, sans-serif; 
          color: #0f172a; 
        }

        /* LIGHT THEME DECORATIONS (Behind everything) */
        .success-bg-layer { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        
        .success-grid-pattern { 
          position: absolute; inset: 0; 
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px); 
          background-size: 40px 40px; 
          opacity: 0.4;
          mask-image: radial-gradient(circle, black, transparent 80%);
        }

        /* Soft Light Orbs (The "Light Theme" effect) */
        .success-glow-orb { 
          position: absolute; width: 50vw; height: 50vw; border-radius: 50%; 
          filter: blur(120px); opacity: 0.07; z-index: 0; 
        }
        .aura-1 { top: -10%; left: -10%; background: linear-gradient(to right, #4361ee, #4cc9f0); }
        .aura-2 { bottom: -10%; right: -10%; background: linear-gradient(to left, #f72585, #7209b7); }

        .success-main-content { position: relative; z-index: 10; width: 100%; }

        /* HEADER AREA */
        .success-header-top { text-align: center; max-width: 850px; margin: 0 auto 60px; padding: 0 20px; }
        .success-badge { 
          display: inline-block; background: #f8fafc; border: 1px solid #e2e8f0; 
          color: #64748b; padding: 6px 18px; border-radius: 50px; font-size: 11px; 
          font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px; 
        }
        .success-main-title { 
          font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 900; color: #0f172a; 
          line-height: 1.1; margin-bottom: 25px; letter-spacing: -1.5px;
        }
        .p-text-gradient { 
          background: linear-gradient(90deg, #4361ee, #06d6a0); 
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
        }
        .success-description-modern { color: #64748b; font-size: 1.15rem; line-height: 1.7; }

        /* INFINITE SCROLLING */
        .projects-marquee-container { 
          width: 100%; padding: 20px 0; 
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); 
        }
        .projects-marquee-track { display: flex; gap: 30px; width: max-content; animation: scrollProjects 60s linear infinite; }
        .projects-marquee-container:hover .projects-marquee-track { animation-play-state: paused; }

        @keyframes scrollProjects { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* PROFESSIONAL CARDS */
        .project-glass-card { 
          flex: 0 0 400px; background: rgba(255, 255, 255, 0.8); 
          backdrop-filter: blur(10px); border: 1px solid #f1f5f9; 
          border-radius: 28px; overflow: hidden; display: flex; 
          flex-direction: column; transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1); 
          position: relative; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }
        .project-glass-card:hover { 
          transform: translateY(-15px); border-color: var(--project-accent); 
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.06); background: #ffffff;
        }

        .project-card-image-box { position: relative; height: 220px; width: 100%; overflow: hidden; background: #f8fafc; }
        .project-card-image-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s ease; }
        .project-glass-card:hover .project-card-image-box img { transform: scale(1.1); }

        .project-card-info { padding: 35px; flex-grow: 1; }
        .project-name-txt { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 10px; }
        .project-desc-txt { font-size: 0.95rem; color: #64748b; line-height: 1.6; margin-bottom: 25px; }

        /* TAGS */
        .project-tech-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .tech-pill { 
          font-size: 10px; font-weight: 700; padding: 4px 12px; 
          border-radius: 100px; text-transform: uppercase; 
        }

        /* ACCENT BAR */
        .card-bottom-bar { 
          position: absolute; bottom: 0; left: 0; height: 5px; 
          width: 0%; background: var(--project-accent); transition: width 0.5s ease; 
        }
        .project-glass-card:hover .card-bottom-bar { width: 100%; }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 1024px) {
          .project-glass-card { flex: 0 0 340px; }
        }
        @media (max-width: 768px) {
          .success-viewport { padding: 60px 0; }
          .success-main-title { font-size: 1.8rem; }
          .project-glass-card { flex: 0 0 290px; }
          .project-card-info { padding: 25px; }
          .project-name-txt { font-size: 1.2rem; }
        }
      ` }} />

      <div className="success-bg-layer">
        <div className="success-grid-pattern"></div>
        <div className="success-glow-orb aura-1"></div>
        <div className="success-glow-orb aura-2"></div>
      </div>

      <div className="success-main-content">
        <div className="success-header-top">
          <div className="success-badge"><span>Case Studies</span></div>
          <h2 className="success-main-title">Real <span className="p-text-gradient">Results</span>, Not Just Promises</h2>
          <p className="success-description-modern">Tailored solutions that deliver measurable impact and growth.</p>
        </div>

        <div className="projects-marquee-container">
          <div className="projects-marquee-track">
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="project-glass-card" style={{ '--project-accent': project.accent }}>
                <div className="project-card-image-box">
                  {/* Handle image objects if they come from Next.js imports */}
                  <img src={project.img.src || project.img} alt={project.name} />
                </div>
                <div className="project-card-info">
                  <h3 className="project-name-txt">{project.name}</h3>
                  <p className="project-desc-txt">{project.desc}</p>
                  <div className="project-tech-pills">
                    {project.extra.map((item, idx) => (
                      <span key={idx} className="tech-pill" style={{ color: item.color, backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-bottom-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;