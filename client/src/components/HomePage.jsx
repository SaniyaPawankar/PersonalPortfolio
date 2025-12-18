import React from 'react'
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Project from "./Project.jsx"
import Contact from './Contact.jsx'
import Skills from "./Skills.jsx"
import Testimonials from './Testimonials.jsx'
import FeedbackForm from './FeedbackForm.jsx'


const HomePage = () => {
    return (
        <div className='w-full min-h-screen  bg-gradient-to-b from-[#0b0014] via-[#12001f] to-black' >
            <Hero />

            {/*--About Section--*/}
            <About />



            {/*--Projects Section--*/}
            <Project/>

            {/*--Skills Section*/}

           <Skills/>

           {/*--Testimonials Section*/}
           <Testimonials/>

           {/*--Feedback Section--*/}
           <FeedbackForm/>

            {/*--Contact Section--*/}
            <Contact/>
        </div>
    )
}

export default HomePage
