import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from 'app/pages/Dashboard';


const Pages = (props) => {
  const {
    match: { path },
  } = props;

  return (
    <Switch>
      <Route
        exact
        path={`${path}`}
        component={Dashboard}
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
