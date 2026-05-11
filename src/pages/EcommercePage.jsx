'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EcommerceDev = () => {
  const targetAudience = [
    "New e-commerce brands launching online",
    "Existing stores with low conversion rates",
    "Businesses facing slow site speed",
    "Brands needing custom integrations",
    "E-commerce owners scaling operations"
  ];

  const problems = [
    { icon: "📉", text: "Low conversion rates" },
    { icon: "🛒", text: "Cart abandonment" },
    { icon: "🐢", text: "Slow page load times" },
    { icon: "📱", text: "Poor mobile experience" },
    { icon: "⚙️", text: "Limited automation" },
    { icon: "🔍", text: "SEO and visibility issues" }
  ];

  const services = [
    "Custom E-commerce Website Development",
    "Platform Setup & Customization",
    "Checkout & Conversion Optimization",
    "Speed & Performance Improvements",
    "Mobile-First UX Design",
    "Product Page Optimization",
    "AI-Powered Recommendations & Automation",
    "Payment, Shipping & Integrations",
    "SEO for E-commerce Stores",
    "Ongoing Maintenance & Support"
  ];

  const processSteps = [
    { number: "1", title: "Funnel Analysis", description: "Evaluating your current purchase journey." },
    { number: "2", title: "Architecture", description: "Designing conversion-focused technical structures." },
    { number: "3", title: "Build & Automate", description: "Agile development of features and automation." },
    { number: "4", title: "Testing & QA", description: "Rigorous stress testing of checkout and speed." },
    { number: "5", title: "Growth Support", description: "Continuous monitoring and scaling post-launch." }
  ];

  return (
    <div className="ecd__wrapper">
      <Navbar />
      
      {/* CSS For Smooth Scrolling and Layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        .ecd__wrapper { font-family: 'Inter', sans-serif; background: #ffffff; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        
        /* Hero */
        .ecd__hero { background: linear-gradient(135deg, #1e4de9 0%, #1e0e57 100%); padding: 180px 2rem 100px; text-align: center; color: white; }
        .ecd__hero_title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 1.5rem; }
        .ecd__hero_text { font-size: 1.2rem; opacity: 0.9; max-width: 900px; margin: 0 auto 3rem; }
        .ecd__hero_cta { background: white; color: #1e4de9; padding: 1rem 3rem; border-radius: 50px; text-decoration: none; font-weight: 700; }

        /* Generic Section Heading */
        .ecd__heading { font-size: 2.5rem; font-weight: 700; text-align: center; margin: 80px 0 40px; color: #0f172a; }

        /* Circular/Timeline Design */
        .ecd__timeline { position: relative; max-width: 800px; margin: 40px auto; border-left: 3px solid #1e4de9; padding-left: 40px; }
        .ecd__step { position: relative; margin-bottom: 40px; }
        .ecd__step_num { position: absolute; left: -66px; width: 50px; height: 50px; background: #1e4de9; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; border: 4px solid white; }
        
        /* Grid Designs */
        .ecd__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 40px; }
        .ecd__card { background: #f8fafc; padding: 2rem; border-radius: 15px; border: 1px solid #e2e8f0; transition: 0.3s; }
        .ecd__card:hover { transform: translateY(-5px); border-color: #1e4de9; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

        @media (max-width: 768px) {
            .ecd__hero { padding-top: 140px; }
        }
      ` }} />

      {/* --- HERO --- */}
      <section className="ecd__hero">
        <div className="container">
          <h1 className="ecd__hero_title">High-Performance E-commerce Engines</h1>
          <p className="ecd__hero_text">We build and optimize online stores that load faster, convert better, and scale efficiently.</p>
          <a href="#contact" className="ecd__hero_cta">Request Growth Audit</a>
        </div>
      </section>

      {/* --- SERVICES SECTION (TARGETED BY NAVBAR) --- */}
      <section id="ecommerce-dev-section" className="container" style={{paddingTop: '40px'}}>
        <h2 className="ecd__heading">Our E-commerce Development Services</h2>
        <div className="ecd__grid">
          {services.map((service, index) => (
            <div key={index} className="ecd__card">
              <strong style={{color: '#1e4de9', display: 'block', marginBottom: '10px'}}>0{index + 1}</strong>
              <p style={{fontWeight: 600, margin: 0}}>{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROBLEMS SOLVED --- */}
      <section className="container">
        <h2 className="ecd__heading">Common Challenges We Eliminate</h2>
        <div className="ecd__grid">
          {problems.map((prob, i) => (
            <div key={i} className="ecd__card" style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '15px'}}>{prob.icon}</div>
              <p style={{fontWeight: 700}}>{prob.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      <section className="container">
        <h2 className="ecd__heading">Our Optimization Roadmap</h2>
        <div className="ecd__timeline">
          {processSteps.map((step, i) => (
            <div key={i} className="ecd__step">
              <div className="ecd__step_num">{step.number}</div>
              <h3 style={{fontWeight: 700, fontSize: '1.4rem'}}>{step.title}</h3>
              <p style={{color: '#64748b'}}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section style={{background: '#0f172a', color: 'white', padding: '80px 0', textAlign: 'center', marginTop: '100px'}}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px'}}>Ready to Scale Revenue?</h2>
          <p style={{marginBottom: '40px', opacity: 0.8}}>Join brands winning with high-performance digital commerce.</p>
          <a href="/contact" className="ecd__hero_cta">Talk to an Expert</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceDev;