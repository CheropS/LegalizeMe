import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    plan: "",
    amount: 0,
  });
  
  const [feedback, setFeedback] = useState({
    type: null, // 'success' | 'destructive' | 'default'
    title: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const planPrices = {
    "Pay-Per-Use": 500,
    "Pay-Per-Use + AI": 700,
    "Basic Plan": 2500,
    "Premium Subscription": 3000,
    "All-Inclusive": 6000,
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullname.trim()) {
      errors.fullname = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[+\s-]/g, ''))) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.plan) {
      errors.plan = "Please select a plan";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setValidationErrors(prev => ({
      ...prev,
      [name]: undefined
    }));

    if (name === "plan") {
      const selectedPrice = planPrices[value] || 0;
      setFormData(prev => ({
        ...prev,
        [name]: value,
        amount: selectedPrice
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFeedback({ type: null, title: "", message: "" });
    
    if (!validateForm()) {
      setFeedback({
        type: "destructive",
        title: "Validation Error",
        message: "Please correct the errors in the form"
      });
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setFeedback({
        type: "destructive",
        title: "Authentication Required",
        message: "You must be logged in to proceed with the payment"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://legalizeme.azurewebsites.net/payments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          plan: formData.plan.toLowerCase(),
          amount: formData.amount
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Payment processing failed");
      }

      setFeedback({
        type: "success",
        title: "Payment Successful",
        message: "Your payment has been processed successfully! Redirecting..."
      });

      setTimeout(() => {
        navigate("/confirmation", { 
          state: { 
            paymentDetails: {
              plan: formData.plan,
              amount: formData.amount,
              transactionId: result.transactionId
            }
          }
        });
      }, 2000);

    } catch (error) {
      console.error("Payment processing error:", error);
      
      if (error.message.includes("Unauthorized")) {
        setFeedback({
          type: "destructive",
          title: "Session Expired",
          message: "Your session has expired. Please log in again."
        });
      } else {
        setFeedback({
          type: "destructive",
          title: "Payment Failed",
          message: error.message || "An error occurred while processing your payment. Please try again."
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-montserrat p-4">
      <div className="w-full max-w-md">
        {feedback.type && (
          <Alert 
            variant={feedback.type} 
            className="mb-4"
          >
            <AlertTitle>{feedback.title}</AlertTitle>
            <AlertDescription>{feedback.message}</AlertDescription>
          </Alert>
        )}

        <form
          className="w-full p-8 bg-white rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Checkout Form
          </h2>

          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className={`mt-1 w-full px-3 py-2 border rounded-md ${
                validationErrors.fullname ? "border-red-500" : "border-gray-300"
              }`}
            />
            {validationErrors.fullname && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.fullname}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 w-full px-3 py-2 border rounded-md ${
                validationErrors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {validationErrors.email && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`mt-1 w-full px-3 py-2 border rounded-md ${
                validationErrors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {validationErrors.phone && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="plan"
              className="block text-sm font-medium text-gray-700"
            >
              Plan
            </label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleInputChange}
              className={`mt-1 w-full px-3 py-2 border rounded-md ${
                validationErrors.plan ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Plan</option>
              {Object.entries(planPrices).map(([plan, price]) => (
                <option key={plan} value={plan}>
                  {plan} - KSH {price.toLocaleString()}
                </option>
              ))}
            </select>
            {validationErrors.plan && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.plan}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount (KSH)
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount.toLocaleString()}
              readOnly
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 text-white font-semibold rounded-md transition-colors
              ${isSubmitting 
                ? "bg-blue-400 cursor-not-allowed" 
                : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isSubmitting ? "Processing..." : "Submit Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;