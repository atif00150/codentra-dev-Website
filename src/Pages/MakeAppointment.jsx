import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { MdCall } from "react-icons/md";
import FAQ from "../Components/FAQ";
import Customers from "./Customers";
import Footer from "./Footer";

const MakeAppointment = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 💠 Blue Section */}
      <div className="w-full bg-blue-100 relative overflow-hidden pb-10">
        {/* Background Pattern */}
        <img
          src="/bg-1.png"
          alt="Pattern"
          className="hidden sm:block absolute top-0 right-0 h-full w-auto object-cover z-0 pointer-events-none"
        />

        {/* Navbar */}
        <Navbar />

        {/* INSTANT QUOTE Button */}
        <Button
          className="absolute left-0 sm:top-[12rem] top-[10rem] transform bg-black text-white text-[5px] sm:text-[7px] px-4 sm:px-2 py-1 font-semibold z-50 flex flex-row-reverse items-center whitespace-nowrap justify-center gap-2"
          style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          icon="/SVG.png"
          iconClass="w-3 h-3"
          text="INSTANT QUOTE"
          onClick={() => navigate("/instant-quote")}
        />

        {/* Side Image */}
        <img
          src="/image (1).png"
          alt="Hero Visual"
          className="absolute right-0 top-0 w-2/3 sm:w-96 md:w-96 h-auto object-contain z-10"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Headings + Form */}
          <div className="flex flex-col space-y-6">
            {/* Headings */}
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                FAST. EASY. SECURE.
              </h2>
              <p className="text-3xl sm:text-4xl font-bold">
                Book a Service <span className="text-[#FFAF1E]">Online</span>
              </p>
            </div>

            {/* Form (visible only on sm and up) */}
            <div className="hidden sm:block bg-white rounded-lg shadow-md px-6 py-8">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="input-style" />
                <div className="flex gap-4">
                  <input type="email" placeholder="Email Address" className="input-style w-1/2" />
                  <input type="tel" placeholder="Phone Number" className="input-style w-1/2" />
                </div>
                <input type="text" placeholder="Address" className="input-style" />
                <div className="flex gap-4">
                  <input type="text" placeholder="City" className="input-style w-1/2" />
                  <input type="text" placeholder="State" className="input-style w-1/2" />
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center w-1/2 border border-black rounded-lg px-2">
                    <img src="/calendar-icon.png" alt="Date Icon" className="w-5 h-5 mr-2" />
                    <input type="text" placeholder="Service Date" className="w-full py-2 bg-transparent outline-none" />
                  </div>
                  <div className="flex items-center w-1/2 border border-black rounded-lg px-2">
                    <img src="/clock-icon.png" alt="Time Icon" className="w-5 h-5 mr-2" />
                    <input type="text" placeholder="Service Time" className="w-full py-2 bg-transparent outline-none" />
                  </div>
                </div>
                <textarea placeholder="Your Message" className="input-style h-24" />
                <button type="submit" className="bg-[#FFAF1E] text-black w-full py-2 px-6 rounded font-medium text-sm">
                  Submit
                </button>
              </form>

              {/* Icons */}
              <div className="flex justify-center gap-6 mt-6">
                {[
                  { icon: "/truck-fast.png", label: "Fast" },
                  { icon: "/smile.png", label: "Easy" },
                  { icon: "/lock.png", label: "Secure" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <img src={icon} alt={label} className="w-6 h-6" />
                    <p className="text-sm font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image (already placed above) */}
        </div>
      </div>

      {/* Mobile Form */}
      <div className="block sm:hidden px-4 py-6">
        <div className="max-w-[90%] mx-auto bg-white shadow-lg rounded-xl p-4">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="input-style" />
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="input-style w-1/2" />
              <input type="tel" placeholder="Phone" className="input-style w-1/2" />
            </div>
            <input type="text" placeholder="Address" className="input-style" />
            <div className="flex gap-2">
              <input type="text" placeholder="City" className="input-style w-1/2" />
              <input type="text" placeholder="State" className="input-style w-1/2" />
            </div>
            <div className="flex gap-2">
              <div className="flex items-center w-1/2 border border-black rounded-lg px-2">
                <img src="/calendar-icon.png" alt="Date Icon" className="w-5 h-5 mr-2" />
                <input type="text" placeholder="Service Date" className="w-full bg-transparent py-2 outline-none" />
              </div>
              <div className="flex items-center w-1/2 border border-black rounded-lg px-2">
                <img src="/clock-icon.png" alt="Time Icon" className="w-5 h-5 mr-2" />
                <input type="text" placeholder="Service Time" className="w-full bg-transparent py-2 outline-none" />
              </div>
            </div>
            <textarea placeholder="Your Message" className="input-style h-24" />
            <button type="submit" className="bg-[#FFAF1E] text-black w-full py-2 px-6 rounded font-medium text-sm">
              Submit
            </button>
          </form>

          {/* Info Icons */}
          <div className="flex justify-center gap-4 mt-6">
            {[
              { icon: "/truck-fast.png", label: "Fast" },
              { icon: "/smile.png", label: "Easy" },
              { icon: "/lock.png", label: "Secure" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <img src={icon} alt={label} className="w-5 h-5" />
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


<section className="px-4 py-10 max-w-7xl mx-auto">
  {/* Heading */}
  <div className="text-center mb-8">
    <h4 className="text-xl sm:text-2xl font-semibold">
      What Happens After <span className="text-[#FFAF1E] px-2">You Submit the Form?</span>
    </h4>
  </div>

  {/* Grid: 2 columns on mobile, 5 on xl screens */}
  <div className="grid grid-cols-2 xl:grid-cols-5 gap-6">
    {/* Step 1 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xl text-[#FFAF1E]">1</span>
        <img src="/make appointment/Group.png" alt="Submit Confirmation" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Submission Confirmation</p>
      <p className="text-xs">
        You’ll receive an email or text acknowledging your request.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className=" text-xl text-[#FFAF1E]">2</span>
        <img src="/make appointment/Group (1).png" alt="Team Contact" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Our Team Contacts You</p>
      <p className="text-xs">
        A Codentra Locksmith representative will reach out to confirm your booking.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className=" text-xl text-[#FFAF1E]">3</span>
        <img src="/make appointment/Vector.png" alt="Discussion" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Details Discussion</p>
      <p className="text-xs">
        We’ll finalize service needs, timings, and ensure you’re fully informed.
      </p>
    </div>

    {/* Step 4 */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xl text-[#FFAF1E]">4</span>
        <img src="/make appointment/Group (2).png" alt="Scheduling" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">Schedule Confirmation</p>
      <p className="text-xs">
        You'll get a confirmed time slot based on availability and urgency.
      </p>
    </div>

    {/* Step 5 — Centered */}
    <div className="bg-white shadow-md rounded-lg p-4 text-center col-span-2 xl:col-span-1 xl:justify-self-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xl text-[#FFAF1E]">5</span>
        <img src="/make appointment/Vector (1).png" alt="Service Arrival" className="w-6 h-6" />
      </div>
      <p className="font-bold text-base mb-1">On-Time Arrival</p>
      <p className="text-xs">
        Our technician arrives on schedule to complete the service professionally.
      </p>
    </div>
  </div>
</section>
<section className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
  {/* Background Image */}
  <img
    src="/ServiceArea/Rectangle 101.png"
    alt="Service Area Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay Container */}
  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-16 text-black">
    <div className="w-full max-w-5xl text-center">
      {/* Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
        {/* Column 1: Text */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            Not sure if we provide <span className="text-[#FFAF1E]">service to your area?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base max-w-lg">
            If you're unsure whether we service your specific location, give us a call at <strong>123‑567‑890</strong>,
            and we’ll quickly let you know if we can assist.
          </p>
        </div>

        {/* Column 2: Call Info + Button */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
            <MdCall size={24} color="#FFAF1E" />
            <span className="font-semibold">123‑456‑7891</span>
          </div>
          <Button
            className="cursor-pointer bg-[#FFAF1E] text-white text-[10px] sm:text-sm px-4 py-2 font-semibold rounded flex items-center gap-2"
            icon=""
            iconClass=""
            text="Call Now"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<FAQ/>
<Customers/>
<Footer/>
    </>
  );
};

export default MakeAppointment;