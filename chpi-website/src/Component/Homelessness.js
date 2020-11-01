import React from 'react'
import '../CSS/Homelessness.css';
import { Container, Row, Col } from 'react-grid-system';
import {  Link, animateScroll as scroll } from "react-scroll";

export default function Homelessness(){
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const handleSetActive = to => {
        console.log(to);
      };
    return (
        <div className="homelessness">
            <div className = "wrapper">
                <div className = "header">
                    <h1>About Homelessness</h1>
                </div>
                <Container>
                    <Row className = "row">
                        <Col className = "col">
                            <h1>Origin of Mass Homelessness</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <Link
                                activeClass="active"
                                to="hoh"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={handleSetActive}
                            ><button>History of Homelessness</button></Link>
                        </Col>
                        <Col className = "col">
                            <img src ="https://snworksceo.imgix.net/dth/90ff4c4b-0f1c-4e82-8903-0adc42c90587.sized-1000x1000.jpeg?w=1000" alt = "ch"></img>
                            <h1>Local Effects?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <Link
                                activeClass="active"
                                to="hich"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={handleSetActive}
                            ><button>Homelessness in Chapel Hill</button></Link>
                        </Col>
                        <Col className = "col">
                            <h1>What are the solutions?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <Link
                                activeClass="active"
                                to="eh"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={handleSetActive}
                            ><button>Ending Homelessness</button></Link>
                        </Col>
                    </Row>
                </Container>

                <div className = "about-homelessness-content">
                    <div id = "hoh">
                        <h1>History of Homelessness</h1>
                        <h2>The Origin of Mass Homelessness</h2>
                        <p>
                            On a given night in the United States over half a million people live in homelessness. 
                            It is estimated that there are over 850 people living without housing in Durham County 
                            and Orange County alone.  Mass homelessness is a reality of modern America.
                            Today 11 million extremely low-income households designate at least half of their income 
                            toward housing, putting them at risk of housing instability and homelessness.
                            Increasing the availability and affordability of low-income housing would go a 
                            long way in the battle against mass homelessness.  The state of Utah, in fact, 
                            has reduced chronic homelessness (people living on the street for over a year) by 91%. 
                            By studying examples like Utah, we can deduce that homelessness is here but we have the 
                            power to end it.
                        </p>
                        <p>
                        Homelessness is, at its root, a housing crisis.  
                        In the 1970s, affordable housing was plentiful and homelessness fairly rare.  
                        But by the mid-1980s, rents had risen while wages remained stagnant, forcing low-income 
                        families and individuals to dedicate more of their income to housing. This housing crisis 
                        occurred simultaneously with reform to our entitlement system. Cuts to veteran's funding, 
                        mental health deinstitutionalization, and poverty assistance programs induced a swell in 
                        the number of individuals at great risk of becoming homeless. It is evident that the 
                        elimination of the social safety net and economic forces combined to create the crisis 
                        of mass homelessness as we know it today.
                        </p>
                        <p>
                        As homelessness developed so too did our response. Our first effort was to focus on providing 
                        shelter in the form of mass congregate shelters to keep people from spending the night on the 
                        streets. While this work was important, it did not prioritize providing permanent housing and 
                        currently does not provide a plausible path to ending homelessness. With more research, we have 
                        arrived at more effective strategies that together are called the housing first system.
                        </p>
                    </div>
                    <div id = "hich">
                        <h1>Homelessness in Chapel Hill</h1>
                        <h2>The Situation</h2>
                        <p>In 2018, Orange County found that on the night of the Point in Time Homelessness count there were 152 homeless individuals in Orange County. These people were predominantly male, adults, and disproportionately black.  The number of people experiencing Chronic Homelessness, meaning they suffer from a disability and have been homeless for over 1 year, has been steadily decreasing since 2011. However, while nationally and statewide total homelessness is decreasing, the total number of people experiencing homelessness is actually increasing in Chapel Hill. Essentially, Chapel Hill is failing to prevent homelessness.</p>
                        <h2>The Strategy</h2>
                        <p>Orange County prioritizes housing for the most vulnerable, (meaning most likely to die). When individuals with the greatest need receive housing first, they are given a safe and stable environment in which they can dedicate the time and energy towards combatting mental health struggles and addiction as well as and generating an income. This strategy is based on years of research and has proven to be the most effective way to combat homelessness.</p>
                        <h2>How To Help</h2>
                        <p>If you would like to donate your time to combating homelessness in our county please explore the following sites:</p>
                        <p>Orange County's Habitat for Humanity If you would like to donate to an organization making affordable housing more prevalent in Orange County we recommend you consider donating to chapter, or attending Mixed Concrete, an art sale that raises money for affordable housing in Orange County</p>
                    </div>
                    <div id = "eh">
                        <h1>Ending Homelessness</h1>
                        <h2>What does "ending homelessness" mean?</h2>
                        <p>An end to homelessness does not mean that there are no more homeless people, but rather that homelessness is:</p>
                        <ul>
                            <li>Rare</li>
                            <li>Brief (30 - 90 days)</li>
                            <li>One time only</li>
                        </ul>
                        <h2>What is the solution?</h2>
                        <ul>
                            <li>Keep people in housing whenever homelessness can be avoided (Diversion)​​
                                <ul>
                                    <li>Prevents enormous amounts of emotional and physical trauma</li>
                                    <li>Is the most cost-effective solution</li>
                                </ul>
                            </li>
                            <li>When homelessness cannot be avoided transition to permanent housing as fast as possible</li>
                        </ul>
                        <p>Housing First is the principle of prioritizing providing permanent housing and then after the person is housed providing the necessary services to address any other issues such as addiction, mental health treatment, and unemployment. When someone lacks permanent housing, survival is the only priority. Housing must come first, the rest will follow.</p>
                    </div>
                </div>
            </div>
            <button onClick={scrollToTop}>scroll to top</button>
        </div>
    );
}
