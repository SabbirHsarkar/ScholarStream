import React, { useEffect, useState } from "react";
import HookAxios from "../Hooks/HookAxios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const AllScholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  // filters
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [sort, setSort] = useState("");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 6;

  const axiosInstance = HookAxios();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/scholarships", {
        params: {
          search,
          country,
          sort,
          page: currentPage,
          limit,
        },
      })
      .then((res) => {
        setScholarships(res.data.scholarships);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log("Error fetching scholarships:", err);
      });
  }, [axiosInstance, search, country, sort, currentPage]);

  const handleViewDetails = (scholarship) => {
    navigate(`/scholarship/${scholarship._id}`, { state: scholarship });
  };

  return (
   <div className="min-h-screen mx-auto p-6 bg-gradient-to-br from-[#0B0D17] via-[#1A1F3B] to-[#0B0D17] text-white">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg mb-4">
        All Scholarships
      </h1>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto">
        Discover all available scholarships from top universities worldwide
      </p>
    </div>

    {/* 🔍 Enhanced Filters Section */}
    <div className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search scholarships, universities, degrees..."
            className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <select
            className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition appearance-none"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">🌍 All Countries</option>
            <option value="USA">🇺🇸 USA</option>
            <option value="UK">🇬🇧 United Kingdom</option>
            <option value="Canada">🇨🇦 Canada</option>
            <option value="Australia">🇦🇺 Australia</option>
            <option value="Germany">🇩🇪 Germany</option>
            <option value="Japan">🇯🇵 Japan</option>
          </select>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>
          <select
            className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition appearance-none"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value=""> Sort By</option>
            <option value="fee_asc">💰 Fee: Low to High</option>
            <option value="fee_desc">💰 Fee: High to Low</option>
            <option value="date_desc">🆕 Newest First</option>
            <option value="date_asc">📅 Oldest First</option>
          </select>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <button
            onClick={() => {
              setSearch('');
              setCountry('');
              setSort('');
              setCurrentPage(1);
            }}
            className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span>
          Showing {scholarships.length} of {scholarships.length} scholarships
        </span>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>

    {/* 🎓 Scholarship Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {scholarships.length > 0 ? (
        scholarships.map((item, index) => (
          <motion.div
            key={item._id}
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
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/10 backdrop-blur-[2px]" />
              
              {/* Card Content */}
              <div className="relative z-10">
                {/* Image with Gradient Overlay */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.universityName}
                    className="w-full h-full object-cover 
                               transform group-hover:scale-110 
                               transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                  
                  {/* University Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">{item.universityName}</span>
                    </div>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold rounded-full shadow-lg">
                      {item.scholarshipCategory}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 text-white space-y-4">
                  {/* Scholarship Name */}
                  <h2 className="text-xl font-bold line-clamp-2 h-14 group-hover:text-purple-300 transition-colors">
                    {item.scholarshipName || item.universityName}
                  </h2>

                  {/* Location */}
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">
                      {item.city}, {item.country}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                  {/* Fee & Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${item.applicationFees > 0 ? 'bg-red-500/20' : 'bg-emerald-500/20'}`}>
                        {item.applicationFees > 0 ? (
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
                        <p className={`font-semibold ${item.applicationFees > 0 ? 'text-red-300' : 'text-emerald-300'}`}>
                          {item.applicationFees > 0 ? `$${item.applicationFees}` : "FREE"}
                        </p>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-emerald-300">Open</span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => handleViewDetails(item)}
                    className="w-full py-3 rounded-xl font-semibold
                             bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                             hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
                             transform transition-all duration-300 
                             hover:-translate-y-1 hover:shadow-2xl
                             shadow-lg shadow-purple-500/30
                             relative overflow-hidden group"
                  >
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
        ))
      ) : (
        <div className="col-span-full text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No scholarships found</h3>
          <p className="text-gray-500">Try adjusting your search filters</p>
        </div>
      )}
    </div>

    {/* 📄 Enhanced Pagination */}
    {totalPages > 1 && (
      <div className="flex flex-col items-center justify-center mt-16 space-y-6">
        {/* Page Info */}
        <div className="text-sm text-gray-400">
          Showing page {currentPage} of {totalPages}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                     bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800
                     border border-gray-700 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center space-x-1">
            {[...Array(Math.min(5, totalPages)).keys()].map((num) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = num + 1;
              } else if (currentPage <= 3) {
                pageNum = num + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + num;
              } else {
                pageNum = currentPage - 2 + num;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 min-w-[44px]
                           ${currentPage === pageNum 
                             ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                             : 'bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white'}`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                     bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800
                     border border-gray-700 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Go to Page */}
        {/* <div className="flex items-center space-x-2">
          <span className="text-gray-400">Go to page:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = Math.max(1, Math.min(totalPages, parseInt(e.target.value) || 1));
              setCurrentPage(page);
            }}
            className="w-20 px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div> */}
      </div>
    )}
  </div>
</div>
  );
};

export default AllScholarships;
