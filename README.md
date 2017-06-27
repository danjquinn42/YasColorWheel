# Yas Color Wheel!
The Yas Color Wheel is a color-picker for your webpage. Just download colorwheel.js, add it to your project, and insert the <color-picker> tag in your HTML. [See a Demo here.](https://danjquinn42.github.io/YasColorWheel/)
**Warning: this project is in-progress. The interface below may change as the project develops**

## The Easiest Way to Get Started
When the project is complete I will publish it as an npm package. In the meantime if you'd like to try it out you can:

1) Click on colorwheel.js above.

2) Right-click on the "Raw" button. Choose "save link as.." save it as colorwheel.js.

3) Add the javascript file to your webpage using the <script> tag. If you are using a bundler like webpack you can skip this step.

4) Copy and paste the following tag into your document.
```
<color-picker style="position: absolute">
</color-picker>
```

Now you should have a color wheel and lightness slider on your page with default styles applied.

## Styling
The color picker style must include `position: absolute` or its parent element must be `position: absolute`. This may change in future iterations. Adding a width attribute will adjust both height and width proportionally to avoid the wheel being skewed.

### Starting Color
To set the starting color insert a `starting-color` into the color-picker tag. the starting color should be set equal to an hsl color value: for example, `starting-color="hsl(22, 84%, 50%)"`. If you do not supply a starting color the default is `hsl(25, 70%, 50%)` which is a warm orange.

## Getting the Color
To set the get the current color value add a colorChange event listener to the color picker. Calling `event.details` will return an HSL color object. For example:
```
const picker = document.getElementsByTagName("color-picker");

picker.addEventListener("colorChange", () => {
  const color = event.details;
  console.log(color.toString());
});
```
would print a css styled string for the current HSL color value.

## HSL Objects
The following methods are available to you from the HSL class.

### new HSL(hue, saturationPercentage, lightnessPercentage)
returns a new HSL object. Takes three numbers: a hue value between 0 and 360, a saturationPercentage value between 0 and 100, and a lightnessPercentage value between 0 and 100.

### HSL.parse(string)
this is a static method which returns an HSL object given a properly formatted string. The string should be formatted for use in css. For example: `"hsl(22, 84%, 50%)"`.

### .toString()
returns a new string formatted for use in css like the example above.
### .hue
returns a number from 0 to 360 corresponding to the hue of the color.

### .saturationPercentage
returns a number from 0 to 100 corresponding to the saturation of the color.

### .lightnessPercentage
returns a number from 0 to 100 corresponding to the lightness of the color.

### .dispatchUpdate(domElement)
dispatches a colorChange event from the DOM element supplied. After changing the hue, saturation, or lightness values elsewhere on your site you can pass a color-picker element to `.dispatchUpdate` to update the position of the lightness slider and wheel marker.
