import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Col,
  Row,
} from 'antd';
import { useHistory } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { Input, Button } from 'app/atoms';
import {
  validateMessages,
  LOGIN,
} from './constants';

const ForgotPassword = (props) => {
  const history = useHistory();
  const onFinish = (values) => {
    props.forgotPassword(values);
  };
  const { isLoading } = props;
  return (
    <Row justify="center" align="middle">
      <Col span={6} style={{ marginTop: '10%' }}>
        <h2>Forgot Password</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Please enter your email address."
            />
          </Form.Item>
          <Form.Item>
            <Button type="link" htmlType="button" onClick={() => { history.push(LOGIN); }}>
              Back to Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              loading={isLoading}
            >
              <span>Submit</span>
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ForgotPassword;
