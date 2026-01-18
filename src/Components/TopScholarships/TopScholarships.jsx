import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
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
    <section className="py-20 bg-gradient-to-r from-[#0B0D17] via-[#1A1F3B] to-[#2C2F50]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg mb-10 text-center">
          Top Scholarships
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
   <motion.div
  key={scholarship._id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.15 }}
  className="group relative rounded-2xl overflow-hidden
             bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4C1D95]
             shadow-[0_15px_40px_rgba(0,0,0,0.45)]
             hover:shadow-[0_25px_70px_rgba(124,58,237,0.6)]
             transition-all duration-300"
>

  {/* Glass Overlay */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

  {/* Card Content */}
  <div className="relative z-10">

    {/* Image */}
    <div className="overflow-hidden">
      <img
        src={scholarship.image}
        alt={scholarship.universityName}
        className="w-full h-44 object-cover
                   transform group-hover:scale-105
                   transition duration-500"
      />
    </div>

    {/* Text Area */}
    <div className="p-6 text-white">
      <h3 className="text-xl font-bold tracking-wide">
        {scholarship.scholarshipName || scholarship.universityName}
      </h3>

      <p className="mt-1 text-sm font-medium text-purple-300">
        {scholarship.scholarshipCategory}
      </p>

      <p className="mt-2 text-sm text-gray-300">
        {scholarship.city}, {scholarship.country}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-emerald-300">
          {scholarship.applicationFees > 0
            ? `$${scholarship.applicationFees} Application Fee`
            : "No Application Fee"}
        </span>

        <span className="px-3 py-1 text-xs font-semibold rounded-full
                         bg-emerald-500/20 text-emerald-300">
          Open
        </span>
      </div>

      <button
        onClick={() =>
          navigate(`/scholarship/${scholarship._id}`, {
            state: scholarship,
          })
        }
        className="mt-5 w-full py-2.5 rounded-lg font-semibold
                   bg-gradient-to-r from-pink-500 to-purple-600
                   hover:from-pink-600 hover:to-purple-700
                   transition-all duration-300 shadow-lg"
      >
        View Details
      </button>
    </div>
  </div>
</motion.div>


          ))}
        </div>
      </div>
    </section>
  );
};

export default TopScholarships;
