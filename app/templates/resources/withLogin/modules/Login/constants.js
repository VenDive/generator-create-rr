import { BASE_URL } from 'configs';
import { INVALID_EMAIL_MESSAGE, REQUIRED_FEILD, STRONG_PASSWORD_MESSAGE } from 'configs/constants';

export { PASSWORD_REGEX } from 'configs';
export { FORGOT_PASSWORD, ROOT } from 'configs/routeNames';
export { STRONG_PASSWORD_MESSAGE } from 'configs/constants';
export const LOGIN_URL = `${BASE_URL}/api/v1/login`;

export const validateMessages = {
  required: REQUIRED_FEILD,
  types: {
    email: INVALID_EMAIL_MESSAGE,
    password: STRONG_PASSWORD_MESSAGE,
  },
};

export const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
export const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 12,
  },
};
