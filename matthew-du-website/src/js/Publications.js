// Publications.js
import React from 'react';
import "../css/Publications.css"

// Logos
import paper_img from '../img/thumbnails/south_korean_president_picture.png'
import poster from "../img/LiuLab/poster.pdf"
import abstract from "../img/LiuLab/abstract.pdf"

function Publications() {

    return (
        <section id="publications">
            <div className="publication_body">
                <h2 className="section-title">Publications</h2>
                <div className="pub-description">
                    <p>Broadly speaking, I am interested in anything numerical, whether that would be with Computational
                        Fluid Dynamics, Computer Vision, or Machine Learning</p>
                </div>
                <div className="publication">
                    <img className="publication-thumbnail-img" src={paper_img} alt="Publication 1"/>
                    <div className="publication-details">
                        <h3 className="publication-title">A Cable-Driven Soft Robotic Hand with an
                            In-hand RGB-D Camera for Dexterous Grasping and Manipulation</h3>
                        <p className="publication-text">Zhanfeng Zhou, Runze Zuo, Matthew Du, Shawn Wang,
                            Sebastian Levy, Yu Sun, Xinyu Liu</p>
                        <br></br>
                        <a className='publication-button' href="https://doi.org/10.1109/TRO.2025.3641751">Paper</a>
                        &nbsp;
                        <a className="publication-button" href="https://event.fourwaves.com/csme-cfd2024/abstracts/903abe77-1edb-492e-8c4f-f024a193fd76">Conference Abstract</a>
                        &nbsp;
                        <a className='publication-button' href={poster}>Poster</a>
                        &nbsp;
                        <a className='publication-button' href={abstract}>Abstract</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publications;
