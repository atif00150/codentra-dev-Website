import React from "react";
import Button from "./Button";

function Cards({ data = [] }) {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10 bg-white flex flex-col items-center justify-center gap-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg overflow-hidden relative flex flex-col"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />

            <div className="relative">
              <div className="absolute -top-10 sm:-top-8 right-0 w-full sm:w-max">
                <div className="clip-polygon bg-[#FFAF1E] px-3 py-3 sm:px-5 sm:py-2">
                  <h3 className="text-[10px] capitalize sm:text-sm font-bold text-black">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Card Description + Button */}
            <div className="flex-1 flex flex-col justify-between p-2 sm:p-4 pt-8 sm:pt-10">
              <p className="text-sm text-gray-700 mb-4">{card.desc}</p>
              <div className="flex items-end gap-2 sm:gap-3 justify-start">
                <img
                  className="sm:w-8 h-auto w-5"
                  src="/Appointment.png"
                  alt=""
                />
                <button className="mt-4 text-[9px] whitespace-nowrap sm:text-sm font-semibold text-[#FFAF1E] hover:underline">
                  MAKE APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button
          className="bg-[#FFAF1E] cursor-pointer flex items-center justify-center gap-1 sm:gap-2 text-black px-3 sm:px-5 py-2 sm:py-3 font-semibold text-[10px] sm:text-sm whitespace-nowrap uppercase"
          icon="/Appointment.png"
          iconClass="w-3 h-auto sm:w-4 sm:h-auto"
          text="Make appointment"
        />

        <Button
          className="bg-black cursor-pointer flex items-center justify-center gap-1 sm:gap-2 text-white px-3 sm:px-5 py-2 sm:py-3 font-semibold text-[10px] sm:text-sm whitespace-nowrap uppercase"
          icon="/ServicesPages/whitephone.png"
          iconClass="w-3 h-auto sm:w-4 sm:h-auto"
          text="Call Now"
        />
      </div>
    </div>
  );
}

export default Cards;
