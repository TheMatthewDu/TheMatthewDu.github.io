import { FaGithub, FaLinkedin, FaEnvelope, FaBlog } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

import profile from "../assets/images/profile.png";
import email from "../assets/files/email.txt"
import cv from "../assets/files/MatthewDuResume.pdf"

function Hero(){
    return (
        <section id="home" className="hero"> 
            <div className="container hero-grid"> 
                {/* Left side */} 
                <div className="hero-content"> 
                    <p className="eyebrow">Hello, I'm</p> 
                    
                    <h2>Matthew Du </h2> 
                    <p className="subtitle"> 
                        Master in Applied Science (MASc) Student in Mechanical &amp; Industrial Engineering, University of Toronto
                    </p> 
                    <div className="socials"> 
                        <a href="https://www.linkedin.com/in/thematthewdu/" className="social-button"> <FaLinkedin /> </a> 
                        <a href="https://github.com/TheMatthewDu" className="social-button"> <FaGithub /> </a> 
                        <a href={email} className="social-button"> <FaEnvelope /> </a> 
                        <a href={cv} className="social-button"> <TbFileCv /> </a>
                        <a href="#" className="social-button"> <FaBlog /> </a>
                    </div> 
                </div> 
                
                {/* Right side */}
                <div className="hero-image"> 
                    <img src={profile} alt="Matthew Du" /> 
                </div> 
            </div> 
        </section>
    );
}

export default Hero;