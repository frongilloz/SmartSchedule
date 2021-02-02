import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

//import the content of each page
import HomeContent from './Pages/Home';
import Schedule_Content from './Pages/Schedule';
import Four_Year_Content from './Pages/Four_Year';
import About_Us_Content from './Pages/About_Us';
//import Login_Content from './Pages/Login';
//import Sign_Up_Content from './Pages/Sign_Up';

import { Redirect } from 'react-router-dom';

//Purpose: Defines the content that is returned from each page
//(Which is returned from the individual js files for each page)
//For dynamic pages, (e.g. w/ forms) the state functions and returning variables are managed here

export const Home = () => (
    <div>
      <HomeContent />
    </div>
  );

export const Schedule = () => {
  //states for the forms
  const [CNumAdd, setC_Num] = useState('');
  const [CL_NumAdd, setCL_Num] = useState('');


  //external change functions
  const C_NumUpdate = value => {
    setC_Num(value);
    console.log('CNumUpdate() called, value: ', value);
  };
  const CL_NumUpdate = value => {
    setCL_Num(value);
    console.log('CL_NumUpdate() called, value: ', value);
  };


  const check = async event => {
    //prevent the refresh of page on submit
    event.preventDefault();

    //log
    console.log('Form Request Received');
    console.log('CNumAdd: ', CNumAdd);
    console.log('CL_NumAdd: ', CL_NumAdd);

    
    // Request send to backend to fetch data
    let courseRequest = {
      Course_Num: CNumAdd,
      CL_Num: CL_NumAdd
    };
    

    /*
    try {
      //Post to server to get back our database information
      //await axios.post('/api/course_database/', courseRequest);
    } catch (err) {
      // TODO: do something
    }
    */

  };

  return (
  <div>
    <Schedule_Content 
      C_NumUpdate={C_NumUpdate}
      CL_NumUpdate={CL_NumUpdate}

    />
    
  </div>
  );
};

export const Four_Year = () => (
  <div>
    <Four_Year_Content />
  </div>
);

export const About_Us = () => (
  <div>
    <About_Us_Content />
  </div>
);