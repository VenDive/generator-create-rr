import launchReducer from '../../ducks/reducers';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_INPROGRESS } from '../../ducks/types';

const initialState = {
  isLoading: false,
  token: 'test-token',
  authError: {
    isError: false,
    message: '',
  },
};

describe('test cases for login reducer', () => {
  it('test case for login reducer for in progress', () => {
    const reducerInProgressResponse = launchReducer(initialState, { type: LOGIN_INPROGRESS });
    expect(reducerInProgressResponse.isLoading).toEqual(true);
  });

  it('test case for login reducer for fail', () => {
    const reducerFailResponse = launchReducer(initialState, {
      type: LOGIN_FAIL,
      payload: {
        isError: true,
        message: 'error occurred!',
      },
    });
    expect(reducerFailResponse.isLoading).toEqual(false);
    expect(reducerFailResponse.authError.isError).toEqual(true);
    expect(reducerFailResponse.authError.message).toEqual('error occurred!');
  });

  it('test case for login reducer for sucess', () => {
    const reducerFailResponse = launchReducer(initialState, {
      type: LOGIN_SUCCESS,
      payload: {
        token: 'test-token',
      },
    });
    expect(reducerFailResponse.isLoading).toEqual(false);
    expect(reducerFailResponse.token).toEqual('test-token');
    expect(reducerFailResponse.authError.isError).toEqual(false);
    expect(reducerFailResponse.authError.message).toEqual('');
  });
});
