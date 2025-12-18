import React from "react";

const skills = [
  "HTML",
  "CSS / Tailwind",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen overflow-hidden
      bg-gradient-to-b from-black via-[#12001f] to-[#0b0014]
      px-6 py-24 text-white"
    >
      {/* Glow
      <div className="absolute inset-0 blur-3xl 
        bg-[radial-gradient(circle_at_right,rgba(168,85,247,0.18),transparent_70%)]">
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-violet-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center justify-center
              bg-white/5 backdrop-blur-md border border-white/10
              rounded-xl px-6 py-8 shadow-md
              hover:scale-105 hover:border-violet-400/40
              transition-all duration-300"
            >
              <span className="text-lg font-medium text-gray-200
                group-hover:text-violet-400 transition">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
