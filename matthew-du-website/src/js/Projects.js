// Projects.js
import React, { useState } from 'react';
import '../css/Projects.css'

// Logos
import wearables from '../img/thumbnails/wearable_thumbnail.png'
import obj_track from '../img/wearable/object_tracking.gif'
import obj_track2 from '../img/wearable/object_tracking2.gif'
import obj_track3 from '../img/wearable/camera_view_object_tracking.gif'
import wearable_image1 from '../img/wearable/IMG_6679.jpg'
import wearable_image2 from '../img/wearable/IMG_6682.jpg'
import wearable_image3 from '../img/wearable/IMG_1018.jpg'
import wearable_image4 from '../img/wearable/IMG_1020.jpg'

// import affective from '../img/thumbnails/affective_gen.png'
import planner from '../img/planner/planner_thumbnail.png'

import gearbox from "../img/thumbnails/Gearbox_thumbnail.png"
import gearbox1 from '../img/gearbox/Gearbox_pic_1.jpg'
import gearbox2 from '../img/gearbox/Gearbox_pic_2.jpg'
import gearbox3 from '../img/gearbox/Gearbox_pic_3.jpg'
import gearbox4 from '../img/gearbox/Gearbox_pic_4.jpg'

import timetable from '../img/thumbnails/timetable_thumbnail.png'
import timetable1 from "../img/timetable_app/search_bar.png"
import timetable2 from "../img/timetable_app/add_course_page.png"
import timetable3 from "../img/timetable_app/main_screen.png"


function Projects() {
    const [showOverlay1, setShowOverlay1] = useState(false);
    const [showOverlay2, setShowOverlay2] = useState(false);
    const [showOverlay3, setShowOverlay3] = useState(false);
    const [showOverlay4, setShowOverlay4] = useState(false);

    const handleButtonClick1 = () => {setShowOverlay1(!showOverlay1)};
    const handleButtonClick2 = () => {setShowOverlay2(!showOverlay2)};
    const handleButtonClick3 = () => {setShowOverlay3(!showOverlay3)};
    const handleButtonClick4 = () => {setShowOverlay4(!showOverlay4)};

    const handleCloseOverlay1 = () => {setShowOverlay1(false)};
    const handleCloseOverlay2 = () => {setShowOverlay2(false)};
    const handleCloseOverlay3 = () => {setShowOverlay3(false)};
    const handleCloseOverlay4 = () => {setShowOverlay4(false)};

    return (
        <section id="projects">
            <div className="project_body">
                <h2 className="section-title" style={{color: 'black'}}>Projects</h2>
                <div className="project">
                    <img className="project-thumbnail-img" src={wearables} alt="Project 1"/>
                    <div className="project-description">
                        <h3 className="project-title">Wearable Camera</h3>
                        <p className="project-text">
                            Developed a 3D-printed wearable camera powered by a Raspberry Pi Zero, Raspberry Pi NoIR
                            camera, and near-eye display, designed to assist individuals with visual impairments.
                            Implemented a computer vision algorithm for object detection and tracking, utilizing YOLO
                            trained on COCO for detection and Kalman filtering for tracking. Currently enhancing
                            performance by integrating SORT and DeepSORT algorithms for improved tracking accuracy.
                        </p>
                        <br></br>

                        <button className="project-button" onClick={handleButtonClick1}>Algorithm</button>
                        {/* Overlay - only visible if showOverlay is true */}
                        {showOverlay1 && (
                            <div className="project-overlay">
                                <div className="overlay-content">
                                    <button className="close-button" onClick={handleCloseOverlay1}>&times;</button>
                                    <h2>Algorithm</h2>
                                    <div className="image-container">
                                        <img className="image" src={obj_track}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={obj_track2}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={obj_track3}
                                             alt="Demonstration of Wearable Camera from Eye level perspective"/>
                                    </div>
                                </div>
                            </div>
                        )}
                        &nbsp;
                        <button className="project-button" onClick={handleButtonClick2}>Mechanical</button>
                        {/* Overlay - only visible if showOverlay is true */}
                        {showOverlay2 && (
                            <div className="project-overlay">
                                <div className="overlay-content">
                                    <button className="close-button" onClick={handleCloseOverlay2}>&times;</button>
                                    <h2>Wearable Assembly</h2>
                                    <br></br>
                                    <div className="image-container">
                                        <img className="image" src={wearable_image1}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={wearable_image2}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={wearable_image3}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={wearable_image4}
                                             alt="Demonstration of Wearable Camera"/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="project">
                    <img className="project-thumbnail-img" src={planner} alt="Project 2"/>
                    <div className="project-description">
                        <h3 className="project-title">University of Toronto Mechanical Engineering Course Planner</h3>
                        <p className="project-text">
                            Frustrated by the limitations of existing degree planners, I designed and developed a
                            ReactJS‑based Degree Explorer deployed on GitHub Pages that helps streamlines academic
                            planning by addressing the faults of the degree explorer. It features a course search
                            feature with prerequisite and exclusion checks, plus a module that tracks progress against
                            core, elective and minor requirements. An interactive dashboard visualizes advancement
                            toward minors (and will soon include certificates), while data‑serialization/export
                            functionality ensures easy backup and sharing. I’m currently integrating a recommender
                            system to guide optimal course selection.
                        </p>
                        <br></br>
                        <a href="https://thematthewdu.github.io/CourseSelectionHelper/">
                            <button className="project-button">Check it out!</button>
                        </a>
                    </div>
                </div>

                <div className="project">
                    <img className="project-thumbnail-img" src={gearbox} alt="Project 3"/>
                    <div className="project-description">
                        <h3 className="project-title">3D-Printed Gearbox</h3>
                        <p className="project-text">
                            Collaborated with a team of six to design and 3D-print a custom gearbox, utilizing a 3:1
                            gear reduction ratio. The design features a non-collinear input and output shaft offset by
                            90 degrees. Achieved the desired gear ratio using two spur gears, while incorporating two
                            bevel gears at a 1:1 ratio to ensure the 90-degree offset. Contributed to the project’s
                            overall mechanical design and 3D printing, optimizing for ease of assembly and strength.
                        </p>
                        <br></br>
                        <button className="project-button" onClick={handleButtonClick3}>Images</button>
                        {/* Overlay - only visible if showOverlay is true */}
                        {showOverlay3 && (
                            <div className="project-overlay">
                                <div className="overlay-content">
                                    <button className="close-button" onClick={handleCloseOverlay3}>&times;</button>
                                    <h2>Image Gallery</h2>
                                    <div className="image-container">
                                        <img className="image" src={gearbox1}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={gearbox2}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={gearbox3}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={gearbox4}
                                             alt="Demonstration of Wearable Camera"/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="project">
                    <img className="project-thumbnail-img" src={timetable} alt="Project 4"/>
                    <div className="project-description">
                        <h3 className="project-title">Java Timetable Scheduling App</h3>
                        <p className="project-text">
                            Led a team of seven students to develop a timetable planning tool in Java, integrating the
                            (now-deprecated) University of Toronto Course Finder through the JSoup library. The tool
                            features GUI built with Java Swing, allowing students to search and add courses or
                            other tasks to their schedules. Implemented functionality for saving and loading
                            timetables using a custom file extension for serialized data storage. Additionally,
                            designed and integrated a Depth First Search (DFS) algorithm to automatically schedule
                            multiple courses into students’ timetables.
                        </p>
                        <br></br>
                        <a href="https://github.com/matthewrhdu/sout-this_is_our_teamname-forked-CSC207H1-Project">
                            <button className="project-button">Repository</button>
                        </a>
                        &nbsp;
                        <button className="project-button" onClick={handleButtonClick4}>Images</button>
                        {/* Overlay - only visible if showOverlay is true */}
                        {showOverlay4 && (
                            <div className="project-overlay">
                                <div className="overlay-content">
                                    <button className="close-button" onClick={handleCloseOverlay4}>&times;</button>
                                    <h2>Image Gallery</h2>
                                    <div className="image-container">
                                        <img className="image" src={timetable1}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={timetable2}
                                             alt="Demonstration of Wearable Camera"/>
                                        <img className="image" src={timetable3}
                                             alt="Demonstration of Wearable Camera"/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
