import { IColumn, ITheadColumn } from './index';
import { EventEmitter } from 'events';

export const tableEmitter = new EventEmitter();
export const tableBodyScrollEmitKey = 'tableBodyScroll' + new Date().getTime();

const getGenColumns = (columns: IColumn[]): IColumn[] | ITheadColumn[] => {
  let list: IColumn[] = [];

  columns.forEach(column => {
    if (column.children && column.children.length > 0) {
      list.push(column);
      list.push.apply(list, getGenColumns(column.children));
    } else {
      list.push(column);
    }
  });

  return list;
};

export const convertToRows = (
  originColumns: IColumn[] | ITheadColumn[],
): { originColumns: ITheadColumn[][]; genColumns: ITheadColumn[] } => {
  let maxLevel = 1;
  const traverse = (column: ITheadColumn, parent: ITheadColumn) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach(subColumn => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach((column: ITheadColumn) => {
    column.level = 1;
    traverse(column, undefined);
  });

  const rows: ITheadColumn[][] = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  const allColumns: ITheadColumn[] = getGenColumns(originColumns);

  allColumns.forEach(column => {
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
