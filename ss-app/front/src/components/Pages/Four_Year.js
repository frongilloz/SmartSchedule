import React , { Component } from 'react';
import { Form, Col, Card, Button, Row, Container} from 'react-bootstrap';
import './basic.css';

const Four_Year = props => {

  const CourseNum1 = event => {
    /* console.log('CourseNum1 Triggered');
    console.log('C_Num1: ', event.target.value); */
    props.addCNUM1Update(event.target.value); 
   
  };

  const CourseNum2 = event => {
   /*  console.log('CourseNum2 Triggered');
    console.log('C_Num2: ', event.target.value); */
    props.addCNUM2Update(event.target.value); 
  };

  const CourseNum3 = event => {
    /* console.log('CourseNum3 Triggered');
    console.log('C_Num3: ', event.target.value); */
    props.addCNUM3Update(event.target.value); 
  };

  const CourseNum4 = event => {
    /* console.log('CourseNum4 Triggered');
    console.log('C_Num4: ', event.target.value); */
    props.addCNUM4Update(event.target.value); 
  };
  const CourseNum5 = event => {
    /* console.log('CourseNum5 Triggered');
    console.log('C_Num5: ', event.target.value); */
    props.addCNUM5Update(event.target.value); 
  };
  const CourseNum6 = event => {
    /* console.log('CourseNum6 Triggered');
    console.log('C_Num6: ', event.target.value); */
    props.addCNUM6Update(event.target.value); 
  };

  const CourseName1 = event => {
    /* console.log('CourseName1 Triggered');
    console.log('C_Name1: ', event.target.value); */
    props.addCNAME1Update(event.target.value); 
  };
  const CourseName2 = event => {
    /* console.log('CourseName2 Triggered');
    console.log('C_Name2: ', event.target.value); */
    props.addCNAME2Update(event.target.value); 
  };
  const CourseName3 = event => {
    /* console.log('CourseName3 Triggered');
    console.log('C_Name3: ', event.target.value); */
    props.addCNAME3Update(event.target.value); 
  };
  const CourseName4 = event => {
   /*  console.log('CourseName4 Triggered');
    console.log('C_Name4: ', event.target.value); */
    props.addCNAME4Update(event.target.value); 
  };
  const CourseName5 = event => {
    /* console.log('CourseName5 Triggered');
    console.log('C_Name5: ', event.target.value); */
    props.addCNAME5Update(event.target.value); 
  };
  const CourseName6 = event => {
    /* console.log('CourseName6 Triggered');
    console.log('C_Name6: ', event.target.value); */
    props.addCNAME6Update(event.target.value); 
  };

  const CourseCred1 = event => {
    /* console.log('CourseCred1 Triggered');
    console.log('C_Cred1: ', event.target.value); */
    props.addCCRED1Update(event.target.value); 
  };
  const CourseCred2 = event => {
    /* console.log('CourseCred2 Triggered');
    console.log('C_Cred2: ', event.target.value); */
    props.addCCRED2Update(event.target.value); 
  };
  const CourseCred3 = event => {
   /*  console.log('CourseCred3 Triggered');
    console.log('C_Cred3: ', event.target.value); */
    props.addCCRED3Update(event.target.value); 
  };
  const CourseCred4 = event => {
   /*  console.log('CourseCred4 Triggered');
    console.log('C_Cred4: ', event.target.value); */
    props.addCCRED4Update(event.target.value); 
  };
  const CourseCred5 = event => {
   /*  console.log('CourseCred5 Triggered');
    console.log('C_Cred5: ', event.target.value); */
    props.addCCRED5Update(event.target.value); 
  };
  const CourseCred6 = event => {
    /* console.log('CourseCred6 Triggered');
    console.log('C_Cred6: ', event.target.value); */
    props.addCCRED6Update(event.target.value); 
  };


  const SemesterChoice = event => {
    props.SemChoice(event.target.value); 
  };
  const YearChoice = event => {
    props.YChoice(event.target.value); 
  };

  const SubmitClicked = event => {
    console.log('Submit Clicked');
    props.saveSchedule(event);

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


    <div class="row col justify-content-center">
        <Card body style={{ height: '10%' }}>
    <Form onSubmit={props.saveSchedule}>
    <Form.Row>
    <Col>
      <Form.Group controlId="exampleForm.SelectCustom">
         <Form.Label>Select Year</Form.Label>
         <Form.Control as="select" custom onChange={YearChoice} required="required">
         <option selected>Year - Required</option>
         <option value="2021">2021</option>
         <option value="2022">2022</option>
         <option value="2023">2023</option>
         <option value="2024">2024</option>
         <option value="2025">2025</option>
    </Form.Control>
  </Form.Group>
  </Col>
      <Col>
      <Form.Group controlId="exampleForm.SelectCustom">
         <Form.Label>Select Semester</Form.Label>
         <Form.Control as="select" custom onChange={SemesterChoice} required="required">
         <option selected>Semester - Required</option>
         <option value="Spring">Spring</option>
         <option value="Summer">Summer</option>
         <option value="Fall">Fall</option>
    </Form.Control>
    </Form.Group>
    </Col>
  </Form.Row>
  <div class="row justify-content-center">
  <div >
  <table class = "table_custom">
    <Form.Row >
      <Col>
      <input size="sm" type="text" placeholder="Course Number" id = 'CourseNum1' onChange = {CourseNum1} />
      </Col>
      <Col>
      <input size="sm" type="text" placeholder="Class Name" id = 'CourseName1' onChange = {CourseName1}/>
      </Col>
      <Col>
      <input size="sm" type="text" placeholder="Credits" id = 'CourseCred1' onChange = {CourseCred1} />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
      <input size="sm" type="text" placeholder="Course Number" id = 'CourseNum2' onChange = {CourseNum2} />
      </Col>
      <Col>
      <input size="sm" type="text" placeholder="Class Name" id = 'CourseName2' onChange = {CourseName2} />
      </Col>
      <Col>
      <input size="sm" type="text" placeholder="Credits" id = 'CourseCred2' onChange = {CourseCred2}/>
      </Col>
    </Form.Row>
    <Row>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum3' onChange = {CourseNum3} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName3' onChange = {CourseName3}/>
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred3' onChange = {CourseCred3}/>
      </Col>
    </Row>
    <Row>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum4' onChange = {CourseNum4} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName4' onChange = {CourseName4}/>
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred4' onChange = {CourseCred4} />
      </Col>
    </Row>
    <Row>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum5' onChange = {CourseNum5} />
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName5' onChange = {CourseName5}/>
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred5' onChange = {CourseCred5} />
      </Col>
    </Row>
    <Row>
      <Col >
      <Form.Control size="sm" type="text" placeholder="Course Number" id = 'CourseNum6' onChange = {CourseNum6}/>
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Class Name" id = 'CourseName6' onChange = {CourseName6}/>
      </Col>
      <Col>
      <Form.Control size="sm" type="text" placeholder="Credits" id = 'CourseCred6' onChange = {CourseCred6}/>
      </Col>
    </Row>
    </table>
  </div>
  </div>
  <Row>
    <Col>
    <button class="btn btn-primary" type="submit" onClick = {SubmitClicked}>Save Semester</button>
    </Col>
    <Col>
    <input class="btn btn-primary" type="reset" value="Reset"  onClick = {ResetClicked}></input>
    </Col>
  </Row>
</Form>  
    </Card>
  </div>
  </div>
  );
};

export default Four_Year;
