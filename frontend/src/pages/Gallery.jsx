import { useState, useEffect } from 'react';
import './Gallery.css';

const DEFAULT_GALLERY = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/seed/weld${i + 10}/600/400`,
}));

const Gallery = () => {
  const [images, setImages] = useState(() => {
    try {
      const stored = localStorage.getItem('ti_gallery');
      return stored ? JSON.parse(stored) : DEFAULT_GALLERY;
    } catch { return DEFAULT_GALLERY; }
  });

  const [lightbox, setLightbox] = useState(null);

  // Re-sync if admin makes changes in another tab
  useEffect(() => {
    const onStorage = () => {
      try {
        const stored = localStorage.getItem('ti_gallery');
        if (stored) setImages(JSON.parse(stored));
      } catch {}
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">Our Work</span>
          <h1>Our <span>Gallery</span></h1>
          <p>A glimpse of our craftsmanship and completed projects</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="gallery-grid">
            {images.map((img) => (
              <div className="gallery-item" key={img.id} onClick={() => setLightbox(img.imageUrl)}>
                <img src={img.imageUrl} alt={`Project ${img.id}`} loading="lazy" />
                <div className="gallery-overlay"><span>View</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Full view" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
