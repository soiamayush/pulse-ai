import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/siteData';
import './Testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonialsData[index];

  const next = () => setIndex((i) => (i + 1) % testimonialsData.length);
  const prev = () => setIndex((i) => (i - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="testimonials-container" id="testimonials">
      <div className="section-heading">
        <span>Client Stories</span>
        <div>
          What They <span className="stroke-text">Say</span>
        </div>
      </div>

      <div className="testimonial-wrapper">
        <button className="testimonial-nav" onClick={prev} aria-label="Previous">
          <ChevronLeft size={24} color="white" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="testimonial-photo-wrap">
              <img
                src={t.avatar}
                alt={t.name}
                className="testimonial-photo"
                width={280}
                height={340}
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="testimonial-content">
              <Quote size={28} color="#ff9f2e" />
              <p>"{t.text}"</p>
              <div className="testimonial-author">
                <img
                  src={t.avatar}
                  alt=""
                  className="author-thumb"
                  width={52}
                  height={52}
                  aria-hidden="true"
                />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="testimonial-nav" onClick={next} aria-label="Next">
          <ChevronRight size={24} color="white" />
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonialsData.map((item, i) => (
          <button
            key={item.name}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
