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
    <section id="skills" className="py-20 px-6 min-h-[80vh] bg-section">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-4">
          Skills
        </h2>

        <p className="text-center text-body mb-12">
          Technologies and tools I work with
        </p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-md
                hover:shadow-lg
                transition
                duration-300
                py-8
                text-center
                cursor-pointer
              "
            >
              <span className=" font-semibold text-heading">
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