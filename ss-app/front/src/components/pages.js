import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

//import the content of each page
import HomeContent from './Pages/Home';
import Schedule_Content from './Pages/Schedule';
import Four_Year_Content from './Pages/Four_Year';
import About_Us_Content from './Pages/About_Us';
import Login_Content from './Pages/Login';
import Sign_Up_Content from './Pages/Sign_Up';
import Forgot_Password_Content from './Pages/Forgot_Password';
import Profile_Content from './Pages/Profile';

// import the generate schedule function
import { generateSchedule } from './generate_schedule.js';
import { get_mapping_distance } from './get_mapping_distance.js';

import { getWalkingDurationBetweenMins } from './data/building_data.js';

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
    const [CNumAdd5, setC_Num5] = useState('');
    const [CNumAdd6, setC_Num6] = useState('');
    const [CL_NumAdd1, setCL_Num1] = useState('');
    const [CL_NumAdd2, setCL_Num2] = useState('');
    const [CL_NumAdd3, setCL_Num3] = useState('');
    const [CL_NumAdd4, setCL_Num4] = useState('');
    const [CL_NumAdd5, setCL_Num5] = useState('');
    const [CL_NumAdd6, setCL_Num6] = useState('');
    
    const [test_sc, set_test_sc] = useState('');
    const [update_sc, set_update_sc] = useState('');
  
    const [inHover, setHover] = useState(false);

    //state for schedule generation
    let [responseData, setResponseData] = useState('')
  
  
    let ctr =0;

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
    const C_NumUpdate5 = value => {
      setC_Num5(value);
      console.log('CNumUpdate5() called, value: ', value);
    };
    const C_NumUpdate6 = value => {
      setC_Num6(value);
      console.log('CNumUpdate6() called, value: ', value);
    };
    const CL_NumUpdate1 = value => {
      setCL_Num1(value);
      console.log('CL_NumUpdate1() called, value: ', value);
    };
    const CL_NumUpdate2 = value => {
      setCL_Num2(value);
      console.log('CL_NumUpdate2() called, value: ', value);
    };
    const CL_NumUpdate3 = value => {
      setCL_Num3(value);
      console.log('CL_NumUpdate3() called, value: ', value);
    };
    const CL_NumUpdate4 = value => {
      setCL_Num4(value);
      console.log('CL_NumUpdate4() called, value: ', value);
    };
    const CL_NumUpdate5 = value => {
      setCL_Num5(value);
      console.log('CL_NumUpdate5() called, value: ', value);
    };
    const CL_NumUpdate6 = value => {
      setCL_Num6(value);
      console.log('CL_NumUpdate6() called, value: ', value);
    };

    const reset_button = async event => {
      
      event.preventDefault();
      console.log('RSESET');
    };
    
    // Relevant initializations
    let courseData = [];
    let conflicts = [];
    let conflicts_print = [];
    let final_schedule_info = [];
    let final_lab_lecture_info = [];
    let walking_Durs = [];
    let emptyArray = Array(14).fill(0).map(row => new Array(6).fill(" "))
  
    let emptyArrays = [emptyArray, emptyArray];
    let testSc = emptyArrays;
    let num_courses_sub = 0;
    const courseNums = [CNumAdd1, CNumAdd2, CNumAdd3, CNumAdd4, CNumAdd5, CNumAdd6]; 
    const classNums = [CL_NumAdd1, CL_NumAdd2, CL_NumAdd3, CL_NumAdd4, CL_NumAdd5, CL_NumAdd6]; 
  
    const check = async event => {
      // prevent the refresh of page on submit
      event.preventDefault();

      // Reset
      let courseNumCounter = -1;
  
      // For each course submitted
      courseNums.forEach(async courseNum => {
        /* if this field was filled in by the user */
        if (courseNum){
          //Reset
          set_update_sc(false);

          // update counter
          courseNumCounter++;

          let queryString; // was const


          // Create a query string based on if a class Number was submitted or not
          //Check to see if the course had a corresponding class number submitted
          if(classNums[courseNumCounter] != ''){
            console.log("TRUE")
            queryString = '/api/courses/find/'  + courseNum + '/' + classNums[courseNumCounter] + '/' + SemAdd;
          }else{
            queryString = '/api/courses/find/'  + courseNum + '/'
                                                    + SemAdd;
          }

          console.log("QUERY CALLED: ", queryString)
          
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
  
        
  
      }) // end for each
  
     
  
  
      //courseData.forEach(course => {
      //  console.log(course);
      //})
  
    }; // end of async
    
  
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
      if(responseData.length !== 0){
        if(responseData.length === num_courses_sub){
          // Run the generate schedule function
          let gen_schedule_return = generateSchedule(responseData)  

          //deconstruct returned object into the components we need to use
          testSc = gen_schedule_return.finalSchedules;
          conflicts = gen_schedule_return.conflicts;
          final_schedule_info = gen_schedule_return.finalSchedule_Info;
          final_lab_lecture_info = gen_schedule_return.finalsectionInfo;
          console.log("Test Schedule(s) Received, ",testSc)
          console.log("Conflict(s) Received, ",conflicts)
          console.log("final_schedule_info(s) Received, ", final_schedule_info)
          console.log("final_lab_lecture_info(s) Received, ", final_lab_lecture_info)

          // Parse out the confilcts
          for (let i = 0; i < conflicts.length; i++) {
            //console.log("conflicts[i],",conflicts[i])
            let temp_st = conflicts[i].toString()
            conflicts_print.push(temp_st)
            conflicts_print.push(',')
          }

          // Spencer Additions
          walking_Durs = get_mapping_distance(final_schedule_info, testSc)

          //console.log("conflicts_print ",conflicts_print)
          
          //Parse out the info based on length of responsData (# of courses)
          //If the testSc has not been changed, don't do anything
          if (testSc === emptyArrays) { console.log("nothing has happened here. testSc is: ", testSc) }
          // Based on if the update state is T/F
          else if (update_sc === false){
            // Update the schedule state variable w/ the generate Scheudle if they are NOT the same
            set_test_sc(testSc)
            console.log("UPDATE", update_sc)
            // Set the flag that this has been updated so it doesn't re-render
            set_update_sc(true);
          }
          else{
            console.log("testSc and test_sc are the same, no update performed")
          }
  
  
        }

        // Delay on submit error checks
          //console.log("bool", update_sc)
          //console.log("testSc", testSc)
          //console.log("test_sc", test_sc)
  
      } // end of outer else
  

      console.log("conflicts_print", conflicts_print)
      console.log("walking_Durs", walking_Durs)
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
          C_NumUpdate5={C_NumUpdate5}
          C_NumUpdate6={C_NumUpdate6}
          CL_NumUpdate1={CL_NumUpdate1}
          CL_NumUpdate2={CL_NumUpdate2}
          CL_NumUpdate3={CL_NumUpdate3}
          CL_NumUpdate4={CL_NumUpdate4}
          CL_NumUpdate5={CL_NumUpdate5}
          CL_NumUpdate6={CL_NumUpdate6}
          responseData={responseData}
          test_sc={testSc}
          conflicts={conflicts}
          conflicts_print={conflicts_print}
          final_schedule_info={final_schedule_info}
          courseNums={courseNums}
          final_lab_lecture_info={final_lab_lecture_info}
          inHover={inHover}
          setHover={setHover}
          walking_Durs={walking_Durs}
          reset_button={reset_button}
      />
    </div>
    );
  };

  export const Four_Year = () => {
    const [SemCAdd, setSemC] = useState('');
    const [yearAdd, setYearC] = useState('');

    const [CNum1, setCNum1] = useState('');
    const [CNum2, setCNum2] = useState('');
    const [CNum3, setCNum3] = useState('');
    const [CNum4, setCNum4] = useState('');
    const [CNum5, setCNum5] = useState('');
    const [CNum6, setCNum6] = useState('');

    const [CName1, setCName1] = useState('');
    const [CName2, setCName2] = useState('');
    const [CName3, setCName3] = useState('');
    const [CName4, setCName4] = useState('');
    const [CName5, setCName5] = useState('');
    const [CName6, setCName6] = useState('');

    const [CCred1, setCCred1] = useState('');
    const [CCred2, setCCred2] = useState('');
    const [CCred3, setCCred3] = useState('');
    const [CCred4, setCCred4] = useState('');
    const [CCred5, setCCred5] = useState('');
    const [CCred6, setCCred6] = useState('');

    
    const SemChoice = value => {
      setSemC(value);
      console.log('SemChoice() called, value: ', value);
    };
    const YChoice = value => {
      setYearC(value);
      console.log('YChoice() called, value: ', value);
    };
  
    const addCNUM1Update = value => {
      setCNum1(value); 
      console.log('addCNUM1Update() called, value: ', value);
    };
    const addCNUM2Update = value => {
      setCNum2(value); 
      console.log('addCNUM2Update() called, value: ', value);
    };
    const addCNUM3Update = value => {
      setCNum3(value); 
      console.log('addCNUM3Update() called, value: ', value);
    };
    const addCNUM4Update = value => {
      setCNum4(value); 
      console.log('addCNUM4Update() called, value: ', value);
    };
    const addCNUM5Update = value => {
      setCNum5(value); 
      console.log('addCNUM5Update() called, value: ', value);
    };
    const addCNUM6Update = value => {
      setCNum6(value); 
      console.log('addCNUM6Update() called, value: ', value);
    };

    const addCNAME1Update = value => {
      setCName1(value); 
      console.log('addCName1Update() called, value: ', value);
    };
    const addCNAME2Update = value => {
      setCName2(value); 
      console.log('addCName2Update() called, value: ', value);
    };
    const addCNAME3Update = value => {
      setCName3(value); 
      console.log('addCName3Update() called, value: ', value);
    };
    const addCNAME4Update = value => {
      setCName4(value); 
      console.log('addCName4Update() called, value: ', value);
    };
    const addCNAME5Update = value => {
      setCName5(value); 
      console.log('addCName5Update() called, value: ', value);
    };
    const addCNAME6Update = value => {
      setCName6(value); 
      console.log('addCName6Update() called, value: ', value);
    };

    const addCCRED1Update = value => {
      setCCred1(value); 
      console.log('addCCRED1Update() called, value: ', value);
    };
    const addCCRED2Update = value => {
      setCCred2(value); 
      console.log('addCCRED2Update() called, value: ', value);
    };
    const addCCRED3Update = value => {
      setCCred3(value); 
      console.log('addCCRED3Update() called, value: ', value);
    };
    const addCCRED4Update = value => {
      setCCred4(value); 
      console.log('addCCRED4Update() called, value: ', value);
    };
    const addCCRED5Update = value => {
      setCCred5(value); 
      console.log('addCCRED5Update() called, value: ', value);
    };
    const addCCRED6Update = value => {
      setCCred6(value); 
      console.log('addCCRED6Update() called, value: ', value);
    };

    const saveSchedule = async event => {
    event.preventDefault(); 
    console.log('saveSchedule() called');
    console.log('Save CourseName1: ', CName1); 
    console.log('Save CourseName2: ', CName2); 
    console.log('Save CourseName3: ', CName3); 
    console.log('Save CourseName4: ', CName4); 
    console.log('Save CourseName5: ', CName5); 
    console.log('Save CourseName6: ', CName6); 
    console.log('Save CourseNum1: ', CNum1); 
    console.log('Save CourseNum2: ', CNum2); 
    console.log('Save CourseNum3: ', CNum3); 
    console.log('Save CourseNum4: ', CNum4); 
    console.log('Save CourseNum5: ', CNum5); 
    console.log('Save CourseNum6: ', CNum6); 
    console.log('Save CourseCred1: ', CCred1);
    console.log('Save CourseCred2: ', CCred2);
    console.log('Save CourseCred3: ', CCred3);
    console.log('Save CourseCred4: ', CCred4);
    console.log('Save CourseCred5: ', CCred5);
    console.log('Save CourseCred6: ', CCred6);

    console.log('Year save: ', yearAdd); 
    console.log('Semester save: ', SemCAdd); 

    let newSemester = {
      year: yearAdd, 
      semester: SemCAdd,
      course1:
      {
        number: CNum1,
        name: CName1,
        credits: CCred1
      },
      course2:
      {
        number: CNum2,
        name: CName2,
        credits: CCred2
      },
      course3:
      {
        number: CNum3,
        name: CName3,
        credits: CCred3
      },
      course4:
      {
        number: CNum4,
        name: CName4,
        credits: CCred4
      },
      course5:
      {
        number: CNum5,
        name: CName5,
        credits: CCred5
      },
      course6:
      {
        number: CNum6,
        name: CName6,
        credits: CCred6
      },
      
    };
    console.log(newSemester);
      /*
      try {
        console.log('Post Semester sent');
        const s = await axios.post('/api/users/', newSemester);
        if (s.status == 200) {
          setReload(true);
        }
      } catch (err) {
        return false;
      }
      */

    console.log('trying reload');
    } ;
    
  /*
    if (reload) {
      console.log('caught redirect');
      setTimeout(() => {
        setReload(false);
      }, 10000);
      return <Redirect to='/login' />;
    } */

    return (
      <Four_Year_Content 
      saveSchedule = {saveSchedule}
      SemChoice = {SemChoice}
      YChoice = {YChoice}
      addCNUM1Update = {addCNUM1Update}
      addCNUM2Update = {addCNUM2Update}
      addCNUM3Update = {addCNUM3Update}
      addCNUM4Update = {addCNUM4Update}
      addCNUM5Update = {addCNUM5Update}
      addCNUM6Update = {addCNUM6Update}
      addCNAME1Update = {addCNAME1Update}
      addCNAME2Update = {addCNAME2Update}
      addCNAME3Update = {addCNAME3Update}
      addCNAME4Update = {addCNAME4Update}
      addCNAME5Update = {addCNAME5Update}
      addCNAME6Update = {addCNAME6Update}
      addCCRED1Update = {addCCRED1Update}
      addCCRED2Update = {addCCRED2Update}
      addCCRED3Update = {addCCRED3Update}
      addCCRED4Update = {addCCRED4Update}
      addCCRED5Update = {addCCRED5Update}
      addCCRED6Update = {addCCRED6Update}
      />
    );
  };

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

export const Forgot_Password = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newPassC, setnewPassC] = useState('');
  const [reload, setReload] = useState(false);

  const emailUpdate = value => {
    setEmail(value);
  };
  const nameUpdate = value => {
    setName(value);
  };
  const NewPassUpdate = value => {
    setNewPass(value);
  };
  const NewPassCUpdate = value => {
    setnewPassC(value);
  };

  const save = async event => {
    //prevent the refresh of page on submit
    event.preventDefault();

    //log
    console.log('save Forgot Password() called');
    console.log('email: ', email);
    console.log('name: ', name);
    //console.log('newPass: ', newPass);
    //console.log('newPassC: ', newPassC);

    let User = {
      FNme: name,
      email: email,
      newPass: newPass
    };

    try {
      console.log('PW reset sent');
      const s = await axios.put('/api/users/forgot', User);
      if (s.status == 200) {
        setReload(true);
      }
    } catch (err) {
      return false;
    }
    console.log('trying reload');

    //TODO: need to query the database based on the email
    //then update the user schema with the new password
  };

  // redirect to login once password reset
  if (reload) {
    console.log('caught redirect');
    setTimeout(() => {
      setReload(false);
    }, 10000);
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <Forgot_Password_Content
        emailUpdate={emailUpdate}
        nameUpdate={nameUpdate}
        NewPassUpdate={NewPassUpdate}
        NewPassCUpdate={NewPassCUpdate}
        save={save}
      />
    </div>
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
