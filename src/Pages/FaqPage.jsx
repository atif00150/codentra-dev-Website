import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import FAQ from '../Components/FAQ'
import Footer from './Footer'
import Customers from './Customers'
import { MdCall } from 'react-icons/md'

const FaqPage = () => {
  return (
    <>
     <div className="w-full bg-blue-100 h-1/2 sm:h-auto relative overflow-hidden">
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
          className="absolute left-0 sm:top-[12rem] top-[10rem] cursor-pointer transform bg-black text-white text-[5px] sm:text-[7px] px-4 sm:px-2 py-1 font-semibold text-sm z-50 flex flex-row-reverse items-center whitespace-nowrap justify-center gap-2"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "mixed",
          }}
          icon="/SVG.png"
          iconClass="w-3 h-3"
          text="INSTANT QUOTE"
        />
<img className='absolute right-0 top-0 w-2/3 sm:w-96 md:w-96' src="/Faqs/image (1).png" alt="" />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-10 md:px-12 xl:px-20 py-10 z-10 relative">
          <div className="flex flex-col justify-center text-start sm:text-left  space-y-4 max-w-full sm:pl-10 lg:pl-16">
          

            <div className="flex flex-col text-2xl sm:text-2xl xl:text-3xl font-bold text-black leading-tight">
              <span>Frequently Asked Questions</span>
               <span>Got Questions?</span>
              <span className="text-[#FFAF1E]">We've Got Answers</span>
            </div>

            <p className="text-sm sm:text-base text-black max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              aliquam omnis ullam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil aliquid veritatis placeat eligendi fugit!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem esse dicta qui corporis fugit!
            </p>
          </div>

          {/* <div className="w-full h-full relative flex items-center justify-center z-10">
            <img
              src="/about us/aboutusimage.png"
              alt="About Us"
              className="w-[230px] h-[230px] sm:w-auto bottom-45 left-35 sm:h-[120vh] absolute sm:-top-40 sm:-right-40 object-contain rounded-tl-[1px] rounded-bl-[50px] overflow-hidden"
            />
          </div> */}
        </div>
      </div>
      <div className='w-full h-2 bg-[#FFAF1E]'></div>
    <FAQ/>
 <div className="w-full bg-blue-100 px-4 sm:px-8 lg:px-20 py-10">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start gap-12">
    
    {/* Text Section */}
    <div className="w-full lg:w-1/2 flex flex-col space-y-4 text-center lg:text-left">
      <h3 className="text-3xl sm:text-4xl font-extrabold">
        Still Have <br />
        <span className="text-[#FFAF1E] text-2xl sm:text-3xl font-bold">Questions?</span>
      </h3>

      <p className="text-sm sm:text-base text-gray-800 max-w-lg mx-auto lg:mx-0">
        If you didn't find the answer to your question here, feel free to contact our team.
        We're happy to provide more information and guide you through the process of
        setting up a complaint website for your HOA or Condo Association.
      </p>

      {/* Contact Info */}
      <div className="space-y-4">
        <div>
          <p className="text-xs sm:text-sm font-bold text-gray-700">PHONE</p>
          <div className="flex items-center text-center justify-center lg:justify-start gap-2">
            <MdCall size={24}  />
            <span className="text-sm sm:text-base text-gray-800">+1 (123) 456-7890</span>
          </div>
        </div>
        <div>
          <p className="text-xs sm:text-sm font-bold text-gray-700">EMAIL</p>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <MdCall size={24} color="#FFAF1E" />
            <span className="text-sm sm:text-base text-gray-800">email@example.com</span>
          </div>
        </div>
      </div>
    </div>

    {/* Form Section */}
    <form className="w-full lg:w-1/2 grid grid-cols-1 gap-6 bg-white p-6 rounded-md shadow">
      {/* Row 1: Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="text-sm font-medium mb-1 text-gray-700">Your First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="John"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className="text-sm font-medium mb-1 text-gray-700">Your Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Doe"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Row 2: Contact & Question */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium mb-1 text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="sm:col-span-2 flex flex-col">
          <label htmlFor="question" className="text-sm font-medium mb-1 text-gray-700">Your Question</label>
          <input
            type="text"
            id="question"
            name="question"
            placeholder="Ask your question here"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Row 3: Submit */}
      <div>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
    <Customers/>
    <Footer/>
    </>
  )
}

export default FaqPage