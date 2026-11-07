export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  badgeTags: string[];
  features: string[];
  deliverables: string[];
  techStack?: string[];
  iconName: string;
  image: string;
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "seo",
    number: "01",
    title: "SEO",
    category: "Organic Search",
    tagline: "Technical SEO, on-page work and local ranking for targeted searches.",
    description: "We don't write fluffy 500-word blog posts that nobody reads. We audit your codebase for crawl bloat, fix Core Web Vitals, restructure on-page silos, and rank your business where customers actually search.",
    badgeTags: ["TECHNICAL AUDIT", "LOCAL PACK", "CONTENT"],
    features: [
      "Full 100+ point technical crawl audit & site health cleanup",
      "Local map pack optimization & Google Business profile verification",
      "Semantic keyword grouping & high-intent search content architecture",
      "Internal linking restructuring & schema markup implementation"
    ],
    deliverables: [
      "Weekly keyword position telemetry",
      "Search Console & analytics reporting",
      "Technical health & indexation report",
      "Targeted on-page copy updates"
    ],
    techStack: ["Google Search Console", "Ahrefs", "Screaming Frog", "Schema.org"],
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ppc-performance",
    number: "02",
    title: "PPC / Performance",
    category: "Paid Media",
    tagline: "Google and Meta campaigns managed to cost per lead, not impressions.",
    description: "Vanity impressions don't pay rent. We build paid funnels on Meta and Google Search that prioritize qualified leads and verified purchase returns, continually pruning wasted ad spend.",
    badgeTags: ["COST PER LEAD", "META ADS", "GOOGLE SEARCH ADS"],
    features: [
      "Search intent campaign architecture with rigorous negative keyword lists",
      "Meta Ads creative testing engine (video hooks, UGC angles, problem-first static)",
      "Server-side conversion tracking (Meta CAPI & Google Tag Manager)",
      "Landing page conversion audits to fix leaks before spending more"
    ],
    deliverables: [
      "Live CPL & ROAS performance tracking sheet",
      "Weekly creative & audience test schedule",
      "Dedicated ad copy & hook variations",
      "Budget pacing & negative search term pruning"
    ],
    techStack: ["Meta Ads Manager", "Google Ads", "Google Tag Manager", "Triple Whale"],
    iconName: "TrendingUp",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-seo",
    number: "03",
    title: "AI SEO",
    category: "Generative Search",
    tagline: "Get cited in AI answers and assistants with structured, source-worthy content.",
    description: "When buyers ask ChatGPT, Perplexity, or Gemini for recommendations, where does your business show up? We structure your data, author citations, and entity profile so AI engines cite you as the trustworthy answer.",
    badgeTags: ["AI CITATIONS", "PERPLEXITY & CHATGPT", "STRUCTURED DATA"],
    features: [
      "Knowledge graph & entity profile synchronization",
      "Reverse-engineering prompt queries in your industry",
      "JSON-LD structured schema that LLM web crawlers parse effortlessly",
      "Publishing primary data, benchmarks, and comparison guides that AI models quote"
    ],
    deliverables: [
      "AI engine mention audit",
      "Entity graph implementation report",
      "Source-worthy citation format updates",
      "Quarterly visibility benchmark across Perplexity & ChatGPT"
    ],
    techStack: ["Perplexity", "ChatGPT Search", "Google Gemini", "JSON-LD Entity Graphs"],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    category: "Strategy & Distribution",
    tagline: "Always-on social, content and email built around one quarterly plan.",
    description: "No random daily posts just to fill a calendar. We align your organic social, editorial content, and email sequences into one cohesive 90-day plan that actually moves prospects through a funnel.",
    badgeTags: ["SOCIAL", "CONTENT", "EMAIL"],
    features: [
      "Quarterly growth roadmap with clear milestones and theme sprints",
      "High-authority LinkedIn & Instagram content production",
      "Automated email onboarding and nurture sequences that drive re-engagement",
      "Editorial blog and article writing designed for search intent"
    ],
    deliverables: [
      "Quarterly roadmap document",
      "Monthly batch of 20-30 visual & carousel posts",
      "Bi-weekly email newsletters & drip copy",
      "Monthly pipeline attribution report"
    ],
    techStack: ["Klaviyo", "Notion", "Figma", "Buffer"],
    iconName: "Megaphone",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "video-marketing",
    number: "05",
    title: "Video Marketing",
    category: "Short-Form Production",
    tagline: "Shoot, edit and publish short-form video for reels, ads and YouTube.",
    description: "Vertical video is how people consume information now. We write compelling hooks, shoot with professional gear, and edit dynamic reels, shorts, and performance video ads that keep viewers watching.",
    badgeTags: ["REELS", "SHORT-FORM ADS", "YOUTUBE SHORTS"],
    features: [
      "Hook-driven scripting based on viral retention structures",
      "Professional 4K shooting and lighting direction",
      "Snappy editing, custom subtitles, sound design & color grading",
      "Format exports formatted for Instagram Reels, YouTube Shorts & Meta Ads"
    ],
    deliverables: [
      "8 to 16 finished vertical video assets monthly",
      "Paid ad cuts with multiple hook variations",
      "Source footage & B-roll archive",
      "Captions & thumbnail packaging"
    ],
    techStack: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Sony Cinema Line"],
    iconName: "Video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "website-development",
    number: "06",
    title: "Website Development",
    category: "Engineering",
    tagline: "Modern MERN and Next.js sites, business dashboards & management systems.",
    description: "We build clean, lightning-fast web applications and customer portals. Using Next.js and the MERN stack, we create custom management dashboards, internal business tools, and conversion-focused websites that load in milliseconds.",
    badgeTags: ["NEXT.JS & MERN", "BUSINESS DASHBOARDS", "CUSTOM PORTALS"],
    features: [
      "Next.js App Router & Tailwind CSS with sub-second page transitions",
      "Custom business dashboards and internal operational management systems",
      "Secure backend APIs with Node.js, Express, MongoDB or PostgreSQL",
      "Mobile-first responsive UX scoring 95+ on Google Lighthouse"
    ],
    deliverables: [
      "Clean, maintainable TypeScript source code",
      "Production deployment with CI/CD on Vercel or AWS",
      "Role-based authentication & admin management panels",
      "Ongoing maintenance and bug fixes"
    ],
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS"],
    iconName: "Code2",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  }
];

export const COMPREHENSIVE_SERVICES = [
  {
    title: "Social Media Handling",
    desc: "Hands-on content scheduling, community engagement, and brand voice consistency across Instagram, LinkedIn, and X.",
    icon: "Share2",
    badge: "Social"
  },
  {
    title: "AI Workflows & Automation",
    desc: "Hooking up lead routing, CRM automations, automated client follow-ups, and internal workflows using modern AI tools.",
    icon: "Cpu",
    badge: "Automation"
  },
  {
    title: "Management Systems & Dashboards",
    desc: "Custom web software built for your business — tracking inventory, dispatch, client records, and team tasks without generic SaaS bloat.",
    icon: "LayoutDashboard",
    badge: "Custom SaaS"
  },
  {
    title: "Meta & Google Ads Management",
    desc: "Daily campaign monitoring, creative testing, and ad spend allocation focused strictly on cost per qualified lead.",
    icon: "Target",
    badge: "Paid Ads"
  },
  {
    title: "WordPress & Shopify Development",
    desc: "High-speed e-commerce stores, custom Shopify themes, and clean WordPress setups that don't break with every plugin update.",
    icon: "ShoppingBag",
    badge: "E-Commerce"
  },
  {
    title: "Lead Generation Funnels",
    desc: "End-to-end inbound funnels: dedicated landing pages, qualifier forms, and instant notification alerts for your sales team.",
    icon: "Users",
    badge: "Funnel"
  },
  {
    title: "Graphic Designing & Pamphlet Designs",
    desc: "Physical pamphlets, exhibition trifolds, corporate brochures, business cards, and digital pitch decks ready for high-resolution print.",
    icon: "Palette",
    badge: "Design & Print"
  },
  {
    title: "Content Writing & Copywriting",
    desc: "Punchy sales copy for landing pages, technical case studies, email campaigns, and SEO articles that sound like an actual human wrote them.",
    icon: "PenTool",
    badge: "Copywriting"
  }
];

export const STATS = [
  { value: "48h", label: "Kickoff Turnaround", helper: "Direct onboarding without agency red tape" },
  { value: "0", label: "Account Managers", helper: "You talk directly with developers & marketers" },
  { value: "98+", label: "Avg Lighthouse Speed", helper: "Sub-second Next.js web performance" },
  { value: "100%", label: "Code & Account Ownership", helper: "You own all ad accounts, assets & source code" }
];
