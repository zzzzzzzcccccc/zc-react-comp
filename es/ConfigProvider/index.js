import React, { createContext } from 'react';
export var ConfigContext = /*#__PURE__*/ createContext(undefined);

var ConfigProvider = function ConfigProvider(_ref) {
  var _ref$local = _ref.local,
    local = _ref$local === void 0 ? undefined : _ref$local,
    children = _ref.children;
  var context = {
    local: local,
  };
  return /*#__PURE__*/ React.createElement(
    ConfigContext.Provider,
    {
      value: context,
    },
    children,
  );
};

export default ConfigProvider;
