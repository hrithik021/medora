"use client";

import React from "react";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="w-full bg-[#FFFFFF] text-[#171A20] py-24 px-6 sm:px-12 select-none border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171A20] leading-tight">
          Premium is not expensive. <br />
          <span className="text-[#5C5E62]">They only sound alike.</span>
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-[#393C41] font-normal leading-relaxed max-w-3xl mx-auto">
          Expensive is what a hospital charges. Premium is what a patient receives — the right diagnosis, at the right time, from someone who has time, with a bill you understood before you agreed to it.
        </p>

        <div className="mt-12 p-8 rounded-lg bg-[#F4F4F4] text-left max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-[#393C41] leading-relaxed">
            &ldquo;Nothing on that list is costly by nature. Those things are rare today because they&apos;re delivered by effort, and <span className="font-semibold text-[#171A20]">effort doesn&apos;t scale</span>. A <span className="font-semibold text-[#171A20]">system does</span>. And a system costs less.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
