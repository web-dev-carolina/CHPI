import React from 'react'
import '../CSS/About.css';

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-header">
                    <div className="about-title">
                        <h1>What We Do</h1>
                        <div className="about-header-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                
                <div className="team-container">
                    <div className="team-header">
                        <h1>Meet the Team</h1>
                    </div>
                    <div className="team-content">
                        {
                            team.map((member) => (
                                <li key={member.name}
                                    className="profile"
                                >
                                    <img src={member.picture} alt="" className="profile-picture"></img>
                                    <h1 className="profile-name">{member.name}</h1>
                                    <p className="profile-role">{member.role}</p>
                                    <a href={member.link}><i className="fab fa-linkedin fa-2x"></i></a>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const team = [
    {
        name: "Michael Scott",
        role: "President",
        picture: require("../Images/michael.jpg"),
        link: ""

    },
    {
        name: "Dwight Schrute",
        role: "Vice President",
        picture: require("../Images/dwight.jpg"),
        link: ""
    },
    {
        name: "Pam Beesly",
        role: "VP of Marketing",
        picture: require("../Images/pam.jpg"),
        link: ""

    },
    {
        name: "Jim Halpert",
        role: "VP of Events",
        picture: require("../Images/jim.png"),
        link: ""

    },
    {
        name: "Kevin Malone",
        role: "Committee Member",
        picture: require("../Images/kevin.png"),
        link: ""

    },
    {
        name: "Stanley Hudson",
        role: "Committee Member",
        picture: require("../Images/stanley.jpg"),
        link: ""

    }
]

export default About;

