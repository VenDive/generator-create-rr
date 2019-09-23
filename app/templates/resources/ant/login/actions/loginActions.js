import * as actionTypes from 'redux/actionTypes';

export const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

export const loginFail = () => ({
  type: actionTypes.LOGIN_FAIL,
});

export const loginInProgress = () => ({
  type: actionTypes.LOGIN_INPROGRESS,
});

export const loginUser = () => (
  (dispatch) => {
    dispatch(loginInProgress());
    dispatch(loginSuccess());
  }
);
