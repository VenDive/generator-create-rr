import axios from 'axios';
import { LOGIN_URL } from '../constants';

export default (params) => new Promise((resolve, reject) => {
  /** Change the base URL with your prefer API URL */
  // eslint-disable-next-line no-console
  console.log(params);
  axios.get(LOGIN_URL).then((response) => {
    resolve(response.data[0]);
  }).catch((error) => {
    const authError = {
      message: error.response.data,
      isError: true,
    };
    reject(authError);
  });
});
