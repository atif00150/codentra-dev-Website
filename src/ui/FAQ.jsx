import Button from "../Components/Button";
import Navbar from "../Components/Navbar";

function FAQ() {
  return (
    <>
      <div className="w-full relative overflow-hidden">
        {/* Absolute right-side image, behind navbar/content */}
        <div className="absolute top-0 right-0 h-full w-2/3 sm:w-1/2 lg:w-[45%] z-0 pointer-events-none">
          <img
            src="/bg-1.png"
            alt="Pattern"
            className="absolute top-0 right-0 h-full w-full object-cover"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
