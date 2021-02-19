import React from 'react';
import { TableBodyProps, cssPrefix } from './index';
import TableCell from './TableCell'

class TableBody extends React.Component<TableBodyProps, any> {

  handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onScroll } = this.props;
    const { scrollLeft, scrollTop }  = e.target as HTMLDivElement;
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  render() {
    const { dataSource, endColumns, rowKey, scroll } = this.props;
    return(
      <div className={`${cssPrefix}-body`}
           onScroll={this.handleScroll}
           style={{ maxHeight: scroll && scroll.y, overflowX: scroll && scroll.x ? 'scroll' : undefined, overflowY: scroll && scroll.y ? 'scroll' : undefined }}>
        <table style={{ width: scroll && scroll.x }}>
          <colgroup>
            {endColumns.map(item => <col key={item.dataIndex} style={{ width: item.width, minWidth: item.width }} />)}
          </colgroup>
          <tbody>
            {dataSource.map((record, recordIndex) => {
              return(
                <tr key={rowKey ? record[rowKey] : recordIndex}
                    data-row-key={rowKey ? record[rowKey] : recordIndex}>
                  {endColumns.map(column => <TableCell key={column.dataIndex} type="body" column={column} record={record} index={recordIndex} />)}
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
