import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Input from './Input'

const Register = () => {
    return (
        <div className='container'>
          <div className='row space-top'>
            <div className='col-md-12'>
              <h1>Register</h1>
            </div>
          </div>
          <form >
            <div className='row space-top'>
              <div className='col-md-4'>
                <Input
                  type='text'
                  name='email'
                  label='E-mail'
                  placeholder='Enter e-mail' />
                <Input
                  type='text'
                  name='username'
                  label='Username'
                  placeholder='Enter username'/>
                <Input
                  type='password'
                  name='password'
                  label='Password'
                  placeholder='Enter password'/>
                <Input
                  type='password'
                  name='confirmPassword'
                  label='Confirm Password'
                  placeholder='Enter your password again'/>
                <input type='submit' className='btn btn-primary' value='Register' />
              </div>
            </div>
          </form>
        </div>
      )
}


export default Register;