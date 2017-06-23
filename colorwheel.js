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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

var _radians = __webpack_require__(4);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Wheel = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function () {
  var wheelTags = document.getElementsByTagName("colorwheel");
  for (var i = 0; i < wheelTags.length; ++i) {
    var wheel = Wheel.addToPage(wheelTags[i]);
  };
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // TODO getCurrentColor()
//  returns {HEX: "#193843",
// HSL: "251,50,50",
// RGB: "143,143,413",
// }
// TODO setColor(colorFormat, num or string [, num, num])
// TODO slider for lightness
// TODO set defaults if user does not pass in width or default color

var _polarcoordinates = __webpack_require__(3);

var _polarcoordinates2 = _interopRequireDefault(_polarcoordinates);

var _inline_background_style = __webpack_require__(5);

var _inline_background_style2 = _interopRequireDefault(_inline_background_style);

var _hsl = __webpack_require__(6);

var _hsl2 = _interopRequireDefault(_hsl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wheel = function () {
  function Wheel(tag, image, color, scale) {
    _classCallCheck(this, Wheel);

    this.tag = tag;
    this.image = image;
    this.color = color;
    this.scale = scale;
  }

  _createClass(Wheel, [{
    key: 'marker',
    value: function marker() {
      var markerScale = this.markerScale();
      return '\n      <div style="\n          width: ' + markerScale + ';\n          padding-top: ' + markerScale + ';\n          background: ' + this.formatColorValues(this.color) + ';\n          border: 2px solid black;\n          position: absolute;\n          ' + this.unselectableCircle() + '">\n      </div>\n      ';
    }
  }, {
    key: 'markerScale',
    value: function markerScale() {
      var scaleType = this.scale.slice(-1);
      if (scaleType === "x") {
        return parseInt(this.scale.slice(0, -2)) / 12 + 'px';
      } else if (scaleType === "%") {
        return '6%';
      }
      throw "Width of Wheel must be defined in pixels or percentage";
    }
  }, {
    key: 'unselectableCircle',
    value: function unselectableCircle() {
      return 'border-radius: 50%;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;';
    }
  }, {
    key: 'watchMouse',
    value: function watchMouse() {
      this.tag.addEventListener("mousemove", function () {
        var colorWheel = event.target.offsetParent;
        var radius = colorWheel.clientWidth / 2;
        var coord = _polarcoordinates2.default.from(event.pageX - radius, event.pageY + radius);
        var originX = colorWheel.offsetLeft + radius;
        var originY = colorWheel.offsetTop + radius;
        var origin = [originX, originY];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.tag.innerHTML = '\n      <div\n        style="\n          position: relative;\n          border-radius: 50%;\n          width: ' + this.scale + ';\n          padding-top: ' + this.scale + '%;">\n          <div\n            style="\n              position: absolute;\n              display: inline-block;\n              width: 100%;\n              height: 100%;\n              padding-top: ' + this.scale + ';\n              ' + (0, _inline_background_style2.default)(50) + ';\n              border-radius: 50%;"\n            ></div>\n        ' + this.marker() + '\n      </div>\n    ';
    }
  }], [{
    key: 'addToPage',
    value: function addToPage(wheelTag) {
      var image = wheelTag.hasAttribute("src") ? wheelTag.getAttribute("src") : './assets/HSL_Wheel.png';
      var colorString = wheelTag.hasAttribute("defaultColor") ? wheelTag.getAttribute("defaultColor") : "hsl(215, 50%, 50%)";
      color = _hsl2.default.parseColor(colorString);
      var scale = wheelTag.style.width ? wheelTag.style.width : "20%";
      var wheel = new Wheel(wheelTag, image, color, scale);

      wheel.render();
      wheel.watchMouse();
    }
  }]);

  return Wheel;
}();

module.exports = Wheel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _degrees = __webpack_require__(0);

var _degrees2 = _interopRequireDefault(_degrees);

var _radians = __webpack_require__(4);

var _radians2 = _interopRequireDefault(_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PolarCoordinates = function () {
  function PolarCoordinates(angle, distanceFromOrigin) {
    _classCallCheck(this, PolarCoordinates);

    this.angle = angle;
    this.distanceFromOrigin = distanceFromOrigin;
  }

  _createClass(PolarCoordinates, null, [{
    key: "hypotenuse",
    value: function hypotenuse(x, y) {
      return Math.sqrt(x * x + y * y);
    }
  }, {
    key: "toXYCoordinates",
    value: function toXYCoordinates(degrees, distanceFromOrigin) {
      var angle = new _degrees2.default(degrees);
      var radians = angle.toRadians();
      var x = Math.cos(radians) * distanceFromOrigin;
      var y = Math.sin(radians) * distanceFromOrigin;
      return [x, y];
    }
  }, {
    key: "from",
    value: function from(x, y) {
      var distanceFromOrigin = this.hypotenuse(x, y);
      var angle = _radians2.default.from(x, distanceFromOrigin);
      angle = angle.toDegrees();
      angle = y < 0 ? angle : angle.negated();
      return new PolarCoordinates(angle, distanceFromOrigin);
    }
  }]);

  return PolarCoordinates;
}();

module.exports = PolarCoordinates;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _degrees = __webpack_require__(0);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var inlineBackgroundStyle = function inlineBackgroundStyle(lightness) {
  return "background:\n    radial-gradient(\n      circle at 50% 50%,\n      hsla(0, 0%, " + lightness + "%, 1),\n      hsla(0, 0%, " + lightness + "%, .8),\n      hsla(0, 0%, " + lightness + "%, .6),\n      hsla(0, 0%, " + lightness + "%, .4),\n      hsla(0, 0%, " + lightness + "%, .2),\n      hsla(0, 0%, " + lightness + "%, 0) 80%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .6),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 75%,\n      hsla(30, 100%, " + lightness + "%, 1),\n      hsla(30, 100%, " + lightness + "%, .7),\n      hsla(30, 100%, " + lightness + "%, .4),\n      hsla(30, 100%, " + lightness + "%, .2),\n      hsla(30, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 93%,\n      hsla(60, 100%, " + lightness + "%, 1),\n      hsla(60, 100%, " + lightness + "%, .7),\n      hsla(60, 100%, " + lightness + "%, .4),\n      hsla(60, 100%, " + lightness + "%, .2),\n      hsla(60, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 100%,\n      hsla(90, 100%, " + lightness + "%, 1),\n      hsla(90, 100%, " + lightness + "%, .7),\n      hsla(90, 100%, " + lightness + "%, .4),\n      hsla(90, 100%, " + lightness + "%, .2),\n      hsla(90, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 93%,\n      hsla(120, 100%, " + lightness + "%, 1),\n      hsla(120, 100%, " + lightness + "%, .7),\n      hsla(120, 100%, " + lightness + "%, .4),\n      hsla(120, 100%, " + lightness + "%, .2),\n      hsla(120, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 75%,\n      hsla(150, 100%, " + lightness + "%, 1),\n      hsla(150, 100%, " + lightness + "%, .7),\n      hsla(150, 100%, " + lightness + "%, .4),\n      hsla(150, 100%, " + lightness + "%, .2),\n      hsla(150, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 0% 50%,\n      hsla(180, 100%, " + lightness + "%, 1),\n      hsla(180, 100%, " + lightness + "%, .7),\n      hsla(180, 100%, " + lightness + "%, .4),\n      hsla(180, 100%, " + lightness + "%, .2),\n      hsla(180, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 7% 25%,\n      hsla(210, 100%, " + lightness + "%, 1),\n      hsla(210, 100%, " + lightness + "%, .7),\n      hsla(210, 100%, " + lightness + "%, .4),\n      hsla(210, 100%, " + lightness + "%, .2),\n      hsla(210, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 25% 7%,\n      hsla(240, 100%, " + lightness + "%, 1),\n      hsla(240, 100%, " + lightness + "%, .7),\n      hsla(240, 100%, " + lightness + "%, .4),\n      hsla(240, 100%, " + lightness + "%, .2),\n      hsla(240, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 50% 0%,\n      hsla(270, 100%, " + lightness + "%, 1),\n      hsla(270, 100%, " + lightness + "%, .7),\n      hsla(270, 100%, " + lightness + "%, .4),\n      hsla(270, 100%, " + lightness + "%, .2),\n      hsla(270, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 75% 7%,\n      hsla(300, 100%, " + lightness + "%, 1),\n      hsla(300, 100%, " + lightness + "%, .7),\n      hsla(300, 100%, " + lightness + "%, .4),\n      hsla(300, 100%, " + lightness + "%, .2),\n      hsla(300, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 93% 25%,\n      hsla(330, 100%, " + lightness + "%, 1),\n      hsla(330, 100%, " + lightness + "%, .7),\n      hsla(330, 100%, " + lightness + "%, .4),\n      hsla(330, 100%, " + lightness + "%, .2),\n      hsla(330, 100%, " + lightness + "%, .0) 40%),\n    radial-gradient(\n      ellipse at 100% 50%,\n      hsla(0, 100%, " + lightness + "%, 1),\n      hsla(0, 100%, " + lightness + "%, .7),\n      hsla(0, 100%, " + lightness + "%, .4),\n      hsla(0, 100%, " + lightness + "%, .2),\n      hsla(0, 100%, " + lightness + "%, .0) 40%);";
};

exports.default = inlineBackgroundStyle;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (5:0)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m parsingException\n \u001b[90m 4 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mHSL\u001b[39m {\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 6 | \u001b[39m  constructor(hue\u001b[33m,\u001b[39m saturation\u001b[33m,\u001b[39m lighness){\n \u001b[90m 7 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mh \u001b[33m=\u001b[39m h\u001b[33m;\u001b[39m\n \u001b[90m 8 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39ms \u001b[33m=\u001b[39m s\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ })
/******/ ]);
//# sourceMappingURL=colorwheel.js.map