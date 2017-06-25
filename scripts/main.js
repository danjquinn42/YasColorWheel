import ColorPicker from './colorpicker.js';
import HSL from './color/hsl.js';

document.addEventListener("DOMContentLoaded", () => {
  const colorPickers = document.getElementsByTagName("color-picker");
  colorPickers.forEach((picker) => {
    const color =
      picker.hasAttribute("default-color")
      ? HSL.parse(picker.getAttribute("default-color"))
      : new Color(20, 40, 50);

    const picker = new ColorPicker(picker, color);
    picker.initialize(color);
  });
});
