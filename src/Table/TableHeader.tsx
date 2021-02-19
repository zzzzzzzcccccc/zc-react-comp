import React from 'react';
import { TableHeaderProps, cssPrefix } from './index';
import TableCell from './TableCell';

class TableHeader extends React.Component<TableHeaderProps, any> {
  private scrollDivRef = React.createRef<HTMLDivElement>();
  private theadRef = React.createRef<HTMLTableSectionElement>();
  private timer: any;

  setScrollX = (scrollLeft: number) => {
    if (this.scrollDivRef && this.scrollDivRef.current) {
      this.scrollDivRef.current.scrollLeft = scrollLeft;
    }
  };

  noticeTheadHeight = () => {
    this.timer = setTimeout(() => {
      this.props.theadChange && this.props.theadChange(this.theadRef.current);
    }, 0)
  };

  componentDidMount() {
    this.noticeTheadHeight();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  render() {
    // @ts-ignore
    const { originColumns, endColumns, scroll, onResize } = this.props;
    return(
      <div className={`${cssPrefix}-header`}
           ref={this.scrollDivRef}
           style={{...scroll && scroll.y && { overflowY: 'scroll' }, overflowX: 'hidden'}}>
        <table style={{ width: scroll && scroll.x }}>
          <colgroup>
            {endColumns.map(item => <col key={item.dataIndex} style={{ width: item.width, minWidth: item.width }} />)}
          </colgroup>
          <thead ref={this.theadRef}>
            {originColumns.map((tr, trIndex) => {
              return(
                <tr key={trIndex}>
                  {tr.map((column, colIndex) => <TableCell onResize={onResize} key={colIndex} type="header" column={column} />)}
                </tr>
              )
            })}
          </thead>
        </table>
      </div>
    );
  }
}

export default TableHeader;
