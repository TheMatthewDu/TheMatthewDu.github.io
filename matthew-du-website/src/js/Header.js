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
                    <a href="#education">Education</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#publications">Publications</a>
                    <a href="#projects">Projects</a>
                    <a href="#experiences">Experience</a>
                    <a href="#music">Music</a>
                    <a href="#contacts">Contacts</a>
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