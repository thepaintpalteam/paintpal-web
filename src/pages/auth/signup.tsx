import { useState, useRef } from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import authheader from "../../assets/auth.gif";
import authServices from "../../services/authServices";
import toast from "react-hot-toast";

const SignUp = () => {
  const dobRef = useRef<HTMLInputElement | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    location: "",
    phoneNumber: "",
  });
  const [type, setType] = useState("text");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [showModal, setShowModal] = useState(false);

  const { mutate, status } = useMutation({
    mutationFn: authServices.SignUp,
    onSuccess: (data: any) => {
      toast.success("Account created successfully");
      setShowModal(true);
      if (data?.token) localStorage.setItem("token", data.token);
      if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));

      const token = data?.token;
      if (token) {
        // Redirect to PaintPal native app via deep link
        //window.location.href = `paintpal://login?authToken=${token}`;
        // Show modal instead of redirect

      } else {
        console.error("No token returned from server");
      }


    },
    onError: (err: any) => {
      console.error("Signup error:", err);
      const resp = err?.response?.data;

      // shape: { errors: ["msg1","msg2"] }
      if (Array.isArray(resp?.errors)) {
        resp.errors.forEach((m: string) => toast.error(m));
        // set a general server message
        setErrors((prev) => ({ ...prev, server: resp.errors.join(", ") }));
        return;
      }

      // shape: { errors: { field1: ["msg"], field2: ["msg"] } }
      if (resp?.errors && typeof resp.errors === "object") {
        const newErrors: Record<string, string | null> = {};
        Object.entries(resp.errors).forEach(([k, v]) => {
          const msg = Array.isArray(v) ? v.join(" ") : String(v);
          newErrors[k] = msg;
          toast.error(msg);
        });
        setErrors((prev) => ({ ...prev, ...newErrors }));
        return;
      }

      // single message field
      if (resp?.message) {
        toast.error(resp.message);
        setErrors((prev) => ({ ...prev, server: String(resp.message) }));
        return;
      }

      // fallback
      toast.error("Signup failed");
    },
  });

  // Validation helpers
  const usernameValid = (v: string) => /^[A-Za-z0-9_]+$/.test(v);
  const passwordValid = (v: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(v);
  const dobInPast = (v: string) => {
    if (!v) return false;
    const d = new Date(v);
    if (Number.isNaN(d.getTime())) return false;
    return d.getTime() < Date.now();
  };

  const validateForm = () => {
    const newErrors: Record<string, string | null> = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";

    if (!form.username) newErrors.username = "Username is required";
    else if (!usernameValid(form.username))
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";

    if (!form.email) newErrors.email = "Email is required";

    if (!form.password) newErrors.password = "Password is required";
    else if (!passwordValid(form.password))
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";

    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    if (form.dateOfBirth && !dobInPast(form.dateOfBirth))
      newErrors.dateOfBirth = "Date of birth must be in the past";

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return alert("Please agree to the terms.");
    const validation = validateForm();
    const hasErrors = Object.values(validation).some(Boolean);
    if (hasErrors) {
      setErrors(validation);
      const first = Object.values(validation).find(Boolean);
      if (first) toast.error(first as string);
      return;
    }

    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
      dateOfBirth: form.dateOfBirth,
      location: form.location,
      phoneNumber: form.phoneNumber,
    };

    mutate(payload);
  };

  const openDatePicker = () => {
    if (!dobRef.current) return;
    setType("date");
    const el: any = dobRef.current;
    if (typeof el.showPicker === "function") {
      el.showPicker();
    } else {
      dobRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg">
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

        <div>
          <img src={authheader} alt="Auth Logo" className="rounded-t-3xl" />

        </div>


        <div className="mt-3 px-6 py-3">
          <h2 className="text-xl font-semibold text-gray-800">
            Create your PaintPal account
          </h2>
          <p className="text-gray-500 mt-1">
            Tell us a bit about yourself. Your privacy matters. Your info stays
            with us, and we’ll never share or sell it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-y-8 gap-x-3 px-6 pb-6 mt-4"
        >
          <div className="relative">
            <input
              type="text"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Mark"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
            <label
              htmlFor="firstName"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              First name
            </label>
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-2">{errors.firstName}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Keith"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
            <label
              htmlFor="lastName"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Last name
            </label>
            {errors.lastName && (
              <p className="text-sm text-red-600 mt-2">{errors.lastName}</p>
            )}
          </div>

          <div className="col-span-2">
            <div className="relative">
              <input
                type="text"
                id="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Mark"
                className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
              />
              <label
                htmlFor="username"
                className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
              >
                Username
              </label>
            </div>
            {errors.username && (
              <p className="text-sm text-red-600 mt-2">{errors.username}</p>
            )}
            <p className="text-sm text-gray-600 mt-2">
              Username can't be changed after account creation
            </p>
          </div>

          <div className="relative col-span-2">
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="mark@example.com"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Email address
            </label>
            {errors.email && (
              <p className="text-sm text-red-600 mt-2">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <input
              id="dateOfBirth"
              ref={dobRef}
              type={type}
              value={form.dateOfBirth}
              onChange={handleChange}
              onFocus={() => setType("date")}
              onBlur={(e) => !e.target.value && setType("text")}
              placeholder="dd/mm/yy"
              className="peer w-full border border-gray-400 rounded-lg pl-3 pr-10 py-3 outline-none no-native-icon"
            />
            <label
              htmlFor="dateOfBirth"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Date of Birth
            </label>
            <Calendar
              onClick={openDatePicker}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              size={20}
              role="button"
              tabIndex={0}
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-red-600 mt-1">{errors.dateOfBirth}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Country of resident"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
            <label
              htmlFor="location"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Location
            </label>
          </div>

          <div className="relative col-span-2">
            <input
              type="text"
              id="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
            <label
              htmlFor="phoneNumber"
              className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
            >
              Phone number
            </label>
          </div>

          <div className="relative col-span-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-400 rounded-lg px-3 pt-5 pb-2 outline-none "
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-2 bg-white px-1 text-gray-500 text-sm transition-all 
             peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-sm text-red-600 mt-2">{errors.password}</p>
            )}
          </div>

          <div className="relative col-span-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-400 rounded-lg px-3 pt-5 pb-2 outline-none "
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-3 -top-2  bg-white px-1 text-gray-500 text-sm transition-all 
             peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
            >
              Confirm password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-sm text-red-600 mt-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="col-span-2 flex items-center gap-3 mt-2">
            <button
              type="button"
              onClick={() => setAgree(!agree)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${agree ? "bg-[#5FBF92]" : "bg-gray-300"
                }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${agree ? "translate-x-3" : ""
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

          <div className="col-span-2 mt-2 border-t border-gray-300 py-6">
            <button
              type="submit"
              className="w-full bg-[#5FBF92] py-3 rounded-lg font-semibold transition"
              disabled={status === "pending"}
            >
              {status === "pending" ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a verification link to <strong>{form.email}</strong>.
              Please check your email to verify your account.
            </p>
            <button
              onClick={() => {
                setShowModal(false);

              }}
              className="bg-[#5FBF92] px-6 py-2 rounded-lg text-white font-semibold hover:bg-[#4da87a] transition"
            >
              Okay, Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;