import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faTrash, faEdit, faSignOutAlt,
  faCog, faImages, faTimes, faCheck, faSave, faFire
} from '@fortawesome/free-solid-svg-icons';
import './AdminDashboard.css';

// Default services (used if localStorage is empty)
const DEFAULT_SERVICES = [
  { id: 1, name: 'Arc Welding',       description: 'High-strength arc welding for structural and industrial applications.', imageUrl: '' },
  { id: 2, name: 'MIG Welding',        description: 'Metal Inert Gas welding for clean, precise welds on thin to medium thickness metals.', imageUrl: '' },
  { id: 3, name: 'TIG Welding',        description: 'Tungsten Inert Gas welding for high-precision welds on stainless steel and aluminium.', imageUrl: '' },
  { id: 4, name: 'Metal Fabrication',  description: 'Custom metal fabrication — cutting, bending, and assembling structures.', imageUrl: '' },
  { id: 5, name: 'Gate & Grill Works', description: 'Decorative and security gates, window grills, and railings.', imageUrl: '' },
  { id: 6, name: 'Roof Works',         description: 'Metal roofing structures and industrial roofing solutions.', imageUrl: '' },
];

const DEFAULT_GALLERY = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/seed/weld${i + 10}/600/400`,
}));

const load = (key, fallback) => {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch { return fallback; }
};

const save = (key, val) => localStorage.setItem(key, JSON.stringify(val));

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('services');

  const [services, setServices] = useState(() => load('ti_services', DEFAULT_SERVICES));
  const [gallery, setGallery]   = useState(() => load('ti_gallery',  DEFAULT_GALLERY));

  // Service form
  const [svcForm, setSvcForm] = useState({ name: '', description: '', imageUrl: '' });
  const [editId, setEditId]   = useState(null);

  // Gallery input
  const [galleryUrl, setGalleryUrl] = useState('');

  const [msg, setMsg] = useState(null);
  const nextId = useRef(Date.now());

  const showMsg = (text, type = 'success') => {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 3000);
  };

  // Persist on change
  useEffect(() => save('ti_services', services), [services]);
  useEffect(() => save('ti_gallery',  gallery),  [gallery]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    onLogout();
    navigate('/admin');
  };

  /* ---- SERVICE CRUD ---- */
  const handleSvcSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setServices(services.map(s => s.id === editId ? { ...s, ...svcForm } : s));
      showMsg('Service updated!');
      setEditId(null);
    } else {
      setServices([...services, { id: nextId.current++, ...svcForm }]);
      showMsg('Service added!');
    }
    setSvcForm({ name: '', description: '', imageUrl: '' });
  };

  const startEdit = (s) => {
    setSvcForm({ name: s.name, description: s.description, imageUrl: s.imageUrl || '' });
    setEditId(s.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditId(null);
    setSvcForm({ name: '', description: '', imageUrl: '' });
  };

  const deleteSvc = (id) => {
    if (!window.confirm('Delete this service?')) return;
    setServices(services.filter(s => s.id !== id));
    showMsg('Service deleted!');
  };

  /* ---- GALLERY CRUD ---- */
  const handleGalleryAdd = (e) => {
    e.preventDefault();
    if (!galleryUrl.trim()) return;
    setGallery([...gallery, { id: nextId.current++, imageUrl: galleryUrl.trim() }]);
    setGalleryUrl('');
    showMsg('Image added!');
  };

  const deleteImg = (id) => {
    if (!window.confirm('Delete this image?')) return;
    setGallery(gallery.filter(g => g.id !== id));
    showMsg('Image deleted!');
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <FontAwesomeIcon icon={faFire} className="sidebar-fire" />
          <span>Admin Panel</span>
        </div>
        <nav className="sidebar-nav">
          <button className={tab === 'services' ? 'active' : ''} onClick={() => setTab('services')}>
            <FontAwesomeIcon icon={faCog} /> <span>Services</span>
          </button>
          <button className={tab === 'gallery' ? 'active' : ''} onClick={() => setTab('gallery')}>
            <FontAwesomeIcon icon={faImages} /> <span>Gallery</span>
          </button>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </button>
      </aside>

      {/* Main */}
      <main className="admin-main">
        {/* Toast */}
        {msg && (
          <div className={`admin-toast ${msg.type}`}>
            <FontAwesomeIcon icon={msg.type === 'success' ? faCheck : faTimes} />
            &nbsp;{msg.text}
          </div>
        )}

        {/* ---- SERVICES ---- */}
        {tab === 'services' && (
          <div>
            <h2 className="admin-title">
              <FontAwesomeIcon icon={faCog} /> Manage Services
            </h2>

            <form onSubmit={handleSvcSubmit} className="admin-form">
              <div className="form-row">
                <div className="admin-field">
                  <label>Service Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Arc Welding"
                    value={svcForm.name}
                    onChange={(e) => setSvcForm({ ...svcForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label>Image URL (optional)</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={svcForm.imageUrl}
                    onChange={(e) => setSvcForm({ ...svcForm, imageUrl: e.target.value })}
                  />
                </div>
              </div>
              <div className="admin-field">
                <label>Description *</label>
                <textarea
                  placeholder="Short description of the service..."
                  value={svcForm.description}
                  onChange={(e) => setSvcForm({ ...svcForm, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  <FontAwesomeIcon icon={editId ? faSave : faPlus} />
                  &nbsp;{editId ? 'Update Service' : 'Add Service'}
                </button>
                {editId && (
                  <button type="button" className="btn btn-cancel" onClick={cancelEdit}>
                    <FontAwesomeIcon icon={faTimes} /> Cancel
                  </button>
                )}
              </div>
            </form>

            <div className="admin-list">
              {services.length === 0 && <p className="empty-msg">No services yet. Add one above.</p>}
              {services.map((s) => (
                <div className="admin-list-item" key={s.id}>
                  {s.imageUrl && <img src={s.imageUrl} alt={s.name} className="list-thumb" />}
                  <div className="list-info">
                    <div className="list-name">{s.name}</div>
                    <div className="list-desc">{s.description}</div>
                  </div>
                  <div className="list-actions">
                    <button className="icon-btn edit" onClick={() => startEdit(s)} title="Edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="icon-btn delete" onClick={() => deleteSvc(s.id)} title="Delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---- GALLERY ---- */}
        {tab === 'gallery' && (
          <div>
            <h2 className="admin-title">
              <FontAwesomeIcon icon={faImages} /> Manage Gallery
            </h2>

            <form onSubmit={handleGalleryAdd} className="admin-form">
              <div className="admin-field">
                <label>Image URL *</label>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={galleryUrl}
                  onChange={(e) => setGalleryUrl(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faPlus} /> &nbsp;Add Image
              </button>
            </form>

            <div className="gallery-admin-grid">
              {gallery.length === 0 && <p className="empty-msg">No images yet.</p>}
              {gallery.map((img) => (
                <div className="gallery-admin-item" key={img.id}>
                  <img src={img.imageUrl} alt="gallery" />
                  <button className="gallery-del-btn" onClick={() => deleteImg(img.id)} title="Delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
