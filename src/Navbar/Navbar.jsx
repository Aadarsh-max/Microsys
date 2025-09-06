import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md border-b-2 border-amber-200 rounded-b-2xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-4xl font-extrabold text-amber-600 italic tracking-wide">
          Microsys
        </h1>

        <nav className="flex gap-6">
          <Link
            to="/"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/about"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base"
          >
            <span className="relative z-10">About Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/courses"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base"
          >
            <span className="relative z-10">Courses</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/contact"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
