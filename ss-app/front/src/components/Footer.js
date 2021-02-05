import React from 'react';

const Footer = () => (
 
  <footer className='footer'>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-4'>
          <span className='copyright'>Copyright &copy; SmartSchedule 2021</span>
        </div>
        
        <div className='col-md-4'>
          <ul className='list-inline social-buttons'>
            <li className='list-inline-item'>
              <a href='https://twitter.com/UF' target='_blank'>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://www.facebook.com/uflorida' target='_blank'>
                <i className='fa fa-facebook-f'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://www.instagram.com/uflorida/' target='_blank'>
                <i className='fa fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>

          <p>University of Florida <br />
          Gainesville, FL 32611 <br />
          (352) 392-3261</p>

          <ul className='list-inline quicklinks'>
            <li className='list-inline-item'>
              <a href='#privacy'>Privacy Policy</a>
            </li>
            <li className='list-inline-item'>
              <a href='#terms'>Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
