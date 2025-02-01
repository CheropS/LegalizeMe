import React, { useState } from "react";

const StudentVerification = ({ location }) => {
  const { plan } = location.state;
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    // Implement verification logic
    alert("Student status verified!");
    setIsVerified(true);
  };

  return (
    <div className="p-8 font-montserrat">
      <h2 className="text-2xl font-bold">Verify Student Status</h2>
      <p className="mt-4">Upload proof of your student status to access discounts for the {plan.name} plan.</p>
      <button
        onClick={handleVerification}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Verify Now
      </button>
      {isVerified && (
        <button
          onClick={() => navigate(`/checkout`, { state: { plan } })}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Proceed to Payment
        </button>
      )}
    </div>
  );
};

export default StudentVerification;
