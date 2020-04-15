import { FAILED_ERROR } from '../constants';
import * as actionTypes from './types';

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  isSuccess: false,
};

export default function launchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD_INPROGRESS: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case actionTypes.FORGOT_PASSWORD_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        errorMessage: action.payload.message || FAILED_ERROR,
      };
    }
    case actionTypes.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: '',
        isSuccess: true,
      };
    }
    default:
      return state;
  }
}
