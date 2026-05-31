import { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { BRAND } from '../../data/brand';
import './Header.css';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'features', label: 'Properties' },
  { to: 'how-it-works', label: 'How It Works' },
  { to: 'listings', label: 'Listings' },
  { to: 'testimonials', label: 'Reviews' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <header className="header">
      <div className="header-logo">
        <Building2 size={28} color="#f48915" strokeWidth={2.5} />
        <span>
          {BRAND.name}{' '}
          <span className="logo-accent">{BRAND.suffix}</span>
        </span>
      </div>

      {isMobile && !menuOpen ? (
        <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={24} color="white" />
        </button>
      ) : (
        <nav className="header-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy
              smooth
              offset={-80}
              onClick={() => setMenuOpen(false)}
              activeClass="active"
            >
              {label}
            </Link>
          ))}
          <RouterLink to="/dashboard" className="header-dashboard" onClick={() => setMenuOpen(false)}>
            Leads
          </RouterLink>
          {isMobile && (
            <button className="menu-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={24} color="white" />
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
