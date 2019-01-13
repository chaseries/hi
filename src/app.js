import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "SRC/router";
import { createStore } from "SRC/store/store";
import { sync } from "vuex-router-sync";
import { getCurrentTrans } from "VUE_STORE/trans/util";


export const createApp = function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);

  router.beforeEach((to, from, next) => {
    if (store.state.loading.initAppLoadIsComplete) {
      store.commit("trans/enter");
    }
    next();
  });

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
