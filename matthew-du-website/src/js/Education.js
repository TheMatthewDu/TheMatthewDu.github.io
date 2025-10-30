import { useState } from 'react';
import '../css/Education.css'; // Make sure the CSS file is still imported

const tablesData = [
    {
        id: 0,
        name: "Computer Science",
        data: [
            ['CSC108H1', 'Introduction to Computer Programming'],
            ['CSC148H1', 'Introduction to Computer Science'],
            ['CSC165H1', 'Mathematical Expression & Reasoning for Computer Science'],
            ['CSC207H1', 'Software Design'],
            ['CSC209H1', 'Software Tools & Systems Programming'],
            ['CSC236H1', 'Introduction to the Theory of Computation'],
            ['CSC258H1', 'Computer Organization'],
            ['CSC311H1', 'Introduction to Machine Learning'],
            ['MIE334H1', 'Numerical Methods I'],
            ['ECE344H1', 'Operating Systems'],
            ['ECE345H1', 'Data Structures and Algorithms']
        ],
        links: [
            'https://artsci.calendar.utoronto.ca/course/csc108h1',
            'https://artsci.calendar.utoronto.ca/course/csc148h1',
            'https://artsci.calendar.utoronto.ca/course/csc165h1',
            'https://artsci.calendar.utoronto.ca/course/csc207h1',
            'https://artsci.calendar.utoronto.ca/course/csc209h1',
            'https://artsci.calendar.utoronto.ca/course/csc236h1',
            'https://artsci.calendar.utoronto.ca/course/csc258h1',
            'https://artsci.calendar.utoronto.ca/course/csc311h1',
            'https://engineering.calendar.utoronto.ca/course/mie334h1',
            'https://engineering.calendar.utoronto.ca/course/ece344h1',
            'https://engineering.calendar.utoronto.ca/course/ece345h1'
        ]
    },
    {
        id: 1,
        name: "Mathematics",
        data: [
            ['MAT137Y1', 'Calculus with Proofs'],
            ['MAT223H1', 'Linear Algebra I'],
            ['MIE230H1', 'Engineering Analysis'],
            ['MIE231H1', 'Probability and Statistics with Engineering Applications'],
            ['MAT234H1', 'Differential Equations']
        ],
        links: [
            'https://artsci.calendar.utoronto.ca/course/mat137y1',
            'https://artsci.calendar.utoronto.ca/course/mat223h1',
            'https://engineering.calendar.utoronto.ca/course/mie230h1',
            'https://engineering.calendar.utoronto.ca/course/mie231h1',
            'https://engineering.calendar.utoronto.ca/course/mat234h1'
        ]
    },
    {
        id: 2,
        name: "Thermofluids & Solids",
        data: [
            ['PHY151H1', 'Foundations of Physics I'],
            ['CHM135H1', 'Chemistry: Physical Principles'],
            ['APS110H1', 'Engineering Chemistry & Materials Science'],
            ['CIV100H1', 'Mechanics'],
            ['MIE270H1', 'Materials Science'],
            ['MIE210H1', 'Thermodynamics'],
            ['MIE222H1', 'Mechanics of Solids I'],
            ['MIE312H1', 'Fluid Mechanics I'],
            ['MIE313H1', 'Heat and Mass Transfer']
        ],
        links: [
            'https://artsci.calendar.utoronto.ca/course/phy151h1',
            'https://artsci.calendar.utoronto.ca/course/chm135h1',
            'https://engineering.calendar.utoronto.ca/course/aps110h1',
            'https://engineering.calendar.utoronto.ca/course/civ100h1',
            'https://engineering.calendar.utoronto.ca/course/mie270h1',
            'https://engineering.calendar.utoronto.ca/course/mie210h1',
            'https://engineering.calendar.utoronto.ca/course/mie222h1',
            'https://engineering.calendar.utoronto.ca/course/mie312h1',
            'https://engineering.calendar.utoronto.ca/course/mie313h1'
        ]
    },
    {
        id: 3,
        name: "Engineering Design",
        data: [
            ['APS111H1', 'Engineering Strategies and Practice I'],
            ['APS112H1', 'Engineering Strategies and Practices II'],
            ['MIE243H1', 'Mechanical Engineering Design'],
            ['MIE221H1', 'Manufacturing Engineering'],
            ['MIE301H1', 'Kinematics & Dynamics of Machines'],
            ['MIE315H1', 'Design for the Environment']
        ],
        links: [
            'https://engineering.calendar.utoronto.ca/course/aps111h1',
            'https://engineering.calendar.utoronto.ca/course/aps112h1',
            'https://engineering.calendar.utoronto.ca/course/mie243h1',
            'https://engineering.calendar.utoronto.ca/course/mie221h1',
            'https://engineering.calendar.utoronto.ca/course/mie301h1',
            'https://engineering.calendar.utoronto.ca/course/mie315h1'
        ]
    },
    {
        id: 4,
        name: "Biomedical & Electrical Systems",
        data: [
            ['PHY152H1', 'Foundations of Physics II'],
            ['ECE110H1', 'Electrical Fundamentals'],
            ['MIE342H1', 'Circuits with Applications to Mechanical Engineering Systems'],
            ['MIE346H1', 'Digital & Analog Electronics for Mechatronics'],
            ['CHE353H1', 'Engineering Biology'],
            ['BME331H1', 'Physiological Control Systems'],
            ['MIE404H1', 'Control Systems'],
            ['MIE458H1', 'Biofluid Mechanics']
        ],
        links: [
            'https://artsci.calendar.utoronto.ca/course/phy152h1',
            'https://engineering.calendar.utoronto.ca/course/ece110h1',
            'https://engineering.calendar.utoronto.ca/course/mie342h1',
            'https://engineering.calendar.utoronto.ca/course/mie346h1',
            'https://engineering.calendar.utoronto.ca/course/che353h1',
            'https://engineering.calendar.utoronto.ca/course/bme331h1',
            'https://engineering.calendar.utoronto.ca/course/mie404h1',
            'https://engineering.calendar.utoronto.ca/course/mie458h1'
        ]
    },
    {
        id: 5,
        name: "Engineering Foundations",
        data: [
            ['APS100H1', 'Orientation to Engineering'],
            ['MIE191H1', 'Introduction to Mechanical & Industrial Engineering'],
            ['MIE258H1', 'Engineering Economics and Accounting'],
            ['HMU111H1', 'Introduction to Music & Society'],
            ['JRE420H1', 'People Management and Organizational Behaviour'],
            ['TEP343H1', 'Engineering Leadership'],
            ['ECO101H1', 'Principles of Microeconomics']
        ],
        links: [
            'https://engineering.calendar.utoronto.ca/course/aps100h1',
            'https://engineering.calendar.utoronto.ca/course/mie191h1',
            'https://engineering.calendar.utoronto.ca/course/mie358h1',
            'https://music.calendar.utoronto.ca/course/hmu111h1',
            'https://engineering.calendar.utoronto.ca/course/jre420h1',
            'https://engineering.calendar.utoronto.ca/course/tep343h1',
            'https://artsci.calendar.utoronto.ca/course/eco101h1'
        ]
    }
];

function Education() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="education">
            <div className="split-container">
                {/* Left side content */}
                <div className="left-side">
                    <h1>Education</h1>
                    <p>
                        I am a 4th-year <a
                        className="link_format"
                        href="https://engineering.calendar.utoronto.ca/section/Mechanical-Engineering"
                    >
                        Mechanical Engineering
                    </a> student at the <a className="link_format" href="https://www.utoronto.ca/">
                        University of Toronto</a> in the Bioengineering and Mechatronics streams, pursuing minors
                        in <a className="link_format" href="https://artsci.calendar.utoronto.ca/section/Computer-Science">
                            Computer Science</a> and <a className="link_format"
                           href="https://engineering.calendar.utoronto.ca/minor-robotics-and-mechatronics-aeminram">
                            Robotics &amp; Mechatronics
                        </a>.
                    </p>
                    <br></br>
                    <p>
                        Broadly speaking, I am interested in the applications of computer vision and graphics in
                        engineering, including robotic perception, flow visualization for fluid dynamics, and
                        VR/XR algorithms to support accessibility for individuals with low vision.

                        I completed my PEY Co-op at <a className="link_format" href="https://bombardier.com/en">
                        Bombardier Aerospace</a>. I will be graduating in May 2026.
                    </p>
                </div>

                {/* Right side (Tabbed View) */}
                <div className="right-side">
                    <div className="tabs" role="tablist">
                        {tablesData.map((table, index) => (
                            <button
                                key={table.id}
                                role='tab'
                                aria-selected={activeTab === index}
                                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {table.name}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        <table>
                            <tbody>
                            {tablesData[activeTab].data.map((row, index) => (
                                <tr key={index}>
                                    {/* First column contains a link */}
                                    <td>
                                        <a href={tablesData[activeTab].links[index]} target="_blank" rel="noopener noreferrer">
                                            {row[0]}
                                        </a>
                                    </td>
                                    {/* Other columns */}
                                    {row.slice(1).map((cell, idx) => (
                                        <td key={idx}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;