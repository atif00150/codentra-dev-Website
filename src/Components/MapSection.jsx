import React from "react";

function MapSection() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-10 ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 place-content-around px-4">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold capitalize">
            Not sure if we serve <br />
            your area?
          </h2>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your zip code."
              className="w-full px-10 py-2 pr-28 border border-gray-300 rounded-md"
            />

            <img
              src="/ServicesImages/magnifying-glass.png"
              alt="Search Icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-auto"
            />

            <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-[#FFAF1E] text-black font-bold px-10 py-1.5 ">
              GO
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 sm:gap-9">
            <div className="w-full space-y-3 bg-white">
              <img
                src="/ServicesPages/mapsectionimage.png"
                alt="Location"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 w-full">
              <p className="text-gray-700 font-medium">Leon Valley, TX</p>
              <p className="text-gray-600">emailhere@email.com</p>
              <p className="text-gray-600">123-456-7891</p>
              <div className="text-gray-600 text-sm w-full">
                <p>Mon–Fri: 9:00am–6:00pm</p>
                <p>Sat–Sun: 10:00am–4:00pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-[#F2FAFF] p-10 sm:p-12">
          <div className="relative w-full max-w-2xl h-full">
            <img
              src="/ServicesPages/mapimage.png"
              alt="Map"
              className="w-full"
            />

            <img
              src="/zoominzoomout.png"
              alt="Zoom Controls"
              className=" absolute -bottom-8 sm:bottom-0 -right-8 sm:right-0 w-8 h-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapSection;
