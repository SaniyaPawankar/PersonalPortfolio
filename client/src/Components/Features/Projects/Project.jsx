import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Project = () => {

  const isAdmin = !!localStorage.getItem("adminToken")
  const [showAdd, setShowAdd] = useState(false)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5020/api/projects")
        setProjects(res.data.projects)
      } catch (err) {
        console.log(err)
      }
    }
    getProjects()
  }, [])

  const SERVER_URL = "http://localhost:5020"
  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-[80vh] py-20 px-6 bg-white">

      {/* Section container aligned with Hero/About */}
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div
          className="flex justify-center items-center gap-4 mb-3"
          onMouseEnter={() => setShowAdd(true)}
          onMouseLeave={() => setShowAdd(false)}
        >

          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center">
            Projects
          </h2>

          {isAdmin && showAdd && (
            <button
              onClick={() => navigate("/addprojects")}
              className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-accent transition"
            >
              Add Project
            </button>
          )}

        </div>

        <p className="text-center text-body mb-10">
          Some of my recent work
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {projects.map(project => (
            <div
              key={project._id}
              className="bg-white border-2 border-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col cursor-pointer"
              onClick={() => navigate(`/projects/${project._id}`)}
            >

              {/* Image */}
              <div className="p-3">
                <img
                  src={`${SERVER_URL}${project.image}`}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="px-5 pb-5 flex flex-col flex-1">

                <h3 className="text-lg font-semibold text-heading mb-2">
                  {project.title}
                </h3>

                <p className="text-body text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center border border-primary text-primary px-3 py-2 rounded-md text-sm hover:bg-section transition"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center bg-primary text-white px-3 py-2 rounded-md text-sm hover:bg-accent transition"
                    >
                      Live
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Project