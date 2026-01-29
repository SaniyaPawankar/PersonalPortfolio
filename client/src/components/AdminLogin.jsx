import  { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminLogin = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        try {
            const res = await axios.post(
                "http://localhost:5020/api/admin/login",
                { email, password }
            );

            // save token
            localStorage.setItem("adminToken", res.data.token);

            alert("Logged in successfully!");
            navigate("/");
        } catch (err) {
            alert("Invalid credentials");
            console.log(err);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center
        bg-gradient-to-b from-black via-[#12001f] to-[#0b0014] px-4 text-white">

            {/* Glow */}
            <div className="absolute inset-0 blur-3xl
                bg-[radial-gradient(circle_at_center, rgba(168,85,247,0.18), transparent_70%)]">
            </div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-md
                border border-white/10 rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold text-center mb-8">Admin Login</h2>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <div>
                        <label className="block mb-1 text-sm">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-black/40 border border-white/10
                            rounded-md px-4 py-2 outline-none focus:border-violet-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full bg-black/40 border border-white/10
                            rounded-md px-4 py-2 outline-none focus:border-violet-400"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button className="rounded-md bg-purple-500
                            hover:bg-purple-600 transition
                            text-xl font-bold px-6 py-2 mt-4">
                            Login
                        </button>
                    </div>
                </form>

                {/* Signup Link */}
                <p className="text-center text-sm text-gray-300 mt-6">
                    Don’t have an account?
                    <Link
                        to="/admin/register"
                        className="text-purple-400 hover:text-purple-300 ml-1 font-semibold"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
