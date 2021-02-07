import React, { useRef, useContext, useEffect } from 'react';
import { cssPrefix } from './index';
import TableCell from './TableCell';
import { Resizable } from 'react-resizable';
import { getThProps, BaseTableContext } from './tableUitls';

var TableHeader = function TableHeader(_ref) {
  var originColumns = _ref.originColumns,
      genColumns = _ref.genColumns,
      scroll = _ref.scroll,
      onResize = _ref.onResize,
      style = _ref.style;
  var bodyRef = useRef();
  var theadRef = useRef();
  var context = useContext(BaseTableContext);

  var handleResize = function handleResize(column) {
    return function (e, data) {
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

  useEffect(function () {
    if (theadRef && theadRef.current) {
      context.theadRefCurrent = theadRef.current;
    }
  }, [theadRef, genColumns]);
  useEffect(function () {
    if (bodyRef && bodyRef.current) {
      context.headerRefCurrent = bodyRef.current;
    }
  }, [bodyRef, genColumns]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-header"),
    ref: bodyRef,
    style: Object.assign(Object.assign({}, style), scroll && {
      overflow: "hidden ".concat(scroll.y ? 'scroll' : 'hidden')
    })
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: scroll && scroll.x
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, genColumns.map(function (column, columnIndex) {
    return /*#__PURE__*/React.createElement("col", {
      key: columnIndex,
      style: {
        width: column.width,
        minWidth: column.width
      }
    });
  })), /*#__PURE__*/React.createElement("thead", {
    ref: theadRef
  }, originColumns.map(function (columns, columnsIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: columnsIndex
    }, columns.map(function (column, columnIndex) {
      if ((!column.children || column.children.length <= 0) && column.resize && column.width && !column.fixed && typeof column.width === 'number') {
        return /*#__PURE__*/React.createElement(Resizable, {
          width: column.width,
          key: columnIndex,
          onResize: handleResize(column),
          draggableOpts: {
            enableUserSelectHack: false
          },
          height: 0
        }, /*#__PURE__*/React.createElement("th", Object.assign({}, getThProps(column)), /*#__PURE__*/React.createElement(TableCell, {
          column: column,
          renderType: "header"
        })));
      }

      return /*#__PURE__*/React.createElement("th", Object.assign({
        key: columnIndex
      }, getThProps(column)), /*#__PURE__*/React.createElement(TableCell, {
        column: column,
        renderType: "header"
      }));
    }));
  }))));
};

export default TableHeader;