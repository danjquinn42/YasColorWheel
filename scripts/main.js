import ColorPicker from './colorpicker.js';

document.addEventListener("DOMContentLoaded", () => {
  const colorPickers = document.getElementsByTagName("color-picker");
  for (let i = 0; i < colorPickers.length; ++i) {
    const picker = new ColorPicker(colorPickers[i]);
    picker.initialize();
  };
});
