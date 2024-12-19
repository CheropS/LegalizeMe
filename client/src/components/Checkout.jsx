import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    plan: "",
    amount: 0,
  });

  const backendUrl = "https://legalizeme.azurewebsites.net/payments/";

  // Prices for each plan
  const planPrices = {
    "Pay-Per-Use": 500,
    "Pay-Per-Use + AI": 700,
    "Basic Plan": 2500,
    "Premium Subscription": 3000,
    "All-Inclusive": 6000,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Automatically set amount if the user selects a plan
    if (name === "plan") {
      const selectedPrice = planPrices[value] || 0; // Default to 0 if no match
      setFormData({ ...formData, [name]: value, amount: selectedPrice });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Payment successful! Redirecting to confirmation...");
        navigate("/confirmation"); // Redirect to a confirmation page
      } else {
        alert(`Payment failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred while processing your payment.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md p-8 bg-white rounded-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Checkout Form
        </h2>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="plan"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Plan
          </label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select Plan</option>
            {Object.keys(planPrices).map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Amount (Ksh)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
