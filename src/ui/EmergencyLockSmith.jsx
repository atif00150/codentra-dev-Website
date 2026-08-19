import React from "react";
import ServicesHero from "../Components/ServicesHero";
import Cards from "../Components/Cards";
import ServiceWeProvide from "../Components/ServiceWeProvide";

import Customers from "../Pages/Customers";
import MapSection from "../Components/MapSection";
import ContactUsSection from "../Pages/ContactUsSection";
import FAQ from "../Components/FAQ";

const emergencyCards = [
  {
    image: "/ServicesImages/1.png",
    title: "Car Lockout",
    desc: "Locked out of your vehicle? We can unlock any make or model quickly and safely.",
  },
  {
    image: "/ServicesImages/2.png",
    title: "Home LockLockout",
    desc: "Need a new car key? We provide key replacement for most makes and models.",
  },
  {
    image: "/ServicesImages/3.png",
    title: "Business Lockout",
    desc: "We program key fobs for many vehicles, ensuring convenience and security.",
  },
  {
    image: "/ServicesImages/4.png",
    title: "File cabinet unlock",
    desc: "Need a spare key? We offer quick and accurate key duplication services.",
  },
  {
    image: "/ServicesImages/5.png",
    title: "broken key extraction",
    desc: "Our locksmiths can cut new keys for your vehicle on-site for most makes and models.",
  },
  {
    image: "/ServicesImages/6.png",
    title: "File cabinet unlock",
    desc: "Having trouble with your ignition? We replace ignition lock cylinders for most vehicles.",
  },
];

function EmergencyLockSmith() {
  return (
    <>
      <ServicesHero
        title="Emergency LockSmith "
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam omnis ullam! Lorem ipsum dolor sit amet consectetur adipisicing."
        image="/ServicesPages/24-image.png"
        badgeImage="/Layer_1.png"
      />
      <Cards data={emergencyCards} />
      <ServiceWeProvide />
      <FAQ hideReadMoreBtn />
      <Customers />
      <MapSection />
      <ContactUsSection
        humanImage="/ServicesPages/resefooterimage.png"
        buttonText="Learn More"
      />
    </>
  );
}

export default EmergencyLockSmith;
