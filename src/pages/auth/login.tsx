import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import authlogo from "../../assets/paintpal/images/authlogo2.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl   rounded-xl shadow-lg">
        {/* Logo */}
        <div>
          <div className="bg-gradient-to-b from-[#FEAF1E] via-[#FEAF1E] to-[#FEAF1E] p-10 rounded-t-xl shadow-md flex items-center justify-center">
            <img src={authlogo} alt="Auth Logo" className="w-36" />
          </div>
        </div>

        {/* Header */}
        <div className=" mt-3 px-6 py-4 ">
          <h2 className="text-2xl font-semibold text-gray-800">
            Log in to your account
          </h2>
          <p className="text-gray-500 mt-1">Welcome back, Mark!</p>
        </div>

        {/* Form */}
        <form className=" space-y-8 px-6 pb-6 mt-4">
          {/* <div className="relative">
            <input
              type="text"
              id="username"
              placeholder="Username or Email"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-4 outline-none"
            />
            <label
              htmlFor="username"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Username or Email
            </label>
          </div> */}

          <div>
            {" "}
            <input
              type="text"
              id="username"
              placeholder="Username or Email"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />{" "}
          </div>

          <div>
            <div className="relative">
              {" "}
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
              />{" "}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {" "}
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}{" "}
              </button>{" "}
            </div>

            {/* Forgot password */}
            <div className="mt-2">
              <button  onClick={() => {navigate('/forgot-password'); scrollTo(0,0)}}  className="text-md text-gray-500">
                Forgot your password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

          <div className="flex items-center justify-center gap-3 py-4 ">
            <div className="border w-6"></div>
            <span className="text-gray-600">OR</span>
            <div className="border w-6"></div>
          </div>

          <span className="text-center flex items-center justify-center text-gray-600 text-md">
            Login with
          </span>
          <button
            type="button"
            className="w-full border-2 border-[#5FBF92] py-3 rounded-lg font-semibold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Gmail
          </button>

          {/* Join as Guest */}
          <button
            type="button"
            onClick={() => {navigate('/joinasguest'); scrollTo(0,0)}}
            className="w-full bg-gray-900 text-white py-3 rounded-lg  transition"
          >
            Join as a Guest
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
