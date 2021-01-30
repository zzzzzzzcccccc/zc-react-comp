import React, { FC, useEffect, useRef } from 'react';
import { BaseTableHeaderProps, cssPrefix, ITheadColumn } from './index';
import classNames from 'classnames';
import { tableEmitter, tableBodyScrollEmitKey } from './tableUitls';
import TableCell from './TableCell';
import { Resizable, ResizeCallbackData } from 'react-resizable';

const TableHeader: FC<BaseTableHeaderProps> = ({
  originColumns,
  genColumns,
  scroll,
  onResize,
  style,
}) => {
  const ref = useRef<HTMLDivElement>();
  const tableRef = useRef<HTMLTableElement>();

  const setScrollLeft = (scrollLeft: number) => {
    ref && ref.current && (ref.current.scrollLeft = scrollLeft);
  };

  const handleResize = (column: ITheadColumn) => (e:React.SyntheticEvent, data: ResizeCallbackData): void => {
    e.stopPropagation();
    if (data.size.width < 20) {
      return;
    }
    let currentIndex: number;
    for (let i = 0; i < genColumns.length; i++) {
      if (genColumns[i].dataIndex === column.dataIndex) {
        currentIndex = i;
        break;
      }
    }
    onResize && onResize(currentIndex, data.size.width);
  }

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
      style={{ ...style, ...scroll && scroll.y && { overflow: 'hidden scroll' } }}
    >
      <table style={{ width: scroll && scroll.x }} ref={tableRef}>
        <colgroup>
          {genColumns.map((column, columnIndex) => (
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
                  if ((!column.children || column.children.length <= 0) && column.resize && column.width && typeof column.width === "number") {
                    return (
                      <Resizable width={column.width}
                                 key={columnIndex}
                                 onResize={handleResize(column)}
                                 draggableOpts={{ enableUserSelectHack: false }}
                                 height={0}>
                        <th {...getThProps(column)}>
                          <TableCell column={column} renderType="header" />
                        </th>
                      </Resizable>
                    )
                  }
                  return (
                    <th key={columnIndex}
                        {...getThProps(column)}>
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

const getThProps = (column: ITheadColumn) => ({
  colSpan: column.colSpan == 1 ? undefined : column.colSpan,
  rowSpan: column.rowSpan == 1 ? undefined : column.rowSpan,
  className: classNames(
    (!column.children || column.children.length === 0) && `${cssPrefix}-cell-last`,
  )
});

export default TableHeader;
