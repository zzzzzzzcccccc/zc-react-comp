import React from 'react';
import classNames from 'classnames';
import { cssPrefix } from './index';
import TableCell from './TableCell';

var TableBody = function TableBody(_ref) {
  var dataSource = _ref.dataSource,
    genColumns = _ref.genColumns,
    rowKey = _ref.rowKey,
    scroll = _ref.scroll,
    onScroll = _ref.onScroll;

  var handleScroll = function handleScroll(e) {
    var _e$target = e.target,
      scrollLeft = _e$target.scrollLeft,
      scrollTop = _e$target.scrollTop;
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(''.concat(cssPrefix, '-body')),
      onScroll: handleScroll,
      style: scroll && {
        maxHeight: scroll.y,
        overflow: ''
          .concat(scroll.x ? 'scroll' : 'hidden', ' ')
          .concat(scroll.y ? 'scroll' : 'hidden'),
      },
    },
    /*#__PURE__*/ React.createElement(
      'table',
      {
        style: {
          width: scroll && scroll.x,
        },
      },
      /*#__PURE__*/ React.createElement(
        'colgroup',
        null,
        genColumns.map(function(column, columnIndex) {
          return /*#__PURE__*/ React.createElement('col', {
            key: columnIndex,
            style: {
              width: column.width,
              minWidth: column.width,
            },
          });
        }),
      ),
      /*#__PURE__*/ React.createElement(
        'tbody',
        null,
        dataSource.map(function(record, recordIndex) {
          return /*#__PURE__*/ React.createElement(
            'tr',
            {
              key: rowKey ? record[rowKey] : recordIndex,
              'data-row-key': rowKey ? record[rowKey] : recordIndex,
            },
            genColumns.map(function(column) {
              return /*#__PURE__*/ React.createElement(
                'td',
                {
                  key: column.dataIndex,
                },
                /*#__PURE__*/ React.createElement(TableCell, {
                  column: column,
                  renderType: 'body',
                  index: recordIndex,
                  record: record,
                }),
              );
            }),
          );
        }),
      ),
    ),
  );
};

export default TableBody;
