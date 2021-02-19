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