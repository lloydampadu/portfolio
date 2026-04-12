"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "./Bounded";
import HeroGraphic from "./HeroGraphic";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".letter");

      gsap.from(letters, {
        duration: 1.5,
        scale: 0,
        rotation: () => gsap.utils.random(-360, 360),
        y: () => gsap.utils.random(-300, 300),
        x: () => gsap.utils.random(-300, 300),
        opacity: 0,
        stagger: {
          amount: 1,
          from: "random",
        },
        ease: "elastic.out(1, 0.5)",
      });

      letters.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
          gsap.to(letter, {
            duration: 0.3,
            y: "-=15",
            scale: 1.2,
            color: "#9f7df8",
            ease: "power4.out",
          });
        });
        letter.addEventListener("mouseleave", () => {
          gsap.to(letter, {
            duration: 0.4,
            y: 0,
            scale: 1,
            color: "inherit",
            ease: "back.out",
          });
        });
      });
    }, component);

    return () => ctx.revert();
  }, []);

  const renderAnimatedLetters = (name) =>
    name.split("").map((letter, index) => (
      <span key={index} className="letter relative inline-block mx-0.5 cursor-default">
        <span className="relative z-10">
          {letter === " " ? "\u00A0" : letter}
        </span>
      </span>
    ));

  return (
    <Bounded ref={component}>
      <div className="relative grid min-h-[90vh] grid-cols-1 md:grid-cols-2 items-center overflow-hidden pt-12 md:pt-20 gap-8">
        {/* Left Side — Text */}
        <div className="col-start-1 md:row-start-1 z-10">
          <h1
            className="mb-8 font-[family-name:var(--font-heading)] text-[clamp(3rem,12vmin,8rem)] font-extrabold leading-none tracking-tighter"
            aria-label="Lloyd Ampadu"
          >
            <span className="block text-[#e4e4ed]">
              {renderAnimatedLetters("Lloyd")}
            </span>
            <span className="-mt-[.2em] block text-[#e4e4ed]">
              {renderAnimatedLetters("Ampadu")}
            </span>

            <span className="block text-[#9f7df8] text-lg md:text-2xl font-semibold uppercase tracking-[.2em] mt-6 font-[family-name:var(--font-body)]">
              Fullstack Software Engineer
            </span>
          </h1>

          <p className="text-[#6b6b80] text-base md:text-lg max-w-md leading-relaxed">
            I design and build production web applications — from database architecture
            to polished frontends. Specialising in Next.js, TypeScript, and PostgreSQL.
          </p>
        </div>

        {/* Right Side — Terminal Graphic */}
        <div className="relative z-0 md:col-start-2 flex justify-center items-center">
          <HeroGraphic />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
