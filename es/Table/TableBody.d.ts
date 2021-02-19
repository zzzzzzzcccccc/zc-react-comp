import React from 'react';
import { TableBodyProps } from './index';
declare class TableBody extends React.Component<TableBodyProps, any> {
    private scrollDivRef;
    setScrollY: (scrollTop: number) => void;
    handleScroll: (e: React.MouseEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
export default TableBody;
