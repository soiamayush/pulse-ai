import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { MessageCircle, Clock, Users, Sparkles } from 'lucide-react';
import Header from '../Header/Header';
import { statsData } from '../../data/siteData';
import { BRAND } from '../../data/brand';
import './Hero.css';

const transition = { type: 'spring', duration: 3 };

export default function Hero() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="hero" id="home">
      <Header />

      <div className="hero-body">
        <div className="left-h">
          <motion.div
            className="the-best-ad"
            initial={isMobile ? { opacity: 0, y: 20 } : { left: '-100%' }}
            animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
            transition={{ ...transition, delay: 0.2 }}
          >
            <div />
            <span>{BRAND.tagline}</span>
          </motion.div>

          <div className="hero-text">
            <motion.div
              initial={isMobile ? { opacity: 0, y: 20 } : { left: '-200%' }}
              animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
              transition={{ ...transition, delay: 0.4 }}
            >
              Find Your
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: 0.6 }}
            >
              Dream <span className="stroke-text">Home</span>
            </motion.div>
            <motion.div
              initial={isMobile ? { opacity: 0, y: 20 } : { left: '200%' }}
              animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
              transition={{ ...transition, delay: 0.8 }}
            >
              With Expert Guidance
            </motion.div>
            <motion.div
              className="hero-subtitle"
              initial={isMobile ? { opacity: 0, y: 20 } : { left: '-200%' }}
              animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
              transition={{ ...transition, delay: 1 }}
            >
              Luxury homes, family residences, and investment properties across 12 cities.
              Chat with our assistant anytime — we capture your inquiry and match you with the right agent.
            </motion.div>
          </div>

          <motion.div
            className="figures"
            initial={isMobile ? { opacity: 0, y: 20 } : { left: '-200%' }}
            animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
            transition={{ ...transition, delay: 1.2 }}
          >
            {statsData.map(({ value, label }) => (
              <div key={label}>
                <span>{value}</span>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={isMobile ? { opacity: 0, y: 20 } : { left: '-200%' }}
            animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
            transition={{ ...transition, delay: 1.4 }}
          >
            <Link to="listings" spy smooth offset={-80} className="btn btn-primary">
              View Listings
            </Link>
            <Link to="features" spy smooth offset={-80} className="btn btn-outline">
              Explore Properties
            </Link>
          </motion.div>
        </div>

        <div className="right-h">
          <motion.div
            className="hero-chat-preview"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.5 }}
          >
            <div className="preview-header">
              <div className="preview-dots">
                <span /><span /><span />
              </div>
              <span>{BRAND.assistantName}</span>
              <span className="preview-badge">Live</span>
            </div>
            <div className="preview-messages">
              <div className="preview-msg bot">
                <Sparkles size={14} />
                Welcome! Looking to buy, rent, or schedule a viewing?
              </div>
              <div className="preview-msg user">I want to buy a home in Austin</div>
              <div className="preview-msg bot">
                <Sparkles size={14} />
                Great choice! Let me connect you with an agent...
              </div>
              <div className="preview-typing">
                <span /><span /><span />
              </div>
            </div>
            <div className="preview-input">
              <span>Your name...</span>
              <MessageCircle size={18} color="#ff9f2e" />
            </div>
          </motion.div>

          <motion.div
            className="metric-card metric-responses"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Clock size={24} color="#ff9f2e" />
            <div>
              <span>Response Time</span>
              <span>Under 2 min</span>
            </div>
          </motion.div>

          <motion.div
            className="metric-card metric-leads"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Users size={24} color="#ff9f2e" />
            <div>
              <span>Inquiries Today</span>
              <span>+23</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="blur hero-blur" />
    </section>
  );
}
