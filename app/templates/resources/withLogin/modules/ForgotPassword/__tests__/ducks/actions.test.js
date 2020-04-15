import {
  forgotPassword, forgotPasswordInProgress, forgotPasswordSuccess, forgotPasswordFail,
} from '../../ducks/actions';
import { FORGOT_PASSWORD_INPROGRESS, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL } from '../../ducks/types';

const forgotPassFailPayload = {
  type: FORGOT_PASSWORD_FAIL,
  payload: {},
};

const forgotPassInProgressPayload = {
  type: FORGOT_PASSWORD_INPROGRESS,
  payload: {},
};

const forgotPassSuccessPayload = {
  type: FORGOT_PASSWORD_SUCCESS,
  payload: {
    email: 'test@test.com',
  },
};

describe('test cases for forgot password actions', () => {
  test('Should fail forgot password', () => {
    const forgotPassFailResponse = forgotPasswordFail(forgotPassFailPayload.payload);
    expect(forgotPassFailResponse.type).toEqual(forgotPassFailPayload.type);
    expect(forgotPassFailResponse.payload).toEqual(forgotPassFailPayload.payload);
  });

  test('Should forgot password in progress', () => {
    const forgotPassInProgressResponse = forgotPasswordInProgress(
      forgotPassInProgressPayload.payload,
    );
    expect(forgotPassInProgressResponse.type).toEqual(forgotPassInProgressPayload.type);
  });

  test('Should pass forgot password', () => {
    const forgotPassSuccessResponse = forgotPasswordSuccess(forgotPassSuccessPayload.payload);
    expect(forgotPassSuccessResponse.type).toEqual(forgotPassSuccessPayload.type);
    expect(forgotPassSuccessResponse.payload).toEqual(forgotPassSuccessPayload.payload);
  });

  test('called', () => {
    const forgotPassUser = jest.fn(() => forgotPassword({}));
    forgotPassUser();
    expect(forgotPassUser).toBeCalled();
  });
});
