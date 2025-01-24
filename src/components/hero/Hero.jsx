import * as motion from "motion/react-client";
import carRental from "../../assets/car-rentals.png";
import homeRepair from "../../assets/house-services.png";

const Hero = () => {
  return (
    <section>
      <div
        className="container p-[1rem] sm:p-[2rem] lg:px-[4rem] lg:py-[2rem] xl:p-[5rem] 
        xl:py-[2rem] 2xl:p-[6rem] 2xl:py-[2rem] 
      grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative mt-[4rem]"
      >
        <div className="flex flex-col justify-center py-14 md:py-0 ">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-relaxed xl:leading-normal">
              Your One Stop Solution for{" "}
              <span className="text-[#23856D]">Car Rentals</span> &{" "}
              <span className="text-[#23856D]">Home Repairs</span>!
            </h1>
            <p className="text-gray-600 xl:max-w-[500px]">
              Reliable, affordable and hassle-free services at your fingertips
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <button className="bg-[#23856D] text-white font-semibold py-2 px-4 cursor-pointer rounded-4xl">
                Explore our Services
              </button>
            </motion.div>
          </div>
        </div>
        <div className="relative flex md:flex-col md:items-start items-center justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
