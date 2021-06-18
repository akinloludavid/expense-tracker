import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={props => {
        if (token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signup",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};


export default ProtectedRoute;