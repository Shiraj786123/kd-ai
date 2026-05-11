import React, { useEffect, useState } from "react";

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  const [budget, setBudget] = useState(5000);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: ""
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (preSelectedService) {
        setSelectedService(preSelectedService);
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open, preSelectedService]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      ...formData,
      message: formData.project,
      service: selectedService,
      budget: budget
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", project: "" });
        setSelectedService("");
        setBudget(5000);
        setTimeout(() => {
          onClose();
          setSubmitStatus("");
        }, 2500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  if (!open) return null;

  const percentage = ((budget - 5000) / (65000 - 5000)) * 100;
  const sliderBackground = `linear-gradient(to right, #00f2fe 0%, #7a5fff ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;

  return (
    <div className="safe-modal-overlay" onClick={onClose}>
      <div className="safe-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="safe-modal-close" onClick={onClose}>&times;</button>

        <div className="safe-modal-grid">
          {/* LEFT PANEL */}
          <div className="safe-modal-left">
            <div className="safe-left-top">
              <h3>Speak to Our Experts</h3>
              <p>Let's create your vision together.</p>

              <div className="safe-modal-review">
                <strong>zonzoc</strong>
                <p>
                  "Excellent IT resource outsourcing service. They provided highly
                  skilled developers who integrated seamlessly with our team."
                </p>
              </div>

              <div className="safe-modal-socials">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>

            <div className="safe-modal-contact">
              <span><i className="fa-solid fa-envelope"></i> info@zonzoctech.com</span>
              <span><i className="fa-brands fa-whatsapp"></i> +94 74 030 9534</span>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="safe-modal-right">
            <h2>Let's Build Something Incredible Together</h2>
            <p className="safe-modal-subtext">
              Tell us what you're looking for and our experts will get back to you.
            </p>

            {submitStatus === "success" && (
              <div className="safe-alert success">✓ Message sent successfully!</div>
            )}
            {submitStatus === "error" && (
              <div className="safe-alert error">✗ Failed to send message.</div>
            )}

            <form className="safe-modal-form" onSubmit={handleSubmit}>
              <div className="safe-form-grid">
                <input type="text" name="name" placeholder="Your Name*" value={formData.name} onChange={handleInputChange} required />
                <input type="text" name="company" placeholder="Company / Organization" value={formData.company} onChange={handleInputChange} />
                <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} required />
              </div>

              <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                <option value="">You are interested in</option>
                <option value="Website Development">Website Development</option>
                <option value="SEO">SEO</option>
                <option value="Website Growth Audit">Website Growth Audit</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>

              <label className="safe-budget-label">
                Estimated Budget: <span>${budget.toLocaleString()}</span>
              </label>

              <input
                type="range" min="5000" max="65000" value={budget}
                onChange={(e) => setBudget(e.target.value)}
                style={{ background: sliderBackground }}
                className="safe-range-slider"
              />

              <textarea name="project" placeholder="Tell us about the project" value={formData.project} onChange={handleInputChange} required />

              <div className="safe-modal-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? "SENDING..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;