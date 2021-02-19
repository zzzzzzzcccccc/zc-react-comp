function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React from 'react';
import classNames from 'classnames';
import { Resizable } from 'react-resizable';
import { cssPrefix } from './index';

var TableCell = function TableCell(_ref) {
  var type = _ref.type,
      column = _ref.column,
      record = _ref.record,
      index = _ref.index,
      onResize = _ref.onResize;
  var cssClassName = classNames("".concat(cssPrefix, "-cell"), "".concat(cssPrefix, "-cell-").concat(type));

  var handleResize = function handleResize(column) {
    return function (e, data) {
      e.stopPropagation();

      if (data.size.width < 20) {
        return;
      }

      onResize && onResize(column, data.size.width);
    };
  };

  var renderTh = function renderTh() {
    return /*#__PURE__*/React.createElement("th", {
      rowSpan: column.rowSpan,
      colSpan: column.colSpan,
      style: {
        textAlign: column.align
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: cssClassName,
      title: _typeof(column.title) ? column.title : undefined
    }, column.title));
  };

  var renderMap = {
    "header": function header() {
      if (column.width && column.resize && !column.fixed && !column.children) {
        return /*#__PURE__*/React.createElement(Resizable, {
          width: typeof column.width === 'string' ? parseInt(column.width) : column.width,
          draggableOpts: {
            enableUserSelectHack: false
          },
          onResize: handleResize(column),
          height: 0
        }, renderTh());
      }

      return renderTh();
    },
    "body": function body() {
      return /*#__PURE__*/React.createElement("td", {
        style: {
          textAlign: column.align
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: cssClassName,
        title: column.render ? undefined : record[column.dataIndex] || ''
      }, column.render ? column.render(record[column.dataIndex], record, index) : record[column.dataIndex] || ''));
    }
  };
  return renderMap[type]();
};

export default TableCell;