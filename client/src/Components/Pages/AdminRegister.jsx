import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.password) {
            alert("Please fill all the fields!");
            return;
        }

        try {
            const result = await axios.post(
                "http://localhost:5020/api/register",
                formData
            );

            console.log(result.data);
            navigate("/admin/login");

        } catch (err) {
            console.log("Error while registering ", err);
        }
    };

    const nameRegex = /^[A-Za-z]{3,}(?:\s+[A-Za-z]{3,})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    return (
        <section className="min-h-screen flex items-center justify-center bg-section px-6 py-20">

            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

                <h2 className="text-3xl font-bold text-heading text-center mb-8">
                    Admin Registration
                </h2>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                        />

                        {formData.name && !nameRegex.test(formData.name) && (
                            <p className="text-red-500 text-xs mt-1">
                                Name must be at least 3 letters and alphabetic.
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Phone
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                        />

                        {formData.phone && !phoneRegex.test(formData.phone) && (
                            <p className="text-red-500 text-xs mt-1">
                                Enter valid 10-digit number (6–9).
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="example@email.com"
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                        />

                        {formData.email && !emailRegex.test(formData.email) && (
                            <p className="text-red-500 text-xs mt-1">
                                Enter a valid email address.
                            </p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Address
                        </label>

                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Enter address"
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary resize-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm text-body mb-1">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Create password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                        />

                        {formData.password && !passwordRegex.test(formData.password) && (
                            <p className="text-red-500 text-xs mt-1">
                                Min 8 chars, 1 uppercase, 1 lowercase, 1 number.
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-primary hover:bg-accent text-white
                        font-semibold py-2 rounded-md transition"
                    >
                        Register
                    </button>

                </form>

            </div>

        </section>
    );
};

export default AdminRegister;