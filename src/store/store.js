import Vue from "vue";
import Vuex from "vuex";
import post from "./post/module";
import trans from "./trans/module";
import loading from "./loading/module";
import modal from "./modal/module";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      post,
      trans,
      loading,
      modal
    }
  });
};
