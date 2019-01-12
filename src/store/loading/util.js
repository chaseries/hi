
export const initPageState = {
  totalAssets: 0,
  totalLoaded: 0,
  isFinishedCounting: false
};

export const getImage = function(src) {
  const image = new Image();
  return new Promise((resolve, reject) => {
    image.onload = () => { resolve(image); };
    image.onerror = () => { reject(`Image at ${src} failed to load.`); };
    image.src = src;
  });
};
