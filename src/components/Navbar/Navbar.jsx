import { NavbarMenu } from "../../mockData/data";
import { ImSortAlphaAsc } from "react-icons/im";
import * as motion from "motion/react-client";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ResponsiveMenu from "../responsiveMenu/ResponsiveMenu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "919100401610";
    const message = encodeURIComponent(
      "Hello, I am interested in your services!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-40 bg-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-[1rem] sm:p-[1rem] lg:px-[4rem] lg:py-[1rem] xl:p-[5rem] xl:py-[1rem] 2xl:p-[6rem] 2xl:py-[1rem] flex justify-between items-center py-6"
        >
          <div className="text-xl flex items-center gap-2 font-bold">
            <ImSortAlphaAsc />
            <p className="uppercase">
              {" "}
              <Link
                to="home"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                home n drive
              </Link>
            </p>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center">
              {NavbarMenu.map((menu) => (
                <motion.li
                  key={menu.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    to={menu.link}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                    className="text-gray-600 hover:text-[#1A92D6] font-semibold inline-block py-1 px-2"
                  >
                    {menu.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <button
              onClick={openWhatsApp}
              className="hover:bg-[#1A92D6] hover:text-white text-[#1A92D6] border-2 hover:border-[#1A92D6] font-semibold py-1 px-4 cursor-pointer rounded-4xl"
            >
              Whatsapp Us
            </button>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-3xl cursor-pointer" />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
