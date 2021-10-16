import React from 'react'
import './about.css'


function About() {
    return (
        <div class='about'>
            <div class='about-heading'>
                <h1>Hi, my name is</h1>
                <h2>Carlos Daniel.</h2>
                <h2>I'm a web developer</h2>
            </div>
            <div class='about-bottom'>
                <p class='about-info'>
                    What I like about programming is that you create things
                    on your own and in web development you can see your creations
                    and how they are working. It allows us to interact with the
                    world that we have done, the internet.
                    <br /><br />
                    I have done my vocational training of web development at IES Ingeniero
                    de la cierva, a college located in Murcia, Spain.
                    <br /><br />
                    Here are a few technologies I’ve been working with:
                </p>
                <div class='about-photo'>
                    <img src={require("../../../assets/coding.png").default} class='about-img' alt='carlos daniel' />
                </div>
            </div>
        </div>
    )
}

export default About
