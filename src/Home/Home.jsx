import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-amber-300 to-amber-500 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.05}px, ${
              -mousePosition.y * 0.05
            }px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl">
          <div
            className={`space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent animate-pulse">
                Welcome to
              </h1>
              <h1 className="text-6xl md:text-7xl font-bold mt-2">
                <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                  Microsys
                </span>
              </h1>

              <div className="mt-4 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards] origin-left"></div>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                <span className="font-semibold text-amber-700">Microsys</span>{" "}
                is a leading center for{" "}
                <span className="text-amber-600 font-medium">
                  MS-CIT training
                </span>
                , helping students master essential computer skills with
                confidence. We combine expert guidance and practical learning to
                prepare you for academics, careers, and the digital future.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <Link to='/courses'>
              <button className="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
                <span className="relative z-10">Get Started</span>
               
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
              </Link>
            </div>

            <div
              className={`flex gap-8 pt-4 transform transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              {[
                { number: "500+", label: "Students Trained" },
                { number: "25+", label: "Years Experience" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex justify-center transform transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative bg-white p-2 rounded-3xl">
                <img
                  src="./comp.jpg"
                  alt="Microsys Computer Classes"
                  className="rounded-2xl shadow-2xl w-full max-w-lg transform group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                  <span className="text-sm font-semibold">
                    MS-CIT Certified
                  </span>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                  <span className="text-sm font-semibold">Expert Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent opacity-50"></div>
    </div>
  );
};

export default Home;
