function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import classNames from 'classnames';
import "./index.css";
var cssPrefix = 'r-zc-select-box';

var SelectBox = function SelectBox(_ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue;

  var _useState = useState(multiple ? defaultValue || [] : defaultValue || defaultValue === 0 ? defaultValue : undefined),
      _useState2 = _slicedToArray(_useState, 2),
      actualValue = _useState2[0],
      setActualValue = _useState2[1];

  var updateActualValue = function updateActualValue(val) {
    setActualValue(val);
    onChange && onChange(val);
  };

  var renderChild = function renderChild() {
    if (!children) {
      return null;
    }

    return React.Children.map(children, function (child) {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        return /*#__PURE__*/React.cloneElement(child, {
          actualValue: actualValue,
          multiple: multiple,
          updateActualValue: updateActualValue
        });
      } else {
        return child;
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cssPrefix, disabled && "".concat(cssPrefix, "-disabled"), "".concat(cssPrefix, "-").concat(size), className),
    style: style
  }, renderChild());
};

export default SelectBox;