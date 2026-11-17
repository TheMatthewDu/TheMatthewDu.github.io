import "../App.css"
import SongPlayer from "./utils/SongPlayer";

import composition1 from "../assets/music/composition1.mp3";
import composition2 from "../assets/music/composition2.mp3";
import ece345_notes from "../assets/files/DSA_Notes.pdf";


function Miscellaneous(){

    const myTracks = [
        {
            title: "Howard's Song to Bernadette from The Big Bang Theory (Orchestral)",
            description: "This is the song Howard sings to Bernadette in The Big Bang Theory. It works really well for orchestra!",
            src: composition2
        },
        {
            title: "Random short musical idea",
            description: "A gentle instrumental with a nostalgic, cinematic feeling.",
            src: composition1,
        }
    ];

    return (
        <section id="miscellaneous" className="section">
            <div className="container">
                <h2>Miscellaneous</h2>
                
                <h3>Notes</h3>
                <p>Here are some of my course notes in some of my courses at the University of Toronto</p><br></br>
                <ul>
                    <li><a href={ece345_notes}>Data Structures and Algorithms (ECE345H1)</a></li>
                </ul>

                <h3>Music</h3>
                <p>The following are some of my musical preformances from a very very long time ago, as well as my more recent compositions/arrangements</p><br></br>

                <SongPlayer tracks={myTracks} />

                <div className="video-wrapper">
                    <iframe 
                        src={"https://www.youtube.com/embed/JjTsppsZKSk?si=eHXW8Dm2ooZrdF4H"}
                        title="YouTube video player" 
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </div>

                <div className="video-wrapper">
                    <iframe 
                        src={"https://www.youtube.com/embed/Q-oT467FROQ?si=ODpJ-mDWCsoPFXfS"}
                        title="YouTube video player" 
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </div>
                
                <div className="video-wrapper">
                    <iframe 
                        src={"https://www.youtube.com/embed/I5Wai6RGKJc?si=ovoGoKmrlJgDDtGR"}
                        title="YouTube video player" 
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </div>
            </div>
        </section>
    );
}

export default Miscellaneous;
