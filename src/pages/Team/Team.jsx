import React from "react";
import { teamData } from "./teamData";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Team() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Team 2024-2025
          </h1>
          <p className="text-xl text-gray-600">
            Meet the dedicated professionals behind the Training and Placement
            Cell
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={cardVariants}
          >
            Our Team Members
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <AnimatedCard
                key={member.id}
                member={member}
                variants={cardVariants}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Animated Card Component
const AnimatedCard = ({ member, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-lg shadow-md overflow-hidden
 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="relative h-[280px]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div
          className="absolute bottom-0 left-0 right-0
 bg-gradient-to-t from-black/80 to-transparent
 p-4"
        >
          <h3 className="text-white text-lg font-semibold mb-0.5">
            {member.name}
          </h3>
          <p className="text-gray-200 text-sm">{member.position}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-3 bg-blue-600 rounded-full"></div>
            <p className="text-gray-700 text-sm">{member.department}</p>
          </div>
        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 text-sm hover:text-blue-800 transition duration-300"
        >
          <FaLinkedin className="text-lg" />
          <span>Connect</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Team;
