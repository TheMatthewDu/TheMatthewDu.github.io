// Banner.js

import '../css/Banner.css'

import header1 from '../img/profile_image3.png';

function Banner() {
    return (
        <section id="hero" className="hero">
            <div className="banner">
                <div className="text-container">
                    <h1>I am Matthew Du</h1>
                    <p>
                        Hello! I am a first year Masters of Applied Science (MASc) Student at the University of Toronto,
                        in the Biomedical Simulations Lab (BSL).

                        I completed my undergraduate studies in <a
                        className="link_format"
                        href="https://engineering.calendar.utoronto.ca/section/Mechanical-Engineering"
                    >
                        Mechanical Engineering
                    </a> student at the <a className="link_format" href="https://www.utoronto.ca/">
                        University of Toronto</a> with minors
                        in <a className="link_format" href="https://artsci.calendar.utoronto.ca/section/Computer-Science">
                        Computer Science</a> and <a className="link_format"
                                                    href="https://engineering.calendar.utoronto.ca/minor-robotics-and-mechatronics-aeminram">
                        Robotics &amp; Mechatronics
                    </a>. I completed my PEY Co-op at <a className="link_format" href="https://bombardier.com/en">
                        Bombardier Aerospace</a>.
                    </p>
                    <br></br>
                    <p>
                        Broadly speaking, I am interested in the applications of computer vision and graphics in
                        engineering, including robotic perception, flow visualization for fluid dynamics, and
                        VR/XR algorithms to support accessibility for individuals with low vision.
                    </p>
                </div>
                <img className="profile-photo" src={header1} alt="Matthew Du"/>
            </div>
        </section>
    );
}

export default Banner;
