import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CORE_SERVICES, COMPREHENSIVE_SERVICES } from "@/data/servicesData";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Services & Capabilities | Octane Digital Studio",
  description: "Explore our full suite of technical SEO, PPC performance ads, AI search optimization, Next.js web development, video production, and graphic design."
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#1a0601] text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-2">
            [ Core Capabilities ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Our Services &amp; Capabilities
          </h1>
          <p className="mt-4 text-[#c4b3a5] text-base sm:text-lg leading-relaxed">
            From technical crawl fixes on existing web apps to short-form video reels, Meta ad funnels, and physical exhibition pamphlets — everything is handled directly by our senior team.
          </p>
        </div>
      </div>

      {/* 6 Core Pillars Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {CORE_SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`bg-[#240c03] rounded-2xl border border-[#3d190a] p-6 sm:p-10 scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo */}
              <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : ""}`}>
                <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-[#1a0601] border border-[#3e1a0b]">
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#1a0601] text-[#d0b38a] border border-[#4a1f0d]">
                      [{service.number}]
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#2b1206] text-white border border-[#4a1f0d]">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text & Deliverables */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : ""}`}>
                <div className="flex flex-wrap gap-1.5">
                  {service.badgeTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-[#331307] text-[#decab9] text-[10px] font-mono font-semibold uppercase tracking-wider border border-[#451e0e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {service.title}
                </h2>

                <p className="text-[#c4b3a5] text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Specific Deliverables List */}
                <div className="border-t border-[#351508] pt-4">
                  <div className="text-xs font-mono font-bold uppercase text-[#d0b38a] tracking-wider mb-3">
                    Deliverables Included in Sprint:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#94ab76] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d0b38a] text-[#1a0601] text-xs font-bold hover:bg-[#dec5a2] transition-colors"
                  >
                    <span>Inquire about this capability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Extended Services (Numbered 07-13) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[#351508]">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-2">
            [ Specialized Modules ]
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Comprehensive Digital Capabilities
          </h2>
          <p className="mt-2 text-[#c4b3a5] text-sm leading-relaxed">
            Need short-term burst capacity or targeted fixes? We execute these as single sprints or add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPREHENSIVE_SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#240c03] rounded-xl p-6 border border-[#3d190a] hover:border-[#5c2712] transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#d0b38a]">
                    [{String(idx + 7).padStart(2, "0")}]
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#331307] text-[#c4b3a5] border border-[#451e0e]">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#c4b3a5] leading-relaxed mb-4">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#351508] flex items-center justify-between text-xs">
                <span className="text-[#94ab76] font-mono text-[11px]">
                  Production grade
                </span>
                <Link
                  href="/contact"
                  className="font-semibold text-white hover:text-[#d0b38a] inline-flex items-center gap-1 group"
                >
                  <span>Book sprint</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Brief Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <EnquiryForm
          title="Discuss your service requirements"
          subtitle="Tell us which capabilities you need. We'll reply within 24 hours with clear scope and cost-per-deliverable."
        />
      </div>
    </div>
  );
}
