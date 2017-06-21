const Wheel = require('./wheel.js');

document.addEventListener("DOMContentLoaded", () => {
  const wheelTags = document.getElementsByTagName("colorwheel");
  for (i = 0; i < wheelTags.length; ++i) {
    const wheel = Wheel.addToPage(wheelTags[i])
    // wheelTags[i].innerHTML = wheel.render();
  };
});