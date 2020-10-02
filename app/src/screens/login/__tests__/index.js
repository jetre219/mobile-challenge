import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { LoginScreen } from '..';

let homeScreen;

const login = jest.fn();

describe('Home screen', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    homeScreen = render(<LoginScreen login={login} />);
  });

  it('renders correctly', () => {
    expect(homeScreen.toJSON()).toMatchSnapshot();
  });

  describe('when pressing login button', () => {
    beforeEach(() => {
      fireEvent.press(homeScreen.getByText('Login'));
    });

    it('calls the login function', () => {
      expect(login).toHaveBeenCalled();
    });
  });
});
