import React from 'react'
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Project from "./Project.jsx"
import Contact from './Contact.jsx'


const HomePage = () => {
    return (
        <div className='w-full min-h-screen  bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black' >
            <Hero />

            {/*--About Section--*/}
            <About />



            {/*--Projects Section--*/}
            <Project/>

            {/*--Contact Section--*/}
            <Contact/>
        </div>
    )
}

export default HomePage
