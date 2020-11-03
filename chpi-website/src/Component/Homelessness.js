import React from 'react'
import '../CSS/Homelessness.css';
import { Container, Row, Col } from 'react-grid-system';
import {  Link, animateScroll as scroll } from "react-scroll";
import {Button,
        Card,
        CardActionArea,
        CardActions,
        CardContent,
        CardMedia,
        makeStyles,
        Typography} from '@material-ui/core';
import logo1 from '../Images/chapelHill.jpg'
import logo2 from '../Images/hc.jpeg'
import logo3 from '../Images/homelessnessInA.jpg'
import chart from '../Images/dataChart.webp'
import chart2 from '../Images/hich2.webp'
import quotePic from '../Images/mayaAngelou.webp'
import timeline from '../Images/timeline.webp'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
});

export default function Homelessness(){
  const classes = useStyles();
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const handleSetActive = to => {
        console.log(to);
      };
    return (
        <div className="homelessness">
                <div className = "header">
                    <div className = "headerContentOp">
                        <div className = "headerContent">
                        <h1>About Homelessness</h1>
                        <p>Learn more about the state of Homelessness</p>
                        <Link activeClass="active" to="aboutHtitle" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>
                            <Button style={{
                                backgroundColor: "#79ADD3",
                                padding: "10px 25px",
                                fontSize: "15px"
                            }}>Learn More</Button>
                        </Link>
                        </div>
                    </div>
                </div>
                <h1 id= "aboutHtitle">About Homelessness</h1>
                <Container id = "info">
                    <Row>
                    <Link activeClass="active" to="hich" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
                    <Col>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={logo1}
                                title="Homelessness in Chapel Hill"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Homelessness in Chapel Hill
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Explore the current situation of Homelessness in Orange County as well as ways to help locally!
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Col>
                    </Link>
                    <Link
                            activeClass="active"
                            to="hoh"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}>
                    <Col>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={logo2}
                                title="History of Homelessness"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                History of Homelessness
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Find out more about the origin of mass Homelessness!
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Col>
                    </Link>
                    <Col>
                    <Link
                            activeClass="active"
                            to="eh"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={logo3}
                                title="Ending Homelessness"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Ending Homelessness
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    How can we end Homelessness in the U.S.? Learn about effective tools and solutions!
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        </Link>
                        </Col>
                    </Row>
                </Container>
                <div className = "about-homelessness-content">
                    <div id = "hich">
                        <h1>Homelessness in Chapel Hill</h1>
                        <Container>
                        <h2>The Situation</h2>
                        <Row>
                            <Col sm={6}>
                            <img src={chart} alt=""/>
                            </Col>
                            <Col sm={6}>
                            <p>In 2018, Orange County found that on the night of the Point in Time Homelessness count there were 152 homeless individuals in Orange County. These people were predominantly male, adults, and disproportionately black.  The number of people experiencing Chronic Homelessness, meaning they suffer from a disability and have been homeless for over 1 year, has been steadily decreasing since 2011. However, while nationally and statewide total homelessness is decreasing, the total number of people experiencing homelessness is actually increasing in Chapel Hill. Essentially, Chapel Hill is failing to prevent homelessness.</p>
                            </Col>
                        </Row>
                        <h2>The Strategy</h2>
                        <Row>
                            <Col sm={6}>
                            <p>Orange County prioritizes housing for the most vulnerable, (meaning most likely to die). When individuals with the greatest need receive housing first, they are given a safe and stable environment in which they can dedicate the time and energy towards combatting mental health struggles and addiction as well as and generating an income. This strategy is based on years of research and has proven to be the most effective way to combat homelessness.</p>
                            </Col>
                            <Col sm={6}>
                            <img src={chart2} alt=""/>
                            </Col>
                        </Row>
                        <h2>How To Help</h2>
                        <Row>
                            <Col style={{lineHeight:'2rem'}}>
                            <p>If you would like to donate your time to combating homelessness in our county please explore the following sites:</p>
                            <ul style={{marginLeft:20}}>
                            <a href="https://communityempowermentfund.org/about/"><li>Community Empowerment Fund</li></a>
                            <a href="https://www.ocpehnc.com/projectconnect"><li>Project Connect</li></a>
                            <a href="http://ochmis.org/point-in-time-count-pit/"><li>Point in Time Count</li></a>
                            <a href="https://www.ifcweb.org/volunteer"> <li>Inter-faith Council</li></a>
                            </ul>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>                            
                            <p>Orange County's <a href="https://www.orangehabitat.org/">Habitat for Humanity</a> If you would like to donate to an organization making affordable housing more prevalent in Orange County we recommend you consider donating to chapter, or attending
                            <a href="https://mixedconcrete.org/"> Mixed Concrete</a>, an art sale that raises money for affordable housing in Orange County</p>
                            </Col>
                        </Row>
                        </Container>
                        </div>
                    <div id = "hoh">
                        <h1>History of Homelessness</h1>
                        <Container>
                        <h2>The Origin of Mass Homelessness</h2>
                        <p>
                            On a given night in the United States <strong>over half a million people</strong> live in homelessness. 
                            It is estimated that there are over <strong>850 people</strong> living without housing in Durham County 
                            and Orange County alone.  Mass homelessness is a reality of modern America.
                            </p>
                            <br></br>
                            <p>
                            Today 11 million extremely low-income households designate at least half of their income
                            toward housing, putting them at risk of housing instability and homelessness.
                            Increasing the <strong>availability</strong> and <strong>affordability</strong> of low-income housing would go a 
                            long way in the battle against mass homelessness.  The state of Utah, in fact, 
                            has reduced chronic homelessness (people living on the street for over a year) by 91%. 
                            By studying examples like Utah, we can deduce that homelessness is here but we have the 
                            power to end it.
                        </p>
                        <br></br>
                            <Row>
                            <Col sm = {6}>
                                <p style = {{textAlign: 'center', margin: 50, outline:' 2px solid rgb(121, 173, 211)', padding: 8}}>“The ache for home lives in all of us, the safe place where we can go as we are and not be questioned.” <br></br>– Maya Angelou</p>
                                </Col>
                                <Col sm = {6}>
                                <img src={quotePic} alt="" style = {{width: '100%', maxWidth:'400px', height: 'auto'}}/>
                                </Col>
                            </Row>
                            <br></br>
                            <p>
                            Homelessness is, at its root, a <strong>housing crisis</strong>.  
                            In the 1970s, affordable housing was plentiful and homelessness fairly rare.  
                            But by the mid-1980s, rents had risen while wages remained stagnant, forcing low-income 
                            families and individuals to dedicate more of their income to housing. This housing crisis 
                            occurred simultaneously with reform to our entitlement system. Cuts to veteran's funding, 
                            mental health deinstitutionalization, and poverty assistance programs induced a swell in 
                            the number of individuals at great risk of becoming homeless. It is evident that the 
                            elimination of the social safety net and economic forces combined to create the crisis 
                            of mass homelessness as we know it today.
                            </p>
                            <img src={timeline} alt="" style = {{width: '100%', maxWidth:'500px', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                            <br></br>
                            <p>
                            As homelessness developed so too did our response. Our first effort was to focus on providing 
                            shelter in the form of mass congregate shelters to keep people from spending the night on the 
                            streets. While this work was important, it did not prioritize providing permanent housing and 
                            currently does not provide a plausible path to ending homelessness. With more research, we have 
                            arrived at more effective strategies that together are called the <Link activeClass="active" to="eh" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}><strong>housing first system</strong></Link>.
                            </p>
                        </Container>
                    </div>
                    <div id = "eh">
                        <h1>Ending Homelessness</h1>
                        <Container>
                        <h2>What does "ending homelessness" mean?</h2>
                        <p>An end to homelessness does not mean that there are no more homeless people, but rather that homelessness is:</p>
                        <ul style = {{lineHeight:'2rem', marginLeft:10}}>
                            <li>Rare</li>
                            <li>Brief (30 - 90 days)</li>
                            <li>One time only</li>
                        </ul>
                        <h2>What is the solution?</h2>
                        <ul style = {{lineHeight:'2rem', marginLeft:10}}>
                            <li>Keep people in housing whenever homelessness can be avoided <strong>(Diversion)​​</strong>
                                <ul style = {{marginLeft:20}}>
                                    <li>Prevents enormous amounts of emotional and physical trauma</li>
                                    <li>Is the most cost-effective solution</li>
                                </ul>
                            </li>
                            <li>When homelessness cannot be avoided transition to permanent housing as fast as possible</li>
                            <li><strong>Housing First</strong> is the principle of prioritizing providing permanent housing and then after the person is housed providing the necessary services to address any other issues such as addiction, mental health treatment, and unemployment. When someone lacks permanent housing, survival is the only priority. Housing must come first, the rest will follow.</li>
                        </ul>
                        </Container>
                    </div>
                </div>
        </div>
    );
}
