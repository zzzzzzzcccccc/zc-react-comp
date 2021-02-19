import React from 'react';
import { TableHeaderProps } from './index';
declare class TableHeader extends React.Component<TableHeaderProps, any> {
    private scrollDivRef;
    private theadRef;
    private timer;
    setScrollX: (scrollLeft: number) => void;
    noticeTheadHeight: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default TableHeader;
