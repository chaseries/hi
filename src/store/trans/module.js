import { lookupTrans } from "./util";


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

  currentTrans(state, _, rootState) {
    if (state.override !== null) { return state.override; }
    const from = rootState.route.from.path;
    const to = rootState.route.path;
    const lookedUp = lookupTrans(state.defaults, from, to);
    if (lookedUp !== null) { return lookedUp; }
    return null;
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
