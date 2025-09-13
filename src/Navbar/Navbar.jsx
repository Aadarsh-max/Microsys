import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b-2 border-amber-200 rounded-b-2xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="flex items-center text-2xl md:text-4xl font-extrabold text-amber-600 italic tracking-wide gap-3">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-10 w-10 object-contain align-middle"
          />
          <span className="align-middle">Microsys Computers</span>
        </h1>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-amber-600">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav
          className={`flex flex-col md:flex-row gap-4 md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transform transition-all duration-300 ${
            open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base text-center"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base text-center"
          >
            <span className="relative z-10">About Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/courses"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base text-center"
          >
            <span className="relative z-10">Courses</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-base text-center"
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
