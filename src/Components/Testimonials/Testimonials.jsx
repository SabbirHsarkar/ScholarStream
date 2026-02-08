import React from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Alice Johnson",
    role: "Master's Student",
    testimonial:
      "Thanks to ScholarStream, I got a scholarship at my dream university in Germany! The process was smooth.",
    avatar: "https://i.ibb.co.com/n8fy9jBL/P1.jpg",
  },
  {
    name: "Sakia Saki",
    role: "Undergraduate Student",
    testimonial:
      "I compared multiple scholarships on ScholarStream and found the one that suited my career perfectly.",
    avatar: "https://i.ibb.co.com/gbGX9fTs/6adae57e-5382-4402-800f-18ce19567480.jpg",
  },
  {
    name: "Gazi Fariya",
    role: "PhD Candidate",
    testimonial:
      "ScholarStream saved me a lot of time. I could filter scholarships based on fees, location, and degree.",
    avatar: "https://i.ibb.co.com/VWZPQXj3/600978197-2018292845671967-4092260628728686054-n.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 "></div>
  
  {/* Animated Background Elements */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
  <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-500"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header Section */}
    <div className="text-center mb-16">
      {/* Badge */}
      <div className="inline-block mb-6">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
          <svg className="w-4 h-4 mr-2 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Real Student Experiences
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Success Stories That Inspire
        </span>
      </h2>
      
      {/* Subtitle */}
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Discover how students from around the world achieved their dreams with ScholarStream
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonialsData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100 
          }}
          whileHover={{ 
            y: -12,
            transition: { duration: 0.3 }
          }}
          className="group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm 
                         rounded-3xl p-8 border border-white/10 
                         shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]
                         group-hover:shadow-[0_30px_90px_-20px_rgba(124,58,237,0.6)]
                         transition-all duration-500">
            
            {/* Quote Icon */}
            <div className="absolute top-6 right-6">
              <svg className="w-10 h-10 text-purple-500/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Avatar & Info */}
            <div className="flex items-start gap-4 mb-6">
              {/* Avatar with Ring */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="relative w-16 h-16 rounded-full object-cover ring-4 ring-gray-800"
                />
                {/* Verified Badge */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Name & Role */}
              <div className="flex-1">
                <h3 className="font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-purple-400 font-medium text-sm mb-1">{item.role}</p>
                
                {/* Rating Stars */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-400">5.0</span>
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="relative">
              <p className="text-gray-300 leading-relaxed text-lg pl-4 border-l-2 border-purple-500/50">
                "{item.testimonial}"
              </p>
              
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gray-900 transform rotate-45 border-l border-t border-purple-500/30"></div>
            </div>

            {/* Achievements */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-400">Scholarship Won</span>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-full">
                  <span className="text-sm font-semibold text-purple-300">Full Funding</span>
                </div>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Stats Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 pt-12 border-t border-gray-800/50"
    >
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "5,000+", label: "Students Helped", icon: "👨‍🎓" },
          { value: "$50M+", label: "Scholarship Value", icon: "💰" },
          { value: "98%", label: "Success Rate", icon: "🎯" },
          { value: "50+", label: "Countries", icon: "🌍" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              {stat.value}
            </div>
            <div className="text-gray-400 mt-2">{stat.label}</div>
          </div>
        ))}
      </div> */}
    </motion.div>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="text-center mt-12"
    >
      <button className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 
                        hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 
                        rounded-2xl font-bold text-lg transition-all duration-300 
                        transform hover:-translate-y-1 hover:shadow-2xl">
        <span>Share Your Success Story</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      <p className="text-gray-500 mt-4 text-sm">
        Join thousands of successful students worldwide
      </p>
    </motion.div>
  </div>
</section>
  );
};

export default Testimonials;
