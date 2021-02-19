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

import React, { useContext, useEffect, useRef, useState } from 'react';
import { cssPrefix } from './index';
import { getThProps, BaseTableContext } from './tableUitls';
import TableCell from './TableCell';
import { getScrollbarSize } from '../utils';

var FixedBaseTable = function FixedBaseTable(_ref) {
  var fixed = _ref.fixed,
    _ref$genColumns = _ref.genColumns,
    genColumns = _ref$genColumns === void 0 ? [] : _ref$genColumns,
    scroll = _ref.scroll,
    dataSource = _ref.dataSource,
    rowKey = _ref.rowKey,
    _ref$hideHeader = _ref.hideHeader,
    hideHeader = _ref$hideHeader === void 0 ? false : _ref$hideHeader;

  var _getScrollbarSize = getScrollbarSize(),
    scrollBarX = _getScrollbarSize.scrollBarX,
    scrollBarY = _getScrollbarSize.scrollBarY;

  var _useState = useState(
      genColumns.filter(function(v) {
        return (
          v.level === 1 &&
          (!v.children || v.children.length <= 0) &&
          v.fixed === fixed
        );
      }),
    ),
    _useState2 = _slicedToArray(_useState, 1),
    filterColumns = _useState2[0];

  if (!filterColumns || filterColumns.length <= 0) {
    return null;
  }

  var fixedBodyRef = useRef();
  var thRef = useRef();
  var context = useContext(BaseTableContext);
  var style = {};

  if (scroll) {
    style.right = fixed === 'right' && scroll.y ? scrollBarY : undefined;
    style.bottom = scroll.x ? scrollBarX : undefined;
  }

  useEffect(
    function() {
      if (context && context.theadRefCurrent) {
        thRef.current.style.height =
          context.theadRefCurrent.offsetHeight + 'px';
      }
    },
    [context, genColumns],
  );
  useEffect(
    function() {
      if (fixedBodyRef && fixedBodyRef.current) {
        context[''.concat(fixed, 'FixedBodyRefCurrent')] = fixedBodyRef.current;
      }
    },
    [fixedBodyRef, genColumns],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: ''
        .concat(cssPrefix, '-content-fixed ')
        .concat(cssPrefix, '-content-fixed-')
        .concat(fixed),
      style: Object.assign({}, style),
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(cssPrefix, '-header'),
        style: {
          display: hideHeader ? 'none' : 'block',
        },
      },
      /*#__PURE__*/ React.createElement(
        'table',
        null,
        /*#__PURE__*/ React.createElement(
          'colgroup',
          null,
          filterColumns.map(function(column) {
            return /*#__PURE__*/ React.createElement('col', {
              key: column.dataIndex,
              style: {
                width: column.width,
                maxWidth: column.width,
              },
            });
          }),
        ),
        /*#__PURE__*/ React.createElement(
          'thead',
          null,
          /*#__PURE__*/ React.createElement(
            'tr',
            {
              ref: thRef,
            },
            filterColumns.map(function(column) {
              return /*#__PURE__*/ React.createElement(
                'th',
                Object.assign(
                  {
                    key: column.dataIndex,
                  },
                  getThProps(column),
                ),
                /*#__PURE__*/ React.createElement(TableCell, {
                  column: column,
                  renderType: 'header',
                }),
              );
            }),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(cssPrefix, '-body'),
        ref: fixedBodyRef,
        style: {
          overflow: 'hidden',
          maxHeight: scroll.y
            ? 'calc('
                .concat(
                  typeof scroll.y === 'number' ? scroll.y + 'px' : scroll.y,
                  ' - ',
                )
                .concat(scrollBarX, 'px)')
            : undefined,
        },
      },
      /*#__PURE__*/ React.createElement(
        'table',
        null,
        /*#__PURE__*/ React.createElement(
          'colgroup',
          null,
          filterColumns.map(function(column) {
            return /*#__PURE__*/ React.createElement('col', {
              key: column.dataIndex,
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
              filterColumns.map(function(column) {
                return /*#__PURE__*/ React.createElement(
                  'td',
                  {
                    key: column.dataIndex,
                  },
                  /*#__PURE__*/ React.createElement(TableCell, {
                    record: record,
                    index: recordIndex,
                    column: column,
                    renderType: 'body',
                  }),
                );
              }),
            );
          }),
        ),
      ),
    ),
  );
};

export default FixedBaseTable;
