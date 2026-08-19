import React from "react";

function Model({ open, onClose, inline = false }) {
  if (!open && !inline) return null;

  if (inline) {
    return (
      <div className="bg-white w-full max-w-md p-4">
        <h2 className="text-[#FFAF1E] uppercase text-2xl font-bold text-start mb-2">
          Request Quotation
        </h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
            <label
              className="text-black text-sm mb-1 font-medium"
              htmlFor="inline-name"
            >
              Enter Name
            </label>
            <input
              id="inline-name"
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 bg-white border border-gray-300 text-black placeholder-gray-400 outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label
                className="text-black mb-1 text-sm font-medium"
                htmlFor="inline-address"
              >
                Address
              </label>
              <input
                id="inline-address"
                type="text"
                placeholder="Address"
                className="px-3 w-full py-2 bg-white border border-gray-300 text-black placeholder-gray-400 outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                className="text-black mb-1 text-sm font-medium"
                htmlFor="inline-phone"
              >
                Phone Number
              </label>
              <input
                id="inline-phone"
                type="tel"
                placeholder="Phone Number"
                className="px-3 w-full py-2 bg-white border border-gray-300 text-black placeholder-gray-400 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-black mb-1 text-sm font-medium"
              htmlFor="inline-service"
            >
              Service
            </label>
            <input
              id="inline-service"
              type="text"
              placeholder="Service"
              className="w-full px-3 py-2 bg-white border border-gray-300 text-black placeholder-gray-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer uppercase bg-[#FFAF1E] text-white font-bold py-2 mt-2"
          >
            Get a free Quote
          </button>
        </form>
        <div className="flex justify-around text-xs text-gray-500 mt-4">
          <span>24/7 Available</span>
          <span>No Amendment Fees</span>
        </div>
      </div>
    );
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50">
      <div className="bg-black shadow-lg w-[90vw] max-w-md p-6 relative">
        <button
          className="absolute top-2 bg-zinc-600 rounded-full text-center px-2 right-3 text-white text-xl cursor-pointer font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-[#FFAF1E] uppercase text-2xl font-bold text-start mb-6">
          Request Quotation
        </h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
            <label
              className="text-white text-sm mb-1 font-medium"
              htmlFor="modal-name"
            >
              Enter Name
            </label>
            <input
              id="modal-name"
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label
                className="text-white mb-1 text-sm font-medium"
                htmlFor="modal-address"
              >
                Address
              </label>
              <input
                id="modal-address"
                type="text"
                placeholder="Address"
                className="px-3 w-full py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                className="text-white mb-1 text-sm font-medium"
                htmlFor="modal-phone"
              >
                Phone Number
              </label>
              <input
                id="modal-phone"
                type="tel"
                placeholder="Phone Number"
                className="px-3 w-full py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-white mb-1 text-sm font-medium"
              htmlFor="modal-service"
            >
              Service
            </label>
            <input
              id="modal-service"
              type="text"
              placeholder="Service"
              className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
          </div>
          <button className="w-full cursor-pointer uppercase bg-[#FFAF1E] text-white font-bold py-2 mt-2 ">
            Get a free Quote
          </button>
        </form>
        <div className="flex justify-around text-xs text-gray-300 mt-4">
          <span>24/7 Available</span>
          <span>No Amendment Fees</span>
        </div>
      </div>
    </div>
  );
}

export default Model;
