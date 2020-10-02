import { render, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import React from 'react';
import { Screens } from '..';
import store from '../models';

let screens;

describe('Screens component', () => {
  describe('given user is logged in', () => {
    beforeEach(async () => {
      screens = render(<Screens loggedIn />);
      await act(async () => {});
    });

    it('renders correctly', () => {
      expect(screens.toJSON()).toMatchSnapshot();
    });
  });

  describe('given user is not logged in', () => {
    beforeEach(async () => {
      screens = render(<Provider store={store}><Screens loggedIn={false} /></Provider>);
      await act(async () => {});
    });

    it('renders correctly', () => {
      expect(screens.toJSON()).toMatchSnapshot();
    });
  });
});
