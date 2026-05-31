import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { listingsData } from '../../data/siteData';
import '../Plans/Plans.css';

export default function Listings() {
  return (
    <section className="plans-container" id="listings">
      <div className="section-heading">
        <span>Featured Listings</span>
        <div>
          Find Your <span className="stroke-text">Match</span>
        </div>
        <span>Hand-picked properties available now. Chat with us to schedule a private viewing.</span>
      </div>

      <div className="plans">
        {listingsData.map((listing, i) => (
          <motion.div
            key={listing.name}
            className={`plan ${listing.highlighted ? 'plan-highlighted' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <Check size={24} />
            <span className="plan-name">{listing.name}</span>
            <div className="plan-price">
              <small>$</small>
              {listing.price}
              <small>{listing.period}</small>
            </div>
            <div className="plan-features">
              {listing.features.map((f) => (
                <div key={f} className="plan-feature">
                  <Check size={14} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button className="btn plan-btn">
              {listing.highlighted ? 'Schedule Viewing' : 'View Details'}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="blur plans-blur-1" />
      <div className="blur plans-blur-2" />
    </section>
  );
}
