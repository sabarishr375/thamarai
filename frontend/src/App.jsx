import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Location from './pages/Location';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

// Wrapper so we can hide Navbar/Footer on admin pages
const Layout = ({ isAdmin, setIsAdmin }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="page-wrapper">
      {!isAdminRoute && <Navbar />}
      <main className={isAdminRoute ? '' : 'main-content'}>
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<About />} />
          <Route path="/services"        element={<Services />} />
          <Route path="/gallery"         element={<Gallery />} />
          <Route path="/reviews"         element={<Reviews />} />
          <Route path="/location"        element={<Location />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/admin"           element={<AdminLogin onLogin={() => setIsAdmin(true)} />} />
          <Route path="/admin/dashboard" element={
            isAdmin || sessionStorage.getItem('admin_auth') === 'true'
              ? <AdminDashboard onLogout={() => setIsAdmin(false)} />
              : <AdminLogin onLogin={() => setIsAdmin(true)} />
          } />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

function App() {
  const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem('admin_auth') === 'true');

  return (
    <BrowserRouter>
      <Layout isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
    </BrowserRouter>
  );
}

export default App;
