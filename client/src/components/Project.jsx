import React, { useEffect, useState } from 'react'
import axios from "axios"

const Project = () => {

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

  return (
    <div id="project" className='bg-slate-100 w-full px-4 sm:px-6 lg:px-10 py-14'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center'>
        Projects
      </h2>
      <p className='text-center text-gray-600 mt-2'>
        Some of my recent work
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5 lg:gap-12 sm:mx-6 sm:my-8 lg:m-14'>
        {projects.map(project => (
          <div
            key={project._id}
            className='bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col'
          >
            {/* Image */}
            <img
              src={`${SERVER_URL}${project.image}`}
              alt={project.title}
              className='w-full h-48 object-cover p-4 rounded-md'
            />

            {/* Content */}
            <div className='p-5 flex flex-col flex-1'>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {project.title}
              </h3>

              <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-slate-300 text-black text-xs px-3 py-1 rounded-md'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className='mt-auto flex gap-3'>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className='flex-1 text-center font-bold border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100'
                  >
                    GitHub
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className='flex-1 text-center font-bold bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800'
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
  )
}

export default Project
