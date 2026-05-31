import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { images } from '../../data/images';
import './CTA.css';

export default function CTA({ onOpenChat }) {
  return (
    <section className="cta-container" id="contact">
      <motion.div
        className="cta-inner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(250,80,66,0.92) 0%, rgba(255,167,57,0.88) 100%), url(${images.ctaBg})`,
        }}
      >
        <div className="cta-text">
          <span className="cta-label">Ready to move?</span>
          <h2>
            START YOUR
            <br />
            <span className="stroke-text">HOME SEARCH</span>
          </h2>
          <p>
            Chat with our assistant now — tell us what you are looking for and we will capture
            your inquiry and match you with an agent today.
          </p>
        </div>
        <button className="btn cta-btn" onClick={onOpenChat}>
          <MessageCircle size={20} />
          Chat With an Agent
        </button>
      </motion.div>
    </section>
  );
}
