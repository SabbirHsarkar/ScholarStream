import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-24 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 "></div>
  
  {/* Animated Background Elements */}
  <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
  <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-500"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header Section */}
    <div className="text-center mb-16">
      {/* Badge */}
      

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Let's Connect & Grow Together
        </span>
      </h2>
      
      {/* Subtitle */}
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Have questions about scholarships? Our expert team is here to guide you through every step of your academic journey.
      </p>
    </div>

    {/* Contact Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {[
        {
          icon: <FaEnvelope className="text-3xl" />,
          title: "Email Us",
          info: "support@scholarstream.com",
          subInfo: "info@scholarstream.com",
          color: "from-blue-500 to-cyan-500",
          action: "mailto:support@scholarstream.com",
          delay: 0
        },
        {
          icon: <FaPhone className="text-3xl" />,
          title: "Call Us",
          info: "+880 1234 567890",
          subInfo: "+880 9876 543210",
          color: "from-purple-500 to-pink-500",
          action: "tel:+8801234567890",
          delay: 0.2
        },
        {
          icon: <FaMapMarkerAlt className="text-3xl" />,
          title: "Visit Us",
          info: "Plot 16, Road 96, Gulshan 2",
          subInfo: "Dhaka 1212, Bangladesh",
          color: "from-emerald-500 to-green-500",
          action: "https://maps.google.com/?q=Dhaka+Bangladesh",
          delay: 0.4
        }
      ].map((contact, index) => (
        <motion.a
          key={index}
          href={contact.action}
          target={contact.action.startsWith('http') ? "_blank" : "_self"}
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: contact.delay, type: "spring" }}
          whileHover={{ 
            y: -12,
            transition: { duration: 0.3 }
          }}
          className="group relative block"
        >
          {/* Card Glow Effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200`}></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm 
                         rounded-3xl p-8 border border-white/10 
                         shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]
                         group-hover:shadow-[0_30px_90px_-20px_rgba(99,102,241,0.6)]
                         transition-all duration-500">
            
            {/* Icon Container */}
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${contact.color} mb-6 
                           transform group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-white">{contact.icon}</div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all">
                {contact.title}
              </h3>
              
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-200">{contact.info}</p>
                <p className="text-sm text-gray-400">{contact.subInfo}</p>
              </div>

              {/* CTA Button */}
              <div className="pt-4 mt-6 border-t border-gray-700/50">
                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span>{contact.title === "Email Us" ? "Send Email" : contact.title === "Call Us" ? "Call Now" : "View on Map"}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
          </div>
        </motion.a>
      ))}
    </div>

    {/* Additional Contact Info */}
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {/* Working Hours */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm 
                   rounded-3xl p-8 border border-white/10"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Working Hours</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
            <span className="text-gray-300">Sunday - Thursday</span>
            <span className="font-semibold text-emerald-400">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
            <span className="text-gray-300">Friday - Saturday</span>
            <span className="font-semibold text-amber-400">10:00 AM - 4:00 PM</span>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            *Closed on public holidays. Online support available 24/7
          </p>
        </div>
      </motion.div>

      {/* Response Time */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm 
                   rounded-3xl p-8 border border-white/10"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Response Time</h3>
        </div>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Within 2-4 hours
            </div>
            <p className="text-gray-400 mt-2">Average response time on working days</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-emerald-500/10 rounded-xl">
              <div className="text-2xl font-bold text-emerald-400">24/7</div>
              <div className="text-sm text-gray-400">Email Support</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-xl">
              <div className="text-2xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 
                 rounded-3xl p-12 border border-purple-500/20"
    >
      <h3 className="text-3xl font-bold mb-4 text-white">
        Need Personalized Guidance?
      </h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Book a free consultation session with our scholarship experts
      </p>
      
      <button className="inline-flex items-center space-x-3 px-8 py-4 
                        bg-gradient-to-r from-purple-600 to-blue-600 
                        hover:from-purple-700 hover:to-blue-700 
                        rounded-2xl font-bold text-lg transition-all duration-300 
                        transform hover:-translate-y-1 hover:shadow-2xl">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>Schedule Free Consultation</span>
      </button>
      
      <p className="text-gray-500 mt-6 text-sm">
        Limited slots available. Book your session now!
      </p>
    </motion.div>
  </div>
</section>
  );
};

export default Contact;
