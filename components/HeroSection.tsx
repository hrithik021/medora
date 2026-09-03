"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onOpenSchedule: () => void;
  onOpenOSModal: () => void;
}

// Desktop slides — landscape images
const desktopSlides = [
  {
    title: "Medora 1",
    subtitle: "Premium care. Priced for the middle.",
    linkText: "Secondary-Care Hospitals for UAE Middle-Income",
    tag: "UAE Secondary Care • Dubai & Abu Dhabi",
    image: "/images/desktop_hero_1_skyline.jpg",
    primaryBtn: "Explore DIP Flagship",
    secondaryBtn: "Learn More",
    textPosition: "bottom" as const,
  },
  {
    title: "Apollo · Medora 1",
    subtitle: "Flagship Hospital — Dubai Investment Park",
    linkText: "Where Clinical Excellence Meets Accessible Pricing",
    tag: "Flagship Facility • Dubai Investment Park",
    image: "/images/apollo_medora_dip.jpg",
    primaryBtn: "Schedule Tour",
    secondaryBtn: "View Blueprint",
    textPosition: "bottom" as const,
  },
  {
    title: "Secondary Care",
    subtitle: "Dubai & Abu Dhabi. 10 Hospitals in 36 Months.",
    linkText: "Discover the Proving Ground Architecture",
    tag: "Modular Surgical Suites • High-Velocity Care",
    image: "/images/secondary_care_facility.jpg",
    primaryBtn: "Clinical Network",
    secondaryBtn: "Learn More",
    textPosition: "bottom" as const,
  },
];

// Mobile slides — portrait 9:16 images
const mobileSlides = [
  {
    title: "Medora 1",
    subtitle: "Premium care.\nPriced for the middle.",
    tag: "UAE · Secondary Care",
    image: "/images/mobile_hero_dubai_skyline.jpg",
    primaryBtn: "Explore Flagship",
    secondaryBtn: "Learn More",
    objectPosition: "center center",
  },
  {
    title: "Apollo · Medora 1",
    subtitle: "DIP flagship built\nwith Apollo Hospitals.",
    tag: "Dubai Investment Park",
    image: "/images/mobile_apollo_medora_dip.jpg",
    primaryBtn: "Schedule Tour",
    secondaryBtn: "Our Technology",
    objectPosition: "center center",
  },
  {
    title: "10 Hospitals.\n36 Months.",
    subtitle: "Dubai & Abu Dhabi\nsecondary care network.",
    tag: "Dubai · Abu Dhabi",
    image: "/images/mobile_hero_3.jpg",
    primaryBtn: "Book Site Visit",
    secondaryBtn: "About Network",
    objectPosition: "center center",
  },
];

export default function HeroSection({ onOpenSchedule, onOpenOSModal }: HeroSectionProps) {
  const [slide, setSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = useCallback(
    (idx: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setSlide(idx);
        setTransitioning(false);
      }, 200);
    },
    [transitioning]
  );

  const handlePrev = useCallback(() => {
    goToSlide(slide === 0 ? desktopSlides.length - 1 : slide - 1);
  }, [slide, goToSlide]);

  const handleNext = useCallback(() => {
    goToSlide(slide === desktopSlides.length - 1 ? 0 : slide + 1);
  }, [slide, goToSlide]);

  // Auto-advance every 6s
  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 6000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  const mobileSlide = mobileSlides[slide];
  const desktopSlide = desktopSlides[slide];

  return (
    <section
      className="relative isolate z-10 w-full select-none overflow-hidden bg-slate-900"
      style={{ height: "100svh", minHeight: 580 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ══════════════════════════════════════════
          MOBILE IMAGE (shown only on < md)
      ══════════════════════════════════════════ */}
      <div
        className={`md:hidden absolute inset-0 z-0 transition-opacity duration-500 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={mobileSlide.image}
          alt={mobileSlide.title}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: mobileSlide.objectPosition }}
          sizes="100vw"
          quality={100}
        />
        {/* Mobile gradient — clean subtle framing for buttons and top pill */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent via-50% to-black/55 z-10 pointer-events-none" />
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP IMAGE (hidden on < md)
      ══════════════════════════════════════════ */}
      <div
        className={`hidden md:block absolute inset-0 z-0 transition-opacity duration-700 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={desktopSlide.image}
          alt={desktopSlide.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
        {/* Bottom-heavy desktop gradient: keeps upper 70% of image completely clear and vivid */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-35% to-transparent z-10 pointer-events-none" />
      </div>

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT (< md) — Tesla bottom-anchored UX
      ══════════════════════════════════════════ */}
      <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-between">

        {/* TOP: Subtle pill tag with slight backdrop */}
        <div className="pt-16 px-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8691E] animate-pulse" />
            {mobileSlide.tag}
          </span>
        </div>

        {/* BOTTOM: Action Buttons and Dots anchored at bottom */}
        <div className="px-4 pb-4 flex flex-col items-stretch">
          {/* CTA Buttons — full width, large touch targets */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={onOpenSchedule}
              className="w-full h-12 rounded-[8px] bg-[#3E6AE1] active:bg-[#2b4eb8] text-white text-[15px] font-semibold transition active:scale-[0.97] shadow-lg flex items-center justify-center cursor-pointer"
            >
              {mobileSlide.primaryBtn}
            </button>
            <button
              onClick={onOpenOSModal}
              className="w-full h-12 rounded-[8px] bg-white/90 backdrop-blur-sm active:bg-white text-[#171A20] text-[15px] font-semibold transition active:scale-[0.97] shadow-lg flex items-center justify-center cursor-pointer"
            >
              {mobileSlide.secondaryBtn}
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center space-x-2 mt-3">
            {mobileSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  slide === i
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* ══════════════════════════════════════════
      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT (md+) — Always bottom-anchored content
      ══════════════════════════════════════════ */}
      <div className="hidden md:flex absolute inset-0 z-20 flex-col justify-between items-center text-center">
        {/* Desktop Top Pill Tag */}
        <div className="pt-20 px-4">
          <span className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wide shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E8691E] animate-pulse" />
            {desktopSlide.tag}
          </span>
        </div>

        {/* Desktop Bottom Section: Title, Subtitle, Buttons, and Dots */}
        <div className="pb-16 flex flex-col items-center max-w-4xl mx-auto px-4 w-full">
          <div className="flex flex-col items-center mb-5 animate-fade-in">
            <h1 className="text-4xl md:text-[50px] font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {desktopSlide.title}
            </h1>
            <p className="mt-1 text-base md:text-lg text-white/95 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {desktopSlide.subtitle}
            </p>
            <button
              onClick={onOpenOSModal}
              className="mt-1 text-sm text-white/90 hover:text-white underline underline-offset-4 decoration-white/70 hover:decoration-white transition-colors drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] cursor-pointer"
            >
              {desktopSlide.linkText}
            </button>
            <div className="mt-5 flex flex-row gap-4 w-full max-w-[420px] justify-center">
              <button
                onClick={onOpenSchedule}
                className="w-[190px] h-10 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white text-[14px] font-medium transition active:scale-[0.98] shadow-lg flex items-center justify-center cursor-pointer"
              >
                {desktopSlide.primaryBtn}
              </button>
              <button
                onClick={onOpenOSModal}
                className="w-[190px] h-10 rounded-[4px] bg-white hover:bg-slate-100 text-[#171A20] text-[14px] font-medium transition active:scale-[0.98] shadow-lg flex items-center justify-center cursor-pointer"
              >
                {desktopSlide.secondaryBtn}
              </button>
            </div>
          </div>

          {/* Desktop Carousel Dots */}
          <div className="flex items-center justify-center space-x-2">
            {desktopSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  slide === i ? "w-2.5 h-2.5 bg-white scale-110 shadow-md" : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Permanent Fixed-Center Desktop Navigation Arrows (Locked at exact 50% vertical center on all 3 slides) */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/35 hover:bg-black/65 text-white backdrop-blur-md items-center justify-center transition border border-white/20 z-30 cursor-pointer shadow-xl active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/35 hover:bg-black/65 text-white backdrop-blur-md items-center justify-center transition border border-white/20 z-30 cursor-pointer shadow-xl active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
