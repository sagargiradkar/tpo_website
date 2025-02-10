import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqs = [
    {
      question: "How can I access the Virtual Labs?",
      answer: "All Virtual Labs can be accessed through a common website: www.vlab.co.in. At the user end, a PC/Smartphone and broadband connectivity enables the user to access Virtual Labs."
    },
    {
      question: "How I can find a lab of my interest?",
      answer: `The Virtual labs are divided into two categories on the Virtual Labs home page (www.vlab.co.in):
      
      1. Discipline Wise
      2. Institute Wise
      
      The user can click on any of the categories to find out the lab of their preference. The user can also search for the virtual labs on the home page itself using two search options:
      
      • Search by the name of the Virtual Lab
      • Search by Discipline`
    },
    {
      question: "Is it free to use?",
      answer: "Yes, it is free of cost to the user."
    },
    {
      question: "What are the software requirements for Virtual Labs?",
      answer: "The Virtual Labs do not require any specific software. Few labs that have software dependency will have a free downloadable link to that software."
    },
    {
      question: "When can we use the Virtual Labs?",
      answer: "Virtual Labs can be accessed and used at anytime and anywhere with the help of the system and internet connection. The simulation-based labs are available 24x7, including weekends."
    },
    {
      question: "What do I do if I am stuck?",
      answer: "The users can email their queries to the Virtual Labs support team at support@vlab.co.in."
    },
    {
      question: "How do I register for using the Virtual Labs?",
      answer: "The user can directly perform the experiment. On the other hand, some of the simulation virtual labs require registration, for which the user can go to the respective website and do a one-time registration."
    },
    {
      question: "How do I derive the maximum benefit from Virtual Labs?",
      answer: "To derive a maximum learning experience, the users are advised to first read all the instructions for conducting the labs. There are 'step-by-step' instructions available in each lab to assist the users."
    },
    {
      question: "I already have a Physical Lab in my college/institute. What benefit will Virtual Lab provide?",
      answer: "Virtual Lab is a complete Learning Management System. All the relevant information, including the theory, lab manual, additional web resources, video lectures, animated demonstrations, and self-evaluation, are available at a single place. Virtual Labs can be used in a complementary fashion to augment the efficacy of theory-based lectures. Virtual Labs can be effectively used to give lab demonstrations to large classes."
    },
    {
      question: "How to enroll as a Nodal Centre?",
      answer: "Institute can enroll as a Nodal Centre by submitting an Expression of Interest (EOI) form which is available on the website under the heading of Become a Nodal Centre. The filled EOI can be submitted to the support email id i.e., support@vlab.co.in."
    }
  ];

  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
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
  
    const contentVariants = {
      hidden: { opacity: 0, height: 0 },
      visible: {
        opacity: 1,
        height: "auto",
        transition: {
          duration: 0.3
        }
      }
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
             <h1 className="text-4xl font-bold text-gray-900 mb-4"> Frequently Asked Questions</h1>
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
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
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
  