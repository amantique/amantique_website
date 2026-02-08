"use client";

import React from "react";

interface MarqueeBannerProps {
  text: string;
  repeat?: number;
  className?: string;
  direction?: "left" | "right";
  fontSize?: string;
  top?: string;
  opacity?: number;
  speed?: number;
}

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  text,
  repeat = 20,
  className = "",
  direction = "right",
  fontSize = "text-[22vw] md:text-[25vw]",
  top = "0%",
  opacity = 0.1,
  speed = 180,
}) => {
  const animationName = direction === "right" ? "marquee-right" : "marquee-left";

  return (
    <div
      className="absolute left-0 w-full overflow-hidden"
      style={{ top }}
    >
      <div
        className={`flex whitespace-nowrap ${className}`}
        style={{ animation: `${animationName} ${speed}s linear infinite` }}
      >
        {[...Array(2)].map((_, block) =>
          Array(repeat)
            .fill(text)
            .map((t, i) => (
              <span
                key={`${block}-${i}`}
                className={`${fontSize} font-extrabold text-[#F20D01] select-none ml-20`}
                style={{ opacity }}
              >
                {t}
              </span>
            ))
        )}
      </div>

      <style jsx>{`
        @keyframes marquee-right {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBanner;
