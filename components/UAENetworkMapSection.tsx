"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navigation, MapPin, Building2, Stethoscope, ChevronRight } from "lucide-react";

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
      x: "65%",
      y: "48%",
    },
    {
      id: "dubai-central",
      name: "Dubai Central Healthcare Hub",
      role: "Secondary Care Hospital & Surgical Center",
      beds: "90 Beds • 4 OR Theaters",
      x: "70%",
      y: "40%",
    },
    {
      id: "abu-dhabi-capital",
      name: "Abu Dhabi Capital Hospital",
      role: "Secondary Care Expansion Center",
      beds: "100 Beds • 5 OR Theaters",
      x: "42%",
      y: "65%",
    },
    {
      id: "abu-dhabi-yas",
      name: "Abu Dhabi Yas Medical Center",
      role: "Secondary Care & Diagnostic Center",
      beds: "80 Beds • 4 OR Theaters",
      x: "48%",
      y: "58%",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] text-[#171A20] py-16 px-4 sm:px-8 max-w-[1500px] mx-auto select-none border-t border-gray-100">
      {/* 1. Tesla-Style Clean UAE Map Container */}
      <div className="relative w-full h-[420px] sm:h-[500px] rounded-lg overflow-hidden border border-gray-200 bg-[#E8ECEF] shadow-sm">
        <Image
          src="/images/tesla_style_uae_map.jpg"
          alt="Medora1 Dubai & Abu Dhabi Hospital and Clinical Network Map"
          fill
          className="object-cover object-center"
          quality={95}
        />

        {/* Interactive Map Pins (Dubai and Abu Dhabi Only) */}
        {locations.map((loc) => {
          const isActive = activePin === loc.id;
          return (
            <button
              key={loc.id}
              onClick={() => setActivePin(loc.id)}
              style={{ left: loc.x, top: loc.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
              title={loc.name}
            >
              <span className="relative flex items-center justify-center">
                {isActive && (
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex items-center justify-center rounded-full shadow-lg transition-transform ${
                    isActive
                      ? "w-7 h-7 bg-red-600 text-white scale-110 ring-4 ring-white"
                      : "w-5 h-5 bg-[#171A20] text-white hover:scale-125 ring-2 ring-white"
                  }`}
                >
                  <MapPin className={`${isActive ? "w-4 h-4" : "w-3 h-3"}`} />
                </span>
              </span>
            </button>
          );
        })}

        {/* Floating Top-Left "Find Me" Badge (Unclickable) */}
        <div className="absolute top-5 left-5 h-9 px-3.5 rounded bg-white/90 text-[#171A20] text-xs font-medium backdrop-blur-md shadow-md border border-gray-200 flex items-center gap-2 pointer-events-none select-none z-20">
          <Navigation className="w-3.5 h-3.5 text-[#171A20]" />
          <span>Find Me</span>
        </div>

        {/* Desktop Active Location Info Card Overlay on Map (Hidden on mobile) */}
        {activePin && (
          <div className="hidden sm:block absolute bottom-5 left-5 max-w-xs bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl border border-gray-200 text-xs animate-fade-in z-20">
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

      {/* Mobile Active Location Info Card (Positioned cleanly below the map on mobile) */}
      {activePin && (
        <div className="sm:hidden mt-3 bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-xs animate-fade-in">
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
                className="mt-3 w-full h-9 rounded bg-[#171A20] text-white font-medium text-xs hover:bg-[#393C41] transition cursor-pointer"
              >
                Schedule Tour / Consult
              </button>
            </>
          )}
        </div>
      )}

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
