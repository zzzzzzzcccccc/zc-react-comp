import React from 'react';
import config from './conf';
import TableCol from './TableCol';
import TableCell from './TableCell';
var cssPrefix = config.cssPrefix;

var TableHeader = function TableHeader(_ref) {
  var columns = _ref.columns;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(cssPrefix, "-header")
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: 0,
    cellSpacing: 0
  }, /*#__PURE__*/React.createElement(TableCol, {
    columns: columns
  }), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(function (item, index) {
    return /*#__PURE__*/React.createElement("th", {
      key: index,
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(TableCell, {
      type: "header"
    }, item.title));
  })))));
};

export default TableHeader;