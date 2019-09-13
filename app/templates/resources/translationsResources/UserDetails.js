import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


const UserDetails = ({ fullName }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div>{t('Application Launched')}</div>
      <div>{fullName}</div>
    </React.Fragment>
  );
};

UserDetails.propTypes = {
  fullName: PropTypes.string.isRequired,
};
export default UserDetails;
