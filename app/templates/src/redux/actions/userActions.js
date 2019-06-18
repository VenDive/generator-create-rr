import {
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_INPROGRESS,
} from '../actionTypes';

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFail = () => ({
  type: LOGOUT_FAIL,
});

export const logoutInProgress = () => ({
  type: LOGOUT_INPROGRESS,
});

export const logoutUser = () => (
  (dispatch) => {
    dispatch(logoutInProgress());
  }
);

export default logoutUser; // remove this line for multiple actions
