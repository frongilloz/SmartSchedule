import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import './App.css';

//nav imports
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import './assets/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
  const [cookies, setCookie, removeCookie] = useCookies([
    'email',
    'token',
    'admin'
  ]);
  const [updated, setUpdated] = useState(false);
  //TODO Change Defaults to false when done debugging
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const logout = async () => {
    removeCookie('email');
    removeCookie('token');
    removeCookie('admin');
    setUpdated(!updated);
    setIsAuthenticated(false);
    setIsAdmin(false);

    axios.delete('/api/sessions?access_token=' + cookies['token']);
  };

  //used to set authentication level
  /*
  useEffect(() => {
    if (cookies['admin'] === 'true') {
      setIsAdmin(true);
    }
    //TODO Edit to match what is actually saved in the email cookie
    if (cookies['email'] !== null && cookies['token'] !== undefined) {
      setIsAuthenticated(true);
    }

    console.log('Entered UseEffect: ', isAdmin, isAuthenticated);
  }, [cookies['email'], cookies['admin']]);
  */

  return (
    <div className='bg'>
      <div className='bkg'>
        {/*Component Sections*/}
        {/*Navigation Bar*/}
        <Header
        />

        <div>
          {/*Main Content*/}
          <Main
            />
        </div>

        {/*Footer*/}
        <Footer />
      </div>
    </div>
  );
};

export default App;
