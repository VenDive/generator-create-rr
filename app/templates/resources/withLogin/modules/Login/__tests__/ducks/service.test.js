import axios from 'axios';
import login from '../../ducks/service';

jest.mock('axios');

const data = {
  email: 'test@test.com',
  password: 'testPass',
};

const responsedData = {
  data: [{
    token: 'test-token',
  }],
};

const errorData = {
  response: { data: 'Invalid credentials' },
};
const responsedError = {
  message: 'Invalid credentials',
  isError: true,
};

describe('test cases for login call', () => {
  it('login successfully from an API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(responsedData));
    await expect(login(data)).resolves.toEqual(responsedData.data[0]);
  });
  it('login error from an API', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(errorData));
    await expect(login({})).rejects.toEqual(responsedError);
  });
});
