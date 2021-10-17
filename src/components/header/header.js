import React, {useState} from 'react'
import './header.css'
import Mobile from './mobile/mobile.js'
import Web from './web/web.js'


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                <a href="#carlosdaniel"><span className="logo-point">.</span>carlos-daniel<span className="logo-bracket">&#123;</span></a>
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <span className="menu-logo">menu</span>
                    </div>
                    {isOpen&&<Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}
export default Header
