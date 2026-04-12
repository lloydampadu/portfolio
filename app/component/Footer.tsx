import React from "react";
import Link from "next/link";
import Bounded from "./Bounded";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const NAV_ITEMS = [
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

export default function Footer() {
  return (
    <Bounded as="footer" className="text-[#555570]">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-xl font-extrabold tracking-tighter text-[#e4e4ed] transition-colors duration-150 hover:text-[#9f7df8]"
          >
            Lloyd Ampadu
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-[#333345] sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className="text-sm text-[#6b6b80]">
            &copy; {new Date().getFullYear()} Lloyd Ampadu
          </p>
        </div>
        <nav aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(({ label, link }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    href={link}
                    className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-[#a1a1b5] transition-colors duration-150 hover:text-[#9f7df8]"
                  >
                    {label}
                  </Link>
                </li>
                {index < NAV_ITEMS.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-[#333345]"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="inline-flex justify-center sm:justify-end">
          <a
            href="https://github.com/lloydampadu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-[#6b6b80] transition-all duration-150 hover:scale-125 hover:text-[#9f7df8]"
            aria-label="Lloyd Ampadu on GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/lloydampadu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-[#6b6b80] transition-all duration-150 hover:scale-125 hover:text-[#9f7df8]"
            aria-label="Lloyd Ampadu on LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/lloydampadu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-[#6b6b80] transition-all duration-150 hover:scale-125 hover:text-[#9f7df8]"
            aria-label="Lloyd Ampadu on X"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </Bounded>
  );
}
