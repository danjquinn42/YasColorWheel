import ColorPicker from "./DOM_elements/colorpicker.js";
import HSL from "./color/hsl.js";

document.addEventListener("DOMContentLoaded", () => {
  const colorPickers = document.getElementsByTagName("color-picker");
  for (let i = 0; i < colorPickers.length; ++i) {
    const color =
      colorPickers[i].hasAttribute("starting-color")
        ? HSL.parse(colorPickers[i].getAttribute("starting-color"))
        : new HSL(25, 70, 50);

    const picker = new ColorPicker(colorPickers[i], color);
    picker.applyDefaults();
    picker.placeChildren(color);
  }
});
