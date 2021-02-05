import React, { FC, useContext, useEffect, useRef } from 'react';
import { cssPrefix, FixedBaseTableProps } from './index';
import { getThProps, BaseTableContext } from './tableUitls';
import TableCell from './TableCell';

const FixedBaseTable:FC<FixedBaseTableProps> = ({
  fixed,
  genColumns=[],
  scroll,
  dataSource,
  rowKey,
}) => {
  if (!genColumns || genColumns.length <= 0) {
    return null
  }
  const fixedBodyRef = useRef<HTMLDivElement>();
  const thRef = useRef<HTMLTableRowElement>()
  const context = useContext(BaseTableContext);
  let style: React.CSSProperties = {};
  let bodyStyle: React.CSSProperties = {};
  if (scroll) {
    style.right = (fixed === 'right' && scroll.y) ? 15 : undefined;
    style.bottom = scroll.x ? 15 : undefined;
  }
  if (scroll && scroll && scroll.y) {
    bodyStyle.maxHeight = scroll.y;
    bodyStyle.overflow = 'scroll hidden'
  }

  useEffect(() => {
    if (context && context.theadRefCurrent) {
      thRef.current.style.height = context.theadRefCurrent.offsetHeight + 'px'
    }
  }, [context]);

  useEffect(() => {
    if (fixedBodyRef && fixedBodyRef.current) {
      context[`${fixed}FixedBodyRefCurrent`] = fixedBodyRef.current;
    }
  }, [fixedBodyRef]);

  return (
    <div className={`${cssPrefix}-content-fixed ${cssPrefix}-content-fixed-${fixed}`}
         style={style}>
      <div className={`${cssPrefix}-header`}>
        <table>
          <colgroup>
            {genColumns.map(column => <col key={column.dataIndex}
                                           style={{ width: column.width, minWidth: column.width }} />)}
          </colgroup>
          <thead>
          <tr ref={thRef}>
            {genColumns.map(column => {
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
            {genColumns.map(column => <col key={column.dataIndex} style={{ width: column.width, minWidth: column.width }} />)}
          </colgroup>
          <tbody>
            {dataSource.map((record, recordIndex) => {
              return (
                <tr key={rowKey ? record[rowKey] : recordIndex}
                    data-row-key={rowKey ? record[rowKey] : recordIndex}>
                  {genColumns.map(column => {
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
