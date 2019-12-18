import React, { useState, useContext, Component } from 'react';
import sessionManager from '../../utils/session-manager';
import userService from '../../services/user-service';
import { AuthContext } from '../Context/AuthContext'
import { toast } from 'react-toastify';
import signValidator from '../../utils/login-validator';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './Login.css';

function Login(props) {

    const [user, setUserStatus] = useContext(AuthContext);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const updateUsername = (e) => {
        setUserName(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (signValidator(username, password)) {
            userService.login(username, password)
                .then((res) => {
                    const { token, user } = res.data;
                    sessionManager.save(token, user.username);
                    toast.success('🦄You have successfully logged in!', {position:"top-right", toastClassName:"toast-container success"});
                    setUserStatus({ isLogged: sessionManager.isLogged() })
                    props.history.push('/')
                })
                .catch(() => {
                    toast.error('Incorrect username or password', {
                        position:"top-right", toastClassName:"toast-container error"})
                    return false;
                })
        }   
    }

    return (
        <form className='authForm' onSubmit={handleSubmit}>
       
            <h2>Login</h2>
            <input
                type='username'
                name="username"
                placeholder="Username"
                value={username}
                onChange={updateUsername}
            />

            <input
                type='password'
                name="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
            />

            <button className="submitBtn" type='submit'>Login</button>
            <p>Don't have an account? <Link to="/register">Register here!</Link> </p>
        </form>
    )
}

export default Login;