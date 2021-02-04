import React from 'react';
import BaseTable from './BaseTable';
interface IScroll {
  x?: string | number;
  y?: string | number;
}
interface IVirtualScroll {
  itemHeight: number;
}
export interface IColumn {
  title: React.ReactNode;
  dataIndex: string;
  width?: number;
  children?: IColumn[];
  render?: (val: any, record: object, index: number) => React.ReactNode;
  ellipsis?: boolean;
  resize?: boolean;
}
export interface ITheadColumn extends IColumn {
  colSpan?: number;
  rowSpan?: number;
  level?: number;
  children?: ITheadColumn[];
  isEndColumn?: boolean;
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
export declare const isTableCellHeader: (
  renderType: 'header' | 'body',
) => boolean;
export declare const cssPrefix: string;
export default BaseTable;
