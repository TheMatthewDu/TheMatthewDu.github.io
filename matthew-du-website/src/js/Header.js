// Header.js
import React, {useState} from 'react';
import "../css/Header.css";

function Header() {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <header>
            <nav>
                <div className="logo">Matthew Du</div>
                <div className={`navigation ${isMobile ? 'active' : ''}`}>
                    <a href="#education" target="_self">Education</a>
                    <a href="#achievements" target="_self">Achievements</a>
                    <a href="#publications" target="_self">Publications</a>
                    <a href="#projects" target="_self">Projects</a>
                    <a href="#experiences" target="_self">Experience</a>
                    <a href="#contacts" target="_self">Contacts</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
            </nav>
            <div className={`${isMobile ? 'header-padding' : ''}`}></div>
        </header>
    );
}

export default Header;