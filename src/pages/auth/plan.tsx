import { useState } from "react";
import { User, Check, Star, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authheader from "../../assets/paintpal/images/authheader.mp4";

const plans = [
  {
    id: "free",
    title: "Free",
    price: { currency: "£", amount: "0", unit: "/year" },
    features: [
      "Join 2 public painting events",
      "Host 1 painting event",
      "No access to hosting private events",
      "Cancel anytime",
    ],
    icon: <User className="text-white" size={20} />,
    iconBg: "bg-gray-400",
    border: "border-gray-400",
    badge: null,
  },
  {
    id: "monthly",
    title: "Monthly",
    price: { currency: "£", amount: "5.99", unit: "/month" },
    features: [
      "Join unlimited public painting events",
      "Host unlimited painting event",
      "Unilited access to hosting private events",
      "Integrated payment processing",
    ],
    icon: <Star className="text-[#5FBF92] fill-[#5FBF92]" size={20} />,
    iconBg: "bg-gray-100",
    border: "border-[#FEAF1E]",
    badge: { text: "Recommended", bg: "bg-[#5FBF92]", textColor: "text-black" },
  },
  {
    id: "yearly",
    title: "Yearly",
    price: { currency: "£", amount: "57.50", unit: "/year" },
    features: [
      "Join unlimited public painting events",
      "Host unlimited painting event",
      "Unilited access to hosting private events",
      "Integrated payment processing",
    ],
    icon: <Star className="text-[#5FBF92] fill-[#5FBF92]" size={20} />,
    iconBg: "bg-gray-100",
    border: "border-gray-400",
    badge: { text: "Save 20%", bg: "bg-gray-200", textColor: "text-black" },
  },
];

const Plan = () => {
  const [selected, setSelected] = useState("monthly");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg">
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
        <div className="mt-3 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Choose your preferred plan
          </h2>
        </div>

        <div className="px-16 pb-8 mt-10 ">
          {/* Plans */}
          <div className=" grid gap-14">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                className={`relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition 
                ${selected === plan.id ? "border-[#5FBF92]" : plan.border}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-36 px-3 py-1 text-xs  font-semibold rounded-md border ${plan.badge.bg} ${plan.badge.textColor}`}
                  >
                    {plan.badge.text}
                  </span>
                )}

                {/* Icon + Title + Price */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${plan.iconBg}`}
                  >
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold my-3">{plan.title}</h3>

                <p className="flex items-end gap-1">
                  <span className="text-gray-500 text-xl">
                    {plan.price.currency}
                  </span>
                  <span className="text-gray-900 font-bold text-5xl">
                    {plan.price.amount}
                  </span>
                  <span className="text-gray-500 text-xl">
                    {plan.price.unit}
                  </span>
                </p>

                <div className="flex items-end justify-between mt-6">
                  {/* Features */}
                  <ul className="mt-4 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-800 text-lg font-medium"
                      >
                        <span className="w-5 h-5 flex items-center justify-center bg-green-600 rounded-full">
                          <Check className="text-white" size={14} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Radio-like selector */}
                  <div className="mt-6 flex ">
                    <div
                      className={`w-6 h-6 border-2 rounded-full flex items-center justify-center 
                    ${
                      selected === plan.id
                        ? "border-[#5FBF92]"
                        : "border-gray-400"
                    }`}
                    >
                      {selected === plan.id && (
                        <div className="w-3 h-3 rounded-full bg-[#5FBF92]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              navigate("/payment");
              scrollTo(0, 0);
            }}
            type="submit"
            className="w-full bg-[#5FBF92] py-3 rounded-lg mt-6  transition"
          >
            Checkout £5.99/month
          </button>

          <div className="flex items-center justify-center text-sm mt-8 gap-2 text-gray-500">
            <Lock />
            <span>Secured by stripe | AES-256 bit encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
