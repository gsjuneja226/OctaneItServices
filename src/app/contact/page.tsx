import { Mail, Phone, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/companyData";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Contact & Project Inquiries | Octane Digital Studio",
  description: "Get in touch with Octane Digital Studio. Tell us about your project, request a technical audit, or schedule a strategy call."
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#1a0601] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs font-semibold text-[#d0b38a] uppercase tracking-wider block mb-2">
            [ Contact ]
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-4 text-[#c4b3a5] text-base sm:text-lg leading-relaxed">
            Whether you need a full technical SEO audit, a performance marketing overhaul, or a custom Next.js web application built, we&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#240c03] rounded-2xl p-6 sm:p-8 border border-[#3d190a] space-y-6 shadow-2xl">
              <h2 className="text-lg font-bold text-white">
                Direct Communication
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#c4b3a5]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a0601] text-[#d0b38a] border border-[#3e1a0b] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Project Inquiries</div>
                    <a href={`mailto:${COMPANY.contact.email}`} className="text-[#d0b38a] hover:underline">
                      {COMPANY.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a0601] text-[#d0b38a] border border-[#3e1a0b] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Direct Phone</div>
                    <a href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                      {COMPANY.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a0601] text-[#94ab76] border border-[#3e1a0b] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp Fast Lane</div>
                    <a
                      href={`https://wa.me/${COMPANY.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94ab76] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a0601] text-[#d0b38a] border border-[#3e1a0b] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Turnaround Pacing</div>
                    <div className="text-xs text-[#a89689]">
                      Initial response within 24 hours. Teardown call within 48 hours.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#351508] text-xs text-[#a89689] leading-relaxed">
                We work remotely across global time zones, coordinating daily with engineering and marketing leadership.
              </div>
            </div>
          </div>

          {/* Right: Detailed Brief Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              title="Post Your Project Brief"
              subtitle="Fill out as much detail as you have ready. A senior maker will review and reply within 24 hours."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
