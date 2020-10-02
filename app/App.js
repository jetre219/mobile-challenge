import React from 'react';
import { Provider } from 'react-redux';
import store from './src/models';
import Screens from './src';

const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
