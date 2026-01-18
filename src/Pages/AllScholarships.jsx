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
    <div className=" mx-auto p-6  bg-gradient-to-r from-[#0B0D17] via-[#1A1F3B] to-[#2C2F50]">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        All Scholarships
      </h1>

      {/* 🔍 Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by scholarship / university / degree"
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="select select-bordered w-full"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Countries</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>

        <select
          className="select select-bordered w-full"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">Default Sort</option>
          <option value="fee_asc">Fee: Low to High</option>
          <option value="fee_desc">Fee: High to Low</option>
          <option value="date_desc">Newest First</option>
          <option value="date_asc">Oldest First</option>
        </select>
      </div>

      {/*  Cards */}
      <div className="max-w-7xl item-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {scholarships.length > 0 ? (
          scholarships.map((item,index) => (
           <motion.div
  key={item._id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.15 }}
  className="group relative rounded-2xl overflow-hidden
             bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4C1D95]
             shadow-[0_15px_40px_rgba(0,0,0,0.45)]
             hover:shadow-[0_25px_70px_rgba(124,58,237,0.6)]
             transition-all duration-300"
>

  {/* Glass overlay */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

  <div className="relative z-10">

    {/* Image */}
    <div className="overflow-hidden">
      <img
        src={item.image}
        alt={item.universityName}
        className="h-44 w-full object-cover
                   transform group-hover:scale-105
                   transition duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-5 text-white space-y-2">
      <h2 className="font-bold text-lg tracking-wide">
        {item.scholarshipName || item.universityName}
      </h2>

      <p className="text-sm font-medium text-indigo-300">
        {item.scholarshipCategory}
      </p>

      <p className="text-sm text-gray-300">
        {item.city}, {item.country}
      </p>

      <p className="text-sm font-semibold text-emerald-300">
        Application Fees: ${item.applicationFees || 0}
      </p>

      <button
        onClick={() => handleViewDetails(item)}
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

          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No scholarships found
          </p>
        )}
      </div>

      {/*Pagination */}
      <div className="flex justify-center mt-10 gap-2 ">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="btn btn-outline border-amber-50 text-white"
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`btn border-amber-50 text-white ${
              currentPage === num + 1 ? "btn-primary" : "btn-outline"
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="btn btn-outline border-e-amber-50 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllScholarships;
