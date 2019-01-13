
const state = {
  open: false,
  component: null
};

const mutations = {
  open (state, component) {
    if (state.open === false) {
      state.open = true;
      state.component = component;
    }
  },
  close (state) {
    if (state.open === true) { state.open = false; }
    state.component = null;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
