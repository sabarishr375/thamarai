import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAward, faHandshake, faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const features = [
  { icon: faAward,         text: 'Certified & Experienced Welders' },
  { icon: faCog,           text: 'Modern Equipment & Techniques' },
  { icon: faHandshake,     text: 'Client-First Approach' },
  { icon: faCheckCircle,   text: 'Quality Assured on Every Job' },
  { icon: faMapMarkerAlt,  text: 'Maruthuvar Nagar, Erode Road, Karur' },
];

const About = () => (
  <div>
    <div className="page-header">
      <div className="container">
        <span className="section-tag">Who We Are</span>
        <h1>About <span>Us</span></h1>
        <p>Know the people and passion behind every weld</p>
      </div>
    </div>

    <section className="section" style={{ background: 'var(--black)' }}>
      <div className="container about-grid">
        <div className="about-img-wrap">
          <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&q=80" alt="Welding workshop" />
          <div className="about-img-border" />
          <div className="about-badge">
            <span className="badge-num">10+</span>
            <span className="badge-text">Years of Excellence</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">Thamarai Industries —<br /><span>Built on Strength</span></h2>
          <div className="divider" />
          <p>
            Thamarai Industries is a trusted welding and metal fabrication workshop located in
            Maruthuvar Nagar, Erode Road, Karur. We have been serving clients across the region
            with precision craftsmanship and durable metalwork for over a decade.
          </p>
          <p style={{ color: 'var(--gray)' }}>
            From residential gate works to large-scale industrial fabrication, our team of
            skilled welders brings expertise, dedication, and quality to every project.
            We believe in building long-term relationships through honest work and reliable service.
          </p>

          <div className="about-features">
            {features.map((f, i) => (
              <div className="about-feature" key={i}>
                <FontAwesomeIcon icon={f.icon} className="feature-icon" />
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
