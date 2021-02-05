import { createContext } from 'react';
import { cssPrefix, IBaseTableContext, IColumn, ITheadColumn } from './index';
import classNames from 'classnames';

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

export const getThProps = (column: ITheadColumn) => ({
  colSpan: column.colSpan == 1 ? undefined : column.colSpan,
  rowSpan: column.rowSpan == 1 ? undefined : column.rowSpan,
  className: classNames(
    (!column.children || column.children.length === 0) &&
    `${cssPrefix}-cell-last`,
  ),
});

export const BaseTableContext = createContext<IBaseTableContext>(null);
