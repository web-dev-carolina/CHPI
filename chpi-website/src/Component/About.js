import React from 'react'
import '../CSS/About.css';

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-header">
                    <div className="about-title">
                        <h1>OUR STORY</h1>
                        <div className="about-header-content">
                        Carolina Homelessness Prevention Initiative began in the fall of 2017, then called Focus on Franklin. 
                        The concept at the time was simple: a website with stories from Chapel Hill's homeless residents, in the style of Humans of New York with an opportunity for direct donation to the people profiled on the site. 
                        As we worked, we developed relationships with the experts at the Inter-Faith Council for Social Service, Community Empowerment Fund, and Orange County Partnership to End Homelessness. 
                        We soon realized that there was more important work for our team to do. Diversion funding was one of the 8 gaps in the county homelessness system. We decided this was where we could make the most impact. 
                        Today, we are a registered 501(c)3 and proud to be an integrated part of Chapel Hill's network of organizations working to end homelessness.
                        <hr className="space"></hr>
                        Today CPHI is able to step in and prevent homelessness in 23% of cases through small, one-time financial assistance. 
                        Almost one in four people facing homelessness in Orange County is diverted by CHPI. We are a registered 501c3 with a team of almost 20 fundraisers who have been meeting Orange County's diversion needs successfully for the last year. 
                        In March of 2019, Orange County declared the diversion gap sufficiently filled.
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
                                    <p className="profile-paragraph">{member.paragraph}</p>
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
        name: "Warner Lamar",
        role: "Director",
        picture: require("../Images/warnerLamar.png"),
        link: "",
        paragraph: "Warner is a sophomore studying computer science from Nashville, TN. After graduation, he hopes to go into software development. His spirit animal is an orangutan. Warner is very passionate about the homeless crisis across the country and strives to make an impact in the town he now calls home. "
        

    },
    {
        name: "Will Douthit",
        role: "President",
        picture: require("../Images/willDouthit.png"),
        link: "",
        paragraph: "Will Douthit is a sophomore from Wilmette, Illinois majoring in Business Administration and minoring in conflict management. He is passionate about determining the various intersections between social responsibility and innovation and is excited to lead the fundraising initiative for homelessness prevention in the greater Orange County area."
    },
    {
        name: "William Goldburg",
        role: "Financial Chair",
        picture: require("../Images/williamGoldberg.png"),
        link: "",
        paragraph: "William is a Sophomore from Atlanta, Georgia majoring in Economics with a minor in Business and Entrepreneurship. William is excited about his financial role because it lies at an intersection of his academic interests and giving back to the community, especially within homelessness prevention. "

    },
    {
        name: "Nate Miller",
        role: "Alumni Outreach",
        picture: require("../Images/nateMiller.png"),
        link: "",
        paragraph: "Nate is a Junior from Denver, Colorado majoring in Business Administration and minoring in Philosophy, Politics, and Economics. Nate is passionate about raising awareness for homeless diversion, and is excited to create an extensive network of passionate UNC alumni."
    }
    // },
    // {
    //     name: "Kevin Malone",
    //     role: "Committee Member",
    //     picture: require("../Images/kevin.png"),
    //     link: ""

    // },
    // {
    //     name: "Stanley Hudson",
    //     role: "Committee Member",
    //     picture: require("../Images/stanley.jpg"),
    //     link: ""

    // }
]

export default About;

