import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MessageSquare } from "lucide-react";
import { COMPANY } from "@/data/companyData";
import { CORE_SERVICES } from "@/data/servicesData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#120401] text-neutral-300 pt-16 pb-12 border-t border-[#311306] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-footer Callout */}
        <div className="pb-12 mb-12 border-b border-[#2d1105] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to start your next sprint?
            </h3>
            <p className="mt-2 text-[#c4b3a5] text-sm">
              We discuss your project directly with you, formulate a clear 30-day scope, and begin execution.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-lg text-xs font-semibold bg-[#d0b38a] hover:bg-[#dec5a2] text-[#1a0601] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Post a project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-lg text-xs font-medium border border-[#4a1f0d] text-neutral-200 hover:text-white hover:bg-[#250d04] transition-colors inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#94ab76]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4 Column Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#2d1105] text-xs">
          {/* Brand info */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <Link href="/" className="inline-block py-1">
              <img
                src="/logo_transparent.png"
                alt="Octane Logo"
                style={{
                  height: "36px",
                  maxHeight: "36px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </Link>
            <p className="text-[#a89689] text-xs leading-relaxed max-w-xs">
              Full-service web engineering, performance advertising, SEO architecture, and video production studio.
            </p>
          </div>

          {/* Pillars */}
          <div>
            <div className="font-semibold text-[#d0b38a] uppercase tracking-wider mb-3 text-[11px]">
              Services
            </div>
            <ul className="space-y-2">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="hover:text-white transition-colors text-neutral-300">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services#pamphlets-design" className="hover:text-white transition-colors text-neutral-300">
                  Pamphlet &amp; Print Design
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="hover:text-white transition-colors text-neutral-300">
                  Shopify &amp; WordPress
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-[#d0b38a] uppercase tracking-wider mb-3 text-[11px]">
              Studio
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-neutral-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors text-neutral-300">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors text-neutral-300">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors text-neutral-300">
                  Field Notes &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-neutral-300">
                  Project Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <div className="font-semibold text-[#d0b38a] uppercase tracking-wider mb-3 text-[11px]">
              Direct Inquiries
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-white hover:text-[#d0b38a] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d0b38a]" />
                  <span>{COMPANY.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-neutral-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#94ab76]" />
                  <span>{COMPANY.contact.phone}</span>
                </a>
              </li>
              <li className="text-[#a89689] pt-1 leading-relaxed">
                Available for new projects • Responses within 24h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89689]">
          <div>
            &copy; {currentYear} Octane Digital Services. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-neutral-200">
              About
            </Link>
            <Link href="/services" className="hover:text-neutral-200">
              Services
            </Link>
            <Link href="/contact" className="hover:text-neutral-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
