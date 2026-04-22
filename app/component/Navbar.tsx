"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

const CTA_LABEL = "Hire Me";
const CTA_LINK = "/contact";
const SITE_NAME = "Lloyd Ampadu";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a14]/90 backdrop-blur-md shadow-lg shadow-[#9f7df8]/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[#e4e4ed] hover:text-[#9f7df8] transition"
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ label, link }) => (
            <li key={label} className="group relative">
              <Link
                href={link}
                className={clsx(
                  "text-[15px] font-medium transition-colors duration-300",
                  pathname === link
                    ? "text-[#9f7df8]"
                    : "text-[#6b6b80] hover:text-[#9f7df8]"
                )}
              >
                {label}
              </Link>
              <span
                className={clsx(
                  "absolute left-0 -bottom-[4px] h-[2px] w-full origin-left scale-x-0 bg-[#9f7df8] transition-transform duration-300 group-hover:scale-x-100",
                  pathname === link && "scale-x-100"
                )}
              />
            </li>
          ))}
          <li>
            <Button link={CTA_LINK} label={CTA_LABEL} />
          </li>
        </ul>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="text-3xl text-[#e4e4ed] md:hidden"
        >
          <MdMenu />
        </button>

        <div
          className={clsx(
            "fixed top-0 left-0 h-screen w-full transform transition-all duration-500 ease-in-out md:hidden",
            "bg-[#0a0a14] text-[#e4e4ed] flex flex-col items-center justify-center gap-8",
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="absolute top-6 right-6 text-4xl text-[#e4e4ed] hover:text-[#9f7df8] transition"
          >
            <MdClose />
          </button>

          {NAV_ITEMS.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              onClick={() => setOpen(false)}
              className={clsx(
                "text-3xl font-semibold tracking-tight hover:text-[#9f7df8] transition",
                pathname === link && "text-[#9f7df8]"
              )}
            >
              {label}
            </Link>
          ))}
          <Button
            link={CTA_LINK}
            label={CTA_LABEL}
            onClick={() => setOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
}
