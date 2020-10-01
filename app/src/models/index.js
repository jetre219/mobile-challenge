import { init } from '@rematch/core';
import { authentication } from './authentication';

const store = init({
  models: {
    authentication,
  },
});

export default store;
