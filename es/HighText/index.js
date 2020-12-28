import React from 'react';
import varStyle from '../assets/styles/varStyle';

var HighText = function HighText(_ref) {
  var children = _ref.children,
      _ref$activeColor = _ref.activeColor,
      activeColor = _ref$activeColor === void 0 ? varStyle.dangerColor : _ref$activeColor,
      _ref$high = _ref.high,
      high = _ref$high === void 0 ? '' : _ref$high;

  if (!children || typeof children !== 'string') {
    return null;
  }

  return /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: children.replace(new RegExp("(".concat(high, ")"), 'g'), '<span style="color: ' + activeColor + '">$1</span>')
    }
  });
};

export default HighText;