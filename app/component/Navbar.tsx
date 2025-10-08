"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "About", link: "/about" },
  { label: "Blog", link: "/blog" },
  { label: "Projects", link: "/projects" },
];

const CTA_LABEL = "Hire Me";
const CTA_LINK = "/contact";
const SITE_NAME = "Sasu Lloyd";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add shadow
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
          ? "bg-white shadow-md dark:bg-gray-900"
          : "bg-white dark:bg-gray-900"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-red-500 transition"
        >
          {SITE_NAME}
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ label, link }) => (
            <li key={label} className="group relative">
              <Link
                href={link}
                className={clsx(
                  "text-[15px] font-medium transition-colors duration-300",
                  pathname === link
                    ? "text-red-500 dark:text-red-400"
                    : "text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400"
                )}
              >
                {label}
              </Link>
              <span
                className={clsx(
                  "absolute left-0 -bottom-[4px] h-[2px] w-full origin-left scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100",
                  pathname === link && "scale-x-100"
                )}
              />
            </li>
          ))}
          <li>
            <Button link={CTA_LINK} label={CTA_LABEL} />
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="text-3xl text-gray-800 dark:text-gray-100 md:hidden"
        >
          <MdMenu />
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={clsx(
            "fixed top-0 left-0 h-screen w-full transform transition-all duration-500 ease-in-out md:hidden",
            "bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col items-center justify-center gap-8",
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="absolute top-6 right-6 text-4xl text-gray-800 dark:text-gray-100 hover:text-red-500 transition"
          >
            <MdClose />
          </button>

          {/* MENU LINKS */}
          {NAV_ITEMS.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              onClick={() => setOpen(false)}
              className={clsx(
                "text-3xl font-semibold tracking-tight hover:text-red-500 transition",
                pathname === link && "text-red-500"
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
