// components/NavBar.tsx
"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
];

const CTA_LABEL = "Hire Me";
const CTA_LINK = "/contact";
const SITE_NAME = "Sasu Lloyd";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button
            aria-label="Close menu"
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {NAV_ITEMS.map(({ link, label }, index) => (
            <React.Fragment key={label}>
              <li className="first:mt-8">
                <Link
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
                  )}
                  href={link}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link ? "page" : undefined}
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-red-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname === link && "translate-y-6"
                    )}
                  />
                  <span className="relative">{label}</span>
                </Link>
              </li>
              {index < NAV_ITEMS.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <li>
            <Button
              link={CTA_LINK}
              label={CTA_LABEL}
              onClick={() => setOpen(false)}
              className="ml-3"
            />{" "}
          </li>
        </div>
        <DesktopMenu pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo() {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {SITE_NAME}
    </Link>
  );
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {NAV_ITEMS.map(({ link, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <Link
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              )}
              href={link}
              aria-current={pathname === link ? "page" : undefined}
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-red-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  pathname === link ? "translate-y-6" : "translate-y-8"
                )}
              />
              <span className="relative">{label}</span>
            </Link>
          </li>
          {index < NAV_ITEMS.length - 1 && (
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}
      <li>
        <Button link={CTA_LINK} label={CTA_LABEL} />
      </li>
    </div>
  );
}
