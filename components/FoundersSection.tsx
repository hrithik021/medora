"use client";

import React from "react";
import Image from "next/image";

interface FoundersSectionProps {
  onOpenFounderModal: (founderId: string) => void;
}

export default function FoundersSection({ onOpenFounderModal }: FoundersSectionProps) {
  const founders = [
    {
      id: "dr-raza",
      name: "Dr. Raza Siddiqui",
      role: "Co-Founder",
      image: "/images/founder_raza.jpg",
      bio: "Two decades running Gulf hospital groups, from CEO of Arabian Healthcare Group to Executive Director of Arabian Healthcare Group — operations across 11 countries and 650+ healthcare professionals, built on JCI, TEMOS and ISO accreditation. Holds direct relationships across IHC, G42 and the UAE's sovereign health entities, and sits on the Chamber of Commerce Board.",
    },
    {
      id: "bidhann",
      name: "Bidhann Chowdhary",
      role: "Co-Founder",
      image: "/images/founder_bidhann.jpg",
      bio: "Built Medi Q into a hospital operator trusted with national-scale mandates — hospitals delivered under the UAE Presidential Program across five countries, the UAE's nationwide COVID-19 vaccination program, and a 200-bed, 50-ICU field hospital raised in nine days — before leading Medi Q to its exit to IHC (Tamouh Holding).",
    },
    {
      id: "abhinav",
      name: "Abhinav Sharma",
      role: "Co-Founder",
      image: "/images/founder_abhinav.jpg",
      bio: "An IIM Ahmedabad alumnus who took a surgery platform from USD 6M to USD 84M — a 14x scale-up — while nearly quintupling profit margin, from 6% to 29%, and growing the network from 1 hospital to 13 across 7 specialties and 4 service lines.",
    },
  ];

  return (
    <section id="founders" className="w-full bg-[#FFFFFF] text-[#171A20] py-20 px-6 sm:px-12 max-w-[1400px] mx-auto select-none border-t border-gray-100">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A20]">
          Founders
        </h2>
        <p className="mt-2 text-base text-[#5C5E62]">
          Experienced healthcare operators behind sovereign mandates, national response, and scalable clinical platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((f) => (
          <div
            key={f.id}
            onClick={() => onOpenFounderModal(f.id)}
            className="group p-6 rounded-lg bg-[#F4F4F4] hover:bg-[#ECECEC] transition-all cursor-pointer flex flex-col justify-between border border-gray-200/60 shadow-sm"
          >
            <div>
              {/* Executive Portrait Photo */}
              <div className="relative w-full h-72 rounded-md overflow-hidden mb-5 bg-slate-200 border border-gray-200">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={95}
                />
              </div>

              <h3 className="text-xl font-semibold text-[#171A20] group-hover:text-[#3E6AE1] transition-colors">
                {f.name}
              </h3>
              <div className="text-xs text-[#5C5E62] font-medium mt-0.5">{f.role}</div>
              <p className="mt-4 text-sm text-[#393C41] leading-relaxed">
                {f.bio}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between items-center text-xs font-semibold text-[#171A20]">
              <span>View Background</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
