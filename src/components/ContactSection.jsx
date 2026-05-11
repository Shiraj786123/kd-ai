import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const steps = [
    { number: '01', text: 'Requirements' },
    { number: '02', text: 'Discussion' },
    { number: '03', text: 'Proposal' },
    { number: '04', text: 'Launch' }
  ];

  return (
    <section className="contact-area">
      {/* AI TECH BACKGROUND */}
      <div className="contact-bg-layers">
        <div className="contact-grid-floor"></div>
        <div className="moving-ai-orb orb-c"></div>
        <div className="moving-ai-orb orb-p"></div>
      </div>

      <div className="contact-main-wrapper">
        <div className="contact-split">
          
          {/* LEFT: Branding & Process */}
          <div className="info-panel glass-panel">
            <div className="system-status">
              <span className="pulse-icon"></span>
              <span className="status-label">SYSTEM ONLINE</span>
            </div>

            <h2 className="title-build">Let's build the <span className="text-gradient">future.</span></h2>
            <p className="subtitle-build">High-velocity solutions for your next big idea.</p>

            <div className="mascot-display">
              <div className="mascot-aura"></div>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" 
                alt="AI Assistant" 
                className="mascot-img"
              />
            </div>

            <div className="process-grid">
              {steps.map((step, index) => (
                <div key={index} className="process-card">
                  <span className="step-count">{step.number}</span>
                  <p className="step-label">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: High-Performance Form */}
          <div className="form-panel glass-panel">
            <div className="form-brand-header">
              <span className="header-icon">⚡</span>
              <span className="header-txt">CONNECT TO CORE</span>
            </div>

            <h3 className="form-heading">Send a transmission for an immediate response.</h3>

            {submitStatus === 'success' && <div className="status-alert success">✓ SIGNAL ESTABLISHED: Transmission received.</div>}
            {submitStatus === 'error' && <div className="status-alert error">✗ LINK FAILED: Retrying signal...</div>}

            <form onSubmit={handleSubmit} className="transmission-form">
              <div className="input-row">
                <div className="input-group">
                  <span className="input-icon">👤</span>
                  <input type="text" name="name" placeholder="Pilot Name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
                </div>
                <div className="input-group">
                  <span className="input-icon">@</span>
                  <input type="email" name="email" placeholder="Comm Link (Email)" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <span className="input-icon">📡</span>
                  <input type="tel" name="phone" placeholder="Frequency (Phone)" value={formData.phone} onChange={handleChange} disabled={isSubmitting} />
                </div>
                <div className="input-group">
                  <span className="input-icon">🏢</span>
                  <input type="text" name="company" placeholder="Organization" value={formData.company} onChange={handleChange} disabled={isSubmitting} />
                </div>
              </div>

              <div className="input-group full">
                <span className="input-icon terminal-icon">_</span>
                <textarea name="message" placeholder="Type your data mission here..." value={formData.message} onChange={handleChange} rows="4" required disabled={isSubmitting}></textarea>
              </div>

              <button type="submit" className="transmission-btn" disabled={isSubmitting}>
                {isSubmitting ? 'UPLOADING...' : 'SEND TRANSMISSION'} 
                <span className="rocket-icon">🚀</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;