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

var _radians = __webpack_require__(2);

var _radians2 = _interopRequireDefault(_radians);

var _hsl = __webpack_require__(3);

var _hsl2 = _interopRequireDefault(_hsl);

var _cartesiancoordinates = __webpack_require__(4);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radians = __webpack_require__(2);

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
    key: "plus",
    value: function plus(degree) {
      return new Degrees(this.value + degree.value);
    }
  }, {
    key: "minus",
    value: function minus(degree) {
      return new Degrees(this.value - degree.value);
    }
  }, {
    key: "negated",
    value: function negated() {
      return new Degrees(-this.value);
    }
  }, {
    key: "equals",
    value: function equals(degree) {
      return this.value === degree.value;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _degrees = __webpack_require__(1);

var _degrees2 = _interopRequireDefault(_degrees);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;

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
    key: "cos",
    value: function cos() {
      return Math.cos(this.value);
    }
  }, {
    key: "sin",
    value: function sin() {
      return Math.sin(this.value);
    }
  }, {
    key: "equals",
    value: function equals(rad) {
      return this.value === rad.value;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //TODO create hex and rgb classes which have convertToHSL and add convertToRGB and convertToHex methods to HSL class


var _degrees = __webpack_require__(1);

var _degrees2 = _interopRequireDefault(_degrees);

var _polarcoordinates = __webpack_require__(0);

var _polarcoordinates2 = _interopRequireDefault(_polarcoordinates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HSL = function () {
  function HSL(h, s, l) {
    _classCallCheck(this, HSL);

    this.h = h;
    this.s = s;
    this.l = l;
  }

  // TODO should throw an exception if string isn't properly formed.


  _createClass(HSL, [{
    key: "toXYCoordinates",
    value: function toXYCoordinates() {
      var angle = new _degrees2.default(this.h);
      var distanceFromOrigin = this.s / 100;
      var position = new _polarcoordinates2.default(angle, distanceFromOrigin);
      return position.toCartesianCoordinates();
    }
  }, {
    key: "toString",
    value: function toString() {
      return "hsl(" + this.h + "," + this.s + "%," + this.l + "%)";
    }
  }], [{
    key: "parse",
    value: function parse(string) {
      var _string$match$map = string.match(/\d+/g).map(function (number) {
        return parseInt(number);
      }),
          _string$match$map2 = _slicedToArray(_string$match$map, 3),
          h = _string$match$map2[0],
          s = _string$match$map2[1],
          l = _string$match$map2[2];

      return new HSL(h, s, l);
    }
  }]);

  return HSL;
}();

exports.default = HSL;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radians = __webpack_require__(2);

var _radians2 = _interopRequireDefault(_radians);

var _polarcoordinates = __webpack_require__(0);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _colorpicker = __webpack_require__(6);

var _colorpicker2 = _interopRequireDefault(_colorpicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var colorPickers = document.getElementsByTagName("color-picker");
  for (var i = 0; i < colorPickers.length; ++i) {
    var picker = new _colorpicker2.default(colorPickers[i]);
    picker.initialize();
  };
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colorPicker = function () {
  function colorPicker(tag) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hsl(20, 40%, 50%)";

    _classCallCheck(this, colorPicker);

    this.tag = tag;
    this.color = color;
  }

  _createClass(colorPicker, [{
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "setColor",
    value: function setColor(newColor) {
      this.color = newColor;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var wheels = this.tag.getElementsByTagName("colorwheel");
      var hueSliders = this.tag.getElementsByTagName("hue-slider");
      var saturationSliders = this.tag.getElementsByTagName("saturation-slider");
      var lightnessSliders = this.tag.getElementsByTagName("lightness-slider");
      this.placeWheels(wheels);
      // this.placeHueSliders(wheels)
      // this.placeWheels(wheels)
    }
  }, {
    key: "placeWheels",
    value: function placeWheels(wheels) {
      if (wheels.length > 0) {
        for (var i = 0; i < wheels.length; ++i) {
          var wheel = _wheel2.default.addToPage(wheels[i], this.color);
        }
      }
    }
  }]);

  return colorPicker;
}();

exports.default = colorPicker;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polarcoordinates = __webpack_require__(0);

var _polarcoordinates2 = _interopRequireDefault(_polarcoordinates);

var _cartesiancoordinates = __webpack_require__(4);

var _cartesiancoordinates2 = _interopRequireDefault(_cartesiancoordinates);

var _inline_background_style = __webpack_require__(8);

var _inline_background_style2 = _interopRequireDefault(_inline_background_style);

var _hsl = __webpack_require__(3);

var _hsl2 = _interopRequireDefault(_hsl);

var _marker = __webpack_require__(9);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wheel = function () {
  function Wheel(tag, color, scale) {
    _classCallCheck(this, Wheel);

    this.tag = tag;
    this.color = color;
    this.scale = scale;
    this.mousePosition;
  }

  _createClass(Wheel, [{
    key: 'clickAndDragMarker',
    value: function clickAndDragMarker() {
      var _this = this;

      this.scrim.addEventListener("mousedown", function () {
        var drag = _this.colorFromMousePosition.bind(_this);
        _this.colorFromMousePosition(event);
        _this.scrim.addEventListener("mousemove", drag, false);
        var that = _this;
        document.addEventListener("mouseup", function () {
          _this.scrim.removeEventListener("mousemove", drag, false);
        });
      });
    }
  }, {
    key: 'colorFromMousePosition',
    value: function colorFromMousePosition(event) {
      var x = this.coordinateFromMousePosition(event.offsetX);
      var y = this.coordinateFromMousePosition(event.offsetY);
      var position = new _cartesiancoordinates2.default(x, y);
      this.color = position.toColor(this.color.l);
      this.updateMarkerPosition();
    }

    // origin() {
    //   const offset = cumulativeOffset();
    //   const x = offset.top + radius();
    //   const y = offset.left + radius();
    //   return { x: x, y: y };
    // }
    //
    // cumulativeOffset() {
    //   let top = 0;
    //   let left = 0;
    //   let element = this.scrim;
    //   while (element) {
    //       top += element.offsetTop  || 0;
    //       left += element.offsetLeft || 0;
    //       element = element.offsetParent;
    //   }
    //
    //   return { top: top, left: left };
    // }

  }, {
    key: 'radius',
    value: function radius() {
      return this.innerWheel.clientWidth / 2;
    }
  }, {
    key: 'coordinateFromMousePosition',
    value: function coordinateFromMousePosition(offset) {
      var coordinate = offset;
      coordinate = coordinate / this.radius() - 1;
      if (coordinate > 1) {
        return 1;
      } else if (coordinate < -1) {
        return -1;
      }
      return coordinate;
    }
  }, {
    key: 'updateMarkerPosition',
    value: function updateMarkerPosition() {
      var marker = new _marker2.default(this.color, this.scale);
      this.innerWheel.innerHTML = marker.insert();
    }
  }, {
    key: 'render',
    value: function render() {
      var marker = new _marker2.default(this.color, this.scale);
      this.tag.style = '\n      position: absolute;\n      border-radius: 50%;\n      background: white;\n      width: ' + this.scale + ';\n      padding-top: ' + this.scale + ';';
      this.tag.innerHTML = '\n      <div>\n          <div\n            style="\n              position: absolute;\n              margin-top: -100%;\n              width: 100%;\n              height: 100%;\n              ' + (0, _inline_background_style2.default)(50) + ';\n              border-radius: 50%;">\n            ' + marker.insert() + '\n          </div>\n\n        <div\n          style="\n            position: absolute;\n            margin-top: -100%;\n            width: 100%;\n            height: 100%;\n            border-radius: 50%;">\n        </div>\n        ';
      this.innerWheel = this.tag.firstElementChild.firstElementChild;
      this.scrim = this.tag.lastChild;
    }
  }], [{
    key: 'addToPage',
    value: function addToPage(wheelTag, cssColor) {
      var color = _hsl2.default.parse(cssColor);
      var scale = wheelTag.style.width ? wheelTag.style.width : "20%";
      var wheel = new Wheel(wheelTag, color, scale);

      wheel.render();
      wheel.clickAndDragMarker();
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
var inlineBackgroundStyle = function inlineBackgroundStyle(lightness) {
  return "\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      hsla(0, 0%, " + lightness + "%, 1),\n      hsla(0, 0%, " + lightness + "%, .8),\n      hsla(0, 0%, " + lightness + "%, .6),\n      hsla(0, 0%, " + lightness + "%, .4),\n      hsla(0, 0%, " + lightness + "%, .2),\n      hsla(0, 0%, " + lightness + "%, 0) 80%),\n    radial-gradient(\n      ellipse at 0% 50%,\n      hsla(180, 100%, " + lightness + "%, .5),\n      hsla(180, 100%, " + lightness + "%, .2),\n      hsla(180, 100%, " + lightness + "%, .0) 20%),\n    radial-gradient(\n      ellipse at 50% 100%,\n      hsla(90, 100%, " + lightness + "%, .6),\n      hsla(90, 100%, " + lightness + "%, .2),\n      hsla(90, 100%, " + lightness + "%, .0) 20%),\n    radial-gradient(\n      ellipse at 75% 93%,\n      hsla(60, 100%, " + lightness + "%, .4),\n      hsla(60, 100%, " + lightness + "%, .2),\n      hsla(60, 100%, " + lightness + "%, .0) 20%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .6),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 75%,\n      hsla(30, 100%, " + lightness + "%, 1),\n      hsla(30, 100%, " + lightness + "%, .7),\n      hsla(30, 100%, " + lightness + "%, .4),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 93%,\n      hsla(60, 100%, " + lightness + "%, 1),\n      hsla(60, 100%, " + lightness + "%, .7),\n      hsla(60, 100%, " + lightness + "%, .4),\n      hsla(60, 100%, " + lightness + "%, .2),\n      hsla(60, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 100%,\n      hsla(90, 100%, " + lightness + "%, 1),\n      hsla(90, 100%, " + lightness + "%, .7),\n      hsla(90, 100%, " + lightness + "%, .4),\n      hsla(90, 100%, " + lightness + "%, .2),\n      hsla(90, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 93%,\n      hsla(120, 100%, " + lightness + "%, 1),\n      hsla(120, 100%, " + lightness + "%, .6),\n      hsla(120, 100%, " + lightness + "%, .4),\n      hsla(120, 100%, " + lightness + "%, .2),\n      hsla(120, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 75%,\n      hsla(150, 100%, " + lightness + "%, 1),\n      hsla(150, 100%, " + lightness + "%, .8),\n      hsla(150, 100%, " + lightness + "%, .5),\n      hsla(150, 100%, " + lightness + "%, .3),\n      hsla(150, 100%, " + lightness + "%, .2),\n      hsla(150, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 0% 50%,\n      hsla(180, 100%, " + lightness + "%, 1),\n      hsla(180, 100%, " + lightness + "%, .8),\n      hsla(180, 100%, " + lightness + "%, .4),\n      hsla(180, 100%, " + lightness + "%, .2),\n      hsla(180, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 25%,\n      hsla(210, 100%, " + lightness + "%, 1),\n      hsla(210, 100%, " + lightness + "%, .7),\n      hsla(210, 100%, " + lightness + "%, .4),\n      hsla(210, 100%, " + lightness + "%, .2),\n      hsla(210, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 7%,\n      hsla(240, 100%, " + lightness + "%, 1),\n      hsla(240, 100%, " + lightness + "%, .8),\n      hsla(240, 100%, " + lightness + "%, .4),\n      hsla(240, 100%, " + lightness + "%, .2),\n      hsla(240, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 0%,\n      hsla(270, 100%, " + lightness + "%, 1),\n      hsla(270, 100%, " + lightness + "%, .7),\n      hsla(270, 100%, " + lightness + "%, .4),\n      hsla(270, 100%, " + lightness + "%, .2),\n      hsla(270, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 7%,\n      hsla(300, 100%, " + lightness + "%, 1),\n      hsla(300, 100%, " + lightness + "%, .7),\n      hsla(300, 100%, " + lightness + "%, .4),\n      hsla(300, 100%, " + lightness + "%, .2),\n      hsla(300, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 25%,\n      hsla(330, 100%, " + lightness + "%, 1),\n      hsla(330, 100%, " + lightness + "%, .7),\n      hsla(330, 100%, " + lightness + "%, .4),\n      hsla(330, 100%, " + lightness + "%, .2),\n      hsla(330, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .7),\n      hsla(0, 100%, " + lightness + "%, .4),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%);";
};

exports.default = inlineBackgroundStyle;

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
  function Marker(color, wheelScale) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.wheelScale = wheelScale;
  }

  _createClass(Marker, [{
    key: 'insert',
    value: function insert() {
      var position = this.color.toXYCoordinates();
      position.x = position.x * 50 + 46;
      position.y = position.y * 50 + 46;

      return '\n      <div id="marker"\n        style="\n        position: absolute;\n        left: ' + position.x + '%;\n        top: ' + position.y + '%;\n        width: ' + this.scale() + this.scaleType() + ';\n        padding-top: ' + this.scale() + this.scaleType() + ';\n        background: ' + this.color.toString() + ';\n        border: 2px solid black;\n        border-radius: 50%;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;">\n      </div>\n      ';
    }
  }, {
    key: 'percentSize',
    value: function percentSize() {
      if (this.scaleType() === "%") {
        return scale();
      }
      return parseInt(this.wheelScale.match(/\d+/)) / scale() * 100;
    }
  }, {
    key: 'scaleType',
    value: function scaleType() {
      if (this.wheelScale.slice(-1) === 'x') {
        return 'px';
      }
      return '%';
    }
  }, {
    key: 'scale',
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

/***/ })
/******/ ]);
//# sourceMappingURL=colorwheel.js.map