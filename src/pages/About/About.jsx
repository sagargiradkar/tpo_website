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
 About Our Training & Placement Cell
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
 The Training and Placement Cell is dedicated to facilitating the career aspirations of our students. We serve as a bridge between students and the corporate world, providing comprehensive training and placement opportunities. Our mission is to equip students with the necessary skills and knowledge to excel in their careers.
 </motion.p>


 {/* Key Functions Section */}
 <motion.div
 className="my-8"
 variants={containerVariants}
 >
 <motion.h2
 className="text-2xl font-semibold text-gray-800 mb-4"
 variants={itemVariants}
 >
 Key Functions
 </motion.h2>
 <motion.div
 className="grid md:grid-cols-2 gap-6"
 variants={containerVariants}
 >
 {/* Function Cards */}
 {[
 {
 title: "Training Programs",
 content: "Organizing training programs to enhance students' technical and soft skills."
 },
 {
 title: "Industry Interaction",
 content: "Facilitating interactions with industry experts through workshops and seminars."
 },
 {
 title: "Placement Drives",
 content: "Conducting on-campus and off-campus placement drives to connect students with potential employers."
 },
 {
 title: "Career Counseling",
 content: "Providing personalized career counseling to help students make informed decisions."
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
 Dedicated Infrastructure
 </h3>
 <p className="text-gray-700">
 We have a dedicated infrastructure to support training and placement activities, including well-equipped training rooms and interview cabins.
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
 Explore Placement Opportunities
 </motion.button>
 </motion.div>
 </div>
 </div>
 );
}


export default About;
