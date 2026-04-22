<<<<<<< HEAD
"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
=======
// ContentList.tsx
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

type ContentItem = {
  id: string;
  title: string;
<<<<<<< HEAD
  description: string;
=======
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
  tags: string[];
  image?: string;
  url: string;
};

type ContentListProps = {
  items: ContentItem[];
  contentType: "Blogs" | "Projects";
  fallbackItemImage?: string;
  viewMoreText: string;
};

export default function ContentList({
  items,
  viewMoreText = "Read More",
}: ContentListProps) {
  const component = useRef(null);
<<<<<<< HEAD
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const revealRef = useRef<HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, component);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(
        Math.pow(mousePos.x - lastMousePos.current.x, 2)
      );

      const ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation:
              speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
      }, component);
      return () => ctx.revert();
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hovering, currentItem]);

  const contentImages = items.map((item) => item.image || "/placeholder.jpg");

  useEffect(() => {
    contentImages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [contentImages]);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
    if (!hovering) setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };

  return (
    <>
      <ul
        ref={component}
        className="grid border-b border-b-[#1e1e30]"
        onMouseLeave={onMouseLeave}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            onMouseEnter={() => onMouseEnter(index)}
            className="list-item opacity-0"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between border-t border-t-[#1e1e30] py-10 text-[#a1a1b5] md:flex-row"
=======

  return (
    <>
      <ul ref={component} className="grid border-b border-b-slate-100">
        {items.map((item) => (
          <li key={item.id} className="list-item ">
            <a
              href={`${item.url}`}
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
              aria-label={item.title}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
<<<<<<< HEAD
                <div className="flex flex-wrap gap-3 text-[#9f7df8] mt-1">
=======
                <div className="flex gap-3 text-yellow-400">
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-lg font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                {viewMoreText} <MdArrowOutward />
              </span>
            </a>
          </li>
        ))}
<<<<<<< HEAD

        {/* Hover reveal image */}
        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null
                ? `url(${contentImages[currentItem]})`
                : "",
          }}
          ref={revealRef}
        />
=======
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
      </ul>
    </>
  );
}
