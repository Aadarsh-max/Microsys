import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, FileSpreadsheet, Code, Info, LayoutGrid } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg flex flex-col py-8 px-6 border-r border-gray-200">
      <h2 className="text-2xl font-bold text-amber-600 mb-10 text-center">
        Courses
      </h2>
      
      <nav className="flex flex-col space-y-6">
        <Link
          to="/mscITinfo"
          className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-amber-600 hover:translate-x-1 transition-transform"
        >
          <LayoutGrid size={20} /> MSCIT
        </Link>

        <Link
          to="/tallyinfo"
          className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-amber-600 hover:translate-x-1 transition-transform"
        >
          <FileSpreadsheet size={20} /> Tally
        </Link>

        <Link
          to="/advanceexcelinfo"
          className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-amber-600 hover:translate-x-1 transition-transform"
        >
          <BookOpen size={20} /> Advance Excel
        </Link>

        <Link
          to="/cppinfo"
          className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-amber-600 hover:translate-x-1 transition-transform"
        >
          <Code size={20} /> C++
        </Link>

        <Link
          to="/knowmoreinfo"
          className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-amber-600 hover:translate-x-1 transition-transform"
        >
          <Info size={20} /> Know More
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
