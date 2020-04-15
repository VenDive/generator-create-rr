import { connect } from 'react-redux';
import Login from './ForgotPassword';
import * as actions from './ducks';

function mapStateToProps(state) {
  return {
    isLoading: state.forgotPass.isLoading,
    isError: state.forgotPass.isError,
    isSuccess: state.forgotPass.isSuccess,
    errorMessage: state.forgotPass.errorMessage,
  };
}

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (data) => { dispatch(actions.forgotPassword(data)); },
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
