import React from 'react'
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Project from "./Project.jsx"


const HomePage = () => {
    return (
        <div className='w-full min-h-screen' >
            <Hero />

            {/*--About Section--*/}
            <About />



            {/*--Projects Section--*/}
            <Project/>
        </div>
    )
}

export default HomePage
