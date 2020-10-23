import React from 'react'
import '../CSS/Footer.css';
import { Link } from 'react-router-dom';
import Email from '../Images/Email.png';

function Footer(){
    return ( 
        <div className="footer">
            <p>Copywright &#169; 2020 Carolina Homelessness Prevention Initiative</p>
            <Link to="/Contact">
                    <img id="Email" src={Email} alt="Email" />
            </Link>
            
           
        </div>
    )
}
export default Footer;