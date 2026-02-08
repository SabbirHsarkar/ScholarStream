import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaSearch, FaGraduationCap, FaGlobe, FaCheckCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Main Background Gradient */}
      <div className="absolute inset-0 "></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-500"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100 
          }}
          className="flex-1 text-center lg:text-left"
        >
         

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Find Scholarships
            </span>
            <span className="block mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 text-transparent bg-clip-text">
              That Shape Your Future
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Access thousands of verified scholarship opportunities from top universities worldwide. 
            Compare, filter, and apply with confidence—all in one platform.
          </p>

          {/* Features List */}
          <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
            {[
              { icon: <FaCheckCircle className="text-emerald-400" />, text: "No Application Fees" },
              { icon: <FaGlobe className="text-blue-400" />, text: "Global Opportunities" },
              { icon: <FaSearch className="text-purple-400" />, text: "AI-Powered Search" },
              { icon: <FaGraduationCap className="text-cyan-400" />, text: "Expert Guidance" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <span className="text-gray-300 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/all-scholarships" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 
                         hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 
                         rounded-xl font-bold text-lg shadow-2xl 
                         hover:shadow-3xl transition-all duration-300 
                         flex items-center justify-center gap-3"
              >
                <FaSearch className="text-lg" />
                <span>Explore Scholarships</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-purple-500 
                       hover:bg-purple-500/10 text-purple-300 hover:text-white
                       rounded-xl font-bold text-lg transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Stats */}
        
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.2 
          }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-30"></div>
              
              {/* Image with Gradient Border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 
                            backdrop-blur-sm bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                <img
                  src="https://i.ibb.co.com/23GYtc96/SC.jpg"
                  alt="Scholarship Banner"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17] via-transparent to-transparent"></div>
              </div>

              {/* Floating Card 1
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-emerald-500 to-cyan-500 
                         p-4 rounded-2xl shadow-2xl z-20"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              {/* <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 
                         p-4 rounded-2xl shadow-2xl z-20"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </motion.div> */} 
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            w-[120%] h-[120%] bg-gradient-to-r from-purple-500/10 to-transparent 
                            rounded-full blur-3xl"></div>
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Banner;