import React from 'react';
import classNames from 'classnames';
import { TableBodyProps, cssPrefix } from './index';
import TableCell from './TableCell';
import { rowActionProps } from './TableUtils'

class TableBody extends React.Component<TableBodyProps, any> {
  private scrollDivRef = React.createRef<HTMLDivElement>();
  public bodyTableRef = React.createRef<HTMLTableElement>();

  setScrollY = (scrollTop: number) => {
    if (this.scrollDivRef && this.scrollDivRef.current) {
      this.scrollDivRef.current.scrollTop = scrollTop;
    }
  };

  handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onScroll } = this.props;
    const { scrollLeft, scrollTop }  = e.target as HTMLDivElement;
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  render() {
    const { dataSource, endColumns, rowKey, scroll, onRow, onCell, leftFixedRef, rightFixedRef, rowClassName } = this.props;
    return(
      <div className={`${cssPrefix}-body`}
           onScroll={this.handleScroll}
           ref={this.scrollDivRef}
           style={{ maxHeight: scroll && scroll.y, overflowX: scroll && scroll.x ? 'scroll' : undefined, overflowY: scroll && scroll.y ? 'scroll' : undefined }}>
        <table style={{ width: scroll && scroll.x }}
               ref={this.bodyTableRef}>
          <colgroup>
            {endColumns.map(item => <col key={item.dataIndex} style={{ width: item.width, minWidth: item.width }} />)}
          </colgroup>
          <tbody>
            {dataSource.map((record, recordIndex) => {
              return(
                <tr key={rowKey ? record[rowKey] : recordIndex}
                    className={classNames(rowClassName && rowClassName(record, recordIndex))}
                    data-row-key={rowKey ? record[rowKey] : recordIndex}
                    {...rowActionProps(onRow, record, recordIndex, leftFixedRef, rightFixedRef, undefined)}>
                  {endColumns.map(column => <TableCell onCell={onCell} key={column.dataIndex} type="body" column={column} record={record} index={recordIndex} />)}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableBody;
