import React, { useState, useEffect } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const questions = [
    "OUTDATED WEBSITE?",
    "NO ONLINE VISIBILITY?",
    "FALLING BEHIND AI?",
    "REACH COLLAPSING?",
    "STRUGGLING WITH TRENDS?"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-classic-section">
      {/* CLASSIC DEPTH BACKGROUND */}
      <div className="hero-bg-canvas">
        <div className="bg-grid-pattern"></div>
        <div className="bg-gradient-radial"></div>
      </div>

      <div className="hero-classic-container">
        {/* TOP BADGE - Positioned to clear the Navbar */}
        <div className="hero-top-badge">
          <span className="pulse-icon"></span>
          ENGINEERING DIGITAL EXCELLENCE
        </div>

        <h1 className="hero-h1">
          <span className="hero-static-text">ARE YOU</span>
          <div className="hero-moving-text-window">
            <span key={index} className="hero-dynamic-text">
              {questions[index]}
            </span>
          </div>
        </h1>

        <p className="hero-p">
          In a competitive digital economy, your online presence is your most 
          valuable asset. We engineer <span className="highlight">high-performance ecosystems</span> that 
          transform stagnant visions into scalable revenue engines.
        </p>

        <div className="hero-form-wrapper">
          <form className="hero-classic-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group-professional">
              <div className="input-field-wrap">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="url" 
                  placeholder="Enter your website URL (e.g. www.brand.com)" 
                  required 
                  className="hero-input"
                />
              </div>
              <button type="submit" className="hero-btn-primary">
                Send me a Proposal
              </button>
            </div>
          </form>

          <div className="hero-trust-indicators">
            <span className="trust-label">TRUSTED BY 150+ BRANDS</span>
            <div className="trust-line"></div>
            <span className="trust-label">LIVE STATUS: ONLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;