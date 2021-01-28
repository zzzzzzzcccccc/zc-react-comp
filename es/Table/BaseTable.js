import React from 'react';
import classNames from 'classnames';
import { cssPrefix } from './index';
import { convertToRows } from './tableUitls';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './index.css';

var BaseTable = function BaseTable(_ref) {
  var className = _ref.className,
    style = _ref.style,
    columns = _ref.columns,
    dataSource = _ref.dataSource,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'middle' : _ref$size,
    _ref$rowKey = _ref.rowKey,
    rowKey = _ref$rowKey === void 0 ? '' : _ref$rowKey,
    scroll = _ref.scroll,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? false : _ref$bordered;

  var _convertToRows = convertToRows(columns),
    originColumns = _convertToRows.originColumns,
    genColumns = _convertToRows.genColumns;

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(
        cssPrefix,
        ''.concat(cssPrefix, '-').concat(size),
        bordered && ''.concat(cssPrefix, '-bordered'),
        className,
      ),
      style: style,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(cssPrefix, '-wrapper'),
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(cssPrefix, '-content'),
        },
        /*#__PURE__*/ React.createElement(TableHeader, {
          originColumns: originColumns,
          scroll: scroll,
          genColumns: genColumns,
        }),
        /*#__PURE__*/ React.createElement(TableBody, {
          genColumns: genColumns,
          rowKey: rowKey,
          scroll: scroll,
          dataSource: dataSource,
        }),
      ),
    ),
  );
};

export default BaseTable;
