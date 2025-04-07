"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Building2, Users, Zap, ArrowRight, ChevronRight } from "lucide-react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("individual"); // "individual" or "enterprise"

  const individualPlans = [
    {
      name: "Monthly Plan",
      price: 1500,
      billing: "per month",
      features: [
        "1M tokens per month",
        "7-day free trial",
        "100,000 trial tokens",
        "Access to all AI features",
        "Priority support",
      ],
      buttonText: "Start free trial",
      popular: false,
    },
    {
      name: "Annual Plan",
      price: 6000,
      billing: "per year",
      features: [
        "12M tokens per year",
        "7-day free trial",
        "100,000 trial tokens",
        "Access to all AI features",
        "Priority support",
        "2 months free",
      ],
      buttonText: "Start free trial",
      popular: true,
    },
  ];

  const enterprisePlans = [
    {
      name: "Pay-as-you-go",
      price: 0.10,
      billing: "per token",
      features: [
        "Up to 1M tokens",
        "KES 100 per 1,000 tokens",
        "No monthly commitment",
        "Flexible usage",
        "Real-time billing",
      ],
      buttonText: "Get started",
      popular: false,
    },
    {
      name: "Starter Plan",
      price: 25000,
      billing: "per month",
      features: [
        "500,000 tokens",
        "KES 0.05 per token",
        "API access",
        "Basic support",
        "Standard integration",
      ],
      buttonText: "Contact sales",
      popular: false,
    },
    {
      name: "Professional Plan",
      price: 50000,
      billing: "per month",
      features: [
        "2M tokens",
        "KES 0.025 per token",
        "API access",
        "Priority support",
        "Advanced integration",
      ],
      buttonText: "Contact sales",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      price: 100000,
      billing: "per month",
      features: [
        "5M tokens",
        "KES 0.02 per token",
        "API access",
        "24/7 support",
        "Custom integration",
      ],
      buttonText: "Contact sales",
      popular: false,
    },
  ];

  const handleRedirectToCheckout = (plan) => {
    if (plan.price === 0) {
      alert("You have selected a free plan. No payment is required.");
      return;
    }

    // Navigate to checkout form with plan details
    window.location.href = `/checkout?plan=${encodeURIComponent(JSON.stringify(plan))}`;
  };

  const renderPlanCards = (planData) => {
    return planData.map((plan, index) => (
      <motion.div
        key={index}
        className={`relative group overflow-hidden rounded-xl border ${
          plan.popular 
            ? "border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
            : "border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        } bg-black/50 backdrop-blur-sm p-6`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ 
          y: -5,
          borderColor: plan.popular ? "rgba(59,130,246,0.7)" : "rgba(255,255,255,0.4)",
          boxShadow: plan.popular 
            ? "0 0 20px rgba(59,130,246,0.4)" 
            : "0 0 20px rgba(255,255,255,0.2)"
        }}
      >
        {plan.popular && (
          <div className="absolute -right-12 top-6 rotate-45 bg-blue-500 text-white px-12 py-1 text-sm font-medium shadow-lg">
            Popular
          </div>
        )}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            {plan.name === "Pay-as-you-go" ? (
              <Zap className="h-6 w-6 text-blue-400" />
            ) : plan.name.includes("Enterprise") ? (
              <Building2 className="h-6 w-6 text-blue-400" />
            ) : (
              <Users className="h-6 w-6 text-blue-400" />
            )}
            <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
          </div>
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">
                {plan.price === 0.10 ? "KES 0.10" : `KES ${plan.price.toLocaleString()}`}
              </span>
              <span className="text-gray-400">{plan.billing}</span>
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleRedirectToCheckout(plan)}
            className="w-full relative group/button overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm px-6 py-3 text-white transition-all duration-300 hover:border-white/20"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover/button:opacity-100 transition duration-300" />
            <div className="relative flex items-center justify-center gap-2">
              {plan.buttonText}
              <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </motion.div>
    ));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="pt-20">
        <section className="py-16 sm:py-20 font-montserrat">
          <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-2xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-gray-300">
                Choose the plan that best fits your needs. All plans include access to our AI-powered legal assistance.
              </p>
            </motion.div>

            {/* Pricing Toggle */}
            <motion.div 
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative inline-flex rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm p-1">
                <button
                  onClick={() => setActiveTab("individual")}
                  className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === "individual"
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Users className="h-4 w-4 inline-block mr-2" />
                  Individual
                </button>
                <button
                  onClick={() => setActiveTab("enterprise")}
                  className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === "enterprise"
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Building2 className="h-4 w-4 inline-block mr-2" />
                  Enterprise
                </button>
                <div
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-md bg-gradient-to-r from-purple-600 to-blue-00 transition-all duration-300 ${
                    activeTab === "individual" ? "left-1" : "left-[calc(50%+2px)]"
                  }`}
                />
              </div>
            </motion.div>

            {/* Plan Cards */}
            <div className={`grid gap-6 ${
              activeTab === "individual" 
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" 
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            }`}>
              {renderPlanCards(activeTab === "individual" ? individualPlans : enterprisePlans)}
            </div>

            {/* Enterprise Package */}
            {activeTab === "enterprise" && (
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-300 mb-6">
                  Annual Enterprise Package available for large law firms & corporations
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm text-white transition-all duration-300 hover:border-white/20 group"
                >
                  Contact Sales
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Pricing;