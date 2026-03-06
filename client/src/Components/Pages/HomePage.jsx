import Hero from '../Features/Hero/Hero'
import About from '../Features/About/About'
import Project from '../Features/Projects/Project'
import Contact from '../Features/Contact/Contact'
import Skills from '../Features/Skills/Skills'
import Testimonials from '../Features/Testimonials/Testimonials'


const HomePage = () => {
    return (
        <div className='w-full min-h-screen' >
            <Hero />

            {/*--About Section--*/}
            <About />



            {/*--Projects Section--*/}
            <Project/>

            {/*--Skills Section*/}

           <Skills/>

           {/*--Testimonials Section*/}
           <Testimonials/>

           

            {/*--Contact Section--*/}
            <Contact/>
        </div>
    )
}

export default HomePage
