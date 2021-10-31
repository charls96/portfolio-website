import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className = 'contact'>
            <label className='section-title'><span className="span-section-title">#</span>Let's talk</label>
            <p className='about-contact'>Currently, I'm looking for doing an internship abroad. Whether you have any question or just want to hire me, I’ll try my best to get back to you!</p>
            <a href="mailto:charly.lopez.perez@gmail.com" className='contact-email-link'>Contact</a>
        </div>
    )
}

export default Contact
