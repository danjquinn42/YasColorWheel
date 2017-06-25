import ColorPicker from './colorpicker.js';
import HSL from './color/hsl.js';

document.addEventListener("DOMContentLoaded", () => {
  const colorPickers = document.getElementsByTagName("color-picker");
  for (let i = 0; i < colorPickers.length; ++i) {
    const color =
      colorPickers[i].hasAttribute("default-color")
      ? HSL.parse(colorPickers[i].getAttribute("default-color"))
      : new HSL(20, 40, 50);

    const picker = new ColorPicker(colorPickers[i], color);
    picker.initialize(color);
  }
});
