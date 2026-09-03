"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onOpenSchedule: () => void;
  onOpenOSModal: () => void;
}

export default function HeroSection({ onOpenSchedule, onOpenOSModal }: HeroSectionProps) {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "Medora 1",
      subtitle: "Premium care. Priced for the middle.",
      linkText: "Secondary-Care Hospitals for UAE Middle-Income",
      image: "/images/tesla_style_dubai_hospital_hero.jpg",
      primaryBtn: "Explore DIP Flagship",
      secondaryBtn: "Learn More",
    },
    {
      title: "Dubai Flagship",
      subtitle: "Built with Apollo Hospitals in Dubai Investment Park",
      linkText: "Secondary Care Done Properly",
      image: "/images/medora_dip_hospital.jpg",
      primaryBtn: "Schedule Tour",
      secondaryBtn: "View Blueprint",
    },
    {
      title: "Secondary Care",
      subtitle: "Sovereign-Scale Healthcare Infrastructure in Dubai",
      linkText: "Discover the Proving Ground Architecture",
      image: "/images/dubai_hero_hospital.jpg",
      primaryBtn: "Clinical Network",
      secondaryBtn: "Learn More",
    },
  ];

  const currentSlide = slides[slide];

  const handlePrev = () => {
    setSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative isolate z-10 w-full h-screen min-h-[640px] flex flex-col justify-between items-center text-center overflow-hidden select-none bg-slate-900">
      {/* Background Image Carousel (Dubai Skyline + Medora1 Hospital in foreground) */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700">
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={95}
        />
        {/* Tesla top/bottom contrast gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/50 z-10 pointer-events-none" />
      </div>

      {/* Tesla Top Title & Subtitle */}
      <div className="relative z-20 pt-20 sm:pt-24 px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {currentSlide.title}
        </h1>

        <p className="mt-2 text-base sm:text-lg text-white font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {currentSlide.subtitle}
        </p>

        <button
          onClick={onOpenOSModal}
          className="mt-1 text-sm text-white hover:text-slate-200 underline underline-offset-4 decoration-white/70 hover:decoration-white transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] cursor-pointer"
        >
          {currentSlide.linkText}
        </button>

        {/* Tesla Dual Action Buttons (Positioned directly under title exactly as in Tesla's current desktop UI) */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-[420px] justify-center">
          <button
            onClick={onOpenSchedule}
            className="w-full sm:w-[190px] h-10 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white text-[14px] font-medium transition active:scale-[0.98] shadow-md flex items-center justify-center cursor-pointer"
          >
            {currentSlide.primaryBtn}
          </button>

          <button
            onClick={onOpenOSModal}
            className="w-full sm:w-[190px] h-10 rounded-[4px] bg-white hover:bg-slate-100 text-[#171A20] text-[14px] font-medium transition active:scale-[0.98] shadow-md flex items-center justify-center cursor-pointer"
          >
            {currentSlide.secondaryBtn}
          </button>
        </div>
      </div>

      {/* Tesla Carousel Left & Right Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm items-center justify-center transition border border-white/20 z-20 cursor-pointer shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm items-center justify-center transition border border-white/20 z-20 cursor-pointer shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Tesla Bottom Carousel Dots */}
      <div className="relative z-20 pb-12 flex items-center justify-center space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              slide === i ? "w-2.5 h-2.5 bg-white scale-110 shadow-md" : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
