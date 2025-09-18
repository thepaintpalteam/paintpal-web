import { ArrowLeft } from "lucide-react";
import forgot from "../../assets/paintpal/svgs/reset.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authheader from "../../assets/paintpal/images/authheader.mp4";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input if value entered
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg">
       {/* Video Header */}
        <div className="relative w-full h-48">
          <video
            src={authheader}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-t-xl "
          />
          {/* Optional dark overlay */}
        </div>

        {/* Header */}
        <div className="mt-3 px-6 py-4 text-center flex flex-col gap-2 items-center justify-center">
          <img src={forgot} className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Password reset
          </h2>
          <p className="text-gray-600">
            We sent a code to{" "}
            <span className="text-gray-900 font-medium">
              markkeith@gmail.com
            </span>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 px-6 pb-6 mt-4">
          {/* OTP Input */}
          <div className="flex justify-center gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                className={`w-14 h-14 text-center text-xl font-semibold rounded-lg border outline-none
                  ${digit ? "border-[#5FBF92]" : "border-gray-400"}
                  focus:border-[#5FBF92]`}
              />
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={() => {
              navigate("/set-password");
              scrollTo(0, 0);
            }}
            type="submit"
            className="w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition"
          >
            Continue
          </button>

          <div className="cursor-pointer text-center text-md">
            Didn't receive the email?{" "}
            <span className="text-[#5FBF92] underline font-medium">
              Click to resend
            </span>
          </div>

          <div
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="flex cursor-pointer items-center justify-center gap-3 mt-6"
          >
            <ArrowLeft className="w-6 h-6 text-[#5FBF92]" />
            <span className="text-md">back to login</span>
          </div>
        </form>

        {/* Stepper Progress */}
        <div className="flex justify-center items-center gap-2 px-6 pb-6 mt-14">
          <div className="h-2 flex-1 bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1 bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
