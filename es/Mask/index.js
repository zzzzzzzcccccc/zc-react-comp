import React from 'react';
import classNames from 'classnames';
import './index.css';
var cssPrefix = 'r-zc-mask';

var Mask = function Mask(_ref) {
  var className = _ref.className,
    style = _ref.style,
    children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(cssPrefix, className),
      style: style,
      onClick: onClick,
    },
    children,
  );
};

export default Mask;
