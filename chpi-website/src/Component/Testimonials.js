import React from 'react';
import ReactDOM from 'react-dom';
import '../CSS/Testimonials.css';
import Carousel from 'react-bootstrap/Carousel'

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="wrapper">
                <div className="title">
                    <h1>Testimonials</h1>
                </div>
                <div className="content">
                    <Carousel>
                        <Carousel.Item>
                            A UNC student-founded platform to keep Chapel Hill's most vulnerable residents from becoming homeless and to educate the UNC community about the underlying causes of mass homelessness.
                            In Chapel Hill, we are the only source of diversion funding - the most immediate and research-backed means to prevent homelessness.
                        <Carousel.Caption>
                                <h3>- Non Anonymous Person</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            A UNC student-founded platform to keep Chapel Hill's most vulnerable residents from becoming homeless and to educate the UNC community about the underlying causes of mass homelessness.
                            In Chapel Hill, we are the only source of diversion funding - the most immediate and research-backed means to prevent homelessness.
                        <Carousel.Caption>
                                <h3>- Non Anonymous Person</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            A UNC student-founded platform to keep Chapel Hill's most vulnerable residents from becoming homeless and to educate the UNC community about the underlying causes of mass homelessness.
                            In Chapel Hill, we are the only source of diversion funding - the most immediate and research-backed means to prevent homelessness.
                        <Carousel.Caption>
                                <h3>- Non Anonymous Person</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;