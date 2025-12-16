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
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover'/>

                            {/*--Content--*/}
                            
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Project
