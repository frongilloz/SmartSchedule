import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components
import {
  Home,
  Schedule,
  Four_Year,
  About_Us,
  Login,
  Sign_Up,
  Profile
} from './pages'; // import our pages

import AuthenticatedRoute from './Pages/AuthRoute.js';

//Purpose: This routes the links of our application, and the subsequent pages that will display
const Main = props => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/schedule' component={Schedule} />
      <Route exact path='/four-year-plan' component={Four_Year} />
      <Route exact path='/about-us' component={About_Us} />
      <Route
        exact
        path='/login'
        component={() => (
          <Login
            setEmail={props.setEmail}
            setToken={props.setToken}
            email={props.email}
          />
        )}
      />
      <Route exact path='/sign-up' component={Sign_Up} />
      <AuthenticatedRoute
        path='/user-profile'
        component={Profile}
        isAuthenticated={props.isAuthenticated}
      />
    </Switch>
  </main>
);

export default Main;
