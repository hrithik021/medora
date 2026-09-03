import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none tracking-[0.22em] font-medium uppercase text-base sm:text-lg text-current ${className}`}>
      <span className="font-bold">MEDORA</span>
      <span className="font-extrabold text-amber-500 tracking-normal">1</span>
    </div>
  );
}
