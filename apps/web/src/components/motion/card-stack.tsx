"use client";
import { useReducedMotion, motion } from "framer-motion";
import React from "react";

interface CardStackProps {
  children: React.ReactNode;
  className?: string;
}

export function CardStack({ children, className }: CardStackProps) {
  const reduced = useReducedMotion();
  const childArray = React.Children.toArray(children);

  if (reduced) {
    return (
      <div className={className}>
        {childArray.map((child, index) => (
          <div key={index} className="mb-4">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <motion.div
          key={index}
          className="mb-4 md:sticky"
          style={{
            top: 96 + index * 20,
            zIndex: index + 1,
          }}
          whileHover={{
            y: -4,
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
