import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementsAndVideo = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const announcementVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const videoVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const newBadgeVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
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
      <div className="grid md:grid-cols-2 gap-8">
        {/* Announcements Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-lg shadow-lg transform-gpu"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-blue-800 mb-6"
          >
            Announcements
          </motion.h2>

          <motion.div className="space-y-6">
            {/* First Announcement */}
            <motion.div
              variants={announcementVariants}
              whileHover="hover"
              className="transform-gpu"
            >
              <p className="text-gray-700">
                * Various projects/ICT initiatives of the Ministry of Education are available on the link given here.{' '}
                <motion.a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Please click here for more details
                </motion.a>
                .
              </p>
            </motion.div>

            {/* Second Announcement */}
            <motion.div
              variants={announcementVariants}
              whileHover="hover"
              className="transform-gpu"
            >
              <p className="text-gray-700">
                * Please click here to see the tutorial for using the Flash-based Labs through Virtual Box.
              </p>
            </motion.div>

            {/* Third Announcement */}
            <motion.div
              variants={announcementVariants}
              whileHover="hover"
              className="flex items-start space-x-2 transform-gpu"
            >
              <p className="text-gray-700">
                To enroll as a Nodal Center, kindly submit the Expression of Interest (EOI) Form_2025{' '}
                <motion.span
                  variants={newBadgeVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded"
                >
                  NEW
                </motion.span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* YouTube Video Section */}
        <motion.div
          variants={videoVariants}
          className="aspect-video"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.iframe
            variants={itemVariants}
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/FT2e3UvKteM"
            title="Virtual Labs Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></motion.iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnnouncementsAndVideo;
