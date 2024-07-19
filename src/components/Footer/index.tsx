import { memo } from "react";
import dash from "../../../public/assets/dash.svg";
import insta from "../../../public/assets/instagram.png";
import facebook from "../../../public/assets/facebok.png";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="md:w-[60vw] ">
        <div className="text-4xl py-5 font-semibold">Contact Us</div>
      </div>
      <div className="bg-[#222222] w-full flex justify-center py-8">
        <div className="lg:w-[40vw] lg:flex lg:justify-between">
          {/* Address & Contact */}
          <div className="flex gap-10 lg:gap-24">
            <div className="xl:leading-loose">
              <p>Our Address</p>
              <p>123, sai kung,</p>
              <p>Hong Kong.</p>
            </div>
            <div className="xl:leading-loose">
              <p>Our Contacts</p>
              <p>info@thedojo.com</p>
              <p>+123-456-789</p>
            </div>
          </div>
          {/* social media */}
          <div className="flex items-end ">
            <div>Follow Us </div>
            <img src={dash.src} alt="dash img" className="lg:mr-24" />
            <img
              src={facebook.src}
              alt="facebook"
              className="h-7 w-7 mr-8 cursor-pointer"
            />
            <img
              src={insta.src}
              alt="instagram"
              className="h-7 w-7 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* copyright  */}
      <div className="text-center py-5">
        <p>
          &copy; 2024 COPYRIGHT thedojo.com-2024. PRIVACY POLICY | TERMS OF
          SERVICE
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
