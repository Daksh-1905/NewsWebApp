import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-600">NewsHub</h1>

        {/* Buttons */}
        <div>
          <Link
            className="mr-4 px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            to="/register"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">NewsHub</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Your one-stop destination for the latest news across genres. Stay
          updated, stay informed!
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose NewsHub?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">
              Latest News
            </h4>
            <p className="text-gray-600">
              Get real-time updates from reliable sources across all categories.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">
              Multiple Genres
            </h4>
            <p className="text-gray-600">
              Explore Technology, Sports, Entertainment, Politics, and much
              more.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">
              Save & Read Later
            </h4>
            <p className="text-gray-600">
              Bookmark your favorite articles and access them anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} NewsHub. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
