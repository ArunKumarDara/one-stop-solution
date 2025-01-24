import chiru from "../../assets/chiru.jpg";
import ossServices from "../../assets/ossServices.jpg";

const Offer = () => {
  return (
    <section>
      <div
        className="container bg-gray-100 p-[1rem] sm:p-[2rem] lg:px-[4rem] lg:py-[2rem] xl:p-[5rem] 
        xl:py-[2rem] 2xl:p-[6rem] 2xl:py-[2rem] min-h-[600px] relative mt-[1rem]"
      >
        <div className="flex flex-col justify-start items-center gap-2">
          <h1 className="text-[#252B42] font-open-sans text-3xl font-bold">
            What We Offer
          </h1>
          <p className="font-montserrat text-[#737373] font-normal">
            Convenient services designed to make your life easier
          </p>
        </div>
        <div className="flex md:justify-between items-center flex-col md:flex-row gap-4 md:gap-0 md:px-20">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={chiru} alt="Chiru" className="w-[350px] rounded-lg" />
            <h2 className="text-xl font-bold text-[#252B42]">
              Hassle-Free Car Rentals
            </h2>
            <p className="text-[#666666] font-open-sans">
              Choose from a variety of vehicles to suit your travel needs.
            </p>
            <button className="bg-[#1A92D6] text-white font-semibold mt-2 py-2 px-4 cursor-pointer rounded-4xl">
              Book Your Ride Now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <img
              src={ossServices}
              alt="Chiru"
              className="w-[350px] rounded-lg"
            />
            <h2 className="text-xl font-bold text-[#252B42]">
              Home Repair Services
            </h2>
            <p className="text-[#666666] font-open-sans">
              Expert technicians for everything from plumbing to electrical.
            </p>
            <button className="bg-[#1A92D6] text-white font-semibold mt-2 py-2 px-4 cursor-pointer rounded-4xl">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
