import { useState } from "react";
import authlogo from "../../assets/paintpal/images/authlogo2.png";
import { Calendar, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [type, setType] = useState("text");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg">
        {/* Logo */}
        <div>
          <div className="bg-gradient-to-b from-[#FEAF1E] via-[#FEAF1E] to-[#FEAF1E] p-10 rounded-t-xl shadow-md flex items-center justify-center">
            <img src={authlogo} alt="Auth Logo" className="w-36" />
          </div>
        </div>

        {/* Header */}
        <div className="mt-3 px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create your PaintPal account
          </h2>
          <p className="text-gray-500 mt-1">
            Tell us a bit about yourself. Your privacy matters. Your info stays
            with us, and we’ll never share or sell it.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-y-8 gap-x-3 px-6 pb-6 mt-4">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              id="first_name"
              placeholder="Mark"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-4 outline-none"
            />
            <label
              htmlFor="first_name"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              First name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              id="last_name"
              placeholder="Keith"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-4 outline-none"
            />
            <label
              htmlFor="last_name"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Last name
            </label>
          </div>

          {/* Username */}
          <div className="col-span-2">
            <div className="relative ">
              <input
                type="text"
                id="username"
                placeholder="Mark"
                className="peer w-full border border-gray-400 rounded-lg px-3 py-4 outline-none"
              />
              <label
                htmlFor="username"
                className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
              >
                Username
              </label>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Username can't be changed after account creation
            </p>
          </div>

          {/* Email */}
          <div className="relative col-span-2">
            <input
              type="email"
              id="email"
              placeholder="mark@example.com"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-4 outline-none"
            />
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Email address
            </label>
          </div>

          {/* Date of Birth */}
          <div className="relative">
            <input
              id="dob"
              type={type}
              onFocus={() => setType("date")}
              onBlur={(e) => !e.target.value && setType("text")}
              placeholder="dd/mm/yy"
              className="peer w-full border border-gray-400 rounded-lg pl-3 pr-10 py-4 outline-none"
            />
            <label
              htmlFor="dob"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Date of Birth
            </label>

            {/* Calendar Icon */}
            <Calendar
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={20}
            />
          </div>

          {/* Location */}
          <div className="relative">
            <input
              type="text"
              id="location"
              placeholder="Country of resident"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-4 outline-none"
            />
            <label
              htmlFor="location"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Location
            </label>
          </div>

          {/* Password */}
          <div className="relative col-span-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder=" "
              className="peer w-full border border-gray-400 rounded-lg px-3 pt-5 pb-2 outline-none focus:border-[#FEAF1E] focus:ring-1 focus:ring-[#FEAF1E]"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2.5 bg-white px-1 text-gray-500 text-sm transition-all 
             peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
            >
              Password
            </label>

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative col-span-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password"
              placeholder=" "
              className="peer w-full border border-gray-400 rounded-lg px-3 pt-5 pb-2 outline-none focus:border-[#FEAF1E] focus:ring-1 focus:ring-[#FEAF1E]"
            />
            <label
              htmlFor="confirm_password"
              className="absolute left-3 top-2.5 bg-white px-1 text-gray-500 text-sm transition-all 
             peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
            >
              Confirm Password
            </label>

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Terms Switch */}
          <div className="col-span-2 flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => setAgree(!agree)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                agree ? "bg-[#5FBF92]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                  agree ? "translate-x-6" : ""
                }`}
              />
            </button>
            <p className="text-md text-gray-700">
              By proceeding, I acknowledge that I have agreed to{" "}
              <span className="text-[#5FBF92] underline cursor-pointer">
                PaintPal terms & condition
              </span>
            </p>
          </div>

          {/* Submit */}
          <div className="col-span-2 mt-4 border-t border-gray-300 py-6">
            <button
            onClick={() => {navigate('/plan'); scrollTo(0,0)}}
              type="submit"
              className="w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
