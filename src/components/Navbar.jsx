'use client';

import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";
import ExpertPopup from "./ExpertPopup";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`navbar-fixed-container ${scrolled ? "nav-scrolled" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --primary: #2563eb;
          --dark: #0f172a;
          --gray: #64748b;
          --bg-light: #f8fafc;
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-fixed-container { 
          width: 100%; position: fixed; top: 0; z-index: 1000; 
          background: #ffffff; transition: var(--transition);
          font-family: 'Inter', sans-serif;
        }
        
        .nav-scrolled { box-shadow: 0 10px 30px rgba(0,0,0,0.08); }

        .top-utility-bar { 
          width: 100%; padding: 10px 0; background: var(--bg-light); 
          border-bottom: 1px solid #e2e8f0; transition: var(--transition);
        }
        .nav-scrolled .top-utility-bar { height: 0; padding: 0; overflow: hidden; border: none; }

        .utility-content { 
          max-width: 1400px; margin: 0 auto; display: flex; 
          justify-content: space-between; align-items: center; padding: 0 4%; 
        }
        .utility-left { display: flex; align-items: center; gap: 20px; font-size: 13px; font-weight: 700; color: var(--gray); }
        
        .project-counter {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .back-home-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--dark);
          text-decoration: none;
          padding-right: 15px;
          border-right: 1px solid #e2e8f0;
          transition: 0.2s;
        }
        .back-home-btn:hover { color: var(--primary); }

        .utility-right { display: flex; align-items: center; gap: 25px; }
        .utility-link { font-size: 13px; color: var(--gray); text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 6px; }
        .icon-svg { color: var(--primary); flex-shrink: 0; }

        .main-nav-container { 
          max-width: 1400px; margin: 0 auto; display: flex; 
          justify-content: space-between; align-items: center; padding: 12px 4%;
        }

        .nav-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-logo { height: 48px; width: auto; }
        .nav-tagline { display: flex; flex-direction: column; line-height: 1.1; }
        .nav-tagline span { font-weight: 800; font-size: 18px; color: var(--dark); }
        .nav-tagline small { color: var(--primary); font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; }

        .nav-links-wrapper { display: flex; align-items: center; gap: 5px; }
        .menu-items-group { display: flex; align-items: center; position: relative; }
        .nav-item { position: static; padding: 10px 0; }

        .nav-btn { 
          background: none; border: none; color: var(--dark); font-weight: 700; 
          font-size: 14px; text-transform: uppercase; cursor: pointer; 
          padding: 10px 18px; transition: 0.2s; 
        }
        .nav-btn:hover { color: var(--primary); }

        .mega-menu {
          position: absolute; top: 100%; left: 0; right: 0; width: 100%; 
          background: #ffffff; border-radius: 0 0 16px 16px; padding: 40px;
          display: none; grid-template-columns: repeat(3, 1fr); gap: 40px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.1); border-top: 3px solid var(--primary);
          z-index: 1000;
        }
        
        .nav-item:hover .mega-menu { display: grid; }
        .mega-col h4 { color: var(--primary); font-size: 13px; text-transform: uppercase; font-weight: 800; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 15px; }
        .mega-col a { display: block; padding: 8px 0; font-size: 14px; color: var(--gray); text-decoration: none; font-weight: 500; transition: 0.2s; }
        .mega-col a:hover { color: var(--dark); transform: translateX(5px); }

        .featured-box { background: #f0f7ff; padding: 25px; border-radius: 12px; border: 1px solid #dbeafe; }
        .feat-title { font-weight: 800; color: var(--dark); font-size: 15px; display: block; margin-bottom: 8px; }
        .feat-text { font-size: 13px; color: var(--gray); line-height: 1.5; margin: 0; }

        .nav-proposal-btn { 
          background: var(--primary); color: #fff; padding: 12px 26px; border: none; 
          border-radius: 8px; font-weight: 800; font-size: 14px; cursor: pointer; 
          transition: 0.3s; white-space: nowrap; margin-left: 10px;
        }
        .nav-proposal-btn:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }

        .hamburger { display: none; background: none; border: none; flex-direction: column; gap: 6px; cursor: pointer; }
        .bar { width: 26px; height: 3px; background: var(--dark); border-radius: 10px; }

        .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1050; display: none; backdrop-filter: blur(4px); }
        .drawer-overlay.open { display: block; }
        .mobile-drawer { 
          position: fixed; top: 0; right: -100%; width: 320px; height: 100vh; 
          background: #fff; z-index: 1100; transition: 0.4s; 
          padding: 40px 25px; box-shadow: -15px 0 40px rgba(0,0,0,0.15); overflow-y: auto; 
        }
        .mobile-drawer.open { right: 0; }
        .mob-link { display: block; width: 100%; text-align: left; background: none; border: none; border-bottom: 1px solid #f1f5f9; padding: 18px 0; font-size: 16px; font-weight: 700; color: var(--dark); text-decoration: none; cursor: pointer; }
        .mob-sub { padding: 10px 15px; background: var(--bg-light); border-radius: 10px; display: none; margin-top: 5px; }
        .mob-sub.active { display: block; }

        @media (max-width: 1024px) {
          .nav-links-wrapper { display: none; }
          .hamburger { display: flex; }
          .utility-left { gap: 10px; }
        }
      ` }} />

      {/* 1. TOP UTILITY BAR */}
      <div className="top-utility-bar">
        <div className="utility-content">
          <div className="utility-left">
            <Link href="/" className="back-home-btn">
              <svg className="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>BACK TO HOME</span>
            </Link>

            {/* PROJECTS COMPLETED WITH ICON */}
            <div className="project-counter">
                <svg className="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span style={{ fontSize: '11px', letterSpacing: '0.3px' }}>PROJECTS COMPLETED:</span>
                <strong style={{color: 'var(--primary)', fontSize: '14px'}}>150+</strong>
            </div>
          </div>
          
          <div className="utility-right">
            <a href="mailto:info@zonzoctech.com" className="utility-link">
              <svg className="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              info@zonzoctech.com
            </a>
            <a href="tel:+94740309534" className="utility-link">
              <svg className="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +94 74 030 9534
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV (Rest of the component remains the same) */}
      <nav className="main-nav-container">
        <Link href="/" className="nav-brand">
          <img src={logo.src || logo} alt="ZonzocTech" className="nav-logo" />
          <div className="nav-tagline">
            <span>Web Intelligences</span>
            <small>That Drives Revenue®</small>
          </div>
        </Link>

        <div className="nav-links-wrapper">
          <div className="menu-items-group">
            
            {/* SOFTWARE DEV */}
            <div className="nav-item">
              <button className="nav-btn">SOFTWARE DEV ▾</button>
              <div className="mega-menu">
                  <div className="mega-col">
                      <h4>Custom Software</h4>
                      <Link href="/software-development#custom">Enterprise Solutions</Link>
                      <Link href="/ai-software-development#saas">SaaS Development</Link>
                      <Link href="/software-development#api">API Integration</Link>
                  </div>
                  <div className="mega-col">
                      <h4>Specialized</h4>
                      <Link href="/full-stack-web-development#mobile">Mobile App Dev</Link>  
                      <Link href="/software-development#design">UI/UX Architecture</Link>
                  </div>
                  <div className="mega-col featured-box">
                      <span className="feat-title">Latest Insights</span>
                      <p className="feat-text">AI-driven architectures doubling operational speed in 2024.</p>
                  </div>
              </div>
            </div>

            {/* WEBSITES */}
            <div className="nav-item">
              <button className="nav-btn">WEBSITES ▾</button>
              <div className="mega-menu">
                <div className="mega-col">
                  <h4>Business</h4>
                  <Link href="/full-stack-web-development#corporate">Corporate Websites</Link>                
                  <Link href="/full-stack-web-development#portfolio">Portfolios</Link>
                </div>
                <div className="mega-col">
                  <h4>Solutions Focus</h4>
                  <p style={{fontSize: '14px', color: 'var(--gray)', lineHeight: '1.6', marginTop: '10px'}}>
                    High-performance digital engines engineered for enterprise scalability.
                  </p>
                </div>
                <div className="mega-col featured-box">
                  <span className="feat-title">Performance</span>
                  <p className="feat-text">Maintaining 98+ Core Web Vitals score for maximum SEO ranking.</p>
                </div>
              </div>
            </div>

            {/* SEO MARKETING */}
            <div className="nav-item">
              <button className="nav-btn">SEO MARKETING ▾</button>
              <div className="mega-menu">
                <div className="mega-col">
                  <h4>Strategy</h4>
                  <Link href="/seo-services#audit">SEO Audit</Link>
                  <Link href="/seo-services#keyword">Keyword Planning</Link>
                </div>
                <div className="mega-col">
                  <h4>Intelligence</h4>
                  <Link href="/seo-services#ai-search">AI Search Overviews</Link>
                </div>
                <div className="mega-col featured-box">
                  <span className="feat-title">The Proof</span>
                  <p className="feat-text">See how we generated 400% organic growth for partners.</p>
                </div>
              </div>
            </div>

            {/* WHO WE ARE */}
            <div className="nav-item">
              <button className="nav-btn">WHO WE ARE ▾</button>
              <div className="mega-menu">
                  <div className="mega-col">
                    <h4>About</h4>
                    <Link href="/about">Company Overview</Link>
                  </div>
                  <div className="mega-col">
                    <h4>Contact</h4>
                    <Link href="/contact">Get In Touch</Link>
                  </div>
                  <div className="mega-col featured-box">
                    <span className="feat-title">Our Mission</span>
                    <p className="feat-text">Engineering digital engines that lead.</p>
                  </div>
              </div>
            </div>

          </div>

          <button className="nav-proposal-btn" onClick={() => setIsPopupOpen(true)}>Get a Proposal</button>
        </div>

        <button className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
          <span className="bar"></span><span className="bar"></span><span className="bar"></span>
        </button>
      </nav>

      {/* 3. MOBILE MENU (DRAWER) */}
      <div className={`drawer-overlay ${isMobileMenuOpen ? "open" : ""}`} onClick={closeMobileMenu}></div>
      <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <button style={{ float: 'right', background: 'none', border: 'none', fontSize: '32px' }} onClick={closeMobileMenu}>×</button>
        
        <div style={{ clear: 'both', paddingTop: '30px' }}>
          <Link href="/" className="mob-link" onClick={closeMobileMenu}>Home</Link>
          <button className="mob-link" onClick={() => toggleMobileDropdown(1)}>Software Dev {activeDropdown === 1 ? '▴' : '▾'}</button>
          <div className={`mob-sub ${activeDropdown === 1 ? 'active' : ''}`}>
             <Link href="/software-development" onClick={closeMobileMenu}>Software Solutions</Link>
             <Link href="/ai-software-development" onClick={closeMobileMenu}>AI Development</Link>
          </div>
          <button className="mob-link" onClick={() => toggleMobileDropdown(2)}>Website Dev {activeDropdown === 2 ? '▴' : '▾'}</button>
          <div className={`mob-sub ${activeDropdown === 2 ? 'active' : ''}`}>
             <Link href="/ecommerce-development" onClick={closeMobileMenu}>E-Commerce</Link>
             <Link href="/full-stack-web-development" onClick={closeMobileMenu}>Web Development</Link>
          </div>
          <Link href="/seo-services" className="mob-link" onClick={closeMobileMenu}>SEO Marketing</Link>
          <Link href="/about" className="mob-link" onClick={closeMobileMenu}>About Us</Link>
          <Link href="/contact" className="mob-link" onClick={closeMobileMenu}>Contact Us</Link>
          <button className="nav-proposal-btn" style={{ width: '100%', marginTop: '40px', marginLeft: 0 }} onClick={() => { closeMobileMenu(); setIsPopupOpen(true); }}>Get a Proposal</button>
        </div>
      </div>

      <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  );
};

export default Navbar;