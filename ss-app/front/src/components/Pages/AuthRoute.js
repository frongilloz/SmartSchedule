import Redirect from 'react-router-dom/es/Redirect';
import Route from 'react-router-dom/es/Route';
import React from 'react';

export default function AuthenticatedRoute({
  component: C,
  isAuthenticated,
  ...rest
}) {
  console.log('Authenticated Route reached');
  console.log(isAuthenticated);
  console.dir(rest);

  return (
    <Route
      exact
      {...rest}
      render={props =>
        isAuthenticated ? (
          <C {...props} {...isAuthenticated} />
        ) : (
          <Redirect to={`/user-profile`} />
        )
      }
    />
  );
}
