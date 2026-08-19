import Footer from "../Pages/Footer";
import Model from "../Components/Model";

function ContactUsSection({
  mainImage = "/logo.png",
  humanImage = "/about us/aboutusimagehuman.png",
  buttonText = "Learn More",
}) {
  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden sm:block relative w-full overflow-hidden h-[60vh]">
        <img
          src={mainImage}
          alt="Background"
          className="absolute inset-0 w-40 h-auto object-cover z-0"
        />

        <div className="absolute inset-0 bg-[#F0AE19]/90 z-10"></div>

        <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-6 sm:px-10 md:px-12 xl:px-20">
          <div className="flex flex-col justify-center p-3 text-start sm:text-left sm:pl-10 lg:pl-30 space-y-3">
            <p className="text-xs sm:text-lg font-semibold text-black uppercase tracking-wide">
              Reliable Locksmith
            </p>
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-black leading-tight -mt-2">
              <span className="text-black">Contact Us</span>
            </h1>
            <p className="text-sm sm:text-base text-black max-w-xl">
              We are your trusted locksmith professionals, offering 24/7
              services for residential, commercial, and automotive needs. Fast,
              reliable, and secure solutions just a call away.
            </p>
            <button className="bg-black text-white px-6 py-3 w-fit text-sm sm:text-base hover:bg-gray-800 transition">
              {buttonText}
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src={humanImage}
              alt="Locksmith Illustration"
              className="w-full max-w-md object-center object-contain aspect-square sm:-right-20 lg:absolute lg:-right-42 lg:-top-[15rem] lg:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile Only Layout */}
      <div className="block sm:hidden w-full h-[80vh] bg-[#F0AE19]/100 flex items-start justify-start relative px-2">
        <img
          src={mainImage}
          alt="Background Logo"
          className="absolute inset-0 w-40 h-auto object-contain opacity-10 z-0 mx-auto my-auto"
          style={{
            left: "-30%",
            top: "100%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="relative w-full h-full z-10">
          <div className="absolute top-0 left-0 w-3/5 px-5 py-4 flex flex-col justify-start items-start space-y-2">
            <p className="text-[8px] font-semibold text-black uppercase">
              Reliable Locksmith
            </p>
            <h1 className="text-sm whitespace-nowrap font-bold text-black leading-tight">
              Contact Us
            </h1>
            <p className="text-xs text-black">
              24/7 locksmith services for your home, business, or car.
            </p>
            <button className="bg-black text-white text-xs px-2 py-1 mt-2 hover:bg-gray-800 whitespace-nowrap transition">
              {buttonText}
            </button>
          </div>
          <div className="absolute top-0 right-0 h-full flex items-center justify-end w-2/5">
            <img
              src={humanImage}
              alt="Locksmith Illustration"
              className="h-full w-auto  object-cover"
              style={{
                display: "block",
                clipPath: "polygon(49% 1%, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        {/* <FooterCard className="hidden max-w-xs p-2 sm:w-full sm:max-w-[20%] h-auto sm:p-0 sm:block absolute right-10 -top-[15rem] shadow-lg z-[999]" /> */}

        <div className="flex absolute max-w-xs p-2 sm:w-full sm:max-w-[25%] h-auto sm:p-0 -top-[24rem] sm:right-[20rem] sm:-top-[24rem] z-[999]">
          <Model inline />
        </div>
      </div>

      <div className="z-0">
        <Footer />
      </div>
    </>
  );
}

export default ContactUsSection;
