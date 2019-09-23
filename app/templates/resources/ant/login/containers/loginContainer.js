import { connect } from 'react-redux';
import Login from 'components/login/Login';
import actions from 'redux/actions';

function mapStateToProps(state, props) {
  return {
    ...props,
    isLoading: state.auth.isLoading,
    token: state.auth.token,
  };
}

const mapDispatchToProps = dispatch => ({
  login: () => { dispatch(actions.login()); },
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
