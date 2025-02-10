import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is the role of the Training and Placement Office (TPO)?",
      answer:
        "The TPO bridges the gap between students and industry, facilitating placements and providing training to prepare students for their careers.",
    },
    {
      question: "How does the TPO help students get placed?",
      answer:
        "The TPO organizes campus recruitment drives, conducts training sessions, and provides resources to help students prepare for interviews and secure job offers.",
    },
    {
      question: "What kind of training programs are offered by the TPO?",
      answer:
        "The TPO offers a variety of training programs, including workshops on resume building, interview skills, communication skills, and technical skills.",
    },
    {
      question: "How can I register with the TPO?",
      answer:
        "Students can register with the TPO by filling out the registration form available on the TPO website or by visiting the TPO office.",
    },
    {
      question:
        "What is the eligibility criteria for participating in campus recruitment drives?",
      answer:
        "The eligibility criteria for participating in campus recruitment drives vary depending on the company. However, generally, students with a good academic record and no backlogs are eligible to participate.",
    },
    {
      question: "How do I prepare for campus placements?",
      answer:
        "To prepare for campus placements, students should focus on improving their academic performance, developing their technical and soft skills, and practicing for interviews. The TPO provides resources and training to help students prepare.",
    },
    {
      question: "What if I have more questions?",
      answer:
        "You can contact the TPO office directly during working hours or email your queries to the TPO support team.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-20 mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <motion.button
                className="w-full p-6 text-left focus:outline-none flex justify-between items-center"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <motion.svg
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 pb-6"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 whitespace-pre-line"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
