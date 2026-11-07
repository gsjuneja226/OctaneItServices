import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CORE_SERVICES } from "@/data/servicesData";

export default function ServicesGrid() {
  const featuredServices = CORE_SERVICES.slice(0, 4);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0e0502] border-b border-[#240d05] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold text-[#d0b38a] uppercase tracking-wider mb-2">
              [ Core Capabilities ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Primary Engineering &amp; Growth Pillars
            </h2>
            <p className="mt-3 text-[#b8a89d] text-sm sm:text-base leading-relaxed">
              Architected for verifiable business outcomes: sub-second Next.js web applications, ad spend managed strictly to Cost Per Lead, and AI search entity citations.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d0b38a] hover:text-white shrink-0 group"
          >
            <span>Explore all 14 capabilities</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#180a04] rounded-2xl border border-[#2e1208] hover:border-[#4d1f0d] transition-all flex flex-col justify-between overflow-hidden shadow-xl group"
            >
              <div>
                {/* Photo */}
                <div style={{ height: "170px", width: "100%", overflow: "hidden", position: "relative" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#0e0502]/90 text-[#d0b38a] border border-[#34150a] shadow-sm backdrop-blur-sm">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#1f0c06]/90 text-white border border-[#34150a] backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-[#b8a89d] leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Real Deliverables */}
                  <div className="border-t border-[#240d05] pt-3 space-y-1.5">
                    {service.deliverables.slice(0, 3).map((d, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#94ab76] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="px-5 py-3 bg-[#120603] border-t border-[#240d05] flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-[#94ab76]">
                  Senior Execution
                </span>
                <Link
                  href="/contact"
                  className="font-bold text-[#d0b38a] hover:text-white inline-flex items-center gap-1 group/link"
                >
                  <span>Post brief</span>
                  <ArrowRight className="w-3 h-3 group-link-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner linking to full catalog */}
        <div className="mt-12 p-6 rounded-2xl bg-[#150703] border border-[#2e1208] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#b8a89d]">
            <strong className="text-white">Looking for specialized solutions?</strong> We also engineer custom business dashboards, physical exhibition pamphlets, and AI webhook workflows.
          </div>
          <Link
            href="/services"
            className="px-4 py-2 rounded-xl bg-[#240e07] hover:bg-[#34150a] text-xs font-semibold text-white border border-[#3e1a0d] shrink-0 transition-colors"
          >
            View Full Service Catalog &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
