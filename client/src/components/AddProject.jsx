import axios from "axios"
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const AddProject = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: ""
    })

    const [image, setImage] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const projectData = new FormData();
        projectData.append("title", formData.title);
        projectData.append("description", formData.description);
        projectData.append("techStack", formData.techStack);
        projectData.append("githubLink", formData.githubLink);
        projectData.append("liveLink", formData.liveLink);
        projectData.append("image", image);

        try {
            const token = localStorage.getItem("adminToken");
            console.log(token);

            await axios.post("http://localhost:5020/api/addprojects",
                projectData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            

            alert("Project added successfully!");
            navigate("/")
        } catch (err) {
            console.error(err)
            alert("Failed to add project")
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center  px-4 py-5">

            <div className="w-full max-w-2xl  border border-white/10
        rounded-2xl  shadow-xl p-10 text-black">

                <h2 className="text-3xl font-semibold mb-8 text-center">Add
                    <span className="text-violet-400"> New Project</span>
                </h2>

                <form onSubmit={handleFormSubmit} className="space-y-6">

                    {/* Title */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Project Title</label>
                        <input type="text" className="w-full bg-[#16161d] border border-white/10 rounded-lg 
                        px-4 py-2 focus:outline-none focus:border-violet-500" name="title" value={formData.title} onChange={handleInputChange} required />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Project Description</label>
                        <textarea type="text" className="w-full bg-[#16161d] border border-white/10 rounded-lg 
                        px-4 py-2 focus:outline-none focus:border-violet-500" rows="4" name="description" value={formData.description} onChange={handleInputChange} required />
                    </div>


                    {/* techStack */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Techstack</label>
                        <input type="text" placeholder="MongoDB, Express, React, Node" className="w-full bg-[#16161d] border border-white/10 rounded-lg 
                        px-4 py-2 focus:outline-none focus:border-violet-500" name="techStack" value={formData.techStack} onChange={handleInputChange} required />
                    </div>

                    {/* githubLink */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Github Link</label>
                            <input type="text" className="w-full bg-[#16161d] border border-white/10 rounded-lg 
                        px-4 py-2 focus:outline-none focus:border-violet-500" name="githubLink" value={formData.githubLink} onChange={handleInputChange} required />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Live Link</label>
                            <input type="text" className="w-full bg-[#16161d] border border-white/10 rounded-lg 
                        px-4 py-2 focus:outline-none focus:border-violet-500" name="liveLink" value={formData.liveLink} onChange={handleInputChange} required />
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Project Image</label>
                        <input type="file" accept="image/*"
                            onChange={handleImageChange} required
                            className="w-full text-sm text-gray-300
                file:bg-[#1e1e2a] file:border-0 
                file:px-4 file:py-2 file:rounded-lg 
                file:text-white file:cursor-pointer" />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="bg-violet-600 hover:bg-violet-700 
                transition px-6 py-2 rounded-lg font-medium">
                            Add Project
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default AddProject
