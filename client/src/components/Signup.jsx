import React, { useState } from "react";
import { Auth } from "@aws-amplify/auth";
import "../aws-config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const signUpResponse = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email, // specify that the email is an attribute
        },
      });
      console.log("Sign Up successful", signUpResponse);
    } catch (err) {
      console.error("Error signing up:", err);
      setErrorMessage(err.message || "An error occurred during signup");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col p-4 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
