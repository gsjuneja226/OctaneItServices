import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PRICING_TIERS } from "@/data/companyData";

export const metadata = {
  title: "Pricing & Retainer Models | Octane Digital Studio",
  description: "Straightforward monthly retainers for web development, technical SEO, performance advertising, and creative production."
};

const COMPARISON = [
  { feature: "Technical Crawl Audit & Core Web Vitals Fixes", starter: true, growth: true, custom: true },
  { feature: "Social Media Graphics & Print Pamphlet Files", starter: "12 assets", growth: "30 assets", custom: "Unlimited" },
  { feature: "Google & Meta Paid Ads Management (Cost Per Lead)", starter: false, growth: true, custom: true },
  { feature: "AI Search Citations (ChatGPT / Perplexity)", starter: false, growth: true, custom: true },
  { feature: "Short-Form Video Production (Reels / Shorts)", starter: false, growth: "8 videos/mo", custom: "16+ videos/mo" },
  { feature: "Next.js Web App / Dashboard Engineering", starter: "Bug fixes", growth: "Landing pages", custom: "Full App Sprints" },
  { feature: "AI Workflows & Lead CRM Automations", starter: false, growth: false, custom: true },
  { feature: "Direct Slack / WhatsApp Channel with Team", starter: true, growth: true, custom: true },
];

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#1a0601] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-2">
            [ Transparent Pricing ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Predictable sprint retainers. No lock-in contracts.
          </h1>
          <p className="mt-4 text-[#c4b3a5] text-base sm:text-lg leading-relaxed">
            We work on flexible month-to-month retainers. You can scale up, pause, or adjust scope as your business priorities change.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 flex flex-col justify-between border transition-all ${
                tier.popular
                  ? "bg-[#280e05] border-[#d0b38a] shadow-2xl ring-1 ring-[#d0b38a]/40"
                  : "bg-[#240c03] border-[#3d190a] hover:border-[#5c2712]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-semibold text-[#d0b38a] uppercase">
                    {tier.badge}
                  </span>
                  {tier.popular && (
                    <span className="text-[10px] font-mono bg-[#d0b38a] text-[#1a0601] font-bold px-2 py-0.5 rounded">
                      Recommended
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-white mb-2">{tier.name}</h2>
                <p className="text-xs text-[#c4b3a5] mb-5 leading-relaxed">{tier.description}</p>

                <div className="mb-6 pb-6 border-b border-[#351508]">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#d0b38a] tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono ml-2">/ month</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                    Includes:
                  </span>
                  {tier.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#94ab76] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors ${
                    tier.popular
                      ? "bg-[#d0b38a] text-[#1a0601] hover:bg-[#dec5a2]"
                      : "bg-[#1a0601] border border-[#3e1a0b] text-white hover:bg-[#351306]"
                  }`}
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="bg-[#240c03] rounded-2xl border border-[#3d190a] p-6 sm:p-8 overflow-x-auto shadow-2xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight">Detailed Deliverables Breakdown</h2>
            <p className="text-xs text-[#c4b3a5] mt-1">See what is packed into each sprint level.</p>
          </div>

          <table className="w-full text-left text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-[#351508] text-neutral-400 font-mono text-[11px] uppercase">
                <th className="py-3 pr-4 font-semibold text-[#d0b38a]">Deliverable</th>
                <th className="py-3 px-4 font-semibold">Starter</th>
                <th className="py-3 px-4 font-semibold text-[#d0b38a]">Growth Sprint</th>
                <th className="py-3 pl-4 font-semibold">Custom Scale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#351508]">
              {COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#280e05]/50 transition-colors">
                  <td className="py-3.5 pr-4 text-white font-medium">{row.feature}</td>
                  <td className="py-3.5 px-4 text-[#c4b3a5]">
                    {typeof row.starter === "boolean" ? (
                      row.starter ? <Check className="w-4 h-4 text-[#94ab76]" /> : <span className="text-neutral-600">—</span>
                    ) : (
                      <span className="font-mono text-neutral-300">{row.starter}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-[#c4b3a5]">
                    {typeof row.growth === "boolean" ? (
                      row.growth ? <Check className="w-4 h-4 text-[#94ab76]" /> : <span className="text-neutral-600">—</span>
                    ) : (
                      <span className="font-mono text-[#d0b38a] font-semibold">{row.growth}</span>
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-[#c4b3a5]">
                    {typeof row.custom === "boolean" ? (
                      row.custom ? <Check className="w-4 h-4 text-[#94ab76]" /> : <span className="text-neutral-600">—</span>
                    ) : (
                      <span className="font-mono text-white font-semibold">{row.custom}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Questions callout */}
        <div className="mt-16 text-center text-xs text-[#a89689]">
          Have bespoke software or enterprise needs?{" "}
          <Link href="/contact" className="text-[#d0b38a] font-semibold underline hover:text-white">
            Schedule a scope teardown call with our senior team.
          </Link>
        </div>
      </div>
    </div>
  );
}
