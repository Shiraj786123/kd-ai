'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import siteLogo from '../assets/icons/logo.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const servicesLinks = [
    { label: 'AI Web Application Development', path: '/ai-software-development' },
    { label: 'AI Software Development', path: '/ai-software-development' },
    { label: 'Full-Stack Web Development', path: '/full-stack-web-development' },
    { label: 'AI-Powered Website Design', path: '/full-stack-web-development' },
    { label: 'AI Automation & GPT Integration', path: '/ai-software-development' },
    { label: 'SEO & AI Search Optimization', path: '/seo-services' },
    { label: 'E-commerce Development', path: '/ecommerce-development-optimization' }
  ];

  const solutionsLinks = [
    { label: 'Websites That Generate Leads', path: '/full-stack-web-development' },
    { label: 'AI Chatbots & Virtual Assistants', path: '/ai-software-development' },
    { label: 'Business Process Automation', path: '/ai-software-development' },
    { label: 'E-commerce Growth Optimization', path: '/ecommerce-development-optimization' },
    { label: 'Search Visibility & Traffic Growth', path: '/seo-services' },
    { label: 'Website Speed & Performance Fixes', path: '/seo-services' }
  ];

  const resourcesLinks = [
    { label: 'Website Growth Guides', path: '/seo-services' },
    { label: 'AI for Business', path: '/ai-software-development' },
    { label: 'Technical SEO Knowledgebase', path: '/seo-services' },
    { label: 'Case Studies & Results', path: '/about' },
    { label: 'AI SEO & Answer Engine Optimization', path: '/seo-services' }
  ];

  const companyLinks = [
    { label: 'About ZonzocTech', path: '/about' },
    { label: 'How We Work', path: '/about' },
    { label: 'Careers', path: '/contact-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-conditions' }
  ];

  return (
    <footer className="footer-pro">
      <style dangerouslySetInnerHTML={{ __html: `
        .footer-pro { 
          background: #020617; 
          padding: 100px 0 60px 0; 
          color: #f8fafc; 
          font-family: 'Inter', sans-serif;
          position: relative;
        }
        
        .footer-main-container { 
          max-width: 1400px; 
          margin: 0 auto; 
          padding: 0 5%; 
        }

        .footer-grid-layout { 
          display: grid; 
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr; 
          gap: 40px; 
          align-items: start; /* KEY: Keeps all headers on the same row height */
        }

        /* BRAND SIDE */
        .footer-brand-side { display: flex; flex-direction: column; gap: 30px; }
        .footer-main-logo { height: 45px; width: auto; object-fit: contain; align-self: flex-start; }
        .footer-cta-heading { 
          font-size: 1.25rem; 
          font-weight: 800; 
          line-height: 1.3; 
          max-width: 280px; 
          margin: 0 0 25px 0;
        }
        
        .footer-whatsapp-pill { 
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          color: #0f172a;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.05rem;
          width: fit-content;
          transition: 0.3s;
        }
        .footer-whatsapp-pill:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255,255,255,0.1); }
        .wa-icon { color: #25d366; font-size: 1.3rem; }

        /* COLUMNS */
        .column-title { 
          font-size: 0.85rem; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          font-weight: 900; 
          margin-bottom: 35px; /* Same margin for all columns */
          color: #ffffff;
        }

        .column-links { list-style: none; padding: 0; margin: 0; }
        .column-links li { margin-bottom: 18px; }
        .column-links a { 
          color: #94a3b8; 
          text-decoration: none; 
          font-size: 0.95rem; 
          font-weight: 500; 
          transition: 0.2s;
          line-height: 1.4;
          display: block;
        }
        .column-links a:hover { color: #38bdf8; }

        /* FLOATING ACTIONS */
        .floating-controls {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 9999;
        }

        .float-wa {
          width: 60px; height: 60px;
          background: #25d366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 32px;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
          transition: 0.3s;
        }

        .scroll-to-top-btn {
          width: 50px; height: 50px;
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          border: none; border-radius: 50%;
          color: white; font-size: 20px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(0.5);
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .scroll-to-top-btn.active { opacity: 1; transform: scale(1); }

        @media (max-width: 1100px) {
          .footer-grid-layout { grid-template-columns: 1fr 1fr; gap: 60px; }
          .footer-brand-side { grid-column: span 2; margin-bottom: 40px; }
        }
        @media (max-width: 600px) {
          .footer-grid-layout { grid-template-columns: 1fr; }
          .footer-brand-side { grid-column: span 1; }
        }
      ` }} />

      <div className="footer-main-container">
        <div className="footer-grid-layout">
          
          <div className="footer-brand-side">
            <img src={siteLogo.src || siteLogo} alt="ZonzocTech" className="footer-main-logo" />
            <div className="footer-cta-box">
              <h4 className="footer-cta-heading">
                Ready to speak with a marketing expert? Give us a ring
              </h4>
              <a
                href="https://wa.me/94740309534"
                className="footer-whatsapp-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="wa-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                +94 74 030 9534
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h5 className="column-title">Core Services</h5>
            <ul className="column-links">
              {servicesLinks.map((link, i) => (
                <li key={i}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="column-title">Solutions</h5>
            <ul className="column-links">
              {solutionsLinks.map((link, i) => (
                <li key={i}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="column-title">Resources</h5>
            <ul className="column-links">
              {resourcesLinks.map((link, i) => (
                <li key={i}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="column-title">Company</h5>
            <ul className="column-links">
              {companyLinks.map((link, i) => (
                <li key={i}><Link href={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="floating-controls">
        <a href="https://wa.me/94740309534" className="float-wa" target="_blank" rel="noreferrer">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        <button 
          className={`scroll-to-top-btn ${isVisible ? 'active' : ''}`} 
          onClick={scrollToTop}
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;