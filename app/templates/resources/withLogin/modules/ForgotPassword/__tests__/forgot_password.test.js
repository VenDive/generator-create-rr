import React from 'react';
import { create } from 'react-test-renderer';
import ForgotPassword from '../ForgotPassword';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('test cases for forogot password component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('submit form', () => {
    const onFinish = jest.fn();
    const trenderer = create(<ForgotPassword isLoading={false} forgotPassword={onFinish} />);
    const component = trenderer.root;<% if (ui_library === 'ant') { %>
    const form = component.findByProps({ className: 'forgot-password-form' });
    form.props.onFinish();
    expect(onFinish).toBeCalled();<% } else { %>
    const form = component.findByType('form');
    const mybutton = form.findByType('button');
    mybutton.props.onClick();
    expect(onFinish).toBeCalled();<% } %>
  });
});
