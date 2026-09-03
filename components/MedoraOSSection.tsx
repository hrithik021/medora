"use client";

import React from "react";
import Image from "next/image";

interface MedoraOSSectionProps {
  onOpenOSModal: () => void;
  onOpenSchedule: () => void;
}

export default function MedoraOSSection({ onOpenOSModal, onOpenSchedule }: MedoraOSSectionProps) {
  return (
    <section id="mihc" className="w-full bg-[#F4F4F4] text-[#171A20] py-20 px-6 sm:px-12 lg:px-20 select-none">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Tesla FSD Exact Typography & Metrics */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-tight text-[#171A20]">
            MIHC
          </h2>
          <p className="mt-2 text-base text-[#393C41] font-normal leading-relaxed max-w-lg">
            Medora1 Integrated Healthcare Corporation (MIHC) is the operating company behind the Medora1 hospital network — purpose-built to develop, own, and operate secondary-care hospitals across the UAE in partnership with Apollo Hospitals, starting at Dubai Investment Park.
          </p>

          <p className="mt-4 text-sm text-[#5C5E62] leading-relaxed max-w-lg">
            MIHC runs every facility through a single proprietary platform: the hospital OS that decides who is seen when, how fast a diagnosis moves, what a procedure costs before it begins, and where every dirham of margin goes. It makes care predictable for the patient and profit predictable for the hospital — because those are the same system, seen from two seats.
          </p>

          {/* Tesla Exact Big Metrics */}
          <div className="mt-8 grid grid-cols-2 gap-8 border-t border-black/10 pt-6">
            <div>
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171A20]">
                14x
              </div>
              <div className="text-xs text-[#5C5E62] mt-1 font-medium">
                Proven Platform Scale-Up
              </div>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171A20]">
                100%
              </div>
              <div className="text-xs text-[#5C5E62] mt-1 font-medium">
                Pre-Procedure Bill Transparency
              </div>
            </div>
          </div>

          {/* Tesla Exact Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenSchedule}
              className="w-full sm:w-[170px] h-10 rounded-[4px] bg-[#171A20] hover:bg-[#393C41] text-white text-[14px] font-medium transition active:scale-[0.98] shadow-sm flex items-center justify-center"
            >
              Schedule Demo
            </button>

            <button
              onClick={onOpenOSModal}
              className="w-full sm:w-[170px] h-10 rounded-[4px] bg-white hover:bg-gray-100 text-[#171A20] text-[14px] font-medium transition border border-gray-300 active:scale-[0.98] shadow-sm flex items-center justify-center"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Tesla Tall Rounded Display Preview */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-black/10">
            <Image
              src="/images/medora_os_interface.jpg"
              alt="MIHC Telemetry Interface"
              fill
              className="object-cover object-center"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
