import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faShieldAlt, faStar, faUsers, faClock,
  faBolt, faFire, faGem, faCog, faDoorOpen, faHome,
  faAward, faHandshake, faCheckCircle, faPhone
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const stats = [
  { icon: faClock,    value: '10', unit: '+', label: 'Years Experience' },
  { icon: faUsers,    value: '500', unit: '+', label: 'Happy Clients' },
  { icon: faShieldAlt,value: '100', unit: '%', label: 'Quality Assured' },
  { icon: faStar,     value: '4.9', unit: '★', label: 'Client Rating' },
];

const services = [
  { icon: faBolt,     name: 'Arc Welding',       desc: 'High-strength structural welding for industrial applications.' },
  { icon: faFire,     name: 'MIG Welding',        desc: 'Clean, precise welds on thin to medium thickness metals.' },
  { icon: faGem,      name: 'TIG Welding',        desc: 'Precision welds on stainless steel and aluminium.' },
  { icon: faCog,      name: 'Metal Fabrication',  desc: 'Custom cutting, bending and assembling metal structures.' },
  { icon: faDoorOpen, name: 'Gate & Grill Works', desc: 'Decorative and security gates, grills and railings.' },
  { icon: faHome,     name: 'Roof Works',         desc: 'Durable metal roofing and industrial shed structures.' },
];

const whyUs = [
  { icon: faAward,        title: 'Expert Welders',     desc: 'Certified professionals with 10+ years of hands-on experience in all welding types.' },
  { icon: faShieldAlt,    title: 'Quality Materials',  desc: 'We use only top-grade metals and welding consumables for lasting results.' },
  { icon: faClock,        title: 'On-Time Delivery',   desc: 'We respect your schedule and consistently deliver projects on time.' },
  { icon: faHandshake,    title: 'Honest Pricing',     desc: 'Transparent, competitive rates with no hidden charges — ever.' },
];

const Home = () => (
  <div className="home">
    {/* Hero */}
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">
          <FontAwesomeIcon icon={faCheckCircle} /> Karur's Trusted Welding Workshop
        </div>
        <p className="hero-tamil">தாமரை இன்டஸ்ட்ரீஸ்</p>
        <h1 className="hero-title">
          THAMARAI<br />
          <span className="highlight">INDUSTRIES</span>
        </h1>
        <p className="hero-tagline">"Strong welds. Stronger trust."</p>
        <p className="hero-desc">
          At Thamarai Industries, we deliver high-quality welding and fabrication services
          with precision and durability. From small repairs to large-scale metal works,
          we ensure strength, safety, and satisfaction.
        </p>
        <div className="hero-btns">
          <Link to="/services" className="btn btn-primary">
            Our Services <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            <FontAwesomeIcon icon={faPhone} /> Contact Us
          </Link>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
      </div>
    </section>

    {/* Stats */}
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-icon-wrap">
              <FontAwesomeIcon icon={s.icon} className="stat-icon" />
            </div>
            <div className="stat-value">{s.value}<span>{s.unit}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Why Us */}
    <section className="section why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Built on <span>Strength</span> & Trust</h2>
          <div className="divider" />
          <p className="section-subtitle">We bring precision, reliability, and craftsmanship to every single project we take on.</p>
        </div>
        <div className="why-grid">
          {whyUs.map((w, i) => (
            <div className="why-card" key={i}>
              <div className="why-num">0{i + 1}</div>
              <div className="why-icon"><FontAwesomeIcon icon={w.icon} /></div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="section services-preview">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <div className="divider center" />
          <p className="section-subtitle">Professional welding and fabrication solutions for every need.</p>
        </div>
        <div className="services-preview-grid">
          {services.map((s, i) => (
            <div className="svc-preview-card" key={i}>
              <div className="svc-icon-ring">
                <FontAwesomeIcon icon={s.icon} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="services-preview-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-banner">
      <div className="cta-bg" />
      <div className="container">
        <div className="cta-content">
          <span className="section-tag">Get Started Today</span>
          <h2 className="section-title">Ready to Start Your <span>Project?</span></h2>
          <p>Contact us for a free consultation and quote. We're ready to bring your vision to life with precision metalwork.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/gallery" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
