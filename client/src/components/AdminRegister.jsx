import React, { useState } from 'react'
import axios from "axios"

const AdminRegister = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        password: "",
    });

    const handleInputChange = (event) => {
        let { name, value } = event.target;
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
        } catch (err) {
            console.log("Error while registering ", err);
        }
    };

    const nameRegex = /^[A-Za-z]{3,}(?:\s+[A-Za-z]{3,})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center
            bg-gradient-to-b from-black via-[#12001f] to-[#0b0014] px-4 text-white"
        >
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl
                bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_70%)]">
            </div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-md
                bg-white/5 backdrop-blur-md border border-white/10
                rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold text-center mb-8">
                    Admin <span className="text-violet-400">Registration</span>
                </h2>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">

                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-sm">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="w-full bg-black/40 border border-white/10 rounded-md
                            px-4 py-2 outline-none focus:border-violet-400"
                        />
                        {formData.name && !nameRegex.test(formData.name) && (
                            <p className="text-red-400 text-xs mt-1">
                                Name must be at least 3 letters and alphabetic.
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 text-sm">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="w-full bg-black/40 border border-white/10 rounded-md
                            px-4 py-2 outline-none focus:border-violet-400"
                        />
                        {formData.phone && !phoneRegex.test(formData.phone) && (
                            <p className="text-red-400 text-xs mt-1">
                                Enter valid 10-digit number (6–9).
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="example@email.com"
                            className="w-full bg-black/40 border border-white/10 rounded-md
                            px-4 py-2 outline-none focus:border-violet-400"
                        />
                        {formData.email && !emailRegex.test(formData.email) && (
                            <p className="text-red-400 text-xs mt-1">
                                Enter a valid email address.
                            </p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block mb-1 text-sm">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Enter address"
                            className="w-full bg-black/40 border border-white/10 rounded-md
                            px-4 py-2 outline-none focus:border-violet-400 resize-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Create password"
                            className="w-full bg-black/40 border border-white/10 rounded-md
                            px-4 py-2 outline-none focus:border-violet-400"
                        />
                        {formData.password && !passwordRegex.test(formData.password) && (
                            <p className="text-red-400 text-xs mt-1">
                                Min 8 chars, 1 uppercase, 1 lowercase, 1 number.
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="mt-4 bg-violet-600 hover:bg-violet-700
                        transition rounded-md py-2 font-semibold"
                    >
                        Register
                    </button>

                </form>
            </div>
        </section>
    );
};

export default AdminRegister;
