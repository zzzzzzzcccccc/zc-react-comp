import React from 'react';
import classNames from 'classnames';
import Spinner from '../Spinner';
import "./index.css";
var cssPrefix = 'r-zc-button';

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$plain = _ref.plain,
      plain = _ref$plain === void 0 ? false : _ref$plain,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: classNames([cssPrefix, "".concat(cssPrefix).concat(plain ? '-plain' : '', "-").concat(type), "".concat(cssPrefix, "-").concat(size), disabled ? "".concat(cssPrefix, "-disabled") : '', block ? "".concat(cssPrefix, "-block") : '', loading ? "".concat(cssPrefix, "-loading") : '']),
    onClick: loading || disabled ? undefined : onClick,
    disabled: disabled
  }, loading && /*#__PURE__*/React.createElement(Spinner, {
    color: "#fff",
    style: {
      padding: '4% 4px 0 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(cssPrefix, "-info")
  }, children));
};

export default Button;