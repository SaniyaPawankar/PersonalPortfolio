import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // later connect to backend API
  };

  return (
    <section
      id="feedback"
      className="relative w-full min-h-screen overflow-hidden
      bg-gradient-to-b from-black via-[#12001f] to-[#0b0014]
      px-6 py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl 
        bg-[radial-gradient(circle_at_right,rgba(168,85,247,0.18),transparent_70%)]">
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Leave a <span className="text-violet-400">Review</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Share your experience working with me
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-white/10
          rounded-xl p-8 shadow-lg flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="bg-black/40 border border-white/10 rounded-md px-4 py-3
            text-white outline-none focus:border-violet-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="bg-black/40 border border-white/10 rounded-md px-4 py-3
            text-white outline-none focus:border-violet-400"
          />

          <textarea
            name="message"
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
    </section>
  );
};

export default FeedbackForm;
