import React from 'react'

const About = () => {
    return (
        <div id="about" className='w-full max-h-screen bg-slate-300 text-black px-10 py-20'>
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
                            <h4>B.Tech in Computer Science</h4>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-3'>
                            <i className="fa-regular fa-circle-user text-blue-700"></i>
                            <h4>2+ Years of Experience</h4>
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
