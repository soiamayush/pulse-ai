import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Showcase from '../components/Showcase/Showcase';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Listings from '../components/Listings/Listings';
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
      <Listings />
      <Testimonials />
      <CTA onOpenChat={openChatWidget} />
      <Footer />
    </div>
  );
}
