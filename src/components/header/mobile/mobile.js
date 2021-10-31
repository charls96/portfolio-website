import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    
    return (
        <div className='mobile'>
            <div className='close' onClick={() => {
                setIsOpen(!isOpen)
                document.body.style.overflowY = 'visible'
                }}>
                <span className='close-menu'></span>
            </div>
            <div className='mobile-options' >
                <div className='mobile-option' onClick={() => {
                setIsOpen(!isOpen)
                document.body.style.overflowY = 'visible'
                }}>
                    <a href='#about'>
                        About
                     </a>
                </div>
            <div className='mobile-option' onClick={() => {
                setIsOpen(!isOpen)
                document.body.style.overflowY = 'visible'
                }}>
                 <a href='#project'>
                    Projects
                </a>
            </div>
            <div className='mobile-option' onClick={() => {
                setIsOpen(!isOpen)
                document.body.style.overflowY = 'visible'
                }}>
                <a href='#contact'>
                    Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
