import React from "react";

const cards = [
  {
    icon: "/Group (4).png",
    title: "Expertise you can trust",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit voluptatem quis?",
  },
  {
    icon: "/Group (5).png",
    title: "fast response time",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit voluptatem quis?",
  },
  {
    icon: "/Group (6).png",
    title: "comprehensive Services",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit voluptatem quis?",
  },
  {
    icon: "/Group (7).png",
    title: "affordable pricing",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit voluptatem quis?",
  },
  {
    icon: "/Group (8).png",
    title: "customer-centric approach",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit voluptatem quis?",
  },
];

function WhyChooseUs() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-10 overflow-hidden">
      <img
        src="/Rectangle 99.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        aria-hidden="true"
      />

      {/* ========== Mobile View (Below sm) ========== */}
      <div className="sm:hidden w-full px-4 max-w-[500px] py-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-start">
            <h2 className="text-2xl font-extrabold text-gray-800 leading-snug">
              Why <br /> Choose Us?
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="bg-white shadow-md p-3 text-left flex flex-col items-center">
              <img
                src={cards[0].icon}
                alt={cards[0].title}
                className="w-9 h-9 mb-2"
              />
              <h3 className="text-[11px] text-center font-semibold mb-1">
                {cards[0].title}
              </h3>
              <p className="text-xs text-gray-600">{cards[0].text}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.slice(1).map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-3 text-left flex flex-col items-center"
            >
              <img src={card.icon} alt={card.title} className="w-9 h-9 mb-2" />
              <h3 className="text-[11px] text-center font-semibold mb-1 capitalize">
                {card.title}
              </h3>
              <p className="text-xs text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== Desktop View (Above sm) ========== */}
      <div className="hidden sm:flex flex-col gap-8 w-full max-w-[900px] px-4 sm:px-0">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-gray-800">
          Why Choose Us ?
        </h2>

        <div className="flex justify-center gap-6 sm:gap-8">
          {cards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8 w-80 text-center flex flex-col items-center"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 mb-3"
              />
              <h3 className="mb-2 text-xl font-semibold capitalize">
                {card.title}
              </h3>
              <p className="text-base text-gray-600 text-start">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 sm:gap-8">
          {cards.slice(3).map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8 w-80 text-center flex flex-col items-center"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 mb-3"
              />
              <h3 className="mb-2 text-xl font-semibold capitalize">
                {card.title}
              </h3>
              <p className="text-base text-gray-600 text-start capitalize">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
