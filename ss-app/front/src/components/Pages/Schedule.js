import React, { Component } from 'react';

import { Form, Col, Card, Button, Container, Row } from 'react-bootstrap';
import './basic.css';

const Schedule = props => {

  //internal change functions
  const CourseNumInt = event => {
    console.log('CourseNumInt Triggered');

    //change by calling App external function
    props.C_NumUpdate(event.target.value);

    //log
    console.log('C_Num: ', event.target.value);
  };

  const ClassNumInt = event => {
    console.log('ClassNumIntTriggered');

    //change by calling App external function
    props.CL_NumUpdate(event.target.value);

    //log
    console.log('ClassNumInt: ', event.target.value);
  };


  return (
    <div className='App'>
      
      <Container>
        <Row>
          <Col sm={4}>Filter Menu

            <Card body>

            <div className='col-12'>
                <Form onSubmit={props.check}>
                  <h1>Search</h1>
            

                  <div className='h1_p_1'>
                    <Form.Row>
                      <Form.Label>Course Number</Form.Label>
                      <Form.Control
                        input
                        placeholder='ex. ACG2021'
                        id='CourseNum'
                        onChange={CourseNumInt}
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
        
        <Col sm={8}>Placeholder for Schedule Options
          <Card body>

      
          </Card>
        </Col>
        </Row>
      </Container>

    
    </div>
  );
};

export default Schedule;
