import React, { Component, useState } from 'react';

import { Form, Col, Card, Button, Container, Row , Table, Alert, Collapse, Accordion} from 'react-bootstrap';
import './basic.css';

const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "E1", "E2", "E3"];
const daysShort = ["M", "T", "W", "R", "F"]

const times = [
    "7:25 AM - 8:15 AM", "8:30 AM - 9:20 AM", "9:35 AM - 10:25 AM",
    "10:40 AM - 11:30 AM", "11:45 AM - 12:35 PM", "12:50 PM - 1:40 PM",
    "1:55 PM - 2:45 PM", "3:00 PM - 3:50 PM", "4:05 PM - 4:55 PM",
    "5:10 PM - 6:00 PM", "6:15 PM - 7:05 PM", "7:20 PM - 8:10 PM",
    "8:20 PM - 9:10 PM", "9:20 PM - 10:10 PM"];

// maybe have a 2D array that will contain the in-class potential schedules 
// first, fill it with empty space
var TestSchdule = Array(14).fill(0).map(row => new Array(6).fill(" "))

const Schedule = props => {

  //internal change functions
  const SemInt = event => {
    console.log('SemIntTriggered');

    //change by calling App external function
    props.SemUpdate(event.target.value);

    //log
    //console.log('SemInt: ', event.target.value);
  };

  const CourseNumInt1 = event => {
    console.log('CourseNumInt1 Triggered');

    //change by calling App external function
    props.C_NumUpdate1(event.target.value);

    //log
    //console.log('C_Num1: ', event.target.value);
  };

  const CourseNumInt2 = event => {
    console.log('CourseNumInt2 Triggered');

    //change by calling App external function
    props.C_NumUpdate2(event.target.value);

    //log
    //console.log('C_Num2: ', event.target.value);
  };

  const CourseNumInt3 = event => {
    console.log('CourseNumInt3 Triggered');

    //change by calling App external function
    props.C_NumUpdate3(event.target.value);

    //log
    //console.log('C_Num3: ', event.target.value);
  };

  const CourseNumInt4 = event => {
    console.log('CourseNumInt4 Triggered');
    
    //change by calling App external function
    props.C_NumUpdate4(event.target.value);
    //log
    //console.log('C_Num4: ', event.target.value);
  };

  const CourseNumInt5 = event => {
    //change by calling App external function
    props.C_NumUpdate5(event.target.value);
  };
  const CourseNumInt6 = event => {
    //change by calling App external function
    props.C_NumUpdate6(event.target.value);
  };


  const ClassNumInt1 = event => {
    //change by calling App external function
    props.CL_NumUpdate1(event.target.value);
    //console.log('ClassNumInt1: ', event.target.value);
    };

  const ClassNumInt2 = event => {
    //change by calling App external function
    props.CL_NumUpdate2(event.target.value);
    //console.log('ClassNumInt2: ', event.target.value);
    };

  const ClassNumInt3 = event => {
    //change by calling App external function
    props.CL_NumUpdate3(event.target.value);
    //console.log('ClassNumInt3: ', event.target.value);
    };

  const ClassNumInt4 = event => {
    //change by calling App external function
    props.CL_NumUpdate4(event.target.value);
    //console.log('ClassNumInt4: ', event.target.value);
    };

  const ClassNumInt5 = event => {
    //change by calling App external function
    props.CL_NumUpdate5(event.target.value);
    };

  const ClassNumInt6 = event => {
    //change by calling App external function
    props.CL_NumUpdate6(event.target.value);
    };


    // Print Online Classes for table
    /*
    const generate_colored_sched_cells = curr_row => {
      return(

    {props.final_schedule_info.slice(0, props.final_schedule_info.length).map((curr_class_obj, curr_idx) => {

      // For each index, check to see if it is online (AD = Online); (PC = In person)
      if(curr_class_obj[curr_sc_index].section_web == "AD"){
        // define a temp var
        let curr_cl_code = curr_class_obj[curr_sc_index].course_code;

        // Then check against the responseData for coloring
        if(curr_cl_code == props.courseNums[0].toUpperCase()){
          return (
            <tr>
              <td class='def_color_table' colSpan="2">Online (100%)</td>
              <td class='color_class_1' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
            </tr>);
        }else if(curr_cl_code== props.courseNums[1].toUpperCase()){
          return (
            <tr>
              <td class='def_color_table' colSpan="2">Online (100%)</td>
              <td class='color_class_2' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
            </tr>);
        }else if(curr_cl_code== props.courseNums[2].toUpperCase()){
          return (
            <tr>
              <td class='def_color_table' colSpan="2">Online (100%)</td>
              <td class='color_class_3' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
            </tr>);
        }else if(curr_cl_code== props.courseNums[3].toUpperCase()){
          return (
            <tr>
              <td class='def_color_table' colSpan="2">Online (100%)</td>
              <td class='color_class_4' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
            </tr>);
        }else if(curr_cl_code== props.courseNums[4].toUpperCase()){
          return (
            <tr>
              <td class='def_color_table' colSpan="2">Online (100%)</td>
              <td class='color_class_5' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
            </tr>);
        }else if(curr_cl_code== props.courseNums[5].toUpperCase()){
          return (
            <tr>
              <td class='def_color_table' colSpan="2">Online (100%)</td>
              <td class='color_class_6' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
            </tr>);
        }else {
          return (
            <tr>
              <td class='def_color_table' colSpan="2">Online (100%)</td>
              <td class='def_color_table' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
            </tr>);
        }

      }
      
    })}
);
  }
  */


  // Color classes
  const generate_colored_sched_cells = curr_row => {
    //console.log("curr_row", curr_row)

    // init
    let array_ret = [];

    // Iterate through the row, and check the 6 values of the string array
    for (let i = 0; i < curr_row.length; i++) {
      if(curr_row[i] == ' '){
        // empty
        array_ret.push(<td class='def_color_table'>{curr_row[i]}</td>)
      }
      else{
        // Go through the courseNums submitted, and match to print the color
        if(curr_row[i] == props.courseNums[0].toUpperCase()){
          array_ret.push(<td class='color_class_1' 
            onMouseEnter={() => props.setHover(true)}
            onMouseLeave={() => props.setHover(false)}
              >{curr_row[i]}</td>)
        }
        else if(curr_row[i] == props.courseNums[1].toUpperCase()){
          array_ret.push(<td class='color_class_2'>{curr_row[i]}</td>)
        }
        else if(curr_row[i] == props.courseNums[2].toUpperCase()){
          array_ret.push(<td class='color_class_3'>{curr_row[i]}</td>)
        }
        else if(curr_row[i] == props.courseNums[3].toUpperCase()){
          array_ret.push(<td class='color_class_4'>{curr_row[i]}</td>)
        }
        else if(curr_row[i] == props.courseNums[4].toUpperCase()){
          array_ret.push(<td class='color_class_5'>{curr_row[i]}</td>)
        }
        else if(curr_row[i] == props.courseNums[5].toUpperCase()){
          array_ret.push(<td class='color_class_6'>{curr_row[i]}</td>)
        }
        else{
          array_ret.push(<td class='def_color_table'>{curr_row[i]}</td>)
        }
        
      }
    }

    // At the end, return compiled table elements with styled cells
    return(array_ret)
  }
  

  // Print a general warning of the conflict indices. Also prints out the "Get Started Menu"
  const print_conflicts = props => {
    // "Props" is the props.conflicts

    // Only print the conflict warnings if there are conflicts present
    if(props.length != 0){
      return(
        <div className='alert alert-danger' id='conflicts_div'>
            <strong>There are conflicts at schedules: {props}</strong>
        </div>
      )
    }
    else if(props.final_schedule_info){
      return(<div></div> )
    }

    else{
      return(
        <div>
        <Alert variant='primary'>
          Please enter your courses on the left menu to get started.
        </Alert>
      </div>
      )
    }
  };


  //Print a general warning of the conflict indices
  const print_conflict = curr_sc_idx => {

    // Only print the conflict warnings if there are conflicts present
    // for the length of the conflicts produced
    for (let i = 0; i < props.conflicts.length; i++) {
      if(curr_sc_idx == props.conflicts[i] ){
        return(
          <div className='alert alert-danger' id='conflicts_div'>
              <strong><b>Warning: </b> There is a class conflict in this schedule.</strong>
          </div>
        )
      }
    }
  };


  //Print a mapping warning of the conflict indices
  const print_mapping_alerts = curr_sc_idx => {

    // Only print the conflict warnings if there are conflicts present
    // for the length of the conflicts produced

    for (let i = 0; i < props.walking_Durs.length; i++) {
      if(curr_sc_idx == props.walking_Durs[i].scheduleIdx ){
        // If under 15 minutes
        if(!props.walking_Durs[i].over15){
          return(
            <Alert variant='primary'>
              <b>Note:</b> For courses {props.walking_Durs[i].class1} and {props.walking_Durs[i].class2} , 
              you will have to walk between <b>{props.walking_Durs[i].loc1}</b> and <b>{props.walking_Durs[i].loc2}</b>  on day 
              <b> {props.walking_Durs[i].dayIdx}</b> after period <b> {props.walking_Durs[i].hourIdx}</b>. 
              <br></br>
              <b> Estimated Time Walking: </b> {props.walking_Durs[i].duration} minutes.
              
            </Alert>
          )
        }

        //else over 15 mins
        else{
          return(
            <div className='alert alert-danger' id='conflicts_div'>
                 <b>Note: Walking time over 15 minutes. </b> For courses {props.walking_Durs[i].class1} and {props.walking_Durs[i].class2} , 
              you will have to walk between <b>{props.walking_Durs[i].loc1}</b> and <b>{props.walking_Durs[i].loc2}</b>  on day 
              <b> {props.walking_Durs[i].dayIdx}</b> after period <b> {props.walking_Durs[i].hourIdx}</b>.  
              <br></br>
              <b> Estimated Time Walking: </b> {props.walking_Durs[i].duration} minutes.
            </div>
          )
        }
      }
      
    }

  };


  // Determine Class format
  const get_online_status = curr_sect => {
    if(curr_sect == "AD"){
      return('Online')
    }
    else{
      return('Primarily Classroom/Traditional')
    }
  }

  //Print the meeting locations
  const print_meeting_locations = (curr_sect, web) => {
    let ret_meetings = [];
    let tempDate, tempLoc_b, tempLoc_r, temp_str;

    //for the length og the section_mT array
    for (let i = 0; i < curr_sect.length; i++) {
      // Get the date
      tempDate = curr_sect[i].meetDays; // may need to parse when an array
      tempLoc_b = curr_sect[i].meetBuilding;
      tempLoc_r = curr_sect[i].meetRoom;

      // If building/room is undefined, chage to TBD
      if(tempLoc_b == ''){
        tempLoc_b = "TBD"
      }

      // append a string object to return
      temp_str= " (" + tempDate + ") at " +  tempLoc_b + tempLoc_r + ",";
      //console.log(temp_str)

      ret_meetings.push(temp_str);
    }

    // Return the relevant printing
    // Map through the ret_meetings and print out the strings 
    // if F2F
    if(web == "PC"){
      return( 
            <p>{ret_meetings}</p>
      )
    }
    else{
      return(' Online')
    }
  }
    
  //create a number of schedules based on the number submitted
  // MAP: For EACH schedule generated, go through this printing protocol
  const scheduleGrids = props.test_sc.map((curr_schedule, curr_sc_index)  => {
      //console.log("curr_schedule: ", curr_schedule)

      let temp_r1;

      // if schedule does not exist, do not render table and just return nothing
      if(!props.final_schedule_info[0]){
        return(
          <div></div>
        );
      }

      // Else, For EACH schedule, render the schedule table (test_sc => curr_schedule)
      return (
        <div>

        {/* Generate the detail submenu */ }
          <div class='card_blue' id='sched_detail'>
            {props.final_schedule_info.slice(0, props.final_schedule_info.length).map((curr_class_obj, curr_idx) => {
              return (
              <div class='left_align'>
              
                <div class='center_align'>
                  <p><b>Course Name:</b> {curr_class_obj[curr_sc_index].course_code} - {curr_class_obj[curr_sc_index].course_name}</p>
                </div>

                <p><b>Class Number:</b> {curr_class_obj[curr_sc_index].section_c_num}</p>
                <p><b>Course Instructor:</b> {curr_class_obj[curr_sc_index].section_inst[0].name}</p>
                <p><b>Course Description:</b> {curr_class_obj[curr_sc_index].course_desc}</p>
                <p><b>Course Credits:</b> {curr_class_obj[curr_sc_index].section_credits}</p>
                <p><b>Class Format:</b> {get_online_status(curr_class_obj[curr_sc_index].section_web)}</p>
                <p><b>Location:</b>{print_meeting_locations(curr_class_obj[curr_sc_index].section_mT, curr_class_obj[curr_sc_index].section_web)}</p>

                <p>TBD: Add a "Route" button that routes the walk to front end</p>
              </div>
              );
            })}

          </div>

          {/* Print any conflicts warnings (if they exist) */ }
          {print_conflict(curr_sc_index)}

          {/* Print any mapping warnings (if they exist) */ }
          {print_mapping_alerts(curr_sc_index)}
        

          {/* Generate the Schedule Table */ }
            <table class="table table-bordered" >
                <thead>
                  <tr class="color_table_hd_row">
                    <th scope="col">Period</th>
                    <th scope="col">Time</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                {curr_schedule.slice(0, curr_schedule.length).map((row, index) => {
                      return (
                        <tr key={index} >
                          <td class='def_color_table'>{periods[index]}</td>
                          <td class='def_color_table'>{times[index]}</td>
                          
                          {/* Generate the Colored cells*/ }
                          {generate_colored_sched_cells(row)}

                        </tr>
                      );
                })}


            {/* Table- Online Classes: sectWeb:"AD"; In person: "PC" */ }
              {props.final_schedule_info.slice(0, props.final_schedule_info.length).map((curr_class_obj, curr_idx) => {

                  // For each index, check to see if it is online (AD = Online); (PC = In person)
                  if(curr_class_obj[curr_sc_index].section_web == "AD"){
                    // define a temp var
                    let curr_cl_code = curr_class_obj[curr_sc_index].course_code;

                    // Then check against the responseData for coloring
                    if(curr_cl_code == props.courseNums[0].toUpperCase()){
                      return (
                        <tr>
                          <td class='def_color_table' colSpan="2">Online (100%)</td>
                          <td class='color_class_1' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
                        </tr>);
                    }else if(curr_cl_code== props.courseNums[1].toUpperCase()){
                      return (
                        <tr>
                          <td class='def_color_table' colSpan="2">Online (100%)</td>
                          <td class='color_class_2' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
                        </tr>);
                    }else if(curr_cl_code== props.courseNums[2].toUpperCase()){
                      return (
                        <tr>
                          <td class='def_color_table' colSpan="2">Online (100%)</td>
                          <td class='color_class_3' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
                        </tr>);
                    }else if(curr_cl_code== props.courseNums[3].toUpperCase()){
                      return (
                        <tr>
                          <td class='def_color_table' colSpan="2">Online (100%)</td>
                          <td class='color_class_4' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
                        </tr>);
                    }else if(curr_cl_code== props.courseNums[4].toUpperCase()){
                      return (
                        <tr>
                          <td class='def_color_table' colSpan="2">Online (100%)</td>
                          <td class='color_class_5' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
                        </tr>);
                    }else if(curr_cl_code== props.courseNums[5].toUpperCase()){
                      return (
                        <tr>
                          <td class='def_color_table' colSpan="2">Online (100%)</td>
                          <td class='color_class_6' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
                        </tr>);
                    }else {
                      return (
                        <tr>
                          <td class='def_color_table' colSpan="2">Online (100%)</td>
                          <td class='def_color_table' colSpan="6">{curr_class_obj[curr_sc_index].course_code} | {curr_class_obj[curr_sc_index].course_name}</td>
                        </tr>);
                    }

                  }
                  
                })}

                </tbody>
            </table>     

            {/* WIP: Hover locations or somehting?
            { props.inHover && <p>Hi!</p>}
            */ }
            
        </div>

      );
    });


// Print the header 1 based on if the form has been submitted
const print_header_1= props => {
  if(props.length != 0){
    return(
      <h2>All Course Timing</h2>
    );
  }
  else{
    return(<div></div>);
  }
};

// Print the info for the lab and lecture times for EACH class
const print_schedule_lab_lecture = props.final_lab_lecture_info.map((curr_class_info, curr_class_info_index)  => {
  // 1) if schedule does not exist, do not render table and just return nothing
  if(!props.final_lab_lecture_info[0]){
    return(
      <div></div>
    );
  }

  // Else, For EACH schedule, render the schedule table 
  // 2) Check to see if the lectures/lab sections match.  If so, tell that to user
  if(curr_class_info.lab_lecture_match){
    return (
      <div>
        
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={curr_class_info.course_code}>
                {curr_class_info.course_code}
              </Accordion.Toggle>
            </Card.Header>
        
          <Accordion.Collapse eventKey={curr_class_info.course_code}>
          <Card.Body class='card_blue_light'>

            <h3>Lecture Times for Course: {curr_class_info.course_code}</h3>

            <Alert variant='primary'>
              <b>Note:</b> For course {curr_class_info.course_code}, there are no unique lab/discussion sections, only lectures.
            </Alert>

            {/* Generate the Schedule Table */ }
            <table class="table table-bordered" >
                <thead>
                  <tr class="color_table_hd_row">
                    <th scope="col">Period</th>
                    <th scope="col">Time</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                {curr_class_info.labArray.slice(0, curr_class_info.labArray.length).map((row, index) => {
                      return (
                        <tr key={index} >
                          <td class='def_color_table'>{periods[index]}</td>
                          <td class='def_color_table'>{times[index]}</td>
                          
                          {/* Generate the Colored cells */ }
                          {generate_colored_sched_cells(row)}
      
                        </tr>
                      );
                })}
                </tbody>
              </table>


            </Card.Body>
        </Accordion.Collapse>
      </Card>
  
      </div>
        );
  }

  // 3) Else, BOTH labs AND lectures exist
  else{
    return (
      <div>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={curr_class_info.course_code}>
                {curr_class_info.course_code}
              </Accordion.Toggle>
            </Card.Header>
        
          <Accordion.Collapse eventKey={curr_class_info.course_code}>
          <Card.Body class='card_blue_light'>

            <h3>Lab Sections for Course: {curr_class_info.course_code}</h3>
            {/* Generate the Schedule Table */ }
            <table class="table table-bordered" >
                <thead>
                  <tr class="color_table_hd_row">
                    <th scope="col">Period</th>
                    <th scope="col">Time</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                {curr_class_info.labArray.slice(0, curr_class_info.labArray.length).map((row, index) => {
                      return (
                        <tr key={index} >
                          <td class='def_color_table'>{periods[index]}</td>
                          <td class='def_color_table'>{times[index]}</td>
                          
                          {/* Generate the Colored cells */ }
                          {generate_colored_sched_cells(row)}

                        </tr>
                      );
                })}
                </tbody>
              </table>


              <h3>Lecture Sections for Course: {curr_class_info.course_code}</h3>
            {/* Generate the Schedule Table */ }
            <table class="table table-bordered" >
                <thead>
                  <tr class="color_table_hd_row">
                    <th scope="col">Period</th>
                    <th scope="col">Time</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                {curr_class_info.lectureArray.slice(0, curr_class_info.lectureArray.length).map((row, index) => {
                      return (
                        <tr key={index} >
                          <td class='def_color_table'>{periods[index]}</td>
                          <td class='def_color_table'>{times[index]}</td>
                          {/* Generate the Colored cells */ }
                          {generate_colored_sched_cells(row)}
                        </tr>
                      );
                })}
                </tbody>
              </table>

              
            </Card.Body>
        </Accordion.Collapse>
      </Card>
  

      </div>
        );
    }


  });

/*
// Orig way to render table
<td>{row[0]}</td>
<td>{row[1]}</td>
<td>{row[2]}</td>
<td>{row[3]}</td>
<td>{row[4]}</td>
<td>{row[5]}</td>
*/

    
  return (
    <div className='App'>

<div class="row">
      
  <div class="col-med-6">
      <div className='sticky-menu'>

            <Card body>

            <div className='col-sm'>
                <Form onSubmit={props.check}>
                  <h2>Add Courses</h2>

                  <div className='required'>
                    <Form.Row >
                      <Form.Label><b>Semester</b></Form.Label>
                      <select className="form-control" name="Semester" onChange={SemInt} required="required">
                          <option selected>Semester - Required</option>
                          <option value="fall2021">Fall 2021</option>
                          <option value="spring2021">Spring 2021</option>
                          <option value="fall2020">Fall 2020</option>
                      </select>
                    </Form.Row>
                  </div>
            
                  <div className='h1_p_1'>
                    <Form.Row>
                      <Col>
                      <Form.Label><b>Course Number 1</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum1'
                        onChange={CourseNumInt1}
                      />
                      </Col>

                      <Col>
                    <Form.Label><b>Class #</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum1'
                        onChange={ClassNumInt1}
                      />
                      </Col>
                      
                    </Form.Row>
                  </div>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Col>
                      <Form.Label><b>Course Number 2</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum2'
                        onChange={CourseNumInt2}
                      />
                      </Col>

                      <Col>
                    <Form.Label><b>Class #</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum2'
                        onChange={ClassNumInt2}
                      />
                      </Col>
                      
                    </Form.Row>
                  </div>


                  <div className='h1_p_1'>
                    <Form.Row>
                      <Col>
                      <Form.Label><b>Course Number 3</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum3'
                        onChange={CourseNumInt3}
                      />
                      </Col>

                      <Col>
                    <Form.Label><b>Class #</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum3'
                        onChange={ClassNumInt3}
                      />
                      </Col>
                      
                    </Form.Row>
                  </div>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Col>
                      <Form.Label><b>Course Number 4</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum4'
                        onChange={CourseNumInt4}
                      />
                      </Col>

                      <Col>
                    <Form.Label><b>Class #</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum4'
                        onChange={ClassNumInt4}
                      />
                      </Col>
                      
                    </Form.Row>
                  </div>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Col>
                      <Form.Label><b>Course Number 5</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum5'
                        onChange={CourseNumInt5}
                      />
                      </Col>

                      <Col>
                    <Form.Label><b>Class #</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum5'
                        onChange={ClassNumInt5}
                      />
                      </Col>
                    </Form.Row>
                  </div>


                  <div className='h1_p_1'>
                    <Form.Row>
                      <Col>
                      <Form.Label><b>Course Number 6</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum6'
                        onChange={CourseNumInt6}
                      />
                      </Col>

                      <Col>
                    <Form.Label><b>Class #</b></Form.Label>
                      <Form.Control
                        input
                        placeholder='(Optional) ex. 15110'
                        id='ClassNum6'
                        onChange={ClassNumInt6}
                      />
                      </Col>
                      
                    </Form.Row>
                  </div>


                  <div className='h1_p'>
                    <Button variant='primary' type='submit'  > {/* onClick={generateSchedule} */}
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>

            
          </Card>
          
          </div>
          </div>

        
        <div class="col-lg-8">
          <Card body>

        
            {/* Lab/Lecture Times*/}
            {print_header_1(props.final_schedule_info)}
              <Accordion>
                {print_schedule_lab_lecture}
              </Accordion>

              <hr></hr>
              <h2 class='h_cl_num'>Possible Schedules</h2>

              {/* {scheduleGrids}*/}
              {scheduleGrids}

              {print_conflicts(props.conflicts_print)}

              {/* 
              <button
              onMouseEnter={() => props.setHover(true)}
              onMouseLeave={() => props.setHover(false)}
              >Hover!!</button>
            
              { props.inHover && <p>Hi!</p>}
              }*/}

          </Card>
        </div>


        </div>            
    
    </div>
  );
};

export default Schedule;