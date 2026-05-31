import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../data/brand';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Building2 size={24} color="#f48915" />
          <span>
            {BRAND.name}{' '}
            <span className="logo-accent">{BRAND.suffix}</span>
          </span>
        </div>
        <p>Premium real estate across 12 cities. Buy, rent, or invest with expert agents.</p>
      </div>
      <div className="footer-links">
        <Link to="/dashboard">Agent Leads</Link>
        <a href="#features">Properties</a>
        <a href="#listings">Listings</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} {BRAND.name} {BRAND.suffix}. All rights reserved.</span>
      </div>
    </footer>
  );
}
