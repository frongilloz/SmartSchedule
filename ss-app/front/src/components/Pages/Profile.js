import React, { Component } from 'react';

import { Form, Col, Button, Card } from 'react-bootstrap';
import './basic.css';
import UserPlanDisplay from './UserPlanDisplay'; 

const Profile = props => {
  //internal change functions

  return (
    <div className='App'>
      <header className='masthead'>
        <div className='container'>
          <div className='intro-text'>
            <div className='intro-heading text-uppercase'>User Profile</div>
          </div>
        </div>
      </header>

      <div className='container'>
        <Card body style={{ width: '100%' }}>
          <div className='container' style={{ width: '90%' }} v>
            <div className='col-12'>
              <span className='fa-stack fa-4x'>
                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                <i className='fa fa-user-circle-o fa-stack-1x fa-inverse'></i>
              </span>

              <div className='h1_p_1'>
                <h3>User Information</h3>
                <h5>Name: </h5>
                <p>
                  {props.userName} 
                </p>
                <h5>Email: </h5>
                <p>{props.email} </p>

                <h5>Would you like to change your password?</h5>

                <p>
                  Click
                  {/*Maybe want to make a seperate change password link */}
                  <a href='/forgot'>
                    {' '}
                    <b>Here</b>
                  </a>
                </p>
              </div>
            </div>

        <div className='h1_p_1'>
        <hr></hr>
            <div class="row" >
                <div class="col-lg">
                    <h4>Saved Schedules</h4>
                    <span className='fa-stack fa-2x'>
                        <i className='fa fa-circle fa-stack-2x text-primary'></i>
                        <i className='fa fa-calendar fa-stack-1x fa-inverse'></i>
                    </span>
                </div>
            
                <div class="col-lg">
                    <h4>Saved Academic Success Plans</h4>
                    UserPlanDisplay
                    <span className='fa-stack fa-2x'>
                    <i className='fa fa-circle fa-stack-2x text-primary'></i>
                    <i className='fa fa-graduation-cap fa-stack-1x fa-inverse'></i>
                    </span>
                </div>
            </div>
            
        <hr></hr>

        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Schedules</th>
                <th scope="col">Plans</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="url">Schedule1</a></td>
                    <td><a href="url">Plan 1</a></td>
                </tr>
                <tr>
                    <td><a href="url">Schedule2</a></td>
                    <td><a href="url">Plan 2</a></td>
                </tr>
                <tr>
                    <td><a href="url">Schedule3</a></td>
                    <td><a href="url">Plan 3</a></td>
                </tr>
            </tbody>
            </table>

            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
