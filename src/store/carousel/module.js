const state = {
  items: [],
  paused: false,
  locked: false,
  navigating: false,
  timeLastChanged: null
};

const mutations = {
  initialize (state, items) {
    state.items = items;
    state.lastChanged = new Date();
  },

  prev (state) {
    if (!state.locked) {
      const last = state.items[state.items.length - 1];
      const init = state.items.slice(0, state.items.length - 1);
      state.items = [last].concat(init);
      state.lastChanged = new Date();
    }
  },

  next (state) {
    if (!state.locked) {
      const tail = state.items.slice(1, state.items.length);
      const head = state.items[0];
      state.items = tail.concat([head]);
      state.lastChanged = new Date();
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
  },

  setNavigating (state, bool) {
    state.navigating = bool;
  },

  setLastChanged (state) {
    state.lastChanged = new Date();
  }
};


export default {
  namespaced: true,
  state,
  mutations
};
