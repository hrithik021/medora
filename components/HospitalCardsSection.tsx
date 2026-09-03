"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface HospitalCardsProps {
  onOpenSchedule: () => void;
  onOpenSpecsModal: (facilityName: string) => void;
}

export default function HospitalCardsSection({
  onOpenSchedule,
  onOpenSpecsModal,
}: HospitalCardsProps) {
  return (
    <section id="hospitals" className="w-full bg-[#FFFFFF] py-12 px-4 sm:px-8 max-w-[1500px] mx-auto select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Tesla Card: DIP Flagship with Apollo */}
        <div className="relative isolate overflow-hidden h-[560px] rounded-lg flex flex-col justify-between p-8 text-white group shadow-sm bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/medora_dip_hospital.jpg"
              alt="Dubai Investment Park Flagship Hospital"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          </div>

          {/* Top Label */}
          <div className="relative z-10">
            <span className="text-xs font-medium tracking-wide text-slate-200 drop-shadow">
              Flagship Secondary-Care Hospital
            </span>
          </div>

          {/* Bottom Title, Subtitle, and Buttons */}
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white drop-shadow">
              Dubai Investment Park
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mt-1 font-normal drop-shadow">
              Built with Apollo Hospitals
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenSchedule}
                className="w-full sm:w-[160px] h-10 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white text-[14px] font-medium transition active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer"
              >
                Schedule Tour
              </button>
              <button
                onClick={() => onOpenSpecsModal("Dubai Investment Park Flagship")}
                className="w-full sm:w-[160px] h-10 rounded-[4px] bg-white hover:bg-slate-100 text-[#171A20] text-[14px] font-medium transition active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Tesla Carousel Dots at card bottom */}
            <div className="mt-6 flex justify-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* Right Tesla Card: Secondary Care Modular Suites */}
        <div className="relative isolate overflow-hidden h-[560px] rounded-lg flex flex-col justify-between p-8 text-white group shadow-sm bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/secondary_care_facility.jpg"
              alt="Modular Secondary Care Clinical Suites"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          </div>

          {/* Top Label */}
          <div className="relative z-10">
            <span className="text-xs font-medium tracking-wide text-slate-200 drop-shadow">
              Modular Clinical Suites
            </span>
          </div>

          {/* Bottom Title, Subtitle, and Buttons */}
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white drop-shadow">
              Secondary Care Network
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mt-1 font-normal drop-shadow">
              1 to 10+ Hospitals Learning Loop
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenSpecsModal("Secondary Care Network")}
                className="w-full sm:w-[160px] h-10 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white text-[14px] font-medium transition active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer"
              >
                Specialties
              </button>
              <button
                onClick={onOpenSchedule}
                className="w-full sm:w-[160px] h-10 rounded-[4px] bg-white hover:bg-slate-100 text-[#171A20] text-[14px] font-medium transition active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Tesla Carousel Arrow */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={onOpenSchedule}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
