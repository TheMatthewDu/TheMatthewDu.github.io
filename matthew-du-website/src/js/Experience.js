// Experience.js
import React, { useState } from 'react';
import '../css/Experiences.css'

function Experience() {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);

    const toggleShowMore1 = () => setShowMore1(!showMore1);
    const toggleShowMore2 = () => setShowMore2(!showMore2);
    const toggleShowMore3 = () => setShowMore3(!showMore3);

    return (
        <section id="experiences" className="experiences">
            <h2 className="section-title">Experiences</h2>
            <div className="experiences_body">
                <div className="experience">
                    <h3 className="experience-title">Aircraft Performance (Globals) Engineering Intern (16 Months)</h3>
                    <p className="experience-subtitle-1"><a href="https://bombardier.com/en">Bombardier Aerospace -
                        Technical Engineering </a></p>
                    <p className="experience-subtitle-2">May 2024 - Present</p>

                    <button className="show-button" onClick={toggleShowMore1}>
                        {showMore1 ? 'Show Less' : 'Show More...'}
                    </button>
                    {showMore1 && (
                        <ul>
                            <li>Collaborated with engineers to analyze and evaluate aircraft performance data,
                                conducting
                                and debugging FORTRAN simulations to assess aerodynamic characteristics and optimize
                                aircraft configurations for enhanced efficiency.
                            </li>
                            <lI>Assisted in the development and validation of performance models, created automation
                                scripts
                                utilizing MATLAB, Python, and software tools to predict flight performance across
                                various
                                operating conditions and configurations.
                            </lI>
                            <lI>Contributed to testing and certification efforts by supporting verification processes
                                and
                                interpreting results, analyzing anomalies to ensure compliance with industry standards
                                and
                                legal requirements.
                            </lI>
                        </ul>
                    )}
                </div>

                <div className="experience">
                    <h3 className="experience-title">Undergraduate Research Student</h3>
                    <p className="experience-subtitle-1"><a href="https://liulab.mie.utoronto.ca/">Microfluidics and
                        BioMEMS Lab (MBL) at the University of Toronto</a></p>
                    <p className="experience-subtitle-2">May 2022 - Aug 2022</p>

                    <button className="show-button" onClick={toggleShowMore2}>
                        {showMore2 ? 'Show Less' : 'Show More...'}
                    </button>
                    {showMore2 && (
                        <ul>
                            <li> Designed computer vision algorithms for a biomemtic, cable driven, soft robotic
                                hand with in hand RGB-D camera. Transitioned project from manufacturing to
                                human-robot interaction.
                            </li>
                            <li> Implemented various algorithms, such as kMeans, ICP, 3D-CNN, and YOLO using the
                                Robotic Operating System (ROS) for grasp planning, in-hand manipulation, and object
                                localization.
                            </li>
                            <li> Presented at University of Toronto's UnERD conference and in conference to the
                                President of the Republic of Korea in 2022.
                            </li>
                        </ul>
                    )}
                </div>

                <div className="experience">
                    <h3 className="experience-title"> Engineering Society Leadership</h3>
                    <p className="experience-subtitle-1"><a href="http://skule.ca">Engineering Society of the
                        University of Toronto</a></p>
                    <p className="experience-subtitle-2">Sep 2022 - Present</p>

                    <button className="show-button" onClick={toggleShowMore3}>
                        {showMore3 ? 'Show Less' : 'Show More...'}
                    </button>
                    {showMore3 && (
                        <ul>
                            <li><b>Equity &amp; Inclusivity Project Director (Apr 2024 - Present)</b>: Led EDI
                                initiatives for the Engineering Society, introduced equitable exam policies for 500+
                                students, advocated for improved building accessibility, modernized directorship assets,
                                organized EDI events to promote awareness, and supported establishing EDI framework in
                                governance.
                            </li>
                            <li><b>Third-Year Class Representative (Sep 2023 - Apr 2024)</b>: Elected representative for
                                200+ mechanical engineering students, facilitating communication with instructors,
                                resolving issues, and advocating for better course and co-op opportunities.
                            </li>
                            <li><b>Faculty Council Standing Committee Representative (Sept 2022 - Present)</b>: Student
                                representative in Faculty council committees, representing the students in governance
                                matters; assessed appellants in appeal board proceedings.
                            </li>
                        </ul>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Experience;
