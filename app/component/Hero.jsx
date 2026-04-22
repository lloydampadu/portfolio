"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "./Bounded";
<<<<<<< HEAD
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
=======
import { Shapes } from "./Shapes";

const Hero = () => {
  const component = useRef < HTMLDivElement > null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray < HTMLElement > ".letter";
      const gradients = gsap.utils.toArray < HTMLElement > ".gradient";

      // --- Entrance animation ---
      gsap.from(letters, {
        duration: 2,
        scale: 0,
        rotation: () => gsap.utils.random(-720, 720),
        y: () => gsap.utils.random(-500, 500),
        x: () => gsap.utils.random(-500, 500),
        opacity: 0,
        stagger: {
          amount: 1.5,
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
          from: "random",
        },
        ease: "elastic.out(1, 0.5)",
      });

<<<<<<< HEAD
=======
      // --- Gradient background burst ---
      gsap.from(gradients, {
        duration: 1.5,
        scale: 0,
        rotation: 360,
        stagger: 0.05,
        ease: "expo.out",
        delay: 0.5,
      });

      // --- Hover animation per letter ---
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
      letters.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
          gsap.to(letter, {
            duration: 0.3,
<<<<<<< HEAD
            y: "-=15",
            scale: 1.2,
            color: "#9f7df8",
=======
            y: "-=20",
            scale: 1.3,
            rotation: "+=360",
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
            ease: "power4.out",
          });
        });
        letter.addEventListener("mouseleave", () => {
          gsap.to(letter, {
            duration: 0.4,
            y: 0,
            scale: 1,
<<<<<<< HEAD
=======
            rotation: 0,
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
            color: "inherit",
            ease: "back.out",
          });
        });
      });
    }, component);

    return () => ctx.revert();
  }, []);

<<<<<<< HEAD
  const renderAnimatedLetters = (name) =>
    name.split("").map((letter, index) => (
      <span key={index} className="letter relative inline-block mx-0.5 cursor-default">
=======
  // --- Render animated letters ---
  const renderAnimatedLetters = (name: string) =>
    name.split("").map((letter, index) => (
      <span key={index} className="letter relative inline-block mx-0.5">
        <span className="gradient absolute inset-3 bg-gradient-to-tr from-red-400/30 to-blue-400/30 rounded-lg transform scale-75 blur-sm" />
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
        <span className="relative z-10">
          {letter === " " ? "\u00A0" : letter}
        </span>
      </span>
    ));

  return (
    <Bounded ref={component}>
<<<<<<< HEAD
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
=======
      <div className="relative grid min-h-[90vh] grid-cols-1 md:grid-cols-2 items-center overflow-hidden pt-12 md:pt-20">
        {/* Left Side — Text */}
        <div className="col-start-1 md:row-start-1 z-10 px-4">
          <h1
            className="mb-8 text-[clamp(3rem,15vmin,10rem)] font-extrabold leading-none tracking-tighter"
            aria-label="Sasu Lloyd"
          >
            {/* Main name (light/dark adaptive) */}
            <span className="block text-black dark:text-white transition-colors duration-300">
              {renderAnimatedLetters("Sasu")}
            </span>
            <span className="-mt-[.2em] block text-black dark:text-white transition-colors duration-300">
              {renderAnimatedLetters("Lloyd")}
            </span>

            {/* Subtitle */}
            <span className="block bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 dark:from-pink-500 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent text-lg md:text-3xl font-semibold uppercase tracking-[.15em] mt-6 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              Private Tutor & Junior Developer
            </span>
          </h1>
        </div>

        {/* Right Side — 3D Shapes */}
        <div className="relative z-0 md:col-start-2 flex justify-center items-center">
          <Shapes />
        </div>

        {/* Subtle gradient background overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-transparent to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black opacity-70" />
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
      </div>
    </Bounded>
  );
};

export default Hero;
