# PulseAI — Lead Capture AI Chatbot (Frontend Showcase)

A stunning frontend demo for a **FastAPI + LangChain lead capture chatbot** gig. UI inspired by the [FitClub gym website](https://gym-site-project.pages.dev/) — dark theme, orange accents, framer-motion animations, and bold typography.

> **Frontend only** — no backend required. Chat responses are simulated; captured leads are stored in `localStorage` for demo purposes.

## Features

- **Landing page** — Hero, features, how-it-works, pricing, testimonials, CTA
- **AI chat widget** — Floating chatbot with typing indicators, quick replies, and conversational lead capture (name → email → company)
- **Leads dashboard** — View captured leads with intent scoring and status management
- **Gym-inspired design** — Dark `#3c3f45` background, `#f48915` orange accents, gradient cards, blur effects, stroke text

## Quick Start

```powershell
cd D:\programming\fiverr\fiverr_proj_show\pulse-ai-lead-capture
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with live chat widget |
| `/dashboard` | Leads captured from the chatbot |

## Tech Stack

- React 18 + Vite
- Framer Motion (animations)
- React Router DOM
- React Scroll (smooth nav)
- Lucide React (icons)

## For Fiverr Gig

This project showcases the **frontend/UI layer** of a lead capture AI chatbot built with FastAPI & LangChain. The chat widget demonstrates:

1. Natural conversational flow
2. Intent detection (demo, pricing, sales)
3. Lead data collection through chat
4. Lead scoring and dashboard

Connect to a real FastAPI + LangChain backend by replacing the mock chat logic in `src/data/chatFlow.js` and `src/components/ChatWidget/ChatWidget.jsx` with API calls.

## Build

```powershell
npm run build
npm run preview
```
