import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import Contacts from './components/Contacts/Contacts'
import About from './components/About/About'
import CreateCar from './components/Car/Create-Car';
import { AuthProvider } from './components/Context/AuthContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Switch>
            <Route exact path={'/register'} activeClass="" component={Register} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/logout'} component={Logout} />
            <Route exact path={'/contacts'} component={Contacts} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/create-car'}  component={CreateCar} />

            {/* <Route exact path={'*'} component={NotFound} /> */}
          </Switch>
          <Footer />

        </AuthProvider>
        <ToastContainer
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
          toastClassName='toast-container'
        />
      </BrowserRouter>
    );
  }
}

export default App;