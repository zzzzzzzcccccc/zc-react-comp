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

  render() {
    const { fixedType, theadHeight, endColumns, dataSource, scrollBarX, scrollBarY, scroll, rowKey } = this.props;
    const style:React.CSSProperties = {
      bottom: scroll && scroll.x ? scrollBarX : undefined,
      right: fixedType === 'right' && scroll && scroll.y ? scrollBarY : undefined,
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
        <div className={`${cssPrefix}-body`}
             style={{ maxHeight: scroll && scroll.y ? `calc(${typeof scroll.y === 'number' ? scroll.y + 'px' : scroll.y} - ${scrollBarX}px)` : undefined, overflow: 'hidden' }}
             ref={this.scrollDivRef}>
          <table>
            {renderColGroup()}
            <tbody>
              {dataSource.map((record, recordIndex) => {
                return(
                  <tr key={rowKey ? record[rowKey] : recordIndex} data-row-key={rowKey ? record[rowKey] : recordIndex}>
                    {endColumns.map(column => <TableCell key={column.dataIndex} type="body" column={column} index={recordIndex} record={record} />)}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableFixed;
