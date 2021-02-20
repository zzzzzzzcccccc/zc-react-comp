import { cssPrefix } from './index';
import { addClass, removeClass } from '../utils';

var genColumns = function genColumns(columns) {
  var list = [];
  columns.forEach(function (column) {
    if (column.children && column.children.length > 0) {
      list.push(column);
      list.push.apply(list, genColumns(column.children));
    } else {
      list.push(column);
    }
  });
  return list;
};

export var formatColumns = function formatColumns(originColumns) {
  var maxLevel = 1;
  var rows = [];
  var allColumns = genColumns(originColumns);

  var traverse = function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;

      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }

    if (column.children) {
      var colSpan = 0;
      column.children.forEach(function (subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  for (var i = 0; i < originColumns.length; i++) {
    // @ts-ignore
    originColumns[i].level = 1;
    traverse(originColumns[i], undefined);
  }

  for (var j = 0; j < maxLevel; j++) {
    rows.push([]);
  }

  for (var z = 0; z < allColumns.length; z++) {
    var column = allColumns[z];

    if (!column.children) {
      allColumns[z].rowSpan = maxLevel - column.level + 1;
      allColumns[z].isEndColumn = true;
    } else {
      allColumns[z].rowSpan = 1;
    }

    rows[column.level - 1].push(allColumns[z]);
  }

  return {
    genColumns: allColumns,
    originColumns: rows
  };
};
export var rowActionProps = function rowActionProps(onRow, record, index, leftFixedRef, rightFixedRef, bodyRef) {
  var rowAction = function rowAction(record, index, e, callback) {
    callback && callback(record, index, e);
  };

  var hoverCss = "".concat(cssPrefix, "-hover-row");

  var updateFixedRefClassName = function updateFixedRefClassName(add, fixRef) {
    fixRef.current && fixRef.current.bodyTableRef && fixRef.current.bodyTableRef.current.rows && fixRef.current.bodyTableRef.current.rows[index] && (add ? addClass(fixRef.current.bodyTableRef.current.rows[index], hoverCss) : removeClass(fixRef.current.bodyTableRef.current.rows[index], hoverCss));
  };

  var updateBodyRefClassName = function updateBodyRefClassName(add) {
    bodyRef.current && bodyRef.current.bodyTableRef && bodyRef.current.bodyTableRef.current && bodyRef.current.bodyTableRef.current.rows && bodyRef.current.bodyTableRef.current.rows[index] && (add ? addClass(bodyRef.current.bodyTableRef.current.rows[index], hoverCss) : removeClass(bodyRef.current.bodyTableRef.current.rows[index], hoverCss));
  };

  return {
    onClick: function onClick(e) {
      return rowAction(record, index, e, onRow.onClick);
    },
    onDoubleClick: function onDoubleClick(e) {
      return rowAction(record, index, e, onRow.onDoubleClick);
    },
    onContextMenu: function onContextMenu(e) {
      return rowAction(record, index, e, onRow.onContextMenu);
    },
    onMouseEnter: function onMouseEnter(e) {
      addClass(e.currentTarget, hoverCss);

      if (leftFixedRef && rightFixedRef) {
        updateFixedRefClassName(true, leftFixedRef);
        updateFixedRefClassName(true, rightFixedRef);
      }

      if (bodyRef) {
        if (leftFixedRef) {
          updateFixedRefClassName(true, leftFixedRef);
        }

        if (rightFixedRef) {
          updateFixedRefClassName(true, rightFixedRef);
        }

        updateBodyRefClassName(true);
      }

      rowAction(record, index, e, onRow.onMouseEnter);
    },
    onMouseLeave: function onMouseLeave(e) {
      removeClass(e.currentTarget, hoverCss);

      if (leftFixedRef && rightFixedRef) {
        updateFixedRefClassName(false, leftFixedRef);
        updateFixedRefClassName(false, rightFixedRef);
      }

      if (bodyRef) {
        if (leftFixedRef) {
          updateFixedRefClassName(false, leftFixedRef);
        }

        if (rightFixedRef) {
          updateFixedRefClassName(false, rightFixedRef);
        }

        updateBodyRefClassName(false);
      }

      rowAction(record, index, e, onRow.onMouseLeave);
    }
  };
};
export var cellActionProps = function cellActionProps(onCell, dataIndex, record, index) {
  var cellAction = function cellAction(dataIndex, record, index, e, callback) {
    callback && callback(dataIndex, record, index, e);
  };

  return {
    onClick: function onClick(e) {
      return cellAction(dataIndex, record, index, e, onCell.onClick);
    },
    onDoubleClick: function onDoubleClick(e) {
      return cellAction(dataIndex, record, index, e, onCell.onDoubleClick);
    },
    onContextMenu: function onContextMenu(e) {
      return cellAction(dataIndex, record, index, e, onCell.onContextMenu);
    },
    onMouseEnter: function onMouseEnter(e) {
      return cellAction(dataIndex, record, index, e, onCell.onMouseEnter);
    },
    onMouseLeave: function onMouseLeave(e) {
      return cellAction(dataIndex, record, index, e, onCell.onMouseLeave);
    }
  };
};