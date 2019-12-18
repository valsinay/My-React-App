import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'
import { AuthContext } from '../Context/AuthContext'
import sessionManager from '../../utils/session-manager'
import { Nav } from 'reactstrap';

function Navigation() {


    const [user] = useContext(AuthContext);
    const [isLogged, setIslogged] = useState(false);
    const username = sessionManager.getUsername();

    useEffect(() => {
        setIslogged(user.isLogged);
    }, [user])

    return (
        <nav>
            <div className="logo">
                <NavLink to='/'>
                    <h3>Car Shop</h3>
                </NavLink>
            </div>
            <ul className="container">
                <NavLink exact activeClassName='active' to="/" >
                    <li className='cool-link active' >Home</li>
                </NavLink>
                <NavLink to="/search" activeClassName='active'>
                    <li className='cool-link'>Search</li>
                </NavLink>
                <NavLink to="/about" activeClassName='active'>
                    <li className='cool-link'>About</li>
                </NavLink>
                <NavLink to="/contacts" activeClassName='active'>
                    <li className='cool-link'>Contact</li>
                </NavLink>
            </ul>
            <ul className="cool-link-auth">
                {!isLogged ?
                    <Fragment>
                        <NavLink to="/login" activeClassName="active">
                            <li className='cool-link auth'>Login</li>
                        </NavLink>
                        <NavLink to="/register" activeClassName="active">
                            <li className='cool-link auth'>Register</li>
                        </NavLink>
                    </Fragment>
                    :
                    <Fragment>
                        <NavLink to="/logout" activeClassName="active">
                            <li className='cool-link auth active'>Welcome, {username}</li>
                        </NavLink>
                        <NavLink to="/logout" activeClassName="active">
                            <li className='cool-link auth active'>Logout</li>
                        </NavLink>
                    </Fragment>
                }
            </ul>
        </nav>
    )
}

export default Navigation;