import { initPageState, getImage } from "./util";


const state = {
  initAppLoadIsComplete: false,
  currentPage: { ...initPageState }
};

const mutations = {
  increaseTotalAssets (state, n) {
    state.currentPage.totalAssets += n;
  },

  increaseTotalLoaded (state, n) {
    state.currentPage.totalLoaded += n;
  },

  stopCounting (state) {
    state.currentPage.isFinishedCounting = true;
  },

  setInitAppLoadComplete (state) {
    state.initAppLoadIsComplete = true;
  },

  resetCurrentPageState (state) {
    state.currentPage = { ...initPageState };
  }
};

const actions = {
  preload ({ commit }, srcs) {
    commit("increaseTotalAssets", srcs.length);
    const images = srcs.map(getImage);
    Promise.all(images)
      .then(v => { commit("increaseTotalLoaded", srcs.length); })
      .catch(e => { console.warn(e); });
  }
};

const getters = {
  isLoaded (state) {
    if (state.currentPage.isFinishedCounting) {
      return state.currentPage.totalAssets === state.currentPage.totalLoaded
        ? true
        : false;
    }
    return false;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
