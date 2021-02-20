import React from 'react';
import { TableFixedProps } from './index';
declare class TableFixed extends React.Component<TableFixedProps, any> {
    private scrollDivRef;
    bodyTableRef: React.RefObject<HTMLTableElement>;
    setScrollY: (scrollTop: number) => void;
    handleScroll: (e: React.MouseEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
export default TableFixed;
