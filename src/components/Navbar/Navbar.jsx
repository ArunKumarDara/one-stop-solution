import { NavbarMenu } from "../../mockData/data";
import { ImSortAlphaAsc } from "react-icons/im";
import * as motion from "motion/react-client";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ResponsiveMenu from "../responsiveMenu/ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="p-[1rem] sm:p-[1rem] lg:px-[4rem] lg:py-[1rem] xl:p-[5rem] xl:py-[1rem] 2xl:p-[6rem] 2xl:py-[1rem] flex justify-between items-center py-8">
          <div className="text-xl flex items-center gap-2 font-bold">
            <ImSortAlphaAsc />
            <p className="uppercase">one stop solution</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center">
              {NavbarMenu.map((menu) => (
                <motion.li
                  key={menu.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a
                    href={menu.link}
                    className="text-gray-600 hover:text-[#23856D] font-semibold inline-block py-1 px-2"
                  >
                    {menu.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <button className="bg-[#23856D] text-white font-semibold py-2 px-4 cursor-pointer rounded-4xl">
              Whatsapp Us
            </button>
          </motion.div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
