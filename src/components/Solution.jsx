'use client';

import React, { useState } from 'react';
import styles from './Solution.module.css';

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('software');

  const tabContent = {
    software: [
      {
        title: "Custom Software Development",
        items: ["Enterprise Software Solutions", "SaaS Product Development", "API Development & Integration", "Legacy System Modernization", "Custom Web Applications"]
      },
      {
        title: "Web & Mobile Applications",
        items: ["Progressive Web Apps (PWA)", "Android & iOS Development", "Cross-Platform Apps", "UI/UX Design & Prototyping", "Scalable App Architecture"]
      },
      {
        title: "Cloud, Backend & DevOps",
        items: ["Backend Development", "Database Design & Optimization", "DevOps & CI/CD Pipelines", "Cloud Infrastructure(AWS,Azure)", "Microservices Architecture"]
      }
    ],
    website: [
      {
        title: "Corporate & Business",
        items: ["Landing Page Design", "Website Redesign", "Startup Websites", "Corporate Portals", "Personal Branding Sites"]
      },
      {
        title: "E-Commerce Solutions",
        items: ["Shopify Development", "WooCommerce Experts", "Custom Checkout Flow", "Payment Gateways", "Inventory Management"]
      },
      {
        title: "Performance & Tech",
        items: ["React & Next.js Apps", "Speed Optimization", "SEO-Ready Coding", "Headless CMS", "Maintenance & Support"]
      }
    ],
    seo: [
      {
        title: "SEO Strategy",
        items: ["Website Audit", "Keyword Research", "Competitor Analysis", "Technical SEO", "Growth Roadmap"]
      },
      {
        title: "On-Page / Technical",
        items: ["Content Optimization", "Schema Markup", "Core Web Vitals", "Internal Linking", "Mobile Speed Fixes"]
      },
      {
        title: "Growth & Visibility",
        items: ["Backlink Strategy", "Local SEO Optimization", "Conversion Tracking", "Monthly Reporting", "Search Presence"]
      }
    ]
  };

  return (
    <section className={styles.solViewport} data-theme={activeTab}>
      {/* Background Visuals */}
      <div className={styles.solBgFx}>
        <div className={styles.solGridPlane}></div>
        <div className={`${styles.solGlow} ${styles.aura1}`}></div>
        <div className={`${styles.solGlow} ${styles.aura2}`}></div>
      </div>

      <div className={styles.solMainContainer}>
        {/* Infinite Moving Background Text */}
        <div className={styles.solMarquee}>
           <span>{activeTab.toUpperCase()} • INNOVATION • {activeTab.toUpperCase()} • TECHNOLOGY • </span>
           <span>{activeTab.toUpperCase()} • INNOVATION • {activeTab.toUpperCase()} • TECHNOLOGY • </span>
        </div>

        <div className={styles.solHeaderArea}>
          <h2 className={styles.solHeading}>
            We're the <span className={styles.solGradient}>Solution</span> You've Been Searching For...
          </h2>
          <p className={styles.solDesc}>
            From SEO and AI to custom web design, we offer tailored strategies 
            that help brands grow smarter, faster, and stronger in today's digital landscape.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.solTabSwitcher}>
          <button 
            className={activeTab === 'software' ? styles.active : ''} 
            onClick={() => setActiveTab('software')}
          >
            Software Development
          </button>
          <button 
            className={activeTab === 'website' ? styles.active : ''} 
            onClick={() => setActiveTab('website')}
          >
            Website Development
          </button>
          <button 
            className={activeTab === 'seo' ? styles.active : ''} 
            onClick={() => setActiveTab('seo')}
          >
            SEO Marketing
          </button>
        </div>

        {/* Cards Grid */}
        <div className={styles.solCardsWrapper}>
          {tabContent[activeTab].map((card, i) => (
            <div className={styles.solGlassCard} key={i}>
              <div className={styles.solCardGlow}></div>
              <h3>{card.title}</h3>
              <ul className={styles.solList}>
                {card.items.map((item, index) => (
                  <li key={index} className={styles.solListItem}>
                    <span className={styles.solArrow}>→</span>
                    <span className={styles.solItemTxt}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;