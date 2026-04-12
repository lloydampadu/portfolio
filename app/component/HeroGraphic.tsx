"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CODE_LINES = [
  { text: "// multi-tenant e-commerce platform", color: "#555570" },
  { text: "const config = {", color: "#e4e4ed" },
  { text: '  framework: "Next.js 16",', color: "#9f7df8" },
  { text: '  database: "PostgreSQL",', color: "#9f7df8" },
  { text: '  orm: "Prisma",', color: "#9f7df8" },
  { text: '  cache: "Redis",', color: "#6ee7b7" },
  { text: '  auth: "JWT + OTP",', color: "#6ee7b7" },
  { text: '  payments: ["MoMo", "Telecel", "AirtelTigo"],', color: "#6ee7b7" },
  { text: "  multiTenant: true,", color: "#e4e4ed" },
  { text: "};", color: "#e4e4ed" },
  { text: "", color: "" },
  { text: "await deploy(config); // snrael.com", color: "#555570" },
];

export default function HeroGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const lines = containerRef.current.querySelectorAll(".code-line");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          delay: 1.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="animate-float" ref={containerRef}>
      <div className="glow-purple rounded-xl border border-[#1e1e30] bg-[#0d0d1a]/80 backdrop-blur-sm p-6 font-mono text-sm md:text-base">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e1e30]">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-[#555570]">~/snrael</span>
        </div>

        {/* Code lines */}
        <div className="space-y-1">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="code-line opacity-0 flex">
              <span className="w-6 text-right text-[#333345] mr-4 select-none">
                {i + 1}
              </span>
              <span style={{ color: line.color }}>{line.text}</span>
            </div>
          ))}
          <div className="flex mt-1">
            <span className="w-6 text-right text-[#333345] mr-4 select-none">
              12
            </span>
            <span className="animate-blink text-[#9f7df8]">|</span>
          </div>
        </div>
      </div>
    </div>
  );
}
