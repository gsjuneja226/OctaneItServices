import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#1a0601] text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="font-mono text-xs font-bold text-[#d0b38a] uppercase tracking-wider">
          [ Error 404 ]
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Page not found
        </h1>
        <p className="text-sm text-[#c4b3a5] leading-relaxed">
          The link you clicked may be broken or the page was moved. Use the links below to find what you need.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold bg-[#d0b38a] hover:bg-[#dec5a2] text-[#1a0601] transition-colors inline-flex items-center justify-center gap-1.5 shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold border border-[#3e1a0b] hover:border-[#5c2712] text-neutral-300 hover:text-white transition-colors inline-flex items-center justify-center gap-1.5 bg-[#240c03]"
          >
            <span>Browse Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
