// Trans store module
import TransInit from "VUE_COMPONENT/trans/init/Main.vue";
import TransDefault from "VUE_COMPONENT/trans/default/Main.vue";
import TransHomeToWork from "VUE_COMPONENT/trans/home-to-work/Main.vue";

const defaultDuration = 250;
const homeToWorkDuration = 600;

const transitions = {
  init: {
    name: "init",
    duration: 250,
    suspend: 0,
    component: TransInit
  },
  default: {
    name: "default",
    duration: { enter: 250, leave: 250 },
    suspend: 200,
    component: TransDefault
  },
  homeToWork: {
    name: "homeToWork",
    duration: 1000,
    suspend: 0,
    component: TransHomeToWork
  }
};

const transInit = transitions.init;

const transDefaults = [
  { from: "/", to: "/works/straylight", trans: transitions.homeToWork },
  { from: "/", to: "/works/ries", trans: transitions.homeToWork },
  { from: "/", to: "/works/suskie", trans: transitions.homeToWork },
  { from: "*", to: "*", trans: transitions.default }
];

export const transSettings = {
  init: transInit,
  defaults: transDefaults
};


// Carousel store module

const carouselStraylight = {
  title: "Straylight",
  slug: "straylight",
  theme: "ffd2b5"
};

const carouselRies = {
  title: "Ries",
  slug: "ries",
  theme: "00ffc0"
};

const carouselSuskie = {
  title: "Suskie",
  slug: "suskie",
  theme: "d04436"
};

export const carouselSettings = [
  carouselStraylight,
  carouselRies,
  carouselSuskie
];
