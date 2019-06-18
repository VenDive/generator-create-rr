import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import actions from '../redux/actions';

function mapStateToProps(state) {
  return {
    fullName: state.user.name,
    userImage: state.user.profileImage,
    loggedInTime: state.user.loggedInTime,
  };
}

const mapDispatchToProps = dispatch => ({
  logout: () => { dispatch(actions.logoutUser()); },
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserDetails);

export default UserInfoContainer;
