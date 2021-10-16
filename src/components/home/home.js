import React from 'react'
import Header from '../header/header.js'
import Body from '../body/body.js'
import Footer from '../footer/footer.js'
import './home.css'

function Home() {
    return (
        <div class="home">
            <div class="header">
                <Header />
            </div>
            <div class="body">
                <Body />
            </div>
            <div class="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home
