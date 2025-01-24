import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
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
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="font-semibold uppercase bg-[#23856D] text-white py-6 m-6 rounded-3xl">
            <ul className="flex flex-col gap-3 items-center justify-center">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
