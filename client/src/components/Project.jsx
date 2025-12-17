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
    <div id="project" className="relative w-full overflow-hidden
                 bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black
                 px-6 py-20 ">
      <h2 className='text-3xl sm:text-4xl font-bold text-center text-purple-100'>
        Projects
      </h2>
      <p className='text-center text-gray-100 mt-2'>
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

















// import React, { useEffect, useState } from 'react'
// import axios from "axios"

// const Project = () => {

//   const [projects, setProjects] = useState([])

//   useEffect(() => {
//     const getProjects = async () => {
//       try {
//         const res = await axios.get("http://localhost:5020/api/projects")
//         setProjects(res.data.projects)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getProjects()
//   }, [])

//   const SERVER_URL = "http://localhost:5020"

//   return (
//     <div
//       id="project"
//       className="relative w-full overflow-hidden
//                  bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black
//                  px-6 py-20 text-white"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 blur-3xl 
//         bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_70%)]">
//       </div>

//       {/* Heading */}
//       <div className="relative z-10 text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold">
//           My <span className="text-violet-400">Projects</span>
//         </h2>
//         <p className="text-gray-400 mt-3">
//           Some of my recent work
//         </p>
//       </div>

//       {/* Project Grid */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
//                       gap-8 max-w-7xl mx-auto mt-14">
//         {projects.map(project => (
//           <div
//             key={project._id}
//             className="bg-white/5 backdrop-blur-md border border-white/10
//                        rounded-2xl shadow-lg hover:shadow-violet-500/20
//                        hover:-translate-y-2 transition-all duration-300
//                        overflow-hidden flex flex-col"
//           >
//             {/* Image */}
//             <img
//               src={`${SERVER_URL}${project.image}`}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Content */}
//             <div className="p-6 flex flex-col flex-1">
//               <h3 className="text-xl font-semibold mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-gray-400 text-sm mb-4 line-clamp-3">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.techStack?.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="bg-violet-500/10 text-violet-300
//                                text-xs px-3 py-1 rounded-full border border-violet-500/20"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="mt-auto flex gap-3">
//                 {project.githubLink && (
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex-1 text-center font-semibold
//                                border border-white/20 rounded-lg
//                                px-4 py-2 text-sm
//                                hover:bg-white/10 transition"
//                   >
//                     GitHub
//                   </a>
//                 )}

//                 {project.liveLink && (
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex-1 text-center font-semibold
//                                bg-violet-600 hover:bg-violet-700
//                                rounded-lg px-4 py-2 text-sm transition"
//                   >
//                     Live
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Project

