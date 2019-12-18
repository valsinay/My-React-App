import React, { Component } from 'react';
import userService from "../../services/user-service";
import registerValidator from '../../utils/register-validator';
import { toast } from 'react-toastify';
import './Register.css'

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        password: "",
        confirmPassword: ""
      }
    }
  }

  handleChange = (e) => {

    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    if (registerValidator(data.username, data.password, data.confirmPassword)) {
      userService.register(data.username, data.password)
      toast.success('🦄You have successfully registered!', { position: "top-right", toastClassName: "toast-container success" });
      this.props.history.push('/login');
    }


  }

  render() {
    const { data } = this.state;

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