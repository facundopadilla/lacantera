"use client";
import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

type TocItem = { id: string; label: string };

interface TocSidebarProps {
  items: TocItem[];
  className?: string;
}

export function TocSidebar({ items, className }: TocSidebarProps) {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(item.id);
          });
        },
        { rootMargin: "-40% 0% -40% 0%", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <div className={"hidden lg:block sticky top-24 self-start " + (className ?? "")}>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id}>
              <button
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" })
                }
                className="flex items-center gap-2 py-1.5 cursor-pointer w-full text-left"
              >
                <div
                  className={
                    "w-1.5 h-1.5 rounded-full transition-colors " +
                    (isActive ? "bg-copper" : "bg-neutral-300")
                  }
                />
                <span
                  className={
                    isActive
                      ? "text-xs font-medium text-stone-deep"
                      : "text-xs text-neutral-400"
                  }
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
