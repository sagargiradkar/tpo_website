import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    subject: "",
    date: "",
    faculty: "",
    mobile: "",
    email: "",
    rollNo: "",
    companyName: "", // Added Company Name field
    interviewExperience: "", // Added Interview Experience field
    suggestions: "", // Added Suggestions field
    ratings: {},
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/tpo-feedback", // Replace with your actual API endpoint
        formData
      );
      toast.success("Feedback submitted successfully!", {
        position: "top-center",
        duration: 3000,
      });

      setFormData({
        name: "",
        class: "",
        subject: "",
        date: "",
        faculty: "",
        mobile: "",
        email: "",
        rollNo: "",
        companyName: "",
        interviewExperience: "",
        suggestions: "",
        ratings: {},
      });
      window.location.reload();
    } catch (error) {
      toast.error("Error submitting feedback.", {
        position: "top-center",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-10 mt-16 max-w-full sm:max-w-3xl"
      initial="hidden"
      animate="visible"
    >
      <Toaster />
      <motion.div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">TPO Feedback Form</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "name",
            "class",
            "subject",
            "date",
            "faculty",
            "mobile",
            "email",
            "rollNo",
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-600">
                {field.replace(/\b[a-z]/g, (char) => char.toUpperCase())}
                <span className="text-red-500">*</span>
              </label>
              <input
                type={field === "date" ? "date" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Interview Experience <span className="text-red-500">*</span>
          </label>
          <textarea
            name="interviewExperience"
            value={formData.interviewExperience}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Suggestions
          </label>
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-6">
          <motion.button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                  ></path>
                </svg>
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit Feedback"
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default FeedbackForm;
