import React from "react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import ObjectivesPhilosophy from "./ObjectivesPhilosophy";
import AnnouncementsAndVideo from "./AnnouncementsAndVideo";
import Testimonials from "./Testimonials";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const featureCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 py-12 mt-16"
    >
      <motion.div variants={headerVariants} className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-4"
          animate={{
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Training and Placement Cell
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.h1>
      </motion.div>
      <motion.div variants={itemVariants} className="my-8">
        <ImageCarousel />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ObjectivesPhilosophy />
      </motion.div>

      <motion.div variants={itemVariants}>
        <AnnouncementsAndVideo />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Testimonials />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        {/* Virtual Experiments Card */}
        <motion.div
          variants={featureCardVariants}
          whileHover="hover"
          className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4">
            Comprehensive Training Programs
          </h3>
          <p className="text-gray-600">
            Equip students with the skills and knowledge required to excel in
            their careers.
          </p>
        </motion.div>

        {/* Learn at Your Pace Card */}
        <motion.div
          variants={featureCardVariants}
          whileHover="hover"
          className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4">Placement Assistance</h3>
          <p className="text-gray-600">
            Connect students with top companies and placement opportunities.
          </p>
        </motion.div>

        {/* Real-time Results Card */}
        <motion.div
          variants={featureCardVariants}
          whileHover="hover"
          className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4">Career Counseling</h3>
          <p className="text-gray-600">
            Provide personalized guidance to help students make informed career
            decisions.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
