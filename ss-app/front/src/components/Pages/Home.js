import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import ChatWidget  from '../Chatbot/ChatWidget/chatWidget.js'
import './basic.css';

const Home = props => {
  //Internal change functions
  //These are called within this file's return fucntions, and then call the external functions to update the variables states
  const updateFullNameInt = event => {
    console.log('CU updateFullNameInt Triggered');

    //change by calling App external function
    props.updateFullName(event.target.value);

    //log
    console.log('Update Full Name: ', event.target.value);
  };

  return (
    <div className='App'>
      <header className='masthead2'>
        <div className='container'>
          <div className='intro-text'>
            <div className='intro-lead-in'>Welcome To SmartSchedule!</div>
            <div className='intro-heading text-uppercase'>
              Let's Get Started
            </div>
            <a
              className='btn btn-primary btn-xl text-uppercase '
              href="/schedule"
            >
              Plan My Courses
            </a>
          </div>
        </div>
      </header>

      <Card body>
        <section className='page-section' id='features'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2 className='section-heading text-uppercase'>Features</h2>
                <h3 className='section-subheading text-muted'>
                  A summary of what our web application does.
                </h3>
              </div>
            </div>
            <div className='row text-center'>
              <div className='col-md-4'>
                <span className='fa-stack fa-4x'>
                  <i className='fa fa-circle fa-stack-2x text-primary'></i>
                  <i className='fa fa-calendar fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='service-heading'>Valid Timing Options</h4>
                <p className='text-muted'>
                Enter your desired courses, and view an organized grid of the classes you would like to take based on
                the official ONE.UF course catalog.
                </p>
              </div>
              <div className='col-md-4'>
                <span className='fa-stack fa-4x'>
                  <i className='fa fa-circle fa-stack-2x text-primary'></i>
                  <i className='fa fa-map-pin fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='service-heading'>Map Your Schedule</h4>
                <p className='text-muted'>
                Based on your class's location, our application will allow you to view where your classes are located 
                and give you a walking time estimation for back to back classes.
                </p>
              </div>
              <div className='col-md-4'>
                <span className='fa-stack fa-4x'>
                  <i className='fa fa-circle fa-stack-2x text-primary'></i>
                  <i className='fa fa-graduation-cap fa-stack-1x fa-inverse'></i>
                </span>
                <h4 className='service-heading'>Plan for Graduation</h4>
                <p className='text-muted'>
                Plan out your four or five year plan to organize your schedule, and ensure you are on track
                to graduate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Card>
      {/* <KommunicateChat/> */}
      <div>
        <ChatWidget/>
      </div>
    </div>
    
  );
};
export default Home;
