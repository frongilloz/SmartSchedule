import React, { Component } from 'react';

import { Form, Col, Card, Button, Container, Row , Table} from 'react-bootstrap';
import './basic.css';

const Schedule = props => {

  //internal change functions
  const SemInt = event => {
    console.log('SemIntTriggered');

    //change by calling App external function
    props.CL_NumUpdate(event.target.value);

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

    const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "E1", "E2", "E3"];


    // maybe have a 2D array that will contain the in-class potential schedules 
    // first, fill it with empty space
    let TestSchdule = Array(14).fill(0).map(row => new Array(6).fill(' '))
    
  return (
    <div className='App'>
      
      <Container>
        <Row>
          <Col sm={4}>

            <Card body>

            <div className='col-12'>
                <Form onSubmit={props.check}>
                  <h2>Add Courses</h2>

                  
                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Semester</Form.Label>
                      <select className="form-control" name="Semester" onChange={ClassNumInt} required="true">
                          <option selected>Semester - Required</option>
                          <option value="f21">Fall 2021</option>
                          <option value="s21">Spring 2021</option>
                          <option value="f20">Fall 2020</option>
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
                    <Button variant='primary' type='submit'>
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>

            
          </Card>
          </Col>
        
        <Col sm={8}>
          <Card body>
              <h2>Possible Schedule</h2>
              <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Period</th>
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
                              <td key={item[0]}>{item[0]}</td>
                              <td key={item[1]}>{item[1]}</td>
                              <td key={item[2]}>{item[2]}</td>
                              <td key={item[3]}>{item[3]}</td>
                              <td key={item[4]}>{item[4]}</td>
                              <td key={item[5]}>{item[5]}</td>
                              <td key={item[6]}>{item[6]}</td>
                          </tr>
                          );
                      })}
                  </tbody>
              </table>      
          </Card>
        </Col>
        </Row>
      </Container>

    
    </div>
  );
};

export default Schedule;
