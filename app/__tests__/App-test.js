import { render } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

let app;

describe('App component', () => {
  beforeEach(() => {
    app = render(<App />);
  });

  it('renders correctly', () => {
    expect(app.toJSON()).toMatchSnapshot();
  });
});
