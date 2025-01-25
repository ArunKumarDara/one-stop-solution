import * as motion from "motion/react-client";
import { FaCar } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";

const ServicesData = [
  {
    id: 1,
    title: "Hassle-Free Car Rentals",
    icon: <FaCar />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Ambulance Service",
    icon: <FaAmbulance />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Air Conditioner Repair",
    icon: <TbAirConditioning />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Washing Machine Repair",
    icon: <GiWashingMachine />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Electrical Service",
    link: "#",
    icon: <MdElectricalServices />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "House Cleaning",
    icon: <FaHome />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Offer = () => {
  return (
    <section id="services">
      <div
        className="container p-[1rem] sm:p-[2rem] lg:px-[4rem] lg:py-[2rem] xl:p-[5rem] 
        xl:py-[2rem] 2xl:p-[6rem] 2xl:py-[2rem] min-h-[600px] relative mt-[1rem]"
      >
        <h1 className="text-3xl font-bold text-left pb-10 text-[#252B42]">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] cursor-pointer rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
