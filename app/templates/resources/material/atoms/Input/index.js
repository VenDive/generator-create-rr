/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './Input.module.css';

const InputWrap = (props) => {
  const {
    type = 'text',
    className,
  } = props;
  return (
    <TextField
      {...props}
      type={type}
      className={`${className} ${styles.border}`}
    />
  );
};
InputWrap.defaultProps = {
  className: '',
};
InputWrap.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default InputWrap;
