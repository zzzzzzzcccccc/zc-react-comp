import React from 'react';
import Table from './Table';
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
}
export interface TableCellProps {
    type: 'header' | 'body';
    column: ITheadColumn;
    record?: object;
    index?: number;
    onResize?: (column: ITheadColumn, width: number) => void;
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
}
export declare const cssPrefix = "r-zc-table";
export default Table;
