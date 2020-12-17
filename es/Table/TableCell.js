import React from 'react';
import classNames from 'classnames';
import config from './conf';
var cssPrefix = config.cssPrefix;

var TableCell = function TableCell(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'body' : _ref$type,
    children = _ref.children;
  return /*#__PURE__*/ React.createElement(
    'span',
    {
      className: classNames(
        ''.concat(cssPrefix, '-cell'),
        ''.concat(cssPrefix, '-cell-').concat(type),
      ),
    },
    children,
  );
};

export default TableCell;
