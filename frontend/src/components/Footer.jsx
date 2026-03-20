import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faFire, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      {/* Brand */}
      <div className="footer-brand">
        <div className="footer-logo">
          <FontAwesomeIcon icon={faFire} className="footer-logo-icon" />
          <div>
            <div className="footer-logo-en">THAMARAI INDUSTRIES</div>
            <div className="footer-logo-ta">தாமரை இன்டஸ்ட்ரீஸ்</div>
          </div>
        </div>
        <p className="footer-tagline">"Strong welds. Stronger trust."<br />Precision craftsmanship since day one.</p>
      </div>

      {/* Quick Links */}
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'],
            ['/gallery', 'Gallery'], ['/reviews', 'Client Reviews'],
            ['/location', 'Location'], ['/contact', 'Contact Us']].map(([path, label]) => (
            <li key={path}><Link to={path}>{label}</Link></li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-col">
        <h4>Contact</h4>
        <p><FontAwesomeIcon icon={faPhone} /> 9787025194</p>
        <p><FontAwesomeIcon icon={faPhone} /> 9790125194</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Maruthuvar Nagar, Erode Road, Karur</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> thamaraiindustries@gmail.com</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} <span>Thamarai Industries</span>. All rights reserved. Karur, Tamil Nadu.</p>
    </div>
  </footer>
);

export default Footer;
