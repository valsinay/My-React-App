import React, { Component } from 'react';
import sessionManager from '../../utils/session-manager';
import userService from '../../services/user-service';
import './Login.css';
import { Form, Input, Label, FormGroup, Button, FormFeedback } from 'reactstrap';


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
            <div className='loginBox'>
                <h2>Login</h2>

                <form className='textbox' onSubmit={this.handleSubmit}>
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
                    <button className='btn' type='submit'>Login</button>
                </form>
            </div>

            // <div className='formDiv'>
            //     <h1>Login</h1>
            //     <Form id="authForm" onSubmit={this.handleSubmit}>
            //         <FormGroup>
            //             <Label for="username">Username</Label>
            //             <Input id="username" name="username" onChange={this.handleChange} />
            //             <FormFeedback></FormFeedback>
            //         </FormGroup>

            //         <FormGroup>
            //             <Label for="password">Password</Label>
            //             <Input id="password" name="password" type='password' onChange={this.handleChange} />
            //             <FormFeedback></FormFeedback>
            //         </FormGroup>
            //         <Button color="primary">Login</Button>
            //     </Form>
            // </div>
        )
    }
}

export default Login;