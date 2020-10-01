import { init } from '@rematch/core';
import { authentication } from '../authentication';

let store;

describe('Authentication model', () => {
  beforeEach(() => {
    store = init({
      models: { authentication },
    });
  });

  describe('when logging in', () => {
    beforeEach(async () => {
      await store.dispatch.authentication.login();
    });

    it('logs the user in', () => {
      expect(store.getState().authentication.loggedIn).toBe(true);
    });

    describe('when logging out', () => {
      beforeEach(async () => {
        await store.dispatch.authentication.logout();
      });

      it('logs out the user', () => {
        expect(store.getState().authentication.loggedIn).toBe(false);
      });
    });
  });
});
