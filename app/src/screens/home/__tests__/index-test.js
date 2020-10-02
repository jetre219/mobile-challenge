import { render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '..';

let homeScreen;

describe('Home screen', () => {
  beforeEach(() => {
    homeScreen = render(<HomeScreen />);
  });

  it('renders correctly', () => {
    expect(homeScreen.toJSON()).toMatchSnapshot();
  });
});
