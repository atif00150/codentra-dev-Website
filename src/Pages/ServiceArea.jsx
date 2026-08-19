import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import { BiCurrentLocation, BiLocationPlus, BiMessage } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { MdCall, MdPunchClock } from 'react-icons/md';
import Footer from './Footer';
import Customers from './Customers';

const ServiceArea = () => {
  const items = [
  { id: 1, title: '1000+', desc: 'HOUSE LOCKOUTS RESOLVED', img: '/Group.png' },
  { id: 2, title: '500+', desc: 'COMMERCIAL LOCKS REPLACED',   img: '/Vector.png' },
  { id: 3, title: '2400+',   desc: 'CARS LOCKOUTS HANDLED', img:'/Group (1).png' },
];
  return (
    <>
    <div className="w-full p-2 bg-blue-100 h-1/2 sm:max-h-auto relative overflow-visible sm:overflow-hidden">
        <div className="hidden sm:flex absolute bottom-0 -right-10 md:-top-40 md:-right-32 lg:-top-10 lg:-right-32 xl:-top-20 xl:-right-0 w-full h-full justify-end pointer-events-none z-0">
          <img
            src="/bg-1.png"
            alt="Pattern"
            className="h-full w-full object-cover absolute top-15 right-0"
            style={{ objectPosition: "right" }}
          />
        </div>
        <Navbar />
          <Button
          className="absolute left-0 sm:top-[15rem] top-[10rem] cursor-pointer transform bg-black text-white text-[7px] sm:text-[12px] px-1 sm:px-2 py-1 font-semibold text-sm z-50 flex flex-row items-center whitespace-nowrap justify-center gap-1"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
          }}
          icon="/Group 40.png"
          iconClass="relative -top-10 w-10"
          
          text="INSTANT QUOTE"
        />
        <img className='absolute right-0 top-0 w-2/3 sm:w-96 md:w-96' src="/ServiceArea/image.png" alt="" />
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-10 md:px-12 xl:px-20 py-10 z-10 relative">
          <div className="flex w-44   flex-col translate-x-12 lg:translate-x-44 relative justify-center text-start sm:text-left  space-y-4 sm:w-64 sm:translate-x-6  md:w-96 lg:w-auto max-w-full sm:pl-10 lg:pl-16">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-black leading-tight">
            Our Services 
              <span className="text-[#FFAF1E]"> Area</span>
            </h1>

            <p className="text-sm sm:text-base text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              aliquam omnis ullam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil aliquid veritatis placeat eligendi fugit!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem esse dicta qui corporis fugit!
            </p>
            
          
          </div>
          
          </div>
          <div className="relative flex justify-center">
  <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6  px-4 sm:px-8">
    {items.map(item => (
      <div
        key={item.id}
        className="
          bg-white shadow rounded-xl p-4
          flex flex-col sm:flex-row items-center sm:items-start
          gap-4
        "
      >
        {/* Image */}
        <img
          src={item.img}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />

        {/* Text */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
        <div className='h-2 bg-[#FFAF1E]'></div>
         <section className="w-full max-h-3xl overflow-hidden py-10">
      {/* inner wrapper keeps everything from stretching > 1280 px  */}
      <div className="
        mx-auto max-w-screen-xl
        flex flex-col lg:flex-row
        items-center lg:items-start
        gap-10  sm:px-10
      ">
        {/* LEFT:  heading + form + results */}
        <div className="flex-1 flex flex-col items-center  p-4 lg:items-start gap-6">
          {/* Heading */}
          <h1 className="
            text-center lg:text-left
            font-bold leading-tight tracking-tight
            text-3xl sm:text-4xl md:text-5xl
            max-w-[22ch]             /* keeps it ~2 lines on phones */
          ">
            Not sure if we serve your area?
          </h1>

          {/* Search bar */}
          <form className="
            w-full sm:max-w-md
            flex items-center gap-2
            border-2 border-gray-300 rounded-lg shadow
            p-2
          ">
            <img src="/ServiceArea/magnifying-glass.png" alt="" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Enter your zip code."
              className="flex-1 bg-transparent focus:outline-none placeholder-gray-500 text-sm sm:text-base"
            />
            <Button
              className="shrink-0 bg-[#FFAF1E] text-black text-xs sm:text-sm px-4 py-2 rounded-md"
              text="Go"
            />
          </form>

          {/* Results label */}
          <p className="w-full px-18  text-base sm:text-lg font-medium">
            Search Results:
          </p>

          {/* Result card */}
          <div className="
  w-full
  p-8
  sm:max-w-md
  md:max-w-lg
  lg:max-w-xl
  xl:max-w-2xl
  grid grid-cols-1 
">
  <div className="w-full items-center flex gap-4">
    <img
      src="/ServiceArea/image (1).png"
      alt=""
      className="w-28 sm:w-32 md:w-40 h-full object-cover rounded-md"
    />
    <div className="flex flex-col gap-4 text-sm sm:text-base">
      <p className="flex items-center gap-2"><BiCurrentLocation size={28} color="#FFAF1E" /> Leon Valley, TX</p>
      <p className="flex items-center gap-2"><BiMessage size={28} color="#FFAF1E" /> emailhere@email.com</p>
      <p className="flex items-center gap-2"><MdCall size={28} color="#FFAF1E" /> 123‑456‑7891</p>
      <div className="flex items-start gap-2">
        <MdPunchClock size={28} color="#FFAF1E" />
        <p className="leading-tight">
          <span>Mon‑Fri : 9 am – 6 pm</span><br />
          <span>Sat‑Sun : 10 am – 4 pm</span>
        </p>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* RIGHT: decorative graphic (optional) */}
        <img
          src="/ServiceArea/Group.png"
          alt=""
          className=" h-2/12 lg:w-1/2"
        />
      </div>
    </section>
 <section className="relative  min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
  {/* Background Image */}
  <img
    src="/ServiceArea/Rectangle 101.png"
    alt="Service Area Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Centered Overlay Text */}
  <div className="
    absolute inset-0
    flex items-center justify-center
    px-4 sm:px-8 lg:px-16
    text-center text-black
   bg-opacity-30
  ">
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
        Not sure if we provide <span className="text-[#FFAF1E]">service to your area?</span>
      </h2>
      <p className="text-xs sm:text-sm md:text-base max-w-lg">
        If you're unsure whether we service your specific location, give us a call at <strong>123‑567‑890</strong>, and we’ll quickly let you know if we can assist.
      </p>
      <p className="flex items-center gap-2 text-sm sm:text-base">
        <MdCall size={24} color="#FFAF1E" /> 123‑456‑7891
      </p>
     <Button
          className=" cursor-pointer transform bg-[#FFAF1E] text-white text-[7px] sm:text-[12px] px-1 sm:px-2 py-1 font-semibold text-sm z-50 flex flex-row items-center whitespace-nowrap justify-center gap-1"
          style={{
            writingMode: "horizontal-tb",
            textOrientation: "mixed",
          }}
          icon=""
          iconClass="ri-drag-move-line"
          
          text="Call Now"
        />
    </div>
  </div>
</section>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl p-6 mx-auto">
  {/* Box 1 (Intro Box) */}
  <div className="bg-white rounded-md px-6 py-8 text-center flex flex-col items-center justify-center  shadow">
    <p className="text-lg font-extrabold">Why <span className="text-[#FFAF1E]">Choose Us?</span></p>
  </div>

  {/* Box 2 */}
  <div className="bg-white rounded-md p-6 shadow flex flex-col items-center text-center gap-3">
    <img src='/Group (4).png' alt="Expertise" className="w-16 h-16" />
    <p className="font-semibold">Expertise you can trust</p>
    <p className="text-sm text-gray-600">Our locksmiths are not only experienced but also fully licensed, bonded, and insured.</p>
  </div>

  {/* Box 3 */}
  <div className="bg-white rounded-md p-6 shadow flex flex-col items-center text-center gap-3">
    <img src='/Group (5).png' alt="Fast Response" className="w-16 h-16" />
    <p className="font-semibold">Fast Response Times</p>
    <p className="text-sm text-gray-600">We understand that lockouts and emergencies can happen anytime — we offer 24/7 service.</p>
  </div>

  {/* Box 4 */}
  <div className="bg-white rounded-md p-6 shadow flex flex-col items-center text-center gap-3">
    <img src='/Group (6).png' alt="Affordable" className="w-16 h-16" />
    <p className="font-semibold">Affordable Pricing</p>
    <p className="text-sm text-gray-600">We offer transparent and competitive prices—no surprises, just honest work.</p>
  </div>

  {/* Box 5 */}
  <div className="bg-white rounded-md p-6 shadow flex flex-col items-center text-center gap-3">
    <img src='/Group (7).png' alt="Customer Approach" className="w-16 h-16" />
    <p className="font-semibold">Customer-Centric Approach</p>
    <p className="text-sm text-gray-600">Our team is dedicated to your satisfaction and listens to every concern with care.</p>
  </div>

  {/* Box 6 */}
  <div className="bg-white rounded-md p-6 shadow flex flex-col items-center text-center gap-3">
    <img src='/Group (8).png' alt="Comprehensive Services" className="w-16 h-16" />
    <p className="font-semibold">Comprehensive Services</p>
    <p className="text-sm text-gray-600">From residential to commercial and automotive locksmith needs — we handle it all.</p>
  </div>
</div>
<Customers className="mt-10" bgImage="/bg-1.png" />
<Footer/>
    </>
  )
}

export default ServiceArea