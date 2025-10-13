import { useState, useMemo } from "react";
import { Check, Star, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authheader from "../../assets/paintpal/images/authheader.mp4";
import { useGetSubscriptions } from "../../hooks/useQueries";

const Plan = () => {
  const [selected, setSelected] = useState<string>(() => {
  const saved = localStorage.getItem("selectedPlan");
  if (saved) {
    try {
      const plan = JSON.parse(saved);
      return plan.name.toLowerCase(); // Use name for preselection
    } catch (e) {
      return "monthly"; // fallback if parsing fails
    }
  }
  return "monthly"; // default if nothing stored
});
  const navigate = useNavigate();
  const { data: subData, status } = useGetSubscriptions();

  // Transform API data → UI format
  const plans = useMemo(() => {
    if (!subData) return [];

    return subData.map((p: any) => {
      const isMonthly = p.billingPeriod === "Monthly";
      const isYearly = p.billingPeriod === "Yearly";

      return {
        id: p.name.toLowerCase(),
        title: p.name,
        price: {
          currency: p.currency === "USD" ? "$" : p.currency,
          amount: p.price.toString(),
          unit: isMonthly ? "/month" : isYearly ? "/year" : "",
        },
        features: p.features,
        icon:
          p.plan === 0 ? (
            <User size={20} />
          ) : (
            <Star className="text-[#5FBF92] fill-[#5FBF92]" size={20} />
          ),
        iconBg: "bg-gray-100",
        border: isMonthly ? "border-gray-400" : "border-gray-400",
        badge: isMonthly
          ? { text: "Recommended", bg: "bg-[#5FBF92]", textColor: "text-black" }
          : isYearly
          ? { text: "Save 20%", bg: "bg-gray-200", textColor: "text-black" }
          : null,
      };
    });
  }, [subData]);


  const handleNext = () => {
    if (!selected) return;

    // Find the selected plan object from the list
    const selectedPlan = subData?.find(
      (p: any) => p.name.toLowerCase() === selected
    );
    if (!selectedPlan) return;



    navigate("/payment", {
    state: {
      planId: selectedPlan.plan,
      price: selectedPlan.price,
      currency: selectedPlan.currency,
    },
   });

   scrollTo(0, 0);
  };

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
        </div>

        <div className="mt-3 px-6 py-3">
          <h2 className="text-xl font-semibold text-gray-800">
            Choose your preferred plan
          </h2>
        </div>

        <div className="px-16 pb-8 mt-10">
          {/* Loading / Error states */}
          {status === "pending" && <p>Loading plans...</p>}
          {status === "error" && (
            <p className="text-red-500">Failed to load plans</p>
          )}

          {status === "success" && (
            <div className="grid gap-14">
              {plans.map((plan: any) => (
                <div
                  key={plan.id}
                  onClick={() => setSelected(plan.id)}
                  className={`relative border-2 border-dashed rounded-lg p-6 cursor-pointer transition 
                  ${selected === plan.id ? "border-[#5FBF92]" : plan.border}`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className={`absolute -top-3 left-36 px-3 py-1 text-xs font-semibold rounded-md border ${plan.badge.bg} ${plan.badge.textColor}`}
                    >
                      {plan.badge.text}
                    </span>
                  )}

                  {/* Icon */}
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
                    <ul className="mt-4 space-y-4">
                      {plan.features.map((feature: string, idx: number) => (
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
                    <div className="mt-6 flex">
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
          )}

          <button
            onClick={handleNext}
            disabled={!selected}
            type="button"
            className="w-full bg-[#5FBF92] py-3 rounded-lg mt-6 transition disabled:opacity-50"
          >
            {selected
              ? `Checkout ${
                  plans.find((p: any) => p.id === selected)?.price.currency
                }${plans.find((p: any) => p.id === selected)?.price.amount}${
                  plans.find((p: any) => p.id === selected)?.price.unit
                }`
              : "Select a plan"}
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
