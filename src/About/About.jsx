import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden px-6 py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-2xl shadow-2xl mb-16 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          About Microsys Computers
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          <span className="font-bold text-amber-600">Microsys Computers</span>{" "}
          has been a trusted name in IT education for over{" "}
          <span className="font-semibold">two decades</span>. Established with a
          mission to empower students through knowledge and practical learning,
          Microsys has helped thousands of learners excel in{" "}
          <span className="font-bold">MS-CIT, programming, and digital skills</span>.
          <br />
          <br />
          With expert faculty, personalized attention, and modern teaching
          methods, we ensure that every student not only learns concepts but
          also develops the confidence to apply them in real life.
        </p>
      </motion.div>

      {/* Class Info */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-amber-50 to-amber-100 p-10 rounded-2xl shadow-lg mb-16 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Class Information
        </h3>
        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            <span className="font-semibold">📍 Address:</span> C-103/104,
            Mangalam Apartment, Opp. Boisar Railway Station, Boisar, Maharashtra
          </p>
          <p>
            <span className="font-semibold">📞 Contact:</span> +91 9822683958
          </p>
          <p>
            <span className="font-semibold">📚 Course:</span> MS-CIT (Information
            Technology Literacy) by MKCL, introduced in 2001, is Maharashtra’s
            most popular IT course — designed to provide computer literacy to
            students, professionals, and homemakers alike.
          </p>
        </div>
      </motion.div>

      {/* Tutors Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mb-16 max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Tutors
        </h3>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Our tutors are highly experienced professionals who bring{" "}
          <span className="font-semibold text-amber-600">knowledge, patience,</span> 
          and <span className="font-semibold text-amber-600">passion</span> into
          every classroom. With strong academic qualifications and years of
          teaching expertise, they ensure that students gain both{" "}
          <span className="font-semibold">theoretical and practical skills.</span>
        </p>
      </motion.div>

      {/* Faculty Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16"
      >
        {/* Tutor 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img
            src="./mm.jpg"
            alt="Minal Churi"
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-amber-400 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Minal M. Churi
          </h2>
          <p className="text-gray-600">🎓 MCA | 📌 25+ years of experience</p>
          <p className="text-gray-600">🎂 Age: 48</p>
          <p className="text-gray-600">✉️ swati.churi777@gmail.com</p>
        </motion.div>

        {/* Tutor 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img
            src="./pp.jpg"
            alt="Manoj Churi"
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-amber-400 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Manoj S. Churi
          </h2>
          <p className="text-gray-600">🎓 B.Sc. | 📌 20+ years of experience</p>
          <p className="text-gray-600">🎂 Age: 55</p>
          <p className="text-gray-600">✉️ manoj.churi22@gmail.com</p>
        </motion.div>
      </motion.div>

      {/* Message Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold mb-4">A Message to Our Students</h3>
        <p className="text-lg leading-relaxed">
          “Education is not just about learning facts, but about training the
          mind to think. At Microsys Computers, we believe in nurturing
          curiosity, discipline, and creativity in every student. With hard work
          and the right guidance, you can achieve excellence in both academics
          and life.”
        </p>
      </motion.div>
    </div>
  );
};

export default About;
