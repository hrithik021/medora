"use client";

import React from "react";
import Image from "next/image";

interface MedoraOSSectionProps {
  onOpenOSModal: () => void;
  onOpenSchedule: () => void;
}

export default function MedoraOSSection({ onOpenOSModal, onOpenSchedule }: MedoraOSSectionProps) {
  return (
    <section id="medora-os" className="w-full bg-[#F4F4F4] text-[#171A20] py-20 px-6 sm:px-12 lg:px-20 select-none">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Tesla FSD Exact Typography & Metrics */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-tight text-[#171A20]">
            Medora1 OS
          </h2>
          <p className="mt-2 text-base text-[#393C41] font-normal">
            The operating system that runs the hospital — not the records, the business.
          </p>

          <p className="mt-4 text-sm text-[#5C5E62] leading-relaxed max-w-lg">
            It decides who is seen when, how fast a diagnosis moves, what a procedure costs and why, and where every dirham of margin actually goes. It makes care predictable for the patient and profit predictable for the hospital — because those are the same system, seen from two seats.
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
              alt="Medora1 OS Telemetry Interface"
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
