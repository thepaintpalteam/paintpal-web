import authlogo from "../../assets/paintpal/images/authlogo2.png";
import { useNavigate } from "react-router-dom";

const JoinAsGuest = () => {
  const navigate = useNavigate();

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
            Join a fun painting group
          </h2>
          <p className="text-gray-500 mt-1">
            Enter the secret code from the organiser
          </p>
        </div>

        {/* Form */}
        <form className=" space-y-6 px-6 pb-6 mt-4">
          <div>
            <div>
              {" "}
              <input
                type="text"
                id="code"
                placeholder="Secret code"
                className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
              />{" "}
            </div>

            {/* Header */}
            <div className=" mt-4 ">
              <h2 className="text-xl font-semibold text-gray-800">
                Struggling to locate your code?
              </h2>
              <p className="text-gray-500 mt-1">
                It’s probably in your texts or email and looks something like{" "}
                <span className="text-gray-700 font-medium">PNTP1279304</span>.
                Try searching{" "}
                <span className="text-gray-700 font-medium">“PaintPal”</span> in
                your inbox to help you find it.
              </p>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onClick={() => {
              navigate("/event-price");
              scrollTo(0, 0);
            }}
            className="w-full bg-[#5FBF92] py-3 rounded-lg font-medium transition"
          >
            Log in
          </button>

          <div
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className=" text-center text-md cursor-pointer"
          >
            Already have an account?{" "}
            <span className="text-[#5FBF92] underline font-medium">Log in</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinAsGuest;
