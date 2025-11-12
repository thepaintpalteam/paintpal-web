import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import forgot from "../../assets/paintpal/svgs/set.svg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import authheader from "../../assets/paintpal/images/authheader.mp4";
import authServices from "../../services/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const location = useLocation();
  const email = (location.state as { email?: string })?.email;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength checker
  const getStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const mutation = useMutation({
    mutationFn: authServices.ResetPassword,
    onSuccess: () => {
      navigate("/done");

      scrollTo(0, 0);
    },
    onError: (error: any) => {
      toast.error("Reset failed:", error.response?.data || error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !password) {
      return toast.error("Enter password");
    }
    if (!email) {
      return toast.error("Email is required");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    mutation.mutate({ resetToken: token, email, newPassword: password });
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
        <div className="mt-3 px-6 py-3 text-center flex flex-col gap-2 items-center justify-center">
          <img src={forgot} className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Set new password
          </h2>
          <p className="text-gray-600">Must be at least 8 characters</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 px-6 pb-6 mt-4">
          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Strength Indicator */}
          <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded ${
                  i <= strength ? "bg-[#5FBF92]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition"
          >
            {mutation.isPending ? "Sending..." : "Reset password"}
          </button>

          <div
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="flex cursor-pointer items-center justify-center gap-3"
          >
            <ArrowLeft className="w-6 h-6 text-[#5FBF92]" />
            <span className="text-md">back to login</span>
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

export default SetPassword;
