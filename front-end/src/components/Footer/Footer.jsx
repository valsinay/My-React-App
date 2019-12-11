import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="text">
                Copyright © 2019 Car Shop
          </div>
            <div className='socials'>
                    <li><a href="#"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faTwitter} /></a></li>
            </div>
        </footer>
    )
}

export default Footer;
