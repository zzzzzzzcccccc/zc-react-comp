import React from 'react';
import Table from './Table';
import TableFixed from './TableFixed';
import TableBody from './TableBody';
export interface IScroll {
    x?: string | number;
    y?: string | number;
}
export interface IRowSelection {
    width?: number;
    title?: React.ReactNode;
    type?: 'checkbox' | 'radio';
    selectedRowKeys?: any[];
    fixed: 'left' | 'right';
}
export interface IOnRow {
    onClick?: (record: object, index: number, e: React.MouseEvent<HTMLTableRowElement>) => void;
    onDoubleClick?: (record: object, index: number, e: React.MouseEvent<HTMLTableRowElement>) => void;
    onContextMenu?: (record: object, index: number, e: React.MouseEvent<HTMLTableRowElement>) => void;
    onMouseEnter?: (record: object, index: number, e: React.MouseEvent<HTMLTableRowElement>) => void;
    onMouseLeave?: (record: object, index: number, e: React.MouseEvent<HTMLTableRowElement>) => void;
}
export interface IOnCell {
    onClick?: (dataIndex: string, record: object, index: number, e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onDoubleClick?: (dataIndex: string, record: object, index: number, e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onContextMenu?: (dataIndex: string, record: object, index: number, e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onMouseEnter?: (dataIndex: string, record: object, index: number, e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onMouseLeave?: (dataIndex: string, record: object, index: number, e: React.MouseEvent<HTMLTableDataCellElement>) => void;
}
export interface IColumn {
    title: React.ReactNode;
    dataIndex?: string;
    width?: number;
    align?: 'left' | 'center' | 'right';
    resize?: boolean;
    fixed?: 'left' | 'right';
    render?: (text: any, record: object, index: number) => React.ReactNode;
    children?: IColumn[];
}
export interface ITheadColumn extends IColumn {
    level?: number;
    colSpan?: number;
    rowSpan?: number;
    isEndColumn?: boolean;
}
export interface TableProps {
    dataSource: object[];
    columns: IColumn[];
    rowKey?: string;
    className?: string;
    style?: React.CSSProperties;
    bordered?: boolean;
    size?: 'small' | 'middle' | 'large';
    scroll?: IScroll;
    onScroll?: (scrollLeft: number, scrollTop: number) => void;
    rowSelection?: IRowSelection;
    onRow?: IOnRow;
    onCell?: IOnCell;
    rowClassName?: (record: object, index: number) => string;
}
export interface TableState {
    originColumns: ITheadColumn[][];
    genColumns: ITheadColumn[];
    endColumns: ITheadColumn[];
    leftColumns: ITheadColumn[];
    rightColumns: ITheadColumn[];
    theadHeight: number;
    scrollBarX: number;
    scrollBarY: number;
}
export interface TableHeaderProps {
    originColumns: ITheadColumn[][];
    endColumns: ITheadColumn[];
    scrollBarX: number;
    scrollBarY: number;
    scroll?: IScroll;
    onResize?: (column: ITheadColumn, width: number) => void;
    theadChange?: (thead: HTMLTableSectionElement) => void;
}
export interface TableBodyProps {
    dataSource: object[];
    endColumns: ITheadColumn[];
    rowKey: string;
    scrollBarX: number;
    scrollBarY: number;
    scroll?: IScroll;
    onScroll?: (scrollLeft: number, scrollTop: number) => void;
    onRow?: IOnRow;
    onCell?: IOnCell;
    leftFixedRef?: React.RefObject<TableFixed>;
    rightFixedRef?: React.RefObject<TableFixed>;
    rowClassName?: (record: object, index: number) => string;
}
export interface TableCellProps {
    type: 'header' | 'body';
    column: ITheadColumn;
    record?: object;
    index?: number;
    onResize?: (column: ITheadColumn, width: number) => void;
    onCell?: IOnCell;
}
export interface TableFixedProps {
    fixedType: 'left' | 'right';
    theadHeight: number;
    endColumns: ITheadColumn[];
    dataSource: object[];
    scrollBarX: number;
    scrollBarY: number;
    scroll?: IScroll;
    rowKey?: string;
    onScroll?: (scrollLeft: number, scrollTop: number) => void;
    onRow?: IOnRow;
    onCell?: IOnCell;
    leftFixedRef?: React.RefObject<TableFixed>;
    rightFixedRef?: React.RefObject<TableFixed>;
    bodyRef?: React.RefObject<TableBody>;
    rowClassName?: (record: object, index: number) => string;
}
export declare const cssPrefix = "r-zc-table";
export default Table;
