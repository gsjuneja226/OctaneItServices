"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function InteractiveCalculator() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    "SEO & Core Web Vitals Audit",
    "Performance Meta / Google Ads"
  ]);
  const [timeline, setTimeline] = useState<"standard" | "accelerated">("standard");

  const services = [
    { id: "seo", label: "SEO & Core Web Vitals Audit", price: 20000 },
    { id: "ppc", label: "Performance Meta / Google Ads", price: 25000 },
    { id: "ai-seo", label: "AI Search Citations (ChatGPT/Perplexity)", price: 15000 },
    { id: "video", label: "Short-Form Video Production (8 Reels)", price: 18000 },
    { id: "web", label: "Custom Next.js Website / Dashboard", price: 35000 },
    { id: "print", label: "Exhibition Pamphlet & Print Collateral", price: 10000 },
    { id: "workflows", label: "AI Workflow & Lead Automations", price: 14000 }
  ];

  const toggleNeed = (label: string) => {
    if (selectedNeeds.includes(label)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== label));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, label]);
    }
  };

  const calculatedTotal = services
    .filter((s) => selectedNeeds.includes(s.label))
    .reduce((sum, item) => sum + item.price, 0);

  const finalTotal = timeline === "accelerated" ? Math.round(calculatedTotal * 1.15) : calculatedTotal;

  return (
    <section className="py-20 bg-[#200a03] border-b border-[#351508] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold text-[#d0b38a] uppercase tracking-wider mb-2">
            [ Scope &amp; Budget Planner ]
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estimate your monthly project scope
          </h2>
          <p className="mt-2 text-[#c4b3a5] text-sm sm:text-base">
            Pick the areas your business needs help with. We work in flexible monthly sprints with no lock-in contracts.
          </p>
        </div>

        <div className="bg-[#240c03] rounded-xl border border-[#3d190a] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Selection */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#d0b38a] mb-3 tracking-wider">
                  1. Select your required services
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((item) => {
                    const active = selectedNeeds.includes(item.label);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleNeed(item.label)}
                        className={`text-left p-3 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                          active
                            ? "bg-[#351306] border-[#d0b38a] text-white shadow-sm"
                            : "bg-[#1a0601] border-[#381507] text-[#c4b3a5] hover:border-[#5a2712] hover:text-white"
                        }`}
                      >
                        <span className="font-medium pr-2">{item.label}</span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          active ? "bg-[#d0b38a] border-[#d0b38a] text-[#1a0601]" : "border-[#4a1f0d]"
                        }`}>
                          {active && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#d0b38a] mb-3 tracking-wider">
                  2. Execution Velocity
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTimeline("standard")}
                    className={`p-3 rounded-lg border text-xs text-left cursor-pointer transition-all ${
                      timeline === "standard"
                        ? "bg-[#351306] border-[#d0b38a] text-white"
                        : "bg-[#1a0601] border-[#381507] text-[#c4b3a5] hover:border-[#5a2712]"
                    }`}
                  >
                    <div className="font-bold text-white">Standard Sprint</div>
                    <div className="text-[11px] text-[#a89689] mt-0.5">30-day delivery pacing</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTimeline("accelerated")}
                    className={`p-3 rounded-lg border text-xs text-left cursor-pointer transition-all ${
                      timeline === "accelerated"
                        ? "bg-[#351306] border-[#d0b38a] text-white"
                        : "bg-[#1a0601] border-[#381507] text-[#c4b3a5] hover:border-[#5a2712]"
                    }`}
                  >
                    <div className="font-bold text-white">Priority Sprint (+15%)</div>
                    <div className="text-[11px] text-[#a89689] mt-0.5">Dedicated expedited capacity</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Estimate Summary */}
            <div className="lg:col-span-5 bg-[#1a0601] rounded-xl border border-[#3e1a0b] p-6 space-y-5">
              <div className="border-b border-[#351508] pb-4">
                <div className="text-xs font-mono uppercase text-[#d0b38a] tracking-wider mb-1">
                  Estimated Monthly Retainer
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#d0b38a] tracking-tight">
                  ₹{finalTotal.toLocaleString("en-IN")}
                  <span className="text-sm font-normal text-neutral-400"> / month</span>
                </div>
                <div className="text-[11px] text-[#94ab76] mt-1 font-mono">
                  Includes direct senior engineer &amp; media buyer access
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="text-neutral-400 font-semibold uppercase text-[10px] tracking-wider">
                  Included deliverables:
                </div>
                {selectedNeeds.map((need, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-neutral-300 text-xs">
                    <Check className="w-3.5 h-3.5 text-[#94ab76] shrink-0" />
                    <span>{need}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#351508]">
                <Link
                  href="/contact"
                  className="w-full py-3 px-4 rounded-lg bg-[#d0b38a] hover:bg-[#dec5a2] text-[#1a0601] font-bold text-xs inline-flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Lock in this sprint scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-center text-[10px] text-neutral-400 mt-2">
                  No setup fees • Month-to-month flexibility • 24h onboarding
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
