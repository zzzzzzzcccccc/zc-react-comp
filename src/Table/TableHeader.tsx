import React, { FC, useEffect, useRef } from 'react';
import { BaseTableHeaderProps, cssPrefix } from './index';
import { tableEmitter, tableBodyScrollEmitKey } from './tableUitls';
import TableCell from './TableCell';

const TableHeader: FC<BaseTableHeaderProps> = ({
  originColumns,
  genColumns,
  scroll,
}) => {
  const ref = useRef<HTMLDivElement>();

  const setScrollLeft = (scrollLeft: number) => {
    ref && ref.current && (ref.current.scrollLeft = scrollLeft);
  };

  useEffect(() => {
    tableEmitter.addListener(tableBodyScrollEmitKey, setScrollLeft);
    return () => {
      tableEmitter.removeListener(tableBodyScrollEmitKey, setScrollLeft);
    };
  }, []);

  return (
    <div
      className={`${cssPrefix}-header`}
      ref={ref}
      style={scroll && scroll.y && { overflow: 'hidden scroll' }}
    >
      <table style={{ width: scroll && scroll.x }}>
        <colgroup>
          {genColumns
            .filter(v => v.isEndColumn)
            .map((column, columnIndex) => (
              <col
                key={columnIndex}
                style={{ width: column.width, minWidth: column.width }}
              />
            ))}
        </colgroup>
        <thead>
          {originColumns.map((columns, columnsIndex) => {
            return (
              <tr key={columnsIndex}>
                {columns.map((column, columnIndex) => {
                  return (
                    <th
                      colSpan={column.colSpan == 1 ? undefined : column.colSpan}
                      rowSpan={column.rowSpan == 1 ? undefined : column.rowSpan}
                      className={
                        !column.children || column.children.length <= 0
                          ? `${cssPrefix}-cell-last`
                          : ''
                      }
                      key={columnIndex}
                    >
                      <TableCell column={column} renderType="header" />
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default TableHeader;
