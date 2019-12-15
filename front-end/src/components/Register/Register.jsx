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
      <div className="formDiv">
        <div className="formHeader">
          <h2>Register</h2>
        </div>
        <Form id="authForm" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input id="username" name="username" value={data.username} invalid={errors.username ? true : false} onChange={this.handleChange} />
            <FormFeedback>{errors.username}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" name="password" type='password' value={data.password} invalid={errors.password ? true : false} onChange={this.handleChange} />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="confirmPassword">Confirm password</Label>
            <Input id="confirmPassword" name="confirmPassword" value={data.confirmPassword} type="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
            <FormFeedback>{errors.confirmPassword}</FormFeedback>
          </FormGroup>
          <Button color="primary" margin-left="">Register</Button>
        </Form>
      </div>
    )
  }
}

export default Register;