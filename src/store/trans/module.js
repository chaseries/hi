import { lookupTrans } from "./util";


const state = {
  play: false,
  override: null,
  init: null,
  defaults: [],
  transComplete: false
};

const mutations = {

  initialize (state, settings) {
    state.init = settings.init;
    state.defaults = settings.defaults;
  },

  enter (state) {
    state.play = true;
  },

  leave (state) {
    state.play = false;
  },

  setTransComplete(state, bool) {
    state.transComplete = bool;
  },

  setOverride (state, transName) {
    state.transType = transName;
  },

  purgeOverride (state) {
    state.transType = null;
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
      return state.init;
    } else {
      return lookupTrans(state, from, to);
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
