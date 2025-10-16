import { Check, X } from "lucide-react";
import crown from "../../../assets/paintpal/svgs/crown.svg";


const plans = [
  {
    name: "PaintPal Free",
    description:
      "Design anything and bring your ideas to life. No cost, just creativity",
    price: "GBP£0",
    priceDesc: "/year for one person",
    buttonText: "Get started",
    buttonStyle: "bg-gray-500 text-white",
    bg: "bg-gray-200",
    list: "Features you'll love:",
    features: [
      { text: "Unlimited solo paintings", available: true },
      { text: "Join 3 public painting events per month", available: true },
      { text: "Host 3 free painting event per month (up to 10 participants)", available: true },
      { text: "Basic canvas tools and brushes", available: true },
      { text: "Live canvas viewing", available: true },
      { text: "Email art export", available: true },
      { text: "No payment processing (free events only)", available: false },
      { text: "No private event hosting", available: false },
      { text: "No music synchronization", available: false },
      { text: "Limited gallery storage", available: false },
    ],
  },
  {
    name: "PaintPal Pro",
    description:
      "Host as many painting events as you want, get paid for your sessions, and join any event that catches your eye.",
    price: "GBP£113.89",
    priceDesc: "/month for one person",
    buttonText: "Start free trial",
    buttonStyle: "bg-[#5FBF92] text-white hover:bg-[#4AA97D]",
    bg: "bg-green-100",
    list: "Everything in Free, plus:",
    features: [
      { text: "Join unlimited public painting events", available: true },
      { text: "Host unlimited painting events (up to 150 participants each)", available: true },
      {
        text: "Integrated payment processing. Dedicated account manager (for high-volume hosts)",
        available: true,
      },
      { text: "Host private events with access codes", available: true },
      { text: "Music synchronisation (Spotify/Apple Music)", available: true },
      { text: "Canvas tools and more brushes", available: true },
      { text: "Post-event gallery with full resolution", available: true },
      { text: "Priority customer support", available: true },
    ],
  },
  {
    name: "PaintPal Advance",
    description: "Ideal for businesses seeking creative team bonding activities that inspire collaboration and boost morale.",
    price: "GBP£569.89",
    priceDesc: "/year per business",
    buttonText: "Start free trial",
    buttonStyle: "bg-[#5FBF92] text-white hover:bg-[#4AA97D]",
    bg: "bg-yellow-50",
    list: "Everything in Pro, plus:",
    features: [
      { text: "Host unlimited events (up to 1,000 participants)", available: true },
      {
        text: "Bulk event scheduling",
        available: true,
      },
      {
        text: "Dedicated account manager (for high-volume hosts)",
        available: true,
      },
    
    ],
  },
];

const Yearly = () => {

  return (
    <div className="lg:py-10 lg:mx-auto lg:max-w-[1500px] px-2">
      {/* Pricing grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="rounded-lg flex border flex-col">
            {/* Header */}
            <div
              className={`${plan.bg} px-8 pt-10 pb-6 rounded-t-lg flex flex-col h-[270px] relative`}
            >
              {/* Crown for Pro & Advance */}
              {(plan.name.includes("Pro") || plan.name.includes("Advance")) && (
                <img
                  src={crown}
                  alt="Crown"
                  className="absolute top-3 right-3 w-8 h-8"
                />
              )}

              <h2 className="text-2xl font-semibold text-gray-900">
                {plan.name}
              </h2>
              <p className="mt-2 text-gray-700 flex-1">{plan.description}</p>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="block text-gray-600 text-md mt-2">
                  {plan.priceDesc}
                </span>
              </div>
              {/* <button
                onClick={() => {
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
              <ul className="space-y-3 mt-4 p-6">
                <h3 className="text-lg font-semibold mb-4">{plan.list}</h3>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-900 text-md"
                  >
                    {feature.available ? (
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mr-2" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 text-center">
        <p className="text-gray-900 text-lg font-medium">
          Usage and event hosting limits vary between plans.
        </p>
      </div>
    </div>
  );
};

export default Yearly;
