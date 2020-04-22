import * as actionTypes from './types';
import forgotPasswordApi from './service';

export const forgotPasswordSuccess = (payload) => ({
  type: actionTypes.FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordFail = (payload) => ({
  type: actionTypes.FORGOT_PASSWORD_FAIL,
  payload,
});

export const forgotPasswordInProgress = () => ({
  type: actionTypes.FORGOT_PASSWORD_INPROGRESS,
});

export const forgotPassword = (email) => (
  (dispatch) => {
    dispatch(forgotPasswordInProgress());
    forgotPasswordApi({ email }).then((response) => {
      dispatch(forgotPasswordSuccess(response));
    }).catch((error) => {
      dispatch(forgotPasswordFail(error));
    });
  }
);
