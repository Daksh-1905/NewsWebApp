import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      let response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
      alert("Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const [activeLink, setActiveLink] = useState("/general");

  const navItems = [
    { name: "General", path: "/general" },
    { name: "Business", path: "/business" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Health", path: "/health" },
    { name: "Science", path: "/science" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold text-blue-600">NewsHub</h1>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setActiveLink(item.path)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  activeLink === item.path
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Profile Dropdown */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="w-9 h-9 rounded-full border border-gray-300 shadow-sm"
                />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-200 origin-top-right z-50">
                <div className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200 text-center">
                  Hello, <span className="font-semibold">Daksh Jain</span>!
                </div>
                <Link
                  to="/saved"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 text-center transition"
                >
                  View Saved Articles
                </Link>
                <button
                  className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 text-center transition"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
