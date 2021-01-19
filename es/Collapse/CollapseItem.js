function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

import React from 'react';
import classNames from 'classnames';
var cssPrefix = 'r-zc-collapse-item';

var CollapseItem = function CollapseItem(_ref) {
  var className = _ref.className,
    style = _ref.style,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    multiple = _ref.multiple,
    value = _ref.value,
    actualValue = _ref.actualValue,
    updateActualValue = _ref.updateActualValue,
    onToggle = _ref.onToggle;
  var isActive = actualValue.indexOf(value) > -1;

  var handleClickTitle = function handleClickTitle(e) {
    if (disabled) {
      return;
    }

    if (multiple) {
      updateActualValue(
        isActive
          ? _toConsumableArray(actualValue).filter(function(v) {
              return v !== value;
            })
          : [].concat(_toConsumableArray(actualValue), [value]),
      );
    } else {
      updateActualValue(isActive ? [] : [value]);
    }

    onToggle && onToggle(!isActive, value, e);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(
        cssPrefix,
        isActive && ''.concat(cssPrefix, '-active'),
        disabled && ''.concat(cssPrefix, '-disabled'),
        className,
      ),
      style: style,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(cssPrefix, '-header'),
        onClick: handleClickTitle,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(cssPrefix, '-header-title'),
        },
        title,
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(cssPrefix, '-body'),
      },
      children,
    ),
  );
};

export default CollapseItem;
