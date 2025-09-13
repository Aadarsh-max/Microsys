import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-amber-300 rounded-full opacity-15 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10 transform hover:scale-[1.02] transition-transform duration-500 ease-out">
        {/* Main card with glassmorphism effect */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-amber-200/50 hover:shadow-amber-500/20 transition-all duration-700 hover:border-amber-300/70">
          {/* Animated heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent animate-fade-in-down">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-4 rounded-full animate-scale-in"></div>
          </div>

          {/* Enhanced contact details with hover effects */}
          <div className="space-y-6 text-gray-700 mb-10">
            <div className="group p-4 rounded-xl hover:bg-amber-50/70 transition-all duration-300 hover:transform hover:translate-x-2 border-l-4 border-transparent hover:border-amber-400">
              <p className="flex items-center">
                <span className="font-semibold text-amber-600 w-20 inline-block">Name:</span>
                <span className="group-hover:text-amber-700 transition-colors duration-300">Microsys Computers</span>
              </p>
            </div>

            <div className="group p-4 rounded-xl hover:bg-amber-50/70 transition-all duration-300 hover:transform hover:translate-x-2 border-l-4 border-transparent hover:border-amber-400">
              <p className="flex items-center">
                <span className="font-semibold text-amber-600 w-20 inline-block">Phone:</span>
                <a
                  href="tel:9822683958"
                  className="hover:text-amber-600 hover:underline transform hover:scale-105 transition-all duration-300"
                >
                  9822683958
                </a>
              </p>
            </div>

            <div className="group p-4 rounded-xl hover:bg-amber-50/70 transition-all duration-300 hover:transform hover:translate-x-2 border-l-4 border-transparent hover:border-amber-400">
              <p className="flex items-start">
                <span className="font-semibold text-amber-600 w-20 inline-block">Email:</span>
                <a
                  href="mailto:microsyscomputers.103@gmail.com"
                  className="hover:text-amber-600 hover:underline transform hover:scale-105 transition-all duration-300 break-all"
                >
                  microsyscomputers.103@gmail.com
                </a>
              </p>
            </div>

            <div className="group p-4 rounded-xl hover:bg-amber-50/70 transition-all duration-300 hover:transform hover:translate-x-2 border-l-4 border-transparent hover:border-amber-400">
              <p className="flex items-start">
                <span className="font-semibold text-amber-600 w-20 inline-block">Address:</span>
                <span className="group-hover:text-amber-700 transition-colors duration-300">
                  C-103 Mangalam Apartment, Railway Station, Boisar, Palghar
                </span>
              </p>
            </div>
          </div>

          {/* Enhanced Google Maps section */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 text-center">
              Find Us Here
            </h2>
            <div className="relative group">
              <div className="w-full h-72 border-2 border-amber-300/60 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02] hover:border-amber-400">
                <iframe
                  title="Microsys Computers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.38285430406637!2d72.76044866545952!3d19.79793495595922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71ef7706d0e39%3A0xb9b9de147030f544!2sMicrosys%20Computers!5e0!3m2!1sen!2sin!4v1757781159001!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500 hover:saturate-110"
                ></iframe>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-scale-in {
          animation: scale-in 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default Contact;