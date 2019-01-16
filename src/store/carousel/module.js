const state = {
  items: [],
  paused: false,
  locked: false
};

const mutations = {
  initialize (state, items) {
    state.items = items;
  },

  prev (state) {
    if (!state.locked) {
      const last = state.items[state.items.length - 1];
      const init = state.items.slice(0, state.items.length - 1);
      state.items = [last].concat(init);
    }
  },

  next (state) {
    if (!state.locked) {
      const tail = state.items.slice(1, state.items.length);
      const head = state.items[0];
      state.items = tail.concat([head]);
    }
  },

  pause (state) {
    state.paused = !state.paused;
  },

  lock (state) {
    state.locked = true;
  },

  unlock (state) {
    state.locked = false;
  }
};


export default {
  namespaced: true,
  state,
  mutations
};
