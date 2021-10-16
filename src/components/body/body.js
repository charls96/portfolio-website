import React from 'react'
import About from './about/about.js'
import Projects from './projects/projects.js'
import Contact from './contact/contact.js'
import './body.css'


function Body() {
    return (
        <div classsName='body'>
            <section id='#about'>
                <About />
            </section>
            <section id='#project'>
                <Projects />
            </section>
            <section id='#contact'>
                <Contact />
            </section>
        </div>
    )
}

export default Body
