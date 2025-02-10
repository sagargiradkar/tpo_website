import React from 'react';
import { motion } from 'framer-motion';

function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
            About Virtual Lab Digitizer Forum
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p 
            className="text-gray-700 mb-6 leading-relaxed"
            variants={itemVariants}
          >
            Virtual Labs Digitizer Forum is an initiative of Ministry of Education (MoE),
            Government of India under the aegis of National Mission on Education through
            Information and Communication Technology (NMEICT). This project is a consortium
            activity of twelve participating institutes and IIT Delhi is coordinating institute.
            It is a paradigm shift in ICT-based education. For the first time, such an initiative
            has been taken-up in remote‐experimentation. Under Virtual Labs project, over 100
            Virtual Labs consisting of approximately 700+ web-enabled experiments were designed
            for remote-operation and viewing.
          </motion.p>

          {/* Beneficiaries Section */}
          <motion.div 
            className="my-8"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl font-semibold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Intended Beneficiaries
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {/* Beneficiary Cards */}
              {[
                {
                  title: "Students and Faculty",
                  content: "All students and Faculty Members of Science and Engineering Colleges who do not have access to good lab‐facilities and/or instruments."
                },
                {
                  title: "High School Students",
                  content: "High‐school students, whose inquisitiveness will be triggered, possibly motivating them to take up higher‐studies."
                },
                {
                  title: "Researchers",
                  content: "Researchers in different institutes who can collaborate and share resources."
                },
                {
                  title: "Engineering Colleges",
                  content: "Different engineering colleges who can benefit from the content and related teaching resources."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-medium text-blue-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Infrastructure Note */}
          <motion.div 
            className="bg-green-50 p-6 rounded-lg mt-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-medium text-green-800 mb-3">
              No Additional Infrastructure Required
            </h3>
            <p className="text-gray-700">
              Virtual Labs do not require any additional infrastructural setup for
              conducting experiments at user premises. The simulations-based experiments
              can be accessed remotely via internet.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Virtual Labs
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
