import React from 'react';
import config from './conf';
import TableCell from './TableCell';
import TableCol from './TableCol';
var cssPrefix = config.cssPrefix;

var TableBody = function TableBody(_ref) {
  var dataSource = _ref.dataSource,
    rowKey = _ref.rowKey,
    columns = _ref.columns;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: ''.concat(cssPrefix, '-body'),
    },
    /*#__PURE__*/ React.createElement(
      'table',
      {
        cellPadding: 0,
        cellSpacing: 0,
      },
      /*#__PURE__*/ React.createElement(TableCol, {
        columns: columns,
      }),
      /*#__PURE__*/ React.createElement(
        'tbody',
        null,
        dataSource.map(function(record, rIndex) {
          return /*#__PURE__*/ React.createElement(
            'tr',
            {
              key: rowKey ? record[rowKey] : rIndex,
            },
            columns.map(function(col) {
              return /*#__PURE__*/ React.createElement(
                'td',
                {
                  key: col.dataIndex,
                },
                /*#__PURE__*/ React.createElement(
                  TableCell,
                  null,
                  col.render
                    ? col.render(record[col.dataIndex], record, rIndex)
                    : record[col.dataIndex],
                ),
              );
            }),
          );
        }),
      ),
    ),
  );
};

export default TableBody;
