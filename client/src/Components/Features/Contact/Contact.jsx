import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] py-20 px-6 bg-section">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-heading mb-6">
            Contact Me
          </h2>

          <form className="flex flex-col gap-5">

            <div>
              <label className="text-sm text-body">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-body">Email</label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-body">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white py-2 rounded-md hover:bg-accent transition"
            >
              Send Message
            </button>

          </form>
        </div>


        {/* Let's Work Together */}
        <div className="flex flex-col justify-center items-center text-center h-full px-6">

          <h2 className="text-3xl font-bold text-heading mb-4">
            Let's Work Together
          </h2>

          <p className="text-body mb-6 max-w-md">
            I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
            If you have something in mind, feel free to reach out.
          </p>

          <a
            href="/resume.pdf"
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