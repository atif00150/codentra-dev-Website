import React from "react";

export default function CodentraLogo({ darkBackground = false, size = "md" }) {
  // Bold, prominent height sizing for logo mark image to match and dominate header scale
  const logoImageSize = size === "lg" ? "h-12 sm:h-16" : size === "sm" ? "h-8 sm:h-9" : "h-11 sm:h-14";
  const textSize = size === "lg" ? "text-2xl sm:text-3xl" : size === "sm" ? "text-lg" : "text-xl sm:text-2xl";

  return (
    <div className="flex items-center gap-1.5 group cursor-pointer">
      {/* Official Hexagon Logo Mark Image with Cache Buster */}
      <img
        src="/codentra-logo.png?v=3"
        alt="Codentra.dev Logo"
        className={`${logoImageSize} w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300`}
      />

      {/* Brand Name: Codentra.dev */}
      <div className="flex items-center font-black tracking-tight leading-none">
        <span
          className={`${textSize} ${
            darkBackground ? "text-white" : "text-[#09090B]"
          }`}
        >
          Codentra
        </span>
        <span className={`${textSize} text-[#84CC16]`}>
          .dev
        </span>
      </div>
    </div>
  );
}
