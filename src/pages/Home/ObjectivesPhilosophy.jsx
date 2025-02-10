import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ObjectivesPhilosophy = () => {
  const [activeTab, setActiveTab] = useState('objectives');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-[1650px] mx-auto px-4 py-8"
    >
      {/* Tab Buttons */}
      <motion.div 
        className="flex mb-6 border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 font-semibold text-lg ${
            activeTab === 'objectives'
              ? 'text-blue-800 border-b-2 border-blue-800'
              : 'text-gray-600 hover:text-blue-800'
          }`}
          onClick={() => setActiveTab('objectives')}
        >
          OBJECTIVES
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 font-semibold text-lg ${
            activeTab === 'philosophy'
              ? 'text-blue-800 border-b-2 border-blue-800'
              : 'text-gray-600 hover:text-blue-800'
          }`}
          onClick={() => setActiveTab('philosophy')}
        >
          THE PHILOSOPHY
        </motion.button>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div className="mt-6">
          {/* Objectives Content */}
          {activeTab === 'objectives' && (
            <motion.div
              key="objectives"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              <motion.h2 
                variants={listItemVariants}
                className="text-3xl font-bold text-blue-800 mb-6"
              >
                Objectives
              </motion.h2>

              <motion.ol className="space-y-6 list-decimal pl-6">
                {[
                  "To provide remote-access to simulation-based Labs in various disciplines of Science and Engineering.",
                  "To enthuse students to conduct experiments by arousing their curiosity. This would help them in learning basic and advanced concepts through remote experimentation.",
                  "To provide a complete Learning Management System around the Virtual Labs where the students/ teachers can avail the various tools for learning, including additional web-resources, video-lectures, animated demonstrations and self-evaluation."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    className="text-gray-700 leading-relaxed"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>
          )}

          {/* Philosophy Content */}
          {activeTab === 'philosophy' && (
            <motion.div
              key="philosophy"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              <motion.h2 
                variants={listItemVariants}
                className="text-3xl font-bold text-blue-800 mb-6"
              >
                The Philosophy
              </motion.h2>

              <motion.div className="space-y-6">
                {[
                  "Good lab facilities and updated lab experiments are critical for any engineering college...",
                  "Yet another objective is to arouse the curiosity of the students...",
                  "Specifically, the Virtual Labs project addresses the following:"
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={listItemVariants}
                    className="text-gray-700 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}

                <motion.ul className="list-disc pl-6 space-y-3">
                  {[
                    "Access to online labs to those engineering colleges that lack these lab facilities",
                    "Access to online labs as a complementary facility to those colleges that already have labs",
                    "Training and skill-set augmentation through workshops and on-site/ online training"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={listItemVariants}
                      className="text-gray-700"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.p
                  variants={listItemVariants}
                  className="text-gray-700 leading-relaxed italic"
                >
                  Virtual labs are any place, any pace, any-time, any-type labs. It is a paradigm shift in student-centric, online education.
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ObjectivesPhilosophy;
