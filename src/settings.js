// Trans store module

const defaultDuration = 250;
const homeToWorkDuration = 600;

const transitions = {
  init: {
    name: "init",
    duration: 250,
    easing: "linear"
  },
  default: {
    name: "default",
    duration: 250,
    easing: []
  },
  homeToWork: {
    name: "homeToWork",
    duration: 600,
    easing: []
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
  slug: "straylight"
};

const carouselRies = {
  title: "Ries",
  slug: "ries"
};

const carouselSuskie = {
  title: "Suskie",
  slug: "suskie"
};

export const carouselSettings = [
  carouselStraylight,
  carouselRies,
  carouselSuskie
];