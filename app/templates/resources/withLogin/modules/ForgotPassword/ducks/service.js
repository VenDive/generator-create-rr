import axios from 'axios';
import { FORGOT_PASSWORD_URL } from '../constants';

export default (params) => new Promise((resolve, reject) => {
  /** Change the base URL with your prefer API URL */
  axios.post(FORGOT_PASSWORD_URL, params).then((response) => {
    resolve(response.data[0]);
  }).catch((error) => {
    const authError = {
      message: error.response.data,
      isError: true,
    };
    reject(authError);
  });
});
