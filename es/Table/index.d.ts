import React from 'react';
import BaseTable from './BaseTable';
interface IScroll {
  x?: string | number;
  y?: string | number;
}
export interface IColumn {
  title: React.ReactNode;
  dataIndex: string;
  width?: string | number;
  children?: IColumn[];
  render?: (val: any, record: object, index: number) => void;
  ellipsis?: boolean;
}
export interface ITheadColumn extends IColumn {
  colSpan?: number;
  rowSpan?: number;
  level?: number;
  children?: ITheadColumn[];
  isEndColumn?: boolean;
}
export interface BaseTableProps {
  dataSource: any[];
  columns: IColumn[];
  rowKey?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'small' | 'middle' | 'large';
  scroll?: IScroll;
  bordered?: boolean;
}
export interface BaseTableHeaderProps {
  originColumns: ITheadColumn[][];
  genColumns: ITheadColumn[];
  scroll?: IScroll;
  ref?: React.MutableRefObject<any>;
}
export interface BaseTableBodyProps {
  genColumns: ITheadColumn[];
  dataSource: any[];
  rowKey?: string;
  scroll?: IScroll;
  onScroll?: (scrollLeft: number, scrollTop: number) => void;
}
export interface TableCellProps {
  className?: string;
  style?: React.CSSProperties;
  column: IColumn | ITheadColumn;
  renderType: 'header' | 'body';
  record?: object;
  index?: number;
}
export declare const cssPrefix: string;
export default BaseTable;
