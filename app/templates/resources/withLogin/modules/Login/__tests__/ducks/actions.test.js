import {
  loginFail, loginInProgress, loginSuccess,
} from '../../ducks/actions';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_INPROGRESS } from '../../ducks/types';

const loginFailPayload = {
  type: LOGIN_FAIL,
  payload: {},
};

const loginInProgressPayload = {
  type: LOGIN_INPROGRESS,
  payload: {},
};

const loginSuccessPayload = {
  type: LOGIN_SUCCESS,
  payload: {
    token: 'test-token',
  },
};

describe('test cases for login actions', () => {
  test('login test case for login fail', () => {
    const loginFailResponse = loginFail(loginFailPayload.payload);
    expect(loginFailResponse.type).toEqual(loginFailPayload.type);
    expect(loginFailResponse.payload).toEqual(loginFailPayload.payload);
  });

  test('login fail test case for login progress', () => {
    const loginInProgressResponse = loginInProgress(loginInProgressPayload.payload);
    expect(loginInProgressResponse.type).toEqual(loginInProgressPayload.type);
  });

  test('login fail test case for login success', () => {
    const loginSuccessResponse = loginSuccess(loginSuccessPayload.payload);
    expect(loginSuccessResponse.type).toEqual(loginSuccessPayload.type);
    expect(loginSuccessResponse.payload).toEqual(loginSuccessPayload.payload);
  });

  test('called', () => {
    const loginUser = jest.fn();
    loginUser({});
    expect(loginUser).toBeCalled();
  });
});
