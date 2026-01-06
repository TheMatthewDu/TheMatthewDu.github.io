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
                            <li> Supported system tests on test aircraft and rigs, validating and debugging results.
                                Leveraged aerodynamics knowledge to develop flight plans for performance tests,
                                aligning with certification requirements and client needs. </li>
                            <li> Designed and implemented tools using Python, HTML, and FORTRAN to process and analyze
                                flight performance data. Developed interactive visualizations to monitor aircraft
                                parameters and ensure regulatory compliance. </li>
                            <li> Assisted recruitment initiatives by launching a pilot mentorship program with local
                                universities, successfully connecting 25 students across three institutions with
                                industry professionals. </li>
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
                            <li><b>Equity &amp; Inclusivity Project Director (Apr 2024 - Present)</b>
                            </li>
                            <ul>
                                <li>Led the EDI portfolio for EngSoc. Reactivated the directorship after a 2-year hiatus.</li>
                                <li>Represented the society in governance proceedings, notably the facilities planning. Modernized directorship assets (updating logo, building inventory, reactivating social media) and reactivated key leadership roles within the society; engaged with EDI community clubs and design teams </li>
                                <li>Advocated for enhanced building accessibility, improved quality of exam accommodations for students registered with accessibility services, and inclusive engineering design. Authored two reports that identified major accessibility concerns, driving strategic improvements.</li>
                                <li>Organized impactful EDI events and coordinated commemorative events to promote conversation and engage action within the engineering community</li>
                            </ul>
                            <li><b>Third-Year (Sep 2023 - Apr 2024) &amp; Fourth-Year (Sep 2025 - Present) Mechanical Engineering Class Representative</b>
                                <ul>
                                    <li>Elected representative for 200+ mechanical engineering students, facilitating communication with instructors, resolving issues, and advocating for better course and co-op opportunities.</li>
                                    <li>Organized the Iron Ring afterparty for the graduating mechanical engineering class. Most critically, I secured a venue last minute</li>
                                    <li>Major contributions to faculty council, namely formal definition of Prerequisites, Corequisites, and Exclusions and updates to mechanical engineering curriculum.</li>
                                </ul>
                            </li>
                            <li><b>Faculty Council Standing Committee Representative (Sep 2022 - Present)</b>
                                <ul>
                                    <li><b>Undergraduate Academic Appeals Board (AAB[U]) (Sep 2022 - Jul 2025)</b>: Heard appeals from undergraduate students against decisions relating to petitions for exemptions from the application of academic regulations or standards and to make rulings on such appeals</li>
                                    <li><b>Inclusivity, Diversity, Equity Advisory (IDEA) Committee (Jan 2023 - Jul 2023, Aug 2024 - Jul 2025)</b>: Pioneered the accessibility movement within this committee, advocated for the rights of students who are registered with accessibility services, resulting in a presentation by Accommodated Testing Services and Accessibility Services at the October 2023 meeting of the Faculty Council of the Faculty of Applied Science and Engineering regarding their services and best practices when submitting assessments with them, and pushed for the establishment of subclasses of type C examinations to ensure fairness for students registered with Accessibility Services</li>
                                    <li><b>Undergraduate Assessment Committee (UAC) (Sep 2025 - present)</b>: Conducted community surveys and represented students’ major policy discussions, such as revised deferred exam policy. Student member of the Academic Policies Working Group to streamline presentation of academic calendar
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Experience;
