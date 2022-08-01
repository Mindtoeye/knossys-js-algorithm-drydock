"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _operationsbase = _interopRequireDefault(require("./operationsbase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 *
 */
var SortOperations = /*#__PURE__*/function (_OperationsBase) {
  _inherits(SortOperations, _OperationsBase);

  var _super = _createSuper(SortOperations);

  /**
   * 
   */
  function SortOperations() {
    var _this;

    _classCallCheck(this, SortOperations);

    _this = _super.call(this);

    _this.setName("SortOperations");

    _this.addOperation("sortAZ");

    _this.addOperation("sortZA");

    _this.addOperation("sortNumeric");

    _this.addOperation("sortReverse");

    return _this;
  }
  /**
   * 
   */


  _createClass(SortOperations, [{
    key: "sortAZ",
    value: function sortAZ(aList, aSortBy) {
      console.log("sortAZ (" + aList.length + "," + aSortBy + ")");

      if (aSortBy == null || aSortBy == undefined) {
        aList.sort(function (a, b) {
          return a.localeCompare(b, 'en', {
            ignorePunctuation: true
          });
        });
      } else {
        aList.sort(function (a, b) {
          return a[aSortBy].localeCompare(b[aSortBy], 'en', {
            ignorePunctuation: true
          });
        });
      }

      return aList;
    }
    /**
     * see sort
     */

  }, {
    key: "sortZA",
    value: function sortZA(aList, aSortBy) {
      console.log("sortZA (" + aList.length + "," + aSortBy + ")");
      var pre = this.sortAZ(aList, aSortBy);
      return pre.reverse();
    }
    /**
     * 
     */

  }, {
    key: "sortNumeric",
    value: function sortNumeric(aList, aSortBy) {
      console.log("sortNumeric (" + aList.length + "," + aSortBy + ")");

      if (aSortBy == null || aSortBy == undefined) {
        aList.sort(function (a, b) {
          return a - b;
        });
      } else {
        aList.sort(function (a, b) {
          return a[aSortBy] - b[aSortBy];
        });
      }

      return aList;
    }
    /**
     * see sort
     */

  }, {
    key: "sortNumericReverse",
    value: function sortNumericReverse(aList, aSortBy) {
      console.log("sortNumericReverse (" + aList.length + "," + aSortBy + ")");
      var pre = this.sortNumeric(aList, aSortBy);
      return pre.reverse();
    }
  }]);

  return SortOperations;
}(_operationsbase["default"]);

var _default = SortOperations;
exports["default"] = _default;