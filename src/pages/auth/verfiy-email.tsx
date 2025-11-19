import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import authheader from "../../assets/auth.gif";
import toast from "react-hot-toast";
import authServices from "../../services/authServices";



const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: authServices.verifyEmail,
    onSuccess: () => {
      // Redirect to login after successful verification
      navigate("/login");
    },
    onError: (err: any) => {
      console.error(err);
      toast.error("Verification failed. Please try again.");
      navigate("/signup");
    },
  });

  useEffect(() => {
    if (token) {
      mutation.mutate(token);
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg">
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
        <div className="mt-3 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {mutation.isPending
              ? "Verifying Email..."
              : mutation.isError
              ? "Verification Failed"
              : "Email Verified!"}
          </h2>
        </div>

        {/* Spinner */}
        {mutation.isPending && (
          <div className="flex justify-center py-6">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#5FBF92] rounded-full animate-spin"></div>
          </div>
        )}

        {mutation.isError && (
          <p className="text-center text-red-500 py-4">
            There was a problem verifying your email.
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
