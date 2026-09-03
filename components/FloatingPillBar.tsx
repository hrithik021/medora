"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, Calendar } from "lucide-react";

interface FloatingPillBarProps {
  onOpenAssistant: (query?: string) => void;
  onOpenSchedule: () => void;
}

export default function FloatingPillBar({ onOpenAssistant, onOpenSchedule }: FloatingPillBarProps) {
  const [promptIdx, setPromptIdx] = useState(0);

  // Concise Tesla-style query chips so text stays crisp and single-line
  const prompts = [
    "What is Medora1 OS?",
    "Where is the DIP flagship with Apollo?",
    "How does predictable pricing work?",
    "Who are the founders?",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % prompts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [prompts.length]);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-30 flex justify-center px-3 sm:px-4 pointer-events-none select-none">
      <div className="bg-white/95 backdrop-blur-md border border-gray-300 shadow-2xl rounded-md p-1.5 flex flex-nowrap items-center gap-2 pointer-events-auto max-w-[620px] w-full h-12 box-border">
        {/* Tesla Ask a Question Input Button */}
        <button
          onClick={() => onOpenAssistant(prompts[promptIdx])}
          className="min-w-0 flex-1 h-9 px-3 rounded bg-[#F4F4F4] hover:bg-[#EAEAEA] text-left transition flex items-center justify-between gap-2 overflow-hidden cursor-pointer"
          title="Ask Medora1 Intelligence"
        >
          <div className="min-w-0 flex-1 flex items-center gap-2 overflow-hidden">
            <MessageSquare className="w-4 h-4 text-[#5C5E62] shrink-0" />
            <span className="text-xs text-[#5C5E62] shrink-0 hidden md:inline">Ask a Question</span>
            <span className="text-xs text-[#171A20] font-normal truncate whitespace-nowrap min-w-0 flex-1">
              &ldquo;{prompts[promptIdx]}&rdquo;
            </span>
          </div>

          <div className="w-5 h-5 rounded bg-[#E2E2E2] hover:bg-[#D5D5D5] text-[#171A20] flex items-center justify-center shrink-0">
            <ArrowUp className="w-3 h-3" />
          </div>
        </button>

        {/* Tesla Schedule a Tour Button */}
        <button
          onClick={onOpenSchedule}
          className="shrink-0 h-9 px-3.5 rounded bg-[#F4F4F4] hover:bg-[#EAEAEA] text-[#171A20] text-xs font-medium transition flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#3E6AE1] shrink-0" />
          <span className="whitespace-nowrap">Schedule Tour Today</span>
        </button>
      </div>
    </div>
  );
}
