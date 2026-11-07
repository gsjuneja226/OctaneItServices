"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import { COMPANY } from "@/data/companyData";

const SERVICE_OPTIONS = [
  "SEO & Technical Crawl Audit",
  "PPC / Cost Per Lead Ads (Google & Meta)",
  "AI SEO & Citations (ChatGPT/Perplexity)",
  "Next.js Website or Dashboard",
  "Short-Form Video Production (Reels/Shorts)",
  "Social Media Handling",
  "AI Workflows & Lead Automation",
  "Pamphlet & Graphic Design",
  "Shopify / WordPress E-Commerce"
];

const BUDGET_OPTIONS = [
  "Under ₹30,000 / mo",
  "₹30,000 – ₹60,000 / mo",
  "₹60,000 – ₹1,20,000 / mo",
  "Custom Project / One-Time Build"
];

export default function EnquiryForm({ title, subtitle }: { title?: string; subtitle?: string }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([SERVICE_OPTIONS[0]]);
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_OPTIONS[1]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in your name, phone number, and email.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget: selectedBudget
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! We have received your brief and will reply within 24 hours.");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Something went wrong. Please call or email us directly.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please try calling or emailing directly.");
    }
  };

  return (
    <div className="bg-[#240c03] rounded-2xl border border-[#3d190a] p-6 sm:p-10 shadow-2xl text-white">
      {/* Header */}
      <div className="mb-8">
        <div className="text-xs font-mono font-bold text-[#d0b38a] uppercase tracking-wider mb-2">
          [ Direct Sprint Brief ]
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {title || "Tell us what you are looking to build"}
        </h2>
        <p className="mt-2 text-[#c4b3a5] text-xs sm:text-sm">
          {subtitle || "No sales intermediaries. Your inquiry goes straight to senior engineers and media buyers. We reply within 24 hours."}
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-xl bg-[#190601] border border-[#3e1a0b] text-center space-y-4 animate-in fade-in">
          <div className="w-12 h-12 bg-[#2d1206] text-[#94ab76] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Brief Received</h3>
          <p className="text-sm text-[#c4b3a5] max-w-md mx-auto leading-relaxed">
            {responseMsg}
          </p>
          <div className="pt-2 text-xs text-neutral-400">
            For urgent requests, reach us on{" "}
            <a href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`} className="text-[#d0b38a] underline">
              {COMPANY.contact.phone}
            </a>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 px-4 py-2 bg-[#d0b38a] text-[#1a0601] rounded-lg text-xs font-bold hover:bg-[#dec5a2]"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Services multi-select */}
          <div>
            <label className="block text-xs font-semibold uppercase text-[#d0b38a] mb-2 tracking-wider">
              1. Services of interest (select all that apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((svc) => {
                const active = selectedServices.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleService(svc)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      active
                        ? "bg-[#381507] border-[#d0b38a] text-white shadow-sm"
                        : "bg-[#1a0601] border-[#381507] text-[#c4b3a5] hover:border-[#5c2712] hover:text-white"
                    }`}
                  >
                    {svc}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget options */}
          <div>
            <label className="block text-xs font-semibold uppercase text-[#d0b38a] mb-2 tracking-wider">
              2. Anticipated Monthly Budget
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {BUDGET_OPTIONS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelectedBudget(b)}
                  className={`p-2.5 rounded-lg border text-xs text-center font-medium transition-all cursor-pointer ${
                    selectedBudget === b
                      ? "bg-[#381507] border-[#d0b38a] text-white"
                      : "bg-[#1a0601] border-[#381507] text-[#c4b3a5] hover:border-[#5c2712]"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Contact inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#c4b3a5] mb-1">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Rohan Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0601] border border-[#3e1a0b] text-white text-xs placeholder-[#695447] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c4b3a5] mb-1">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0601] border border-[#3e1a0b] text-white text-xs placeholder-[#695447] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c4b3a5] mb-1">
                Work Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="rohan@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0601] border border-[#3e1a0b] text-white text-xs placeholder-[#695447] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c4b3a5] mb-1">
                Company / Website URL
              </label>
              <input
                type="text"
                placeholder="yourcompany.com"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0601] border border-[#3e1a0b] text-white text-xs placeholder-[#695447] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#c4b3a5] mb-1">
              Project Details &amp; Current Pain Points
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you want to build or what's broken in your current marketing/tech stack..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0601] border border-[#3e1a0b] text-white text-xs placeholder-[#695447] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30"
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-lg bg-red-950/50 border border-red-800 text-xs text-red-200">
              {responseMsg}
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#d0b38a] hover:bg-[#dec5a2] text-[#1a0601] font-bold text-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg disabled:opacity-50"
            >
              <span>{status === "submitting" ? "Transmitting brief..." : "Submit Project Brief"}</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-[#a89689]">
              Strict privacy • Non-disclosure respected • No spam ever
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
