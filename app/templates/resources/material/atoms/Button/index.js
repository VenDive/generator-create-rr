/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './Button.module.css';

const InputWrap = (props) => {
  const {
    className,
    children,
  } = props;
  return (
    <Button {...props} className={`${className} ${styles.border}`}>
      {children}
    </Button>
  );
};
InputWrap.defaultProps = {
  className: '',
};
InputWrap.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InputWrap;
