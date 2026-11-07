import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/companyData";

export default function PortfolioSection() {
  const featured = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <section className="py-20 bg-[#200a03] border-b border-[#351508] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold text-[#d0b38a] uppercase tracking-wider mb-2">
              [ Verified Case Studies ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Projects &amp; Results
            </h2>
            <p className="mt-2 text-[#c4b3a5] text-sm sm:text-base">
              A look at how we build software, cut cost per lead, and restructure technical SEO.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-xs font-semibold text-[#d0b38a] hover:text-white inline-flex items-center gap-1 shrink-0"
          >
            <span>All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-[#240c03] rounded-xl border border-[#3d190a] overflow-hidden hover:border-[#5c2712] transition-colors flex flex-col shadow-xl"
            >
              {/* Photo */}
              <div style={{ height: "240px", width: "100%", overflow: "hidden", position: "relative" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#1a0601] text-[#d0b38a] border border-[#4a1f0d] shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-[#120401]/90 text-[#94ab76] border border-[#3e1a0b] inline-block backdrop-blur-sm">
                    {item.impact}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#a89689] mb-1">
                    Client: {item.client}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#c4b3a5] leading-relaxed mb-4">
                    {item.summary}
                  </p>
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
                    href="/portfolio"
                    className="font-semibold text-[#d0b38a] hover:text-white inline-flex items-center gap-1 group"
                  >
                    <span>Read scope</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
