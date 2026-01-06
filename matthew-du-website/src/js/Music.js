// Publications.js
import React from 'react';
import "../css/Music.css";

import composition1 from "../img/music/composition1.mp3";

function Music() {
    return (
        <section id="music">
            <div className="music_body">
                <h2 className="section-title" style={{color: "black"}}>Music</h2>
                <p style={{color: "black", textAlign: "center"}}>
                    Here are some of my past musical performances and a selection of my short compositions
                </p>
                <div className="music">
                    <iframe width="50%" height="400"
                            src="https://www.youtube.com/embed/JjTsppsZKSk?si=eHXW8Dm2ooZrdF4H"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe width="50%" height="400"
                            src="https://www.youtube.com/embed/Q-oT467FROQ?si=ODpJ-mDWCsoPFXfS"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe width="50%" height="400"
                            src="https://www.youtube.com/embed/I5Wai6RGKJc?si=ovoGoKmrlJgDDtGR"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="music">
                    <audio controls>
                        <source src={composition1} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </section>
    )
}

export default Music;
