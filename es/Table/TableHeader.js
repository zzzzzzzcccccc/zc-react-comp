import React, { useEffect, useRef } from 'react';
import { cssPrefix } from './index';
import classNames from 'classnames';
import { tableEmitter, tableBodyScrollEmitKey } from './tableUitls';
import TableCell from './TableCell';
import { Resizable } from 'react-resizable';

var TableHeader = function TableHeader(_ref) {
  var originColumns = _ref.originColumns,
    genColumns = _ref.genColumns,
    scroll = _ref.scroll,
    onResize = _ref.onResize,
    style = _ref.style;
  var ref = useRef();
  var tableRef = useRef();

  var setScrollLeft = function setScrollLeft(scrollLeft) {
    ref && ref.current && (ref.current.scrollLeft = scrollLeft);
  };

  var handleResize = function handleResize(column) {
    return function(e, data) {
      e.stopPropagation();

      if (data.size.width < 20) {
        return;
      }

      var currentIndex;

      for (var i = 0; i < genColumns.length; i++) {
        if (genColumns[i].dataIndex === column.dataIndex) {
          currentIndex = i;
          break;
        }
      }

      onResize && onResize(currentIndex, data.size.width);
    };
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
      style: Object.assign(
        Object.assign({}, style),
        scroll &&
          scroll.y && {
            overflow: 'hidden scroll',
          },
      ),
    },
    /*#__PURE__*/ React.createElement(
      'table',
      {
        style: {
          width: scroll && scroll.x,
        },
        ref: tableRef,
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
        'thead',
        null,
        originColumns.map(function(columns, columnsIndex) {
          return /*#__PURE__*/ React.createElement(
            'tr',
            {
              key: columnsIndex,
            },
            columns.map(function(column, columnIndex) {
              if (
                (!column.children || column.children.length <= 0) &&
                column.resize &&
                column.width &&
                typeof column.width === 'number'
              ) {
                return /*#__PURE__*/ React.createElement(
                  Resizable,
                  {
                    width: column.width,
                    key: columnIndex,
                    onResize: handleResize(column),
                    draggableOpts: {
                      enableUserSelectHack: false,
                    },
                    height: 0,
                  },
                  /*#__PURE__*/ React.createElement(
                    'th',
                    Object.assign({}, getThProps(column)),
                    /*#__PURE__*/ React.createElement(TableCell, {
                      column: column,
                      renderType: 'header',
                    }),
                  ),
                );
              }

              return /*#__PURE__*/ React.createElement(
                'th',
                Object.assign(
                  {
                    key: columnIndex,
                  },
                  getThProps(column),
                ),
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

var getThProps = function getThProps(column) {
  return {
    colSpan: column.colSpan == 1 ? undefined : column.colSpan,
    rowSpan: column.rowSpan == 1 ? undefined : column.rowSpan,
    className: classNames(
      (!column.children || column.children.length === 0) &&
        ''.concat(cssPrefix, '-cell-last'),
    ),
  };
};

export default TableHeader;
