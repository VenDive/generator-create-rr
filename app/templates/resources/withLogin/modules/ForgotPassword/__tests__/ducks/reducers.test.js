
import launchReducer from '../../ducks/reducers';

import { FORGOT_PASSWORD_INPROGRESS, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL } from '../../ducks/types';


const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  isSuccess: false,
};

describe('test cases for forgot password reducer', () => {
  it('Should return in progress state', () => {
    const reducerInProgressResponse = launchReducer(
      initialState,
      { type: FORGOT_PASSWORD_INPROGRESS },
    );
    expect(reducerInProgressResponse.isLoading).toEqual(true);
    expect(reducerInProgressResponse.isSuccess).toEqual(false);
    expect(reducerInProgressResponse.isError).toEqual(false);
  });

  it('Should return failure state', () => {
    const reducerFailResponse = launchReducer(initialState, {
      type: FORGOT_PASSWORD_FAIL,
      payload: {
        isError: true,
        message: 'error occurred!',
      },
    });
    expect(reducerFailResponse.isLoading).toEqual(false);
    expect(reducerFailResponse.isSuccess).toEqual(false);
    expect(reducerFailResponse.isError).toEqual(true);
    expect(reducerFailResponse.errorMessage).toEqual('error occurred!');
  });

  it('Should return in success state', () => {
    const reducerFailResponse = launchReducer(initialState, {
      type: FORGOT_PASSWORD_SUCCESS,
      payload: {
        token: 'test@test.com',
      },
    });
    expect(reducerFailResponse.isLoading).toEqual(false);
    expect(reducerFailResponse.isSuccess).toEqual(true);
    expect(reducerFailResponse.isError).toEqual(false);
    expect(reducerFailResponse.errorMessage).toEqual('');
  });
});
