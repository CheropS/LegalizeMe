import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Tier",
      price: "Ksh 0",
      billing: "One-time payment",
      features: [
        "10 free documents watermarked",
        "Water removal at Ksh 99/document"
      ],
      buttonText: "Get full access",
      buttonLink: "/checkout"
    },
    {
      name: "Pay-Per-Use",
      price: "Ksh 500",
      billing: "One-time payment",
      features: [
        "Per Document",
        "Watermark removal at Ksh 99"
      ],
      buttonText: "Get full access",
      buttonLink: "/checkout"
    }
  ];

  const caseLawPlans = [
    {
      name: "Free Tier",
      price: "KES 0",
      features: [
        "25 Free Searches Per Month",
        "Basic access, no AI-powered features"
      ],
      buttonText: "Get started",
      buttonLink: "/checkout"
    },
    {
      name: "Pay-Per-Use",
      price: "KES 700",
      features: [
        "AI-powered summaries and recommendations per document",
        "Discounted rates for mailing list subscribers"
      ],
      buttonText: "Try now",
      buttonLink: "/checkout"
    },
    {
      name: "Unlimited",
      price: "Ksh 2500",
      billing: "Monthly payment",
      features: [
        "Unlimited documents",
        "Watermark-free documents",
        "Priority support"
      ],
      buttonText: "Subscribe now",
      buttonLink: "/checkout"
    },
    {
      name: "Premium Subscription",
      price: "KES 3000/month",
      features: [
        "Unlimited access, all AI features, watermark-free document generation",
        "Discounts for mailing list subscribers"
      ],
      buttonText: "Subscribe",
      buttonLink: "/checkout"
    },
    {
      name: "All-Inclusive",
      price: "Ksh 6000",
      billing: "Yearly payment",
      features: [
        "Unlimited documents",
        "Watermark-free documents",
        "Priority support",
        "17% discount mailing list subscribers"
      ],
      buttonText: "Subscribe now",
      buttonLink: "/checkout"
    },
    {
      name: "Student Discounts",
      price: "Discounted",
      features: [
        "Free database access",
        "25% discount on AI and chatbot features",
        "Up to 50% off on monthly subscriptions"
      ],
      buttonText: "Learn more",
      buttonLink: "/checkout"
    }
  ];

  // const longTermRevenuePlans = [
  //   {
  //     name: "Small Firms Package",
  //     price: "$100/month",
  //     features: [
  //       "Affordable subscription for small firms",
  //       "Collaboration tools and AI insights"
  //     ],
  //     buttonText: "Get started",
  //     buttonLink: "/checkout"
  //   },
  //   {
  //     name: "Large Firms Package",
  //     features: [
  //       "Custom pricing for full database access",
  //       "Advanced analytics and case trend insights"
  //     ],
  //     buttonText: "Contact sales",
  //     buttonLink: "/contact"
  //   },
  //   {
  //     name: "AI/ML Model Licensing",
  //     features: [
  //       "Licensing for legal search and summarization models",
  //       "Ideal for law firms and educational institutions"
  //     ],
  //     buttonText: "Inquire now",
  //     buttonLink: "/contact"
  //   },
  //   {
  //     name: "Data Analytics",
  //     features: [
  //       "Legal trends and case law analysis",
  //       "Fee-based service for specialized insights"
  //     ],
  //     buttonText: "Learn more",
  //     buttonLink: "/contact"
  //   },
  //   {
  //     name: "Data Monetization",
  //     features: [
  //       "Aggregated legal data for government bodies, universities, and research institutions"
  //     ],
  //     buttonText: "Request access",
  //     buttonLink: "/contact"
  //   }
  // ];

  const renderPlanCards = (planData) => {
    return planData.map((plan, index) => (
      <div key={index} className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
        <div className="p-8 xl:px-12">
          <h3 className="text-base font-semibold text-purple-600">{plan.name}</h3>
          {plan.price && <p className="text-5xl font-bold text-black mt-7">{plan.price}</p>}
          {plan.billing && <p className="mt-3 text-base text-gray-600">{plan.billing}</p>}
          <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
            {plan.features.map((feature, i) => (
              <li key={i} className="inline-flex items-center space-x-2">
                <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base font-medium text-gray-900">{feature}</span>
              </li>
            ))}
          </ul>
          <a href={plan.buttonLink} title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
            {plan.buttonText}
          </a>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24 animate-fadeIn font-roboto">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Explore our pricing plans and choose the one that fits your needs. You can always upgrade or downgrade your subscription.
            </p>
          </div>

          {/* General Pricing Plans */}
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
            {renderPlanCards(plans)}
          </div>

          {/* Case Law Database Access & AI Features */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Case Law Database Access & AI Features</h2>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:max-w-full lg:grid-cols-3">
              {renderPlanCards(caseLawPlans)}
            </div>
          </div>

          {/* Long-Term Revenue Streams */}
          {/* <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Long-Term Revenue Streams</h2>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:max-w-full lg:grid-cols-3">
              {renderPlanCards(longTermRevenuePlans)}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Pricing;
