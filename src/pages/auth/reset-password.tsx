import { ArrowLeft } from "lucide-react";
import forgot from "../../assets/paintpal/svgs/reset.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import authheader from "../../assets/auth.gif";
import authServices from "../../services/authServices";
import toast from "react-hot-toast";


const ResetPassword = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const location = useLocation();
  const email = (location.state as { email?: string })?.email;
  const [error, setError] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: authServices.validateResetOtp,
    onSuccess: (data) => {
      // assuming backend returns { token: "abc123" }
      const token = data?.resetToken;
      if (token) {
        navigate(`/set-password/${token}`, { state: { email } });
      } else {
        setError("Something went wrong. Please try again.");
      }
    },
    onError: (err: any) => {
      setError(err?.response?.data?.message || "Invalid OTP. Please try again.");
    },
  });

  const mutation = useMutation({
    mutationFn: authServices.RequestPassword,
    onSuccess: () => {
      // navigate to reset page after success

      toast.success("Email sent successfully")
      scrollTo(0, 0);
    },
    onError: (error: any) => {
      console.error("Reset failed:", error.response?.data || error.message);
    },
  });

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input if value entered
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const otpValue = otp.join("");
    if (!email || otpValue.length < otp.length || otpValue.includes(" ")) {
      setError("Please enter the 6-digit code we sent to your email.");
      return;
    }

    setError("");
    mutate({ email, otp: otpValue });
  };

  const handleResendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutation.mutate({ email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg">
        {/* Video Header */}
        {/* <div className="relative w-full h-48">
          <video
            src={authheader}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div> */}

        <div>

          <img src={authheader} alt="Auth Logo" className="rounded-t-3xl" />

        </div>

        {/* Header */}
        <div className="mt-3 px-6 py-3 text-center flex flex-col gap-2 items-center justify-center">
          <img src={forgot} className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Password reset
          </h2>
          <p className="text-gray-600">
            We sent a code to{" "}
            <span className="text-gray-900 font-medium">{email}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 px-6 pb-6 mt-4">
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
                className={`w-10 h-10 text-center text-xl font-semibold rounded-lg border outline-none
                  ${digit ? "border-[#5FBF92]" : "border-gray-400"}
                  focus:border-[#5FBF92]`}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Continue Button */}
          <button
            type="submit"
            disabled={isPending}
            className={`w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition ${isPending ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {isPending ? "Verifying..." : "Continue"}
          </button>

          <div className="cursor-pointer text-center text-md">
            Didn’t receive the email?{" "}
            <span onClick={handleResendOtp} className="text-[#5FBF92] underline font-medium cursor-pointer">
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
            <span className="text-md">Back to login</span>
          </div>
        </form>

        {/* Stepper Progress */}
        <div className="flex justify-center items-center gap-2 px-6 pb-6 mt-14">
          <div className="h-2 flex-1 bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1 bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1 bg-[#5FBF92] rounded"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
