import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { Link } from "react-scroll";
import * as motion from "motion/react-client";

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

const Footer = () => {
  return (
    <footer id="contact">
      <div
        className="container p-[1rem] sm:p-[2rem] lg:px-[4rem] lg:py-[2rem] xl:p-[5rem] 
        xl:py-[2rem] 2xl:p-[6rem] 2xl:py-[2rem] max-h-[400px] relative mt-[1rem] flex flex-col justify-center items-center gap-8 bg-gray-100"
      >
        <motion.div
          variants={SlideLeft(0.5)}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-1"
        >
          <h1 className="text-2xl font-bold">Get in Touch</h1>
          <p className="text-[#737373] font-montserrat mb-2">
            Questions or feedback? we&apos;d love to hear from you.
          </p>
          <div className="flex justify-center items-center gap-12 border border-gray-[#737373] py-3 px-7 rounded-2xl">
            <FaInstagram
              className="cursor-pointer hover:text-[#1A92D6]"
              size="25px"
            />
            <FaWhatsapp
              className="cursor-pointer hover:text-[#1A92D6]"
              size="25px"
            />
            <FaYoutube
              className="cursor-pointer hover:text-[#1A92D6]"
              size="25px"
            />
          </div>
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-2">
          <ul className="flex gap-6 items-center">
            {NavbarMenu.map((menu) => (
              <motion.li
                key={menu.id}
                variants={SlideLeft(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
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
        <motion.div
          variants={SlideLeft(0.7)}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="flex flex-col justify-start items-start"
        >
          <p className="text-[#737373] font-montserrat">
            Copyright © 2025 Home N Drive. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
