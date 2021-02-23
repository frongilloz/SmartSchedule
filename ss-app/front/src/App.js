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
      'userName',
      'token'
    ]);
    const [updated, setUpdated] = useState(false);

    const logout = async () => {
      removeCookie('email');
      removeCookie('userName');
      removeCookie('token');

      axios.delete('/api/sessions?access_token=' + cookies['token']);
    };
  
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
            setToken={token =>
              setCookie('token', token) 
            }
            setEmail={email =>
              setCookie('email', email)
            }
            setUserName={userName =>
              setCookie('userName', userName)
            }
            email={cookies['email']}
            userName={cookies['userName']}
            />
        </div>

        {/*Footer*/}
        <Footer />
      </div>
    </div>
  );
};

export default App;
