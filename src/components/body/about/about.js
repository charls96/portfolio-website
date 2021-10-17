import React from 'react'
import './about.css'
import SocialContactCommon from '../../common/social-contact/socialContactCommon'

function About() {
    return (
        <div className='about'>
            <div className='about-heading'>
                <h1>Hi, my name is</h1>
                <h2>Carlos Daniel.</h2>
                <h2>I'm a web developer</h2>
            </div>
            <div className='about-bottom'>
                <p className='about-info'>
                    What I like about programming is that you <span>create things </span>
                    on your own and in web development you can see your creations
                    and how they are working. It allows us to <span>interact</span> with the
                    world that we have done, <span>the internet</span>.
                    <br /><br />
                    I have done my <span>vocational training</span> of web development at <span>IES Ingeniero
                    De La Cierva</span>, a college located in <span>Murcia</span>, Spain.
                    <br /><br />
                    Social
                    <br />
                    <SocialContactCommon />
                    <i className="fab fa-linkedin"></i>
                </p>
                <div className='about-photo'>
                    <div className='about-border'>
                        <img src={require("../../../assets/carlosdaniel.png").default} className='about-img' alt='carlos daniel' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
