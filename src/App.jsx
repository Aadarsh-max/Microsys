import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Courses from "./Courses/Courses";

import Navbar from "./Navbar/Navbar";

import Mscitpage from "./Detailed Courses/Mscitpage";
import Tallypage from "./Detailed Courses/Tallypage";
import ExcelPage from "./Detailed Courses/ExcelPage";
import Cpppage from "./Detailed Courses/Cpppage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tally" element={<Tallypage />} />
        <Route path="/mscIT" element={<Mscitpage />} />
        <Route path="/excel" element={<ExcelPage />} />
        <Route path="/cpp" element={<Cpppage />} />
      </Routes>
    </Router>
  );
};

export default App;
