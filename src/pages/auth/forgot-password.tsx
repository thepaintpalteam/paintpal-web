import { ArrowLeft } from "lucide-react";
import forgot from "../../assets/paintpal/svgs/forgot.svg";
import { useNavigate } from "react-router-dom";
import authheader from "../../assets/auth.gif";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import authServices from "../../services/authServices";
import toast from "react-hot-toast";




const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: authServices.RequestPassword,
    onSuccess: () => {
      // navigate to reset page after success
      navigate("/reset-password", { state: { email } });
      toast.success("Email sent successfully")
      scrollTo(0, 0);
    },
    onError: (error: any) => {
      console.error("Reset failed:", error.response?.data || error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutation.mutate({ email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-lg">
        {/* Header video */}
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
            Forgot password?
          </h2>
          <p className="text-gray-600">
            No worries, we’ll send you reset instructions.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 px-6 pb-6 mt-4">
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
              required
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition disabled:opacity-50"
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
          <div className="h-2 flex-1 bg-gray-300 rounded"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded"></div>
          <div className="h-2 flex-1 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
