import ServiceWeProvide from "../Components/ServiceWeProvide";
import FAQ from "../Components/FAQ";
import Customers from "../Pages/Customers";
import MapSection from "../Components/MapSection";
import ContactUsSection from "../Pages/ContactUsSection";
import ServicesHero from "../Components/ServicesHero";
import Cards from "../Components/Cards";

const automotiveCards = [
  {
    image: "/ServicesImages/1.png",
    title: "Car Lockout",
    desc: "Locked out of your vehicle? We can unlock any make or model quickly and safely.",
  },
  {
    image: "/ServicesPages/keyreplacment.png",
    title: "Car Key Replacement",
    desc: "Need a new car key? We provide key replacement for most makes and models.",
  },
  {
    image: "/ServicesPages/keyfob.png",
    title: "Key Fob Programming",
    desc: "We program key fobs for many vehicles, ensuring convenience and security.",
  },
  {
    image: "/ServicesPages/carkeydup.png",
    title: "Car Key Duplication",
    desc: "Need a spare key? We offer quick and accurate key duplication services.",
  },
  {
    image: "/ServicesPages/carkeydup.png",
    title: "Car Key Cutting",
    desc: "Our locksmiths can cut new keys for your vehicle on-site for most makes and models.",
  },
  {
    image: "/ServicesPages/ignitioncarkey.png",
    title: "Ignition Lock Cylinder Replacement",
    desc: "Having trouble with your ignition? We replace ignition lock cylinders for most vehicles.",
  },
];

function AutomotiveService() {
  return (
    <div className="w-full">
      <ServicesHero
        title="Automotive Locksmith"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam omnis ullam! Lorem ipsum dolor sit amet consectetur adipisicing."
        image="/ServicesPages/automotivelocksmith.png"
      />{" "}
      <Cards data={automotiveCards} />
      <ServiceWeProvide />
      <FAQ hideReadMoreBtn />
      <Customers />
      <MapSection />
      <ContactUsSection
        humanImage="/contactusimage2.png"
        buttonText="Learn More"
      />
    </div>
  );
}

export default AutomotiveService;
