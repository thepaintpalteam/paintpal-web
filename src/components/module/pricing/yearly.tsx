import { Check } from "lucide-react";
import crown from "../../../assets/paintpal/svgs/crown.svg";
import { useGetSubscriptions } from "../../../hooks/useQueries";

const plans = [
  {
    name: "PaintPal Free",
    description:
      "Design anything and bring your ideas to life. No cost, just creativity",
    buttonText: "Get started",
    buttonStyle: "bg-gray-500 text-white",
    bg: "bg-gray-100",
    list: "Features you'll love:",
  },
  {
    name: "PaintPal Pro",
    description:
      "Host as many painting events as you want, get paid for your sessions, and join any event that catches your eye.",
    buttonText: "Start free trial",
    buttonStyle: "bg-[#5FBF92] text-white hover:bg-[#4AA97D]",
    bg: "bg-green-100",
    list: "Everything in Free, plus:",
  },
  {
    name: "PaintPal Advance",
    description: "Save some money when you subscribe to PaintPal for a year",
    buttonText: "Start free trial",
    buttonStyle: "bg-[#5FBF92] text-white hover:bg-[#4AA97D]",
    bg: "bg-yellow-50",
    list: "Everything in Pro, plus:",
  },
];

const Yearly = () => {
  
  const { data: subData, status } = useGetSubscriptions();

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#5FBF92] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "error") {
    return <p>Failed to load subscription plans</p>;
  }

  return (
    <div className="lg:py-10 lg:mx-auto lg:max-w-[1500px] lg:px-6">
      {/* Pricing grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => {
          const apiPlan = subData?.[idx]; // match by index
          return (
            <div key={idx} className="rounded-lg flex border flex-col">
              {/* Header */}
              <div
                className={`${plan.bg} px-6 pt-10 pb-6 rounded-t-lg flex flex-col h-[230px] relative`}
              >
                {/* Crown for Pro & Advance */}
                {(plan.name.includes("Pro") ||
                  plan.name.includes("Advance")) && (
                  <img
                    src={crown}
                    alt="Crown"
                    className="absolute top-3 right-3 w-8 h-8"
                  />
                )}

                <h2 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h2>
                <p className="mt-2 text-gray-700 text-sm flex-1">
                  {plan.description}
                </p>
                <div>
                  <span className="text-3xl font-bold text-gray-900">
                    {apiPlan ? `${apiPlan.currency} ${apiPlan.price}` : "—"}
                  </span>
                  <span className="block text-gray-600 text-sm mt-2">
                    {apiPlan ? `/ ${apiPlan.billingPeriod}` : ""}
                  </span>
                </div>
                {/* <button
                  onClick={() => {
                    // Save selected plan to localStorage
                    localStorage.setItem(
                      "selectedPlan",
                      JSON.stringify({
                        name: apiPlan.name, // save the API plan name
                        index: apiPlan.plan, // numeric plan ID
                        price: apiPlan.price,
                        currency: apiPlan.currency,
                        billingPeriod: apiPlan.billingPeriod,
                      })
                    );

                    navigate("/signup");
                    scrollTo(0, 0);
                  }}
                  className={`mt-6 w-full py-3 rounded-lg font-medium transition ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button> */}
              </div>

              {/* Features */}
              <div>
                <ul className="space-y-3 mt-8 p-6">
                  <h3 className="text-lg font-semibold mb-4">{plan.list}</h3>
                  {apiPlan?.features?.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-900 text-sm"
                    >
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="mt-12 text-center">
        <p className="text-gray-900 text-md font-medium">
          Usage and event hosting limits vary between plans.
        </p>
      </div>
    </div>
  );
};

export default Yearly;
