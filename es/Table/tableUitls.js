import { createContext } from 'react';
import { cssPrefix } from './index';
import classNames from 'classnames';

var getGenColumns = function getGenColumns(columns) {
  var list = [];
  columns.forEach(function(column) {
    if (column.children && column.children.length > 0) {
      list.push(column);
      list.push.apply(list, getGenColumns(column.children));
    } else {
      list.push(column);
    }
  });
  return list;
};

export var convertToRows = function convertToRows(originColumns) {
  var maxLevel = 1;

  var traverse = function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;

      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }

    if (column.children) {
      var colSpan = 0;
      column.children.forEach(function(subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach(function(column) {
    column.level = 1;
    traverse(column, undefined);
  });
  var rows = [];

  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  var allColumns = getGenColumns(originColumns);
  allColumns.forEach(function(column) {
    if (!column.children || column.children.length <= 0) {
      column.rowSpan = maxLevel - column.level + 1;
      column.isEndColumn = true;
    } else {
      column.rowSpan = 1;
    }

    rows[column.level - 1].push(column);
  });
  return {
    originColumns: rows,
    genColumns: allColumns,
  };
};
export var getThProps = function getThProps(column) {
  return {
    colSpan: column.colSpan == 1 ? undefined : column.colSpan,
    rowSpan: column.rowSpan == 1 ? undefined : column.rowSpan,
    className: classNames(
      (!column.children || column.children.length === 0) &&
        ''.concat(cssPrefix, '-cell-last'),
    ),
  };
};
export var BaseTableContext = /*#__PURE__*/ createContext(null);
