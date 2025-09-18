
import logo from "../../../assets/paintpal/images/authlogo.png";
import { NavLink } from "react-router-dom";



const Navbar = () => {
 

  return (
    <div className=" py-2 lg:max-w-[1500px] lg:mx-auto  ">
      <div className="max-w-[1440px] flex items-center justify-between py-2 text-sm mx-3 ">
        <div className="flex items-center gap-10">
          <NavLink to="/">
            <img src={logo} className="w-28" alt="Logo" />
          </NavLink>
        </div>


        <div className="flex items-center gap-4">
          <div className="flex items-center  lg:gap-8 cursor-pointer group">
           
            <div className="flex items-center gap-4">
             
              <button className="bg-[#5FBF92] py-3 hidden lg:block font-medium  px-4 text-lg  rounded-lg ">
                Get started 
              </button>
             
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
