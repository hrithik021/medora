"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPillBar from "@/components/FloatingPillBar";
import Modals from "@/components/Modals";
import { Award, Landmark, Building, TrendingUp, ShieldCheck } from "lucide-react";

export default function LeadershipPage() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [osModalOpen, setOsModalOpen] = useState(false);
  const [founderModalId, setFounderModalId] = useState<string | null>(null);

  const founders = [
    {
      id: "dr-raza",
      initials: "RS",
      name: "Dr. Raza Siddiqui",
      role: "Co-Founder",
      highlights: "20+ Years GCC Hospital Leadership",
      bio: "Two decades running Gulf hospital groups, from CEO of Arabian Healthcare Group to Executive Director of Arabian Healthcare Group — operations across 11 countries and 650+ healthcare professionals, built on JCI, TEMOS and ISO accreditation. Holds direct relationships across IHC, G42 and the UAE's sovereign health entities, and sits on the  Chamber of Commerce Board.",
      metrics: [
        { label: "Countries Operated", val: "11" },
        { label: "Clinical Network", val: "650+" },
        { label: "Governance", val: " Chamber" },
      ],
    },
    {
      id: "bidhann",
      initials: "BC",
      name: "Bidhann Chaudary",
      role: "Co-Founder",
      highlights: "National Mandates & Presidential Programs",
      bio: "Built Medi Q into a hospital operator trusted with national-scale mandates — hospitals delivered under the UAE Presidential Program across five countries, the UAE's nationwide COVID-19 vaccination program, and a 200-bed, 50-ICU field hospital raised in nine days — before leading Medi Q to its exit to IHC (Tamouh Holding).",
      metrics: [
        { label: "Field Hospital", val: "9 Days" },
        { label: "Presidential Mandates", val: "5 Nations" },
        { label: "M&A Exit", val: "IHC / Tamouh" },
      ],
    },
    {
      id: "abhinav",
      initials: "AS",
      name: "Abhinav Sharma",
      role: "Co-Founder",
      highlights: "14x Scale-Up & Margin Expansion",
      bio: "An IIM Ahmedabad alumnus who took a surgery platform from USD 6M to USD 84M — a 14x scale-up — while nearly quintupling profit margin, from 6% to 29%, and growing the network from 1 hospital to 13 across 7 specialties and 4 service lines.",
      metrics: [
        { label: "Platform Scale", val: "$6M → $84M" },
        { label: "Margin Multiple", val: "6% → 29%" },
        { label: "Network Growth", val: "1 → 13 Facilities" },
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
          Executive Leadership &amp; Governance
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171A20] mt-3">
          Founders
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#393C41] max-w-2xl mx-auto font-light leading-relaxed">
          Decades of proven sovereign execution, national-scale mandates, and hyper-efficient hospital scale-ups across the GCC.
        </p>
      </section>

      {/* Boardroom Panorama Banner */}
      <section className="px-6 max-w-[1400px] mx-auto mb-16">
        <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <Image
            src="/images/medora_founders_board.jpg"
            alt="Medora1 Leadership Boardroom"
            fill
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Institutional Governance</span>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-1">Sovereign Track Record in Healthcare Execution</h2>
          </div>
        </div>
      </section>

      {/* Founders Bios Grid */}
      <section className="py-6 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((f) => (
            <div key={f.id} className="p-8 rounded-xl bg-[#F4F4F4] border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-lg font-bold text-[#171A20]">
                    {f.initials}
                  </div>
                  <span className="text-xs text-[#5C5E62] font-medium">{f.highlights}</span>
                </div>

                <h3 className="text-2xl font-semibold text-[#171A20]">{f.name}</h3>
                <div className="text-xs font-semibold text-[#3E6AE1] uppercase tracking-wider mt-1">{f.role}</div>

                <p className="mt-4 text-sm text-[#393C41] leading-relaxed">{f.bio}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  {f.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-2 rounded border border-gray-200">
                      <div className="text-xs font-bold text-[#171A20]">{m.val}</div>
                      <div className="text-[10px] text-[#5C5E62] mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setFounderModalId(f.id)}
                  className="w-full text-center text-xs font-semibold text-[#171A20] hover:text-[#3E6AE1] transition cursor-pointer"
                >
                  View Complete Bio Dossier &rarr;
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
