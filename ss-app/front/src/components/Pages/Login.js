import React, { Component, useEffect, useState } from 'react';

import { Form, Col, Button, Card } from 'react-bootstrap';
import './basic.css';

const Login = props => {
  //internal change functions
  const addEmailInt = event => {
    console.log('Login email Triggered');

    //change by calling App external function
    props.checkEmail(event.target.value);
  };

  const addPassInt = event => {
    console.log('Login pass Triggered');

    //change by calling App external function
    props.checkPass(event.target.value);
  };

  useEffect(() => {
    let loginMsg = document.getElementById('loginMsg');
    loginMsg.style.display = 'none';

    if (props.displayMsg) {
      loginMsg.style.display = 'block';
    }
  }, [props.displayMsg]);

  return (
    <div className='App'>
      <header className='masthead'>
        <div className='container'>
          <div className='intro-text'>
            <div className='intro-heading text-uppercase'>Login</div>
          </div>
        </div>
      </header>

      <div className='container'>
        <Card body style={{ width: '100%' }}>
          <div className='container' style={{ width: '55%' }} v>
            <div className='col-12'>
              <span className='fa-stack fa-4x'>
                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                <i className='fa fa-user-circle-o fa-stack-1x fa-inverse'></i>
              </span>

              <Form onSubmit={props.check}>
                <Form.Row>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    input
                    type='email'
                    placeholder='Enter email'
                    id='email'
                    onChange={addEmailInt}
                  />
                </Form.Row>
                <div className='h1_p'>
                  <Form.Row>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      input
                      type='password'
                      placeholder='Password'
                      id='password'
                      onChange={addPassInt}
                    />
                  </Form.Row>
                </div>
                <div className='h1_p'>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </div>
                &nbsp;
                <div className='alert alert-danger' id='loginMsg'>
                  <strong>Email or Password Incorrect</strong>
                </div>
              </Form>

              <div className='h1_p_1'>
                <p>
                  Forgot Password? Click
                  <a href='/forgot'>
                    {' '}
                    <b>Here</b>
                  </a>
                </p>
                <p>
                  Don't have an account already? Sign Up
                  <a href='/sign-up'>
                    {' '}
                    <b>Here</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
