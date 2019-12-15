import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import sessionManager from '../../utils/session-manager'

function Navigation() {

    const [isLogged, setIsLogged] = useState(false);
    const username = sessionManager.getUsername();

    return (
        <nav>
            <div className="logo">
                <Link to='/'>
                    <h4>Car Shop</h4>
                </Link>
            </div>
            <ul className="container">
                <Link to="/">
                    <li className='cool-link'>Home</li>
                </Link>
                <Link to="/search">
                    <li className='cool-link'>Search</li>
                </Link>
                <Link to="/about">
                    <li className='cool-link'>About</li>
                </Link>
                <Link to="/contact">
                    <li className='cool-link'>Contact</li>
                </Link>
            </ul>
            <ul className="cool-link-auth">
                <Link to="/login">
                    <li className='cool-link auth'>Login</li>
                </Link>
                <Link to="/register">
                    <li className='cool-link auth'>Register</li>
                </Link>

                <Link to="/logout">
                    <li className='cool-link auth'>Logout</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Navigation;