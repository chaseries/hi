import Vue from "vue";
import VueRouter from "vue-router";

const PageIndex = () => import(/* webpackChunkName: "pageIndex" */ "VUE_PAGE/Index.vue");
const PageAbout = () => import(/* webpackChunkName: "pageAbout" */ "VUE_PAGE/about/Index.vue");
const PageWorks = () => import(/* webpackChunkName: "pageWorks" */ "VUE_PAGE/works/Index.vue");
const PageWork = () => import(/* webpackChunkName: "pageWork" */ "VUE_PAGE/works/work/Index.vue");
const PageDigest = () => import(/* webpackChunkName: "pageWorks" */ "VUE_PAGE/digest/Index.vue");


Vue.use(VueRouter);


const RouteIndex = {
  path: "/",
  name: "index",
  component: PageIndex
};

const RouteAbout = {
  path: "/about",
  component: PageAbout
};

const RouteWorks = {
  path: "/works",
  component: PageWorks
};

const RouteWork = {
  path: "/works/:slug",
  component: PageWork,
  props: true
};

const RouteDigest = {
  path: "/digest",
  component: PageDigest
};

const routes = [
  RouteIndex,
  RouteAbout,
  RouteWorks,
  RouteWork,
  RouteDigest
];

export const createRouter = function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
