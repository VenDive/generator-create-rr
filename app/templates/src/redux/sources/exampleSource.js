// import axios from 'axios';
// import { URL } from '../configs/urls';
// import { ERROR_RESPONSE } from '../configs/messageConstants';

// const getSource = (payload) => new Promise((resolve, reject) => {
//   axios
//     .post(URL, payload)
//     .then((response) => {
//       if (response) {
//         const data = response.data;
//         if (data.header.error) {
//           reject(data.header);
//         } else {
//           resolve(data.configs);
//         }
//       } else {
//         reject(ERROR_RESPONSE);
//       }
//     }).catch((error) => {
//       reject(error);
//     });
// });

// export default getSource;
