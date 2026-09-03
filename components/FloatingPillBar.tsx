"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, Calendar, Sparkles } from "lucide-react";

interface FloatingPillBarProps {
  onOpenAssistant: (query?: string) => void;
  onOpenSchedule: () => void;
}

export default function FloatingPillBar({ onOpenAssistant, onOpenSchedule }: FloatingPillBarProps) {
  const [promptIdx, setPromptIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const prompts = [
    "What is MIHC?",
    "Where is the DIP flagship?",
    "How does predictable pricing work?",
    "Who are the founders?",
  ];

  // Rotate prompt chips
  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % prompts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [prompts.length]);

  // Hide pill bar when scrolling down on mobile, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else {
        setVisible(currentY < lastScrollY);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 pointer-events-none select-none transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* ══ MOBILE PILL BAR (< md) ══ */}
      <div className="md:hidden flex flex-col items-stretch gap-0 pointer-events-auto">
        {/* Gradient fade above bar on mobile */}
        <div className="h-8 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
        <div className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 pb-safe-4 pt-3 flex flex-col gap-2.5">
          {/* Ask Intelligence — full width, large target */}
          <button
            onClick={() => onOpenAssistant(prompts[promptIdx])}
            className="w-full h-12 rounded-lg bg-[#F4F4F4] active:bg-[#EAEAEA] border border-gray-200 flex items-center gap-3 px-4 cursor-pointer transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <span className="flex-1 text-left text-sm text-[#171A20] truncate min-w-0">
              &ldquo;{prompts[promptIdx]}&rdquo;
            </span>
            <div className="w-6 h-6 rounded bg-[#E2E2E2] flex items-center justify-center shrink-0">
              <ArrowUp className="w-3.5 h-3.5 text-[#171A20]" />
            </div>
          </button>

          {/* Schedule Tour — full width, blue accent */}
          <button
            onClick={onOpenSchedule}
            className="w-full h-12 rounded-lg bg-[#3E6AE1] active:bg-[#345ac2] flex items-center justify-center gap-2.5 cursor-pointer transition-colors"
          >
            <Calendar className="w-4.5 h-4.5 text-white shrink-0" />
            <span className="text-white text-sm font-semibold">Schedule Tour Today</span>
          </button>
        </div>
        {/* iOS safe area padding */}
        <div className="h-[env(safe-area-inset-bottom,0px)] bg-white" />
      </div>

      {/* ══ DESKTOP PILL BAR (md+) — unchanged ══ */}
      <div className="hidden md:flex justify-center px-4 pb-4 pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md border border-gray-300 shadow-2xl rounded-md p-1.5 flex flex-nowrap items-center gap-2 max-w-[620px] w-full h-12 box-border">
          <button
            onClick={() => onOpenAssistant(prompts[promptIdx])}
            className="min-w-0 flex-1 h-9 px-3 rounded bg-[#F4F4F4] hover:bg-[#EAEAEA] text-left transition flex items-center justify-between gap-2 overflow-hidden cursor-pointer"
            title="Ask Medora1 Intelligence"
          >
            <div className="min-w-0 flex-1 flex items-center gap-2 overflow-hidden">
              <MessageSquare className="w-4 h-4 text-[#5C5E62] shrink-0" />
              <span className="text-xs text-[#5C5E62] shrink-0">Ask a Question</span>
              <span className="text-xs text-[#171A20] font-normal truncate whitespace-nowrap min-w-0 flex-1">
                &ldquo;{prompts[promptIdx]}&rdquo;
              </span>
            </div>
            <div className="w-5 h-5 rounded bg-[#E2E2E2] hover:bg-[#D5D5D5] text-[#171A20] flex items-center justify-center shrink-0">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>

          <button
            onClick={onOpenSchedule}
            className="shrink-0 h-9 px-3.5 rounded bg-[#F4F4F4] hover:bg-[#EAEAEA] text-[#171A20] text-xs font-medium transition flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#3E6AE1] shrink-0" />
            <span className="whitespace-nowrap">Schedule Tour Today</span>
          </button>
        </div>
      </div>
    </div>
  );
}
