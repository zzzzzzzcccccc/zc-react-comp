import React from 'react';
import Table from './Table';
import { TableProps } from 'antd/es/table';
import { ResizeCallbackData } from 'react-resizable';

export interface BaseTableProps extends TableProps<object> {
  titleResizeable?: boolean;
}

export interface TableResizeableTitleProps {
  width?: number | string;
  onResize?: (e: React.SyntheticEvent, data: ResizeCallbackData) => any;
}

export default Table;
