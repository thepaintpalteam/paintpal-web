import { useState } from "react";
import apple from "../../assets/paintpal/svgs/apple.svg";
import { Calendar, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventPrice = () => {
  const [type, setType] = useState("text");
  const [method, setMethod] = useState<"card" | "bank">("card");
  const [cardType, setCardType] = useState<"debit" | "credit" | "">("");
  const [open, setOpen] = useState(false);

  const handleSelect = (option: "debit" | "credit") => {
    setCardType(option);
    setMethod("card");
    setOpen(false); // close dropdown after selection
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg">
        {/* Header */}
        <div className="mt-3 mx-6 py-3 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">
            Event price
          </h2>
          <p className="text-gray-500 mt-1">£5.99</p>
        </div>

        <div className="px-6 pb-10 pt-6">
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Set payment method
            </h2>
            <p className="text-gray-500">Payments are secure and encrypted</p>
          </div>

          {/* Apple Pay Button */}
          <button
            type="submit"
              onClick={() => {
              navigate("/success");
              scrollTo(0, 0);
            }}
            className="w-full bg-black flex text-white items-center justify-center gap-4 py-3 transition"
          >
            Pay with <img src={apple} alt="Apple Pay" />
          </button>

          {/* Card Details */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-3 mt-10">
            {/* Custom Card Type */}
            <div className="relative col-span-2">
              <label className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm">
                Card Type
              </label>
              <div
                className="border border-gray-400 rounded-lg px-3 py-3 flex items-center justify-between cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              >
                <div className="flex items-center gap-3">
                  {cardType && (
                    <span className="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center">
                      <span className="w-2.5 h-2.5 bg-[#5FBF92] rounded-full"></span>
                    </span>
                  )}
                  <span className="text-gray-600">
                    {cardType === ""
                      ? "Select card type"
                      : cardType === "debit"
                      ? "Debit Card"
                      : "Credit Card"}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-gray-500 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown */}
              {open && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-md">
                  {["debit", "credit"].map((typeOption) => (
                    <div
                      key={typeOption}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(typeOption as "debit" | "credit")}
                    >
                      <span className="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center">
                        {cardType === typeOption && (
                          <span className="w-2.5 h-2.5 bg-[#5FBF92] rounded-full"></span>
                        )}
                      </span>
                      <span className="text-gray-700 capitalize">
                        {typeOption} Card
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Card Number */}
            <div className="relative col-span-2">
              <input
                type="text"
                id="card_number"
                placeholder="Enter your card number here"
                className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
              />
              <label
                htmlFor="card_number"
                className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
              >
                Card number
              </label>
            </div>

            {/* Name on Card */}
            <div className="relative col-span-2">
              <input
                type="text"
                id="card_name"
                placeholder="Mark Keith"
                className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
              />
              <label
                htmlFor="card_name"
                className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
              >
                Name on card
              </label>
            </div>

            {/* Expiry */}
            <div className="relative">
              <input
                id="expiry"
                type={type}
                onFocus={() => setType("date")}
                onBlur={(e) => !e.target.value && setType("text")}
                placeholder="dd/mm/yy"
                className="peer w-full border border-gray-400 rounded-lg pl-3 pr-10 py-3 outline-none"
              />
              <label
                htmlFor="expiry"
                className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
              >
                Expiry Date
              </label>
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                size={20}
              />
            </div>

            {/* CVV */}
            <div className="relative">
              <input
                type="text"
                id="cvv"
                placeholder="***"
                className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
              />
              <label
                htmlFor="cvv"
                className="absolute -top-2 left-3 bg-white px-1 text-gray-500 text-sm"
              >
                CVV
              </label>
            </div>
          </div>

          {/* Bank Transfer Option */}
          <div
            className="mt-8 border border-gray-400 rounded-lg p-4 flex items-center gap-4 cursor-pointer"
            onClick={() => setMethod("bank")}
          >
            <span className="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center">
              {method === "bank" && (
                <span className="w-2.5 h-2.5 bg-[#5FBF92] rounded-full"></span>
              )}
            </span>
            <span className="text-gray-400">Bank Transfer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPrice;
