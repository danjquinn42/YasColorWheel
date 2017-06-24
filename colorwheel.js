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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radians = __webpack_require__(2);

var Degrees = function () {
  function Degrees(value) {
    _classCallCheck(this, Degrees);

    this.value = (value + 360) % 360;
  }

  _createClass(Degrees, [{
    key: "toRadians",
    value: function toRadians() {
      return new Radians(this.value * Math.PI / 180);
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

module.exports = Degrees;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Degrees = __webpack_require__(0);
var Radians = __webpack_require__(2);
var CartesianCoordinates = __webpack_require__(9);

var PolarCoordinates = function () {
  function PolarCoordinates(angle, distanceFromOrigin) {
    _classCallCheck(this, PolarCoordinates);

    this.angle = angle;
    this.distanceFromOrigin = distanceFromOrigin;
  }

  _createClass(PolarCoordinates, [{
    key: "toCartesianCoordinates",
    value: function toCartesianCoordinates() {
      var x = this.angle.cos() * this.distanceFromOrigin;
      var y = this.angle.sin() * this.distanceFromOrigin;
      return new CartesianCoordinates(x, y);
    }
  }]);

  return PolarCoordinates;
}();

module.exports = PolarCoordinates;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Degrees = __webpack_require__(0);

var Radians = function () {
  function Radians(value) {
    _classCallCheck(this, Radians);

    this.value = value;
  }

  _createClass(Radians, [{
    key: "toDegrees",
    value: function toDegrees() {
      return new Degrees(this.value * (180 / Math.PI));
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

module.exports = Radians;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Wheel = __webpack_require__(4);

document.addEventListener("DOMContentLoaded", function () {
  var wheelTags = document.getElementsByTagName("colorwheel");
  for (var i = 0; i < wheelTags.length; ++i) {
    var wheel = Wheel.addToPage(wheelTags[i]);
  };
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO getCurrentColor()
//  returns {HEX: "#193843",
// HSL: "251,50,50",
// RGB: "143,143,413",
// }
// TODO setColor(colorFormat, num or string [, num, num])
// TODO slider for lightness
// TODO set defaults if user does not pass in width or default color

var PolarCoordinates = __webpack_require__(1);
var inlineBackgroundStyle = __webpack_require__(5);
var HSL = __webpack_require__(6);
var Marker = __webpack_require__(8);

var Wheel = function () {
  function Wheel(tag, color, scale) {
    _classCallCheck(this, Wheel);

    this.tag = tag;
    this.color = color;
    this.scale = scale;
  }

  _createClass(Wheel, [{
    key: 'render',
    value: function render() {
      var marker = new Marker(this.color, this.scale);
      this.tag.style = '\n      position: absolute;\n      border-radius: 50%;\n      background: white;\n      width: ' + this.scale + ';\n      height: ' + this.scale + ';';
      this.tag.innerHTML = '\n          <div\n            style="\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              ' + inlineBackgroundStyle(50) + ';\n              border-radius: 50%;"\n            ></div>\n        ' + marker.insert() + '\n    ';
    }
  }], [{
    key: 'addToPage',
    value: function addToPage(wheelTag) {
      var colorString = wheelTag.hasAttribute("defaultColor") ? wheelTag.getAttribute("defaultColor") : "hsl(215, 50%, 50%)";
      var color = HSL.parse(colorString);
      var scale = wheelTag.style.width ? wheelTag.style.width : "20%";
      var wheel = new Wheel(wheelTag, color, scale);

      wheel.render();
    }
  }]);

  return Wheel;
}();

module.exports = Wheel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inlineBackgroundStyle = function inlineBackgroundStyle(lightness) {
  return "\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      hsla(0, 0%, " + lightness + "%, 1),\n      hsla(0, 0%, " + lightness + "%, .8),\n      hsla(0, 0%, " + lightness + "%, .6),\n      hsla(0, 0%, " + lightness + "%, .4),\n      hsla(0, 0%, " + lightness + "%, .2),\n      hsla(0, 0%, " + lightness + "%, 0) 80%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .6),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 75%,\n      hsla(30, 100%, " + lightness + "%, 1),\n      hsla(30, 100%, " + lightness + "%, .7),\n      hsla(30, 100%, " + lightness + "%, .4),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 93%,\n      hsla(60, 100%, " + lightness + "%, 1),\n      hsla(60, 100%, " + lightness + "%, .7),\n      hsla(60, 100%, " + lightness + "%, .4),\n      hsla(60, 100%, " + lightness + "%, .2),\n      hsla(60, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 100%,\n      hsla(90, 100%, " + lightness + "%, 1),\n      hsla(90, 100%, " + lightness + "%, .7),\n      hsla(90, 100%, " + lightness + "%, .4),\n      hsla(90, 100%, " + lightness + "%, .2),\n      hsla(90, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 93%,\n      hsla(120, 100%, " + lightness + "%, 1),\n      hsla(120, 100%, " + lightness + "%, .7),\n      hsla(120, 100%, " + lightness + "%, .4),\n      hsla(120, 100%, " + lightness + "%, .2),\n      hsla(120, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 75%,\n      hsla(150, 100%, " + lightness + "%, 1),\n      hsla(150, 100%, " + lightness + "%, .7),\n      hsla(150, 100%, " + lightness + "%, .4),\n      hsla(150, 100%, " + lightness + "%, .2),\n      hsla(150, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 0% 50%,\n      hsla(180, 100%, " + lightness + "%, 1),\n      hsla(180, 100%, " + lightness + "%, .7),\n      hsla(180, 100%, " + lightness + "%, .4),\n      hsla(180, 100%, " + lightness + "%, .2),\n      hsla(180, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 25%,\n      hsla(210, 100%, " + lightness + "%, 1),\n      hsla(210, 100%, " + lightness + "%, .7),\n      hsla(210, 100%, " + lightness + "%, .4),\n      hsla(210, 100%, " + lightness + "%, .2),\n      hsla(210, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 7%,\n      hsla(240, 100%, " + lightness + "%, 1),\n      hsla(240, 100%, " + lightness + "%, .7),\n      hsla(240, 100%, " + lightness + "%, .4),\n      hsla(240, 100%, " + lightness + "%, .2),\n      hsla(240, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 0%,\n      hsla(270, 100%, " + lightness + "%, 1),\n      hsla(270, 100%, " + lightness + "%, .7),\n      hsla(270, 100%, " + lightness + "%, .4),\n      hsla(270, 100%, " + lightness + "%, .2),\n      hsla(270, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 7%,\n      hsla(300, 100%, " + lightness + "%, 1),\n      hsla(300, 100%, " + lightness + "%, .7),\n      hsla(300, 100%, " + lightness + "%, .4),\n      hsla(300, 100%, " + lightness + "%, .2),\n      hsla(300, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 25%,\n      hsla(330, 100%, " + lightness + "%, 1),\n      hsla(330, 100%, " + lightness + "%, .7),\n      hsla(330, 100%, " + lightness + "%, .4),\n      hsla(330, 100%, " + lightness + "%, .2),\n      hsla(330, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .7),\n      hsla(0, 100%, " + lightness + "%, .4),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%);";
};

module.exports = inlineBackgroundStyle;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO create hex and rgb classes which have convertToHSL and add convertToRGB and convertToHex methods to HSL class
var Degrees = __webpack_require__(0);
var PolarCoordinates = __webpack_require__(1);

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
      var angle = new Degrees(this.h);
      var distanceFromOrigin = this.s / 100;
      var position = new PolarCoordinates(angle, distanceFromOrigin);
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
      var _string$match$map = string.match(/(\d)\w+/g).map(function (number) {
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

module.exports = HSL;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function () {
  function Marker(color, wheelScale) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.wheelScale = wheelScale;
  }

  _createClass(Marker, [{
    key: "insert",
    value: function insert() {
      var position = this.color.toXYCoordinates();
      position.x = position.x * 50 + 50;
      position.y = position.y * 50 + 50;

      return "\n      <div style=\"\n        position: relative;\n        left: " + position.x + "%;\n        top: " + position.y + "%;\n        width: " + this.scale() + ";\n        padding-top: " + this.scale() + ";\n        background: " + this.color.toString() + ";\n        border: 2px solid black;\n        border-radius: 50%;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\">\n      </div>\n      ";
    }
  }, {
    key: "scale",
    value: function scale() {
      var scaleType = this.wheelScale.slice(-1);
      if (scaleType === "x") {
        return parseInt(this.wheelScale.slice(0, -2)) / 13 + "px";
      } else if (scaleType === "%") {
        return '6%';
      }
    }
  }]);

  return Marker;
}();

module.exports = Marker;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartesianCoordinates = function () {
  function CartesianCoordinates(x, y) {
    _classCallCheck(this, CartesianCoordinates);

    this.x = x;
    this.y = y;
  }

  _createClass(CartesianCoordinates, [{
    key: "hypotenuse",
    value: function hypotenuse() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }]);

  return CartesianCoordinates;
}();

module.exports = CartesianCoordinates;

/***/ })
/******/ ]);
//# sourceMappingURL=colorwheel.js.map