import React, { FC } from 'react';
import classNames from 'classnames';
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
  const handleScroll = (e: React.UIEvent) => {
    const { scrollLeft, scrollTop } = e.target as HTMLDivElement;
    tableEmitter.emit(tableBodyScrollEmitKey, scrollLeft, scrollTop);
    onScroll && onScroll(scrollLeft, scrollTop);
  };

  return (
    <div
      className={classNames(`${cssPrefix}-body`)}
      onScroll={handleScroll}
      style={
        scroll && {
          maxHeight: scroll.y,
          overflow: `${scroll.x ? 'scroll' : 'hidden'} ${
            scroll.y ? 'scroll' : 'hidden'
          }`,
        }
      }
    >
      <table style={{ width: scroll && scroll.x }}>
        <colgroup>
          {genColumns.map((column, columnIndex) => (
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
                {genColumns.map(column => {
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
