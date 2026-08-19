import React from "react";

function StatsCards({ cards }) {
  return (
    <div className="w-full bg-[#FFAF1E] px-3 sm:px-6 md:px-10 xl:px-14 mb-4 py-4 flex gap-3 sm:gap-6 justify-between z-10 relative">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex sm:flex-row flex-col items-start gap-2 sm:gap-4 bg-white p-4 sm:p-6 md:p-8 shadow-md w-full sm:w-[32%]"
        >
          <img
            src={card.img}
            alt={card.alt}
            className="h-10 w-10 sm:h-12 sm:w-12"
          />
          <div>
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFAF1E]">
              {card.value}
            </div>
            <div className="text-[9px] whitespace-nowrap sm:text-sm font-semibold text-black leading-tight">
              {card.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
