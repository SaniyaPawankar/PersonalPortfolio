import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {

    const SERVER_URL = "http://localhost:5020";

    const navigate = useNavigate()
    const { id } = useParams();

    const [project, setProject] = useState(null);

    const isAdmin = !!localStorage.getItem("adminToken");

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

            await axios.delete(`${SERVER_URL}/api/projects/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            alert("Project deleted successfully!")
            navigate("/projects")

        } catch (err) {
            console.log(err);
            alert("Failed to delete project")
        }
    }

    if (!project) {
        return (
            <div className="text-center text-body py-20">
                Loading project details...
            </div>
        )
    }

    return (

        <section className="py-20 px-6 bg-section min-h-screen">

            <div className="max-w-6xl mx-auto">

                {/* Admin Buttons */}
                {isAdmin && (
                    <div className="mb-6 flex gap-3">

                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition"
                            onClick={() => navigate(`/projects/${id}/edit`)}
                        >
                            Update
                        </button>

                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>
                )}

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-12">
                    {project.title}
                </h2>

                {/* Main Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Image */}
                    <div className="bg-white rounded-xl shadow-md p-4">
                        <img
                            src={`${SERVER_URL}${project.image}`}
                            alt={project.title}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col">

                        {/* Description */}
                        <p className="text-body text-lg leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.techStack?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md"
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
                                    rel="noreferrer"
                                    className="flex-1 text-center border border-primary text-primary px-5 py-3 rounded-md hover:bg-section transition"
                                >
                                    GitHub Repo
                                </a>
                            )}

                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 text-center bg-primary text-white px-5 py-3 rounded-md hover:bg-accent transition"
                                >
                                    Live Demo
                                </a>
                            )}

                        </div>

                    </div>

                </div>

                {/* Reviews */}
                <div className="mt-20">

                    <h3 className="text-2xl font-semibold text-heading mb-8">
                        Reviews
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <p className="text-body">
                                “Very clean UI and smooth user experience. Loved the layout!”
                            </p>

                            <p className="text-sm text-primary mt-3">
                                — Anonymous User
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <p className="text-body">
                                “Great project structure and responsive design.”
                            </p>

                            <p className="text-sm text-primary mt-3">
                                — Developer Review
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default ProjectDetails