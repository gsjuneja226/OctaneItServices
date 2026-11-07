"use client";

import { useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { COMPANY } from "@/data/companyData";

const QUICK_PILL_OPTIONS = [
  "Next.js Website",
  "Google & Meta Ads",
  "SEO & AI Search",
  "Video & Design"
];

export default function EnquiryForm({
  title = "Tell us what you are working on",
  subtitle = "Send a few quick details about your project. A senior engineer or marketer will reply within 24 hours."
}: {
  title?: string;
  subtitle?: string;
}) {
  const [selectedPill, setSelectedPill] = useState<string>("Next.js Website");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) {
      alert("Please provide your name and contact info (email or phone).");
      return;
    }

    setStatus("submitting");

    try {
      const isEmail = formData.contact.includes("@");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: isEmail ? formData.contact : "",
          phone: !isEmail ? formData.contact : "",
          services: [selectedPill],
          message: formData.message || `Interested in: ${selectedPill}`,
          submittedAt: new Date().toISOString()
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! We received your brief and will reply within 24 hours.");
        setFormData({ name: "", contact: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Something went wrong. Please call or email us directly.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please try reaching us directly via WhatsApp or phone.");
    }
  };

  return (
    <div className="bg-[#180a04] rounded-2xl border border-[#2e1208] p-6 sm:p-8 shadow-2xl text-white max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#240e06] border border-[#3b170a] text-[11px] font-mono font-bold text-[#d0b38a] uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3 text-[#94ab76]" />
          <span>Quick Project Brief</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-1 text-[#bfa99b] text-xs sm:text-sm">
          {subtitle}
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-xl bg-[#120501] border border-[#2e1208] text-center space-y-3 animate-in fade-in">
          <div className="w-10 h-10 bg-[#250e06] text-[#94ab76] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Brief Received</h3>
          <p className="text-xs sm:text-sm text-[#c4b3a5] max-w-md mx-auto leading-relaxed">
            {responseMsg}
          </p>
          <div className="pt-2 text-xs text-neutral-400">
            Urgent project? Call us directly on{" "}
            <a href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`} className="text-[#d0b38a] underline font-medium">
              {COMPANY.contact.phone}
            </a>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 px-4 py-1.5 bg-[#d0b38a] text-[#0e0502] rounded-lg text-xs font-bold hover:bg-[#dec5a2] cursor-pointer"
          >
            Submit another note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Quick Pillar Selector */}
          <div>
            <label className="block text-[11px] font-semibold uppercase text-[#d0b38a] mb-1.5 tracking-wider">
              Primary Area
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {QUICK_PILL_OPTIONS.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setSelectedPill(pill)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    selectedPill === pill
                      ? "bg-[#2e1208] border-[#d0b38a] text-white shadow-sm font-semibold"
                      : "bg-[#120501] border-[#240e06] text-[#a89689] hover:border-[#38160a] hover:text-white"
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Contact Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-[#cfbeaf] mb-1">
                Your Name <span className="text-[#d0b38a]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Rohan Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#120501] border border-[#2e1208] text-white text-xs placeholder-[#5a463c] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#cfbeaf] mb-1">
                Email or WhatsApp / Phone <span className="text-[#d0b38a]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="rohan@company.com or +91 98..."
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#120501] border border-[#2e1208] text-white text-xs placeholder-[#5a463c] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30"
              />
            </div>
          </div>

          {/* What are you working on? */}
          <div>
            <label className="block text-[11px] font-semibold text-[#cfbeaf] mb-1">
              What are you looking to build or solve?
            </label>
            <textarea
              rows={3}
              placeholder="Tell us a little about your project, timeline, or current goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#120501] border border-[#2e1208] text-white text-xs placeholder-[#5a463c] focus:outline-none focus:border-[#d0b38a] focus:ring-1 focus:ring-[#d0b38a]/30 resize-none"
            />
          </div>

          {status === "error" && (
            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-900 text-xs text-red-200">
              {responseMsg}
            </div>
          )}

          {/* Submit Row */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#d0b38a] hover:bg-[#dec5a2] text-[#0e0502] font-bold text-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
            >
              <span>{status === "submitting" ? "Sending brief..." : "Send Project Brief"}</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-[#8f7e73]">
              Senior engineer reply within 24h • No spam
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
