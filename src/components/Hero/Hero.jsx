import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { MessageCircle, Cpu, Users, Sparkles } from 'lucide-react';
import Header from '../Header/Header';
import { statsData } from '../../data/siteData';
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
            <span>Powered by FastAPI & LangChain</span>
          </motion.div>

          <div className="hero-text">
            <motion.div
              initial={isMobile ? { opacity: 0, y: 20 } : { left: '-200%' }}
              animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
              transition={{ ...transition, delay: 0.4 }}
            >
              Capture
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: 0.6 }}
            >
              Every <span className="stroke-text">Lead</span>
            </motion.div>
            <motion.div
              initial={isMobile ? { opacity: 0, y: 20 } : { left: '200%' }}
              animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
              transition={{ ...transition, delay: 0.8 }}
            >
              With AI That Never Sleeps
            </motion.div>
            <motion.div
              className="hero-subtitle"
              initial={isMobile ? { opacity: 0, y: 20 } : { left: '-200%' }}
              animate={isMobile ? { opacity: 1, y: 0 } : { left: '0' }}
              transition={{ ...transition, delay: 1 }}
            >
              Deploy an intelligent chatbot that qualifies visitors, answers questions, and
              converts conversations into qualified leads — automatically.
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
            <Link to="plans" spy smooth offset={-80} className="btn btn-primary">
              Get Started
            </Link>
            <Link to="how-it-works" spy smooth offset={-80} className="btn btn-outline">
              See How It Works
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
              <span>PulseAI Chat</span>
              <span className="preview-badge">Live</span>
            </div>
            <div className="preview-messages">
              <div className="preview-msg bot">
                <Sparkles size={14} />
                Hey! I'm Pulse. How can I help you today?
              </div>
              <div className="preview-msg user">I'd like to see a demo</div>
              <div className="preview-msg bot">
                <Sparkles size={14} />
                Perfect! Let me capture your details to set that up...
              </div>
              <div className="preview-typing">
                <span /><span /><span />
              </div>
            </div>
            <div className="preview-input">
              <span>Type a message...</span>
              <MessageCircle size={18} color="#ff9f2e" />
            </div>
          </motion.div>

          <motion.div
            className="metric-card metric-responses"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Cpu size={24} color="#ff9f2e" />
            <div>
              <span>Response Time</span>
              <span>1.8s avg</span>
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
              <span>Leads Today</span>
              <span>+47</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="blur hero-blur" />
    </section>
  );
}
