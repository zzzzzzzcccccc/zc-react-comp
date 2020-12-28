import React from 'react';
import classNames from 'classnames';
import "./index.css";
var cssPrefix = 'r-zc-tag';

var Tag = function Tag(_ref) {
  var className = _ref.className,
      style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      _ref$plain = _ref.plain,
      plain = _ref$plain === void 0 ? false : _ref$plain,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      children = _ref.children,
      onClick = _ref.onClick,
      onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cssPrefix, "".concat(cssPrefix).concat(plain ? '-plain' : '', "-").concat(type), "".concat(cssPrefix, "-").concat(size), className),
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("span", {
    className: "".concat(cssPrefix, "-close"),
    onClick: onClose
  }, "\xD7"));
};

export default Tag;