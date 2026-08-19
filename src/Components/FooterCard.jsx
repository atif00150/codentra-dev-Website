import React from "react";

function FooterCard({ className = "" }) {
  return (
    <div
      className={`border border-zinc-200 w-[90%] max-w-xs bg-white p-4 sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://avatar.iran.liara.run/public/31"
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg text-black font-semibold">John Doe</h3>
        </div>
      </div>

      <p className="text-gray-600 mb-4">
        Need help? Ask your question below and we'll get back to you shortly.
      </p>

      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type here..."
          className="w-full px-3 py-2 pr-24 border text-black placeholder:text-zinc-400 border-gray-300"
        />
        <button className="absolute cursor-pointer right-1 top-1 bottom-1 bg-[#FFAF1E] text-black font-medium px-4 ">
          Submit
        </button>
      </div>
    </div>
  );
}

export default FooterCard;
