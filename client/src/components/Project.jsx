import React, { useEffect, useState } from 'react'
import axios from "axios"

const Project = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects
    }, [])

    const getProjects = async () => {
        try {
            const res = await axios.get("http://localhost:5020/api/projects")
            setProjects(res.data.projects)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='bg-slate-200 w-full max-h-screen p-10 text-black'>
            <h2 className='text-4xl text-center font-bold my-3'>Projects</h2>
            <p className='text-center'>Some of my recent work</p>
            <div className='grid grid-cols-1'>
                {
                    projects.map((project) => (
                        <div key={project._id} className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden'>
                            {/*--Image--*/}
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />

                            {/*--Content--*/}

                            <div className='p-5'>
                                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                                <p className='text-gray-600 text-sm mb-3'>
                                    {project.description}
                                </p>

                                {/*--Tech Stack--*/}
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {
                                        project.techStack.map((tech, index) => {
                                            <span key={index} className='bg-gray-700 text-gray-700 text-xs px-2 py-1 rounded'>
                                                {tech}
                                            </span>
                                        })
                                    }
                                </div>
                            </div>

                            {/*--Links--*/}
                            <div className='flex gap-3'>
                                {project.githubLink && (
                                    <a href={project.githubLink} className='px-4 py-2 text-sm border rounded hiver:bg-gray-100'>
                                        Github
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a href={project.liveLink} className='px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-100'>
                                        Live
                                    </a>
                                )}
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Project
