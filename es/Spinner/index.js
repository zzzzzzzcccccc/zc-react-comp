import React from 'react';
import classNames from 'classnames';
import varStyle from '../assets/styles/varStyle';
import RoundLine from './item/RoundLine';
import RoundPoint from './item/RoundPoint';
import "./index.css";
var cssPrefix = 'r-zc-spinner';

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'line' : _ref$type,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? varStyle.primaryColor : _ref$color,
      children = _ref.children;

  var filterSvg = function filterSvg() {
    switch (type) {
      case 'line':
        return /*#__PURE__*/React.createElement(RoundLine, {
          color: color,
          style: {
            fontSize: size || undefined
          }
        });

      case 'point':
        return /*#__PURE__*/React.createElement(RoundPoint, {
          color: color,
          style: {
            fontSize: size || undefined
          }
        });

      default:
        return null;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cssPrefix, className),
    style: style
  }, filterSvg(), children && /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-info")
  }, children));
};

export default Spinner;