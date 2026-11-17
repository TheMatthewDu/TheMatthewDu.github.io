import "../App.css";

import thesis from "../assets/images/thesis.png";
import capstone from "../assets/images/capstone.png";
import wearable from "../assets/images/wearable.png";

import paper_abstract from "../assets/files/abstract.pdf";
import paper_poster from "../assets/files/poster.pdf";
import thesis_doc from "../assets/files/Du_Matthew__202606_BASc_thesis.pdf"
function Projects(){
    return (
        <>
        <section id="publications" className="section">
            <div className="container">
                <h2>Publications</h2>

                <div className="awards-container">
                    <h3>A Cable-Driven Soft Robotic Hand with an
                            In-hand RGB-D Camera for Dexterous Grasping and Manipulation</h3>
                    <p>Zhanfeng Zhou, Runze Zuo, Matthew Du, Shawn Wang, Sebastian Levy, Yu Sun, Xinyu Liu</p>
                    <p>
                        <a href="https://doi.org/10.1109/TRO.2025.3641751">[T-RO Paper]</a> &nbsp;
                        <a href="https://event.fourwaves.com/csme-cfd2024/abstracts/903abe77-1edb-492e-8c4f-f024a193fd76">[CSME Congress Abstract]</a> &nbsp;                       
                        <a href={paper_poster}>[UnERD Poster]</a> &nbsp;                        
                        <a href={paper_abstract}>[UnERD Abstract]</a>
                    </p>
                </div>
            </div>
        </section>

        <section id="projects" className="section">
            <div className="container">
                <h2>Projects</h2>
                
                <div className="project">
                    <img className="project-thumbnail-img" src={thesis} alt="Thesis Image"/>
                    <div className="project-text">
                        <h3>Identification and Tracking of Vortex Structures in Cerebrovascular Flows from High-Fidelity CFD</h3>
                        <p className="project-text">
                            This is my Undergraduate Thesis Project, where I was working on Vortex Detection in Cerebrovascular Computational Fluid Dynamics. I developed a Simple Online and Realtime Tracking (SORT)-based pipeline to track the Q-Criterion isosurfaces computed from the output to high fidelity CFD analyses.
                        </p>
                        <p><a href={thesis_doc}>[Read it Here!]</a></p>
                    </div>

                    <img className="project-thumbnail-img" src={capstone} alt="Capstone Image"/>
                    <div className="project-text">
                        <h3>Portable Upper Limb Haptic Exoskeleton for Blind and Low-Vision
                        Individuals Navigation</h3>
                        <p className="project-text">
                            This capstone project developed a wearable haptic exoskeleton to support navigation for blind and low-vision users by translating virtual information into physical haptic cues. Building on an existing stationary VR-haptic glove system, the design objective was to create a portable and programmable alternative that preserves meaningful force feedback while improving mobility, comfort, and real-world usability. A digital twin of the physical design was created as a basis for the virtual environment for user exploration using the Unity Software and the prototype CAD files.
                        </p>
                    </div>

                    <img className="project-thumbnail-img" src={wearable} alt="Capstone Image"/>
                    <div className="project-text">
                        <h3 className="project-title">Wearable Camera</h3>
                        <p className="project-text">
                            Developed a 3D-printed wearable camera powered by a Raspberry Pi Zero, Raspberry Pi NoIR camera, and near-eye display, designed to assist individuals with visual impairments. Implemented a computer vision algorithm for object detection and tracking, utilizing YOLO trained on COCO for detection and Kalman filtering for tracking. Currently enhancing performance by integrating SORT and DeepSORT algorithms for improved tracking accuracy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Projects;