import { lookupTrans } from "./util";

const state = {
  play: false,
  override: null,
  init: null,
  defaults: []
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
    console.log("The from is:", from, "and the to is:", to, "and the trans should be:", possibleTrans);
    if (!rootState.loading.initAppLoadIsComplete) {
      return state.init;
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
