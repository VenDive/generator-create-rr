import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
