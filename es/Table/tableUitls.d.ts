/// <reference types="react" />
import { IBaseTableContext, IColumn, ITheadColumn } from './index';
export declare const convertToRows: (originColumns: IColumn[] | ITheadColumn[]) => {
    originColumns: ITheadColumn[][];
    genColumns: ITheadColumn[];
};
export declare const getThProps: (column: ITheadColumn) => {
    colSpan: number;
    rowSpan: number;
    className: string;
};
export declare const BaseTableContext: import("react").Context<IBaseTableContext>;
