"use client";

import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "./Bounded";
import Heading from "./Heading";

gsap.registerPlugin(ScrollTrigger);

const TECH_ITEMS = [
  { name: "TypeScript", color: "#3178c6" },
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#68a063" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Prisma", color: "#5a67d8" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Redis", color: "#dc382d" },
];

export default function TechList() {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index: number) =>
            index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400),
        },
        {
          x: (index: number) =>
            index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400),
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden" ref={component}>
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          What I Use
        </Heading>
      </Bounded>

      {TECH_ITEMS.map(({ name, color }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-[#1e1e30]"
          aria-label={name}
        >
          {Array.from({ length: 15 }, (_, i) => (
            <React.Fragment key={i}>
              <span
                className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: i === 7 ? color : "inherit",
                }}
              >
                {name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}
