function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { cssPrefix } from './index';
import { GroupContext } from './CheckboxGroup';
import "./check-box.css";

var CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      children = _ref.children,
      onChange = _ref.onChange,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
      value = _ref.value;
  var groupContext = useContext(GroupContext);

  var _useState = useState(groupContext ? groupContext.checkedValue.indexOf(value) > -1 : checked),
      _useState2 = _slicedToArray(_useState, 2),
      actualChecked = _useState2[0],
      setActualChecked = _useState2[1];

  var handleChange = function handleChange(e) {
    groupContext && groupContext.onChecked && groupContext.onChecked(e, value);
    setActualChecked(e.target.checked);
    onChange && onChange(e);
  };

  useEffect(function () {
    if (groupContext && groupContext.checkedValue) {
      setActualChecked(groupContext.checkedValue.indexOf(value) > -1);
    }
  }, [groupContext]);
  useEffect(function () {
    if (!groupContext) {
      setActualChecked(checked);
    }
  }, [checked]);
  return /*#__PURE__*/React.createElement("label", {
    className: classNames(cssPrefix, indeterminate && "".concat(cssPrefix, "-indeterminate"), actualChecked && "".concat(cssPrefix, "-active"), (disabled || groupContext && groupContext.disabled) && "".concat(cssPrefix, "-disabled"), className),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(cssPrefix, "-info")
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    disabled: disabled || groupContext && groupContext.disabled,
    checked: actualChecked,
    onChange: handleChange
  })), children && /*#__PURE__*/React.createElement("span", {
    className: "".concat(cssPrefix, "-inner")
  }, children));
};

export default CheckBox;