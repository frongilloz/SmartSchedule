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
import Four_Year_User_Disp_Content from './Pages/Four_Year_User_Disp';

// import the generate schedule function
import { generateSchedule } from './generate_schedule.js';
import { get_mapping_distance } from './get_mapping_distance.js';

import { getWalkingDurationBetweenMins } from './data/building_data.js';
import { findBuildingByCode } from './data/building_data.js';

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

    //rename the following after you figure out the problem -Dom
    let [callCounter_r, setcallCounter_r] = useState('')
  
  
    let ctr =0;

    //external change functions
    const SemUpdate = value => {
      setSem(value);
      //console.log('SemUpdate() called, value: ', value);
    };
    const C_NumUpdate1 = value => {
      setC_Num1(value);
      //console.log('CNumUpdate1() called, value: ', value);
    };
    const C_NumUpdate2 = value => {
      setC_Num2(value);
      //console.log('CNumUpdate2() called, value: ', value);
    };
    const C_NumUpdate3 = value => {
      setC_Num3(value);
      //console.log('CNumUpdate3() called, value: ', value);
    };
    const C_NumUpdate4 = value => {
      setC_Num4(value);
      //console.log('CNumUpdate4() called, value: ', value);
    };
    const C_NumUpdate5 = value => {
      setC_Num5(value);
      //console.log('CNumUpdate5() called, value: ', value);
    };
    const C_NumUpdate6 = value => {
      setC_Num6(value);
      //console.log('CNumUpdate6() called, value: ', value);
    };
    const CL_NumUpdate1 = value => {
      setCL_Num1(value);
      //console.log('CL_NumUpdate1() called, value: ', value);
    };
    const CL_NumUpdate2 = value => {
      setCL_Num2(value);
      //console.log('CL_NumUpdate2() called, value: ', value);
    };
    const CL_NumUpdate3 = value => {
      setCL_Num3(value);
      //console.log('CL_NumUpdate3() called, value: ', value);
    };
    const CL_NumUpdate4 = value => {
      setCL_Num4(value);
      //console.log('CL_NumUpdate4() called, value: ', value);
    };
    const CL_NumUpdate5 = value => {
      setCL_Num5(value);
      //console.log('CL_NumUpdate5() called, value: ', value);
    };
    const CL_NumUpdate6 = value => {
      setCL_Num6(value);
      //console.log('CL_NumUpdate6() called, value: ', value);
    };

    const reset_button = async event => {
      
      event.preventDefault();
      //console.log('RSESET');
    };
    
    // Relevant initializations
    let courseData = [];
    let queryStrings = [];
    let conflicts = [];
    let conflicts_print = [];
    let final_schedule_info = [];
    let final_lab_lecture_info = [];
    let walking_Durs = [];
    let conflictSchedules = Array(14).fill(0).map(row => new Array(6).fill(" "));
    let emptyArray = Array(14).fill(0).map(row => new Array(6).fill(" "))
  
    let emptyArrays = [emptyArray, emptyArray];
    let testSc = emptyArrays;
    let num_courses_sub = 0;
    const courseNums = [CNumAdd1, CNumAdd2, CNumAdd3, CNumAdd4, CNumAdd5, CNumAdd6]; 
    const classNums = [CL_NumAdd1, CL_NumAdd2, CL_NumAdd3, CL_NumAdd4, CL_NumAdd5, CL_NumAdd6]; 


    //Troubleshooting attempt #1: try to move the get request to an async function 
    //async function sendGetRequest(queryStrings) {
    //  for (const query of queryStrings) {
    //    try {
    //      await axios.get(query)
    //        .then((response) => {
    //          //console.log("GET axios called")
    //          //console.log("GET resp data", response.data);
    //          courseData.push(response.data);

    //          // Prev
    //          setResponseData(courseData)

    //          //console.log("Step 2")
    //        });

    //    } catch (err) {
    //      // TODO: do something
    //      //console.log("the axios try catch block caught something... is it a bug?")
    //    }
    //  }
    //}

    //Troubleshoot attempt #2 : create another check to separate the call for generateschedule.js
    const check2 = async event => {

      // prevent the refresh of page on submit
      //event.preventDefault();

      // //console.log("start of check2")
      // //console.log('Pages.js length of resposneData is: ', responseData.length)
      // //console.log("responseData length is:", responseData.length)
      // //console.log("callCounter:", callCounter_r)
      // if (responseData.length === callCounter_r)
      //   // //console.log("responseData length and num of courses from form match")
      // else
      //   // //console.log("responseData length and num of courses from form do not match")
    }
    // only generate the new schedule once all the course requests have been completed
    if (responseData.length !== 0) {
      if (responseData.length === callCounter_r) {
        // Run the generate schedule function
        let gen_schedule_return = generateSchedule(responseData)

        //deconstruct returned object into the components we need to use
        testSc = gen_schedule_return.finalSchedules;
        conflicts = gen_schedule_return.conflicts;
        conflictSchedules = gen_schedule_return.conflictSchedules;
        final_schedule_info = gen_schedule_return.finalSchedule_Info;
        final_lab_lecture_info = gen_schedule_return.finalsectionInfo;
        // //console.log("Test Schedule(s) Received, ", testSc)
        // //console.log("Conflict(s) Received, ", conflicts)
        // //console.log("conflictSchedules Received, ", conflictSchedules)
        // //console.log("final_schedule_info(s) Received, ", final_schedule_info)
        // //console.log("final_lab_lecture_info(s) Received, ", final_lab_lecture_info)

        // Parse out the confilcts
        for (let i = 0; i < conflicts.length; i++) {
          ////console.log("conflicts[i],",conflicts[i])
          let temp_st = conflicts[i].toString()
          conflicts_print.push(temp_st)
          conflicts_print.push(',')
        }

        // Spencer Additions
        walking_Durs = get_mapping_distance(final_schedule_info, testSc)

        ////console.log("conflicts_print ",conflicts_print)

        //Parse out the info based on length of responsData (# of courses)
        //If the testSc has not been changed, don't do anything
        if (testSc === emptyArrays) { }
        // Based on if the update state is T/F
        else if (update_sc === false) {
          // Update the schedule state variable w/ the generate Scheudle if they are NOT the same
          set_test_sc(testSc)
          // //console.log("UPDATE", update_sc)
          // Set the flag that this has been updated so it doesn't re-render
          set_update_sc(true);
        }
        else {
          // //console.log("testSc and test_sc are the same, no update performed")
        }

        //Delay on submit error checks
        // //console.log("bool", update_sc)
        // //console.log("testSc", testSc)
        // //console.log("test_sc", test_sc)

      } // end of outer else
    }

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
          // //console.log("what is course number here:", courseNum)
          // update counter
          courseNumCounter++;

          let queryString; // was const


          // Create a query string based on if a class Number was submitted or not
          //Check to see if the course had a corresponding class number submitted
          if(classNums[courseNumCounter] != ''){
            //console.log("Class Num Submitted")
            queryString = '/api/courses/findCS/' + courseNum + '/' + classNums[courseNumCounter] + '/' + SemAdd;
            //console.log("Step 1")
          }else{
            queryString = '/api/courses/findC/'  + courseNum + '/'
              + SemAdd;
            //console.log("Step 1")
          }

          //console.log("QUERY CALLED: ", queryString)
          queryStrings.push(queryString)
        }
      }) // end for each

      //console.log("does this show up after every query call?")
      check3()
      //check2()

    }; // end of async

    //Troubleshoot attempt #3 : use check3 after the forEach is finished within the async call, then call check2
    async function check3() {
      //console.log("start of check3")

      //console.log("queryStrings is: ", queryStrings)

      // Get the number of courses submitted
      for (let i = 0; i < courseNums.length; i++) {
        if (courseNums[i]) {
          num_courses_sub++
        }
      }

      //console.log('Pages.js num_courses_sub is: ', num_courses_sub)

      let callCounter = 0
      for (const query of queryStrings) {
        try {
          await axios.get(query)
            .then((response) => {
              //console.log("GET axios called")
              //console.log("GET resp data", response.data);
              courseData.push(response.data);

              //// Prev
              //setResponseData(courseData)
              callCounter++

              if (callCounter === num_courses_sub) {
                setResponseData(courseData)
                setcallCounter_r(callCounter)
              }

              //console.log("Step 2")
              //console.log("show me courseData", courseData)
              //console.log("what is callCounter", callCounter)

            });

        } catch (err) {
          // TODO: do something
          //console.log("the axios try catch block caught something... is it a bug?")
        }
      }
    }
      //Troubleshoot attempt #3 : call check2 (which calls generateSchedule and mapping function) after check3
      check2()

      //console.log("conflicts_print", conflicts_print)
      //console.log("walking_Durs", walking_Durs)
      //console.log("fin")
  
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
          findBuildingByCode={findBuildingByCode}
          conflictSchedules={conflictSchedules}
      />
    </div>
    );
  };

export const Four_Year = props => {
  const [SemCAdd, setSemC] = useState('');
  const [yearAdd, setYearC] = useState('');
  var [CNum1, setCNum1] = useState('');
  var [CNum2, setCNum2] = useState('');
  var [CNum3, setCNum3] = useState('');
  var [CNum4, setCNum4] = useState('');
  var [CNum5, setCNum5] = useState('');
  var [CNum6, setCNum6] = useState('');
  var [CName1, setCName1] = useState('');
  var [CName2, setCName2] = useState('');
  var [CName3, setCName3] = useState('');
  var [CName4, setCName4] = useState('');
  var [CName5, setCName5] = useState('');
  var [CName6, setCName6] = useState('');
  var [CCred1, setCCred1] = useState('');
  var [CCred2, setCCred2] = useState('');
  var [CCred3, setCCred3] = useState('');
  var [CCred4, setCCred4] = useState('');
  var [CCred5, setCCred5] = useState('');
  var [CCred6, setCCred6] = useState('');
  
  const [displayMsg, setDisplayMsg] = useState(false);

  const SemChoice = value => {
    setSemC(value);
    //console.log('SemChoice() called, value: ', value);
  };
  const YChoice = value => {
    setYearC(value);
    //console.log('YChoice() called, value: ', value);
  };
  const addCNUM1Update = value => {
    setCNum1(value);
    //console.log('addCNUM1Update() called, value: ', value);
  };
  const addCNUM2Update = value => {
    setCNum2(value);
    //console.log('addCNUM2Update() called, value: ', value);
  };
  const addCNUM3Update = value => {
    setCNum3(value);
    //console.log('addCNUM3Update() called, value: ', value);
  };
  const addCNUM4Update = value => {
    setCNum4(value);
    //console.log('addCNUM4Update() called, value: ', value);
  };
  const addCNUM5Update = value => {
    setCNum5(value);
    //console.log('addCNUM5Update() called, value: ', value);
  };
  const addCNUM6Update = value => {
    setCNum6(value);
    //console.log('addCNUM6Update() called, value: ', value);
  };
  const addCNAME1Update = value => {
    setCName1(value);
    //console.log('addCName1Update() called, value: ', value);
  };
  const addCNAME2Update = value => {
    setCName2(value);
    //console.log('addCName2Update() called, value: ', value);
  };
  const addCNAME3Update = value => {
    setCName3(value);
    //console.log('addCName3Update() called, value: ', value);
  };
  const addCNAME4Update = value => {
    setCName4(value);
    //console.log('addCName4Update() called, value: ', value);
  };
  const addCNAME5Update = value => {
    setCName5(value);
    //console.log('addCName5Update() called, value: ', value);
  };
  const addCNAME6Update = value => {
    setCName6(value);
    //console.log('addCName6Update() called, value: ', value);
  };
  const addCCRED1Update = value => {
    setCCred1(value);
    //console.log('addCCRED1Update() called, value: ', value);
  };
  const addCCRED2Update = value => {
    setCCred2(value);
    //console.log('addCCRED2Update() called, value: ', value);
  };
  const addCCRED3Update = value => {
    setCCred3(value);
    //console.log('addCCRED3Update() called, value: ', value);
  };
  const addCCRED4Update = value => {
    setCCred4(value);
    //console.log('addCCRED4Update() called, value: ', value);
  };
  const addCCRED5Update = value => {
    setCCred5(value);
    //console.log('addCCRED5Update() called, value: ', value);
  };
  const addCCRED6Update = value => {
    setCCred6(value);
    //console.log('addCCRED6Update() called, value: ', value);
  };

  const saveSchedule = async event => {
    event.preventDefault();

    if(CNum1 == "")
    {
      CNum1 = " "; 
    }
    if(CNum2 == "")
    {
      CNum2 = " "; 
    }
    if(CNum3 == "")
    {
      CNum3 = " "; 
    }
    if(CNum4 == "")
    {
      CNum4 = " "; 
    }
    if(CNum5 == "")
    {
      CNum5 = " "; 
    }
    if(CNum6 == "")
    {
      CNum6 = " "; 
    }
    if(CName1 == "")
    {
      CName1 = " "; 
    }
    if(CName2 == "")
    {
      CName2 = " "; 
    }
    if(CName3 == "")
    {
      CName3 = " "; 
    }
    if(CName4 == "")
    {
      CName4 = " "; 
    }
    if(CName5 == "")
    {
      CName5 = " "; 
    }
    if(CName6 == "")
    {
      CName6 = " "; 
    }
    if(CCred1 == "")
    {
      CCred1 = 0; 
    }
    if(CCred2 == "")
    {
      CCred2 = 0; 
    }
    if(CCred3 == "")
    {
      CCred3 = 0; 
    }
    if(CCred4 == "")
    {
      CCred4 = 0; 
    }
    if(CCred5 == "")
    {
      CCred5 = 0; 
    }
    if(CCred6 == "")
    {
      CCred6 = 0; 
    }

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
    }


    //console.log('Semester save: ', newSemester);

    let curr_email =  props.email;

    //console.log("POST sent for 4 Year", newSemester);
    //console.log("curr_email", curr_email);

    // @TODO A not logged in error

    let putObj ={
      newSemester: newSemester,
      email: curr_email
    }

    //POST
    try {
      //console.log('Post Semester sent');
      const s = await axios.put('/api/users/post_plan/', putObj);
      /*
      if (s.status == 200) {
        setReload(true);
      }*/
      setDisplayMsg(true);
    } catch (err) {
      return false;
    }

    //console.log('trying reload');


  };// end submit method


  /*
    if (reload) {
      //console.log('caught redirect');
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
          displayMsg={displayMsg}
      />
  );

};

// Display the 4 year plan specific to user
export const Four_Year_User_Disp = props => {
  const [initVar, setInitVar] = useState(false);
  let [responseData, setResponseData] = useState('')

  // Send GET request to get the current user logged in
  //Get user currently logged in (sessions), then get information from the user db
  //console.log("Profile Email: ", props.email)
  //console.log("Profile Name: ", props.userName)

  // Object to pass to req
  let passObj ={
    email: props.email
  }
  let print_warn = 0;


  let init = 0;
  // Call get request
  const getInfo = async () => {
    try {
      //console.log("GET axios called")
      await axios.put('/api/users/four-year-user-info/', passObj)
          .then((response) => {
            setResponseData(response.data);
            //console.log("GET resp data", responseData);
            setInitVar(true)
          });

    } catch (err) {
      // TODO: do something
      //console.log('error')
    }
  }

  // If a user isn't logged in, can't display this page
  if (props.email == ''){
    print_warn = 1;
  }
  else{
    // Trigger the get info to display
    if(!initVar){
      getInfo();
    }
  }

  return (
      <div>
        <Four_Year_User_Disp_Content
            userName={props.userName}
            email={props.email}
            user={responseData}
            print_warn={print_warn}
            initVar = {initVar}
        />
      </div>
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
    //console.log('addFNameUpdate() called, value: ', value);
  };

  const addLNameUpdate = value => {
    setLName(value);
    //console.log('addLNameUpdate() called, value: ', value);
  };

  const addEmailUpdate = value => {
    setEmail(value);
    //console.log('addEmailUpdate() called, value: ', value);
  };

  const addPassUpdate = value => {
    setPass(value);
    ////console.log('addPassUpdate() called, value: ', value);
  };

  const addPassConfUpdate = value => {
    setCPass(value);
    ////console.log('addPassConfUpdate() called, value: ', value);
  };

  //the save function to the database
  const save = async event => {
    //prevent the refresh of page on submit
    event.preventDefault();

    //log
    //console.log('save() Sign Up called');
    //console.log('save() FName: ', FNameAdd);
    //console.log('save() LName: ', LNameAdd);
    //console.log('save() email: ', emailAdd);
    //console.log('save() pass: ', passAdd);
    //console.log('save() passC: ', passCAdd);

    //2) and will need to check is the email already exists in the database

    //create a new user schema
    let newUser = {
      FName: FNameAdd,
      LName: LNameAdd,
      fullName: FNameAdd + ' ' + LNameAdd,
      email: emailAdd,
      password: passAdd,
      y1_sp: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y1_sp
    
      y1_su: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y1_su
    
      y1_fl: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y1_fl
    
      // YEAR 2
      y2_sp: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y2_sp
    
      y2_su: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y2_su
    
      y2_fl: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y2_fl
    
    // YEAR 3
      y3_sp: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y3_sp
    
      y3_su: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y3_su
    
      y3_fl: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y3_fl
    
      // YEAR 4
      y4_sp: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y4_sp
    
      y4_su: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y4_su
    
      y4_fl: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y4_fl
    
      // YEAR 5
      y5_sp: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y5_sp
    
      y5_su: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }] ,// end of y5_su
    
      y5_fl: [{
        year: " ", 
        semester: " ",
          course1:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course2:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course3:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course4:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course5:
          {
            number: " ",
            name: " ",
            credits: 0
          },
          course6:
          {
            number: " ",
            name: " ",
            credits: 0
          },
      }]
    
    
    };


    try {
      //console.log('Post User sent');
      const s = await axios.post('/api/users/', newUser);
      if (s.status == 200) {
        setReload(true);
      }
    } catch (err) {
      return false;
    }
    //console.log('trying reload');
  };

  if (reload) {
    //console.log('caught redirect');
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
    //console.log('checkEmail() called, value: ', value);
  };

  const checkPass = value => {
    setPass(value);
    ////console.log('checkPass() called, value: ', value);
  };

  //the check function to the database
  const check = async event => {
    //prevent the refresh of page on submit
    event.preventDefault();

    //log
    //console.log('check() called');
    //console.log('check() email: ', emailAdd);
    ////console.log('check() pass: ', passAdd);

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
      //console.log(err);
    }
  };

  // If the props has 
  if (props.email) {
    //console.log("Login user email: ", props.email)
    
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
    //console.log('save Forgot Password() called');
    //console.log('email: ', email);
    //console.log('name: ', name);
    ////console.log('newPass: ', newPass);
    ////console.log('newPassC: ', newPassC);

    let User = {
      FNme: name,
      email: email,
      newPass: newPass
    };

    try {
      //console.log('PW reset sent');
      const s = await axios.put('/api/users/forgot', User);
      if (s.status == 200) {
        setReload(true);
      }
    } catch (err) {
      return false;
    }
    //console.log('trying reload');

    //TODO: need to query the database based on the email
    //then update the user schema with the new password
  };

  // redirect to login once password reset
  if (reload) {
    //console.log('caught redirect');
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
  //console.log("Profile Email: ", props.email)
  //console.log("Profile Name: ", props.userName)

  return (
    <div>
      <Profile_Content
        userName={props.userName}
        email={props.email}
      />
    </div>
  );
};