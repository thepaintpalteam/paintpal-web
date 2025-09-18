import { useState } from "react";
import logo from "../../../assets/paintpal/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

const menus = [
  {
    name: "Features",
    route: "/",
  },
  {
    name: "How it works",
    route: "/",
  },
  {
    name: "Pricing",
    route: "/",
  },
 
];



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate()

  return (
    <div className=" py-2 lg:max-w-[1400px] lg:mx-auto  ">
      <div className="max-w-[1440px] flex items-center justify-between py-2 text-sm mx-3 ">
        <div className="flex items-center gap-10">
          <NavLink to="/">
            <img src={logo} className="w-28" alt="Logo" />
          </NavLink>
        </div>

         <div className="flex items-center gap-6">
              <ul className="hidden md:flex items-start gap-8 font-medium">
                {menus.map((menu, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-2 cursor-pointer ">
                      <li className="py-1 text-lg font-medium">{menu.name}</li>
                    </div>
                  </div>
                ))}
              </ul>
        </div>


        <div className="flex items-center gap-4">
          <div className="flex items-center  lg:gap-8 cursor-pointer group">
           
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/login')} className="bg-white border border-gray-300 lg:w-32 py-3 font-medium px-4 text-lg  rounded-lg ">
                Login
              </button>
              <button className="bg-[#5FBF92] py-3 hidden lg:block font-medium  px-4 text-lg  rounded-lg ">
                Get started 
              </button>
              <div
                className="lg:hidden block cursor-pointer"
                onClick={() => setShowMenu(true)}
              >
                <AiOutlineMenu className=" text-xl" />
              </div>
            </div>

            {/**********Mobile Menu */}
            <div
              className={` ${
                showMenu ? "fixed w-full" : "h-0 w-0"
              } md:hidden right-0 top-0 bottom-0 z-20 overflow-y-scroll bg-white transition-all`}
            >
              <div
                onClick={() => setShowMenu(false)}
                className=" px-5 py-6 flex items-end text-4xl justify-end border-b"
              >
                &times;
              </div>
              <ul className="flex flex-col  gap-2 mt-6 px-4 text-3xl font-medium">
                {menus.map((menu, index) => (
                  <button key={index} className="border-b-2 py-4 px-8">
                    <div className="flex items-center justify-between">
                      <span className="text-lg"> {menu.name}</span>
                    </div>
                  </button>
                ))}
              </ul>
              <div className="flex flex-col  mt-20 px-10 gap-4"></div>
              <div className="px-10 mt-20 mb-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
