export const authentication = {
  state: {
    loggedIn: false,
  },

  reducers: {
    setLoggedIn(state, loggedIn) {
      return { ...state, loggedIn };
    },
  },

  effects: {
    login() {
      this.setLoggedIn(true);
    },

    logout() {
      this.setLoggedIn(false);
    },
  },
};
