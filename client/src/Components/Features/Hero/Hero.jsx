// import pcDisplay from "../../../assets/pc-display.jpg"
import developer from "../../../assets/developerWorkspace.jpg"
const Hero = () => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-6 bg-bg"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div className="flex justify-center">
                    <div className="w-[400px] h-[270px] rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center">

                        {/* Replace this src later */}
                        <img
                            src={developer}
                            alt="Hero Illustration"
                            className="w-full h-full object-cover"
                        />

                    </div>
                </div>



                {/* Right Image Section */}
                <div>
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
                            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-accent transition"
                        >
                            View My Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-section transition"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero