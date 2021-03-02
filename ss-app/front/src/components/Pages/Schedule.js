import React, { Component } from 'react';

import { Form, Col, Card, Button, Container, Row , Table} from 'react-bootstrap';
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
    console.log('SemInt: ', event.target.value);
  };

  const CourseNumInt1 = event => {
    console.log('CourseNumInt1 Triggered');

    //change by calling App external function
    props.C_NumUpdate1(event.target.value);

    //log
    console.log('C_Num1: ', event.target.value);
  };

  const CourseNumInt2 = event => {
    console.log('CourseNumInt2 Triggered');

    //change by calling App external function
    props.C_NumUpdate2(event.target.value);

    //log
    console.log('C_Num2: ', event.target.value);
  };

  const CourseNumInt3 = event => {
    console.log('CourseNumInt3 Triggered');

    //change by calling App external function
    props.C_NumUpdate3(event.target.value);

    //log
    console.log('C_Num3: ', event.target.value);
  };

  const CourseNumInt4 = event => {
    console.log('CourseNumInt4 Triggered');

    //change by calling App external function
    props.C_NumUpdate4(event.target.value);

    //log
    console.log('C_Num4: ', event.target.value);
  };

  const ClassNumInt = event => {
    console.log('ClassNumIntTriggered');

    //change by calling App external function
    props.CL_NumUpdate(event.target.value);

    //log
    console.log('ClassNumInt: ', event.target.value);
    };


  function generateSchedule() {

    let checkArray = [1] 
    let oldSchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
    let newSchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
    oldSchedule = TestSchdule;
    console.log('Before: ', TestSchdule)
    console.log('oldSchedule is : ', oldSchedule)
    console.log('newSchedule is : ', newSchedule)
    //console.log(checkArray.length)

    let day_index = 0;
    let period_index1 = 0;
    let period_index2 = 0;

    if (Array.isArray(props.responseData) && checkArray.length && props.responseData[0]) {
      console.log("Wow, something's here")
      console.log('ResponseData (from schedule.js) is: ', props.responseData)

      let responseDataLength = [];
      responseDataLength = props.responseData
      console.log('length of resposneData is: ', responseDataLength.length)


      for (let k = 0; k < responseDataLength.length; k++) {

        let sectionsArray = props.responseData[k].sections
        console.log('sectionsArray is: ', sectionsArray)
        let meetTArray = sectionsArray[0].meetTimes
        console.log('meetTArray is: ', meetTArray)

        for (let j = 0; j < meetTArray.length; j++) {
          //console.log('meetTDay is: ', meetTArray[j].meetDays[0])
          //console.log(meetTArray[j].meetPeriodBegin)
          //console.log(meetTArray[j].meetPeriodEnd)

          day_index = daysShort.indexOf(meetTArray[j].meetDays[0])
          console.log('day_index is: ', day_index)

          period_index1 = periods.indexOf(meetTArray[j].meetPeriodBegin)
          console.log('period_index1 is: ', period_index1)

          period_index2 = periods.indexOf(meetTArray[j].meetPeriodEnd)
          console.log('period_index2 is: ', period_index2)

          if (period_index1 === period_index2)
            TestSchdule[period_index1][day_index] = props.responseData[k].code
          else {
            TestSchdule[period_index1][day_index] = props.responseData[k].code
            TestSchdule[period_index2][day_index] = props.responseData[k].code
            }
          }
        }
      }
    else {
      console.log("I guess there's nothing here")
      console.log(props.responseData)
      //console.log('Is there really nothing here?...', props.responseData[0].code)
    }

    //for (let i = 0; oldSchedule.length; i++) {
    //  for (let l = 0; oldSchedule[i].length; l++) {
    //    if (oldSchedule[i][l] === newSchedule[i][l])
    //      TestSchdule[i][l] = oldSchedule[i][l]
    //    else
    //      TestSchdule[i][l] = newSchedule[i][l]
    //  }
    //}

    console.log('After: ', TestSchdule)

    }
   

  return (
    <div className='App'>

<div class="row">
      
  <div class="col-med-6">
      <div className='sticky-menu'>

            <Card body>

            <div className='col-sm'>
                <Form onSubmit={props.check}>
                  <h2>Add Courses</h2>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Semester</Form.Label>
                      <select className="form-control" name="Semester" onChange={SemInt} required="true">
                          <option selected>Semester - Required</option>
                          <option value="fall2021">Fall 2021</option>
                          <option value="spring2021">Spring 2021</option>
                          <option value="fall2020">Fall 2020</option>
                      </select>
                    </Form.Row>
                  </div>
            
                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Course Number 1</Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum1'
                        onChange={CourseNumInt1}
                      />
                    </Form.Row>
                  </div>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Course Number 2</Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum2'
                        onChange={CourseNumInt2}
                      />
                    </Form.Row>
                  </div>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Course Number 3</Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum3'
                        onChange={CourseNumInt3}
                      />
                    </Form.Row>
                  </div>

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Course Number 4</Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum4'
                        onChange={CourseNumInt4}
                      />
                    </Form.Row>
                  </div>


                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Class # </Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. 15110'
                        id='ClassNum'
                        onChange={ClassNumInt}
                      />
                    </Form.Row>
                  </div>

          

                  <div className='h1_p'>
                    <Button variant='primary' type='submit' onClick={generateSchedule}>
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
              <h2>Possible Schedule</h2>
              <table class="table table-bordered">
                  <thead>
                    <tr>
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
                      {TestSchdule.slice(0, TestSchdule.length).map((item, index) => {
                      return (
                          <tr key={index}>
                              <td>{periods[index]}</td>
                              <td>{times[index]}</td>
                              <td>{item[0]}</td>
                              <td>{item[1]}</td>
                              <td>{item[2]}</td>
                              <td>{item[3]}</td>
                              <td>{item[4]}</td>
                              <td>{item[5]}</td>
                          </tr>
                          );
                      })}
                  </tbody>
              </table>      
          </Card>


          </div>
        </div>            
    
    </div>
  );
};

export default Schedule;
