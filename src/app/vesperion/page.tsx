import VesperionHero from "@/components/VesperionHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vesperion | Interactive Hero Experience",
  description: "High fidelity character gaze tracking and multilayer depth hero experience.",
};

export default function VesperionPage() {
  return (
    <main className="w-full min-h-screen bg-[#1a0601]">
      <VesperionHero />
    </main>
  );
}

