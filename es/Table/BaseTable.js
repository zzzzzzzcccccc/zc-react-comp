function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { cssPrefix } from './index';
import { convertToRows } from './tableUitls';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import VirtualTableBody from './VirtualTableBody';
import "./index.css";
export var BaseTableContext = /*#__PURE__*/createContext(null);

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
      bordered = _ref$bordered === void 0 ? false : _ref$bordered,
      _ref$hideHeader = _ref.hideHeader,
      hideHeader = _ref$hideHeader === void 0 ? false : _ref$hideHeader,
      onScroll = _ref.onScroll,
      virtualScroll = _ref.virtualScroll;

  var _convertToRows = convertToRows(columns),
      originColumns = _convertToRows.originColumns,
      genColumns = _convertToRows.genColumns;

  var _useState = useState(genColumns.filter(function (v) {
    return v.isEndColumn;
  })),
      _useState2 = _slicedToArray(_useState, 2),
      endColumns = _useState2[0],
      setEndColumns = _useState2[1];

  var handleResize = function handleResize(index, width) {
    var updateEndColumns = _toConsumableArray(endColumns);

    updateEndColumns[index].width = width;
    setEndColumns(updateEndColumns);
  };

  var handleBodyScroll = function handleBodyScroll(x, y) {
    onScroll && onScroll(x, y);
  };

  var context = {};
  return /*#__PURE__*/React.createElement(BaseTableContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames(cssPrefix, "".concat(cssPrefix, "-").concat(size), bordered && "".concat(cssPrefix, "-bordered"), className),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-content")
  }, /*#__PURE__*/React.createElement(TableHeader, {
    style: {
      display: hideHeader ? 'none' : 'block'
    },
    originColumns: originColumns,
    scroll: scroll,
    onResize: handleResize,
    genColumns: endColumns
  }), virtualScroll && virtualScroll.itemHeight ? /*#__PURE__*/React.createElement(VirtualTableBody, {
    genColumns: endColumns,
    virtualScroll: virtualScroll,
    rowKey: rowKey,
    scroll: scroll,
    onScroll: handleBodyScroll,
    dataSource: dataSource
  }) : /*#__PURE__*/React.createElement(TableBody, {
    genColumns: endColumns,
    rowKey: rowKey,
    scroll: scroll,
    onScroll: handleBodyScroll,
    dataSource: dataSource
  })))));
};

export default BaseTable;