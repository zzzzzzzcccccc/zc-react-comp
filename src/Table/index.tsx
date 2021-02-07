import React from 'react';
import BaseTable from './BaseTable';

type TableColumnFixed = 'left' | 'right';

export interface IScroll {
  x?: string | number;
  y?: string | number;
}

export interface IVirtualScroll {
  itemHeight: number;
}

export interface IColumn {
  title: React.ReactNode;
  dataIndex: string;
  width?: number;
  children?: IColumn[];
  render?: (val: any, record: object, index: number) => React.ReactNode;
  resize?: boolean;
  fixed?: TableColumnFixed;
}
export interface ITheadColumn extends IColumn {
  colSpan?: number;
  rowSpan?: number;
  level?: number;
  children?: ITheadColumn[];
  isEndColumn?: boolean;
}

export interface IBaseTableContext {
  theadRefCurrent?: HTMLTableSectionElement;
  headerRefCurrent?: HTMLDivElement;
  leftFixedBodyRefCurrent?: HTMLDivElement;
  rightFixedBodyRefCurrent?: HTMLDivElement;
}

export interface BaseTableProps {
  dataSource: object[];
  columns: IColumn[];
  rowKey?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'small' | 'middle' | 'large';
  scroll?: IScroll;
  bordered?: boolean;
  hideHeader?: boolean;
  onScroll?: (x: number, y: number) => void;
  virtualScroll?: IVirtualScroll;
  onResize?: (dataIndex: string, width: number) => void;
}

export interface BaseTableHeaderProps {
  originColumns: ITheadColumn[][];
  genColumns: ITheadColumn[];
  scroll?: IScroll;
  ref?: React.MutableRefObject<any>;
  onResize?: (index: number, width: number) => void;
  style?: React.CSSProperties;
}

export interface BaseTableBodyProps {
  genColumns: ITheadColumn[];
  dataSource: any[];
  rowKey?: string;
  scroll?: IScroll;
  onScroll?: (scrollLeft: number, scrollTop: number) => void;
}
export interface BaseVirtualTableBodyProps extends BaseTableBodyProps {
  virtualScroll: IVirtualScroll;
}

export interface TableCellProps {
  className?: string;
  style?: React.CSSProperties;
  column: IColumn | ITheadColumn;
  renderType: 'header' | 'body';
  record?: object;
  index?: number;
}

export interface FixedBaseTableProps {
  fixed: TableColumnFixed;
  genColumns?: ITheadColumn[];
  dataSource: any[];
  scroll?: IScroll;
  rowKey?: string;
  hideHeader?: boolean;
}

export const isTableCellHeader = (renderType: 'header' | 'body'): boolean =>
  renderType === 'header';
export const cssPrefix: string = 'r-zc-table';

export default BaseTable;
