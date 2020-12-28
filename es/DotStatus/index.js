import React from 'react';
import classNames from 'classnames';
import "./index.css";
var cssPrefix = 'r-zc-dot-status';

var DotStatus = function DotStatus(_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(className, "".concat(cssPrefix), "".concat(cssPrefix, "-").concat(type)),
    style: style
  }, children);
};

export default DotStatus;