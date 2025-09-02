"use client";

import React, { memo } from "react";
import ShimmerButton from "./Shimmer";

export const AuroraText = memo(({
  children,
  className = "",
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  speed = 1
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{children}</span>
      <span
        className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-lg"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
});
AuroraText.displayName = "AuroraText";

export default function AuroraView() {
  return (
    <>
      <style>{`
        @keyframes aurora {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-aurora {
          animation-name: aurora;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-aurora { animation: none; }
        }

        /* Floating subtle animation for glow background */
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <main className="mt-[-25%]  relative flex flex-col items-center justify-center h-screen font-sans overflow-hidden bg-[#171c2a]">
        {/* Glowing blurred circle behind text */}
        <div className="absolute w-[600px] h-[600px] rounded-full  opacity-20 blur-3xl animate-[floaty_6s_ease-in-out_infinite]" />

        <h1 className="text-6xl md:text-7xl font-extrabold text-center leading-tight relative z-10">
          <AuroraText
            speed={3}
            colors={["#38BDF8", "#3B82F6", "#EC4899", "#F472B6"]}
          >
            Build, Debug & Win
          </AuroraText> {""}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl relative z-10">
          A developer’s journey to create magic with code ✨
        </p>

        {/* Call-to-action button */}
        <div className="mt-8 relative z-10">
          <ShimmerButton />
        </div>
      </main>
    </>
  );
}
