"use client";
import { useState, useEffect } from "react";
import { useReducedMotion, motion, LayoutGroup } from "framer-motion";
import Link from "next/link";

type Tab = {
  id: string;
  label: string;
  color?: string;
  href: string;
};

interface StickyTabsProps {
  tabs: Tab[];
  className?: string;
}

export function StickyTabs({ tabs, className }: StickyTabsProps) {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");

  useEffect(() => {
    const OFFSET = 140; // header height + sticky nav height

    const update = () => {
      let current = tabs[0]?.id ?? "";
      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = tab.id;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [tabs]);

  return (
    <LayoutGroup>
      <div
        role="tablist"
        className={
          "flex gap-1 p-1 bg-white rounded-xl border border-neutral-200 shadow-sm w-fit " +
          (className ?? "")
        }
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;

          return (
            <Link
              key={tab.id}
              href={tab.href}
              role="tab"
              aria-selected={isActive}
              className={
                "relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors z-10 " +
                (isActive
                  ? "text-stone-deep"
                  : "text-neutral-500 hover:text-neutral-700")
              }
            >
              {!reduced && isActive && (
                <motion.span
                  layoutId="sticky-tab-indicator"
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: tab.color ?? "rgb(184 112 58 / 0.12)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {reduced && isActive && (
                <span
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: tab.color ?? "rgb(184 112 58 / 0.12)" }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
