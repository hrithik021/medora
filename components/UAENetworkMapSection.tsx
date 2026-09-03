"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navigation, Maximize2, MapPin, Building2, Stethoscope, ChevronRight } from "lucide-react";

interface UAENetworkMapProps {
  onOpenSchedule: () => void;
  onOpenSpecsModal: (facilityName: string) => void;
}

export default function UAENetworkMapSection({
  onOpenSchedule,
  onOpenSpecsModal,
}: UAENetworkMapProps) {
  const [activePin, setActivePin] = useState<string | null>("dip");

  const locations = [
    {
      id: "dip",
      name: "Dubai Investment Park (DIP)",
      role: "Flagship Secondary Care Hospital (Apollo Partner)",
      beds: "120 Beds • 6 OR Theaters",
      x: "64%",
      y: "74%",
    },
    {
      id: "dubai-core",
      name: "Dubai Central & Marina",
      role: "Day Surgery & Ambulatory Diagnostic Hub",
      beds: "Rapid Triage & Specialty Care",
      x: "68%",
      y: "43%",
    },
    {
      id: "abu-dhabi",
      name: "Abu Dhabi Corridor",
      role: "Secondary Care Expansion Center",
      beds: "Insured Middle Segment Corridor",
      x: "56%",
      y: "62%",
    },
    {
      id: "sharjah",
      name: "Sharjah & Northern Emirates",
      role: "Surgical & Outpatient Specialty Suite",
      beds: "High-Throughput Clinical Wing",
      x: "72%",
      y: "32%",
    },
    {
      id: "rak",
      name: "Ras Al Khaimah",
      role: "Institutional Referral Network (RAK Hospital Ties)",
      beds: "Tertiary & Secondary Integration",
      x: "82%",
      y: "14%",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] text-[#171A20] py-16 px-4 sm:px-8 max-w-[1500px] mx-auto select-none border-t border-gray-100">
      {/* 1. Tesla-Style Clean UAE Map Container */}
      <div className="relative w-full h-[420px] sm:h-[500px] rounded-lg overflow-hidden border border-gray-200 bg-[#E8ECEF] shadow-sm">
        <Image
          src="/images/tesla_style_uae_map.jpg"
          alt="Medora1 UAE Hospital and Clinical Network Map"
          fill
          className="object-cover object-center"
          quality={95}
        />

        {/* Floating Top-Left "Find Me" Button (Tesla exact match) */}
        <button
          onClick={() => setActivePin("dip")}
          className="absolute top-5 left-5 h-9 px-3.5 rounded bg-white/90 hover:bg-white text-[#171A20] text-xs font-medium backdrop-blur-md shadow-md border border-gray-200 flex items-center gap-2 transition cursor-pointer"
        >
          <Navigation className="w-3.5 h-3.5 text-[#171A20]" />
          <span>Find Me</span>
        </button>

        {/* Floating Top-Right Expand Button (Tesla exact match) */}
        <button
          onClick={onOpenSchedule}
          className="absolute top-5 right-5 w-9 h-9 rounded bg-white/90 hover:bg-white text-[#171A20] backdrop-blur-md shadow-md border border-gray-200 flex items-center justify-center transition cursor-pointer"
          title="Fullscreen Network"
          aria-label="Expand Map"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Active Location Info Card Overlay on Map */}
        {activePin && (
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl border border-gray-200 text-xs animate-fade-in">
            {locations.find((l) => l.id === activePin) && (
              <>
                <div className="flex items-center space-x-1.5 text-red-600 font-semibold uppercase tracking-wider text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <span>Selected Network Center</span>
                </div>
                <h4 className="text-sm font-semibold text-[#171A20] mt-1">
                  {locations.find((l) => l.id === activePin)?.name}
                </h4>
                <p className="text-[#5C5E62] mt-1">
                  {locations.find((l) => l.id === activePin)?.role}
                </p>
                <div className="mt-2 pt-2 border-t border-gray-100 font-medium text-[#171A20]">
                  {locations.find((l) => l.id === activePin)?.beds}
                </div>
                <button
                  onClick={onOpenSchedule}
                  className="mt-3 w-full h-7 rounded bg-[#171A20] text-white font-medium text-[11px] hover:bg-[#393C41] transition cursor-pointer"
                >
                  Schedule Tour / Consult
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* 2. Tesla-Style Lower Bar: Title & Big Metrics */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        {/* Left Side: Title, Subtitle, Action Buttons */}
        <div className="lg:col-span-7">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A20]">
            Find Your Care
          </h3>
          <p className="text-sm sm:text-base text-[#5C5E62] mt-2 max-w-xl">
            View the network of Medora1 Secondary Hospitals, Modular Surgical Suites, and Apollo Clinical Partnerships available near you across the UAE.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenSchedule}
              className="w-full sm:w-[160px] h-10 rounded-[4px] bg-[#171A20] hover:bg-[#393C41] text-white text-[14px] font-medium transition active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer"
            >
              View Network
            </button>
            <button
              onClick={() => onOpenSpecsModal("UAE Hospital Network")}
              className="w-full sm:w-[160px] h-10 rounded-[4px] bg-[#F4F4F4] hover:bg-[#EAEAEA] text-[#171A20] text-[14px] font-medium transition active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer border border-gray-200"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Big Metrics Matching Tesla's 38,498 / 410 exactly */}
        <div className="lg:col-span-5 flex items-center justify-start lg:justify-end space-x-8 sm:space-x-12">
          {/* Metric 1 */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171A20]">
                10+
              </span>
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[#5C5E62] mt-1 font-medium">
              Secondary Hospitals
            </div>
          </div>

          {/* Metric 2 */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171A20]">
                650+
              </span>
              <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center shadow-sm">
                <Stethoscope className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs sm:text-sm text-[#5C5E62] mt-1 font-medium">
              Healthcare Professionals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
