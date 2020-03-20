import { BASE_URL } from 'configs';
import { INVALID_EMAIL_MESSAGE, REQUIRED_FEILD } from 'configs/constants';

export { FAILED_ERROR } from 'configs/constants';
export { LOGIN } from 'configs/routeNames';
export const FORGOT_PASSWORD_URL = `${BASE_URL}/forgot_password`;

export const validateMessages = {
  required: REQUIRED_FEILD,
  types: {
    email: INVALID_EMAIL_MESSAGE,
  },
};
