import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faFire, faGem, faCog, faDoorOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const ICON_MAP = {
  'Arc Welding': faBolt,
  'MIG Welding': faFire,
  'TIG Welding': faGem,
  'Metal Fabrication': faCog,
  'Gate & Grill Works': faDoorOpen,
  'Roof Works': faHome,
};

const DEFAULT_SERVICES = [
  { id: 1, name: 'Arc Welding',       description: 'High-strength arc welding for structural and industrial applications. Reliable joints for heavy-duty metal work that lasts for decades.' },
  { id: 2, name: 'MIG Welding',        description: 'Metal Inert Gas welding for clean, precise welds on thin to medium thickness metals with an excellent surface finish.' },
  { id: 3, name: 'TIG Welding',        description: 'Tungsten Inert Gas welding for high-precision, aesthetically clean welds on stainless steel, aluminium, and exotic metals.' },
  { id: 4, name: 'Metal Fabrication',  description: 'Custom metal fabrication services — cutting, bending, and assembling metal structures to your exact specifications.' },
  { id: 5, name: 'Gate & Grill Works', description: 'Decorative and security gates, window grills, compound walls, and railings crafted with precision and style.' },
  { id: 6, name: 'Roof Works',         description: 'Metal roofing structures, industrial sheds, and roofing solutions built for durability and weather resistance.' },
];

const getIcon = (name) => ICON_MAP[name] || faCog;

const Services = () => {
  const [services, setServices] = useState(() => {
    try {
      const stored = localStorage.getItem('ti_services');
      return stored ? JSON.parse(stored) : DEFAULT_SERVICES;
    } catch { return DEFAULT_SERVICES; }
  });

  // Re-sync if admin makes changes in another tab
  useEffect(() => {
    const onStorage = () => {
      try {
        const stored = localStorage.getItem('ti_services');
        if (stored) setServices(JSON.parse(stored));
      } catch {}
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">What We Offer</span>
          <h1>Our <span>Services</span></h1>
          <p>Professional welding and fabrication solutions for every need</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.id}>
                <div className="service-icon-wrap">
                  {s.imageUrl
                    ? <img src={s.imageUrl} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                    : <FontAwesomeIcon icon={getIcon(s.name)} className="service-icon" />
                  }
                </div>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
