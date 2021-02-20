import React from 'react';
import TableFixed from './TableFixed';
import TableBody from './TableBody';
import { IColumn, IOnCell, IOnRow, ITheadColumn, cssPrefix } from './index';
import { addClass, removeClass } from '../utils';

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

export const rowActionProps = (onRow: IOnRow, record: object, index: number, leftFixedRef: React.RefObject<TableFixed> | undefined, rightFixedRef: React.RefObject<TableFixed> | undefined, bodyRef: React.RefObject<TableBody> | undefined) => {
  const rowAction = (record: object, index: number, e: React.MouseEvent<HTMLTableRowElement>, callback: (record: object, index: number, e: React.MouseEvent<HTMLTableRowElement>) => void) => {
    callback && callback(record, index, e);
  }
  const hoverCss = `${cssPrefix}-hover-row`;
  const updateFixedRefClassName = (add: boolean, fixRef: React.RefObject<TableFixed>) => {
    fixRef.current
    && fixRef.current.bodyTableRef
    && fixRef.current.bodyTableRef.current.rows
    && fixRef.current.bodyTableRef.current.rows[index]
    && (add ? addClass(fixRef.current.bodyTableRef.current.rows[index], hoverCss) : removeClass(fixRef.current.bodyTableRef.current.rows[index], hoverCss))
  };
  const updateBodyRefClassName = (add: boolean) => {
    bodyRef.current
    && bodyRef.current.bodyTableRef
    && bodyRef.current.bodyTableRef.current
    && bodyRef.current.bodyTableRef.current.rows
    && bodyRef.current.bodyTableRef.current.rows[index]
    && (add ? addClass(bodyRef.current.bodyTableRef.current.rows[index], hoverCss) : removeClass(bodyRef.current.bodyTableRef.current.rows[index], hoverCss))
  };

  return {
    onClick: (e: React.MouseEvent<HTMLTableRowElement>) => rowAction(record, index, e, onRow.onClick),
    onDoubleClick: (e: React.MouseEvent<HTMLTableRowElement>) => rowAction(record, index, e, onRow.onDoubleClick),
    onContextMenu: (e: React.MouseEvent<HTMLTableRowElement>) => rowAction(record, index, e, onRow.onContextMenu),
    onMouseEnter: (e: React.MouseEvent<HTMLTableRowElement>) => {
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
    onMouseLeave: (e: React.MouseEvent<HTMLTableRowElement>) => {
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
      rowAction(record, index, e, onRow.onMouseLeave)
    }
  }
};

export const cellActionProps = (onCell: IOnCell, dataIndex: string, record: object, index: number) => {
  const cellAction = (dataIndex: string, record: object, index: number, e: React.MouseEvent<HTMLTableDataCellElement>, callback: (dataIndex: string, record: object, index: number, e: React.MouseEvent<HTMLTableDataCellElement>) => void) => {
    callback && callback(dataIndex, record, index, e);
  };
  return {
    onClick: (e: React.MouseEvent<HTMLTableDataCellElement>) => cellAction(dataIndex, record, index, e, onCell.onClick),
    onDoubleClick: (e: React.MouseEvent<HTMLTableDataCellElement>) => cellAction(dataIndex, record, index, e, onCell.onDoubleClick),
    onContextMenu: (e: React.MouseEvent<HTMLTableDataCellElement>) => cellAction(dataIndex, record, index, e, onCell.onContextMenu),
    onMouseEnter: (e: React.MouseEvent<HTMLTableDataCellElement>) => cellAction(dataIndex, record, index, e, onCell.onMouseEnter),
    onMouseLeave: (e: React.MouseEvent<HTMLTableDataCellElement>) => cellAction(dataIndex, record, index, e, onCell.onMouseLeave),
  }
};
