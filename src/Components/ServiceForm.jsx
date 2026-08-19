import React from "react";

function ServiceForm() {
  return (
    <div className="bg-white p-4 shadow-md w-full max-w-md">
      <div className="font-bold text-md mb-4">
        Fill Out The Service Request Form Below:
      </div>
      <form className="grid grid-cols-2 gap-3 text-sm">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full col-span-2"
        />
        <input
          type="email"
          placeholder="Your Email Address"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full"
        />
        <input
          type="tel"
          placeholder="Your Phone"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full col-span-2"
        />
        <input
          type="text"
          placeholder="City"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="State"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full"
        />
        <input
          type="date"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Service Time"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full"
        />
        <textarea
          placeholder="Message"
          rows="2"
          className="border p-1.5 sm:p-1.5 px-2 sm:px-3 rounded w-full col-span-2"
        />
        <button className="bg-[#FFAF1E] text-black cursor-pointer font-bold py-1.5 rounded w-full col-span-2">
          SUBMIT
        </button>
        <div className="flex justify-center gap-4 text-xs text-gray-600 w-full col-span-2">
          <span>🔒 FAST</span>
          <span>✅ EASY</span>
          <span>🔐 SECURE</span>
        </div>
      </form>
    </div>
  );
}

export default ServiceForm;
