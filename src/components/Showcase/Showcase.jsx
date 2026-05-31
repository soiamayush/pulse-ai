import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { images } from '../../data/images';
import './Showcase.css';

const points = [
  'Browse 200+ active listings with photos & virtual tours',
  'Chat with our AI assistant — no forms, just conversation',
  'Get matched with a local agent within 24 hours',
  'Buy, rent, or invest — we handle the full journey',
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
        <img src={images.showcase} alt="Modern luxury home exterior" loading="lazy" />
        <div className="showcase-image-badge">Featured Property</div>
      </motion.div>

      <motion.div
        className="showcase-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="showcase-label">Your Next Chapter</span>
        <h2>
          More Than
          <br />
          <span className="stroke-text">A Home</span>
        </h2>
        <p>
          Skyline Estates pairs premium properties with smart lead capture — so every visitor
          who asks a question becomes a qualified inquiry on your agent dashboard.
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
