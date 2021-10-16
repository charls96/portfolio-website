import React, {useState} from 'react'
import './header.css'
import Mobile from './mobile/mobile.js'
import Web from './web/web.js'


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div class="header">
            <div class="logo">
                <a href="#carlosdaniel"><span class="logo-point">.</span>carlos-daniel<span class="logo-bracket">&#123;</span></a>
            </div>
            <div class="menu">
                <div class="web-menu">
                    <Web />
                </div>
                <div class="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <span class="menu-logo">menu</span>
                    </div>
                    {isOpen&&<Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
