import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSignup } from "../../context/SignupContext";
import { UserRegistration } from "../../type";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Payment = () => {
  const location = useLocation();
  const { price, currency } = location.state || {};
  const { data, updateData } = useSignup();

  const stripe = useStripe();
  const elements = useElements();

  // State for selected payment method
  const [method, setMethod] = useState<"card" | "bank" | "code">("card");
  const [referenceCode, setReferenceCode] = useState("");

  // Payment handler
  const handlePay = async () => {
    if (method === "card") {
      if (!stripe || !elements) return;

      // 1️⃣ Create PaymentIntent on backend
      const res = await fetch("http://localhost:3000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: price * 100, // convert to cents
          currency: currency.toLowerCase(),
        }),
      });

      const { clientSecret } = await res.json();

      // 2️⃣ Confirm the card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        alert("Payment failed: " + result.error.message);
      } else if (result.paymentIntent?.status === "succeeded") {
        updateData({ paymentMethod: { stripePaymentMethodId: result.paymentIntent.id } });
        const payload: UserRegistration = {
          ...data,
          paymentMethod: { stripePaymentMethodId: result.paymentIntent.id },
        } as UserRegistration;
        console.log("FINAL PAYLOAD:", payload);
        alert("Payment successful!");
      }
    }

    if (method === "bank") {
      alert("Please complete your bank transfer using the provided account details.");
    }

    if (method === "code") {
      if (!referenceCode) return alert("Please enter your reference code.");
     updateData({ paymentMethod: { referenceCode } as any });
      alert("Reference code applied successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-13 mx-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg">
        {/* Header */}
        <div className="mt-3 mx-6 py-3 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Subscription Fee</h2>
          <p className="text-gray-500 mt-1">{currency} {price}</p>
        </div>

        <div className="px-6 pb-10 pt-6">
          {/* Payment Method Selector */}
          <div className="my-6">
            <h2 className="text-lg font-semibold text-gray-800">Payment Method</h2>
            <p className="text-gray-500">Payments are secure and encrypted</p>
            <div className="flex gap-4 mt-2">
              <button
                className={`px-4 py-2 rounded-lg border ${method === "card" ? "border-green-500" : "border-gray-300"}`}
                onClick={() => setMethod("card")}
              >
                Card
              </button>
              <button
                className={`px-4 py-2 rounded-lg border ${method === "bank" ? "border-green-500" : "border-gray-300"}`}
                onClick={() => setMethod("bank")}
              >
                Bank Transfer
              </button>
              <button
                className={`px-4 py-2 rounded-lg border ${method === "code" ? "border-green-500" : "border-gray-300"}`}
                onClick={() => setMethod("code")}
              >
                Reference Code
              </button>
            </div>
          </div>

          {/* Conditional Payment Input */}
          {method === "card" && (
            <div className="border p-4 rounded-lg">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          )}

          {method === "bank" && (
            <div className="border p-4 rounded-lg text-gray-700">
              <p>Use the following bank account to make your payment:</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Bank: Example Bank</li>
                <li>Account Name: PaintPal</li>
                <li>Account Number: 1234567890</li>
              </ul>
            </div>
          )}

          {method === "code" && (
            <div>
              <input
                type="text"
                placeholder="Enter reference or promo code"
                className="w-full border border-gray-400 rounded-lg px-3 py-3 mt-2"
                value={referenceCode}
                onChange={(e) => setReferenceCode(e.target.value)}
              />
            </div>
          )}

          <button
            type="button"
            onClick={handlePay}
            className="w-full mt-6 bg-black flex text-white items-center justify-center gap-4 py-3 transition"
          >
            Pay {currency} {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
