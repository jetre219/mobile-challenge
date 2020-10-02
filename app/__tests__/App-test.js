import { render, act } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

let app;

describe('App component', () => {
  beforeEach(async () => {
    app = render(<App />);
    await act(async () => {});
  });

  afterEach(() => {
    app.unmount();
  });

  it('renders correctly', () => {
    expect(app.toJSON()).toMatchSnapshot();
  });
});
