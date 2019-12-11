import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <nav>
            <div className="logo">
                <h4>Car Shop</h4>
            </div>
            <ul className="container">
                <li><a className="cool-link">Home</a></li>
                <li><a className="cool-link">Search</a></li>
                <li><a className="cool-link">About</a></li>
                <li><a className="cool-link">Contact</a></li>
            </ul>
            <ul className="cool-link-auth">
                <li><a className="cool-link auth">Login</a></li>
                <li><a className="cool-link auth">Register</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;