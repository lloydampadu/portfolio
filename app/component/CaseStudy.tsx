"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bounded from "./Bounded";
import Heading from "./Heading";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { label: "Architecture", value: "Multi-tenant" },
  { label: "Stack", value: "Next.js + PostgreSQL" },
  { label: "Integrations", value: "3 payment APIs" },
  { label: "Status", value: "Live in production" },
];

const HIGHLIGHTS = [
  "Multi-tenant architecture with subdomain routing — each store runs on merchant.snrael.com",
  "Integrated 3 Mobile Money payment APIs (MTN MoMo, Telecel Cash, AirtelTigo) via Hubtel gateway",
  "Designed JWT + phone OTP auth system with role-based access control and Redis rate limiting",
  "Built a custom Liquid-inspired theme engine with component-per-folder architecture",
  "PostgreSQL schema with Prisma ORM — normalised multi-tenant data model with row-level isolation",
  "Server-side rendering with Next.js 16 App Router, Server Actions, and streaming",
  "Monorepo setup with Turborepo — separate web app, API server, and shared packages",
  "Dockerised deployment on Render with CI/CD from GitHub",
];

export default function CaseStudy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top bottom-=100px",
          },
        }
      );

      gsap.fromTo(
        ".highlight-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".highlights-list",
            start: "top bottom-=80px",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Bounded>
      <div ref={sectionRef}>
        <div className="mb-4">
          <span className="text-[#9f7df8] font-mono text-sm uppercase tracking-widest">
            Featured Project
          </span>
        </div>
        <Heading as="h2" size="lg" className="mb-4">
          Snrael
        </Heading>
        <p className="text-[#6b6b80] text-xl md:text-2xl max-w-2xl mb-12">
          A multi-tenant e-commerce platform I architected and engineered end-to-end.
          Full production system — authentication, payments, real-time inventory,
          theme engine, and merchant dashboard.
        </p>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="stat-card opacity-0 rounded-lg border border-[#1e1e30] bg-[#0d0d1a]/60 p-5"
            >
              <p className="text-[#9f7df8] font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold">
                {stat.value}
              </p>
              <p className="text-[#555570] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[#e4e4ed] mb-8">
          Technical Decisions
        </h3>
        <ul className="highlights-list space-y-4 max-w-3xl">
          {HIGHLIGHTS.map((item, i) => (
            <li key={i} className="highlight-item opacity-0 flex gap-3">
              <span className="text-[#9f7df8] mt-1 shrink-0">&#9656;</span>
              <span className="text-[#a1a1b5] text-base md:text-lg leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href="https://www.snrael.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#9f7df8] font-semibold hover:underline text-lg"
          >
            Visit snrael.com &rarr;
          </a>
        </div>
      </div>
    </Bounded>
  );
}
