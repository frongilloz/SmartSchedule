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
  const [SemAdd, setSem] = useState('');
  const [CNumAdd1, setC_Num1] = useState('');
  const [CNumAdd2, setC_Num2] = useState('');
  const [CNumAdd3, setC_Num3] = useState('');
  const [CNumAdd4, setC_Num4] = useState('');

  const [CL_NumAdd, setCL_Num] = useState('');


  //external change functions
  const SemUpdate = value => {
    setSem(value);
    console.log('SemUpdate() called, value: ', value);
  };
  const C_NumUpdate1 = value => {
    setC_Num1(value);
    console.log('CNumUpdate1() called, value: ', value);
  };
  const C_NumUpdate2 = value => {
    setC_Num2(value);
    console.log('CNumUpdate2() called, value: ', value);
  };
  const C_NumUpdate3 = value => {
    setC_Num3(value);
    console.log('CNumUpdate3() called, value: ', value);
  };
  const C_NumUpdate4 = value => {
    setC_Num4(value);
    console.log('CNumUpdate4() called, value: ', value);
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
    console.log('SemAdd: ', SemAdd);
    console.log('CNumAdd1: ', CNumAdd1);
    console.log('CNumAdd2: ', CNumAdd2);
    console.log('CNumAdd3: ', CNumAdd3);
    console.log('CNumAdd4: ', CNumAdd4);

    console.log('CL_NumAdd: ', CL_NumAdd);

    
    // Request send to backend to fetch data
    let courseRequest1 = {
      Sem: SemAdd,
      Course_Num1: CNumAdd1,
      //CL_Num: CL_NumAdd
    };
    // To add later once 1 course is working
    /*
    let courseRequest2 = {
      Sem: SemAdd,
      Course_Num2: CNumAdd2,
      //CL_Num: CL_NumAdd
    };
    let courseRequest3 = {
      Sem: SemAdd,
      Course_Num3: CNumAdd3,
      //CL_Num: CL_NumAdd
    };
    let courseRequest4 = {
      Sem: SemAdd,
      Course_Num4: CNumAdd4,
      //CL_Num: CL_NumAdd
    };
    */
    

    /*
    try {
      //Post to server to get back our database information
      //await axios.post('/api/course_database/', courseRequest1);
    } catch (err) {
      // TODO: do something
    }
    */

  };

  return (
  <div>
    <Schedule_Content 
      SemUpdate={SemUpdate}
      C_NumUpdate1={C_NumUpdate1}
      C_NumUpdate2={C_NumUpdate2}
      C_NumUpdate3={C_NumUpdate3}
      C_NumUpdate4={C_NumUpdate4}
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