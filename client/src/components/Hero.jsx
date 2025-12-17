import React from 'react'

const Hero = () => {
  return (
            <div id="home" className="relative w-full min-h-screen overflow-hidden 
                 bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black px-6">
                <nav className='text-white sticky top-2 z-50'>
                    <div className='navbar  flex flex-row justify-between items-center '>
                        <h2 className='text-2xl font-bold'>John Doe</h2>
                        <div className='flex flex-row justify-around gap-4'>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#project">Projects</a>
                            <a href="">Skills</a>
                            <a href="">Contact</a>
                        </div>
                        <button className='text-white bg-blue-500 font-bold rounded-md px-3 py-2'>Contact</button>
                    </div>
                </nav>
                <div className='relative w-full min-h-screen overflow-hidden 
//                  bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black px-6 text-white flex flex-col gap-3 justify-center'>
                    <span className='text-6xl font-bold block'>Hi, I'm John Doe</span>
                    <span className='text-4xl font-bold block'>MERN Stack Devloper</span>
                    <span className='text-xl block'>I build modern web applications using MongoDB,<br />
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


// import React from 'react'

// const Hero = () => {
//   return (
//     <div
//       id="home"
//       className="relative w-full min-h-screen overflow-hidden 
//                  bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black px-6"
//     >
//       {/* Glow Effect */}
//       <div className="absolute inset-0 blur-3xl 
//         bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4),transparent_65%)]">
//       </div>

//       {/* Navbar */}
//       <nav className="relative z-10 text-white sticky top-4">
//         <div className="navbar flex justify-between items-center max-w-7xl mx-auto">
//           <h2 className="text-2xl font-bold tracking-wide">John Doe</h2>

//           <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
//             <a href="#home" className="hover:text-white transition">Home</a>
//             <a href="#about" className="hover:text-white transition">About</a>
//             <a href="#project" className="hover:text-white transition">Projects</a>
//             <a href="#skills" className="hover:text-white transition">Skills</a>
//             <a href="#contact" className="hover:text-white transition">Contact</a>
//           </div>

//           <button className="bg-violet-600 hover:bg-violet-700 transition
//                              font-semibold rounded-lg px-4 py-2">
//             Contact
//           </button>
//         </div>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col justify-center min-h-[80vh] 
//                       max-w-4xl mx-auto text-white gap-6">
        
//         <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//           Hi, I'm <span className="text-violet-400">John Doe</span>
//         </h1>

//         <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
//           MERN Stack Developer
//         </h2>

//         <p className="text-lg text-gray-400 max-w-xl">
//           I build modern web applications using MongoDB,
//           Express, React, and Node.js.
//         </p>

//         <div className="flex gap-4 mt-4">
//           <button className="bg-violet-600 hover:bg-violet-700 transition
//                              font-semibold rounded-lg px-6 py-3">
//             View My Projects
//           </button>

//           <button className="border border-gray-400 hover:border-white 
//                              hover:text-white transition
//                              rounded-lg px-6 py-3 font-semibold">
//             Contact Me
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

