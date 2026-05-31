import { motion } from 'framer-motion';
import { stepsData } from '../../data/siteData';
import { stepImages, images } from '../../data/images';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="how-container" id="how-it-works">
      <div className="section-heading">
        <span>Simple Setup</span>
        <div>
          How It <span className="stroke-text">Works</span>
        </div>
        <span>From zero to capturing leads in under 10 minutes. No complex configuration required.</span>
      </div>

      <div className="how-banner">
        <img src={images.dashboard} alt="Analytics dashboard preview" loading="lazy" />
        <div className="how-banner-overlay">
          <span>Live Dashboard Preview</span>
        </div>
      </div>

      <div className="steps">
        {stepsData.map((step, i) => (
          <motion.div
            key={step.num}
            className="step-card"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <img src={stepImages[i]} alt={step.title} className="step-image" loading="lazy" />
            <div className="step-body">
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="tech-stack">
        <span>Tech Stack</span>
        <div className="tech-badges">
          <span className="tech-badge">FastAPI</span>
          <span className="tech-badge">LangChain</span>
          <span className="tech-badge">OpenAI</span>
          <span className="tech-badge">WebSockets</span>
          <span className="tech-badge">PostgreSQL</span>
          <span className="tech-badge">Redis</span>
        </div>
      </div>

      <div className="blur how-blur" />
    </section>
  );
}
