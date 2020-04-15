/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import { getFromLocal } from 'utils/cache';
import { TOKEN_KEY } from 'configs';
import { LOGIN } from 'configs/routeNames';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (getFromLocal(TOKEN_KEY, false) ? (<Component {...props} />) : (
      <Redirect
        to={{
          pathname: LOGIN,
          state: { from: props.location },
        }}
      />
    ))}
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.string.isRequired,
};

export default PrivateRoute;
