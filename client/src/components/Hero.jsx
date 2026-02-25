import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  
    const navigate = useNavigate();

    const isAdmin = !!localStorage.getItem("adminToken")
    // Check admin login status using token stored after login
    // !! converts value to true/false

    const handleLogout = () => {
        localStorage.removeItem("adminToken")
        navigate("/admin/login")
    }

  return (
            <div id="home" className="relative w-full min-h-screen overflow-hidden 
                  px-6">
                <nav className='text-black sticky top-2 z-50'>
                    <div className='navbar  flex flex-row justify-between items-center '>
                        <h2 className='text-2xl font-bold cursor-pointer'>John Doe</h2>
                        <div className='flex flex-row  gap-6'>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#project">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                        </div>
                        {/* <button className='text-white bg-blue-500 font-bold rounded-md px-3 py-2'>Contact</button> */}

                         {/*--Auth Button--*/}

                {
                    !isAdmin ? (
                        <button onClick={ () => navigate("/admin/login")}
                        className='text-white bg-purple-500 font-bold rounded-md px-4 py-2'>
                            Login
                        </button>
                    ) : (
                        <button onClick={handleLogout}
                        className='text-white bg-purple-500 font-bold rounded-md px-4 py-2'>
                            Logout
                        </button>
                    )
                }
                    </div>
                </nav>
 
               

                <div className='relative w-full min-h-screen overflow-hidden  px-6 text-black flex flex-col gap-3 justify-center'>
                    <span className='text-4xl font-bold block'>Hi, I'm Saniya Pawankar</span>
                    <span className='text-2xl font-bold block'>Full Stack Developer (MERN) | Final Year Student </span>
                    <span className='text-xl block'>
                        I build responsive full-stack web applications using MongoDB, Express, React, and Node.js.<br></br>
                        Currently focused on improving DSA and building real-world projects for placements.
                    </span>
                    <div className='flex flex-row gap-4 items-center'>
                        <button className='bg-purple-500 text-white font-bold rounded-md px-5 py-3 outline-none'><a href="#project">View My Projects</a></button>
                        <button className='bg-black font-bold border text-white  border-white rounded-md  outline-none px-6 py-3'><a href="#contact">Contact Me</a></button>
                    </div>
                </div>
            </div>
  )
}

export default Hero


