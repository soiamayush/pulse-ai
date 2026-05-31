import { testimonialAvatars } from './images';

export const featuresData = [
  {
    icon: 'home',
    title: 'Premium Listings',
    desc: 'Hand-picked homes, penthouses, and estates — updated daily with virtual tours and floor plans.',
  },
  {
    icon: 'map',
    title: '12 City Locations',
    desc: 'From downtown lofts to suburban family homes across major metros in the US and Canada.',
  },
  {
    icon: 'key',
    title: 'Buy · Rent · Invest',
    desc: 'Whether you are a first-time buyer or seasoned investor, we match you with the right property.',
  },
  {
    icon: 'headphones',
    title: '24/7 AI Assistant',
    desc: 'Our chat assistant answers questions instantly and captures your inquiry — even at midnight.',
  },
  {
    icon: 'building',
    title: 'Expert Agents',
    desc: '150+ licensed agents with deep local knowledge. Every lead goes straight to the right specialist.',
  },
  {
    icon: 'shield',
    title: 'Trusted Since 2018',
    desc: '850+ families helped. Transparent process, zero hidden fees, and full support until closing.',
  },
];

export const stepsData = [
  {
    num: '01',
    title: 'Browse Properties',
    desc: 'Explore featured listings with photos, pricing, and neighborhood insights on our site.',
  },
  {
    num: '02',
    title: 'Chat With Us',
    desc: 'Ask our AI assistant anything — budget, location, timeline. No forms, just conversation.',
  },
  {
    num: '03',
    title: 'Get Matched',
    desc: 'We capture your details and route you to an agent with listings tailored to your needs.',
  },
  {
    num: '04',
    title: 'Close Your Deal',
    desc: 'Schedule viewings, make offers, and move in. Your agent stays with you every step.',
  },
];

export const listingsData = [
  {
    name: 'Downtown Loft',
    price: '485',
    period: 'K',
    features: ['2 bed · 2 bath', '1,200 sq ft', 'City views', 'Parking included'],
    highlighted: false,
  },
  {
    name: 'Family Residence',
    price: '620',
    period: 'K',
    features: ['4 bed · 3 bath', '2,400 sq ft', 'Top school district', 'Large backyard'],
    highlighted: true,
  },
  {
    name: 'Luxury Penthouse',
    price: '1.2',
    period: 'M',
    features: ['3 bed · 3 bath', '3,100 sq ft', 'Rooftop terrace', 'Concierge building'],
    highlighted: false,
  },
];

export const testimonialsData = [
  {
    name: 'Sarah Chen',
    role: 'Home Buyer, Austin TX',
    text: 'I found my dream home in two weeks. The chat assistant answered my questions at 11pm and an agent called me the next morning with perfect matches.',
    avatar: testimonialAvatars.sarah,
  },
  {
    name: 'Marcus Rivera',
    role: 'First-Time Buyer, Denver CO',
    text: 'No more endless contact forms. I told the chatbot what I wanted and had three viewings booked by Friday. Smooth from start to finish.',
    avatar: testimonialAvatars.marcus,
  },
  {
    name: 'Emily Watson',
    role: 'Investor, Miami FL',
    text: 'Skyline helped me close on two rental properties. The team understood my ROI goals and only sent listings that made sense.',
    avatar: testimonialAvatars.emily,
  },
];

export const statsData = [
  { value: '850+', label: 'Homes Sold' },
  { value: '12', label: 'Cities' },
  { value: '24/7', label: 'AI Support' },
  { value: '4.9★', label: 'Client Rating' },
];
