"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/companyData";

const CATEGORIES = [
  "All Projects",
  "Web Engineering & SEO",
  "Performance Ads & Creative",
  "Web Applications",
  "AI SEO",
  "Graphic Design & Print",
  "Video Marketing"
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredItems = activeCategory === "All Projects"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="py-16 sm:py-24 bg-[#1a0601] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-2">
            [ Case Studies &amp; Work ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Real projects. Clean code. Measurable results.
          </h1>
          <p className="mt-4 text-[#c4b3a5] text-base sm:text-lg leading-relaxed">
            A selection of websites, business dashboards, performance ad campaigns, and print collateral we&apos;ve built for our partners.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#d0b38a] text-[#1a0601] font-bold shadow-md"
                  : "bg-[#240c03] text-[#c4b3a5] border border-[#3e1a0b] hover:border-[#5c2712] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#240c03] rounded-2xl border border-[#3d190a] overflow-hidden flex flex-col hover:border-[#5c2712] transition-colors shadow-xl"
            >
              {/* Photo */}
              <div style={{ height: "200px", width: "100%", overflow: "hidden", position: "relative" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#1a0601] text-[#d0b38a] border border-[#4a1f0d]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#a89689] mb-1">
                    Client: {item.client}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#c4b3a5] leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="p-3 rounded-lg bg-[#1a0601] border border-[#381507] mb-4">
                    <span className="text-[11px] font-mono text-[#94ab76] font-semibold block">
                      Outcome: {item.impact}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#351508] flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-neutral-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="font-semibold text-[#d0b38a] hover:text-white inline-flex items-center gap-1 group"
                  >
                    <span>Discuss Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-[#240c03] rounded-3xl p-8 sm:p-12 border border-[#3d190a] text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Want to see more work relevant to your industry?
          </h2>
          <p className="mt-2 text-[#c4b3a5] text-xs sm:text-sm max-w-lg mx-auto">
            We have live case studies across B2B SaaS, manufacturing, local services, and consumer brands. Let&apos;s schedule a screen share.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#d0b38a] text-[#1a0601] text-xs font-bold hover:bg-[#dec5a2] transition-colors inline-flex items-center gap-1.5 shadow-md"
            >
              <span>Schedule a 30-Min Walkthrough</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
