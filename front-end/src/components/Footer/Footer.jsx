import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <footer >
                <div className="text">
                    Copyright © 2019 Car Shop
                  </div>
                <div className='socials'>
                    <li><a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.twitter.com/"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
