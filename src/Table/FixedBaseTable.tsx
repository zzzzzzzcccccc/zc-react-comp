import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { cssPrefix, FixedBaseTableProps } from './index';
import { getThProps, BaseTableContext } from './tableUitls';
import TableCell from './TableCell';
import { getScrollbarSize } from '../utils'

const FixedBaseTable:FC<FixedBaseTableProps> = ({
  fixed,
  genColumns=[],
  scroll,
  dataSource,
  rowKey,
}) => {
  const { scrollBarX, scrollBarY } = getScrollbarSize();
  const [filterColumns] = useState(genColumns.filter(v => v.level === 1 && (!v.children || v.children.length <= 0) && v.fixed === fixed));
  if (!filterColumns || filterColumns.length <= 0) {
    return null
  }
  const fixedBodyRef = useRef<HTMLDivElement>();
  const thRef = useRef<HTMLTableRowElement>()
  const context = useContext(BaseTableContext);
  let style: React.CSSProperties = {};
  let bodyStyle: React.CSSProperties = {};
  if (scroll) {
    style.right = (fixed === 'right' && scroll.y) ? scrollBarY : undefined;
    style.bottom = scroll.x ? scrollBarX : undefined;
  }
  if (scroll && scroll && scroll.y) {
    bodyStyle.maxHeight = scroll.y;
    bodyStyle.overflow = 'scroll hidden'
  }

  useEffect(() => {
    if (context && context.theadRefCurrent) {
      thRef.current.style.height = context.theadRefCurrent.offsetHeight + 'px'
    }
  }, [context, genColumns]);

  useEffect(() => {
    if (fixedBodyRef && fixedBodyRef.current) {
      context[`${fixed}FixedBodyRefCurrent`] = fixedBodyRef.current;
    }
  }, [fixedBodyRef, genColumns]);

  return (
    <div className={`${cssPrefix}-content-fixed ${cssPrefix}-content-fixed-${fixed}`}
         style={style}>
      <div className={`${cssPrefix}-header`}>
        <table>
          <colgroup>
            {filterColumns.map(column => <col key={column.dataIndex}
                                           style={{ width: column.width, minWidth: column.width }} />)}
          </colgroup>
          <thead>
          <tr ref={thRef}>
            {filterColumns.map(column => {
              return(
                <th key={column.dataIndex} {...getThProps(column)}>
                  <TableCell column={column} renderType="header" />
                </th>
              )
            })}
          </tr>
          </thead>
        </table>
      </div>

      <div className={`${cssPrefix}-body`}
           ref={fixedBodyRef}
           id={`__fixed${fixed}`}
           style={bodyStyle}>
        <table>
          <colgroup>
            {filterColumns.map(column => <col key={column.dataIndex} style={{ width: column.width, minWidth: column.width }} />)}
          </colgroup>
          <tbody>
            {dataSource.map((record, recordIndex) => {
              return (
                <tr key={rowKey ? record[rowKey] : recordIndex}
                    data-row-key={rowKey ? record[rowKey] : recordIndex}>
                  {filterColumns.map(column => {
                    return(
                      <td key={column.dataIndex}>
                        <TableCell record={record}
                                   index={recordIndex}
                                   column={column}
                                   renderType="body" />
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default FixedBaseTable;
