import React from 'react';
import { TableProps, TableState, IColumn, ITheadColumn, TableFixedProps } from './index';
import './index.less';
declare class Table extends React.Component<TableProps, TableState> {
    static defaultProps: {
        size: string;
        bordered: boolean;
    };
    private headerRef;
    private bodyRef;
    private leftTableRef;
    private rightTableRef;
    constructor(props: TableProps);
    getFixedProps: (fixedType: 'left' | 'right') => TableFixedProps;
    handleResize: (column: ITheadColumn, width: number) => void;
    handleFixedScroll: (scrollLeft: number, scrollTop: number) => void;
    handleScroll: (scrollLeft: number, scrollTop: number) => void;
    setColumns: (columns: IColumn[]) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Table;
