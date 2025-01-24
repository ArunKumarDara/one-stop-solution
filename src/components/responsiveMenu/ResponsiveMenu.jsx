import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { Link } from "react-scroll";
// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 w-full h-[1/2] z-20"
        >
          <div className="font-semibold uppercase bg-[#1A92D6] text-white py-6 m-6 rounded-3xl">
            <ul className="flex flex-col gap-3 items-center justify-center">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
