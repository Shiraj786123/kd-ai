'use client';

import React from "react";

// Image imports - Ensure these paths match your project structure
import DiscoverIcon from "../assets/icons/discover.svg";
import StrategyIcon from "../assets/icons/strategy.svg";
import DevelopmentIcon from "../assets/icons/launch.svg";
import LaunchIcon from "../assets/icons/launch4.svg";
import SupportIcon from "../assets/icons/support.svg";

const ProcessSection = () => {
  const steps = [
    { number: "01", title: "DISCOVERY", icon: DiscoverIcon, color: "#ffb703", desc: "We dig deep into your goals, audience, and competitors before writing code." },
    { number: "02", title: "STRATEGY", icon: StrategyIcon, color: "#a855f7", desc: "Wireframes, UI/UX design and architecture built around your specific goals." },
    { number: "03", title: "DEVELOPMENT", icon: DevelopmentIcon, color: "#00f2fe", desc: "Agile, sprint-based development across web and AI with full transparency." },
    { number: "04", title: "LAUNCH", icon: LaunchIcon, color: "#ff4d6d", desc: "Thorough QA testing, performance checks and a smooth go-live on all platforms." },
    { number: "05", title: "SUPPORT", icon: SupportIcon, color: "#4cc9f0", desc: "Continuous updates, monitoring and growth support for long-term success." },
  ];

  return (
    <section className="proc-viewport">
      <style dangerouslySetInnerHTML={{ __html: `
        .proc-viewport { 
            background: #020617; /* Deep Professional Navy */
            padding: 100px 5% 120px; 
            position: relative; 
            overflow: hidden; 
            font-family: 'Inter', -apple-system, sans-serif; 
            text-align: center;
        }

        .proc-container { 
            position: relative; 
            z-index: 10; 
            max-width: 1400px; 
            margin: 0 auto; 
        }

        .proc-header { margin-bottom: 80px; }
        .proc-title { 
            color: #fff; 
            font-size: clamp(2.2rem, 5vw, 3.5rem); 
            font-weight: 800; 
            margin-bottom: 15px;
            letter-spacing: -1px;
        }
        .proc-grad { color: #00f2fe; }

        .proc-grid-wrapper { 
            display: flex; 
            justify-content: space-between; 
            gap: 20px; 
            position: relative; 
            padding-top: 50px;
        }

        .proc-card { 
            flex: 1; 
            background: rgba(255, 255, 255, 0.03); 
            border: 1px solid rgba(255, 255, 255, 0.08); 
            border-radius: 24px; 
            padding: 60px 20px 45px; 
            position: relative; 
            z-index: 2; 
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex; 
            flex-direction: column; 
            align-items: center;
        }

        .proc-card:hover { 
            background: rgba(255, 255, 255, 0.06); 
            transform: translateY(-12px); 
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* NUMBER BADGE ON TOP */
        .proc-badge {
            position: absolute; 
            top: -18px; 
            width: 38px; 
            height: 38px; 
            border-radius: 50%;
            background: var(--accent); 
            color: #000;
            display: flex; 
            align-items: center; 
            justify-content: center;
            font-weight: 900; 
            font-size: 14px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        /* ICON CIRCLE */
        .proc-circle {
            width: 100px; 
            height: 100px; 
            border-radius: 50%;
            background: #ffffff; 
            border: 4px solid var(--accent);
            display: flex; 
            align-items: center; 
            justify-content: center;
            margin-bottom: 30px; 
            box-shadow: 0 0 25px var(--accent-glow);
            transition: 0.3s ease;
        }

        .proc-card:hover .proc-circle {
            transform: scale(1.05);
            box-shadow: 0 0 35px var(--accent);
        }

        /* ICON VISIBILITY FIX */
        .proc-icon-img { 
            width: 42px; 
            height: 42px; 
            filter: brightness(0); /* Makes icons black on white background */
            object-fit: contain;
            transition: 0.3s ease;
        }

        /* TITLES AND DESCRIPTION */
        .proc-card-title { 
            color: var(--accent); 
            font-size: 1.3rem; 
            font-weight: 800; 
            margin-bottom: 15px; 
            letter-spacing: 1.2px;
        }
        
        .proc-card-desc { 
            color: #94a3b8; 
            font-size: 0.95rem; 
            line-height: 1.6; 
            font-weight: 400;
        }

        /* RESPONSIVE LAYOUT */
        @media (max-width: 1150px) {
            .proc-grid-wrapper { flex-wrap: wrap; justify-content: center; gap: 50px 20px; }
            .proc-card { flex: 0 0 45%; }
        }
        
        @media (max-width: 700px) {
            .proc-card { flex: 0 0 100%; }
            .proc-viewport { padding: 80px 5%; }
            .proc-title { font-size: 2rem; }
        }
      ` }} />

      <div className="proc-container">
        <div className="proc-header">
          <h2 className="proc-title">
            How We Work — <span className="proc-grad">Our 5-Step Process</span>
          </h2>
        </div>

        <div className="proc-grid-wrapper">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="proc-card" 
              style={{ 
                '--accent': step.color, 
                '--accent-glow': `${step.color}33` 
              }}
            >
              <div className="proc-badge">{step.number}</div>
              
              <div className="proc-circle">
                <img 
                  src={step.icon.src || step.icon} 
                  alt={step.title} 
                  className="proc-icon-img" 
                />
              </div>

              <h3 className="proc-card-title">{step.title}</h3>
              <p className="proc-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;