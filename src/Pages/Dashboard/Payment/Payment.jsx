import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const { user } = useAuth();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handlePayment = async () => {
    const payment = {
      email: user.email,
      price: totalPrice,
      transactionId: "",
      date: new Date(),
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
      status: "pending",
    };

    const response = await axiosSecure.post("/create-ssl-payment", payment);

    if(response.data?.gatewayUrl) {
      window.location.replace(response.data.gatewayUrl);
    }
    console.log(response);
  };

  return (
    <div>
      <Helmet>
        <title>Magical Meals | Payment</title>
      </Helmet>
      <SectionTitle heading={"PAYMENT"} subHeading={"Please pay to eat!"} />

      {/* Payment Method Selection */}
      <div className="flex gap-4 mt-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={paymentMethod === "stripe"}
            onChange={() => setPaymentMethod("stripe")}
          />
          Pay with Stripe
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="other"
            checked={paymentMethod === "other"}
            onChange={() => setPaymentMethod("other")}
          />
          SSL Commerz
        </label>
      </div>

      {/* Payment Form */}
      <div>
        {paymentMethod === "stripe" ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="p-6 border rounded-lg">
            <label className="block mb-2 text-lg font-semibold">
              Payment Details
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg mb-4"
            />
            <button
              onClick={handlePayment}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
