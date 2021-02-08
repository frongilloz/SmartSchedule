import React, { Component, useState } from 'react';

import { Form, Col, Card, Button } from 'react-bootstrap';
import './basic.css';

const Sign_Up = props => {
  //internal change functions
  const addRegPassInt = event => {
    //change by calling App external function
    props.addRegPasswordUpdate(event.target.value);
  };

  const addFNameInt = event => {
    //change by calling App external function
    props.addFNameUpdate(event.target.value);
  };

  const addLNameInt = event => {
    //change by calling App external function
    props.addLNameUpdate(event.target.value);
  };

  const addEmailInt = event => {
    //change by calling App external function
    props.addEmailUpdate(event.target.value);
  };

  //local password variables
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const addPassInt = event => {
    //change by calling App external function
    props.addPassUpdate(event.target.value);

    //passwrod confirm
    setPass1(event.target.value);
  };

  const addPassConfInt = event => {
    //change by calling App external function
    props.addPassConfUpdate(event.target.value);

    //passwrod confirm
    setPass2(event.target.value);
  };

  //Check the password to make sure they match
  const checkPassword = event => {
    console.log('Check Password');
    //console.log('pass1, ', pass1);
    //console.log('pass2, ', pass2);

    //check password
    //if valid, call the props.save method and display a success message
    if (pass1 === pass2) {
      console.log('passwords do match');

      //call the external save function
      props.save(event);
    }
    //if not, display error message and do no call save method
    else {
      //prevent refresh
      event.preventDefault();

      //log to console
      console.log('passwords do not match');

      //display error message
      let labelElement = document.getElementById('submit_message');
      labelElement.innerHTML = 'Passwords do not match. Please try again.';
      labelElement.className = 'alert alert-danger';
      labelElement.style.display = 'block';
    }
  };

  return (
    <div className='App'>
      <header className='masthead'>
        <div className='container'>
          <div className='intro-text'>
            <div className='intro-heading text-uppercase'>Sign Up</div>
          </div>
        </div>
      </header>

      <div className='container'>
        <Card body style={{ width: '100%' }}>
          <div className='container' style={{ width: '55%' }} v>
            <div className='col-12'>
              <Form onSubmit={checkPassword}>
                {' '}
                {/* Changed: {props.save} */}
                
                <div className='h1_p_1'>
                  <Form.Row>
                    <Form.Label>First name </Form.Label>
                    <Form.Control
                      input
                      required='required'
                      placeholder='First name'
                      id='FName'
                      onChange={addFNameInt}
                    />
                  </Form.Row>
                </div>
                <div className='h1_p_1'>
                  <Form.Row>
                    <Form.Label>Last name </Form.Label>
                    <Form.Control
                      input
                      required='required'
                      placeholder='Last name'
                      id='LName'
                      onChange={addLNameInt}
                    />
                  </Form.Row>
                </div>
                <div className='h1_p_1'>
                  <Form.Row>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      input
                      required='required'
                      type='email'
                      placeholder='Enter email'
                      id='email'
                      onChange={addEmailInt}
                    />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Row>
                </div>
                <div className='h1_p_1'>
                  <Form.Row>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      input
                      required='required'
                      type='password'
                      placeholder='Password'
                      id='password'
                      onChange={addPassInt}
                    />
                  </Form.Row>
                </div>
                <div className='h1_p_1'>
                  <Form.Row>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      input
                      required='required'
                      type='password'
                      placeholder='Re-enter Password'
                      id='passwordConf'
                      onChange={addPassConfInt}
                    />
                  </Form.Row>
                </div>
                <div className='h1_p'>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </div>
              </Form>

              <div className='h1_p_1'>
                <p>
                  Already have an account? Login
                  <a href='/login'>
                    {' '}
                    <b>Here</b>
                  </a>
                </p>
              </div>

              <p id='submit_message'></p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Sign_Up;
