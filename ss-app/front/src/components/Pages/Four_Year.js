import React , { Component } from 'react';
import { Form, Col, Card, Button, Row, Container} from 'react-bootstrap';
import './basic.css';
import UserPlanDisplay from './UserPlanDisplay'; 

const Four_Year= (props) => {

  const CourseNum1 = event => {
    console.log('CourseNum1 Triggered');
    console.log('C_Num1: ', event.target.value);
  };

  const CourseNum2 = event => {
    console.log('CourseNum2 Triggered');
    console.log('C_Num2: ', event.target.value);
  };

  const CourseNum3 = event => {
    console.log('CourseNum3 Triggered');
    console.log('C_Num3: ', event.target.value);
  };

  const CourseNum4 = event => {
    console.log('CourseNum4 Triggered');
    console.log('C_Num4: ', event.target.value);
  };
  const CourseNum5 = event => {
    console.log('CourseNum5 Triggered');
    console.log('C_Num5: ', event.target.value);
  };
  const CourseNum6 = event => {
    console.log('CourseNum6 Triggered');
    console.log('C_Num6: ', event.target.value);
  };

  const CourseName1 = event => {
    console.log('CourseName1 Triggered');
    console.log('C_Name1: ', event.target.value);
  };
  const CourseName2 = event => {
    console.log('CourseName2 Triggered');
    console.log('C_Name2: ', event.target.value);
  };
  const CourseName3 = event => {
    console.log('CourseName3 Triggered');
    console.log('C_Name3: ', event.target.value);
  };
  const CourseName4 = event => {
    console.log('CourseName4 Triggered');
    console.log('C_Name4: ', event.target.value);
  };
  const CourseName5 = event => {
    console.log('CourseName5 Triggered');
    console.log('C_Name5: ', event.target.value);
  };
  const CourseName6 = event => {
    console.log('CourseName6 Triggered');
    console.log('C_Name6: ', event.target.value);
  };

  const CourseCred1 = event => {
    console.log('CourseCred1 Triggered');
    console.log('C_Cred1: ', event.target.value);
  };
  const CourseCred2 = event => {
    console.log('CourseCred2 Triggered');
    console.log('C_Cred2: ', event.target.value);
  };
  const CourseCred3 = event => {
    console.log('CourseCred3 Triggered');
    console.log('C_Cred3: ', event.target.value);
  };
  const CourseCred4 = event => {
    console.log('CourseCred4 Triggered');
    console.log('C_Cred4: ', event.target.value);
  };
  const CourseCred5 = event => {
    console.log('CourseCred5 Triggered');
    console.log('C_Cred5: ', event.target.value);
  };
  const CourseCred6 = event => {
    console.log('CourseCred6 Triggered');
    console.log('C_Cred6: ', event.target.value);
  };

  const SubmitClicked = event => {
    console.log('Submit Clicked');
  };

  const LoadClicked = event => {
    console.log('Load Clicked');
  };

  const ResetClicked = event => {
    console.log('Reset Clicked');
  };

  return (
  <div className="App">
    <header className='masthead'>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-heading text-uppercase'>Four Year Plan</div>
        </div>
      </div>
    </header>


    <Card>
    <Form>
    <Row>
    <Col>
      <Form.Group controlId="exampleForm.SelectCustom">
         <Form.Label>Select Year</Form.Label>
         <Form.Control as="select" custom>
         <option>2021</option>
         <option>2022</option>
         <option>2023</option>
         <option>2024</option>
         <option>2025</option>
    </Form.Control>
  </Form.Group>
  </Col>
      <Col>
      <Form.Group controlId="exampleForm.SelectCustom">
         <Form.Label>Select Semester</Form.Label>
         <Form.Control as="select" custom>
         <option>Spring</option>
         <option>Summer A</option>
         <option>Summer B</option>
         <option>Summer C</option>
         <option>Fall</option>
    </Form.Control>
    </Form.Group>
    </Col>
  </Row>
  <div class="row justify-content-center">
  <div class="col-10">
  <Form.Group>
    <Row>
      <Col xs={3}>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum1' onChange = {CourseNum1} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName1' onChange = {CourseName1}/>
      </Col>
      <Col xs={2}>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred1' onChange = {CourseCred1} />
      </Col>
    </Row>
    <Row>
      <Col xs={3}>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum2' onChange = {CourseNum2} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName2' onChange = {CourseName2} />
      </Col>
      <Col xs={2}>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred2' onChange = {CourseCred2}/>
      </Col>
    </Row>
    <Row>
      <Col xs={3}>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum3' onChange = {CourseNum3} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName3' onChange = {CourseName3}/>
      </Col>
      <Col xs={2}>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred3' onChange = {CourseCred3}/>
      </Col>
    </Row>
    <Row>
      <Col xs={3}>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum4' onChange = {CourseNum4} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName4' onChange = {CourseName4}/>
      </Col>
      <Col xs={2}>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred4' onChange = {CourseCred4} />
      </Col>
    </Row>
    <Row>
      <Col xs={3}>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum5' onChange = {CourseNum5} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName5' onChange = {CourseName5}/>
      </Col>
      <Col xs={2}>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred5' onChange = {CourseCred5} />
      </Col>
    </Row>
    <Row>
      <Col xs={3}>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum6' onChange = {CourseNum6}/>
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName6' onChange = {CourseName6}/>
      </Col>
      <Col xs={2}>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred6' onChange = {CourseCred6}/>
      </Col>
    </Row>
  </Form.Group>
  </div>
  </div>
  <Row>
    <Col>
    <button class="btn btn-primary" type="submit" onClick = {SubmitClicked}>Save Semester</button>
    </Col>
    <Col>
    <button class="btn btn-primary" type="submit"  onClick = {LoadClicked}>Load Semester</button>
    </Col>
    <Col>
    <input class="btn btn-primary" type="reset" value="Reset"  onClick = {ResetClicked}></input>
    </Col>
  </Row>
</Form>  
    </Card>
    <UserPlanDisplay />
  </div>
  );
};

export default Four_Year;
