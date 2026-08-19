import React from "react";

function WhatWeDo() {
  const services = [
    {
      title: "Residential",
      image: "/Group (2).png",
    },
    {
      title: "Commercial",
      image: "/Vector (1).png",
    },
    {
      title: "Automotive",
      image: "/Group (3).png",
    },
    {
      title: "24/7 Emergency Locksmith",
      image: "/Layer_1.png",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-14 py-10 bg-blue-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col space-y-2 text-left">
          <p className="text-sm text-gray-900 font-bold uppercase">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
            <span className="text-[#FFAF1E]">Specialized</span> <br /> Locksmith
            Services
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="hidden sm:block">
            <button className="bg-[#FFAF1E] text-black capitalize px-6 py-2 text-sm font-bold">
              View all servcies
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-12 h-12 my-4 object-contain"
              />
              <p className="text-[11px] font-bold bg-[#FFAF1E] w-full text-gray-800 text-center py-2">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile button, centered at the bottom */}
      <div className="sm:hidden flex justify-center mt-8">
        <button className="bg-[#FFAF1E] px-5 capitalize py-2 text-sm font-semibold text-black">
          View All Services
        </button>
      </div>
    </div>
  );
}

export default WhatWeDo;
