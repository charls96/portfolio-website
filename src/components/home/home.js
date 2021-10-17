import React from 'react';
import Header from '../header/header.js'
import Body from '../body/body.js'
import Footer from '../footer/footer.js'
import './home.css'

function Home() {
    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
            
        </div>
    )
}

export default Home
