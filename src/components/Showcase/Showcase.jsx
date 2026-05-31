import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { images } from '../../data/images';
import './Showcase.css';

const points = [
  'Real-time AI conversations that feel human',
  'Automatic lead scoring & CRM sync',
  'Custom LangChain prompts for your brand voice',
  'Deploy in minutes with a single script tag',
];

export default function Showcase() {
  return (
    <section className="showcase-container">
      <motion.div
        className="showcase-image"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <img src={images.showcase} alt="Team collaborating with AI chatbot" loading="lazy" />
        <div className="showcase-image-badge">AI-Powered</div>
      </motion.div>

      <motion.div
        className="showcase-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="showcase-label">The Smart Way</span>
        <h2>
          Turn Visitors Into
          <br />
          <span className="stroke-text">Qualified Leads</span>
        </h2>
        <p>
          Stop losing prospects to static contact forms. PulseAI engages every visitor with
          intelligent, context-aware conversations — then routes hot leads straight to your team.
        </p>
        <ul className="showcase-list">
          {points.map((point) => (
            <li key={point}>
              <CheckCircle2 size={20} color="#ff9f2e" strokeWidth={2.5} />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="blur showcase-blur" />
    </section>
  );
}
