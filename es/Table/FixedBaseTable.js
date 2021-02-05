import React, { useContext, useEffect, useRef } from 'react';
import { cssPrefix } from './index';
import { getThProps, BaseTableContext } from './tableUitls';
import TableCell from './TableCell';

var FixedBaseTable = function FixedBaseTable(_ref) {
  var fixed = _ref.fixed,
      _ref$genColumns = _ref.genColumns,
      genColumns = _ref$genColumns === void 0 ? [] : _ref$genColumns,
      scroll = _ref.scroll,
      dataSource = _ref.dataSource,
      rowKey = _ref.rowKey;

  if (!genColumns || genColumns.length <= 0) {
    return null;
  }

  var fixedBodyRef = useRef();
  var thRef = useRef();
  var context = useContext(BaseTableContext);
  var style = {};
  var bodyStyle = {};

  if (scroll) {
    style.right = fixed === 'right' && scroll.y ? 15 : undefined;
    style.bottom = scroll.x ? 15 : undefined;
  }

  if (scroll && scroll && scroll.y) {
    bodyStyle.maxHeight = scroll.y;
    bodyStyle.overflow = 'scroll hidden';
  }

  useEffect(function () {
    if (context && context.theadRefCurrent) {
      thRef.current.style.height = context.theadRefCurrent.offsetHeight + 'px';
    }
  }, [context]);
  useEffect(function () {
    if (fixedBodyRef && fixedBodyRef.current) {
      context["".concat(fixed, "FixedBodyRefCurrent")] = fixedBodyRef.current;
    }
  }, [fixedBodyRef]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-content-fixed ").concat(cssPrefix, "-content-fixed-").concat(fixed),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-header")
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("colgroup", null, genColumns.map(function (column) {
    return /*#__PURE__*/React.createElement("col", {
      key: column.dataIndex,
      style: {
        width: column.width,
        minWidth: column.width
      }
    });
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    ref: thRef
  }, genColumns.map(function (column) {
    return /*#__PURE__*/React.createElement("th", Object.assign({
      key: column.dataIndex
    }, getThProps(column)), /*#__PURE__*/React.createElement(TableCell, {
      column: column,
      renderType: "header"
    }));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-body"),
    ref: fixedBodyRef,
    id: "__fixed".concat(fixed),
    style: bodyStyle
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("colgroup", null, genColumns.map(function (column) {
    return /*#__PURE__*/React.createElement("col", {
      key: column.dataIndex,
      style: {
        width: column.width,
        minWidth: column.width
      }
    });
  })), /*#__PURE__*/React.createElement("tbody", null, dataSource.map(function (record, recordIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: rowKey ? record[rowKey] : recordIndex,
      "data-row-key": rowKey ? record[rowKey] : recordIndex
    }, genColumns.map(function (column) {
      return /*#__PURE__*/React.createElement("td", {
        key: column.dataIndex
      }, /*#__PURE__*/React.createElement(TableCell, {
        record: record,
        index: recordIndex,
        column: column,
        renderType: "body"
      }));
    }));
  })))));
};

export default FixedBaseTable;