import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <footer>
      <div
        className="container p-[1rem] sm:p-[2rem] lg:px-[4rem] lg:py-[2rem] xl:p-[5rem] 
        xl:py-[2rem] 2xl:p-[6rem] 2xl:py-[2rem] max-h-[300px] relative mt-[1rem]"
      >
        <Row gutter={[24, 24]} className="flex justify-center items-start">
          <Col sm={12} lg={6}>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-xl font-bold uppercase">home n drive</h1>
              <p>Copyright © 2025 Arun Kumar. All Rights Reserved.</p>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-xl font-bold uppercase">home n drive</h1>
              <p>Copyright © 2025 Arun Kumar. All Rights Reserved.</p>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-xl font-bold uppercase">home n drive</h1>
              <p>Copyright © 2025 Arun Kumar. All Rights Reserved.</p>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="text-xl font-bold">Get in Touch</h1>
              <p className="text-[#737373] font-montserrat font-normal tracking-[0.2px] mb-4">
                Questions or feedback?
                <br /> we&apos;d love to hear from you
              </p>
              <div className="flex justify-start items-start gap-8">
                <FaInstagram className="cursor-pointer" />
                <FaWhatsapp className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
