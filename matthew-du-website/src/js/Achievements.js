// Achievements.js
import React from 'react';
import {useState} from "react";
import '../css/Achievements.css'

import utsla from "../img/accomplishments/utsla.png"
import earl_charles_lyon from "../img/accomplishments/awards_thumbnail.png"

import skule from "../img/accomplishments/skule.png"
import ndravaw from "../img/accomplishments/ndravaw.png"
import bombardier from "../img/accomplishments/bombardier_event.jpg"

const accomplishments = [
    {
        id: 1,
        title: "Academic Advocacy",
        image: skule,
        description: "I initiated or contributed to countless policy initiatives within the Faculty of Applied Science and Engineering or Engineering Society",
        details: [
            {
                type: "link",
                text: "Expanded Definitions for Type C Exams",
                href: "https://www.engineering.utoronto.ca/wp-content/uploads/sites/28/2023/10/06b-Report-3748-UAC-Expanded-Definitions-for-Type-C-Exams.pdf"
            },
            {
                type: "link",
                text: "Guidelines for Facilitating Common Accommodations",
                href: "https://www.engineering.utoronto.ca/wp-content/uploads/sites/28/2023/11/Faculty-Guidelines-for-Common-Accommodations.pdf"
            },
            {
                type: "link",
                text: "Adding Definitions for Course Preparation in the Academic Calendar",
                href: "https://www.engineering.utoronto.ca/wp-content/uploads/sites/28/2025/04/07-Report-3785-UCC-Adding-Defs-for-Core-Courses.pdf"
            },
            {
                type: "text",
                content: "Somehow, the Faculty did not have a definition for Prerequisites, Corequisites, and " +
                    "Exclusions, caused some confusion when I observed an issue. This led to the development and " +
                    "adaptation of the definitions of these terms in the faculty's academic calendar."
            },
            {
                type: "link",
                text: "Land Acknowledgement on Skule™.ca",
                href: "https://www.skule.ca"
            },
        ]
    },
    {
        id: 2,
        title: "NDRAVAW 2024 Memorial Tribute",
        image: ndravaw,
        description: "National Day of Remembrance and Action on Violence Against Women 2024 Memorial Tribute",
        details: [
            {
                type: "link",
                text: "EquityAtSkule Instagram",
                href: "https://www.instagram.com/equityatskule"
            },
            {
                type: "link",
                text: "University of Toronto Commemoration Livestream",
                href: "https://youtu.be/1u3iwLvnr-E?si=ENCjQeqGRRsXxU3m&t=2356"
            },
            {
                type: "text",
                content: "As part of the responsibilities as the Equity and Inclusivity project director, I was " +
                    "responsible for planning and executing a memorial event for the National Day of Remembrance and " +
                    "Action on Violence Against Women 2024. The largest initiative was a 14-day social media " +
                    "cross-posting campaign with 14 different clubs and organizations in remembrance of the 14 " +
                    "victims of the Montreal Ecole Polytechnique Massacre. I also took part in the University" +
                    "and Faculty commemorations."
            }
        ]
    },
    {
        id: 3,
        title: "UTCSME Aerospace Networking Event",
        image: bombardier,
        description: "Networking event with Engineering Career Center",
        details: [
            {
                type: "link",
                text: "Land Acknowledgement on Skule™.ca",
                href: "https://www.skule.ca"
            },
            {
                type: "text",
                content: "Somehow, the Faculty did not have a definition for Prerequisites, Corequisites, and " +
                    "Exclusions, caused some confusion when I observed an issue. This led to the development and " +
                    "adaptation of the definitions of these terms in the faculty's academic calendar."
            }
        ]
    }
];

const awards = [
    {
        id: 1,
        title: "Student Leadership Award 2025-26",
        image: utsla,
        description: "University of Toronto Student Leadership Award (UTSLA) winner",
        details: [
            {
                type: "link",
                text: "University of Toronto Engineering Article",
                href: "https://news.engineering.utoronto.ca/celebrating-student-leadership-and-service-across-u-of-t-engineering/"
            },
            {
                type: "text",
                content: "I was awarded as one of 18 engineering students by the University of Toronto for my work " +
                    "advocating for improving policies and planning to support students with disabilities. " +
                    "This award is given by the University of Toronto Alumni Association to Graduating students of any " +
                    "program who has made a significant contribution to the university community."
            }
        ]
    },
    {
        id: 2,
        title: "The Earl Charles Lyons Memorial Award",
        image: earl_charles_lyon,
        description: "Awarded by the Faculty of Applied Science and Engineering",
        details: [
            {
                type: "link",
                text: "Award Description",
                href: "https://engineering.calendar.utoronto.ca/scholarships-and-financial-aid#:~:text=a%20grant%20application.-,The%20Earl%20Charles%20Lyons%20Memorial%20Award,-The%20Earl%20Charles"
            },
            {
                type: "text",
                content: "I was given this award for my considerable contributions to the MIE department through my " +
                    "work as Class Representative as well as co-president of the Canadian Society of Mechanical " +
                    "Engineers U of T Student Chapter. This is awarded on the recommendation of the chair of the " +
                    "department of Mechanical & Industrial Engineering to a student completing the third-year " +
                    "Mechanical Engineering. In addition to honours standing, consideration is given to character and " +
                    "leadership capabilities through involvement in student and professional activities."
            }
        ]
    }
];

function Card({item, onOpen}) {
    return (
        <div className="card">
            <img src={item.image} alt={item.title}/>
            <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button onClick={() => onOpen(item)}>Show more</button>
            </div>
        </div>
    );
}

function Modal({item, onClose}) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <img src={item.image} alt={item.title}/>
                <h2>{item.title}</h2>
                {item.details.map((block, i) => {
                    if (block.type === "link") {
                        return (
                            <p>
                                <a key={i} href={block.href} className="link_format">
                                    {block.text}
                                </a>
                            </p>
                        );
                    }

                    if (block.type === "text") {
                        return <p key={i}>{block.content}</p>;
                    }

                    return null;
                })}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

function Achievements() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="achievements" className="achievements">
            <h2 className="section-title">Achievements &amp; Awards</h2>

            <h3>Awards</h3>
            <div className="gallery">
                {awards.map(item => (
                    <Card key={item.id} item={item} onOpen={setSelectedItem}/>
                ))}
            </div>

            {selectedItem && (
                <Modal item={selectedItem} onClose={() => setSelectedItem(null)}/>
            )}

            <h3>Achievements</h3>
            <div className="gallery">
                {accomplishments.map(item => (
                    <Card key={item.id} item={item} onOpen={setSelectedItem}/>
                ))}
            </div>

            {selectedItem && (
                <Modal item={selectedItem} onClose={() => setSelectedItem(null)}/>
            )}
        </section>
    );
}

export default Achievements;
