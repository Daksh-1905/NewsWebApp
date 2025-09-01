import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    try {
      let response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!response.ok) {
        alert("Login failed");
        return;
      }
      alert("Login successful");
      navigate("/general");
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
            Welcome Back
          </h3>
          <p className="mt-2 text-center text-gray-500">
            Login or create an account
          </p>

          {/* Form */}
          <form onSubmit={handleOnSubmit} className="mt-6 space-y-5">
            {/* Email Input */}
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

            {/* Password Input */}
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

            {/* Actions */}
            <div className="flex items-center justify-between text-sm">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:from-blue-600 hover:to-indigo-600 shadow-md transform hover:scale-[1.02] transition-all duration-200"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center py-5 bg-gray-50">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <Link
            to="/register"
            className="ml-1 text-sm font-bold text-blue-500 hover:text-blue-600 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
