import axios from 'axios';
import forgotPassword from '../../ducks/service';

jest.mock('axios');

const errorData = {
  response: {
    data: 'Not found',
  },
};
const responsedError = {
  message: 'Not found',
  isError: true,
};

describe('test cases for forgot password call', () => {
  // it('login successfully from an API', async () => {
  //   axios.get.mockImplementationOnce(() => Promise.resolve(responsedData));
  //   await expect(forgotPassword(data)).resolves.toEqual(responsedData.data[0]);
  // });
  it('Forgot password API should return error', async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(errorData));
    await expect(forgotPassword({})).rejects.toEqual(responsedError);
  });
});
