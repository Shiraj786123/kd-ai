'use client';

import React, { useState, useEffect } from 'react';

const ReviewsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reviews = [
    {
      id: 1,
      text: "Our e-commerce platform transformed our business. The team's expertise in custom web solutions helped us scale faster and reach a global audience.",
      name: "Sarah Thompson",
      username: "CEO, RetailFlow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      color: "202, 138, 4", // Golden Yellow
    },
    {
      id: 2,
      text: "The mobile app they developed for us has been a game-changer. It's fast, intuitive, and perfectly aligned with our brand vision. Highly recommend!",
      name: "David Martinez",
      username: "Product Lead, TechNova",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      color: "219, 39, 119", // Deep Pink
    },
    {
      id: 3,
      text: "Excellent IT resource outsourcing service. They provided highly skilled developers who integrated seamlessly with our team.",
      name: "Michael Chen",
      username: "CTO, Global Systems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      color: "2, 132, 199", // Sky Blue
    }
  ];

  if (!mounted) return <section className="reviews-section-loading" style={{ height: '600px' }}></section>;

  return (
    <section className="reviews-section">
      <style dangerouslySetInnerHTML={{ __html: `
        .reviews-section { background: #ffffff; padding: 100px 20px; overflow: hidden; font-family: 'Inter', sans-serif; position: relative; }
        .reviews-container { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 60px; position: relative; z-index: 1; }
        
        .reviews-header-content { display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; margin-bottom: 20px; }
        .rating-box { display: flex; align-items: center; gap: 20px; }
        .rating-number { font-size: 5rem; font-weight: 900; color: #0f172a; line-height: 1; letter-spacing: -2px; }
        .star-glow { color: #facc15; font-size: 1.4rem; }
        .rating-label { color: #64748b; font-size: 0.8rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
        
        .reviews-heading { font-size: clamp(2.2rem, 5vw, 3.2rem); font-weight: 900; color: #0f172a; line-height: 1.1; text-align: right; letter-spacing: -1.5px; }
        .reviews-heading span { color: #0284c7; } /* Blue accent for header */

        .review-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; }
        
        .review-card { 
          position: relative; 
          background: rgba(var(--card-rgb), 0.06); /* Light pastel background */
          border-radius: 40px; /* Matching the rounded look in your image */
          padding: 45px 40px; 
          border: 1px solid rgba(var(--card-rgb), 0.15); 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
          display: flex; 
          flex-direction: column; 
          justify-content: space-between; 
          min-height: 380px; 
        }

        .review-card:hover { 
          transform: translateY(-10px); 
          background: rgba(var(--card-rgb), 0.1); 
          border-color: rgba(var(--card-rgb), 0.4); 
          box-shadow: 0 25px 50px -12px rgba(var(--card-rgb), 0.2); 
        }

        .quote-mark { font-size: 4.5rem; color: rgba(var(--card-rgb), 0.2); font-family: serif; line-height: 1; margin-bottom: 0px; }
        .review-text { font-size: 1.15rem; color: #1e293b; line-height: 1.7; font-weight: 500; margin-bottom: 40px; font-style: italic; }
        
        .reviewer-info { display: flex; align-items: center; gap: 15px; border-top: 1px solid rgba(var(--card-rgb), 0.1); padding-top: 30px; }
        .reviewer-avatar { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 3px solid #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .reviewer-name { color: #0f172a; font-weight: 800; font-size: 1.1rem; margin: 0; }
        .reviewer-username { color: rgb(var(--card-rgb)); font-size: 0.9rem; font-weight: 700; }

        @media (max-width: 992px) { 
          .reviews-header-content { flex-direction: column; text-align: center; } 
          .reviews-heading { text-align: center; } 
          .rating-box { justify-content: center; } 
        }
      ` }} />

      <div className="reviews-container">
        <div className="reviews-header-content">
          <div className="rating-box">
            <h1 className="rating-number">4.9</h1>
            <div className="rating-meta">
              <div className="stars-row">
                <span className="star-glow">★★★★★</span>
              </div>
              <p className="rating-label">Client Satisfaction</p>
            </div>
          </div>
          <h2 className="reviews-heading">
            Our Customers <br />
            <span>love the results</span>
          </h2>
        </div>

        <div className="review-cards-grid">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="review-card"
              style={{ '--card-rgb': review.color }}
            >
              <div>
                <div className="quote-mark">“</div>
                <p className="review-text">{review.text}</p>
              </div>
              
              <div className="reviewer-info">
                <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                <div className="reviewer-details">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="reviewer-username">{review.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;