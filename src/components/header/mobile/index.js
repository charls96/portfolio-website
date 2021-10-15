import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div class='mobile'>
            <div class='close' onClick={() => setIsOpen(!isOpen)}>
                <span class='close-menu'>close</span>
            </div>
            <div class='mobile-options'>
                <div class='mobile-option'>
                    <a href='#about'>
                        About
                     </a>
                </div>
            <div class='mobile-option'>
                 <a href='#project'>
                    Projects
                </a>
            </div>
            <div class='mobile-option'>
                <a href='#contact'>
                    Contact
                </a>
            </div>
            <div class='mobile-option'>
                <a href='#resume'>
                    Resume
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
