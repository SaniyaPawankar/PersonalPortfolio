import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isAdmin = !!localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-heading cursor-pointer">
          Saniya Pawankar
        </h2>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-body font-medium">
          <a href="#home" className="hover:text-primary">Home</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>

        {/* Auth Button */}
        {!isAdmin ? (
          <button
            onClick={() => navigate("/admin/login")}
            className="bg-primary text-white px-5 py-2 rounded-md hover:bg-accent"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-primary text-white px-5 py-2 rounded-md hover:bg-accent"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;