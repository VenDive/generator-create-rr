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

export const loginUser = (params) => (
  (dispatch) => {
    dispatch(loginInProgress());
    loginApi(params).then((response) => {
      dispatch(loginSuccess(response));
    }).catch((error) => {
      dispatch(loginFail(error));
    });
  }
);
