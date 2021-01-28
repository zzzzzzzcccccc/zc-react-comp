import React, { useEffect, useRef } from 'react';
import { cssPrefix } from './index';
import { tableEmitter, tableBodyScrollEmitKey } from './tableUitls';
import TableCell from './TableCell';

var TableHeader = function TableHeader(_ref) {
  var originColumns = _ref.originColumns,
    genColumns = _ref.genColumns,
    scroll = _ref.scroll;
  var ref = useRef();

  var setScrollLeft = function setScrollLeft(scrollLeft) {
    ref && ref.current && (ref.current.scrollLeft = scrollLeft);
  };

  useEffect(function() {
    tableEmitter.addListener(tableBodyScrollEmitKey, setScrollLeft);
    return function() {
      tableEmitter.removeListener(tableBodyScrollEmitKey, setScrollLeft);
    };
  }, []);
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: ''.concat(cssPrefix, '-header'),
      ref: ref,
      style: scroll &&
        scroll.y && {
          overflow: 'hidden scroll',
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
        genColumns
          .filter(function(v) {
            return v.isEndColumn;
          })
          .map(function(column, columnIndex) {
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
        'thead',
        null,
        originColumns.map(function(columns, columnsIndex) {
          return /*#__PURE__*/ React.createElement(
            'tr',
            {
              key: columnsIndex,
            },
            columns.map(function(column, columnIndex) {
              return /*#__PURE__*/ React.createElement(
                'th',
                {
                  colSpan: column.colSpan == 1 ? undefined : column.colSpan,
                  rowSpan: column.rowSpan == 1 ? undefined : column.rowSpan,
                  className:
                    !column.children || column.children.length <= 0
                      ? ''.concat(cssPrefix, '-cell-last')
                      : '',
                  key: columnIndex,
                },
                /*#__PURE__*/ React.createElement(TableCell, {
                  column: column,
                  renderType: 'header',
                }),
              );
            }),
          );
        }),
      ),
    ),
  );
};

export default TableHeader;
