import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, name: 'MSCIT', duration: '2 months', path: '/mscIT', image: '/mscit.jpg.webp' },
  { id: 2, name: 'Tally', duration: '120 hours - 3 months', path: '/tally', image: '/tt.png' },
  { id: 3, name: 'Advance Excel', duration: '2 months', path: '/excel', image: '/excel.jpg' },
  { id: 4, name: 'C++', duration: '3 months', path: '/cpp', image: '/c.jpg' },
];

const Courses = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-24">
      <h2 className="text-5xl font-bold text-amber-600 mb-16 text-center relative">
        <span className="inline-block animate-pulse">Our Courses</span>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <Link key={course.id} to={course.path} className="group block">
            <div 
              className="flex flex-col md:flex-row bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-amber-100 hover:to-amber-150 transition-all duration-700 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              {/* Image Section - Larger */}
              <div className="md:w-2/5 mb-6 md:mb-0 relative overflow-hidden rounded-2xl">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 md:h-56 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
             
              {/* Content Section */}
              <div className="md:w-3/5 md:pl-8 flex flex-col justify-center relative z-10">
                <h3 className="text-3xl font-bold text-amber-600 mb-3 group-hover:text-amber-700 transition-colors duration-500 transform group-hover:translate-x-2">
                  {course.name}
                </h3>
                <p className="text-xl text-amber-700 mb-4 font-medium group-hover:text-amber-800 transition-colors duration-500">
                  {course.duration}
                </p>
                <p className="text-amber-800 text-base leading-relaxed transform group-hover:translate-x-2 transition-transform duration-500 delay-100">
                  Click to know more about {course.name} course.
                </p>
                
                {/* Animated arrow */}
                <div className="mt-4 flex items-center text-amber-600 group-hover:text-amber-700 transition-colors duration-500">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-300/30 to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </Link>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Courses;
