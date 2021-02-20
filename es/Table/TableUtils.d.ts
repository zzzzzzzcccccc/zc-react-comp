import React from 'react';
import TableFixed from './TableFixed';
import TableBody from './TableBody';
import { IColumn, IOnCell, IOnRow, ITheadColumn } from './index';
export declare const formatColumns: (originColumns: IColumn[]) => {
    genColumns: ITheadColumn[];
    originColumns: ITheadColumn[][];
};
export declare const rowActionProps: (onRow: IOnRow, record: object, index: number, leftFixedRef: React.RefObject<TableFixed> | undefined, rightFixedRef: React.RefObject<TableFixed> | undefined, bodyRef: React.RefObject<TableBody> | undefined) => {
    onClick: (e: React.MouseEvent<HTMLTableRowElement>) => void;
    onDoubleClick: (e: React.MouseEvent<HTMLTableRowElement>) => void;
    onContextMenu: (e: React.MouseEvent<HTMLTableRowElement>) => void;
    onMouseEnter: (e: React.MouseEvent<HTMLTableRowElement>) => void;
    onMouseLeave: (e: React.MouseEvent<HTMLTableRowElement>) => void;
};
export declare const cellActionProps: (onCell: IOnCell, dataIndex: string, record: object, index: number) => {
    onClick: (e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onDoubleClick: (e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onContextMenu: (e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onMouseEnter: (e: React.MouseEvent<HTMLTableDataCellElement>) => void;
    onMouseLeave: (e: React.MouseEvent<HTMLTableDataCellElement>) => void;
};
