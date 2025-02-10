import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "One of the primary advantages associated with the utilization of Virtual Laboratory is the ability for students to engage in self-paced learning. This technology facilitates students in engaging in studying, preparing for, and doing laboratory experiments at their own convenience, regardless of time and location.",
      author: "Dr Mohd Zubair Ansari",
      institution: "National Institute of Technology Srinagar",
    },
    {
      quote:
        "Virtual Labs are implemented in USAR, GGSIPU and are useful in understanding the theories and concepts of science or other subjects that cannot be studied alone only by textbooks. It has the great potential to enhance actual laboratory experiences. Furthermore, the best progressive learning and performance for real experiments appears when the virtual laboratory preceded paper-based practical experiments.",
      author: "Dr. Khyati Chopra",
      institution: "USAR GGSIPU",
    },
    {
      quote:
        "Virtual Labs is the knowledge seed for the students of the science and technology domain. Such an astonishing platform would enlighten the learning path of the students before they move to the real lab for the experiments. The students may realize the look and feel of the real lab and optimize the efforts, time, and funds involved in performing the real labs. The best part of Virtual Labs is to use it with personal comfort and convenience.",
      author: "Dr. Pankaj K. Goswami",
      institution: "Amity University Uttar Pradesh, Lucknow",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const quoteIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-[1650px] mx-auto px-4 py-12 bg-gray-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-blue-800 text-center mb-12"
      >
        Testimonials
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <motion.div
              variants={quoteIconVariants}
              className="mb-4 text-blue-600"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </motion.div>

            {/* Quote Text */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 mb-6 leading-relaxed"
            >
              "{testimonial.quote}"
            </motion.blockquote>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <p className="font-semibold text-blue-800">
                {testimonial.author}
              </p>
              <p className="text-gray-600 text-sm">{testimonial.institution}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          more
          <motion.svg
            animate={{ rotate: [0, 180, 360] }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
