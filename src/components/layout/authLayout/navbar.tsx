import logo from "../../../assets/paintpal/images/authlogo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // check if user is currently on login or signup page
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";

  return (
    <div className="py-2 lg:max-w-[1500px] lg:mx-auto">
      <div className="max-w-[1440px] flex items-center justify-between py-2 text-sm mx-3">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <NavLink to="/">
            <img src={logo} className="w-28" alt="Logo" />
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center lg:gap-8 cursor-pointer group">
            <div className="flex items-center gap-4">
              {isLoginPage ? (
                <NavLink to="/signup">
                  <button className="bg-[#5FBF92] py-3 font-medium px-4 text-lg rounded-lg">
                    Sign up
                  </button>
                </NavLink>
              ) : isSignUpPage ? (
                <NavLink to="/login">
                  <button className="bg-[#5FBF92] py-3 font-medium px-4 text-lg rounded-lg">
                    Login
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <button className="bg-[#5FBF92] py-3 font-medium px-4 text-lg rounded-lg">
                    Login
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
