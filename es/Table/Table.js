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

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Table from 'antd/es/table';
import TableResizeableTitle from './TableResizeableTitle';
import "antd/es/table/style/index.css";
import "./index.css";

var BaseTable = function BaseTable(props) {
  var _useState = useState(props.columns || []),
      _useState2 = _slicedToArray(_useState, 2),
      rColumns = _useState2[0],
      setRColumns = _useState2[1];

  var handleResize = function handleResize(index, e, data) {
    var nextColumns = _toConsumableArray(rColumns);

    nextColumns[index] = Object.assign(Object.assign({}, nextColumns[index]), {
      width: data.size.width
    });
    setRColumns(nextColumns);
  };

  useEffect(function () {
    setRColumns(_toConsumableArray(props.columns));
  }, [props.columns]);

  var formatColumns = _toConsumableArray(rColumns);

  if (!!props.titleResizeable) {
    formatColumns = _toConsumableArray(rColumns).map(function (col, index) {
      return Object.assign(Object.assign({}, col), {
        onHeaderCell: function onHeaderCell(column) {
          return {
            width: column.width,
            onResize: function onResize(e, data) {
              return handleResize(index, e, data);
            }
          };
        }
      });
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('r-zc-table', props.className),
    style: props.style
  }, /*#__PURE__*/React.createElement(Table, Object.assign({}, props, {
    pagination: false,
    columns: formatColumns,
    components: !!props.titleResizeable ? {
      header: {
        cell: TableResizeableTitle
      }
    } : undefined
  })));
};

export default BaseTable;