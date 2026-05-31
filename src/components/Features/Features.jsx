import { motion } from 'framer-motion';
import { Home, MapPin, Key, Headphones, Building2, ShieldCheck } from 'lucide-react';
import { featuresData } from '../../data/siteData';
import { featureImages } from '../../data/images';
import './Features.css';

const iconMap = {
  home: Home,
  map: MapPin,
  key: Key,
  headphones: Headphones,
  building: Building2,
  shield: ShieldCheck,
};

export default function Features() {
  return (
    <section className="features-container" id="features">
      <div className="section-heading">
        <span>Why Skyline Estates</span>
        <div>
          Properties Built For <span className="stroke-text">Living</span>
        </div>
        <span>From first-time buyers to seasoned investors — we make finding the right home simple.</span>
      </div>

      <div className="features-grid">
        {featuresData.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="feature-image-wrap">
                <img src={featureImages[feature.icon]} alt={feature.title} loading="lazy" />
                <div className="feature-image-overlay" />
                <Icon size={24} color="#ffffff" strokeWidth={2.5} className="feature-icon" />
              </div>
              <div className="feature-body">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="blur features-blur" />
    </section>
  );
}
