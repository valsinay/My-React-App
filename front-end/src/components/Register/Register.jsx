import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button, FormFeedback } from 'reactstrap';
import './Register.css'
import userService from "../../services/user-service";

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        password: "",
        confirmPassword: ""
      },
      errors: {}
    }
  }

  handleChange = (e) => {

    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.value]: ''
      }
    });
  }

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.username === "") errors.username = "Username can not be blank.";
    if (data.password === "") errors.password = "Password must be valid.";
    if (data.confirmPassword !== data.password) errors.confirmPassword = "Passwords must match.";

    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {

      userService.register(data.username, data.password);
      this.props.history.push('/login');

    }
    else {
      this.setState({ errors });
    }

  }

  render() {
    const { data, errors } = this.state;
    return (
      <form className='authForm' onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <input
          type='username'
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name="confirmPassword"
          placeholder="Confirm password"
          value={data.confirmPassword}
          onChange={this.handleChange}
        />
        <button className="submitBtn" type='submit'>Register</button>
      </form>
    )
  }
}

export default Register;