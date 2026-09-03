"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPillBar from "@/components/FloatingPillBar";
import Modals from "@/components/Modals";
import { UserCheck, Stethoscope, ShieldAlert, LineChart, CheckCircle2, ArrowRight } from "lucide-react";

export default function StakeholdersPage() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [osModalOpen, setOsModalOpen] = useState(false);
  const [founderModalId, setFounderModalId] = useState<string | null>(null);

  const pillars = [
    {
      name: "Patients",
      number: "100%",
      metric: "Upfront Bill Predictability",
      headline: "Care that is predictable, quick, and explained before it's billed.",
      points: [
        "No hidden surprise invoices after clinical discharge",
        "Average door-to-consultation triage time under 12 minutes",
        "Secondary-care treatment plans explained clearly in plain language",
        "Direct integration with all leading UAE health insurance networks",
      ],
    },
    {
      name: "Doctors & Nurses",
      number: "+45%",
      metric: "Direct Clinical Focus Time",
      headline: "Time returned to medicine. The system carries the coordination.",
      points: [
        "Automated surgical theater prep, lab alerts, and pharmacy dispatch",
        "Zero redundant administrative EHR data re-entry",
        "Protocol-guided clinical workflows (Apollo backed)",
        "Focus on patient wellness and precise intervention",
      ],
    },
    {
      name: "Insurers",
      number: "-28%",
      metric: "Secondary Claims Expense Reduction",
      headline: "Earlier intervention, fewer complications, and lower cost of cover.",
      points: [
        "Timely secondary treatment stops preventable tertiary escalation",
        "Eliminates unwarranted procedure over-utilization",
        "Real-time claims adjudication and pre-authorization validation",
        "Lower loss ratios on UAE middle-income insured lives",
      ],
    },
    {
      name: "Investors",
      number: "29%",
      metric: "Optimized Operational Margin",
      headline: "A hospital that generates cash, and a system that repeats the result.",
      points: [
        "Asset-efficient secondary care model with high OR asset turns",
        "Software-driven network scalability powered by MIHC",
        "1st hospital learnings transfer seamlessly to the 10th",
        "Experienced execution team with proven $6M to $84M scale-up playbook",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#171A20] selection:bg-[#3E6AE1] selection:text-white pb-14">
      <Navbar
        onOpenAssistant={(q) => {
          setAssistantQuery(q || "");
          setAssistantOpen(true);
        }}
        onOpenSchedule={() => setScheduleOpen(true)}
      />

      {/* Header Banner */}
      <section className="pt-28 pb-16 px-6 max-w-4xl mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#5C5E62]">
          Value Alignment
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171A20] mt-3">
          One system. <br />
          <span className="text-[#5C5E62]">Every stakeholder reads a different number off it.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#393C41] max-w-2xl mx-auto font-light leading-relaxed">
          Traditional healthcare pits patients, clinicians, insurers, and operators against one another. Medora1 aligns all four perspectives through a single operating architecture.
        </p>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-12 px-6 sm:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p) => (
            <div key={p.name} className="p-8 sm:p-10 rounded-xl bg-[#F4F4F4] border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                  <h2 className="text-2xl font-semibold text-[#171A20]">{p.name}</h2>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#171A20]">{p.number}</div>
                    <div className="text-[11px] text-[#5C5E62]">{p.metric}</div>
                  </div>
                </div>

                <p className="mt-6 text-lg font-medium text-[#171A20] leading-snug">
                  &ldquo;{p.headline}&rdquo;
                </p>

                <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#393C41]">
                  {p.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6AE1] mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-300 flex justify-end">
                <button
                  onClick={() => setScheduleOpen(true)}
                  className="text-xs font-semibold text-[#171A20] hover:text-[#3E6AE1] transition flex items-center gap-1 cursor-pointer"
                >
                  <span>Connect With Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FloatingPillBar
        onOpenAssistant={(q) => {
          setAssistantQuery(q || "");
          setAssistantOpen(true);
        }}
        onOpenSchedule={() => setScheduleOpen(true)}
      />

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

      <Footer />
    </main>
  );
}
