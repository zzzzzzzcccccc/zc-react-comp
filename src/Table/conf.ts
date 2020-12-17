import React from 'react';

interface ITableConf {
  cssPrefix: string;
}

export interface ColumnProps<T> {
  title: React.ReactNode;
  dataIndex: string;
  width?: string | number;
  fixed?: 'left' | 'right';
  render?: (value: any, record: T, recordIndex: number) => React.ReactNode;
  children?: Array<ColumnProps<T>>;
}

export interface TableProps<T> {
  dataSource: Array<T>;
  columns: Array<ColumnProps<T>>;
  loading?: boolean;
  rowKey?: string;
  size?: 'normal' | 'large' | 'small';
}

export interface TableColProps<T> {
  columns: Array<ColumnProps<T>>;
}

export interface TableHeaderProps<T> {
  columns: Array<ColumnProps<T>>;
}

export interface TableBodyProps<T> extends TableProps<T> {}

export interface TableCellProps<T> {
  type?: 'header' | 'body';
  children?: React.ReactNode;
}

const config: ITableConf = {
  cssPrefix: 'r-zc-table',
};

export default config;
