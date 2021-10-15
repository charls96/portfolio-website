import React from 'react'
import Header from '../header'
import Body from '../body'
import Footer from '../footer'
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
