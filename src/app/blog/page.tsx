import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Notes & Field Guides | Octane Digital Studio",
  description: "Tactical notes on technical SEO, Next.js architecture, Generative Engine Optimization, and cost-per-lead advertising."
};

const ARTICLES = [
  {
    slug: "ai-seo-perplexity-chatgpt-guide",
    title: "How to Structure Content So AI Search Engines (ChatGPT & Perplexity) Cite You",
    excerpt: "Why traditional keyword stuffing is useless for LLMs. A technical guide on entity triples, JSON-LD knowledge schemas, and primary source formatting.",
    category: "AI SEO",
    readTime: "7 min read",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "cost-per-lead-over-impressions",
    title: "Stop Buying Impressions: Why We Manage Paid Ads Strictly to Cost Per Lead",
    excerpt: "How to configure Meta Conversions API (CAPI), GTM server containers, and targeted funnel quizzes to prune 40% of wasted ad spend.",
    category: "Performance Ads",
    readTime: "5 min read",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "why-nextjs-converts-better",
    title: "Why We Rebuild Slow WordPress Sites on Next.js 14 and Tailwind",
    excerpt: "Sub-second server rendering, zero plugin vulnerability headaches, and how passing Core Web Vitals directly improves mobile conversion rates.",
    category: "Engineering",
    readTime: "6 min read",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "short-form-video-hook-framework",
    title: "The 3-Second Rule: Scripting Vertical Reels and Shorts That Actually Sell",
    excerpt: "Breaking down hook formulas, visual pattern interrupts, and why corporate video production fails on Instagram and YouTube Shorts.",
    category: "Video Marketing",
    readTime: "4 min read",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#1a0601] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-2">
            [ Field Notes &amp; Guides ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Notes from the workshop.
          </h1>
          <p className="mt-4 text-[#c4b3a5] text-base sm:text-lg leading-relaxed">
            Tactical playbooks, code patterns, and marketing frameworks written by the engineers and media buyers doing the work.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-[#240c03] rounded-2xl border border-[#3d190a] overflow-hidden flex flex-col hover:border-[#5c2712] transition-colors shadow-xl"
            >
              {/* Photo */}
              <div style={{ height: "220px", width: "100%", overflow: "hidden", position: "relative" }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#1a0601] text-[#d0b38a] border border-[#4a1f0d]">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2b1206] text-white border border-[#4a1f0d]">
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#a89689] mb-2">
                    {article.date}
                  </div>
                  <h2 className="text-lg font-bold text-white group-hover:text-[#d0b38a] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-xs text-[#c4b3a5] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#351508] flex items-center justify-between text-xs">
                  <span className="text-xs font-semibold text-[#d0b38a] group-hover:underline">
                    Read article
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#d0b38a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / RSS Callout */}
        <div className="bg-[#240c03] rounded-3xl p-8 sm:p-12 border border-[#3d190a] text-center max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-2xl font-bold text-white">
            Get practical engineering &amp; marketing blueprints
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#c4b3a5] max-w-md mx-auto">
            We publish deep-dive breakdowns on web performance, Google Ads CPL optimization, and AI SEO once a month. No fluff.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 rounded-xl bg-[#1a0601] border border-[#3e1a0b] text-white text-xs placeholder-[#695447] focus:outline-none focus:border-[#d0b38a]"
            />
            <button
              type="button"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#d0b38a] text-[#1a0601] text-xs font-bold hover:bg-[#dec5a2] shrink-0 transition-colors shadow-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
