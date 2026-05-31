import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Bot size={24} color="#f48915" />
          <span>
            Pulse<span className="logo-accent">AI</span>
          </span>
        </div>
        <p>Intelligent lead capture powered by FastAPI & LangChain.</p>
      </div>
      <div className="footer-links">
        <Link to="/dashboard">Leads Dashboard</Link>
        <a href="#features">Features</a>
        <a href="#plans">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} PulseAI. Frontend showcase demo.</span>
      </div>
    </footer>
  );
}
