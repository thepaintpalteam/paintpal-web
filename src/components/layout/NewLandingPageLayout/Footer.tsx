import { useNavigate } from "react-router-dom";
import logo from "../../../assets/paintpal/images/logo2.png";

import insta from "../../../assets/paintpal/svgs/insta.svg";
import link from "../../../assets/paintpal/svgs/link.svg";
import x from "../../../assets/paintpal/svgs/x.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 lg:mx-36">
      <div>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between m-6 lg:my-6 gap-6  ">
            <div>
              <img src={logo} className="w-28" />
              <p className="lg:w-[400px] mt-4 text-lg text-gray-900">
                Bringing people together through the joy of painting. Create,
                connect, and celebrate art in a whole new way with virtual pain
                parties that feel just like the real thing.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-24  mt-10 lg:mt-0">
              <div>
                <p className="text-lg font-medium  mb-4">Product</p>
                <ul className="flex flex-col gap-4 text-gray-900   cursor-pointer">
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Features
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    How it Works
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Pricing
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-medium  mb-4">Download</p>
                <ul className="flex flex-col gap-4 text-gray-900   cursor-pointer">
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    IOS
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Andriod
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Windows
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Mac
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-medium  mb-4">Support</p>
                <ul className="flex flex-col gap-4 text-gray-900   cursor-pointer">
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Help Center
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Contact Us
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Privacy Policy
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                      scrollTo(0, 0);
                    }}
                  >
                    Terms of Service
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-8">
                  <img src={insta} />
                  <img src={link} />
                  <img src={x} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/***** Copyright Text */}
        <div>
      
          <div className="max-w-[1400px] mx-auto border-t border-gray-300">
            <div className="flex flex-col lg:flex-row mx-12 items-center justify-between">
              <p className="py-5 text-sm text-gray-600 text-center">
                © 2025 Copyright, All Right Reserved
              </p>

              <p className="py-5 text-sm text-gray-600 text-center">
                Made with ❤️ for artists everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
