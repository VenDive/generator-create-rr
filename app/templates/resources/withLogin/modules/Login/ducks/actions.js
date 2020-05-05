import * as actionTypes from './types';
import loginApi from './service';

export const loginSuccess = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: actionTypes.LOGIN_FAIL,
  payload,
});

export const loginInProgress = () => ({
  type: actionTypes.LOGIN_INPROGRESS,
});

export const loginUser = (params) => async (dispatch) => {
    dispatch(loginInProgress());
    try {
      const response = await loginApi(params);
      dispatch(loginSuccess(response));
    } catch(error) {
      const authError = {
        message: error.response.data,
        isError: true,
      };
      dispatch(loginFail(authError));
    };
  }
