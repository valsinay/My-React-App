import React, { useContext, Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
import { AuthContext } from '../Context/AuthContext'
import sessionManager from '../../utils/session-manager'

function Navigation() {


    const [user] = useContext(AuthContext);
    const [isLogged, setIslogged] = useState(false);
    const username = sessionManager.getUsername();

    useEffect(() => {
        setIslogged(user.isLogged);
    }, [user])

    return (
        <div>
            <nav>
                <div className="logo">
                    <NavLink to='/'>
                        <img src="/logo.jpg" alt="" />
                    </NavLink>
                </div>
                <ul className="container">

                    <NavLink exact activeClassName='active' to="/" >
                        <li className='cool-link' >Home</li>
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
                    {isLogged ?
                        <NavLink exact activeClassName='active' to="/create-car" >
                            <li className='cool-link active'>Create  <img className='active' src="https://img.icons8.com/ios/48/000000/sedan.png" /></li>
                        </NavLink>
                        : ""}
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
        </div>
    )
}

export default Navigation;