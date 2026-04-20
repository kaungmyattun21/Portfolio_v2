"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOver);
      el.addEventListener("mouseleave", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOver);
        el.removeEventListener("mouseleave", handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[9999] flex items-center justify-center transition-colors mix-blend-difference"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
    </motion.div>
  );
}
