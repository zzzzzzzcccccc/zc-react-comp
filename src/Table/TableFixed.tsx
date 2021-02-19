import React from 'react';
import classNames from 'classnames';
import { TableFixedProps, cssPrefix } from './index';
import TableCell from './TableCell'

class TableFixed extends React.Component<TableFixedProps, any> {
  private scrollDivRef = React.createRef<HTMLDivElement>();

  setScrollY = (scrollTop: number) => {
    if (this.scrollDivRef && this.scrollDivRef.current) {
      this.scrollDivRef.current.scrollTop = scrollTop;
    }
  };

  handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const dom = e.target as HTMLDivElement;
    this.props.onScroll && this.props.onScroll(dom.scrollLeft, dom.scrollTop);
  };

  render() {
    const { fixedType, theadHeight, endColumns, dataSource, scrollBarX, scrollBarY, scroll, rowKey } = this.props;
    const style:React.CSSProperties = {
      bottom: scroll && scroll.x ? scrollBarX : undefined,
    };
    const renderColGroup = () => (
      <colgroup>
        {endColumns.map(item => <col key={item.dataIndex} style={{ width: item.width, minWidth: item.width }} />)}
      </colgroup>
    )
    return (
      <div className={classNames(`${cssPrefix}-fixed-item`, `${cssPrefix}-fixed-item-${fixedType}`)}
           style={style}>
        <div className={`${cssPrefix}-header`}>
          <table>
            {renderColGroup()}
            <thead>
              <tr style={{ height: theadHeight }}>
                {endColumns.map(column => <TableCell key={column.dataIndex} type="header" column={column} />)}
              </tr>
            </thead>
          </table>
        </div>
        <div style={{ marginRight: fixedType === 'left' ? -1 * scrollBarY : undefined, paddingBottom: 0 }}>
          <div className={`${cssPrefix}-body`}
               style={{ maxHeight: scroll && scroll.y, overflow: 'scroll' }}
               onScroll={this.handleScroll}
               ref={this.scrollDivRef}>
            <table>
              {renderColGroup()}
              <tbody>
                {dataSource.map((record, recordIndex) => {
                  return(
                    <tr key={rowKey ? record[rowKey] : recordIndex}
                        data-row-key={rowKey ? record[rowKey] : recordIndex}>
                      {endColumns.map(column => <TableCell key={column.dataIndex} type="body" column={column} index={recordIndex} record={record} />)}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TableFixed;
