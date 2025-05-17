"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "./Bounded";
import { Shapes } from "./Shapes";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".letter");
      const gradients = gsap.utils.toArray(".gradient");

      // Main letters animation
      gsap.from(letters, {
        duration: 2,
        scale: 0,
        rotation: () => gsap.utils.random(-720, 720),
        y: () => gsap.utils.random(-500, 500),
        x: () => gsap.utils.random(-500, 500),
        opacity: 0,
        stagger: {
          amount: 1.5,
          from: "random",
        },
        ease: "elastic.out(1, 0.5)",
        immediateRender: false,
      });

      // Gradient background effect
      gsap.from(gradients, {
        duration: 1.5,
        scale: 0,
        rotation: 360,
        stagger: 0.05,
        ease: "expo.out",
        delay: 0.5,
      });

      // Hover effects
      letters.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
          gsap.to(letter, {
            duration: 0.3,
            y: "-=30",
            scale: 1.5,
            rotation: "+=360",
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            ease: "power4.out",
          });
        });

        letter.addEventListener("mouseleave", () => {
          gsap.to(letter, {
            duration: 0.5,
            y: 0,
            scale: 1,
            rotation: 0,
            color: "inherit",
            ease: "back.out",
          });
        });
      });
    }, component);

    return () => ctx.revert();
  }, []);

  const renderAnimatedLetters = (name) => {
    return name.split("").map((letter, index) => (
      <span key={index} className="letter relative inline-block mx-0.5">
        <span className="gradient absolute inset-4 bg-gradient-to-tr from-red-400/30 to-blue-400/30 rounded-lg transform scale-75" />
        <span className="relative z-10">
          {letter === " " ? "\u00A0" : letter}
        </span>
      </span>
    ));
  };

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-start-1 md:row-start-1 overflow-hidden">
          <h1
            className="mb-8 text-[clamp(3rem,15vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label="sasu lloyd"
          >
            <span className="block text-slate-100">
              {renderAnimatedLetters("Sasu")}
            </span>
            <span className="-mt-[.2em] block text-slate-300">
              {renderAnimatedLetters("Lloyd")}
            </span>
            <span className="block bg-gradient-to-tr from-red-500 via-red-200 to-red-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-4xl mt-8">
              Private Tutor and Junior Developer
            </span>
          </h1>
        </div>
        <Shapes />
      </div>
    </Bounded>
  );
};

export default Hero;
