import React, { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5020/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.log(error);
      alert("Failed to send message");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-[80vh] py-20 px-6 bg-section">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-heading mb-6">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div>
              <label className="text-sm text-body">Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-body">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-body">Message</label>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white py-2 rounded-md hover:bg-accent transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>


        {/* Let's Work Together */}
        <div className="flex flex-col justify-center items-center text-center h-full px-6">

          <h2 className="text-3xl font-bold text-heading mb-4">
            Let's Work Together
          </h2>

          <p className="text-body mb-6 max-w-md">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            If you have something in mind, feel free to reach out.
          </p>

          <a
            href="../../../../public/Resume.pdf"
            download
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-accent transition"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;