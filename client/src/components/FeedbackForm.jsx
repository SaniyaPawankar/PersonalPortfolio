import React, { useState } from "react";
import axios from "axios"

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5020/api/submit_review", formData)
      alert("Feedback submitted!")
    } catch (err) {
      console.error("Error while submitting feedback", err)
    }
    setFormData({
      name: "",
      email: "",
      feedback: "",
    })
  };



  return (
    <div
      id="feedback"
      className="relative w-full min-h-screen overflow-hidden
      px-6 py-24 text-black"
    >
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl
        bg-[radial-gradient(circle_at_right,rgba(168,85,247,0.18),transparent_70%)]">
      </div>

      <div className="relative max-w-[700px] sm:w-[500px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl  font-bold">
            Leave a <span className="text-violet-400">Review</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Share your experience working with me
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md
          rounded-xl p-8 shadow-lg flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="bg-black/40 border border-white/10 rounded-md px-4 py-3
            text-white outline-none focus:border-violet-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="bg-black/40 border border-white/10 rounded-md px-4 py-3
            text-white outline-none focus:border-violet-400"
          />

          <textarea
            name="feedback"
            value={formData.feedback}
            rows="4"
            placeholder="Your feedback"
            required
            onChange={handleChange}
            className="bg-black/40 border border-white/10 rounded-md px-4 py-3
            text-white outline-none focus:border-violet-400"
          />

          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700
            transition rounded-md py-3 font-semibold"
          >
            Submit Feedback
          </button>
        </form>

      </div>
    </div>
  );
};

export default FeedbackForm;
