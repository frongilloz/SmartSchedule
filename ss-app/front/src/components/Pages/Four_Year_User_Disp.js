import React from 'react';

import { Card } from 'react-bootstrap';
import './basic.css';

// Print a general warning if user isn't logged in
const print_warnings = props => {
  if(props == 1){
    return(
      <div className='alert alert-danger' id='conflicts_div'>
          <strong>Please log in to view this page.</strong>
      </div>
    )
  }
  else{
    return(<div></div> )
  }
}

const Four_Year_Disp= props => (
  <div className='App'>
    <header className='masthead'>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-heading text-uppercase'>4 Year Plan User Info</div>
        </div>
      </div>
    </header>

    <Card body>
      {print_warnings(props.print_warn)}
    

    </Card>
  </div>
);

export default Four_Year_Disp;
