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
