export const COMPANY = {
  name: "Octane",
  fullName: "Octane Digital & IT Services",
  tagline: "A boutique studio for web development, performance marketing, and organic search.",
  description: "We are a tight-knit team of engineers, media buyers, and designers. We build fast Next.js websites, run performance ads focused on cost per lead, and get businesses found on Google and AI search engines.",
  contact: {
    email: "hello@octanedigital.com",
    inquiriesEmail: "projects@octanedigital.com",
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210",
    availability: "Available for new projects • Responses within 24h",
    workingHours: "Monday to Friday: 10:00 AM – 7:00 PM"
  },
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    github: "https://github.com"
  }
};

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  impact: string;
  summary: string;
  details: string;
  tags: string[];
  image: string;
  year: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "b2b-catalog-platform",
    title: "Catalog Platform and Search Architecture Overhaul",
    client: "Apex Components",
    category: "Web Engineering and SEO",
    impact: "Production Next.js Platform",
    summary: "Replaced an outdated legacy setup with a custom Next.js catalog site and cleaned up legacy redirect loops.",
    details: "Rebuilt on Next.js with static generation, structured schema for industrial parts, and automated PDF spec sheets. Inquiries grew through clean indexing.",
    tags: ["Next.js", "Technical SEO", "Speed Optimization", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    year: "2025"
  },
  {
    id: "d2c-performance-creative",
    title: "Paid Acquisition and Creative Production",
    client: "Komorebi Living",
    category: "Performance Ads and Creative",
    impact: "Server Side CAPI Pipeline",
    summary: "Rethought creative angles with short vertical video hooks and tightened Meta conversion tracking.",
    details: "Scripted high tempo product reels, rebuilt the landing page checkout flow, and managed strictly to cost per purchase.",
    tags: ["Meta Ads", "Shorts", "Conversion Rate", "Shopify"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    year: "2025"
  },
  {
    id: "saas-operations-dashboard",
    title: "Internal Operations and Dispatch Dashboard",
    client: "FleetSync Logix",
    category: "Web Applications",
    impact: "Custom MERN Operations Console",
    summary: "Designed and coded a single screen operations console using the MERN stack with role based access.",
    details: "Built an internal dashboard with live dispatch statuses, automated driver notifications, and one click invoice generation.",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Business Dashboard"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    year: "2025"
  },
  {
    id: "ai-citation-knowledge-graph",
    title: "Structured Schema for Generative AI Search",
    client: "CarePulse Health",
    category: "AI SEO",
    impact: "Structured JSON LD Entity Graph",
    summary: "Structured technical documentation and verified content so ChatGPT and Perplexity pull directly from source materials.",
    details: "Structured FAQs in JSON LD, published primary data, and anchored clear entity definitions so AI answers cite the brand directly.",
    tags: ["AI SEO", "Perplexity", "Knowledge Graph", "Structured Data"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    year: "2026"
  },
  {
    id: "brand-identity-print-pack",
    title: "Complete Exhibition Identity and Sales Pamphlets",
    client: "Vanguard Infra",
    category: "Graphic Design and Print",
    impact: "Spot UV Exhibition Package",
    summary: "Designed physical three panel pamphlets, pull up banners, and digital pitch decks for an annual industrial expo.",
    details: "Created a minimalist visual language: clean grid layouts, legible typography, spot UV print ready files, and matching slide decks for sales reps.",
    tags: ["Pamphlet Design", "Brochure Print", "Exhibition", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    year: "2025"
  },
  {
    id: "short-form-video-series",
    title: "Editorial Short Video Production",
    client: "Studio Minimal",
    category: "Video Marketing",
    impact: "4K Vertical Video Reel Series",
    summary: "A video production sprint creating high retention vertical videos breaking down architecture and design processes.",
    details: "Handled everything from concept and shooting angles to sound design and dynamic subtitles for vertical social formats.",
    tags: ["Reels", "YouTube Shorts", "Video Editing", "Content Creation"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
    year: "2025"
  }
];

export const PRICING_TIERS = [
  {
    name: "Starter Sprint",
    badge: "Foundation",
    price: "₹29,000",
    period: "/month",
    description: "Great for businesses wanting dedicated focus on technical SEO, clean website maintenance, and consistent social & graphic output.",
    features: [
      "Full technical crawl audit & Core Web Vitals fixes",
      "On-page SEO & target keyword tracking (up to 20 keywords)",
      "Social media design & physical pamphlet / print layout files (12 assets)",
      "Google Business & local map presence cleanup",
      "Bi-weekly progress notes & direct WhatsApp channel"
    ],
    popular: false,
    cta: "Start with Foundation"
  },
  {
    name: "Growth Engine",
    badge: "Most Common",
    price: "₹54,000",
    period: "/month",
    description: "Our core full-funnel partnership. Covers performance ads, technical SEO, video production, and landing page conversion work.",
    features: [
      "Everything in Starter Sprint",
      "Google & Meta ads managed to cost per qualified lead",
      "AI SEO: Structured schema & citation seeding for ChatGPT/Perplexity",
      "8 Short-Form Video Reels (scripting, editing, hooks & audio mix)",
      "Dedicated high-converting Next.js landing page builds",
      "Weekly performance check-in & direct team Slack/WhatsApp"
    ],
    popular: true,
    cta: "Start Growth Engine"
  },
  {
    name: "Custom Studio Retainer",
    badge: "Engineering + Media",
    price: "₹95,000",
    period: "/month",
    description: "For teams needing ongoing web application development (Next.js / MERN), custom dashboards, and high-volume creative campaigns.",
    features: [
      "Custom Next.js & MERN application development or dashboard sprints",
      "AI workflows & automated business integrations (CRM / lead bots)",
      "Full video marketing: 16+ edited 4K short-form reels & ads monthly",
      "Omnichannel media buying & server-side tracking (CAPI)",
      "Complete print collateral (brochures, packaging, pitch decks)",
      "Dedicated developer & media buyer on stand-by"
    ],
    popular: false,
    cta: "Discuss Custom Scope"
  }
];
