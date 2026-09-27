// Publications.js
import React from 'react';
import "../css/Miscellaneous.css";

import composition1 from "../img/music/composition1.mp3";
import composition2 from "../img/music/composition2.mp3";

import dsa_notes from "../img/notes/DSA_Notes.pdf";

function Miscellaneous() {
    return (
        <section id="miscellaneous">
            <div className="misc_body">
                <h2 className="misc_title">Miscellaneous</h2>

                <h3>Course Notes</h3>
                <p>I have been told I take insanely detailed notes (not for every course; only ones where I feel it is
                    pedagogically advantageous to type them). I spend so much time on them, so posting it here for
                    anyone who may need it.
                </p>
                <ul>
                    <li><a href={dsa_notes}>Data Structures and Algorithms</a></li>
                    <li><a href={dsa_notes}>C and Introductory Systems Programming</a></li>
                    <li><a href={dsa_notes}>Differential Equations</a></li>
                    <li><a href={dsa_notes}>Calculus III and Engineering Mathematics</a></li>
                </ul>

                <h3 className="misc-subtitle">Music Performances</h3>
                <p>
                    Here are some of my past musical performances and a selection of my short compositions
                </p>
                <div className="misc">
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

                <h3 className="misc-subtitle">Music Compositions</h3>
                <p>I write music as well, although less and less recently due to school! Here are some of my recent
                    compositions/arrangements</p>

                <div className="misc">
                    <p>The following are some short musical ideas</p>
                    <audio controls>
                        <source src={composition1} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>

                <div className="misc">
                    <p>The following are some musical arrangements of popular tunes</p>

                    <p style={{"text-align": "left"}}>Howard's Song to Bernadette from The Big Bang Theory (Orchestral)</p>
                    <audio controls>
                        <source src={composition2} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </section>
)
}

export default Miscellaneous;
