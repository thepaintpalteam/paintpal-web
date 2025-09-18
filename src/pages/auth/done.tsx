
import authlogo from "../../assets/paintpal/images/authlogo2.png";
import forgot from "../../assets/paintpal/svgs/done.svg";
import { useNavigate } from "react-router-dom";


const Done = () => {
  const navigate = useNavigate();
 
 

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg">
        {/* Logo */}
        <div>
          <div className="bg-gradient-to-b from-[#FEAF1E] via-[#FEAF1E] to-[#FEAF1E] p-10 rounded-t-xl shadow-md flex items-center justify-center">
            <img src={authlogo} alt="Auth Logo" className="w-36" />
          </div>
        </div>

        {/* Header */}
        <div className="mt-3 px-6 py-4 text-center flex flex-col gap-2 items-center justify-center">
          <img src={forgot} className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">
           All done!
          </h2>
          <p className="text-gray-600">
            Your password has been reset
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 px-6 pb-6 mt-4">
         

          {/* Continue Button */}
          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            type="submit"
            className="w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

        {/* Stepper Progress */}
        <div className="flex justify-center items-center gap-2 px-6 pb-6 mt-14">
          <div className="h-2 flex-1 bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1 bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1  bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1  bg-[#5FBF92] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Done
