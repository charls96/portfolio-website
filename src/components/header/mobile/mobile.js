import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close' onClick={() => setIsOpen(!isOpen)}>
                <span className='close-menu'></span>
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href='#about'>
                        About
                     </a>
                </div>
            <div className='mobile-option'>
                 <a href='#project'>
                    Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#contact'>
                    Contact
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#resume'>
                    Resume
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
