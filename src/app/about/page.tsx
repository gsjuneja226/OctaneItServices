import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About Us | Octane Digital Studio",
  description: "An independent digital and engineering studio. We build Next.js applications, manage performance advertising to cost per lead, and handle technical SEO."
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#1a0601] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-2">
            [ About the Studio ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            We started Octane to fix what annoyed us most about typical agencies.
          </h1>
          <p className="mt-4 text-[#c4b3a5] text-lg leading-relaxed">
            Layers of junior account managers, slow turnaround times, vanity metrics like impressions and clicks that don&apos;t translate to revenue, and bloated templates that take four seconds to load on mobile.
          </p>
        </div>

        {/* Studio Photo & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-[#3d190a]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Octane Studio Team Collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              A small, senior team doing the actual work.
            </h2>
            <p className="text-[#c4b3a5] text-sm sm:text-base leading-relaxed">
              When you hire Octane, you aren&apos;t paying for agency overhead or an executive who disappears after the sales pitch. You work directly with the developers writing your Next.js code, the media buyers managing your Meta and Google ad budgets, and the editors cutting your vertical video reels.
            </p>
            <p className="text-[#c4b3a5] text-sm sm:text-base leading-relaxed">
              We care about two things: <strong className="text-white">does your technology work fast without breaking</strong>, and <strong className="text-white">are your marketing channels generating qualified leads at a cost that makes sense for your business?</strong>
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#240c03] border border-[#3d190a]">
                <div className="font-bold text-2xl text-[#d0b38a]">100%</div>
                <div className="text-xs text-[#a89689] mt-0.5">Asset Ownership for Clients</div>
              </div>
              <div className="p-4 rounded-xl bg-[#240c03] border border-[#3d190a]">
                <div className="font-bold text-2xl text-[#d0b38a]">0 Layers</div>
                <div className="text-xs text-[#a89689] mt-0.5">Direct Team Communication</div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Care About */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-1">
              [ Principles ]
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              How we operate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#240c03] rounded-2xl p-6 border border-[#3d190a]">
              <div className="font-mono text-xs text-[#d0b38a] mb-3">[01]</div>
              <h3 className="font-bold text-base text-white mb-2">Cost Per Lead First</h3>
              <p className="text-xs text-[#c4b3a5] leading-relaxed">
                We measure paid media by cost per qualified inquiry, not impressions, reach, or video views. If a campaign isn&apos;t generating phone calls or demo requests, we kill it.
              </p>
            </div>

            <div className="bg-[#240c03] rounded-2xl p-6 border border-[#3d190a]">
              <div className="font-mono text-xs text-[#d0b38a] mb-3">[02]</div>
              <h3 className="font-bold text-base text-white mb-2">Fast, Maintainable Code</h3>
              <p className="text-xs text-[#c4b3a5] leading-relaxed">
                We prefer modern TypeScript, Next.js, and clean backends over fragile CMS setups with 40 plugins. Your site loads in milliseconds and won&apos;t break on updates.
              </p>
            </div>

            <div className="bg-[#240c03] rounded-2xl p-6 border border-[#3d190a]">
              <div className="font-mono text-xs text-[#d0b38a] mb-3">[03]</div>
              <h3 className="font-bold text-base text-white mb-2">Full-Spectrum Practicality</h3>
              <p className="text-xs text-[#c4b3a5] leading-relaxed">
                Need a physical pamphlet for a trade show, a Shopify checkout fix, an automated CRM webhook, and 8 reels shot this month? We do all of it without hesitation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#240c03] text-white border border-[#3d190a] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a project in mind?
          </h2>
          <p className="mt-2 text-[#c4b3a5] text-sm max-w-lg mx-auto">
            Send us a note. We&apos;ll schedule a quick call to talk through your current bottleneck and see if we&apos;re a good fit.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#d0b38a] text-[#1a0601] text-xs font-bold hover:bg-[#dec5a2] transition-colors inline-flex items-center gap-1.5 shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
