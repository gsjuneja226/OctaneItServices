import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TaglineReveal from "@/components/TaglineReveal";
import PortfolioSection from "@/components/PortfolioSection";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Octane | Web Engineering, Performance Marketing & SEO",
  description: "Full service digital studio. We build fast Next.js websites, run Google and Meta ads managed to cost per lead, handle technical SEO, produce short vertical video reels, and design physical pamphlets.",
};

export default function HomePage() {
  return (
    <div className="bg-[#0e0502] text-white">
      {/* 1. Hero Section (Gaze-tracking 3D depth experience with OCTANE typography) */}
      <Hero />

      {/* 2. Core Pillars & Benefits (Refined flagship services) */}
      <ServicesGrid />

      {/* 3. Tagline Reveal Section */}
      <TaglineReveal 
        phrase="We replace bloated agency retainers with direct engineering, accountable ad spend, and senior craft."
        subtext="Every sprint delivers production code, verified search schema, and creative assets you own forever."
      />

      {/* 4. Selected Work & Deliverables */}
      <PortfolioSection />

      {/* 5. Final CTA & Project Brief Form */}
      <section className="py-20 bg-[#0e0502] border-t border-[#240d05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm 
            title="Tell us what you are working on"
            subtitle="Send through a few details about what you need built. A senior engineer or marketer will reply within 24 hours."
          />
        </div>
      </section>
    </div>
  );
}
