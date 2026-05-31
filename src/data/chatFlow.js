export const QUICK_REPLIES = [
  { label: 'Buy a home', value: 'buy' },
  { label: 'Rent property', value: 'rent' },
  { label: 'Schedule viewing', value: 'viewing' },
];

export const INTENT_RESPONSES = {
  buy: "Wonderful! We have luxury homes, family residences, and investment properties across 12 cities. I'll connect you with an agent who specializes in buyers.",
  rent: "Great — we manage premium rentals from downtown lofts to suburban homes. Let me get your details so an agent can send matching listings.",
  viewing: "Perfect! I can help you book a property tour. Our agents are available 7 days a week — let me grab your info to confirm a slot.",
  default: "I'd love to help! Whether you're buying, renting, or just exploring — our team can guide you. What are you looking for?",
};

export const LEAD_STAGES = {
  GREETING: 'greeting',
  INTENT: 'intent',
  NAME: 'name',
  EMAIL: 'email',
  LOCATION: 'location',
  COMPLETE: 'complete',
};

export const BOT_MESSAGES = {
  greeting:
    "Welcome to Skyline Estates! 🏡 I'm your property assistant. Looking to buy, rent, or schedule a viewing? I'm here to help.",
  askName: "Great! What's your name?",
  askEmail: (name) => `Nice to meet you, ${name}! What's the best email to send listings and updates to?`,
  askLocation: "Which city or neighborhood are you interested in? (Type 'skip' if you're still exploring)",
  complete: (name) =>
    `Thank you, ${name}! A Skyline agent will reach out within 24 hours with properties matched to your needs. Your inquiry is saved on our leads dashboard.`,
  invalidEmail: "That email doesn't look right — could you double-check and try again?",
  fallback: "Thanks for reaching out! Ask about listings, rentals, or book a viewing anytime.",
};

export function scoreLead(intent, location) {
  let score = 50;
  if (intent === 'buy') score += 25;
  if (intent === 'viewing') score += 30;
  if (intent === 'rent') score += 15;
  if (location && location.toLowerCase() !== 'skip') score += 10;
  return Math.min(score, 100);
}

export function getIntentFromMessage(text) {
  const lower = text.toLowerCase();
  if (lower.includes('buy') || lower.includes('purchase') || lower.includes('own')) return 'buy';
  if (lower.includes('rent') || lower.includes('lease') || lower.includes('tenant')) return 'rent';
  if (lower.includes('view') || lower.includes('tour') || lower.includes('visit') || lower.includes('see')) return 'viewing';
  return 'default';
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
