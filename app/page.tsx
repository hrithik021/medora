"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import MedoraOSSection from "@/components/MedoraOSSection";
import HospitalCardsSection from "@/components/HospitalCardsSection";
import UAENetworkMapSection from "@/components/UAENetworkMapSection";
import StakeholderMatrix from "@/components/StakeholderMatrix";
import FoundersSection from "@/components/FoundersSection";
import FloatingPillBar from "@/components/FloatingPillBar";
import Modals from "@/components/Modals";
import Footer from "@/components/Footer";

export default function Home() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [osModalOpen, setOsModalOpen] = useState(false);
  const [founderModalId, setFounderModalId] = useState<string | null>(null);

  const handleOpenAssistant = (query?: string) => {
    setAssistantQuery(query || "");
    setAssistantOpen(true);
  };

  const handleOpenSchedule = () => {
    setScheduleOpen(true);
  };

  const handleOpenOSModal = () => {
    setOsModalOpen(true);
  };

  const handleOpenFounderModal = (id: string) => {
    setFounderModalId(id);
  };

  const handleOpenSpecsModal = (facility: string) => {
    setScheduleOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FFFFFF] text-[#171A20] selection:bg-[#3E6AE1] selection:text-white pb-14">
      {/* Exact Tesla Header */}
      <Navbar
        onOpenAssistant={handleOpenAssistant}
        onOpenSchedule={handleOpenSchedule}
      />

      {/* 1. Hero Section (Dubai Skyline Hero) */}
      <HeroSection
        onOpenSchedule={handleOpenSchedule}
        onOpenOSModal={handleOpenOSModal}
      />

      {/* 2. MIHC (Tesla FSD Section Match) */}
      <MedoraOSSection
        onOpenOSModal={handleOpenOSModal}
        onOpenSchedule={handleOpenSchedule}
      />

      {/* 3. Dual Card Section (Tesla Model Y / Model 3 Cards: DIP Flagship & Modular Suites) */}
      <HospitalCardsSection
        onOpenSchedule={handleOpenSchedule}
        onOpenSpecsModal={handleOpenSpecsModal}
      />

      {/* 4. Tesla Map Section ("Find Your Care" - UAE Network Map with 10+ Hospitals / 650+ Pros) */}
      <UAENetworkMapSection
        onOpenSchedule={handleOpenSchedule}
        onOpenSpecsModal={handleOpenSpecsModal}
      />

      {/* 5. Philosophy Section ("Premium is not expensive. They only sound alike.") */}
      <PhilosophySection />

      {/* 6. Stakeholder Matrix (4-Stakeholders Interactive Tabs) */}
      <StakeholderMatrix />

      {/* 7. Founders (Dr. Raza Siddiqui, Bidhann Chaudary, Abhinav Sharma) */}
      <FoundersSection onOpenFounderModal={handleOpenFounderModal} />

      {/* 8. Exact Tesla Floating Bottom Pill Bar */}
      <FloatingPillBar
        onOpenAssistant={handleOpenAssistant}
        onOpenSchedule={handleOpenSchedule}
      />

      {/* Interactive Modals (Tesla Light Theme) */}
      <Modals
        assistantOpen={assistantOpen}
        onCloseAssistant={() => setAssistantOpen(false)}
        initialQuery={assistantQuery}
        scheduleOpen={scheduleOpen}
        onCloseSchedule={() => setScheduleOpen(false)}
        osModalOpen={osModalOpen}
        onCloseOSModal={() => setOsModalOpen(false)}
        founderModalId={founderModalId}
        onCloseFounderModal={() => setFounderModalId(null)}
      />

      {/* Exact Tesla Footer */}
      <Footer />
    </main>
  );
}
