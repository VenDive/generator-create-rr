import axios from 'utils/libs/axios';
import { LOGIN_URL } from '../constants';

export default () => {
  /** Change the base URL with your prefer API URL */
  return axios({ url: LOGIN_URL, method: 'GET' })
};
