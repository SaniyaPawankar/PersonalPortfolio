import React from "react";
import ProfileImage from "../../../assets/ProfileImage.jpeg"
import ProfileImage2 from "../../../assets/ProfileImage2.jpeg"

const About = () => {
    return (
        <section id="about" className="bg-section min-h-[80vh] py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="flex flex-col gap-6">

                    <h2 className="text-4xl font-bold text-heading">
                        About Me
                    </h2>

                    <p className="text-body text-[15px] leading-relaxed">
                        I am a final-year Computer Science student with a strong interest
                        in full-stack web development. I have completed a MERN stack
                        course and built multiple projects involving authentication,
                        CRUD operations, and REST APIs.
                        <br /><br />
                        Along with development, I am actively preparing for Data
                        Structures and Algorithms in JavaScript for placement
                        opportunities. I enjoy learning by building and continuously
                        improving my problem-solving skills.
                    </p>

                    {/* Cards */}
                    <div className="flex gap-6 mt-4">

                        <div className="flex items-center gap-3 bg-white shadow-md px-6 py-3 rounded-lg">
                            <i className="fa-solid fa-computer text-primary"></i>
                            <span className="text-heading text-[15px]">
                                B.Tech in Computer Science
                            </span>
                        </div>

                        <div className="flex items-center gap-3 bg-white shadow-md px-6 py-3 rounded-lg">
                            <i className="fa-regular fa-circle-user text-primary"></i>
                            <span className="text-heading text-[15px]">
                                MERN Stack Developer
                            </span>
                        </div>

                    </div>

                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="w-64 h-64 bg-white rounded-xl shadow-md flex items-center justify-center">

                        <img
                            src={ProfileImage2}
                            alt="Saniya Pawankar"
                            className="w-56 h-56 object-cover rounded-xl"
                        />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;