import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import HookAxios from "../../Hooks/HookAxios";

const TopScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const axiosInstance = HookAxios();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const res = await axiosInstance.get("/scholarships", {
          params: {
            sort: "fee_asc", 
            page: 1,
            limit: 6,        
          },
        });

        setScholarships(res.data.scholarships);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchScholarships();
  }, [axiosInstance]);

  return (
   <section className="relative py-20  text-white overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg mb-4">
        Top Scholarships
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto">
        Discover fully-funded scholarships from world's leading universities
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {scholarships.map((scholarship, index) => (
        <motion.div
          key={scholarship._id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100 
          }}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
          className="group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>
          
          {/* Main Card */}
          <div className="relative rounded-2xl overflow-hidden
                         bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#312E81]
                         border border-white/10
                         shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]
                         hover:shadow-[0_30px_90px_-20px_rgba(124,58,237,0.8)]
                         transition-all duration-500">
            
            {/* Glass Overlay Enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/10 backdrop-blur-[2px]" />
            
            {/* Card Content */}
            <div className="relative z-10">
              {/* Image with Gradient Overlay */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={scholarship.image}
                  alt={scholarship.universityName}
                  className="w-full h-full object-cover 
                             transform group-hover:scale-110 
                             transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                
                {/* University Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">{scholarship.universityName}</span>
                  </div>
                </div>
                
                {/* Category Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold rounded-full shadow-lg">
                    {scholarship.scholarshipCategory}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-white">
                {/* Scholarship Name */}
                <h3 className="text-xl font-bold mb-3 line-clamp-2 h-14 group-hover:text-purple-300 transition-colors">
                  {scholarship.scholarshipName || scholarship.universityName}
                </h3>

                {/* Location */}
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">
                    {scholarship.city}, {scholarship.country}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4"></div>

                {/* Fee & Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${scholarship.applicationFees > 0 ? 'bg-red-500/20' : 'bg-emerald-500/20'}`}>
                      {scholarship.applicationFees > 0 ? (
                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Application Fee</p>
                      <p className={`font-semibold ${scholarship.applicationFees > 0 ? 'text-red-300' : 'text-emerald-300'}`}>
                        {scholarship.applicationFees > 0
                          ? `$${scholarship.applicationFees}`
                          : "FREE"}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="relative">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-emerald-300">Open</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() =>
                    navigate(`/scholarship/${scholarship._id}`, {
                      state: scholarship,
                    })
                  }
                  className="w-full py-3 rounded-xl font-semibold
                           bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                           hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
                           transform transition-all duration-300 
                           hover:-translate-y-1 hover:shadow-2xl
                           shadow-lg shadow-purple-500/30
                           relative overflow-hidden group"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                                bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                transition-transform duration-1000" />
                  
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>View Details</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* View More */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center mt-16"
    >
      <button
        onClick={() => navigate('/all-scholarships')}
        className="inline-flex items-center space-x-3 px-8 py-3
                 bg-gradient-to-r from-purple-600/20 to-indigo-600/20
                 hover:from-purple-600/30 hover:to-indigo-600/30
                 border border-purple-500/30
                 text-purple-300 hover:text-white
                 rounded-xl font-semibold
                 transition-all duration-300
                 hover:shadow-lg hover:shadow-purple-500/20"
      >
       <Link to='/all-scholarships'><span>View All Scholarships</span></Link> 
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </motion.div>
  </div>
</section>
  );
};

export default TopScholarships;
