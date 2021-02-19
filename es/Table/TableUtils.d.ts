import { IColumn, ITheadColumn } from './index';
export declare const formatColumns: (originColumns: IColumn[]) => {
    genColumns: ITheadColumn[];
    originColumns: ITheadColumn[][];
};
