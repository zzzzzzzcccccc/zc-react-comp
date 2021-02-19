function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import classNames from 'classnames';
var cssPrefix = 'r-zc-select-box-item';

var SelectBoxItem = function SelectBoxItem(_ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value,
      actualValue = _ref.actualValue,
      onClick = _ref.onClick,
      updateActualValue = _ref.updateActualValue,
      multiple = _ref.multiple;
  var isActive = multiple ? actualValue.indexOf(value) > -1 : value === actualValue;

  var handleClick = function handleClick(e) {
    if (disabled) {
      return;
    }

    if (multiple) {
      var copyActualValue = _toConsumableArray(actualValue);

      copyActualValue = isActive ? copyActualValue.filter(function (v) {
        return v !== value;
      }) : [].concat(_toConsumableArray(copyActualValue), [value]);
      updateActualValue(copyActualValue);
    } else {
      updateActualValue(value);
    }

    onClick && onClick(value, e);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cssPrefix, disabled && "".concat(cssPrefix, "-disabled"), isActive && "".concat(cssPrefix, "-active"), className),
    style: style,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(cssPrefix, "-info")
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: isActive ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-ok")
  }), /*#__PURE__*/React.createElement("svg", {
    className: "".concat(cssPrefix, "-svg"),
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M414.340741 810.666667c-14.506667 0-28.254815-6.352593-37.736297-17.351111L133.783704 510.672593c-7.68-8.912593-6.637037-22.376296 2.275555-30.056297 8.912593-7.68 22.376296-6.637037 30.056297 2.275556l242.915555 282.642963c1.896296 2.180741 4.171852 2.465185 5.404445 2.465185 1.232593 0 3.034074-0.379259 4.361481-1.896296L859.022222 249.268148c7.68-9.007407 21.143704-10.05037 30.056297-2.37037 9.007407 7.68 10.05037 21.143704 2.37037 30.056296L451.318519 793.78963c-9.102222 10.714074-22.565926 16.877037-36.788149 16.877037h-0.189629z",
    fill: "#fff"
  }))));
};

export default SelectBoxItem;