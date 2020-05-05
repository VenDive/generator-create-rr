import axios from 'utils/libs/axios';
import { FORGOT_PASSWORD_URL } from '../constants';

export default (params) =>
  /** Change the base URL with your prefer API URL */
  axios({ url: FORGOT_PASSWORD_URL, method: 'POST', data: params });
