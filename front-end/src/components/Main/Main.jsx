import React, { Component } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import NotFound from '../NotFound/NotFound';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import CreateCar from '../Car/CreateCar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Main.css'


const Main = () => {

    return (
        <main className='main'>
            <Switch>
                <Route exact path={'/register'} activeClass="" component={Register} />
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/logout'} component={Logout} />
                <Route exact path={'/contacts'} component={Contacts} />
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/create-car'} component={CreateCar} />

                {/* <Route exact path={'*'} component={NotFound} /> */}
            </Switch>
        </main>
    )
}

export default Main;