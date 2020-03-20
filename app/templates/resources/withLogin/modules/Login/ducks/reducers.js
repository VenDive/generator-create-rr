import { saveToLocal, getFromLocal } from 'utils/cache';
import { TOKEN_KEY } from 'configs';
import * as actionTypes from './types';

const initialState = {
  isLoading: false,
  token: getFromLocal(TOKEN_KEY, false) || '',
  authError: {
    isError: false,
    message: '',
  },
};

export default function launchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_INPROGRESS: {
      return { ...state, isLoading: true };
    }
    case actionTypes.LOGIN_FAIL: {
      return {
        ...state,
        isLoading: false,
        authError: action.payload || {
          isError: true,
          message: 'error occurred!',
        },
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      saveToLocal(TOKEN_KEY, action.payload.token, false);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token || null,
        authError: {
          isError: false,
          message: '',
        },
      };
    }
    default:
      return state;
  }
}
