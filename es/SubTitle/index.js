import React from 'react';
import classNames from 'classnames';
import './index.css';
var cssPrefix = 'r-zc-subtitle';

var SubTitle = function SubTitle(_ref) {
  var className = _ref.className,
    style = _ref.style,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'line' : _ref$type,
    _ref$shadow = _ref.shadow,
    shadow = _ref$shadow === void 0 ? false : _ref$shadow,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? false : _ref$border,
    children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(cssPrefix, className),
      style: style,
      onClick: onClick,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classNames(
          ''.concat(cssPrefix, '-info'),
          type && ''.concat(cssPrefix, '-').concat(type),
          shadow && ''.concat(cssPrefix, '-shadow'),
        ),
      },
      children,
    ),
    border &&
      /*#__PURE__*/ React.createElement('div', {
        className: ''.concat(cssPrefix, '-border'),
      }),
  );
};

export default SubTitle;
