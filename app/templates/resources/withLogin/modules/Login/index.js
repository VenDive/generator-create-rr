import { connect } from 'react-redux';
import Login from './Login';
import * as actions from './ducks';

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    token: state.auth.token,
    authError: state.auth.authError,
  };
}

const mapDispatchToProps = (dispatch) => ({
  login: (data) => { dispatch(actions.loginUser(data)); },
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
