import React from 'react';
import classNames from 'classnames';
import { cssPrefix, isTableCellHeader } from './index';

var TableCell = function TableCell(_ref) {
  var className = _ref.className,
      style = _ref.style,
      column = _ref.column,
      renderType = _ref.renderType,
      record = _ref.record,
      index = _ref.index;

  var renderHeaderCell = function renderHeaderCell() {
    return column.title;
  };

  var renderBodyCell = function renderBodyCell() {
    return column.render ? column.render(record[column.dataIndex], record, index) : record[column.dataIndex];
  };

  var renderCell = function renderCell() {
    return isTableCellHeader(renderType) ? renderHeaderCell() : renderBodyCell();
  };

  return /*#__PURE__*/React.createElement("span", {
    title: typeof renderCell() === 'string' ? renderCell() : undefined,
    className: classNames("".concat(cssPrefix, "-cell"), "".concat(cssPrefix, "-cell-").concat(renderType), "".concat(cssPrefix, "-cell-ellipsis"), className),
    style: style
  }, renderCell());
};

export default TableCell;