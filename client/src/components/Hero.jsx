import React from 'react'

const Hero = () => {
  return (
            <div className='hero w-full max-h-screen  bg-indigo-950 p-4'>
                <nav className='text-white sticky top-2 z-50'>
                    <div className='navbar  flex flex-row justify-between items-center '>
                        <h2 className='text-2xl font-bold'>John Doe</h2>
                        <div className='flex flex-row justify-around gap-4'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Projects</a>
                            <a href="">Skills</a>
                            <a href="">Contact</a>
                        </div>
                        <button className='text-white bg-blue-500 font-bold rounded-md px-3 py-2'>Contact</button>
                    </div>
                </nav>
                <div className='hero-body my-52 flex flex-col gap-5 justify-start mx-10 text-white'>
                    <span className='text-6xl font-bold '>Hi, I'm John Doe</span>
                    <span className='text-4xl font-bold'>MERN Stack Devloper</span>
                    <span className='text-xl'>I build modern web applications using MongoDB,<br />
                        Express, React, and Node.js
                    </span>
                    <div className='flex flex-row gap-4 items-center'>
                        <button className='bg-blue-500 text-white font-bold rounded-md px-5 py-3 outline-none'>View My Projects</button>
                        <button className='bg-transparent font-bold border  border-white rounded-md  outline-none px-6 py-3'>Contact Me</button>
                    </div>
                </div>
            </div>
  )
}

export default Hero
