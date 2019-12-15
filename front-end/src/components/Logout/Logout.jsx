import React, { Component } from 'react';
import userService from '../../services/user-service'
import { Redirect } from 'react-router-dom';
function Logout(){

    userService.logout();   

    return (
        <Redirect to='/' />
    )
}

export default Logout;