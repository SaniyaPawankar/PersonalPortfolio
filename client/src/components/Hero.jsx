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
                 bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black px-6">
                <nav className='text-white sticky top-2 z-50'>
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
 
               

                <div className='relative w-full min-h-screen overflow-hidden 
                  bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black px-6 text-white flex flex-col gap-3 justify-center'>
                    <span className='text-6xl font-bold block'>Hi, I'm John Doe</span>
                    <span className='text-4xl font-bold block'>MERN Stack Devloper</span>
                    <span className='text-xl block'>I build modern web applications using MongoDB,<br />
                        Express, React, and Node.js
                    </span>
                    <div className='flex flex-row gap-4 items-center'>
                        <button className='bg-purple-500 text-white font-bold rounded-md px-5 py-3 outline-none'>View My Projects</button>
                        <button className='bg-transparent font-bold border  border-white rounded-md  outline-none px-6 py-3'>Contact Me</button>
                    </div>
                </div>
            </div>
  )
}

export default Hero


