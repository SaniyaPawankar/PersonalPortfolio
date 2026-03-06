import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("adminToken");

    // Fetch existing project
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get(`http://localhost:5020/api/projects/${id}`);

                const project = res.data.project;

                setFormData({
                    title: project.title,
                    description: project.description,
                    techStack: project.techStack.join(", "),
                    githubLink: project.githubLink || "",
                    liveLink: project.liveLink || ""
                });

                setLoading(false);

            } catch (err) {
                console.log(err);
            }
        };

        fetchProject();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

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
            await axios.put(
                `http://localhost:5020/api/projects/${id}/edit`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            navigate(`/projects/${id}`);

        } catch (err) {
            console.log(err);
        }
    };

    if (loading) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-section">
                <p className="text-body text-lg">Loading...</p>
            </section>
        );
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-section px-6 py-20">

            <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-10">

                {/* Header */}
                <h2 className="text-3xl font-bold text-heading text-center mb-8">
                    Update Project
                </h2>

                <form onSubmit={handleFormSubmit} className="space-y-6">

                    {/* Title */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Project Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Description
                        </label>

                        <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary resize-none"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Tech Stack
                        </label>

                        <input
                            type="text"
                            name="techStack"
                            value={formData.techStack}
                            onChange={handleInputChange}
                            placeholder="MongoDB, Express, React, Node"
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                        />
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <label className="block text-sm text-body mb-1">
                                GitHub Link
                            </label>

                            <input
                                type="text"
                                name="githubLink"
                                value={formData.githubLink}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2
                                outline-none focus:border-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-body mb-1">
                                Live Link
                            </label>

                            <input
                                type="text"
                                name="liveLink"
                                value={formData.liveLink}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2
                                outline-none focus:border-primary"
                            />
                        </div>

                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm text-body mb-2">
                            Project Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full text-sm text-body"
                        />
                    </div>

                    {/* Button */}
                    <div className="flex justify-end pt-4">

                        <button
                            type="submit"
                            className="bg-primary hover:bg-accent text-white
                            px-6 py-2 rounded-md font-semibold transition"
                        >
                            Update Project
                        </button>

                    </div>

                </form>

            </div>

        </section>
    );
};

export default UpdateProject;