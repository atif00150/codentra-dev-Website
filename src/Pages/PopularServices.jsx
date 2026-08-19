import React from "react";
import Button from "../Components/Button";

const services = [
  {
    title: "Car Lockout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus velit, varius sed sapien euismod.",
    image: "/ServicesImages/1.png",
  },
  {
    title: "Home Lockout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus velit, varius sed sapien euismod.",
    image: "/ServicesImages/2.png",
  },
  {
    title: "Business Lockout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus velit, varius sed sapien euismod.",
    image: "/ServicesImages/3.png",
  },
  {
    title: "File Cabinet Unlock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus velit, varius sed sapien euismod.",
    image: "/ServicesImages/4.png",
  },
  {
    title: "Broken Key Extraction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulummetus velit, varius sed sapien euismod.",
    image: "/ServicesImages/5.png",
  },
  {
    title: "File Cabinet Unlock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus velit, varius sed sapien euismod.",
    image: "/ServicesImages/6.png",
  },
];

function PopularServices() {
  return (
    <section className="relative w-full py-12 px-4 md:px-8 lg:px-16">
      <img
        src="/ServicesImages/Rectangle 71.png"
        alt="Background"
        className="absolute top-0 right-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Most popular <span className="text-yellow-500">services</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          metus velit, varius sed sapien euismod.
        </p>
      </div>

      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md p-2 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-[#FFAF1E] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <Button
                className="text-xs uppercase flex items-center justify-center gap-3 font-extrabold text-[#FFAF1E] py-2 px-4"
                icon="/Appointment.png"
                text="Make Appointment"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-12 flex items-center justify-center gap-4">
        <Button
          icon="/SVG.png"
          iconClass="w-4 h-4 mr-2"
          className="bg-black text-white py-1 whitespace-nowrap sm:py-3 px-6 text-sm "
          text="Make Appointment"
        />
        <Button
          icon="/phone icon.png"
          iconClass="w-4 h-4 mr-2"
          className="bg-[#FFAF1E] text-black py-1 whitespace-nowrap font-bold sm:py-3 px-6 text-sm"
          text="Call Now"
        />
      </div>
    </section>
  );
}

export default PopularServices;
