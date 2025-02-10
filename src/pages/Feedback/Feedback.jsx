import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    subject: "",
    date: "",
    faculty: "",
    mobile: "",
    email: "",
    rollNo: "",
    experiments: [{ id: 1, labName: "", experimentName: "" }],
    ratings: {},
    feedback: {
      helpfulness: "",
      difficulties: "",
      interesting: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addExperiment = () => {
    setFormData((prev) => ({
      ...prev,
      experiments: [
        ...prev.experiments,
        { id: prev.experiments.length + 1, labName: "", experimentName: "" }, // Add default values
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true before submitting

    try {
      // Sending form data to the API using axios
      const response = await axios.post(
        "https://vlabbackend.vercel.app/api/feedback",
        formData
      );
      toast.success("Feedback submitted successfully!", {
        position: "top-center",
        duration: 3000,
      });

      // Reset form fields after successful submission
      setFormData({
        name: "",
        class: "",
        subject: "",
        date: "",
        faculty: "",
        mobile: "",
        email: "",
        rollNo: "",
        experiments: [{ id: 1, labName: "", experimentName: "" }],
        ratings: {},
        feedback: {
          helpfulness: "",
          difficulties: "",
          interesting: "",
        },
      });

      // Reload the page after submission
      window.location.reload();
    } catch (error) {
      toast.error("Error submitting feedback.", {
        position: "top-center",
        duration: 3000,
      });
    } finally {
      setLoading(false); // Reset loading state after response
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
        <h1 className="text-3xl font-bold text-gray-800">Feedback Form</h1>
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
                {field.replace(/\b[a-z]/g, (char) => char.toUpperCase())} <span className="text-red-500">*</span>
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
        <div>
          <h4 className="text-lg font-medium text-gray-700 mb-4">
            Details of Experiments Performed
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Sr.No
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Name of the Lab <span className="text-red-500">*</span>
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Name of the Experiment <span className="text-red-500">*</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.experiments.map((exp, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border border-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-200">
                      <input
                        type="text"
                        value={exp.labName}
                        onChange={(e) => {
                          const updatedExperiments = [...formData.experiments];
                          updatedExperiments[index].labName = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            experiments: updatedExperiments,
                          }));
                        }}
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </td>
                    <td className="px-4 py-2 border border-gray-200">
                      <input
                        type="text"
                        value={exp.experimentName}
                        onChange={(e) => {
                          const updatedExperiments = [...formData.experiments];
                          updatedExperiments[index].experimentName =
                            e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            experiments: updatedExperiments,
                          }));
                        }}
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <motion.button
            type="button"
            onClick={addExperiment}
            className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Experiment
          </motion.button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 overflow-x-auto">
          <div className="mt-8">
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              Please indicate your feedback with the following statements <span className="text-red-500">*</span>
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border border-gray-200 w-1/3">
                      Questionnaire
                    </th>
                    <th className="px-4 py-2 border border-gray-200">
                      Excellent
                    </th>
                    <th className="px-4 py-2 border border-gray-200">V.Good</th>
                    <th className="px-4 py-2 border border-gray-200">Good</th>
                    <th className="px-4 py-2 border border-gray-200">Fair</th>
                    <th className="px-4 py-2 border border-gray-200">Poor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "The degree to which the actual lab environment is simulated",
                    "The manuals were found to be helpful",
                    "The result of experiment were easily interpretable",
                  ].map((question, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border border-gray-200 w-1/3">
                        {question}
                      </td>
                      {["Excellent", "V.Good", "Good", "Fair", "Poor"].map(
                        (rating) => (
                          <td
                            className="px-4 py-2 border border-gray-200 text-center"
                            key={rating}
                          >
                            <input
                              type="radio"
                              name={`rating-${index}`}
                              value={rating}
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  ratings: {
                                    ...prev.ratings,
                                    [question]: e.target.value,
                                  },
                                }));
                              }}
                            />
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-700 mb-4">
            Please give your feedback with the following statements <span className="text-red-500">*</span>
          </h4>
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border border-gray-200">
                  Questionnaire
                </th>
                <th className="px-4 py-2 border border-gray-200">Yes</th>
                <th className="px-4 py-2 border border-gray-200">No</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Did you get the feeling of actual lab while performing the experiments?",
                "Do you think performing experiments through Virtual Labs is more challenging than the real lab experiments?",
                "Do you think performing experiments through Virtual Labs gives scope for more innovative and creative research work?",
                "Did you go through the manual /step by step method before performing the live experiments?",
                "Do you find the theory part useful?",
              ].map((question, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-200">
                    {question}
                  </td>
                  {["Yes", "No"].map((answer) => (
                    <td
                      className="px-4 py-2 border border-gray-200 text-center"
                      key={answer}
                    >
                      <input
                        type="radio"
                        name={`yesno-${index}`}
                        value={answer}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            ratings: {
                              ...prev.ratings,
                              [question]: e.target.value,
                            },
                          }));
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            How helpful is the Virtual Lab? <span className="text-red-500">*</span>
          </label>
          <textarea
            name="helpfulness"
            value={formData.feedback.helpfulness}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                feedback: { ...prev.feedback, helpfulness: e.target.value },
              }))
            }
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            Specify the problems/difficulties you faced while performing the
            experiments. <span className="text-red-500">*</span>
          </label>
          <textarea
            name="difficulties"
            value={formData.feedback.difficulties}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                feedback: { ...prev.feedback, difficulties: e.target.value },
              }))
            }
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            Indicate aspects you found interesting about the experiments.<span className="text-red-500">*</span>
          </label>
          <textarea
            name="interesting"
            value={formData.feedback.interesting}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                feedback: { ...prev.feedback, interesting: e.target.value },
              }))
            }
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <motion.button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            disabled={loading} // Disable the button while loading
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

export default Feedback;
