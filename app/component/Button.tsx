import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

type ButtonProps = {
  link: string;
  label: string;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  link,
  label,
  showIcon = true,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={link}
      onClick={onClick}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-[#9f7df8]/40 px-4 py-2 font-bold text-[#e4e4ed] transition-transform ease-out hover:scale-105",
        className
      )}
    >
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-[#9f7df8] transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
      <span className="relative flex items-center justify-center gap-2 group-hover:text-[#0a0a14]">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
}
