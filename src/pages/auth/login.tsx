import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authheader from "../../assets/auth.gif";
import authServices from "../../services/authServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { LoginT } from "../../type";
//import { signInWithPopup } from "firebase/auth";
//import { auth, googleProvider } from "../../lib/firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginT>({
    email: "",
    password: "",
  });

  const { mutate, status } = useMutation({
    mutationFn: authServices.Login,
    onSuccess: (data: any) => {
      console.log("Login response data:", data);
      const token = data?.token;
      toast.success("Login Successfully");

      if (token) {
        // Redirect to PaintPal native app via deep link
        window.location.href = `paintpal://login?authToken=${token}`;
      } else {
        console.error("No token returned from server");
      }
    },
    onError: () => {
      toast.error("Login failed");
    },
  });

  // // mutation to exchange firebase token with backend
  // const { mutate: exchangeFirebaseToken } = useMutation({
  //   mutationFn: (payload: { firebaseToken: string }) => authServices.FirebaseLogin(payload),
  //   onSuccess: (data: any) => {
  //     toast.success("Logged in via Firebase");
  //     const token = data?.token;
  //     if (token) window.location.href = `paintpal://login?authToken=${token}`;
  //   },
  //   onError: () => toast.error("Firebase login failed"),
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const firebaseToken = await result.user.getIdToken();
  //     exchangeFirebaseToken({ firebaseToken });
  //   } catch (err: any) {
  //     console.error("Google sign-in error:", err);
  //     toast.error(err?.message || err?.code || "Google sign-in failed");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl   rounded-3xl shadow-lg">
        {/* Video Header */}
        {/* <div className="relative w-full h-48">
          <video
            src={authheader}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-t-xl "
          />
        
        </div> */}

        {/* Logo */}
        <div>
         
            <img src={authheader} alt="Auth Logo" className="rounded-t-3xl" />
         
        </div>

        {/* Header */}
        <div className=" mt-3 px-6 py-4 ">
          <h2 className="text-xl font-semibold text-gray-800">
            Log in to your account
          </h2>
          <p className="text-gray-500  mt-1">Welcome back, Mark!</p>
        </div>

        {/* Form */}
        <form className="space-y-6 px-6 pb-6 mt-4">
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
              id="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
              <button
                onClick={() => {
                  navigate("/forgot-password");
                  scrollTo(0, 0);
                }}
                className="text-sm text-gray-500"
              >
                Forgot your password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={status === "pending"}
            className="w-full bg-[#5FBF92] hover:bg-[#5FBF92]/60 py-3 rounded-lg font-semibold transition"
          >
            {status === "pending" ? "Logging in..." : "Login"}
          </button>

          <div className="flex items-center justify-center gap-3  ">
            <div className="border w-6"></div>
            <span className="text-gray-600">OR</span>
            <div className="border w-6"></div>
          </div>

          <span className="text-center flex items-center justify-center text-gray-600 text-md">
            Login with
          </span>

          <div className="flex flex-col gap-3">
            <button
              type="button"
             // onClick={handleGoogleSignIn}
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
              onClick={() => {
                navigate("/joinasguest");
                scrollTo(0, 0);
              }}
              className="w-full bg-gray-900 text-white py-3 rounded-lg  transition"
            >
              Join as a Guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
