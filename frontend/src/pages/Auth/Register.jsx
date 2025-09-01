import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const payload = { firstName, lastName, email, password };
    try {
      let response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!response.ok) {
        alert("Registration failed");
        return;
      }
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-gray-100 to-blue-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-6 text-center">
          <img
            className="w-auto h-10 mx-auto"
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
          />
        </div>

        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Create an Account
          </h3>
          <p className="mt-2 text-center text-gray-500">
            Sign up to get started
          </p>

          {/* Form */}
          <form onSubmit={handleOnSubmit} className="mt-6 space-y-5">
            {/* First Name */}
            <div>
              <input
                className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div>
              <input
                className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <input
                className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <input
                className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:from-blue-600 hover:to-indigo-600 shadow-md transform hover:scale-[1.02] transition-all duration-200"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center py-5 bg-gray-50">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
          </span>
          <Link
            to="/login"
            className="ml-1 text-sm font-bold text-blue-500 hover:text-blue-600 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
