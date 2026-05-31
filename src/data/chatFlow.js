export const QUICK_REPLIES = [
  { label: 'Get a demo', value: 'demo' },
  { label: 'Pricing info', value: 'pricing' },
  { label: 'Talk to sales', value: 'sales' },
];

export const INTENT_RESPONSES = {
  demo: "Great choice! Our AI chatbot demo shows real-time lead capture in action. I'd love to set that up for you — it only takes a minute.",
  pricing: "Our plans start at $49/mo for startups and scale to enterprise. Most clients choose Growth at $149/mo for LangChain customization and CRM sync.",
  sales: "Perfect — I'll connect you with our team. They typically respond within 2 hours during business days.",
  default: "That's a great question! PulseAI uses LangChain for intelligent conversations and FastAPI for blazing-fast responses. I can help you find the right fit.",
};

export const LEAD_STAGES = {
  GREETING: 'greeting',
  INTENT: 'intent',
  VALUE: 'value',
  NAME: 'name',
  EMAIL: 'email',
  COMPANY: 'company',
  COMPLETE: 'complete',
};

export const BOT_MESSAGES = {
  greeting: "Hey there! 👋 I'm Pulse, your AI assistant powered by LangChain. I help businesses capture leads through smart conversations. What brings you here today?",
  askName: "Awesome! Before we go further, what's your name?",
  askEmail: (name) => `Nice to meet you, ${name}! What's the best email to reach you at?`,
  askCompany: "And which company are you with? (Optional — just type 'skip' if you'd rather not say)",
  complete: (name) =>
    `You're all set, ${name}! 🎉 Our team will reach out shortly. In the meantime, feel free to explore our site. Your info has been saved to the leads dashboard.`,
  invalidEmail: "Hmm, that doesn't look like a valid email. Could you double-check and try again?",
};

export function scoreLead(intent, company) {
  let score = 50;
  if (intent === 'sales') score += 30;
  if (intent === 'demo') score += 20;
  if (intent === 'pricing') score += 15;
  if (company && company.toLowerCase() !== 'skip') score += 10;
  return Math.min(score, 100);
}

export function getIntentFromMessage(text) {
  const lower = text.toLowerCase();
  if (lower.includes('demo') || lower.includes('show') || lower.includes('see')) return 'demo';
  if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) return 'pricing';
  if (lower.includes('sales') || lower.includes('talk') || lower.includes('call')) return 'sales';
  return 'default';
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
