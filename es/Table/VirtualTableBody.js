function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, { useState, useRef, useEffect } from 'react';
import { cssPrefix } from './index';
import classNames from 'classnames';
import { tableBodyScrollEmitKey, tableEmitter } from './tableUitls';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import TableCell from './TableCell';

var VirtualTableBody = function VirtualTableBody(_ref) {
  var virtualScroll = _ref.virtualScroll,
    scroll = _ref.scroll,
    onScroll = _ref.onScroll,
    genColumns = _ref.genColumns,
    dataSource = _ref.dataSource;

  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    tableWidth = _useState2[0],
    setTableWidth = _useState2[1];

  var notWidthColumnCount = genColumns.filter(function(_ref2) {
    var width = _ref2.width;
    return !width;
  }).length;
  var mergedColumns = genColumns.map(function(column) {
    if (column.width) {
      return column;
    }

    return Object.assign(Object.assign({}, column), {
      width: Math.floor(tableWidth / (genColumns.length - notWidthColumnCount)),
    });
  });
  var gridRef = useRef();

  var resetVirtualGrid = function resetVirtualGrid() {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: false,
    });
  };

  useEffect(
    function() {
      resetVirtualGrid();
    },
    [tableWidth],
  );

  var handleScroll = function handleScroll(props) {
    var scrollLeft = props.scrollLeft,
      scrollTop = props.scrollTop;
    tableEmitter.emit(tableBodyScrollEmitKey, scrollLeft, scrollTop);
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  return /*#__PURE__*/ React.createElement(
    ResizeObserver,
    {
      onResize: function onResize(_ref3) {
        var width = _ref3.width;
        return setTableWidth(width);
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classNames(''.concat(cssPrefix, '-body')),
      },
      /*#__PURE__*/ React.createElement(
        Grid,
        {
          ref: gridRef,
          columnWidth: function columnWidth(index) {
            return mergedColumns[index].width;
          },
          rowHeight: function rowHeight() {
            return virtualScroll.itemHeight;
          },
          columnCount: mergedColumns.length,
          className: ''.concat(cssPrefix, '-body-virtual'),
          height: parseFloat(scroll && scroll.y),
          rowCount: dataSource.length,
          onScroll: handleScroll,
          width: tableWidth,
        },
        function(_ref4) {
          var columnIndex = _ref4.columnIndex,
            rowIndex = _ref4.rowIndex,
            style = _ref4.style;
          return /*#__PURE__*/ React.createElement(
            'div',
            {
              style: style,
              className: classNames(
                ''.concat(cssPrefix, '-virtual-cell'),
                columnIndex === mergedColumns.length - 1 &&
                  ''.concat(cssPrefix, '-virtual-cell-last'),
              ),
            },
            /*#__PURE__*/ React.createElement(TableCell, {
              column: mergedColumns[columnIndex],
              renderType: 'body',
              index: rowIndex,
              record: dataSource[rowIndex],
            }),
          );
        },
      ),
    ),
  );
};

export default VirtualTableBody;
