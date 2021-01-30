import React, { FC } from 'react';
import { BaseTableBodyProps, cssPrefix } from './index';
import { tableEmitter, tableBodyScrollEmitKey } from './tableUitls';
import TableCell from './TableCell';

const TableBody: FC<BaseTableBodyProps> = ({
  dataSource,
  genColumns,
  rowKey,
  scroll,
  onScroll,
}) => {
  const endColumns = genColumns.filter(v => v.isEndColumn);
  const handleScroll = (e: React.UIEvent) => {
    const { scrollLeft, scrollTop } = e.target as HTMLDivElement;
    tableEmitter.emit(tableBodyScrollEmitKey, scrollLeft, scrollTop);
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  return (
    <div
      className={`${cssPrefix}-body`}
      onScroll={handleScroll}
      style={scroll && { maxHeight: scroll.y, overflow: `${scroll.x ? 'scroll' : 'hidden'} ${scroll.y ? 'scroll' : 'hidden'}` }}
    >
      <table style={{ width: scroll && scroll.x }}>
        <colgroup>
          {endColumns.map((column, columnIndex) => (
            <col
              key={columnIndex}
              style={{ width: column.width, minWidth: column.width }}
            />
          ))}
        </colgroup>
        <tbody>
          {dataSource.map((record, recordIndex) => {
            return (
              <tr
                key={rowKey ? record[rowKey] : recordIndex}
                data-row-key={rowKey ? record[rowKey] : recordIndex}
              >
                {endColumns.map((column, columnIndex) => {
                  return (
                    <td key={column.dataIndex}>
                      <TableCell
                        column={column}
                        renderType="body"
                        index={recordIndex}
                        record={record}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
