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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Wheel = __webpack_require__(5);

document.addEventListener("DOMContentLoaded", function () {
  var wheelTags = document.getElementsByTagName("colorwheel");
  for (var i = 0; i < wheelTags.length; ++i) {
    var wheel = Wheel.addToPage(wheelTags[i]);
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _degrees = __webpack_require__(2);

var _degrees2 = _interopRequireDefault(_degrees);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radians = __webpack_require__(3);
var HSL = __webpack_require__(7);
var CartesianCoordinates = __webpack_require__(4);

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
      return new HSL(hue, saturation, lightness);
    }
  }, {
    key: "toCartesianCoordinates",
    value: function toCartesianCoordinates() {
      var x = this.angle.cos() * this.distanceFromOrigin;
      var y = this.angle.sin() * this.distanceFromOrigin;
      return new CartesianCoordinates(x, y);
    }
  }]);

  return PolarCoordinates;
}();

exports.default = PolarCoordinates;
// module.exports = PolarCoordinates;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radians = __webpack_require__(3);

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

exports.default = Degrees;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _degrees = __webpack_require__(2);

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

module.exports = Radians;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polarcoordinates = __webpack_require__(1);

var _polarcoordinates2 = _interopRequireDefault(_polarcoordinates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radians = __webpack_require__(3);

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
      var angle = new Radians(Math.atan2(this.y, this.x));
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

module.exports = CartesianCoordinates;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polarcoordinates = __webpack_require__(1);

var _polarcoordinates2 = _interopRequireDefault(_polarcoordinates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartesianCoordinates = __webpack_require__(4);
var inlineBackgroundStyle = __webpack_require__(6);
var HSL = __webpack_require__(7);
var Marker = __webpack_require__(8);

var Wheel = function () {
  function Wheel(tag, color, scale) {
    _classCallCheck(this, Wheel);

    this.tag = tag;
    this.color = color;
    this.scale = scale;
  }

  _createClass(Wheel, [{
    key: 'getColor',
    value: function getColor() {
      return this.color;
    }
  }, {
    key: 'setColor',
    value: function setColor(newColor) {
      this.color = newColor;
    }
  }, {
    key: 'watchMouse',
    value: function watchMouse() {
      var _this = this;

      this.innerWheel.addEventListener("click", function () {
        var radius = event.target.clientWidth / 2;
        var x = event.offsetX;
        var y = event.offsetY;
        x /= radius;
        y /= radius;
        x -= 1;
        y -= 1;
        var position = new CartesianCoordinates(x, y);
        _this.color = position.toColor(_this.color.l);
        _this.updateMarkerPosition();
      });
    }
  }, {
    key: 'updateMarkerPosition',
    value: function updateMarkerPosition() {
      var marker = new Marker(this.color, this.scale);
      this.innerWheel.innerHTML = marker.insert();
    }
  }, {
    key: 'render',
    value: function render() {
      var marker = new Marker(this.color, this.scale);
      this.tag.style = '\n      position: absolute;\n      border-radius: 50%;\n      background: white;\n      width: ' + this.scale + ';\n      padding-top: ' + this.scale + ';';
      this.tag.innerHTML = '\n      <div>\n          <div\n            id="inner-wheel"\n            style="\n              position: absolute;\n              margin-top: -100%;\n              width: 100%;\n              height: 100%;\n              ' + inlineBackgroundStyle(50) + ';\n              border-radius: 50%;">\n        ' + marker.insert() + '\n        </div>\n      </div>\n        ';
      this.innerWheel = this.tag.firstElementChild.firstElementChild;
      this.slider = this.tag.lastChild;
    }
  }], [{
    key: 'addToPage',
    value: function addToPage(wheelTag) {
      var colorString = wheelTag.hasAttribute("defaultColor") ? wheelTag.getAttribute("defaultColor") : "hsl(60, 50%, 50%)";
      var color = HSL.parse(colorString);
      var scale = wheelTag.style.width ? wheelTag.style.width : "20%";
      var wheel = new Wheel(wheelTag, color, scale);

      wheel.render();
      wheel.watchMouse();
    }
  }]);

  return Wheel;
}();

module.exports = Wheel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inlineBackgroundStyle = function inlineBackgroundStyle(lightness) {
  return "\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      hsla(0, 0%, " + lightness + "%, 1),\n      hsla(0, 0%, " + lightness + "%, .8),\n      hsla(0, 0%, " + lightness + "%, .6),\n      hsla(0, 0%, " + lightness + "%, .4),\n      hsla(0, 0%, " + lightness + "%, .2),\n      hsla(0, 0%, " + lightness + "%, 0) 80%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .6),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 75%,\n      hsla(30, 100%, " + lightness + "%, 1),\n      hsla(30, 100%, " + lightness + "%, .7),\n      hsla(30, 100%, " + lightness + "%, .4),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 93%,\n      hsla(60, 100%, " + lightness + "%, 1),\n      hsla(60, 100%, " + lightness + "%, .7),\n      hsla(60, 100%, " + lightness + "%, .4),\n      hsla(60, 100%, " + lightness + "%, .2),\n      hsla(60, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 100%,\n      hsla(90, 100%, " + lightness + "%, 1),\n      hsla(90, 100%, " + lightness + "%, .7),\n      hsla(90, 100%, " + lightness + "%, .4),\n      hsla(90, 100%, " + lightness + "%, .2),\n      hsla(90, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 93%,\n      hsla(120, 100%, " + lightness + "%, 1),\n      hsla(120, 100%, " + lightness + "%, .6),\n      hsla(120, 100%, " + lightness + "%, .4),\n      hsla(120, 100%, " + lightness + "%, .2),\n      hsla(120, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 75%,\n      hsla(150, 100%, " + lightness + "%, 1),\n      hsla(150, 100%, " + lightness + "%, .8),\n      hsla(150, 100%, " + lightness + "%, .5),\n      hsla(150, 100%, " + lightness + "%, .3),\n      hsla(150, 100%, " + lightness + "%, .2),\n      hsla(150, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 0% 50%,\n      hsla(180, 100%, " + lightness + "%, 1),\n      hsla(180, 100%, " + lightness + "%, .8),\n      hsla(180, 100%, " + lightness + "%, .4),\n      hsla(180, 100%, " + lightness + "%, .2),\n      hsla(180, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 25%,\n      hsla(210, 100%, " + lightness + "%, 1),\n      hsla(210, 100%, " + lightness + "%, .7),\n      hsla(210, 100%, " + lightness + "%, .4),\n      hsla(210, 100%, " + lightness + "%, .2),\n      hsla(210, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 7%,\n      hsla(240, 100%, " + lightness + "%, 1),\n      hsla(240, 100%, " + lightness + "%, .8),\n      hsla(240, 100%, " + lightness + "%, .4),\n      hsla(240, 100%, " + lightness + "%, .2),\n      hsla(240, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 0%,\n      hsla(270, 100%, " + lightness + "%, 1),\n      hsla(270, 100%, " + lightness + "%, .7),\n      hsla(270, 100%, " + lightness + "%, .4),\n      hsla(270, 100%, " + lightness + "%, .2),\n      hsla(270, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 7%,\n      hsla(300, 100%, " + lightness + "%, 1),\n      hsla(300, 100%, " + lightness + "%, .7),\n      hsla(300, 100%, " + lightness + "%, .4),\n      hsla(300, 100%, " + lightness + "%, .2),\n      hsla(300, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 25%,\n      hsla(330, 100%, " + lightness + "%, 1),\n      hsla(330, 100%, " + lightness + "%, .7),\n      hsla(330, 100%, " + lightness + "%, .4),\n      hsla(330, 100%, " + lightness + "%, .2),\n      hsla(330, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .7),\n      hsla(0, 100%, " + lightness + "%, .4),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%);";
};

module.exports = inlineBackgroundStyle;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //TODO create hex and rgb classes which have convertToHSL and add convertToRGB and convertToHex methods to HSL class


var _degrees = __webpack_require__(2);

var _degrees2 = _interopRequireDefault(_degrees);

var _polarcoordinates = __webpack_require__(1);

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

module.exports = HSL;

/***/ }),
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
    key: 'insert',
    value: function insert() {
      var position = this.color.toXYCoordinates();
      position.x = position.x * 50 + 50;
      position.y = position.y * 50 + 50;

      return '\n      <div style="\n        position: absolute;\n        left: ' + position.x + '%;\n        top: ' + position.y + '%;\n        width: ' + this.scale() + this.scaleType() + ';\n        padding-top: ' + this.scale() + this.scaleType() + ';\n        background: ' + this.color.toString() + ';\n        border: 2px solid black;\n        border-radius: 0 50% 50%;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;">\n      </div>\n      ';
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

module.exports = Marker;

/***/ })
/******/ ]);
//# sourceMappingURL=colorwheel.js.map