import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProject = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: ""
    });

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true)

    // Fetch existing project
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get(`http://localhost:5020/api/projects/${id}`)

                const project = res.data.project;

                setFormData({
                    title: project.title,
                    description: project.description,
                    techStack: project.techStack.join(","),
                    githubLink: project.githubLink || "",
                    liveLink: project.liveLink || ""
                })

                setLoading(false)

            } catch (err) {
                console.log(err);
            }
        }; fetchProject()
    }, [id])

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setFormData(prev => ({ prev, [name]: value }))
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("techStack", formData.techStack);
        data.append("githubLink", formData.githubLink);
        data.append("liveLink", formData.liveLink);
        if (image) {
            data.append("image", image);
        }

        try {
            await axios.put(`https://localhost:5020/api/projects/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("/projects/${id}");
        } catch (err) {
            console.log(err);
        }
    }

    if (loading) {
        return <p className='text-center text-white'>Loading...</p>
    }

    return (
        <section className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-black via-[#0e001a] to-black px-4">

            <div className="w-full max-w-2xl bg-[#0f0f14] border border-white/10 
      rounded-2xl shadow-xl p-10 text-white">

                {/* Header */}
                <h2 className="text-3xl font-semibold mb-8 text-center">
                    Update <span className="text-violet-400">Project</span>
                </h2>

                <form onSubmit={handleFormSubmit} className="space-y-6">

                    {/* Title */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">
                            Project Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full bg-[#16161d] border border-white/10 
              rounded-lg px-4 py-2 focus:outline-none 
              focus:border-violet-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full bg-[#16161d] border border-white/10 
              rounded-lg px-4 py-2 focus:outline-none 
              focus:border-violet-500"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">
                            Tech Stack
                        </label>
                        <input
                            type="text"
                            name="techStack"
                            value={formData.techStack}
                            onChange={handleInputChange}
                            placeholder="MongoDB, Express, React, Node"
                            className="w-full bg-[#16161d] border border-white/10 
              rounded-lg px-4 py-2 focus:outline-none 
              focus:border-violet-500"
                        />
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                GitHub
                            </label>
                            <input
                                type="text"
                                name="githubLink"
                                value={formData.githubLink}
                                onChange={handleInputChange}
                                className="w-full bg-[#16161d] border border-white/10 
                rounded-lg px-4 py-2 focus:outline-none 
                focus:border-violet-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Live Link
                            </label>
                            <input
                                type="text"
                                name="liveLink"
                                value={formData.liveLink}
                                onChange={handleInputChange}
                                className="w-full bg-[#16161d] border border-white/10 
                rounded-lg px-4 py-2 focus:outline-none 
                focus:border-violet-500"
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            Project Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full text-sm text-gray-300"                
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="bg-violet-600 hover:bg-violet-700 
              transition px-6 py-2 rounded-lg font-medium">
                            Update Project
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );

}

export default UpdateProject
