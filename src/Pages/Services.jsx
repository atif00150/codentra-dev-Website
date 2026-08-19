import React from "react";

const services = [
  {
    title: "24/7 Emergency Locksmith",
    image: "/about us/emergencylocksmith.png",
    bg: "bg-[#FFAF1E]",
    description:
      "Immediate response, competitive pricing. Codentra Locksmith is on call to secure your home, business, or vehicle quickly. Your safety is our priority.",
  },
  {
    title: "Residential Services",
    image: "/about us/residential services.png",
    bg: "bg-[#FFAF1E]",
    description:
      "All things home-related — from rekeying to smart lock installations. Enjoy peace of mind with our expert residential locksmith solutions.",
  },
  {
    title: "Commercial Services",
    image: "/about us/commercial image.png",
    bg: "bg-[#FFAF1E]",
    description:
      "We offer comprehensive security services for offices, warehouses, and buildings. Protect your business with expert commercial-grade solutions.",
  },
  {
    title: "Automotive Locksmith",
    image: "/public/about us/aboutusimagelast.png",
    bg: "bg-[#FFAF1E]",
    description:
      "Locked out of your car? Lost your key? No problem. Our fast response automotive locksmiths have you covered.",
  },
];

function Services() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-white text-black">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold">
          <span className="text-[#FFAF1E]">Our</span> Services
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mattis velit varius, varius sed sapien euismod, congue elementum
          ligula.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <div
                className={`${service.bg} text-white font-bold py-2 px-3 inline-block rounded-tl-2xl -mt-12 w-fit shadow-md self-end`}
              >
                {service.title}
              </div>
              <p className="text-sm text-start text-gray-700 mt-4 flex-1">
                {service.description}
              </p>
              <button className="text-[#FFAF1E] mt-4 text-start font-semibold text-sm hover:underline">
                VIEW ALL →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#FFAF1E] text-black px-6 py-2 font-semibold  inline-flex items-center gap-2">
          <img src="/phone icon.png" alt="" /> CALL NOW
        </button>
      </div>
    </div>
  );
}

export default Services;
