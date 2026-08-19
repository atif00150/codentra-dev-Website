import React from "react";
import ServicesHero from "../Components/ServicesHero";
import Cards from "../Components/Cards";
import ServiceWeProvide from "../Components/ServiceWeProvide";

import MapSection from "../Components/MapSection";
import ContactUsSection from "../Pages/ContactUsSection";
import Customers from "../Pages/Customers";
import FAQ from "../Components/FAQ";

const resedentialCards = [
  {
    image: "/ServicesImages/2.png",
    title: "House Lockout",
    desc: "Locked out of your vehicle? We can unlock any make or model quickly and safely.",
  },
  {
    image: "/ServicesPages/resedentialimagecards.png",
    title: "Lock Replacement",
    desc: "Need a new car key? We provide key replacement for most makes and models.",
  },
  {
    image: "/ServicesPages/resedentialimagecards3.png",
    title: "Lock Rekey",
    desc: "We program key fobs for many vehicles, ensuring convenience and security.",
  },
  {
    image: "/ServicesPages/resedentialimagecards4.png",
    title: "Lock Repair",
    desc: "Need a spare key? We offer quick and accurate key duplication services.",
  },
  {
    image: "/ServicesPages/hardwareinstallation.png",
    title: "Hardware Installation",
    desc: "Our locksmiths can cut new keys for your vehicle on-site for most makes and models.",
  },
  {
    image: "/ServicesPages/houselockout.png",
    title: "House LockOut",
    desc: "Having trouble with your ignition? We replace ignition lock cylinders for most vehicles.",
  },
];

function ResedentialLockSmith() {
  return (
    <>
      <ServicesHero
        title="Resedential LockSmith "
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam omnis ullam! Lorem ipsum dolor sit amet consectetur adipisicing."
        image="/ServicesPages/resedentialimage.png"
        badgeImage="/Group (2).png"
      />
      <Cards data={resedentialCards} />
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

export default ResedentialLockSmith;
