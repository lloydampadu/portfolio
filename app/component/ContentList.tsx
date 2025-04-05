// ContentList.tsx
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

type ContentItem = {
  id: string;
  title: string;
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

  return (
    <>
      <ul ref={component} className="grid border-b border-b-slate-100">
        {items.map((item) => (
          <li key={item.id} className="list-item ">
            <a
              href={`${item.url}`}
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              aria-label={item.title}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400">
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
      </ul>
    </>
  );
}
