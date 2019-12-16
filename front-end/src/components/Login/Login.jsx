import React, { Component } from 'react';
import sessionManager from '../../utils/session-manager';
import userService from '../../services/user-service';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };



    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;

        userService.login(username, password)
            .then((res) => {
                const { token, user } = res.data;
                sessionManager.save(token, user.username);
                this.props.history.push('/')
                console.log('user logged')
            })
    }

    render() {
        return (

            <form className='authForm' onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <input
                    type='username'
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='password'
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button className="submitBtn" type='submit'>Login</button>
            </form>
        )
    }
}

export default Login;