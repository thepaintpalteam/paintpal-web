import { useNavigate } from "react-router-dom";
import success from "../../assets/paintpal/svgs/success.svg";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg">
        {/* Header */}
        <div className="mt-3 mx-6 py-4 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Event price</h2>
          <p className="text-gray-500 mt-1">£5.99</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-6 px-6 pb-10 pt-6">
          <img src={success} />

          <h1 className="text-lg font-medium">Payment successful 🎉</h1>

          {/* Login Button */}
          <button
            type="submit"
            onClick={() => {
              navigate("/join-call");
              scrollTo(0, 0);
            }}
            className="w-full bg-[#5FBF92] py-3 rounded-lg font-medium transition"
          >
            Next
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
        </div>
      </div>
    </div>
  );
};

export default Success;
