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

const shouldPlayHelp = (playState, initAppLoadIsComplete) => {
  return initAppLoadIsComplete ? playState : true;
};

const getters = {

  currentTrans (state, _, rootState) {
    const from = rootState.route.from.path;
    const to = rootState.route.path;
    const possibleTrans = lookupTrans(state, from, to);
    if (!rootState.loading.initAppLoadIsComplete) {
      return "init"; 
    } else {
      return state.play ? lookupTrans(state, from, to) : null;
    }
  },

  shouldPlay (state, _, rootState) {
    return shouldPlayHelp(state.play, rootState.loading.initAppLoadIsComplete);
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
