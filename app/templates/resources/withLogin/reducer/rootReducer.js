import { combineReducers } from 'redux';
import { loginReducer } from 'app/modules/Login/ducks';
import { forgotPasswordReducer } from 'app/modules/ForgotPassword/ducks';

const rootReducer = combineReducers({
  auth: loginReducer,
  forgotPass: forgotPasswordReducer,
});

export default rootReducer;
