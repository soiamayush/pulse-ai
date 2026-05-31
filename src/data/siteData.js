export const featuresData = [
  {
    icon: 'brain',
    title: 'LangChain AI Engine',
    desc: 'Multi-step reasoning chains that understand intent, qualify leads, and respond naturally.',
  },
  {
    icon: 'zap',
    title: 'FastAPI Backend',
    desc: 'Lightning-fast async API endpoints with real-time streaming chat responses.',
  },
  {
    icon: 'target',
    title: 'Smart Lead Scoring',
    desc: 'Automatically scores and tags leads based on conversation signals and buyer intent.',
  },
  {
    icon: 'message',
    title: '24/7 Engagement',
    desc: 'Never miss a lead — your AI assistant works around the clock on every page.',
  },
  {
    icon: 'database',
    title: 'CRM Integration Ready',
    desc: 'Export leads to HubSpot, Salesforce, or any webhook endpoint instantly.',
  },
  {
    icon: 'shield',
    title: 'Enterprise Security',
    desc: 'End-to-end encryption, GDPR compliant data handling, and role-based access.',
  },
];

export const stepsData = [
  {
    num: '01',
    title: 'Embed Widget',
    desc: 'Drop a single script tag on your site. The chat widget loads in under 200ms.',
  },
  {
    num: '02',
    title: 'AI Converses',
    desc: 'LangChain-powered agent greets visitors, answers questions, and builds rapport.',
  },
  {
    num: '03',
    title: 'Capture Leads',
    desc: 'Collects name, email, and intent through natural conversation — not boring forms.',
  },
  {
    num: '04',
    title: 'Sync & Close',
    desc: 'Leads flow to your dashboard and CRM. Your team follows up while interest is hot.',
  },
];

export const plansData = [
  {
    name: 'Starter',
    price: '49',
    period: '/mo',
    features: ['1 chatbot', '500 conversations/mo', 'Basic lead capture', 'Email notifications'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '149',
    period: '/mo',
    features: [
      '3 chatbots',
      '5,000 conversations/mo',
      'LangChain custom prompts',
      'CRM webhooks',
      'Lead scoring',
      'Analytics dashboard',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited chatbots',
      'Unlimited conversations',
      'Dedicated FastAPI instance',
      'Custom AI training',
      'SLA & priority support',
      'White-label option',
    ],
    highlighted: false,
  },
];

import { testimonialAvatars } from './images';

export const testimonialsData = [
  {
    name: 'Sarah Chen',
    role: 'VP Marketing, TechFlow',
    text: 'PulseAI tripled our inbound leads in the first month. The conversational flow feels genuinely human.',
    avatar: testimonialAvatars.sarah,
  },
  {
    name: 'Marcus Rivera',
    role: 'Founder, ScaleUp SaaS',
    text: 'We replaced three form pages with one chat widget. Conversion rate jumped from 2% to 11%.',
    avatar: testimonialAvatars.marcus,
  },
  {
    name: 'Emily Watson',
    role: 'Sales Director, CloudBase',
    text: 'The LangChain integration lets us customize exactly how the bot qualifies enterprise leads.',
    avatar: testimonialAvatars.emily,
  },
];

export const statsData = [
  { value: '3.2x', label: 'More Leads' },
  { value: '89%', label: 'Response Rate' },
  { value: '24/7', label: 'Availability' },
  { value: '<2s', label: 'Avg Response' },
];
