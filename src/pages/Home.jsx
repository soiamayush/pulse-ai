import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Showcase from '../components/Showcase/Showcase';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Plans from '../components/Plans/Plans';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import { openChatWidget } from '../components/ChatWidget/ChatWidget';

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Showcase />
      <HowItWorks />
      <Plans />
      <Testimonials />
      <CTA onOpenChat={openChatWidget} />
      <Footer />
    </div>
  );
}
