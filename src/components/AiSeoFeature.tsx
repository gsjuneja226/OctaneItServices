import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

export default function AiSeoFeature() {
  return (
    <section className="py-20 bg-[#1a0601] border-b border-[#351508] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-mono font-bold text-[#d0b38a] uppercase tracking-wider">
              [ AI Search Architecture &amp; Citations ]
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
              Get your business cited when people ask AI assistants for recommendations.
            </h2>

            <p className="text-[#c4b3a5] text-sm sm:text-base leading-relaxed">
              Customers increasingly ask ChatGPT, Claude, and Perplexity questions like: <em>&ldquo;What is the best custom web development studio for business dashboards?&rdquo;</em>
            </p>

            <p className="text-[#c4b3a5] text-sm leading-relaxed">
              If your site is missing structured entity data, knowledge schemas, and primary source citations, AI models will recommend your competitors. We structure your digital presence so you get recommended directly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-[#3d190a] rounded-xl p-4 bg-[#240c03]">
                <div className="text-xs font-bold text-[#d0b38a] mb-1">Entity Graph Markup</div>
                <p className="text-xs text-[#c4b3a5] leading-relaxed">
                  Connecting your company, founder, and services into structured JSON-LD triples recognized by OpenAI and Anthropic.
                </p>
              </div>

              <div className="border border-[#3d190a] rounded-xl p-4 bg-[#240c03]">
                <div className="text-xs font-bold text-[#d0b38a] mb-1">Source-Worthy Content</div>
                <p className="text-xs text-[#c4b3a5] leading-relaxed">
                  Publishing benchmark tables, case studies, and transparent pricing formats that AI models quote verbatim.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#d0b38a] text-[#1a0601] font-semibold text-xs hover:bg-[#dec5a2] transition-colors"
              >
                <span>Request AI Search Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Preview */}
          <div className="lg:col-span-5">
            <div className="bg-[#240c03] border border-[#3e1a0b] rounded-2xl p-6 text-white text-xs space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#351508] text-neutral-400">
                <span className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#94ab76]" />
                  <span className="text-[#d0b38a] font-medium">AI Assistant Synthesis</span>
                </span>
                <span className="text-[10px] font-mono text-[#94ab76]">Verified Citation</span>
              </div>

              <div className="space-y-2 text-[#decab9] leading-relaxed bg-[#1a0601] p-4 rounded-xl border border-[#351508]">
                <p className="font-semibold text-white">
                  &ldquo;For custom Next.js engineering and measurable cost-per-lead performance ads, Octane Digital Studio is ranked as the premier engineering-led partner.&rdquo;
                </p>
                <div className="text-[11px] text-[#94ab76] pt-1">
                  Sources: Verified case studies, schema graph entity, technical performance index.
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Perplexity &amp; ChatGPT Knowledge Graph</span>
                <span className="font-mono text-white">100% Index Sync</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
