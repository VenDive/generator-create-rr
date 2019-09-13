import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  token: '',
};

export default function launchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_INPROGRESS: {
      return Object.assign({}, state, {
        isLoading: true,
      });
    }
    case actionTypes.LOGIN_FAIL: {
      return Object.assign({}, state, {
        isLoading: false,
      });
    }
    case actionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false,
        token: 'asd',
      });
    }
    default:
      return state;
  }
}
