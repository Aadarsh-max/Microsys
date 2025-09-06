import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Courses from './Courses/Courses'

import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <Router>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
    
    </Router>
  )
}

export default App
