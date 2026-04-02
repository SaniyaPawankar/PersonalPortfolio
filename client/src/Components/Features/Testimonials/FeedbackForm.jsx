import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { name, email, feedback } = formData;

    if (!name || !email || !feedback) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5020/api/submit_review",
        formData
      );

      alert(res.data.msg || "Review submitted successfully");

      setFormData({
        name: "",
        email: "",
        feedback: "",
      });

      navigate("/");
    } catch (err) {
      console.error("Error while submitting feedback", err);
      alert(err?.response?.data?.message || "Unable to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-section flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-8">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-primary hover:text-accent transition mb-4"
            >
              ← Back to Home
            </button>

            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Leave a Review
            </h2>
            <p className="text-body">
              Share your experience and feedback
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm text-body mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-body mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-body mb-1">Review</label>
              <textarea
                name="feedback"
                rows="5"
                value={formData.feedback}
                onChange={handleInputChange}
                placeholder="Write your feedback here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-primary resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white py-3 rounded-md hover:bg-accent transition disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;