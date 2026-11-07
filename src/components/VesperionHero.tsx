"use client";

import React, { useEffect, useRef } from "react";

interface VesperionHeroProps {
  headline?: string;
  studioName?: string;
  navItems?: string[];
  actionText?: string;
  taglineLine1?: string;
  taglineLine2?: string;
  descLine1?: string;
  descLine2?: string;
  descLine3?: string;
  showSiteNav?: boolean;
}

export default function VesperionHero({
  headline = "VESPERION",
  studioName = "MARLOW STUDIO",
  navItems = ["SELECTED", "LOGS", "NOTES", "CAREER"],
  actionText = "// BOOK ME",
  taglineLine1 = "// DETAIL THAT",
  taglineLine2 = "CARRIES THE STORY",
  descLine1 = "// I’M MARLOW, A FREELANCE VISUAL DESIGNER",
  descLine2 = "WORKING WITH FOUNDERS AND SMALL TEAMS",
  descLine3 = "ON IDENTITIES THAT REALLY DO LAST.",
}: VesperionHeroProps) {
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

      if (coarseQuery.matches) {
        const timeSinceTouch = Date.now() - lastInteractionTimeRef.current;
        if (!userInteractedRef.current || timeSinceTouch > 6000) {
          const angle = (timestamp / 11000) * 2 * Math.PI;
          targetRef.current.x = 0.5 * Math.cos(angle);
          targetRef.current.y = 0.5 * Math.sin(angle);
        }
      }

      // Time-based exponential ease
      const k = 1 - Math.exp(-dt / 95);
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * k;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * k;

      const isCoarseIdle =
        coarseQuery.matches &&
        (!userInteractedRef.current || Date.now() - lastInteractionTimeRef.current > 6000);

      // Settle within 0.0005
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

      // 6px dead zone
      if (dist <= 6) return;

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
    <div className="relative w-full overflow-hidden isolate select-none bg-[#1a0601] text-white min-h-[100svh] font-sans">
      {/* Headline & body typography classes */}

      <style jsx global>{`
        .vesperion-headline {
          font-family: 'Archivo', Impact, sans-serif;
          font-variation-settings: 'wdth' 62, 'wght' 800;
          font-stretch: 62%;
          font-weight: 800;
        }
        .vesperion-body {
          font-family: 'Onest', Arial, sans-serif;
          font-weight: 400;
        }
        .vesperion-pupil {
          transform: translate(calc(var(--gx, 0) * 14.06%), calc(var(--gy, 0) * 14.06%));
          will-change: transform;
        }
      `}</style>

      {/* 1. The Cover Frame */}
      <div
        ref={frameRef}
        className="absolute inset-0 m-auto min-w-full min-h-full pointer-events-none select-none"
        style={{ aspectRatio: "16 / 9" }}
        aria-hidden="true"
      >
        {/* Cavern background */}
        <img
          className="absolute inset-0 w-full h-full object-cover pointer-events-none block z-0"
          src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/scene-2.webp"
          alt=""
          fetchPriority="high"
          aria-hidden="true"
        />

        {/* Character cutout */}
        <img
          className="absolute inset-0 w-full h-full object-cover pointer-events-none block z-[2]"
          src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/figure-1.webp"
          alt=""
          aria-hidden="true"
        />

        {/* Left eye */}
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
            className="vesperion-pupil block w-full h-full pointer-events-none"
            src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/pupil-1.webp"
            alt=""
            aria-hidden="true"
          />
        </span>

        {/* Right eye */}
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
            className="vesperion-pupil block w-full h-full pointer-events-none"
            src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/pupil-1.webp"
            alt=""
            aria-hidden="true"
          />
        </span>
      </div>

      {/* 2. Navigation */}
      <nav className="relative z-[4] flex flex-row items-center justify-between vesperion-body uppercase tracking-normal select-none px-[2.58vw] py-[2.15vw] text-[1.13vw] leading-[1.2] max-[700px]:px-5 max-[700px]:pt-6 max-[700px]:pb-0 max-[700px]:flex-wrap max-[700px]:gap-7 max-[700px]:text-xs max-[360px]:p-4 max-[360px]:text-[11px]">
        {/* Left: Logo & Studio Name */}
        <div className="flex flex-row items-center gap-[0.35vw] whitespace-nowrap max-[700px]:gap-1.5">
          <img
            className="w-[1.35em] h-[1.35em] block pointer-events-none"
            src="https://wjwoitlioftohvwfymeq.supabase.co/storage/v1/object/public/designs/vesperion/logo.webp"
            alt=""
            aria-hidden="true"
          />
          <span>{studioName}</span>
        </div>

        {/* Center: Menu items */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-row items-center gap-[3.9vw] whitespace-nowrap max-[700px]:static max-[700px]:translate-x-0 max-[700px]:w-full max-[700px]:justify-between max-[700px]:gap-3 max-[700px]:order-3">
          {navItems.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>

        {/* Right: Action */}
        <div className="flex flex-row items-center gap-[0.9vw] whitespace-nowrap max-[700px]:gap-2.5">
          <span>{actionText}</span>
          <div
            className="w-[2.25vw] h-[2.25vw] border-[1.5px] border-white rounded-full inline-flex items-center justify-center shrink-0 max-[700px]:w-7 max-[700px]:h-7"
            aria-hidden="true"
          >
            <svg
              className="w-[44%] h-[44%] block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="7" x2="17" y2="7"></line>
              <line x1="17" y1="7" x2="17" y2="17"></line>
            </svg>
          </div>
        </div>
      </nav>

      {/* 3. Headline */}
      <h1 className="vesperion-headline absolute left-[2.58vw] top-[7vw] m-0 p-0 z-[1] text-[23.5vw] leading-none whitespace-nowrap uppercase text-white select-none pointer-events-none max-[700px]:top-[144px] max-[700px]:left-[2.58vw]">
        {headline}
      </h1>

      {/* 4. Right Tagline */}
      <p className="vesperion-body absolute left-[71.5%] top-[56.7%] m-0 p-0 z-[1] text-[1.61vw] leading-[1.45] uppercase text-white select-none pointer-events-none max-[700px]:left-auto max-[700px]:right-[22px] max-[700px]:top-[40%] max-[700px]:text-[18px] max-[700px]:leading-[1.5]">
        <span className="block">{taglineLine1}</span>
        <span className="block pl-[2.85vw] max-[700px]:pl-6">{taglineLine2}</span>
      </p>

      {/* 5. Bottom-Left Description */}
      <p className="vesperion-body absolute left-[3.95vw] bottom-[7.7vh] m-0 p-0 z-[1] text-[1.075vw] leading-[1.75] uppercase text-white select-none pointer-events-none max-[700px]:left-[22px] max-[700px]:right-[22px] max-[700px]:bottom-[36px] max-[700px]:text-[12px] max-[700px]:leading-[1.8] max-[360px]:left-4 max-[360px]:right-4 max-[360px]:bottom-4 max-[360px]:text-[11px]">
        <span className="block">{descLine1}</span>
        <span className="block pl-[3.6vw] max-[700px]:pl-5">{descLine2}</span>
        <span className="block">{descLine3}</span>
      </p>
    </div>
  );
}
