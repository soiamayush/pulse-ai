import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { plansData } from '../../data/siteData';
import './Plans.css';

export default function Plans() {
  return (
    <section className="plans-container" id="plans">
      <div className="section-heading">
        <span>Flexible Pricing</span>
        <div>
          Pick Your <span className="stroke-text">Plan</span>
        </div>
        <span>Start free, scale as you grow. Every plan includes core lead capture and AI chat.</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`plan ${plan.highlighted ? 'plan-highlighted' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <Check size={24} />
            <span className="plan-name">{plan.name}</span>
            <div className="plan-price">
              {plan.price !== 'Custom' && <small>$</small>}
              {plan.price}
              <small>{plan.period}</small>
            </div>
            <div className="plan-features">
              {plan.features.map((f) => (
                <div key={f} className="plan-feature">
                  <Check size={14} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button className="btn plan-btn">{plan.highlighted ? 'Get Started' : 'Choose Plan'}</button>
          </motion.div>
        ))}
      </div>

      <div className="blur plans-blur-1" />
      <div className="blur plans-blur-2" />
    </section>
  );
}
