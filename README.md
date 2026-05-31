# Skyline Estates — Real Estate Lead Capture Demo

A **real estate website** with an embedded AI chat assistant that captures property inquiries and routes them to an agent dashboard. Built as a frontend showcase for a FastAPI + LangChain lead capture gig.

## Concept

This is **not** a chatbot SaaS pitch — it's a real business site (**Skyline Estates**) where visitors browse listings, chat with a property assistant, and leave their details. Agents view all inquiries on the **Property Inquiries** dashboard.

## Run locally

```powershell
cd D:\programming\fiverr\fiverr_proj_show\pulse-ai-lead-capture
npm install
npm run dev
```

- `/` — Real estate landing page + chat widget
- `/dashboard` — Agent leads dashboard

## Chat flow

1. Visitor opens chat on the property site
2. Selects intent: **Buy a home** · **Rent property** · **Schedule viewing**
3. Assistant collects **name → email → location**
4. Inquiry saved to dashboard with intent score

## Fiverr screenshots

```powershell
npm run dev
python capture_screenshots.py
```

Outputs 5 images (1024×768) to `assets/screenshots/`.

## Stack

React + Vite · Framer Motion · React Router · localStorage (demo)
