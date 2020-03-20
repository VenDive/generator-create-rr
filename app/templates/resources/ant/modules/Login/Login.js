import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Checkbox,
  Col,
  Row,
  Alert,
} from 'antd';
import { Input, Button } from 'app/atoms';
import {
  layout,
  tailLayout,
  validateMessages,
  PASSWORD_REGEX,
  FORGOT_PASSWORD,
  STRONG_PASSWORD_MESSAGE,
  ROOT,
} from './constants';
import './style.css';

const Login = (props) => {
  const history = useHistory();
  const onFinish = (values) => {
    props.login(values);
  };
  const onFinishFailed = (errorInfo) => errorInfo;
  const { isLoading, authError } = props;
  const renderForm = () => (
    <Form
      className="login-form"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            pattern: PASSWORD_REGEX,
            message: STRONG_PASSWORD_MESSAGE,
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
        <Button type="link" htmlType="button" onClick={() => { history.push(FORGOT_PASSWORD); }}>
          Forgot Password
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={isLoading} block>Submit</Button>
      </Form.Item>
    </Form>
  );
  useEffect(() => {
    if (props.token) {
      history.push(ROOT);
    }
  });
  return (
    <Row justify="center" align="middle" id="login-screen">
      <Col span={12} style={{ marginTop: '10%' }}>
        <Col span={24}>
          {authError.isError && <Alert message={authError.message} type="error" />}
        </Col>
        <br />
        <Col span={24}>
          {renderForm()}
        </Col>
      </Col>
    </Row>
  );
};
const authErrorShape = PropTypes.shape({
  isError: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
});
Login.defaultProps = {
  authError: {
    isError: false,
    message: '',
  },
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  authError: authErrorShape,
};
export default Login;
