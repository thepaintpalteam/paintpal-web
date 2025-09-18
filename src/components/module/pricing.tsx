import { useState } from "react";
import Yearly from "./pricing/yearly";


const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  return (
    <div className="lg:-mt-64 py-6 mx-4 lg:mx-auto lg:max-w-[1300px] ">
      {/* Heading */}
      <h1 className="text-lg text-gray-900">
        <span className="text-[#5FBF92]">Save from 16%</span> with yearly
      </h1>

      {/* Tabs */}
      <div className="mt-6 ">
        <div className="flex border rounded-lg p-2 w-[250px]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`flex-1 py-3 text-md font-medium rounded-md transition ${
              billingCycle === "monthly"
                ? "bg-[#5FBF92] text-white"
                : "text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`flex-1 py-3 text-md font-medium rounded-md transition ${
              billingCycle === "yearly"
                ? "bg-[#5FBF92] text-white"
                : "text-gray-700"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Example Pricing Display */}
      <div className="mt-10">
        {billingCycle === "monthly" ? (
          <div>
            <Yearly />
          </div>
        ) : (
          <div>
            <Yearly />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
