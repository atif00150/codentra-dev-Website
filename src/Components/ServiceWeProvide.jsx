import Button from "../Components/Button";

function ServiceWeProvide() {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex items-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: "url('/ServicesPages/abstractbg.png')" }}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-around gap-10 p-10">
        <div className=" max-w-full text-left">
          <h1 className="text-2xl w-auto sm:text-4xl text-black capitalize font-bold mb-4">
            not sure if we provide <br />
            <span className="text-[#FFAF1E]">the services you need?</span>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            We provide fast, reliable car unlock and key replacement services,
            ensuring you're back on the road in no time. Available 24/7 for
            emergencies.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="text-2xl flex items-center justify-around gap-3 font-bold">
            <img className="w-6 h-auto" src="/phone icon.png" alt="" /> 0239203
          </div>
          <Button
            className="bg-[#FFAF1E] text-black w-40 py-3 font-extrabold text-sm uppercase flex items-center justify-center"
            text="Call Now"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceWeProvide;
