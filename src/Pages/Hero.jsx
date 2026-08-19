import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import ServiceForm from "../Components/ServiceForm";
import StatsCards from "../Components/StatsCards";
import Model from "../Components/Model";
import { useState } from "react";

function Hero() {
  const [openModel, setOpenModel] = useState(false);

  const statsCards = [
    {
      img: "/Group.png",
      alt: "House Icon",
      value: "1000+",
      label: (
        <>
          HOUSE LOCKOUTS <br /> RESOLVED
        </>
      ),
    },
    {
      img: "/Vector.png",
      alt: "Commercial Icon",
      value: "500+",
      label: (
        <>
          COMMERCIAL <br /> LOCKS REPLACED
        </>
      ),
    },
    {
      img: "/Group (1).png",
      alt: "Car Icon",
      value: "2400+",
      label: (
        <>
          CAR LOCKOUTS <br /> HANDLED
        </>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#FFAF1E] relative overflow-hidden">
      <div className="absolute -top-32 -right-10 md:-top-40 md:-right-32 lg:-top-10 lg:-right-32 xl:-top-20 xl:-right-0 w-full h-full flex justify-end pointer-events-none z-0">
        <img
          src="/WhatsApp Image 2025-06-30 at 11.31.47_a0dde397.jpg"
          alt="Pattern"
          className="h-[70vh] w-[60%] object-cover sm:h-full sm:w-full sm:static absolute top-0 right-0"
          style={{ objectPosition: "right" }}
        />
      </div>
      <Navbar />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-6 px-7 md:px-10 xl:px-14 py-6 z-10 relative">
        <Button
          className="absolute sm:right-0 top-32 right-0 sm:top-72 transform -translate-y-1/2 bg-[#FFAF1E] text-white sm:text-[8px] text-[6px] sm:px-2 px-1 py-1 sm:py-2 font-semibold text-sm z-50 flex flex-row-reverse items-center justify-center gap-2"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
          }}
          icon="/universal-access.png"
          iconClass="w-4 h-4"
        />
        <div
          className="flex flex-col justify-start text-start space-y-4 
        max-w-full"
        >
          <p className="sm:text-lg text-sm text-black font-semibold">
            Locked Out? Locked In?
          </p>
          <Button
            className="absolute sm:left-0 cursor-pointer sm:top-60 top-32 -left-1 transform -translate-y-1/2 bg-black text-white text-[7px] px-4 sm:py-2 font-semibold text-sm z-50 flex flex-row-reverse items-center justify-center gap-2"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "mixed",
            }}
            onClick={() => setOpenModel(true)}
            icon="/SVG.png"
            iconClass="w-3 h-3 sm:w-4 sm:h-4"
            text="MAKE A QUOTE"
          />

          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-black leading-tight">
            We've Got the <br /> Key to Your <br /> Peace of Mind!
          </h1>
          <p className="text-base md:text-lg text-black max-w-md">
            Fast, Reliable, and Affordable Locksmith Services for Your Home,
            Business, and Vehicle.
          </p>

          <div className="flex flex-row gap-2 mb-10 sm:gap-4">
            <Button
              className="bg-black cursor-pointer text-white whitespace-nowrap px-2 sm:px-6 py-2 font-semibold text-sm flex items-center"
              icon="/SVG.png"
              iconClass="w-4 h-4 mr-2"
              text="MAKE APPOINTMENT"
            />
            <Button
              className="bg-white cursor-pointer text-black px-2 sm:px-6 whitespace-nowrap py-2  font-semibold text-sm"
              text="VIEW SERVICES"
            />
          </div>
          <div className="w-full h-full flex sm:flex-col mb-4 flex-row-reverse sm:items-start justify-center items-center gap-3 sm:justify-start">
            <div className="bg-[#F7DB9D] py-2 sm:py-3 px-2 mb-4 sm:px-6 md:px-12 flex items-center gap-3 sm:gap-6 w-fit">
              <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                <img
                  src="/yelp.png"
                  alt="Yelp"
                  className="sm:w-6 w-3 h-auto object-cover md:w-8 md:h-8 rounded-full"
                />
                <img
                  src="/business.png"
                  alt="BBB"
                  className="sm:w-6 w-3 object-cover h-auto md:w-8 md:h-8 rounded-full"
                />
                <img
                  src="/google.png"
                  alt="Google"
                  className="sm:w-6 w-3 object-cover h-auto md:w-8 md:h-8 rounded-full"
                />
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="sm:w-6 w-3 object-cover h-auto md:w-8 md:h-8 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-black font-bold text-xs justify-center md:text-sm">
                <div className="flex gap-1 mb-1 text-yellow-400 text-[10px] sm:text-lg">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <span className="text-[10px]">5.0 Reviews</span>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-1 sm:gap-4 whitespace-nowrap items-center text-sm font-semibold text-black">
              <span className="px-2">Automotive Locksmith</span>
              <span className="px-2">Residential Locksmith</span>
              <span className="px-2">Commercial Locksmith</span>
              <span className="px-2 hidden sm:block">
                24/7 Emergency Locksmith
              </span>
            </div>
          </div>
        </div>
        <ServiceForm />
      </div>
      <StatsCards cards={statsCards} />
      <Model open={openModel} onClose={() => setOpenModel(false)} />
    </div>
  );
}

export default Hero;
