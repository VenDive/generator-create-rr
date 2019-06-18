import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ fullName }) => (
  <React.Fragment>
    <div>Application Launched</div>
    <div>{fullName}</div>
  </React.Fragment>
);
UserDetails.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default UserDetails;
