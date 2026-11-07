"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const pupilLeftRef = useRef<HTMLImageElement>(null);
  const pupilRightRef = useRef<HTMLImageElement>(null);

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const userInteractedRef = useRef(false);
  const lastInteractionTimeRef = useRef(0);

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function applyGaze(gx: number, gy: number) {
      const valX = gx.toFixed(5);
      const valY = gy.toFixed(5);
      if (pupilLeftRef.current) {
        pupilLeftRef.current.style.setProperty("--gx", valX);
        pupilLeftRef.current.style.setProperty("--gy", valY);
      }
      if (pupilRightRef.current) {
        pupilRightRef.current.style.setProperty("--gx", valX);
        pupilRightRef.current.style.setProperty("--gy", valY);
      }
    }

    function easeLoop(timestamp: number) {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = Math.min(timestamp - lastTimeRef.current, 64);
      lastTimeRef.current = timestamp;

      if (reducedMotionQuery.matches) {
        currentRef.current = { x: 0, y: 0 };
        applyGaze(0, 0);
        rafIdRef.current = null;
        lastTimeRef.current = null;
        return;
      }

      // On coarse pointer (phone/touch), if no recent tap/touch for 6s, run gentle ambient loop
      if (coarseQuery.matches) {
        const timeSinceTouch = Date.now() - lastInteractionTimeRef.current;
        if (!userInteractedRef.current || timeSinceTouch > 6000) {
          const angle = (timestamp / 11000) * 2 * Math.PI;
          targetRef.current.x = 0.5 * Math.cos(angle);
          targetRef.current.y = 0.5 * Math.sin(angle);
        }
      }

      // Time-based exponential ease: k = 1 - exp(-dt / 95)
      const k = 1 - Math.exp(-dt / 95);
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * k;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * k;

      const isCoarseIdle =
        coarseQuery.matches &&
        (!userInteractedRef.current || Date.now() - lastInteractionTimeRef.current > 6000);

      // Settle within 0.0005 if not in ambient loop
      if (
        !isCoarseIdle &&
        Math.abs(targetRef.current.x - currentRef.current.x) < 0.0005 &&
        Math.abs(targetRef.current.y - currentRef.current.y) < 0.0005
      ) {
        currentRef.current.x = targetRef.current.x;
        currentRef.current.y = targetRef.current.y;
        applyGaze(currentRef.current.x, currentRef.current.y);
        rafIdRef.current = null;
        lastTimeRef.current = null;
        return;
      }

      applyGaze(currentRef.current.x, currentRef.current.y);
      rafIdRef.current = requestAnimationFrame(easeLoop);
    }

    function startLoop() {
      if (!rafIdRef.current) {
        lastTimeRef.current = null;
        rafIdRef.current = requestAnimationFrame(easeLoop);
      }
    }

    function stopLoop() {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
        lastTimeRef.current = null;
      }
    }

    function handlePointerOrTouch(clientX: number, clientY: number) {
      if (reducedMotionQuery.matches) return;
      if (!frameRef.current) return;

      const rect = frameRef.current.getBoundingClientRect();
      const midX = rect.left + rect.width * 0.49463;
      const midY = rect.top + rect.height * 0.34444;

      const dx = clientX - midX;
      const dy = clientY - midY;
      const dist = Math.hypot(dx, dy);

      // 6px dead zone around eye midpoint
      if (dist <= 6) return;

      // Target is normalized unit vector: direction only, distance discarded
      targetRef.current.x = dx / dist;
      targetRef.current.y = dy / dist;
      userInteractedRef.current = true;
      lastInteractionTimeRef.current = Date.now();

      startLoop();
    }

    function onPointerMove(e: PointerEvent) {
      handlePointerOrTouch(e.clientX, e.clientY);
    }

    function onPointerDown(e: PointerEvent) {
      handlePointerOrTouch(e.clientX, e.clientY);
    }

    function onTouchStart(e: TouchEvent) {
      if (e.touches && e.touches.length > 0) {
        handlePointerOrTouch(e.touches[0].clientX, e.touches[0].clientY);
      }
    }

    function onTouchMove(e: TouchEvent) {
      if (e.touches && e.touches.length > 0) {
        handlePointerOrTouch(e.touches[0].clientX, e.touches[0].clientY);
      }
    }

    function handleModeChange() {
      stopLoop();
      if (reducedMotionQuery.matches) {
        currentRef.current = { x: 0, y: 0 };
        targetRef.current = { x: 0, y: 0 };
        applyGaze(0, 0);
      } else {
        startLoop();
      }
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    if (coarseQuery.addEventListener) {
      coarseQuery.addEventListener("change", handleModeChange);
      reducedMotionQuery.addEventListener("change", handleModeChange);
    } else {
      coarseQuery.addListener(handleModeChange);
      reducedMotionQuery.addListener(handleModeChange);
    }

    if (reducedMotionQuery.matches) {
      applyGaze(0, 0);
    } else {
      startLoop();
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      if (coarseQuery.removeEventListener) {
        coarseQuery.removeEventListener("change", handleModeChange);
        reducedMotionQuery.removeEventListener("change", handleModeChange);
      }
      stopLoop();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden isolate select-none bg-[#0e0502] text-white h-[calc(100svh-4rem)] md:h-[100svh] min-h-[560px] border-b border-[#240d05] flex flex-col justify-end">
      <style jsx global>{`
        .octane-headline {
          font-family: 'Archivo', Impact, sans-serif;
          font-variation-settings: 'wdth' 62, 'wght' 800;
          font-stretch: 62%;
          font-weight: 800;
        }
        .octane-sans {
          font-family: 'Onest', Arial, sans-serif;
          font-weight: 400;
        }
        .octane-pupil {
          transform: translate(calc(var(--gx, 0) * 14.06%), calc(var(--gy, 0) * 14.06%));
          will-change: transform;
        }
      `}</style>

      {/* 1. Cover Frame Wrapper (Centered with flexbox, preserves root stacking context) */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none select-none">
        <div
          ref={frameRef}
          className="relative min-w-full min-h-full flex-shrink-0"
          style={{ aspectRatio: "16 / 9" }}
          aria-hidden="true"
        >
          {/* Cavern background (z-index: 0) */}
          <img
            className="absolute inset-0 w-full h-full object-cover pointer-events-none block z-0"
            src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/scene-2.webp"
            alt=""
            fetchPriority="high"
            aria-hidden="true"
          />

          {/* Character cutout with alpha (z-index: 2 - in front of headline, behind eyes) */}
          <img
            className="absolute inset-0 w-full h-full object-cover pointer-events-none block z-[2]"
            src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/figure-1.webp"
            alt=""
            aria-hidden="true"
          />

          {/* Left eye (z-index: 3) */}
          <span
            className="absolute pointer-events-none select-none z-[3]"
            style={{
              width: "5.000%",
              aspectRatio: "1 / 1",
              left: "44.160%",
              top: "34.340%",
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden="true"
          >
            <img
              ref={pupilLeftRef}
              className="octane-pupil block w-full h-full pointer-events-none"
              src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/pupil-1.webp"
              alt=""
              aria-hidden="true"
            />
          </span>

          {/* Right eye (z-index: 3) */}
          <span
            className="absolute pointer-events-none select-none z-[3]"
            style={{
              width: "5.000%",
              aspectRatio: "1 / 1",
              left: "54.766%",
              top: "34.549%",
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden="true"
          >
            <img
              ref={pupilRightRef}
              className="octane-pupil block w-full h-full pointer-events-none"
              src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/pupil-1.webp"
              alt=""
              aria-hidden="true"
            />
          </span>
        </div>
      </div>

      {/* 2. Headline: OCTANE (z-index: 1 - passes BEHIND the creature!) */}
      <h1 className="octane-headline absolute left-[3vw] top-[5vw] sm:top-[5vw] md:top-[4vw] m-0 p-0 z-[1] text-[19vw] sm:text-[22vw] md:text-[25vw] leading-none whitespace-nowrap uppercase text-white select-none pointer-events-none tracking-tight">
        OCTANE
      </h1>

      {/* 3. Right Tagline (z-index: 1 on desktop) */}
      <div className="octane-sans absolute hidden md:block right-[4vw] md:right-[6vw] top-[50%] md:top-[52%] m-0 p-0 z-[1] text-right leading-tight select-none pointer-events-none">
        <span className="block text-[11px] font-mono tracking-widest text-[#94ab76] uppercase font-bold">// DELIVERABLES</span>
        <span className="block text-lg md:text-[1.5vw] font-black uppercase text-white tracking-tight mt-1">
          CODE • SEARCH • ADS
        </span>
        <span className="block text-xs md:text-[1vw] text-[#d0b38a] font-medium uppercase mt-0.5">
          Zero Retainer Bloat
        </span>
      </div>

      {/* 4. Bottom Services Showcase + Direct Interactive CTAs (z-index: 4) */}
      <div className="relative z-[4] px-4 sm:px-8 pb-6 sm:pb-10 space-y-3 max-w-xl">
        {/* Services High-Contrast Display Card (Zero color mixing on mobile) */}
        <div className="bg-[#0e0502]/92 sm:bg-[#0e0502]/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#3e1a0d] shadow-2xl space-y-2">
          {/* Main Services List (High contrast, crystal clear readability) */}
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fcd699] flex-shrink-0"></span>
              <span>Fast Next.js Websites &amp; Web Applications</span>
            </div>
            <div className="flex items-center gap-2 text-[#f2ebe4] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#94ab76] flex-shrink-0"></span>
              <span>Performance Google &amp; Meta Ads (Cost-Per-Lead)</span>
            </div>
            <div className="flex items-center gap-2 text-[#e8ded5] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fcd699] flex-shrink-0"></span>
              <span>Technical &amp; AI Search SEO • Vertical Video Reels</span>
            </div>
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="py-2.5 px-5 sm:py-3 sm:px-6 rounded-xl text-xs sm:text-sm font-bold bg-[#d0b38a] hover:bg-[#dec5a2] text-[#0e0502] transition-all text-center inline-flex items-center justify-center gap-2 group cursor-pointer shadow-xl active:scale-95"
          >
            <span>Tell us what you are working on</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold bg-[#1a0a05]/95 hover:bg-[#250e07] text-white border border-[#34150a] backdrop-blur-md transition-colors text-center inline-flex items-center justify-center cursor-pointer active:scale-95"
          >
            Explore all 14 services
          </Link>
        </div>
      </div>
    </section>
  );
}
