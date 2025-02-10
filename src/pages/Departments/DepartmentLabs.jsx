// src/pages/DepartmentLabs.js
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DepartmentLabs = () => {
  const { department } = useParams();
  const [expandedLab, setExpandedLab] = useState(null);
  const navigate = useNavigate();

  const labsList = {
    "computer-science": [
      {
        id: "php-lab",
        name: "PHP LAB",
        institute: "Open Lab",
        referenceBooks: [
          "PHP: The Complete Reference by Steven Holzner",
          "Learning PHP, MySQL & JavaScript by Robin Nixon",
          "PHP and MySQL Web Development by Luke Welling and Laura Thomson",
          "Modern PHP by Josh Lockhart",
        ],
        syllabus: [
          "Introduction to PHP: Basics, Syntax, Variables, and Data Types",
          "Control Structures: Conditionals, Loops, and Switch Statements",
          "Functions: User-defined Functions, Built-in Functions, and Scope",
          "Working with Forms: GET and POST Methods, Form Validation",
          "Database Connectivity: Connecting to MySQL, CRUD Operations",
          "Session Management: Cookies and Sessions",
          "File Handling: Reading, Writing, and Uploading Files",
          "Error Handling: Exception Handling, Custom Errors",
          "Object-Oriented PHP: Classes, Objects, Inheritance, and Interfaces",
          "PHP with AJAX: Introduction and Data Retrieval",
          "Security in PHP: SQL Injection, XSS, and Input Sanitization",
        ],
        url: "https://php-vlab-pvgcoet.vercel.app/",
      },
      {
        id: "Statistics-lab",
        name: "Statitics Lab",
        institute: "Open Lab",
        referenceBooks: [
          "Introduction to Probability and Statistics by William Mendenhall and Robert J. Beaver",
          "Statistics for Business and Economics by Paul Newbold, William L. Carlson, and Betty Thorne",
          "Probability and Statistics for Engineers and Scientists by Ronald E. Walpole",
          "Applied Statistics and Probability for Engineers by Douglas C. Montgomery",
        ],
        syllabus: [
          "Introduction to Statistics: Data Types, Descriptive Statistics",
          "Measures of Central Tendency: Mean, Median, Mode",
          "Measures of Dispersion: Variance, Standard Deviation, and Range",
          "Probability Theory: Basic Concepts, Theorems, and Distributions",
          "Random Variables: Discrete and Continuous Distributions",
          "Hypothesis Testing: Null and Alternative Hypotheses, p-value",
          "Correlation Analysis: Pearson and Spearman Correlation",
          "Regression Analysis: Simple Linear and Multiple Regression",
          "Analysis of Variance (ANOVA): One-way and Two-way ANOVA",
          "Sampling Methods: Techniques and Sample Size Determination",
          "Time Series Analysis: Trend Analysis and Seasonal Variations",
        ],
        url: "/",
      },
      // ... other labs
    ],
  };

  const toggleLab = (labName) => {
    setExpandedLab(expandedLab === labName ? null : labName);
  };

  return (
    <div className="max-w-[1650px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 mb-8 text-sm">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <span className="text-gray-500">»</span>
        <span className="text-gray-700">Broad Areas of Virtual Labs</span>
      </div>

      {/* Labs List */}
      <div className="space-y-4">
        {labsList[department]?.map((lab, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <div className="p-4">
                  {/* Lab Name as Link */}
                  <Link to={lab.url} className="group block">
                    <h3 className="text-xl font-semibold text-purple-800 group-hover:text-purple-600 transition-colors duration-200">
                      {lab.name}
                    </h3>
                    <div className="mt-1 text-sm text-gray-500 group-hover:text-gray-700">
                      Click to open lab
                    </div>
                  </Link>

                  {/* Expandable Sections */}
                  <div className="mt-4 space-y-2">
                    <button
                      onClick={() => toggleLab(`${lab.name}-ref`)}
                      className="flex items-center space-x-2 text-orange-500 hover:text-orange-700"
                    >
                      <span>Reference Books</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedLab === `${lab.name}-ref` ? "rotate-180" : ""
                        }`}
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
                      </svg>
                    </button>

                    {expandedLab === `${lab.name}-ref` && (
                      <div className="pl-4 py-2 text-gray-700">
                        <ul className="list-disc pl-4">
                          {lab.referenceBooks.map((book, i) => (
                            <li key={i}>{book}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button
                      onClick={() => toggleLab(`${lab.name}-syl`)}
                      className="flex items-center space-x-2 text-orange-500 hover:text-orange-700"
                    >
                      <span>Syllabus Mapping</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedLab === `${lab.name}-syl` ? "rotate-180" : ""
                        }`}
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
                      </svg>
                    </button>

                    {expandedLab === `${lab.name}-syl` && (
                      <div className="pl-4 py-2 text-gray-700">
                        <ul className="list-disc pl-4">
                          {lab.syllabus.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Institute Name */}

              {/* Institute Name - Hidden on mobile */}
            <Link 
              to="https://php-vlab-pvgcoet.vercel.app/" 
              className="hidden md:block"
            >
              <div className="bg-gray-600 text-white p-6 text-center min-w-[200px]">
                <p>{lab.institute}</p>
              </div>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentLabs;
