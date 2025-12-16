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

        setFormData((prev) => {
            return { ...prev, [name]: value }
        });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.password) {
            alert("Please fill all the fields!")
            return
        }

        try {
            const result = await axios({
                method: "POST",
                url: "http://localhost:5020/api/register",
                data: formData
            })

            console.log(result.data);
            console.log(formData)
        } catch (err) {
            console.log("Error while registering ", err)
        }
    }

    const nameRegex = /^[A-Za-z]{3,}(?:\s+[A-Za-z]{3,})+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


    return (
        <div className='w-full min-h-screen bg-slate-200 flex items-center justify-center'>
            <div className='bg-black text-white w-[500px] p-7  rounded-md  shadow-blue-200 shadow-lg '>
                <h2 className='text-2xl font-bold text-center mb-6'>
                    Admin Registration
                </h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='flex flex-col gap-2 mx-3 my-2'>
                        <label htmlFor='name'>Enter Full Name</label>
                        <input onChange={handleInputChange} className='' type="text" placeholder='Enter you name here' name="name" value={formData.name} id="name" />
                        {/* Name Validation Message */}
                        {
                            formData.name && !nameRegex.test(formData.name) && (
                                <div className="text-red-600 text-sm bg-red-50 border border-red-300 p-2 rounded">
                                    Name must contain only letters and be atleast 3 characters long.
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-col gap-2 mx-3 my-2'>
                        <label htmlFor='phone'>Enter your phone number</label>
                        <input onChange={handleInputChange} className='' type="tel" placeholder='Enter your phone number' name="phone" value={formData.phone} id="phone" />
                        {/* Phone Validation Message */}
                        {
                            formData.phone && !phoneRegex.test(formData.phone) && (
                                <div className="text-red-600 text-sm bg-red-50 border border-red-300 p-2 rounded">
                                    Please enter a valid 10-digit phone number starting with 6,7,8 or 9.
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-col gap-2 mx-3 my-2'>
                        <label htmlFor='email'>Enter email address</label>
                        <input onChange={handleInputChange} className='' type="email" placeholder='Enter your email id' name="email" value={formData.email} id="email" />
                        {
                            formData.email && !emailRegex.test(formData.email) && (
                                <div className="text-red-600 text-sm bg-red-50 border border-red-300 p-2 rounded">
                                    Please enter a valid email address (example: name@example.com).
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-col gap-2 mx-3 my-2'>
                        <label htmlFor='address'>Enter Address</label>
                        <textarea onChange={handleInputChange} className='' placeholder='Enter your address' name="address" value={formData.address} id="address" rows={10}></textarea>
                    </div>
                    <div className='flex flex-col gap-2 mx-3 my-2'>
                        <label htmlFor='password'>Create Password</label>
                        <input onChange={handleInputChange} className='' type="password" placeholder='Enter password' name="password" value={formData.password} id="password" />
                        {/* Password Validation Message */}
                        {
                            formData.password && !passwordRegex.test(formData.password) && (
                                <div className="bg-red-50 text-red-700 border border-red-300 p-3 rounded text-sm">
                                    <p className="font-semibold">Password must contain:</p>
                                    <ul className="list-disc ml-5 mt-1">
                                        <li>At least 8 characters</li>
                                        <li>One uppercase letter</li>
                                        <li>One lowercase letter</li>
                                        <li>One number</li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <button className='bg-white text-black px-3 py-2'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminRegister
