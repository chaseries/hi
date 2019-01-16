// Trans store module

const defaultDuration = 250;
const homeToWorkDuration = 600;

export const transDefaults = [
  { from: "/", to: "/works/straylight", trans: "homeToWork", homeToWorkDuration },
  { from: "/", to: "/works/ries", trans: "homeToWork", homeToWorkDuration },
  { from: "/", to: "/works/suskie", trans: "homeToWork", homeToWorkDuration },
  { from: "*", to: "*", trans: "default", duration: defaultDuration }
];


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

export const carouselItems = [
  carouselStraylight,
  carouselRies,
  carouselSuskie
];


