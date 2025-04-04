"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Free Tier",
      price: 0,
      billing: "One-time payment",
      features: ["10 free documents watermarked", "Water removal at Ksh 99/document"],
      buttonText: "Get full access",
    },
    {
      name: "Pay-Per-Use",
      price: 500,
      billing: "One-time payment",
      features: ["Per Document", "Watermark removal at Ksh 99"],
      buttonText: "Get full access",
    },
  ];

  const caseLawPlans = [
    {
      name: "Free Tier",
      price: 0,
      features: ["25 Free Searches Per Month", "Basic access, no AI-powered features"],
      buttonText: "Get started",
    },
    {
      name: "Pay-Per-Use",
      price: 700,
      features: ["AI-powered summaries and recommendations per document", "Discounted rates for mailing list subscribers"],
      buttonText: "Try now",
    },
    {
      name: "Basic Plan",
      price: 2500,
      billing: "Monthly payment",
      features: ["Unlimited case law access", "AI Powered Database"],
      buttonText: "Subscribe now",
    },
    {
      name: "Premium Subscription",
      price: 3000,
      billing: "Monthly payment",
      features: ["Unlimited access, all AI features, watermark-free document generation", "Discounts for mailing list subscribers"],
      buttonText: "Subscribe now",
    },
    {
      name: "All-Inclusive",
      price: 6000,
      billing: "Yearly payment",
      features: ["Unlimited documents", "Watermark-free documents", "Priority support", "17% discount for mailing list subscribers"],
      buttonText: "Subscribe now",
    },
    {
      name: "Student Discounts",
      price: "Discounted",
      discountedPrice: 1500,
      features: [
        "Free database access",
        "25% discount on AI and chatbot features",
        "Up to 50% off on monthly subscriptions",
      ],
      buttonText: "Learn more",
      requireVerification: true,
    },
  ];

  const handleRedirectToCheckout = (plan) => {
    if (plan.price === 0) {
      alert("You have selected a free plan. No payment is required.");
      return;
    }

    if (plan.requireVerification) {
      alert("You need to verify your student status to access this plan.");
      window.location.href = "/verify";
      return;
    }

    // Navigate to checkout form with plan details
    window.location.href = `/checkout?plan=${encodeURIComponent(JSON.stringify(plan))}`;
  };

  const renderPlanCards = (planData) => {
    return planData.map((plan, index) => (
      <motion.div
        key={index}
        className="flex flex-col h-full overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="p-8 xl:px-12 flex-grow">
          <h3 className="text-base font-semibold text-purple-600">{plan.name}</h3>
          <p className="text-5xl font-bold text-black mt-7">
            {plan.discountedPrice
              ? (
                <>
                  <span className="line-through text-gray-500">Ksh {plan.price}</span>{" "}
                  <span>Ksh {plan.discountedPrice}</span>
                </>
              )
              : plan.price > 0 ? `Ksh ${plan.price}` : "Free"}
          </p>
          {plan.billing && (
            <p className="mt-3 text-base text-gray-600">{plan.billing}</p>
          )}
          <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
            {plan.features.map((feature, i) => (
              <li key={i} className="inline-flex items-center space-x-2">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium text-gray-900">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 pt-0 flex justify-center">
          <button
            onClick={() => handleRedirectToCheckout(plan)}
            className="inline-flex items-center justify-center w-full max-w-xs px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
          >
            {plan.buttonText}
          </button>
        </div>
      </motion.div>
    ));
  };

  return (
    <main className="min-h-screen bg-white">
      
      <div className="pt-20">
        <section className="py-16 sm:py-20 bg-white font-montserrat">
          <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
            <h1 className="text-4xl mb-10 text-black font-bold text-center">Pricing & Plans</h1>
            {/* User Authentication Section */}
            <motion.div 
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <p className="text-gray-600 mb-4">
                  Create an account to access exclusive features and pricing.
                </p>
                <div className="space-x-4">
                  <Link 
                    href="/login"
                    className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup"
                    className="px-6 py-3 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Pricing & Plans
              </h2>
              <p className="py-2 max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Explore our pricing plans and choose the one that fits your needs. You can always
                upgrade or downgrade your subscription.
              </p>
            </motion.div>

            <div className="grid max-w-full grid-cols-1 gap-6 mx-auto mt-8 text-center sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
              {renderPlanCards(plans)}
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                Case Law Database Access & AI Features
              </h2>
              <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:max-w-full lg:grid-cols-3">
                {renderPlanCards(caseLawPlans)}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Pricing;