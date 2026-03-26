import { useState } from "react";
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
        <section className="min-h-screen flex items-center justify-center bg-section px-6 py-20">

            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">

                <h2 className="text-3xl font-bold text-heading text-center mb-8">
                    Admin Login
                </h2>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">

                    <div>
                        <label className="block text-sm text-body mb-1">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-body mb-1">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2
                            outline-none focus:border-primary"
                            autoComplete="off"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-primary hover:bg-accent text-white
                        font-semibold py-2 rounded-md transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-body text-sm mt-6">
                    Don’t have an account?
                    <Link
                        to="/admin/register"
                        className="text-primary hover:text-accent ml-1 font-medium"
                    >
                        Sign up
                    </Link>
                </p>

            </div>

        </section>
    );
};

export default AdminLogin;