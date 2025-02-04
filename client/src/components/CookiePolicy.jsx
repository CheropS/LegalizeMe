import React from "react";

const CookiePolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-4">
        We use cookies to enhance your experience on our website. Cookies are small text files stored on your device that help us improve the functionality and performance of our site.
      </p>
      <h2 className="text-2xl font-bold mb-2">Types of Cookies We Use</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Essential Cookies: Necessary for the website to function.</li>
        <li>Analytics Cookies: Help us understand how users interact with our site.</li>
        <li>Preference Cookies: Remember your preferences and settings.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Managing Cookies</h2>
      <p className="mb-4">
        You can manage or disable cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
      </p>
    </div>
  );
};

export default CookiePolicy;