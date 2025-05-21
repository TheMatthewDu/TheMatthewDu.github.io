// Banner.js

import '../css/Banner.css'
import React, { useState, useEffect } from 'react';

import header1 from '../img/profile_image.png';
import header2 from '../img/profile_image2.png';
import header3 from '../img/profile_image3.png';

function Banner() {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const photos = [header1, header2, header3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % photos.length);
        }, 6000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [photos.length]);

    return (
        <section id="hero" className="hero">
            <div className="banner">
                <div className="text-container">
                    <h1>Hello! I am Matthew Du</h1>
                    <p>From Software to Skies: Engineering Access Everywhere</p>
                    <a href="#experiences" className="btn" target="_self">Learn More</a>
                </div>
                <img className="profile-photo" src={photos[currentPhoto]} alt="Matthew Du"/>
            </div>
        </section>
    );
}

export default Banner;
