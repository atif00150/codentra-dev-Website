import { useEffect, useRef, useState } from "react";
import { FiArrowUp, FiMail } from "react-icons/fi";
import FooterCard from "../Components/FooterCard";

function Footer() {
  const [showFooterCard, setShowFooterCard] = useState(false);
  const mailBtnRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target) &&
        mailBtnRef.current &&
        !mailBtnRef.current.contains(event.target)
      ) {
        setShowFooterCard(false);
      }
    }
    if (showFooterCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFooterCard]);

  return (
    <>
      <footer className="bg-[#FFAF1E] text-black pt-10 pb-6 px-2 sm:px-6 z-50 relative lg:px-8">
        <div className="block sm:hidden py-8 px-4">
          <div className="flex justify-center mb-6">
            <div className="text-center flex items-center justify-center gap-2">
              <h1 className="text-2xl font-bold leading-none tracking-wider">
                CODENTRA
              </h1>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-3">JOIN OUR NEWSLETTER</h3>
              <div className="relative max-w-xs mx-auto">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full py-3 px-4 rounded-fulltext-black border border-black  rounded-full text-center"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2">
                  <span className="text-white font-medium">
                    <img src="/arrow.png" alt="" />
                  </span>
                </button>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 pt-4">
              <a href="#" className="p-2 rounded-full">
                <span className="w-10 h-auto block">
                  <img src="/fb.png" alt="" />
                </span>
              </a>
              <a href="#" className="p-2 rounded-full">
                <span className="w-10 h-auto block">
                  <img src="/twitter.png" alt="" />
                </span>
              </a>
              <a href="#" className="p-2 rounded-full">
                <span className="w-10 h-auto block">
                  <img src="/insta.png" alt="" />
                </span>
              </a>
              <a href="#" className="p-2 rounded-full">
                <span className="w-10 h-auto block">
                  <img src="/dribble.png" alt="" />
                </span>
              </a>
            </div>

            <div className="flex items-start gap-3 w-full justify-center">
              <div className="text-start">
                <h3 className="text-xs sm:text-lg font-bold mb-2">
                  CONTACT US
                </h3>
                <div className="space-y-1">
                  <div className="text-xs sm:text-lg flex items-start justify-start">
                    {/* <span className="mr-2">📧</span> */}
                    <span>Email Here</span>
                  </div>
                  <div className="text-xs sm:text-lg flex items-center justify-center">
                    {/* <span className="mr-2">📱</span> */}
                    <span>+0123456789</span>
                  </div>
                  <div className="text-xs sm:text-lg flex items-center justify-center">
                    {/* <span className="mr-2">📍</span> */}
                    <span>Address Here</span>
                  </div>
                </div>
              </div>

              <div className="text-start">
                <h3 className=" text-xs sm:text-lg font-bold mb-2">
                  QUICK LINKS
                </h3>
                <div className="text-xs sm:text-lg grid grid-cols-1  gap-2 max-w-xs mx-auto">
                  <a href="#" className="hover:text-yellow-400">
                    SERVICES
                  </a>

                  <a href="#" className="hover:text-yellow-400">
                    FAQ
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    BLOG
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    ABOUT
                  </a>
                  <a href="#" className="hover:text-yellow-400">
                    CONTACT
                  </a>
                </div>
              </div>
              {/* Hours */}
              <div className="text-start">
                <h3 className=" font-bold text-xs sm:text-lg mb-2">
                  WE'RE HERE 24/7!
                </h3>
                <div className="space-y-1 text-xs sm:text-lg flex flex-col items-start justify-start">
                  <div>Sunday: Open 24 Hours</div>
                  <div>Monday: Open 24 Hours</div>
                  <div>Tuesday: Open 24 Hours</div>
                  <div>Wednesday: Open 24 Hours</div>
                  <div>Thursday: Open 24 Hours</div>
                  <div>Friday: Open 24 Hours</div>
                  <div>Saturday: Open 24 Hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 whitespace-nowrap text-xs text-black">
            <p> # B03005201</p>
            <p> # IBM1126845600</p>
            <p> # 013067</p>
            <p> # 013067</p>
          </div>
        </div>

        <div className="hidden sm:block text-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 px-3 py-4">
            {/* Logo + Contact + Social */}
            <div className="md:col-span-4 space-y-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold leading-tight tracking-wider">
                  CODENTRA
                </span>
              </div>

              <div className="flex flex-col mb-6 gap-1">
                <a href="#" className="flex items-center gap-2">
                  Contact Us
                </a>
                <a href="#" className="flex items-center gap-2">
                  <img src="/msg.png" alt="email" className="w-3 h-3" />
                  Email here
                </a>
                <a href="#" className="flex items-center gap-2">
                  <img src="/phone.png" alt="phone" className="w-3 h-3" />
                  Number here
                </a>
                <a href="#" className="flex items-center gap-2">
                  <img src="/address.png" alt="address" className="w-3 h-3" />
                  Address here
                </a>
              </div>

              <div className="flex space-x-2">
                <a href="#">
                  <img src="/fb.png" alt="Facebook" className="w-10 h-auto" />
                </a>
                <a href="#">
                  <img
                    src="/twitter.png"
                    alt="Twitter"
                    className="w-10 h-auto"
                  />
                </a>
                <a href="#">
                  <img
                    src="/insta.png"
                    alt="Instagram"
                    className="w-10 h-auto"
                  />
                </a>
                <a href="#">
                  <img
                    src="/pinterest.png"
                    alt="Pinterest"
                    className="w-10 h-auto"
                  />
                </a>
                <a href="#">
                  <img
                    src="/dribble.png"
                    alt="Dribble"
                    className="w-10 h-auto"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-xs font-semibold mb-1">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services Area
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <div className="flex items-center gap-1 mb-1 whitespace-nowrap">
                <h3 className="text-xs font-semibold">WE ARE HERE 24/7</h3>
              </div>
              <ul className="space-y-0.5">
                <li>Monday: 24 hours</li>
                <li>Tuesday: 24 hours</li>
                <li>Wednesday: 24 hours</li>
                <li>Thursday: 24 hours</li>
                <li>Friday: 24 hours</li>
                <li>Saturday: 24 hours</li>
                <li>Sunday: 24 hours</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xs font-semibold mb-1">NEWSLETTER</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow py-2 px-3 rounded-l-full text-black border border-black text-[10px]"
                />
                <button className="bg-black text-white font-medium py-1 px-2 rounded-r-full flex items-center">
                  <img src="/arrow.png" alt="Arrow" className="h-3 w-3" />
                </button>
              </div>
              <div className="mt-4  flex flex-col gap-2">
                {" "}
                <p> # B03005201</p>
                <p> # IBM1126845600</p>
                <p> # 013067</p>
                <p> # 013067</p>
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col items-center justify-center gap-3">
              <div
                ref={mailBtnRef}
                onClick={() => setShowFooterCard((prev) => !prev)}
                className="bg-black rounded-full p-2 flex items-center justify-center cursor-pointer"
              >
                <FiMail className="text-[#FFAF1E] w-6 h-6 cursor-pointer" />
              </div>
              {showFooterCard && (
                <div
                  ref={cardRef}
                  className="absolute bottom-[18rem] z-50 right-0"
                >
                  <FooterCard />
                </div>
              )}
              <div className="bg-black rounded-full p-2 flex items-center justify-center">
                <FiArrowUp
                  className="text-[#FFAF1E] w-6 h-6 cursor-pointer"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                />
              </div>
              {/* <img
                src="/icons.png"
                alt="Icons"
                className="w-10 h-auto cursor-pointer object-contain mt-2"
              /> */}
            </div>
          </div>
        </div>
      </footer>

      <div className=" pt-3 pb-3 bg-black  text-white flex flex-col sm:flex-row justify-between whitespace-nowrap px-8 items-center">
        <div className="text-white text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} CODENTRA. All rights reserved.
        </div>

        <div className="flex items-center text-sm space-x-6">
          <div className="flex items-center text-sm">
            <span>Terms and conditions</span>
          </div>
          <span>Privacy policy</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
