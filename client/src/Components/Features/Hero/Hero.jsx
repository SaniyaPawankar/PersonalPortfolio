

const Hero = () => {

    return (
        <div
            id="home"
            className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
                Hi, I'm Saniya Pawankar
            </h1>

            <h2 className="text-2xl font-semibold text-primary mb-4">
                Full Stack Developer (MERN) | Final Year Student
            </h2>

            <p className="text-body text-lg mb-6">
                I build responsive full-stack web applications using MongoDB,
                Express, React, and Node.js.
                <br />
                Currently focused on improving DSA and building real-world projects
                for placements.
            </p>

            <div className="flex gap-4">
                <a
                    href="#projects"
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-accent"
                >
                    View My Projects
                </a>

                <a
                    href="#contact"
                    className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-section"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}

export default Hero


