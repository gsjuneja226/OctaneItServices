"use client";

import { useEffect, useRef, useState } from "react";

interface TaglineRevealProps {
  phrase?: string;
  subtext?: string;
}

export default function TaglineReveal({
  phrase = "We replace bloated agency retainers with direct engineering, accountable ad spend, and senior craft.",
  subtext = "Every sprint delivers production code, verified search schema, and creative assets you own forever."
}: TaglineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const words = phrase.split(" ");

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setRevealedCount(words.length);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start reveal when container enters lower half of viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;

      if (rect.top > start) {
        setRevealedCount(0);
      } else if (rect.top < end) {
        setRevealedCount(words.length);
      } else {
        const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
        const count = Math.floor(progress * words.length);
        setRevealedCount(count);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <section className="py-24 md:py-32 bg-[#200a03] text-white border-y border-[#3d190a] overflow-hidden">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="text-xs font-mono font-medium text-[#d0b38a] uppercase tracking-widest">
          [ The Studio Standard ]
        </div>

        {/* Word by word reveal heading */}
        <div ref={containerRef} className="py-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight [text-wrap:balance]">
            {words.map((word, index) => {
              const isRevealed = index < revealedCount;
              return (
                <span
                  key={index}
                  className={`inline-block mr-2 transition-colors duration-200 ${
                    isRevealed 
                      ? "text-white" 
                      : "text-white/20"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#c4b3a5] leading-relaxed max-w-[620px] mx-auto [text-wrap:pretty]">
          {subtext}
        </p>

      </div>
    </section>
  );
}
