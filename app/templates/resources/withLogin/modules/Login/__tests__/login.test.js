import React from 'react';
import { create } from 'react-test-renderer';
import Login from '../Login';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('test cases for login component', () => {
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
    const trenderer = create(<Login isLoading={false} token="test" login={onFinish} />);
    const component = trenderer.root;<% if (ui_library === 'ant') { %>
    const form = component.findByProps({ className: 'login-form' });
    form.props.onFinish();
    expect(onFinish).toBeCalled();<% } else { %>
    const form = component.findByType('form');
    const mybutton = form.findByType('button');
    mybutton.props.onClick();
    expect(onFinish).toBeCalled();<% } %>
  });
});
