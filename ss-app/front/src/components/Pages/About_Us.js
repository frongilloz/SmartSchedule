import React from 'react';

import { Card } from 'react-bootstrap';
import './basic.css';

const About_Us= () => (
  <div className='App'>
    <header className='masthead'>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-heading text-uppercase'>About Us</div>
        </div>
      </div>
    </header>

    <Card body>
      <div className='h1_p_1'>
        <span className='fa-stack fa-4x'>
          <i className='fa fa-circle fa-stack-2x text-primary'></i>
          <i className='fa fa-user fa-stack-1x fa-inverse'></i>
        </span>
      </div>

      <section className='page-section' id='profile'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Purpose of Project</h2>
              <h3 className='section-subheading text-muted'>CEN4914</h3>

              <div className='container'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='page-section' id='why'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>
                Our Team
              </h2>
              <h3 className='section-subheading text-muted'>
                Students.
              </h3>

              <div className='container'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Card>
  </div>
);

export default About_Us;
