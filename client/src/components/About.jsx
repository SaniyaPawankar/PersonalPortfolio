import React from 'react'

const About = () => {
    return (
        <div id="about" className='relative w-full min-h-screen overflow-hidden 
                 bg-gradient-to-b from-black via-[#12001f] to-[#0b0014]
                 px-6 py-20 text-white'>
            <div className="flex flex-row mx-10">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold'>About Me</h1>
                    <div>
                        <span className='block'>I am a passionate full-stack developer with experience in building web</span>
                        <span className='block '>applications using the MERN stack. I love creating efficient and scalable</span>
                        <span className='block'>solutions through clean and maintainble code.</span>
                    </div>
                    <div className='bg-white shadow-md p-4 flex flex-row justify-around rounded-md '>
                        <div className='flex flex-row justify-center items-center gap-3 '>
                            <i className="fa-solid fa-computer text-blue-700"></i>
                            <h4 className='text-purple-950'>B.Tech in Computer Science</h4>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-3'>
                            <i className="fa-regular fa-circle-user text-blue-700"></i>
                            <h4 className='text-purple-950'>2+ Years of Experience</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <image />
                </div>
            </div>
        </div>
    )
}

export default About



// import React from 'react'

// const About = () => {
//   return (
//     <div
//       id="about"
//       className="relative w-full min-h-screen overflow-hidden 
//                  bg-gradient-to-b from-black via-[#12001f] to-[#0b0014]
//                  px-6 py-20 text-white"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 blur-3xl 
//         bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.25),transparent_70%)]">
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* Left Content */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold">
//             About <span className="text-violet-400">Me</span>
//           </h1>

//           <p className="text-gray-400 leading-relaxed max-w-xl">
//             I am a passionate full-stack developer with experience in building modern
//             web applications using the MERN stack. I love creating efficient and
//             scalable solutions through clean and maintainable code.
//           </p>

//           {/* Info Cards */}
//           <div className="flex flex-col sm:flex-row gap-6 mt-4">
            
//             <div className="flex items-center gap-4 
//                             bg-white/5 backdrop-blur-md border border-white/10
//                             rounded-xl px-6 py-4 shadow-lg">
//               <i className="fa-solid fa-computer text-violet-400 text-xl"></i>
//               <span className="font-medium">B.Tech in Computer Science</span>
//             </div>

//             <div className="flex items-center gap-4 
//                             bg-white/5 backdrop-blur-md border border-white/10
//                             rounded-xl px-6 py-4 shadow-lg">
//               <i className="fa-regular fa-circle-user text-violet-400 text-xl"></i>
//               <span className="font-medium">2+ Years of Experience</span>
//             </div>

//           </div>
//         </div>

//         {/* Right Image Placeholder */}
//         <div className="flex justify-center">
//           <div className="w-64 h-64 rounded-2xl 
//                           bg-gradient-to-br from-violet-500/30 to-purple-700/30
//                           border border-white/10 backdrop-blur-md">
//             {/* Profile Image Here */}
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default About
