'use client';

import React from 'react';

const importIcon = (iconName) => {
  try {
    return require(`../assets/icons/${iconName}.svg`).default || require(`../assets/icons/${iconName}.svg`);
  } catch (e) {
    return null;
  }
};

const WhoWeAreSection = () => {
  const rows = [
    {
      accent: "#2563eb", // Classic Blue
      data: [
        { title: 'Programming', items: [{ name: 'Java', icon: 'java' }, { name: 'JavaScript', icon: 'javascript' }, { name: 'TypeScript', icon: 'typescript' }, { name: 'Python', icon: 'python' }] },
        { title: 'Infrastructure', items: [{ name: 'Docker', icon: 'docker' }, { name: 'Kubernetes', icon: 'kubernetes' }, { name: 'AWS', icon: 'aws' }] }
      ]
    },
    {
      accent: "#7c3aed", // Classic Purple
      data: [
        { title: 'Frontend', items: [{ name: 'React.js', icon: 'react' }, { name: 'Next.js', icon: 'next' }, { name: 'Vue.js', icon: 'vue' }, { name: 'Tailwind', icon: 'tailwind' }] },
        { title: 'E-Commerce', items: [{ name: 'Shopify', icon: 'shopify' }, { name: 'WooCommerce', icon: 'woocommerce' }, { name: 'Magento', icon: 'magento' }] }
      ]
    },
    {
      accent: "#0d9488", // Classic Teal
      data: [
        { title: 'Automation', items: [{ name: 'Jenkins', icon: 'jenkins' }, { name: 'GitHub', icon: 'github' }, { name: 'GitLab', icon: 'gitlab' }] },
        { title: 'Monitoring', items: [{ name: 'Grafana', icon: 'grafana' }, { name: 'Prometheus', icon: 'prometheus' }, { name: 'Kibana', icon: 'kibana' }] }
      ]
    },
    {
      accent: "#f59e0b", // Classic Gold
      data: [
        { title: 'Hosting', items: [{ name: 'Hostinger', icon: 'hostinger' }, { name: 'GoDaddy', icon: 'godaddy' }, { name: 'DigitalOcean', icon: 'digitalocean' }] },
        { title: 'Databases', items: [{ name: 'MySQL', icon: 'mysql' }, { name: 'PostgreSQL', icon: 'postgresql' }, { name: 'MongoDB', icon: 'mongodb' }] }
      ]
    }
  ];

  return (
    <section className="whoweare-viewport">
      <style dangerouslySetInnerHTML={{ __html: `
        .whoweare-viewport {
          background-color: #ffffff !important;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* CLASSIC BACKGROUND THEME */
        .whoweare-bg-layer { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .whoweare-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(#d1d5db 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          opacity: 0.5;
          mask-image: radial-gradient(circle, black, transparent 90%);
        }

        .whoweare-content { position: relative; z-index: 10; width: 100%; }

        /* HEADER */
        .whoweare-header-top { text-align: center; max-width: 900px; margin: 0 auto 80px; padding: 0 20px; }
        .whoweare-main-title { 
          font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 900; color: #0f172a; 
          line-height: 1.1; margin-bottom: 25px; letter-spacing: -2px; 
        }
        .text-gradient { 
          background: linear-gradient(135deg, #2563eb, #7c3aed); 
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
        }
        .whoweare-main-desc { color: #475569; font-size: 1.15rem; line-height: 1.7; margin-bottom: 40px; }
        .stack-label { font-size: 12px; font-weight: 800; color: #94a3b8; letter-spacing: 4px; text-transform: uppercase; }

        /* MARQUEE TRACK */
        .marquee-stack-container { display: flex; flex-direction: column; gap: 40px; }
        .marquee-track-row { width: 100%; mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
        .marquee-track-inner { display: flex; gap: 40px; width: max-content; padding: 20px 0; }

        .move-left .marquee-track-inner { animation: scrollLeft 100s linear infinite; }
        .move-right .marquee-track-inner { animation: scrollRight 100s linear infinite; }

        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

        /* RECTANGLE CARDS WITH BORDERS */
        .marquee-tech-card {
          background: #ffffff;
          border: 2px solid #f1f5f9; /* Visible border */
          border-radius: 28px;
          padding: 40px;
          min-width: 450px;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          display: flex; flex-direction: column;
          position: relative;
        }
        
        .marquee-tech-card:hover { 
          transform: translateY(-10px); 
          border-color: var(--accent); /* Color border on hover */
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
        }

        .card-cat-name { 
          font-size: 12px; font-weight: 800; color: var(--accent); 
          margin-bottom: 30px; text-transform: uppercase; letter-spacing: 2px; 
        }

        .tech-flex { display: flex; gap: 25px; align-items: center; }
        .tech-item { display: flex; flex-direction: column; align-items: center; gap: 12px; }
        
        /* LARGER ICON DOCK WITH BORDERS */
        .tech-dock {
          width: 85px; height: 85px; /* Increased size */
          background: #f8fafc;
          border: 2px solid #e2e8f0; /* Clear border */
          border-radius: 22px; 
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        /* LARGE VIBRANT ICONS */
        .tech-dock img { 
          width: 48px; height: 48px; /* Significantly larger */
          object-fit: contain; 
          filter: contrast(1.1); /* Makes brand colors pop */
          transition: 0.4s; 
        }

        .tech-item:hover .tech-dock { 
          background: #ffffff;
          border-color: var(--accent);
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .tech-item:hover img { transform: scale(1.15); }

        .tech-label { font-size: 11px; color: #64748b; font-weight: 700; transition: 0.3s; }
        .tech-item:hover .tech-label { color: #0f172a; }

        @media (max-width: 768px) {
          .whoweare-main-title { font-size: 2.2rem; }
          .marquee-tech-card { min-width: 350px; padding: 25px; }
          .tech-dock { width: 70px; height: 70px; }
          .tech-dock img { width: 38px; height: 38px; }
        }
      ` }} />

      <div className="whoweare-bg-layer">
        <div className="whoweare-grid"></div>
      </div>

      <div className="whoweare-content">
        <div className="whoweare-header-top">
          <h2 className="whoweare-main-title">
            Industry-Leading <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="whoweare-main-desc">
            We utilize high-performance, original-engineered tools to build 
            secure and future-proof digital solutions for our global partners.
          </p>
          <span className="stack-label">OUR TECH STACK IN ACTION</span>
        </div>

        <div className="marquee-stack-container">
          {rows.map((row, rowIndex) => {
            const duplicatedRow = [...row.data, ...row.data, ...row.data];
            const directionClass = rowIndex % 2 === 0 ? "move-left" : "move-right";
            
            return (
              <div 
                key={rowIndex} 
                className={`marquee-track-row ${directionClass}`}
                style={{ '--accent': row.accent }}
              >
                <div className="marquee-track-inner">
                  {duplicatedRow.map((category, catIndex) => (
                    <div key={catIndex} className="marquee-tech-card">
                      <h4 className="card-cat-name">{category.title}</h4>
                      <div className="tech-flex">
                        {category.items.map((tech, i) => (
                          <div key={i} className="tech-item">
                            <div className="tech-dock">
                              <img src={importIcon(tech.icon)} alt={tech.name} />
                            </div>
                            <p className="tech-label">{tech.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;