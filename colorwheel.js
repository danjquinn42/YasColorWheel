/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _degrees = __webpack_require__(1);

var _degrees2 = _interopRequireDefault(_degrees);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radians = function () {
  function Radians(value) {
    _classCallCheck(this, Radians);

    this.value = value;
  }

  _createClass(Radians, [{
    key: "toDegrees",
    value: function toDegrees() {
      return new _degrees2.default(this.value * (180 / Math.PI));
    }
  }, {
    key: "toRadians",
    value: function toRadians() {
      return this;
    }
  }, {
    key: "cos",
    value: function cos() {
      return Math.cos(this.value);
    }
  }, {
    key: "sin",
    value: function sin() {
      return Math.sin(this.value);
    }
  }], [{
    key: "from",
    value: function from(x, hypotenuse) {
      return new Radians(Math.acos(x / hypotenuse));
    }
  }]);

  return Radians;
}();

exports.default = Radians;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radians = __webpack_require__(0);

var _radians2 = _interopRequireDefault(_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Degrees = function () {
  function Degrees(value) {
    _classCallCheck(this, Degrees);

    this.value = (value + 360) % 360;
  }

  _createClass(Degrees, [{
    key: "toRadians",
    value: function toRadians() {
      return new _radians2.default(this.value * Math.PI / 180);
    }
  }, {
    key: "toDegrees",
    value: function toDegrees() {
      return this;
    }
  }, {
    key: "cos",
    value: function cos() {
      return this.toRadians().cos();
    }
  }, {
    key: "sin",
    value: function sin() {
      return this.toRadians().sin();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value + "\u02DA";
    }
  }]);

  return Degrees;
}();

exports.default = Degrees;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _degrees = __webpack_require__(1);

var _degrees2 = _interopRequireDefault(_degrees);

var _polarcoordinates = __webpack_require__(4);

var _polarcoordinates2 = _interopRequireDefault(_polarcoordinates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HSL = function () {
  function HSL(hue, saturationPercentage, lightnessPercentage) {
    _classCallCheck(this, HSL);

    this.hue = hue;
    this.saturationPercentage = saturationPercentage;
    this.lightnessPercentage = lightnessPercentage;
  }

  // TODO should throw an exception if string isn't properly formed.


  _createClass(HSL, [{
    key: "toXYCoordinates",


    // TODO create Percentages class to handle s and l values
    value: function toXYCoordinates() {
      var angle = new _degrees2.default(this.hue);
      var distanceFromOrigin = this.saturationPercentage / 100;
      var position = new _polarcoordinates2.default(angle, distanceFromOrigin);
      return position.toCartesianCoordinates();
    }
  }, {
    key: "dispatchUpdate",
    value: function dispatchUpdate(domElement) {
      var colorChange = new CustomEvent("colorChange", { "detail": this });
      domElement.dispatchEvent(colorChange);
    }
  }, {
    key: "toString",
    value: function toString() {
      console.log[(this.hue, ", ", this.saturationPercentage, " ", this.lightnessPercentage, " ")];
      return "hsl(" + this.hue + ", " + this.saturationPercentage + "%, " + this.lightnessPercentage + "%)";
    }
  }], [{
    key: "parse",
    value: function parse(colorString) {
      var _colorString$match$ma = colorString.match(/\d+/g).map(function (number) {
        return parseInt(number);
      }),
          _colorString$match$ma2 = _slicedToArray(_colorString$match$ma, 3),
          hue = _colorString$match$ma2[0],
          saturationPercentage = _colorString$match$ma2[1],
          lightnessPercentage = _colorString$match$ma2[2];

      return new HSL(hue, saturationPercentage, lightnessPercentage);
    }
  }]);

  return HSL;
}();

exports.default = HSL;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radians = __webpack_require__(0);

var _radians2 = _interopRequireDefault(_radians);

var _polarcoordinates = __webpack_require__(4);

var _polarcoordinates2 = _interopRequireDefault(_polarcoordinates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartesianCoordinates = function () {
  function CartesianCoordinates(x, y) {
    _classCallCheck(this, CartesianCoordinates);

    this.x = x;
    this.y = y;
  }

  _createClass(CartesianCoordinates, [{
    key: "toColor",
    value: function toColor(lightness) {
      var position = this.toPolarCoordinates();
      return position.toColor(lightness);
    }
  }, {
    key: "toPolarCoordinates",
    value: function toPolarCoordinates() {
      var distanceFromOrigin = this.hypotenuse();
      if (distanceFromOrigin > 1) {
        distanceFromOrigin = 1;
      }
      var angle = new _radians2.default(Math.atan2(this.y, this.x));
      return new _polarcoordinates2.default(angle, distanceFromOrigin);
    }
  }, {
    key: "hypotenuse",
    value: function hypotenuse() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }]);

  return CartesianCoordinates;
}();

exports.default = CartesianCoordinates;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hsl = __webpack_require__(2);

var _hsl2 = _interopRequireDefault(_hsl);

var _cartesiancoordinates = __webpack_require__(3);

var _cartesiancoordinates2 = _interopRequireDefault(_cartesiancoordinates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PolarCoordinates = function () {
  function PolarCoordinates(angle, distanceFromOrigin) {
    _classCallCheck(this, PolarCoordinates);

    this.angle = angle;
    this.distanceFromOrigin = distanceFromOrigin;
  }

  _createClass(PolarCoordinates, [{
    key: "toColor",
    value: function toColor(lightness) {
      var hue = this.angle.toDegrees().value;
      var saturation = this.distanceFromOrigin * 100;
      return new _hsl2.default(hue, saturation, lightness);
    }
  }, {
    key: "toCartesianCoordinates",
    value: function toCartesianCoordinates() {
      var x = this.angle.cos() * this.distanceFromOrigin;
      var y = this.angle.sin() * this.distanceFromOrigin;
      return new _cartesiancoordinates2.default(x, y);
    }
  }]);

  return PolarCoordinates;
}();

exports.default = PolarCoordinates;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _colorpicker = __webpack_require__(6);

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var _hsl = __webpack_require__(2);

var _hsl2 = _interopRequireDefault(_hsl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var colorPickers = document.getElementsByTagName("color-picker");
  for (var i = 0; i < colorPickers.length; ++i) {
    var color = colorPickers[i].hasAttribute("starting-color") ? _hsl2.default.parse(colorPickers[i].getAttribute("starting-color")) : new _hsl2.default(25, 70, 50);

    var picker = new _colorpicker2.default(colorPickers[i], color);
    picker.applyDefaults();
    picker.placeChildren(color);
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wheel = __webpack_require__(7);

var _wheel2 = _interopRequireDefault(_wheel);

var _lightness_slider = __webpack_require__(10);

var _lightness_slider2 = _interopRequireDefault(_lightness_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorPicker = function () {
  function ColorPicker(tag, color) {
    _classCallCheck(this, ColorPicker);

    this.tag = tag;
    this.color = color;
  }

  _createClass(ColorPicker, [{
    key: "placeChildren",
    value: function placeChildren() {
      this.placeWheels(this.fetch("color-wheel"));
      this.placeLightnessSliders(this.fetch("lightness-slider"));
    }
  }, {
    key: "applyDefaults",
    value: function applyDefaults() {
      if (this.tagIsEmpty()) {
        this.tag.appendChild(document.createElement("color-wheel"));
        this.tag.appendChild(document.createElement("lightness-slider"));
      }
    }
  }, {
    key: "tagIsEmpty",
    value: function tagIsEmpty() {
      return this.fetch("color-wheel").length === 0 && this.fetch("lightness-slider").length === 0;
    }
  }, {
    key: "fetch",
    value: function fetch(tagName) {
      return this.tag.getElementsByTagName(tagName);
    }
  }, {
    key: "placeWheels",
    value: function placeWheels(wheelTags) {
      for (var i = 0; i < wheelTags.length; ++i) {
        _wheel2.default.createWheel(wheelTags[i], this.color);
      }
    }
  }, {
    key: "placeLightnessSliders",
    value: function placeLightnessSliders(sliderTags) {
      for (var i = 0; i < sliderTags.length; ++i) {
        _lightness_slider2.default.createSlider(sliderTags[i], this.color, this.tag);
      }
    }
  }]);

  return ColorPicker;
}();

exports.default = ColorPicker;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cartesiancoordinates = __webpack_require__(3);

var _cartesiancoordinates2 = _interopRequireDefault(_cartesiancoordinates);

var _inner_wheel_style = __webpack_require__(8);

var _inner_wheel_style2 = _interopRequireDefault(_inner_wheel_style);

var _marker = __webpack_require__(9);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO Remove this.scale and repalce scaling with clientWidth;
var Wheel = function () {
  function Wheel(tag, scale, picker, lightness) {
    _classCallCheck(this, Wheel);

    this.wheelTag = tag;
    this.scale = scale;
    this.picker = picker;
    this.lightness = lightness;
    this.drag = this.drag.bind(this);
    this.subscribeToColorChange = this.subscribeToColorChange.bind(this);
  }

  // TODO extract into a factory


  _createClass(Wheel, [{
    key: "initialize",


    //TODO extract into a factory
    value: function initialize(picker, color) {
      this.wheelTag.setAttribute("style", "\n      position: absolute; border-radius: 50%;\n      background: hsl(0, 0%, " + this.lightness + "%);\n      width: 100%; padding-top: 100%; margin: 0 auto;");

      this.innerWheelTag = document.createElement("inner-wheel");
      this.innerWheelTag.setAttribute("style", (0, _inner_wheel_style2.default)(this.lightness));
      this.wheelTag.appendChild(this.innerWheelTag);

      var markerDiv = document.createElement("marker");

      this.marker = new _marker2.default(markerDiv, color, picker);
      this.marker.setPosition(this.scale, this.totalOffset());
      this.updateWheel(this.lightness);
    }
  }, {
    key: "clickAndDragMarker",
    value: function clickAndDragMarker() {
      var _this = this;

      this.innerWheelTag.addEventListener("mousedown", function (event) {
        _this.drag(event);
        document.addEventListener("mousemove", _this.drag, false);
        document.addEventListener("mouseup", function () {
          document.removeEventListener("mousemove", _this.drag, false);
        });
      });
    }
  }, {
    key: "subscribeToColorChange",
    value: function subscribeToColorChange() {
      var _this2 = this;

      this.picker.addEventListener("colorChange", function (event) {
        var lightness = event.detail.lightnessPercentage;
        _this2.updateWheel(lightness);
      });
    }
  }, {
    key: "updateWheel",
    value: function updateWheel(lightness) {
      this.lightness = lightness;
      this.innerWheelTag.innerHTML = this.marker.tag.outerHTML;
      this.innerWheelTag.setAttribute("style", (0, _inner_wheel_style2.default)(lightness));
      this.wheelTag.setAttribute("style", "position: absolute;\n      border-radius: 50%; background: hsl(0, 0%, " + this.lightness + "%);\n      width: 100%; padding-top: 100%; margin: 0 auto;");
    }
  }, {
    key: "drag",
    value: function drag(event) {
      event.preventDefault();
      var origin = this.origin();
      var mouseLeft = (event.pageX - origin.x) / this.radius();
      var mouseTop = (event.pageY - origin.y) / this.radius();
      var position = new _cartesiancoordinates2.default(mouseLeft, mouseTop);
      var color = position.toColor(this.lightness);
      color.dispatchUpdate(this.picker);
    }
  }, {
    key: "origin",
    value: function origin() {
      var offset = this.totalOffset();
      var x = offset.left + this.radius();
      var y = offset.top + this.radius();
      return { x: x, y: y };
    }
  }, {
    key: "totalOffset",
    value: function totalOffset() {
      var _ref = [0, 0, this.innerWheelTag],
          top = _ref[0],
          left = _ref[1],
          element = _ref[2];

      while (element) {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      }
      return { top: top, left: left };
    }
  }, {
    key: "radius",
    value: function radius() {
      return this.innerWheelTag.clientHeight / 2;
    }
  }], [{
    key: "createWheel",
    value: function createWheel(wheelTag, color) {
      var scale = wheelTag.style.width ? wheelTag.style.width : "20%";
      var picker = wheelTag.parentElement;
      var wheel = new Wheel(wheelTag, scale, picker, color.lightnessPercentage);
      wheel.initialize(picker, color);
      wheel.clickAndDragMarker();
      wheel.subscribeToColorChange();
    }
  }]);

  return Wheel;
}();

exports.default = Wheel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var InnerWheelStyle = function InnerWheelStyle(lightness) {
  return "\n  position: absolute;\n  margin-top: -100%;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      hsla(0, 0%, " + lightness + "%, 1),\n      hsla(0, 0%, " + lightness + "%, .8),\n      hsla(0, 0%, " + lightness + "%, .6),\n      hsla(0, 0%, " + lightness + "%, .4),\n      hsla(0, 0%, " + lightness + "%, .2),\n      hsla(0, 0%, " + lightness + "%, .1),\n      hsla(0, 0%, " + lightness + "%, 0) 70%),\n    radial-gradient(\n      ellipse at 50% 0%,\n      hsla(270, 100%, " + lightness + "%, .8),\n      hsla(270, 100%, " + lightness + "%, .6),\n      hsla(270, 100%, " + lightness + "%, .2),\n      hsla(270, 100%, " + lightness + "%, .0) 30%),\n    radial-gradient(\n      ellipse at 50% 100%,\n      hsla(90, 100%, " + lightness + "%, .6),\n      hsla(90, 100%, " + lightness + "%, .2),\n      hsla(90, 100%, " + lightness + "%, .0) 20%),\n    radial-gradient(\n      ellipse at 75% 93%,\n      hsla(60, 100%, " + lightness + "%, .4),\n      hsla(60, 100%, " + lightness + "%, .2),\n      hsla(60, 100%, " + lightness + "%, .0) 20%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .6),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 75%,\n      hsla(30, 100%, " + lightness + "%, 1),\n      hsla(30, 100%, " + lightness + "%, .7),\n      hsla(30, 100%, " + lightness + "%, .4),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 93%,\n      hsla(60, 100%, " + lightness + "%, 1),\n      hsla(60, 100%, " + lightness + "%, .7),\n      hsla(60, 100%, " + lightness + "%, .4),\n      hsla(60, 100%, " + lightness + "%, .2),\n      hsla(60, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 100%,\n      hsla(90, 100%, " + lightness + "%, 1),\n      hsla(90, 100%, " + lightness + "%, .7),\n      hsla(90, 100%, " + lightness + "%, .4),\n      hsla(90, 100%, " + lightness + "%, .2),\n      hsla(90, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 93%,\n      hsla(120, 100%, " + lightness + "%, 1),\n      hsla(120, 100%, " + lightness + "%, .6),\n      hsla(120, 100%, " + lightness + "%, .4),\n      hsla(120, 100%, " + lightness + "%, .2),\n      hsla(120, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 75%,\n      hsla(150, 100%, " + lightness + "%, 1),\n      hsla(150, 100%, " + lightness + "%, .8),\n      hsla(150, 100%, " + lightness + "%, .5),\n      hsla(150, 100%, " + lightness + "%, .3),\n      hsla(150, 100%, " + lightness + "%, .2),\n      hsla(150, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 0% 50%,\n      hsla(180, 100%, " + lightness + "%, 1),\n      hsla(180, 100%, " + lightness + "%, .8),\n      hsla(180, 100%, " + lightness + "%, .4),\n      hsla(180, 100%, " + lightness + "%, .2),\n      hsla(180, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 25%,\n      hsla(210, 100%, " + lightness + "%, 1),\n      hsla(210, 100%, " + lightness + "%, .6),\n      hsla(210, 100%, " + lightness + "%, .4),\n      hsla(210, 100%, " + lightness + "%, .2),\n      hsla(210, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 7%,\n      hsla(240, 100%, " + lightness + "%, 1),\n      hsla(240, 100%, " + lightness + "%, .8),\n      hsla(240, 100%, " + lightness + "%, .6),\n      hsla(240, 100%, " + lightness + "%, .2),\n      hsla(240, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 0%,\n      hsla(270, 100%, " + lightness + "%, 1),\n      hsla(270, 100%, " + lightness + "%, .7),\n      hsla(270, 100%, " + lightness + "%, .4),\n      hsla(270, 100%, " + lightness + "%, .2),\n      hsla(270, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 7%,\n      hsla(300, 100%, " + lightness + "%, 1),\n      hsla(300, 100%, " + lightness + "%, .7),\n      hsla(300, 100%, " + lightness + "%, .4),\n      hsla(300, 100%, " + lightness + "%, .2),\n      hsla(300, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 25%,\n      hsla(330, 100%, " + lightness + "%, 1),\n      hsla(330, 100%, " + lightness + "%, .7),\n      hsla(330, 100%, " + lightness + "%, .4),\n      hsla(330, 100%, " + lightness + "%, .2),\n      hsla(330, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .7),\n      hsla(0, 100%, " + lightness + "%, .4),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%);";
};

exports.default = InnerWheelStyle;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function () {
  function Marker(tag, color, picker) {
    _classCallCheck(this, Marker);

    this.tag = tag;
    this.color = color;
    this.picker = picker;
  }

  _createClass(Marker, [{
    key: "setPosition",
    value: function setPosition(wheelScale) {
      this.wheelScale = wheelScale;
      this.updateColorAndPosition(this.color);
      this.updateColor();
    }
  }, {
    key: "updateColorAndPosition",
    value: function updateColorAndPosition(color) {
      var position = color.toXYCoordinates();
      var x = position.x * 50 + 46;
      var y = position.y * 50 + 46;
      this.setStyles(x, y, color);
    }
  }, {
    key: "setStyles",
    value: function setStyles(x, y, color, offset) {
      this.tag.setAttribute("style", "position: absolute;\n    left: " + x + "%;\n    top: " + y + "%;\n    margin 0;\n    width: " + this.scale() + this.scaleType() + ";\n    padding-top: " + this.scale() + this.scaleType() + ";\n    background: " + color.toString() + ";\n    border: 1px solid black; border-radius: 50%;\n    -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
    }
  }, {
    key: "updateColor",
    value: function updateColor() {
      var _this = this;

      this.picker.addEventListener("colorChange", function (event) {
        _this.updateColorAndPosition(event.detail);
      });
    }
  }, {
    key: "percentSize",
    value: function percentSize() {
      if (this.scaleType() === "%") {
        return scale();
      }
      return parseInt(this.wheelScale.match(/\d+/)) / scale() * 100;
    }
  }, {
    key: "scaleType",
    value: function scaleType() {
      if (this.wheelScale.slice(-1) === 'x') {
        return 'px';
      }
      return '%';
    }
  }, {
    key: "scale",
    value: function scale() {
      var scaleType = this.wheelScale.slice(-1);
      if (scaleType === "x") {
        return parseInt(this.wheelScale.slice(0, -2)) / 12.5;
      } else if (scaleType === "%") {
        return 8;
      }
    }
  }]);

  return Marker;
}();

exports.default = Marker;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LightnessSlider = function () {
  function LightnessSlider(tag, color, picker) {
    _classCallCheck(this, LightnessSlider);

    this.tag = tag;
    this.color = color;
    this.picker = picker;
  }

  //TODO extract into a factory


  _createClass(LightnessSlider, [{
    key: "initialize",


    //TODO extract into a factory
    value: function initialize() {
      var slider = document.createElement("input");
      slider.setAttribute("type", "range");
      slider.setAttribute("max", "100");
      slider.setAttribute("min", "0");
      slider.setAttribute("value", "" + this.color.lightnessPercentage);
      this.setStyle(slider);
      this.tag.appendChild(slider);
      this.adjustLightness(slider);
      this.subscribeToColorChange(slider);
    }
  }, {
    key: "adjustLightness",
    value: function adjustLightness(slider) {
      var _this = this;

      slider.addEventListener("input", function (event) {
        var newColor = _this.color;
        newColor.lightnessPercentage = slider.value;
        newColor.dispatchUpdate(_this.picker);
      });
    }
  }, {
    key: "setStyle",
    value: function setStyle(slider) {
      var color = this.color;
      var black = color;
      black.lightnessPercentage = 0;
      var white = color;
      black.lightnessPercentage = 100;
      slider.setAttribute("style", "position: relative;\n    width: 100%;\n    margin-top: 105%;\n    position: absolute;");
    }
  }, {
    key: "subscribeToColorChange",
    value: function subscribeToColorChange(slider) {
      var _this2 = this;

      this.picker.addEventListener("colorChange", function (event) {
        _this2.color = event.detail;
        _this2.setStyle(slider);
        slider.setAttribute("value", "" + _this2.color.lightnessPercentage);
      });
    }
  }], [{
    key: "createSlider",
    value: function createSlider(tag, color, picker) {
      var lightnessSlider = new LightnessSlider(tag, color, picker);
      lightnessSlider.initialize();
    }
  }]);

  return LightnessSlider;
}();

exports.default = LightnessSlider;

/***/ })
/******/ ]);
//# sourceMappingURL=colorwheel.js.map