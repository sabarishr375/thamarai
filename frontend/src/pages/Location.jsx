import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock, faDirections } from '@fortawesome/free-solid-svg-icons';
import './Location.css';

const info = [
  {
    icon: faMapMarkerAlt,
    title: 'Our Address',
    lines: ['Maruthuvar Nagar,', 'Erode Road, Karur,', 'Tamil Nadu, India'],
  },
  {
    icon: faPhone,
    title: 'Phone Numbers',
    lines: ['9787025194', '9790125194'],
  },
  {
    icon: faClock,
    title: 'Working Hours',
    lines: ['Monday – Saturday', '9:00 AM – 6:00 PM', 'Sunday: Closed'],
  },
];

const Location = () => (
  <div>
    <div className="page-header">
      <div className="container">
        <span className="section-tag">Find Us</span>
        <h1>Our <span>Location</span></h1>
        <p>Visit us at our workshop in Karur, Tamil Nadu</p>
      </div>
    </div>

    <section className="section" style={{ background: 'var(--black)' }}>
      <div className="container">
        <div className="location-layout">
          {/* Info Cards */}
          <div className="location-info">
            {info.map((item, i) => (
              <div className="loc-card glass" key={i}>
                <div className="loc-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  {item.lines.map((l, j) => <p key={j}>{l}</p>)}
                </div>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=10.978167,78.033972"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary directions-btn"
            >
              <FontAwesomeIcon icon={faDirections} /> Get Directions
            </a>
          </div>

          {/* Map Embed */}
          <div className="map-wrap">
            <iframe
              title="Thamarai Industries Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d78.033972!3d10.978167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU4JzQxLjQiTiA3OMKwMDInMDIuNyJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Location;
