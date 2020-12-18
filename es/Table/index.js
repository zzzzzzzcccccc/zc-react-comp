import React from 'react';
import classNames from 'classnames';
import config from './conf';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './index.css';
var cssPrefix = config.cssPrefix;

var Table = function Table(_ref) {
  var dataSource = _ref.dataSource,
    columns = _ref.columns,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'normal' : _ref$size,
    rowKey = _ref.rowKey;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(cssPrefix, ''.concat(cssPrefix, '-').concat(size)),
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classNames(''.concat(cssPrefix, '-info')),
      },
      /*#__PURE__*/ React.createElement(TableHeader, {
        columns: columns,
      }),
      /*#__PURE__*/ React.createElement(TableBody, {
        dataSource: dataSource,
        columns: columns,
        rowKey: rowKey,
      }),
    ),
  );
};

export default Table;
