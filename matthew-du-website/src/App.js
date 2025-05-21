import './css/App.css';
import Header from './js/Header';
import Banner from "./js/Banner";
import Experience from "./js/Experience";
import Projects from "./js/Projects";
import Publications from "./js/Publications";
import Education from "./js/Education";
import Achievements from "./js/Achievements";

import { AnimatedBackground } from 'animated-backgrounds';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

function App() {
    const currentYear = new Date().getFullYear();
    useEffect(() => {
        document.querySelectorAll('a').forEach((el) => {
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        });
    }, []);
    return (    
        <div className="App">
            <AnimatedBackground
                animationName="geometricShapes"
                blendMode="lighten"
            />
            <Header />
            <Banner />
            <Education />
            <Achievements />
            <Publications />
            <Projects />
            <Experience />
            <footer id="contacts">
                <h1>Contact Me</h1>
                <p>Feel free to reach out to me if you would like to chat about anything!</p>
                <br></br>
                <div style={{ width: "100%" }}>
                    <a style={{color: "inherit", fontWeight: "inherit"}}
                       href="https://github.com/TheMatthewDu"><FaGithub/> &nbsp; TheMatthewDu</a> &nbsp;&nbsp; | &nbsp;&nbsp;
                    <a style={{color: "inherit", fontWeight: "inherit"}}
                       href="https://www.linkedin.com/in/thematthewdu/"><FaLinkedin/> &nbsp; theMatthewDu</a> &nbsp;&nbsp; | &nbsp;&nbsp;
                    <p style={{color: "inherit", fontWeight: "inherit"}}>
                        <FaEnvelope/> &nbsp; matthew [dot] du [at] mail [dot] utoronto [dot] ca</p>
                </div>
                <br></br>
                <p>Made by Matthew Du in React &copy; {currentYear}</p>
            </footer>
        </div>
    );
}

export default App;
