# Yas Color Wheel!
The Yas Color Wheel is a simple-to-use plugin for your webpage. Download colorwheel.js, add it to your project, and insert the <color-picker> tag in your HTML. Details below.

## The Easiest Way to Get Started
1) Click on colorwheel.js above.

2) Right-click on the "Raw" button. Choose "save link as.." save it as colorwheel.js.

3) Add the javascript file to your webpage using the <script> tag. If you are using a bundler like webpack you can skip this step.

4) Add `<color-picker style="position: absolute"></color-picker>` tag to your document

Now you should have a color wheel and lightness slider on your page with default styles applied.

## Styling

The color picker style must include `position: absolute` or it's parent element must be `position: absolute`. This may change in future iterations. Adding a width attribute will adjust both height and width proportionally to avoid the wheel being skewed.

## Defaults
