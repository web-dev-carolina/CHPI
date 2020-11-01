import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.svg';

function Navbar() {

    const [open, toggleOpen] = useState(false);

    function handleButtonClick() {
        toggleOpen(!open);
    };

    return (
        <div className="navbar">
            <div className="navbar-section">
                <Link className="logo" to="/">
                    <img id="logo" src={Logo} alt="logo" />
                </Link>
                <div className="links">
                    <Link id="right-border" className="link" to="/">Home</Link>
                    <Link id="right-border" className="link" to="/about">About Us</Link>
                    <Link id="right-border" className="link" to="/homelessness">About Homelessness</Link>
                    <Link id="right-border" className="link" to="/testimonials">Testimonials</Link>
                    <Link className="link" to="/contact">Contact</Link>
                    <div className="mobile" onClick={handleButtonClick}>
                        <i className={open ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}></i>
                    </div>
                </div>
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <a className="mobile-link" href="/">
                        Home
                </a>
                    <a className="mobile-link" href="/about">
                        About Us
                </a>
                    <a className="mobile-link" href="/homelessness">
                        About Homelessness
                </a>
                    <a className="mobile-link" href="/testimonials">
                        Testimonials
                </a>
                    <a className="mobile-link" href="/contact">
                        Contact
                </a>
                </ul>

            </div>

        </div>
    )
}

export default Navbar;

