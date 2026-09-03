"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import UAENetworkMapSection from "@/components/UAENetworkMapSection";
import Footer from "@/components/Footer";
import FloatingPillBar from "@/components/FloatingPillBar";
import Modals from "@/components/Modals";
import { Building2, MapPin, ShieldCheck, Activity, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HospitalsPage() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [osModalOpen, setOsModalOpen] = useState(false);
  const [founderModalId, setFounderModalId] = useState<string | null>(null);

  const specialties = [
    { title: "Day Surgery & Minimally Invasive", desc: "High-turnover advanced laparoscopic and robotic-assisted secondary surgical suites." },
    { title: "Orthopedics & Sports Medicine", desc: "Joint reconstruction, trauma, and comprehensive outpatient rehabilitation." },
    { title: "Cardiology & Vascular Diagnostics", desc: "Early intervention, rapid echocardiography, and non-invasive cardiovascular screening." },
    { title: "Internal Medicine & Chronic Care", desc: "Precision secondary management of diabetes, metabolic health, and hypertension." },
    { title: "Women's Health & Gynecology", desc: "Comprehensive maternal diagnostics, day procedures, and wellness screenings." },
    { title: "Pediatrics & Urgent Care", desc: "Zero-wait pediatric consultation and 24/7 acute secondary emergency stabilization." },
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
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden bg-slate-900">
        <Image
          src="/images/apollo_medora_dip.jpg"
          alt="Medora1 Apollo Hospitals Dubai Investment Park"
          fill
          priority
          className="object-cover object-center"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-black/40 px-3 py-1 rounded border border-white/20">
            Flagship Facility
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mt-4">
            Dubai Investment Park
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-light">
            Built with Apollo Hospitals for secondary care done properly.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setScheduleOpen(true)}
              className="h-10 px-6 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white text-sm font-medium transition cursor-pointer"
            >
              Schedule Facility Tour
            </button>
            <Link
              href="/mihc"
              className="h-10 px-6 rounded-[4px] bg-white hover:bg-slate-100 text-[#171A20] text-sm font-medium transition flex items-center justify-center cursor-pointer"
            >
              MIHC Integration
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Overview Strip */}
      <section className="border-b border-gray-200 py-12 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#171A20]">120+</div>
            <div className="text-xs text-[#5C5E62] mt-1 font-medium">Secondary-Care Inpatient Beds</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#171A20]">6 Suites</div>
            <div className="text-xs text-[#5C5E62] mt-1 font-medium">Modular High-Yield Operating Theaters</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#171A20]">JCI / ISO</div>
            <div className="text-xs text-[#5C5E62] mt-1 font-medium">International Clinical Quality Accreditations</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#171A20]">Apollo</div>
            <div className="text-xs text-[#5C5E62] mt-1 font-medium">Global Clinical Partnership Protocols</div>
          </div>
        </div>
      </section>

      {/* UAE Network Map Section */}
      <UAENetworkMapSection
        onOpenSchedule={() => setScheduleOpen(true)}
        onOpenSpecsModal={() => setScheduleOpen(true)}
      />

      {/* Deep-Dive Philosophy: Proof & Proving Ground */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-gray-100">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A20]">
          Proof and Proving Ground
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#393C41] leading-relaxed">
          &ldquo;Every hospital we operate is proof and proving ground. What works in the first carries forward to the next — so the tenth hospital opens already knowing everything the first one learned.&rdquo;
        </p>
      </section>

      {/* Clinical Specialties Grid */}
      <section className="bg-[#F4F4F4] py-20 px-6 sm:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#171A20]">Clinical Specialties</h2>
            <p className="mt-2 text-sm text-[#5C5E62]">
              Optimized for high-incidence secondary healthcare demands across the UAE middle-income population.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((spec, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#171A20]">{spec.title}</h3>
                  <p className="mt-3 text-sm text-[#5C5E62] leading-relaxed">{spec.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#3E6AE1]">
                  <span>Protocol Standard</span>
                  <CheckCircle2 className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour CTA Banner */}
      <section className="py-20 px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#171A20]">Experience Medora1 DIP</h2>
        <p className="mt-3 text-sm text-[#5C5E62]">
          Schedule a private walk-through for institutional investors, medical groups, and insurer network teams.
        </p>
        <button
          onClick={() => setScheduleOpen(true)}
          className="mt-6 h-10 px-8 rounded-[4px] bg-[#171A20] hover:bg-[#393C41] text-white text-sm font-medium transition cursor-pointer"
        >
          Book Facility Tour
        </button>
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
