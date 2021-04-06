import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components
import {
  Home,
  Schedule,
  Four_Year,
  About_Us,
  Login,
  Sign_Up,
  Forgot_Password,
  Profile,
  Four_Year_User_Disp
} from './pages'; // import our pages

//Purpose: This routes the links of our application, and the subsequent pages that will display
const Main = props => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/schedule' component={Schedule} />
      <Route exact path='/four-year-plan' component={() => (
          <Four_Year
            setToken={props.setToken}
            email={props.email}
          />
        )} />
      <Route exact path='/about-us' component={About_Us} />
      <Route
        exact path='/login'
        component={() => (
          <Login
            setEmail={props.setEmail}
            setToken={props.setToken}
            setUserName={props.setUserName}
            email={props.email}
          />
        )}
      />
      <Route exact path='/sign-up' component={Sign_Up} />
      <Route exact path='/forgot' component={Forgot_Password} />
      <Route 
        exact path='/user-profile' 
        component={() => (
          <Profile
            setToken={props.setToken}
            email={props.email}
            userName={props.userName}
          />
        )} />

        <Route 
        exact path='/four-year-user-disp' 
        component={() => (
          <Four_Year_User_Disp
            email={props.email}
            userName={props.userName}
          />
        )} />
    </Switch>
  </main>
);

export default Main;
