import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

//import the content of each page
import HomeContent from './Pages/Home';
import Schedule_Content from './Pages/Schedule';
import Four_Year_Content from './Pages/Four_Year';
import About_Us_Content from './Pages/About_Us';
import Login_Content from './Pages/Login';
import Sign_Up_Content from './Pages/Sign_Up';
import Profile_Content from './Pages/Profile';

// import the generate schedule function
import { generateSchedule } from './generate_schedule.js';

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
  
  const [test_sc, set_test_sc] = useState('');

  //state for schedule generation
  let [responseData, setResponseData] = useState('')


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
  
  // Relevant initializations
  let courseData = [];
  let testSc = Array(14).fill(0).map(row => new Array(6).fill(" "))
  let emptyArray = Array(14).fill(0).map(row => new Array(6).fill(" "))
  let num_courses_sub = 0;
  const courseNums = [CNumAdd1, CNumAdd2, CNumAdd3, CNumAdd4]; 

  const check = async event => {
    // prevent the refresh of page on submit
    event.preventDefault();


    courseNums.forEach(async courseNum => {
      /* if this field was filled in by the user */
      if (courseNum){

        const queryString = '/api/courses/find/'  + courseNum + '/'
                                                  + SemAdd;
        /* make a backend request for this course data */
        try {
          await axios.get(queryString)
            .then((response) => {
              console.log("GET axios called")
              console.log("GET resp data", response.data);
              courseData.push(response.data);

              // Prev
              setResponseData(courseData)

              
            });
    
        } catch (err) {
          // TODO: do something
        }
      }

      


      
      //setResponseData(courseData)

    }) // end for each

   


    //courseData.forEach(course => {
    //  console.log(course);
    //})

  }; // end of async
  

   // Set the response data at the end of the for each
    //setResponseData(courseData)
    console.log("reached")

    console.log("st")
    console.log('Pages.js length of resposneData is: ', responseData.length)
    
    // Get the number of courses submitted
    for (let i = 0; i < courseNums.length; i++) {
      if(courseNums[i]){
        num_courses_sub++
      }
    }

    console.log('Pages.js num_courses_sub is: ', num_courses_sub)
  
    // only generate the new schedule once all the course requests have been completed
    if(responseData.length == num_courses_sub){
      // Run the generate schedule function
      testSc = generateSchedule(responseData)  
      console.log("Test Schedule")
      console.log(testSc)

      if (testSc === emptyArray) { console.log("nothing has happened here. testSc is: ", testSc) }
      else if (testSc === test_sc) { console.log("testSc and test_sc are the same") }
      else set_test_sc(testSc)

      console.log(test_sc)

      //return (
      //  <div>
      //    <Schedule_Content 
      //      check={check}
      //      SemUpdate={SemUpdate}
      //      C_NumUpdate1={C_NumUpdate1}
      //      C_NumUpdate2={C_NumUpdate2}
      //      C_NumUpdate3={C_NumUpdate3}
      //      C_NumUpdate4={C_NumUpdate4}
      //      CL_NumUpdate={CL_NumUpdate}
      //      responseData={responseData}
      //      testSc={testSc}
      //    />
      //  </div>
      //  );
    } 

    console.log("fin")

  
  


  return (
  <div>
    <Schedule_Content 
        check={check}
        SemUpdate={SemUpdate}
        C_NumUpdate1={C_NumUpdate1}
        C_NumUpdate2={C_NumUpdate2}
        C_NumUpdate3={C_NumUpdate3}
        C_NumUpdate4={C_NumUpdate4}
        CL_NumUpdate={CL_NumUpdate}
        responseData={responseData}
        test_sc={test_sc}
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

//adding a new user to the database
export const Sign_Up = () => {
  //states for the new user
  const [FNameAdd, setFName] = useState('');
  const [LNameAdd, setLName] = useState('');
  const [emailAdd, setEmail] = useState('');
  const [passAdd, setPass] = useState('');
  const [passCAdd, setCPass] = useState('');
  const [reload, setReload] = useState(false);

  //the update functions update the current states
  const addFNameUpdate = value => {
    setFName(value);
    console.log('addFNameUpdate() called, value: ', value);
  };

  const addLNameUpdate = value => {
    setLName(value);
    console.log('addLNameUpdate() called, value: ', value);
  };

  const addEmailUpdate = value => {
    setEmail(value);
    console.log('addEmailUpdate() called, value: ', value);
  };

  const addPassUpdate = value => {
    setPass(value);
    //console.log('addPassUpdate() called, value: ', value);
  };

  const addPassConfUpdate = value => {
    setCPass(value);
    //console.log('addPassConfUpdate() called, value: ', value);
  };

  //the save function to the database
  const save = async event => {
    //prevent the refresh of page on submit
    event.preventDefault();

    //log
    console.log('save() Sign Up called');
    console.log('save() FName: ', FNameAdd);
    console.log('save() LName: ', LNameAdd);
    console.log('save() email: ', emailAdd);
    console.log('save() pass: ', passAdd);
    console.log('save() passC: ', passCAdd);

    //2) and will need to check is the email already exists in the database

    //create a new user schema
    let newUser = {
      FName: FNameAdd,
      LName: LNameAdd,
      fullName: FNameAdd + ' ' + LNameAdd,
      email: emailAdd,
      password: passAdd
    };

    try {
      console.log('Post User sent');
      const s = await axios.post('/api/users/', newUser);
      if (s.status == 200) {
        setReload(true);
      }
    } catch (err) {
      return false;
    }
    console.log('trying reload');
  };

  if (reload) {
    console.log('caught redirect');
    setTimeout(() => {
      setReload(false);
    }, 10000);
    return <Redirect to='/login' />;
  }

  return (
    <Sign_Up_Content
      save={save}
      addFNameUpdate={addFNameUpdate}
      addLNameUpdate={addLNameUpdate}
      addEmailUpdate={addEmailUpdate}
      addPassUpdate={addPassUpdate}
      addPassConfUpdate={addPassConfUpdate}
    />
  );
};

//checking if the login credentials match the existing users in the database
export const Login = props => {
  //states for the login
  const [emailAdd, setEmail] = useState('');
  const [passAdd, setPass] = useState('');
  const [displayMsg, setDisplayMsg] = useState(false);

  //take in the email from the form and check to see if it exists in the database
  const checkEmail = value => {
    setEmail(value);
    console.log('checkEmail() called, value: ', value);
  };

  const checkPass = value => {
    setPass(value);
    //console.log('checkPass() called, value: ', value);
  };

  //the check function to the database
  const check = async event => {
    //prevent the refresh of page on submit
    event.preventDefault();

    //log
    console.log('check() called');
    console.log('check() email: ', emailAdd);
    //console.log('check() pass: ', passAdd);

    // data sent in to post request
    const loginData = { email: emailAdd, password: passAdd };

    try {
      const response = await axios.post('/api/sessions/', loginData);
      props.setEmail(emailAdd);
      props.setToken(response.data.token);
      props.setUserName(response.data.userName);

      setDisplayMsg(false);
    } catch (err) {
      // TODO: do something
      setDisplayMsg(true);
      console.log(err);
    }
  };

  // If the props has 
  if (props.email) {
    console.log("Login user email: ", props.email)
    
    //navigate( pathname: '/user-profile' , state: {email: props.email}})
    return <Redirect to={{pathname: '/user-profile' , state: {email: props.email}}}/>;
  }

  return (
    <Login_Content
      check={check}
      checkEmail={checkEmail}
      checkPass={checkPass}
      displayMsg={displayMsg}
    />
  );
};

export const Profile = props => {
  // Send GET request to get the current user logged in
  //Get user currently logged in (sessions), then get information from the user db
  console.log("Profile Email: ", props.email)
  console.log("Profile Name: ", props.userName)

  return (
    <div>
      <Profile_Content
        userName={props.userName}
        email={props.email}
      />
    </div>
  );
};
