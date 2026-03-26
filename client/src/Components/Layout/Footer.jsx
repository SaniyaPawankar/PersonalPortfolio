import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Name */}
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Saniya Pawankar
        </p>

        {/* Social Links */}
        <div className="flex gap-5 text-sm text-gray-600">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/saniya-pawankar"
            target="_blank"
            className="hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-black transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;