import { getCurrentTrans } from "./util";


const state = {
  play: false,
  override: null,
  defaults: [
    { from: "*", to: "*", trans: "default" }
  ]
};

const mutations = {

  enter(state) {
    state.play = true;
  },

  leave(state) {
    state.play = false;
  },

  setOverride(state, transName) {
    state.transType = transName;
  },

  purgeOverride(state) {
    state.transType = null;
  },

  setDefaults(state) {
    state.defaults = defaults;
  },

  purgeDefaults(state) {
    state.defaults = [];
  }
};

const getters = {

  currentTrans (state, _, rootState) {
    return getCurrentTrans(state, rootState.route.from.path, rootState.route.path);
  },

  hasTrans(_, getters) {
    return getters.currentTrans !== null ? true : false;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
