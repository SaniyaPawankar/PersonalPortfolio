import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Client",
    review:
      "John delivered an excellent MERN application. Clean UI, scalable backend, and timely delivery.",
  },
  {
    name: "Sneha Verma",
    role: "Startup Founder",
    review:
      "Very professional and skilled developer. Great understanding of React and backend APIs.",
  },
  {
    name: "Rahul Mehta",
    role: "Team Lead",
    review:
      "Strong problem-solving skills and clean code practices. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen overflow-hidden
      bg-gradient-to-b from-black via-[#12001f] to-[#0b0014]
      px-6 py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl 
        bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.18),transparent_70%)]">
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What People <span className="text-violet-400">Say</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Feedback from clients & collaborators
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10
              rounded-xl p-6 shadow-md hover:border-violet-400/40
              transition-all duration-300"
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                “{item.review}”
              </p>
              <div>
                <h4 className="font-semibold text-white">{item.name}</h4>
                <span className="text-sm text-gray-400">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
