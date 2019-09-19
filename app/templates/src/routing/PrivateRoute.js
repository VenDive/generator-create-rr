import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import { getFromLocal } from 'utils/cache';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (getFromLocal('token') ? (<Component {...props} />) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.string.isRequired,
};

export default PrivateRoute;
