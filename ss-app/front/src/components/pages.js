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

  //state for schedule generation
  let [responseData, setResponseData] = useState('')
  let [scheduleArray, setScheduleArray] = useState('')


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
    // prevent the refresh of page on submit
    event.preventDefault();

    const courseNums = [CNumAdd1, CNumAdd2, CNumAdd3, CNumAdd4];
    let courseData = [];

    courseNums.forEach(async courseNum => {
      /* if this field was filled in by the user */
      if (courseNum) {
        const queryString = '/api/courses/find/' + courseNum + '/'
          + SemAdd;
        /* make a backend request for this course data */
        try {
          await axios.get(queryString)
            .then((response) => {
              //console.log(response.data);
              courseData.push(response.data);
            });

        } catch (err) {
          // TODO: do something
        }
      }
    })

    setResponseData(courseData)
    console.log('ResponseData is: ', responseData)
    generateSchedule(responseData)
    //courseData.forEach(course => {
    //  console.log(course);
    //})

  };

  const generateSchedule = props => {

    const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "E1", "E2", "E3"];
    const daysShort = ["M", "T", "W", "R", "F"]
    let finalSchedules = []
    console.log('what is finalSchedules doing?.....', finalSchedules)
    let checkArray = [1]
    console.log('Before: ', scheduleArray)
    //console.log(checkArray.length)

    let day_index = 0;
    let period_index1 = 0;
    let period_index2 = 0;
    let totalScheduleCount = 1;

    if (Array.isArray(responseData) && checkArray.length && responseData[0]) {  //check if responseData array exists and if something exists in it (try taking out the checkArray thing)
      console.log("Wow, something's here")
      console.log('ResponseData (from schedule.js) is: ', responseData)

      let responseDataLength = [];
      responseDataLength = responseData
      console.log('length of responseData is: ', responseDataLength.length)

      //loop to get the total combination of schedules
      for (let a = 0; a < responseDataLength.length; a++) {
        let sectionsAmount = responseData[a].sections
        //console.log('sectionsAmount is :', sectionsAmount.length)
        totalScheduleCount = totalScheduleCount * sectionsAmount.length
        //console.log('current totalScheduleCount is :', totalScheduleCount)
      }

      console.log('total combinations of schedules is: ', totalScheduleCount)

      //fill the final schedule array with empty arrays 
      for (let c = 0; c < totalScheduleCount; c++) {
        let emptySchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
        finalSchedules.push(emptySchedule)
      }

      console.log('finalSchedules initial status: ', finalSchedules)

      let count = 0
      for (let k = 0; k < responseDataLength.length; k++) {

      let sectionsArray = responseData[k].sections
      console.log('sectionsArray is: ', sectionsArray)

        //while (count != totalScheduleCount) {
          for (let i = 0; i < sectionsArray.length; i++) {
            let meetTArray = sectionsArray[i].meetTimes
            //console.log('meetTArray is: ', meetTArray)
            for (let j = 0; j < meetTArray.length; j++) {

              day_index = daysShort.indexOf(meetTArray[j].meetDays[0])
              console.log('day_index is: ', day_index)

              period_index1 = periods.indexOf(meetTArray[j].meetPeriodBegin)
              console.log('period_index1 is: ', period_index1)

              period_index2 = periods.indexOf(meetTArray[j].meetPeriodEnd)
              console.log('period_index2 is: ', period_index2)

              let newSchedule = finalSchedules[count]
              console.log('newSchedule is: ', newSchedule)

              if (period_index1 === period_index2)
                newSchedule[period_index1][day_index] = responseData[k].code
              else {
                newSchedule[period_index1][day_index] = responseData[k].code
                newSchedule[period_index2][day_index] = responseData[k].code
              }
              
            }

            console.log('what should new schedule look like: ', newSchedule)

            for (let b = 0; b < totalScheduleCount / sectionsArray.length; b++) {
              finalSchedules[count] = newSchedule
              count++
              if (count === totalScheduleCount) count = 0
            }
            console.log('finalSchedules is : ', finalSchedules)
          }
        //}
      }
    }
    else {
      console.log("I guess there's nothing here")
      console.log(responseData)
      //console.log('Is there really nothing here?...', props.responseData[0].code)
    }

    setScheduleArray(finalSchedules)
    console.log('After: ', scheduleArray)

  };

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
        scheduleArray={scheduleArray}
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
    return <Redirect to={{ pathname: '/user-profile', state: { email: props.email } }} />;
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

