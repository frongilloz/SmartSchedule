import React, { Component, useState } from 'react';

import { Form, Col, Button, Card } from 'react-bootstrap';
import './basic.css';

const Forgot_Password = props => {
  //internal change functions
  const emailInt = event => {
    //change by calling App external function
    props.emailUpdate(event.target.value);
  };

  const nameInt = event => {
    //change by calling App external function
    props.nameUpdate(event.target.value);
  };

  //local password variables
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const newPassInt = event => {
    //change by calling App external function
    props.NewPassUpdate(event.target.value);

    //passwrod confirm
    setPass1(event.target.value);
  };

  const newPassCInt = event => {
    //change by calling App external function
    props.NewPassCUpdate(event.target.value);

    //passwrod confirm
    setPass2(event.target.value);
  };

  //Check the password to make sure they match
  const checkPassword = event => {
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
            <div className='intro-heading text-uppercase'>Forgot Password</div>
          </div>
        </div>
      </header>

      <div className='container'>
        <Card body style={{ width: '1100px' }}>
          <div className='container' style={{ width: '600px' }} v>
            <div className='col-12'>
              <span className='fa-stack fa-4x'>
                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                <i className='fa fa-user-circle-o fa-stack-1x fa-inverse'></i>
              </span>

              <Form onSubmit={checkPassword}>
                <Form.Row>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    input
                    type='email'
                    placeholder='Enter email'
                    id='email'
                    onChange={emailInt}
                  />
                </Form.Row>

                <div className='h1_p'>
                  <Form.Row>
                    <Form.Label>Enter Name to Confirm Identity</Form.Label>
                    <Form.Control
                      input
                      placeholder='Name'
                      id='name'
                      onChange={nameInt}
                    />
                  </Form.Row>
                </div>

                <div className='h1_p'>
                  <Form.Row>
                    <Form.Label>Enter New Password</Form.Label>
                    <Form.Control
                      input
                      type='password'
                      placeholder='New Password'
                      id='password'
                      onChange={newPassInt}
                    />
                  </Form.Row>
                </div>

                <div className='h1_p'>
                  <Form.Row>
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      input
                      type='password'
                      placeholder='Re-enter New Password'
                      id='passwordC'
                      onChange={newPassCInt}
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
                  Remember login? Click
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

export default Forgot_Password;
