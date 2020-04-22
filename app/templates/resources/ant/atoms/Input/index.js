/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
} from 'antd';
import styles from './Input.module.css';

const InputWrap = (props) => {
  const {
    type = 'text',
    className,
  } = props;
  return (
    <Input {...props} className={`${className} ${styles.border}`} type={type} />
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
