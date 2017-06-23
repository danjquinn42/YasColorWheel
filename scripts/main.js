const Wheel = require('./wheel.js');

document.addEventListener("DOMContentLoaded", () => {
  const wheelTags = document.getElementsByTagName("colorwheel");
  for (let i = 0; i < wheelTags.length; ++i) {
    const wheel = Wheel.addToPage(wheelTags[i]);
  };
});
