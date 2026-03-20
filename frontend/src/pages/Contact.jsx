import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens WhatsApp with pre-filled message to 9787025194
    const text = `Hello Thamarai Industries!%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Message:* ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919787025194?text=${text}`, '_blank');
    setStatus('success');
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1>Contact <span>Us</span></h1>
          <p>We'd love to hear about your project</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info">
            <span className="section-tag">Reach Us</span>
            <h2 className="section-title">Let's Build <span>Together</span></h2>
            <div className="divider" />
            <p style={{ color: 'var(--gray)', marginBottom: '32px', lineHeight: '1.8', fontSize: '0.92rem' }}>
              Have a project in mind? Reach out and we'll get back to you as soon as possible with a free consultation.
            </p>

            {[
              { icon: faPhone,         label: 'Phone',         value: '9787025194 / 9790125194' },
              { icon: faMapMarkerAlt,  label: 'Location',      value: 'Maruthuvar Nagar, Erode Road, Karur' },
              { icon: faClock,         label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM' },
            ].map((item, i) => (
              <div className="info-item" key={i}>
                <div className="info-icon"><FontAwesomeIcon icon={item.icon} /></div>
                <div>
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <span className="section-tag">Send a Message</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>Quick <span>Enquiry</span></h2>
            <div className="divider" />

            {status === 'success' && (
              <div className="alert alert-success">Redirecting to WhatsApp... We'll reply shortly!</div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" name="phone" value={form.phone}
                  onChange={handleChange} placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message}
                  onChange={handleChange} placeholder="Describe your project or inquiry..."
                  rows={5} required />
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
