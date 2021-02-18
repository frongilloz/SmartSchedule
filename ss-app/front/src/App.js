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


//Purpose: This defines the main structure of the web app (header, content, and footer)
const App = props => {
  const [cookies, setCookie, removeCookie] = useCookies([
      'email',
      'token'
    ]);
    const [updated, setUpdated] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logout = async () => {
      removeCookie('email');
      removeCookie('token');
      setUpdated(!updated);
  
      axios.delete('/api/sessions?access_token=' + cookies['token']);
    };

    //used to set authentication level in current session
  useEffect(() => {
    if (cookies['email'] !== null && cookies['token'] !== undefined) {
      setIsAuthenticated(true);
    }
  }, [cookies['email']]);
  
  return (
    <div className='bg'>
      <div className='bkg'>
        {/*Component Sections*/}
        {/*Navigation Bar*/}
        <Header
          email={cookies['email']}
          logout={logout}
          updated={updated}
        />

        <div>
          {/*Main Content*/}
          <Main
            setEmail={email =>
              setCookie('email', email) && setUpdated(!updated)
            }
            email={cookies['email']}
            setToken={token =>
              setCookie('token', token) && setUpdated(!updated)
            }
            updated={updated}
            isAuthenticated={isAuthenticated}
            />
        </div>

        {/*Footer*/}
        <Footer />
      </div>
    </div>
  );
};

export default App;
