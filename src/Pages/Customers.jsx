import React from "react";

const testimonials = [
  {
    avatar: "https://avatar.iran.liara.run/public/31",
    stars: "/star.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis saepe quia haru",
    name: "John Doe",
  },

  {
    avatar: "https://avatar.iran.liara.run/public/31",
    stars: "/star.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis saepe quia haru",
    name: "Jane Smith",
  },
  {
    avatar: "https://avatar.iran.liara.run/public/31",
    stars: "/star.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis saepe quia haru",
    name: "Alex Johnson",
  },
];

function Customers({ className = "", bgImage }) {
  return (
    <div className={`relative py-12 px-4 sm:px-8 ${className}`}>
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
          />
          <div className="absolute inset-0 w-full h-full bg-blue-100 opacity-40 z-0 pointer-events-none" />
        </>
      )}
      <div className={bgImage ? "relative z-10" : ""}>
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Happy <span className="text-[#FFAF1E]">Customers</span>
        </h2>

        <div className="hidden sm:flex items-center gap-8 p-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-[#ECF7FF] px-8 py-6 w-full max-w-md text-center rounded-md transition-transform duration-300 ${
                i === 1 ? "scale-110 shadow-xl z-10" : "scale-90"
              }`}
            >
              <img
                src={t.avatar}
                alt="avatar"
                className="w-16 h-16 rounded-full mx-auto -mt-12 mb-4 border-4 border-white"
              />
              <img src={t.stars} alt="stars" className="w-24 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">{t.text}</p>
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
            </div>
          ))}
        </div>

        <div className="sm:hidden grid grid-cols-2 p-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-[#ECF7FF] p-3 text-center rounded-md ${
                i === 2 ? "hidden" : ""
              }`}
            >
              <img
                src={t.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full mx-auto mb-2"
              />
              <img src={t.stars} alt="stars" className="w-20 mx-auto mb-2" />
              <p className="text-[13px] text-gray-600 mb-2">{t.text}</p>
              <h4 className="text-[12px] font-semibold text-gray-800">
                {t.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;
