import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function ServicesHero({
  title,
  description,
  image,
  appointmentIcon = "/Appointment.png",
  callIcon = "/ServicesPages/whitephone.png",
  badgeImage = "/Group (3).png",
}) {
  return (
    <div className="w-full bg-blue-100 h-1/2 sm:h-screen relative overflow-hidden">
      <div className="hidden sm:flex absolute bottom-0 -right-10 md:-top-40 md:-right-32 lg:-top-10 lg:-right-32 xl:-top-20 xl:-right-0 w-full h-full justify-end pointer-events-none z-0">
        <img
          src="/bg-1.png"
          alt="Pattern"
          className="h-full w-full object-cover absolute top-15 right-0"
          style={{ objectPosition: "right" }}
        />
      </div>

      <Navbar className="relative z-20" />
      <Button
        className="absolute left-0 sm:top-[15rem] top-[10rem] cursor-pointer transform bg-black text-white text-[5px] sm:text-[10px] px-4 sm:px-2 py-1 font-semibold text-sm z-10 flex flex-row-reverse items-center whitespace-nowrap justify-center gap-2"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
        iconClass="w-3 h-3"
        text="INSTANT QUOTE"
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-10 md:px-12 xl:px-20 py-10 z-10 relative">
        <div className="flex flex-col justify-center text-start sm:text-left  space-y-4 max-w-full sm:pl-10 lg:pl-16">
          <div className="sm:text-lg text-xs font-semibold text-black uppercase tracking-wide">
            <img src={badgeImage} alt="" />
          </div>
          <h1 className="text-3xl w-full sm:text-5xl font-bold text-black leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-black max-w-2xl">
            {description}
          </p>
          <div className="flex gap-3">
            <Button
              className="bg-[#FFAF1E] cursor-pointer flex items-center justify-center gap-1 sm:gap-2 text-black px-2 sm:px-4 py-[12px] font-semibold text-[7px] sm:text-sm whitespace-nowrap uppercase"
              icon={appointmentIcon}
              iconClass="w-2 h-auto sm:w-4 sm:h-auto"
              text="Make appointment"
            />
            <Button
              className="bg-black cursor-pointer flex items-center justify-center gap-1 sm:gap-2 text-white px-2 sm:px-4 py-[7px] font-semibold text-[12px] sm:text-sm whitespace-nowrap uppercase"
              icon={callIcon}
              iconClass="w-2 h-auto sm:w-4 text-white sm:h-auto"
              text="Call Now"
            />
          </div>
        </div>

        <div className="w-full h-full relative flex items-center justify-center z-10">
          <img
            src={image}
            alt="About Us"
            className="w-[230px] h-[230px] sm:w-auto bottom-[15rem] left-35 sm:h-[120vh] absolute sm:-top-40 sm:-right-40 object-contain rounded-tl-[1px] rounded-bl-[50px] overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
