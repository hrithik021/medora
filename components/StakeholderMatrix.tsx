"use client";

import React, { useState } from "react";

export default function StakeholderMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  const stakeholders = [
    {
      id: "patients",
      name: "Patients",
      number: "100%",
      numberLabel: "Bill Predictability Before Care",
      desc: "Care that is predictable, quick, and explained before it's billed. Transparent treatment pathways without surprise expenses.",
    },
    {
      id: "doctors",
      name: "Doctors & Nurses",
      number: "+45%",
      numberLabel: "Time Returned to Clinical Practice",
      desc: "Time returned to medicine. The system carries the coordination, administrative scheduling, and paperwork.",
    },
    {
      id: "insurers",
      name: "Insurers",
      number: "-28%",
      numberLabel: "Secondary Cost of Cover Reduction",
      desc: "Earlier intervention, fewer complications, protocol-driven secondary care, and significantly lower cost of cover.",
    },
    {
      id: "investors",
      name: "Investors",
      number: "29%",
      numberLabel: "Predictable Operating Margin",
      desc: "A hospital that generates cash, and a software-driven operating system that repeats the result across 10+ facilities.",
    },
  ];

  return (
    <section id="stakeholders" className="w-full bg-[#F4F4F4] text-[#171A20] py-20 px-6 sm:px-12 select-none">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A20]">
            One system.
          </h2>
          <p className="mt-2 text-base text-[#5C5E62]">
            Every stakeholder reads a different number off it.
          </p>
        </div>

        {/* Tesla Horizontal Filter Tabs */}
        <div className="flex justify-center border-b border-gray-300 mb-12 overflow-x-auto">
          <div className="flex space-x-6 sm:space-x-10">
            {stakeholders.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={`pb-3 text-sm sm:text-base font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === idx
                    ? "border-[#171A20] text-[#171A20]"
                    : "border-transparent text-[#5C5E62] hover:text-[#171A20]"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Viewport */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-gray-200 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span className="text-xs font-semibold text-[#5C5E62] uppercase tracking-wider">
              {stakeholders[activeTab].name}
            </span>
            <h3 className="text-2xl font-semibold text-[#171A20] mt-2">
              {stakeholders[activeTab].desc}
            </h3>
          </div>

          <div className="md:col-span-5 flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
            <div className="text-5xl font-semibold text-[#171A20] tracking-tight">
              {stakeholders[activeTab].number}
            </div>
            <div className="text-xs text-[#5C5E62] font-medium mt-1">
              {stakeholders[activeTab].numberLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
