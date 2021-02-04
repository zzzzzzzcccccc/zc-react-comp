/// <reference types="node" />
import { IColumn, ITheadColumn } from './index';
import { EventEmitter } from 'events';
export declare const tableEmitter: EventEmitter;
export declare const tableBodyScrollEmitKey: string;
export declare const convertToRows: (originColumns: IColumn[] | ITheadColumn[]) => {
    originColumns: ITheadColumn[][];
    genColumns: ITheadColumn[];
};
