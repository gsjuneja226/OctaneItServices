import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

interface ArticleData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
}

const ARTICLES_MAP: Record<string, ArticleData> = {
  "ai-seo-perplexity-chatgpt-guide": {
    slug: "ai-seo-perplexity-chatgpt-guide",
    title: "How to Structure Content So AI Search Engines (ChatGPT & Perplexity) Cite You",
    excerpt: "Why traditional keyword stuffing is useless for LLMs. A technical guide on entity triples, JSON-LD knowledge schemas, and primary source formatting.",
    category: "AI SEO",
    readTime: "7 min read",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Generative search engines like ChatGPT Search and Perplexity do not index pages like Google of 2012. Instead of matching exact keyword density strings, retrieval models evaluate factual density, citation consensus, and entity authority.",
      "To be retrieved in the LLM context window during retrieval-augmented generation (RAG), your web content needs structured entity triples (Subject - Predicate - Object). Using standard Schema.org JSON-LD vocabularies like TechArticle, FAQPage, and Organization provides the deterministic parser the confidence it requires.",
      "Key Implementation Checklist:",
      "1. Entity Anchoring: Define the core thesis in the first 120 tokens of the document without colloquial fluff.",
      "2. Primary Data: Include proprietary statistics, benchmarks, or case studies. AI models heavily favor primary citations over repeated secondary summaries.",
      "3. Clear Section Semantics: Use descriptive H2s framed as explicit questions that potential buyers prompt into AI chats.",
      "At Octane, we test our clients' content weekly across Perplexity Pro and ChatGPT queries to ensure their brand is consistently cited as the authoritative source."
    ]
  },
  "cost-per-lead-over-impressions": {
    slug: "cost-per-lead-over-impressions",
    title: "Stop Buying Impressions: Why We Manage Paid Ads Strictly to Cost Per Lead",
    excerpt: "How to configure Meta Conversions API (CAPI), GTM server containers, and targeted funnel quizzes to prune 40% of wasted ad spend.",
    category: "Performance Ads",
    readTime: "5 min read",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Most agencies report on vanity metrics: CPMs, video views, and impression volume. But impressions do not pay your engineering salaries or rent. When you evaluate performance advertising, only one metric matters: Cost Per Qualified Lead (CPL).",
      "By setting up server-side Meta Conversions API (CAPI) and Google Ads offline conversion tracking via Google Tag Manager (GTM), we eliminate the 30% data loss caused by iOS privacy changes and browser ad blockers.",
      "Crucially, we feed back qualified lead stages from your CRM into the ad platform algorithms. This trains the machine learning models to hunt for genuine decision-makers rather than accidental clickers.",
      "The result? Clean ad spend that generates predictable sales pipeline month after month."
    ]
  },
  "why-nextjs-converts-better": {
    slug: "why-nextjs-converts-better",
    title: "Why We Rebuild Slow WordPress Sites on Next.js 14 and Tailwind",
    excerpt: "Sub-second server rendering, zero plugin vulnerability headaches, and how passing Core Web Vitals directly improves mobile conversion rates.",
    category: "Engineering",
    readTime: "6 min read",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Every 100ms delay in website load time drops conversion rates by up to 7%. The typical corporate WordPress website loads 35 external plugin scripts, uncompressed images, and jQuery libraries that drag initial server response times past 3 seconds on mobile networks.",
      "With Next.js App Router and Tailwind CSS, we deliver static HTML and incremental server rendering that passes Google's Core Web Vitals with straight 95+ scores.",
      "Zero database bottlenecks, sub-second TTFB, and TypeScript maintainability allow marketing teams to iterate without fear of white-screen crashes."
    ]
  },
  "short-form-video-hook-framework": {
    slug: "short-form-video-hook-framework",
    title: "The 3-Second Rule: Scripting Vertical Reels and Shorts That Actually Sell",
    excerpt: "Breaking down hook formulas, visual pattern interrupts, and why corporate video production fails on Instagram and YouTube Shorts.",
    category: "Video Marketing",
    readTime: "4 min read",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Viewers on Instagram Reels and YouTube Shorts decide whether to swipe within 1.8 seconds. Corporate intros with rotating 3D logos or slow camera pans guarantee a 90% bounce rate before your value proposition is spoken.",
      "We build vertical video around visual pattern interrupts, high-contrast captions, and immediate problem-first hooks in the first 3 seconds.",
      "Each video drives to a single explicit action: a DM keyword trigger, an audit link in bio, or a free diagnostic tool."
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(ARTICLES_MAP).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = ARTICLES_MAP[params.slug];
  if (!article) notFound();

  return (
    <article className="py-16 sm:py-24 bg-[#1a0601] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d0b38a] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all field notes</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#a89689]">
            <span className="px-2.5 py-0.5 rounded bg-[#2b1206] text-[#d0b38a] border border-[#3e1a0b] font-semibold uppercase">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#d0b38a]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#d0b38a]" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#c4b3a5] leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-[#3d190a] mb-12 bg-[#1a0601] shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
            loading="eager"
          />
        </div>

        {/* Body Content */}
        <div className="space-y-6 text-sm sm:text-base text-[#ded3ca] leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author / CTA Box */}
        <div className="mt-16 pt-8 border-t border-[#351508] bg-[#240c03] border border-[#3d190a] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="text-xs font-mono font-bold text-[#d0b38a] uppercase tracking-wider">
              Octane Field Notes
            </div>
            <div className="text-sm font-semibold text-white mt-0.5">
              Want help implementing this for your business?
            </div>
            <div className="text-xs text-[#a89689] mt-1">
              We handle technical SEO, Next.js builds, and CPL advertising directly.
            </div>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-xs font-bold bg-[#d0b38a] hover:bg-[#dec5a2] text-[#1a0601] transition-colors inline-flex items-center gap-1.5 shrink-0 shadow-md"
          >
            <span>Post a project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </article>
  );
}
