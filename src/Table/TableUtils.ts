import { IColumn, ITheadColumn } from './index';

const genColumns = (columns: IColumn[] | ITheadColumn[]): IColumn[] | ITheadColumn[] => {
  let list: IColumn[] = [];

  columns.forEach(column => {
    if (column.children && column.children.length > 0) {
      list.push(column);
      list.push.apply(list, genColumns(column.children));
    } else {
      list.push(column);
    }
  });

  return list;
};

export const formatColumns = (originColumns: IColumn[]) => {
  let maxLevel = 1;
  const rows: ITheadColumn[][] = [];
  const allColumns: ITheadColumn[] = genColumns(originColumns);

  const traverse = (column: ITheadColumn, parent: ITheadColumn) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn: ITheadColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  for (let i = 0; i < originColumns.length; i++) {
    // @ts-ignore
    originColumns[i].level = 1;
    traverse(originColumns[i], undefined);
  }

  for (let j = 0; j < maxLevel; j++) {
    rows.push([]);
  }

  for (let z = 0; z < allColumns.length; z++) {
    const column = allColumns[z];
    if (!column.children) {
      allColumns[z].rowSpan = maxLevel - column.level + 1;
      allColumns[z].isEndColumn = true;
    } else {
      allColumns[z].rowSpan = 1;
    }
    rows[column.level - 1].push(allColumns[z])
  }

  return { genColumns: allColumns, originColumns: rows }
};
