import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import ContactUsSection from "../Pages/ContactUsSection";
import Customers from "../Pages/Customers";
import Services from "../Pages/Services";
import WhyChooseUs from "../Pages/WhyChooseUs";

function AboutUs({ buttonText }) {
  return (
    <>
      <div className="w-full bg-blue-100 h-1/2 sm:h-screen relative overflow-hidden">
        <div className="hidden sm:flex absolute bottom-0 -right-10 md:-top-40 md:-right-32 lg:-top-10 lg:-right-32 xl:-top-20 xl:-right-0 w-full h-full justify-end pointer-events-none z-0">
          <img
            src="/bg-1.png"
            alt="Pattern"
            className="h-full w-full object-cover absolute top-15 right-0"
            style={{ objectPosition: "right" }}
          />
        </div>

        <Button
          className="absolute left-0 sm:top-[15rem] top-[10rem] cursor-pointer transform bg-black text-white text-[5px] sm:text-[7px] px-4 sm:px-2 py-1 font-semibold text-sm z-10 flex flex-row-reverse items-center whitespace-nowrap justify-center gap-2"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
          }}
          icon="/SVG.png"
          iconClass="w-3 h-3"
          text="INSTANT QUOTE"
        />

        <Navbar className="relative z-30" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-10 md:px-12 xl:px-20 py-10 z-10 relative">
          <div className="flex flex-col justify-center text-start sm:text-left  space-y-4 max-w-full sm:pl-10 lg:pl-16">
            <p className="sm:text-lg text-xs font-semibold text-black uppercase tracking-wide">
              About Us
            </p>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-black leading-tight">
              Codentra <br />
              <span className="text-[#FFAF1E]">Locksmith</span>
            </h1>

            <p className="text-sm sm:text-base text-black max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              aliquam omnis ullam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil aliquid veritatis placeat eligendi fugit!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem esse dicta qui corporis fugit!
            </p>
          </div>

          <div className="w-full h-full relative flex items-center justify-center z-10">
            <img
              src="/about us/aboutusimage.png"
              alt="About Us"
              className="w-[230px] h-[230px] sm:w-auto bottom-45 left-35 sm:h-[120vh] absolute sm:-top-40 sm:-right-40 object-contain rounded-tl-[1px] rounded-bl-[50px] overflow-hidden"
            />
          </div>
        </div>
      </div>
      <Services />
      <WhyChooseUs />
      <Customers className="" bgImage="/bg-1.png" />
      <ContactUsSection buttonText="GET IN TOUCH" />
    </>
  );
}

export default AboutUs;
