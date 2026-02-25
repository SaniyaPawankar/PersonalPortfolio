import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {

    const SERVER_URL = "http://localhost:5020";

    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id);
    // Extracting project id from the url , which helps to fetch only one project details

    const [project, setProject] = useState(null);

    const isAdmin = !!localStorage.getItem("adminToken");
    // Checking  admin login status from localStorage



    useEffect(() => {
        const getProjectDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5020/api/projects/${id}`)
                setProject(res.data.project)
            } catch (err) {
                console.log("Error while fetching the project details", err)
            }
        }
        getProjectDetails()
    }, [id])

    const handleDelete = async () => {
        const deleteProject = window.confirm(
            "Are you sure you want to delete this project?"
        )

        if (!deleteProject) return
        try {
            const token = localStorage.getItem("adminToken")
            await axios.delete(`${SERVER_URL}/api/projects/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                }
            )
            alert("Project deleted successfully!")
            navigate("/projects")

        } catch (err) {
            console.log(err);
            alert("Failed to delete project")
        }
    }

    if (!project) {
        return (
            <div className='text-center text-gray-300 py-20'>
                Loading project details....
            </div>
        )
    }



    return (
        <div className="w-full min-h-screen px-6 py-20 ">

            {/* Admin Actions*/}

            {
                isAdmin && (
                    <div className='max-w-6xl mx-auto mb-6 flex gap-3'>
                        <button className='bg-purple-500 hover:bg-purple-600 text-black font-semibold px-4 py-2 rounded-lg'
                            onClick={() => navigate(`/projects/${id}/edit`)}>Update</button>
                        <button className='bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg'
                            onClick={handleDelete}>Delete</button>
                    </div>
                )
            }

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-100 text-center mb-12">
                {project.title}
            </h2>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Image Card */}
                <div className="bg-[#14001f] p-4 rounded-2xl shadow-lg">
                    <img
                        src={`${SERVER_URL}${project.image}`}
                        alt={project.title}
                        className="w-full h-72 object-cover rounded-xl"
                    />
                </div>

                {/* Project Info */}
                <div className="flex flex-col justify-between">

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.techStack?.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-purple-900/40 text-purple-200 
            px-4 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="mt-8 flex gap-4">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                className="flex-1 text-center border border-gray-500
            text-gray-200 px-5 py-3 rounded-lg hover:bg-gray-800"
                            >
                                GitHub Repo
                            </a>
                        )}

                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                className="flex-1 text-center bg-purple-600
            text-white px-5 py-3 rounded-lg hover:bg-purple-700"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="max-w-6xl mx-auto mt-20">

                <h3 className="text-2xl font-semibold text-purple-100 mb-6">
                    Reviews
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Review Card */}
                    <div className="bg-[#14001f] p-6 rounded-xl shadow-md">
                        <p className="text-gray-300">
                            “Very clean UI and smooth user experience. Loved the layout!”
                        </p>
                        <p className="text-sm text-purple-400 mt-3">— Anonymous User</p>
                    </div>

                    <div className="bg-[#14001f] p-6 rounded-xl shadow-md">
                        <p className="text-gray-300">
                            “Great project structure and responsive design.”
                        </p>
                        <p className="text-sm text-purple-400 mt-3">— Developer Review</p>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ProjectDetails
