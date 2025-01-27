import * as motion from "motion/react-client";
import carRental from "../../assets/car-rentals.png";
import homeRepair from "../../assets/house-services.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "919100401610";
    const message = encodeURIComponent("Hello! I need some help.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <section id="home">
      <div
        className="container bg-cover bg-center bg-no-repeat p-[1rem] sm:p-[2rem] lg:px-[4rem] lg:py-[2rem] xl:p-[5rem] 
        xl:py-[2rem] 2xl:p-[6rem] 2xl:py-[2rem] 
      grid grid-cols-1 md:grid-cols-2 min-h-[600px] relative mt-[4rem]"
      >
        <div className="flex flex-col justify-center py-14 md:py-0 ">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-4xl text-[#252B42] md:text-5xl font-bold mb-4 leading-tight"
            >
              Your One Stop Solution for{" "}
              <span className="text-[#1A92D6]">Home Repairs</span> &{" "}
              <span className="text-[#1A92D6]">Car Rentals </span>!
            </motion.h1>
            <motion.p
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-[#737373] font-montserrat font-normal leading-[25px] tracking-[0.2px]"
            >
              Reliable, affordable and hassle-free services at your fingertips
            </motion.p>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="hover:bg-[#1A92D6] hover:text-white text-[#1A92D6] border-2 hover:border-[#1A92D6] font-semibold py-2 px-6 cursor-pointer rounded-4xl flex items-center gap-2 group">
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Explore our Services
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </Link>
              </button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: 2 }}
          className="relative flex md:flex-col md:items-start items-center justify-center"
        >
          <img
            src={carRental}
            alt="Car Rentals"
            className="w-[200px] md:w-[275px] xl:w-[350px] md:absolute top-0 left-0"
          />
          <img
            src={homeRepair}
            alt="Home Repair"
            className="w-[200px] md:w-[275px] xl:w-[350px] md:absolute top-56 right-0"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWhatsApp}
          className="fixed bottom-10 right-10 bg-green-500 p-2 rounded-full shadow-xl cursor-pointer hover:bg-green-600 transition duration-300 z-50"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={32} className="text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
