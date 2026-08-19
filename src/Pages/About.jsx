import React from "react";

function About() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 py-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      <div className="w-full sm:w-1/2">
        <img
          src="/Rectangle 69.png"
          alt="About Us"
          className="w-full h-auto object-cover filter drop-shadow-[12px_0_0_#FFAF1E]"
        />
      </div>

      <div className="w-full sm:w-1/2 text-left">
        <h2 className="text-2xl capitalize sm:text-3xl md:text-4xl font-bold text-black mb-4">
          When you need it done, <br />{" "}
          <span className="text-[#FFAF1E]">right the first time</span> ,
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          id iste beatae ratione vero necessitatibus eius quod quae. Laboriosam
          laudantium quibusdam voluptatum quo harum, quam sequi labore sint
          minima itaque?
        </p>
        <button className="bg-[#FFAF1E] text-black px-6 py-2 font-medium text-sm sm:text-base rounded">
          About Us
        </button>
      </div>
    </div>
  );
}

export default About;
