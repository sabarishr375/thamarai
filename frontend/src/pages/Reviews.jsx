import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './Reviews.css';

const reviews = [
  {
    name: 'Rajesh Kumar', location: 'Karur', rating: 5,
    text: 'Excellent work on our factory gate. The welding quality is top-notch and the team was very professional. Delivered exactly on time. Highly recommended to anyone in Karur!',
  },
  {
    name: 'Murugan S.', location: 'Erode', rating: 5,
    text: 'Got my roof structure done by Thamarai Industries. Very satisfied with the strength and finish. The team was cooperative and the pricing was very fair.',
  },
  {
    name: 'Priya Devi', location: 'Karur', rating: 5,
    text: 'Beautiful window grills for our new home. The design was exactly what we wanted. Great craftsmanship at a fair price. Will definitely use them again.',
  },
  {
    name: 'Senthil Nathan', location: 'Namakkal', rating: 5,
    text: 'Used their metal fabrication service for our workshop. Precision work, strong joints, and a very cooperative team. The quality exceeded my expectations.',
  },
  {
    name: 'Karthik R.', location: 'Karur', rating: 5,
    text: 'They built a complete compound gate and grill set for my house. The finish is premium and the work was done neatly without any mess. 5 stars!',
  },
  {
    name: 'Anitha M.', location: 'Tiruchirappalli', rating: 5,
    text: 'Very professional team. They understood our requirements quickly and delivered a sturdy metal shed for our factory. Great value for money.',
  },
];

const breakdown = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 2 },
];

const Reviews = () => (
  <div>
    <div className="page-header">
      <div className="container">
        <span className="section-tag">Testimonials</span>
        <h1>Client <span>Reviews</span></h1>
        <p>Real feedback from our valued customers across Tamil Nadu</p>
      </div>
    </div>

    <section className="section" style={{ background: 'var(--black)' }}>
      <div className="container">
        {/* Rating Summary */}
        <div className="rating-summary">
          <div>
            <div className="rating-big">4.9</div>
            <div className="rating-stars">
              {[1,2,3,4,5].map(i => <FontAwesomeIcon icon={faStar} key={i} className="star" />)}
            </div>
            <div className="rating-count">Based on 500+ reviews</div>
          </div>
          <div className="rating-divider" />
          <div className="rating-breakdown">
            {breakdown.map((b) => (
              <div className="rating-row" key={b.stars}>
                <span>{b.stars} <FontAwesomeIcon icon={faStar} style={{ color: '#ffc107', fontSize: '0.75rem' }} /></span>
                <div className="rating-bar"><div className="rating-fill" style={{ width: `${b.pct}%` }} /></div>
                <span>{b.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="quote-icon"><FontAwesomeIcon icon={faQuoteLeft} /></div>
              <div className="review-stars">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <FontAwesomeIcon icon={faStar} key={j} className="star" />
                ))}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.name[0]}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-location">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Reviews;
