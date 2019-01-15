
const state = {
  layoutHeaderHeight: 0
};

const mutations = {
  setLayoutHeaderHeight (state, h) {
    state.layoutHeaderHeight = h;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
