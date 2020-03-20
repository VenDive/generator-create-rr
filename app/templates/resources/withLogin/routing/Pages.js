import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { LOGIN, FORGOT_PASSWORD } from 'configs/routeNames';
import { PrivateRoute } from 'app/atoms';
import Login from 'app/pages/Login';
import ForgotPassword from 'app/pages/ForgotPassword';
import Dashboard from 'app/pages/Dashboard';


const Pages = (props) => {
  const {
    match: { path },
  } = props;

  return (
    <Switch>
      <PrivateRoute
        exact
        path={`${path}`}
        component={Dashboard}
      />
      <Route
        path={`${path}${LOGIN}`}
        component={Login}
      />
      <Route
        path={`${path}${FORGOT_PASSWORD}`}
        component={ForgotPassword}
      />
    </Switch>
  );
};

Pages.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};
Pages.defaultProps = {
  match: {},
};
export default Pages;
