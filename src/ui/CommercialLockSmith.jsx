import React from "react";
import ServicesHero from "../Components/ServicesHero";
import Cards from "../Components/Cards";
import ServiceWeProvide from "../Components/ServiceWeProvide";

import Customers from "../Pages/Customers";
import MapSection from "../Components/MapSection";
import ContactUsSection from "../Pages/ContactUsSection";
import FAQ from "../Components/FAQ";

const commercialCards = [
  {
    image: "/ServicesPages/image11.png",
    title: "Car Lockout",
    desc: "Locked out of your vehicle? We can unlock any make or model quickly and safely.",
  },
  {
    image: "/ServicesPages/image.png",
    title: "Commercial Lock Replacement",
    desc: "Need a new car key? We provide key replacement for most makes and models.",
  },
  {
    image: "/ServicesPages/image123.png",
    title: "Commercial Lock Rekey",
    desc: "We program key fobs for many vehicles, ensuring convenience and security.",
  },
  {
    image: "/ServicesPages/resedentialimagecards4.png",
    title: "Commercial Hardware Installation",
    desc: "Need a spare key? We offer quick and accurate key duplication services.",
  },
  {
    image: "/ServicesPages/hardwareinstallation.png",
    title: "Emergency Exit",
    desc: "Our locksmiths can cut new keys for your vehicle on-site for most makes and models.",
  },
  {
    image: "/ServicesPages/houselockout.png",
    title: "Access Control Systems",
    desc: "Having trouble with your ignition? We replace ignition lock cylinders for most vehicles.",
  },
];

function CommercialLockSmith() {
  return (
    <>
      <ServicesHero
        title="Commercial LockSmith "
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam omnis ullam! Lorem ipsum dolor sit amet consectetur adipisicing."
        image="/ServicesPages/commerciallocksmith.png"
        badgeImage="/Vector (1).png"
      />
      <Cards data={commercialCards} />
      <ServiceWeProvide />
      <FAQ hideReadMoreBtn />
      <Customers />
      <MapSection />
      <ContactUsSection
        humanImage="/ServicesPages/commercialfooter.png"
        buttonText="Learn More"
      />
    </>
  );
}

export default CommercialLockSmith;
