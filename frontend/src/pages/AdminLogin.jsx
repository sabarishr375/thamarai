import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faFire } from '@fortawesome/free-solid-svg-icons';
import './AdminLogin.css';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'thamarai@2024';

const AdminLogin = ({ onLogin }) => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (creds.username === ADMIN_USER && creds.password === ADMIN_PASS) {
      sessionStorage.setItem('admin_auth', 'true');
      onLogin();
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="admin-login">
      <div className="login-card">
        <div className="login-header">
          <FontAwesomeIcon icon={faFire} className="login-fire" />
          <h2>Admin Login</h2>
          <p>Thamarai Industries</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <FontAwesomeIcon icon={faUser} className="field-icon" />
            <input
              type="text"
              value={creds.username}
              onChange={(e) => setCreds({ ...creds, username: e.target.value })}
              placeholder="Username"
              required
            />
          </div>
          <div className="login-field">
            <FontAwesomeIcon icon={faLock} className="field-icon" />
            <input
              type="password"
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
