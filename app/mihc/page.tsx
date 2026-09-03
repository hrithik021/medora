"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPillBar from "@/components/FloatingPillBar";
import Modals from "@/components/Modals";
import { Cpu, Activity, Clock, ShieldCheck, TrendingUp, Layers, Check, X } from "lucide-react";

export default function MedoraOSPage() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [osModalOpen, setOsModalOpen] = useState(false);
  const [founderModalId, setFounderModalId] = useState<string | null>(null);

  const modules = [
    {
      num: "01",
      title: "Triage & Patient Routing Engine",
      subtitle: "Decides who is seen when",
      desc: "Dynamically manages ambulatory queues, diagnostics routing, and bed allocations to drive down wait times to under 12 minutes while ensuring urgent cases receive immediate clinical attention.",
      metrics: "< 12 min average triage turnaround",
    },
    {
      num: "02",
      title: "Diagnostic Velocity Engine",
      subtitle: "Tracks how fast a diagnosis moves",
      desc: "Synchronizes laboratory testing, radiologic imaging, and consultant reviews into an automated pipeline, eliminating paperwork drag and unblocking clinical paths.",
      metrics: "4.2x faster diagnostic report closure",
    },
    {
      num: "03",
      title: "Upfront Transparent Billing Algorithm",
      subtitle: "What a procedure costs and why",
      desc: "Pre-calculates fully transparent, itemized treatment estimates before patient interventions commence. Eliminates surprise billing, disputes, and delayed claim approvals.",
      metrics: "100% pre-procedure price transparency",
    },
    {
      num: "04",
      title: "Autonomous Margin Optimization",
      subtitle: "Where every dirham of margin actually goes",
      desc: "Provides real-time cost telemetry down to consumable items and theater minutes, locking in predictable 29% operating margins across every specialty unit.",
      metrics: "6% to 29% operating margin expansion",
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

      {/* Hero Banner */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden bg-slate-950">
        <Image
          src="/images/medora_os_interface.jpg"
          alt="MIHC Medical Command Center"
          fill
          priority
          className="object-cover object-center opacity-70"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-black/40 px-3 py-1 rounded border border-white/20">
            Proprietary Technology
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mt-4">
            MIHC
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-light">
            The operating system that runs the hospital — not the records, the business.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setScheduleOpen(true)}
              className="h-10 px-6 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white text-sm font-medium transition cursor-pointer"
            >
              Request OS Enterprise Demo
            </button>
            <button
              onClick={() => setOsModalOpen(true)}
              className="h-10 px-6 rounded-[4px] bg-white hover:bg-slate-100 text-[#171A20] text-sm font-medium transition cursor-pointer"
            >
              View System Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="py-20 px-6 max-w-[1300px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#171A20]">
            Four Core Engines. One Synchronized System.
          </h2>
          <p className="mt-3 text-base text-[#5C5E62]">
            Care predictability for the patient and profit predictability for the hospital are the same system, seen from two seats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m) => (
            <div key={m.num} className="p-8 rounded-lg bg-[#F4F4F4] border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="text-sm font-bold text-[#5C5E62]">{m.num}</div>
                <h3 className="text-2xl font-semibold text-[#171A20] mt-2">{m.title}</h3>
                <div className="text-xs font-medium text-[#3E6AE1] uppercase tracking-wider mt-1">{m.subtitle}</div>
                <p className="mt-4 text-sm text-[#393C41] leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-300 flex items-center justify-between text-xs font-semibold text-[#171A20]">
                <span>KPI Target</span>
                <span className="text-[#3E6AE1]">{m.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison: Legacy Healthcare IT vs MIHC */}
      <section className="bg-[#F4F4F4] py-20 px-6 sm:px-12">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#171A20] mb-12">
            Traditional Hospital IT vs. MIHC
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#171A20] text-white p-4 text-xs sm:text-sm font-semibold">
              <div>Capability</div>
              <div>Legacy Hospital Systems</div>
              <div className="text-amber-400">MIHC</div>
            </div>

            <div className="divide-y divide-gray-100 text-xs sm:text-sm text-[#393C41]">
              <div className="grid grid-cols-3 p-4 items-center">
                <div className="font-semibold text-[#171A20]">Primary Purpose</div>
                <div>Billing records &amp; static charting</div>
                <div className="font-medium text-[#171A20]">Live operational &amp; clinical synchronization</div>
              </div>

              <div className="grid grid-cols-3 p-4 items-center">
                <div className="font-semibold text-[#171A20]">Patient Billing</div>
                <div>Post-discharge invoice surprises</div>
                <div className="font-medium text-[#171A20]">100% upfront pre-agreed estimates</div>
              </div>

              <div className="grid grid-cols-3 p-4 items-center">
                <div className="font-semibold text-[#171A20]">Margin Visibility</div>
                <div>Delayed monthly accounting reviews</div>
                <div className="font-medium text-[#171A20]">Real-time per-procedure margin telemetry</div>
              </div>

              <div className="grid grid-cols-3 p-4 items-center">
                <div className="font-semibold text-[#171A20]">Multi-Hospital Scale</div>
                <div>Siloed databases per facility</div>
                <div className="font-medium text-[#171A20]">Shared learning loop (1st to 10th hospital)</div>
              </div>
            </div>
          </div>
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
