import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BroadAreas = () => {
  const areas = [
    // Left Column
    [
      { name: "Electronics & Communications", link: "/" },
      { name: "Computer Science & Engineering", link: "/computer-science" },
      { name: "Electrical Engineering", link: "/" },
      { name: "Mechanical Engineering", link: "/" },
      { name: "Chemical Engineering", link: "/" },
    ],
    // Right Column
    [
      { name: "Biotechnology and Biomedical Engineering", link: "" },
      { name: "Civil Engineering", link: "/" },
      { name: "Physical Sciences", link: "/" },
      { name: "Chemical Sciences", link: "/" },
    ],
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-[1650px] mx-auto px-4 py-12"
    >
      <motion.h2
        variants={titleVariants}
        className="text-3xl font-bold text-blue-800 text-center mb-12"
      >
        Broad Areas of Virtual Labs
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <motion.div className="space-y-6">
          {areas[0].map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              {/* Cube Icon */}
              <motion.div 
                className="text-blue-800"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </motion.div>

              {/* Area Name */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/labs/computer-science`}
                  className="text-lg font-semibold text-blue-800 hover:text-blue-600 transition-colors"
                >
                  {area.name}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div className="space-y-6">
          {areas[1].map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              {/* Cube Icon */}
              <motion.div 
                className="text-blue-800"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </motion.div>

              {/* Area Name */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={area.link}
                  className="text-lg font-semibold text-blue-800 hover:text-blue-600 transition-colors"
                >
                  {area.name}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BroadAreas;
