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

export const forgotPassword = (email) => async (dispatch) => {
  dispatch(forgotPasswordInProgress());
  try {
    const response = await forgotPasswordApi({ email });
    dispatch(forgotPasswordSuccess(response));
  } catch (error) {
    const authError = {
      message: error.response.data,
      isError: true,
    };
    dispatch(forgotPasswordFail(authError));
  }
};
